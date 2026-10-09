// Sert le contenu complet d'une visite (étapes, énigmes, réponses), qui n'est plus public :
//   - visite gratuite (price = 0) : à tout le monde ;
//   - visite payante : sur présentation d'une session Stripe payée pour cette visite il y a moins de 24 h ;
//   - mode admin : avec l'en-tête x-admin-code (secret ADMIN_CODE).
//
//   GET ?id=<visite>&session_id=cs_…   -> { tour, expiresAt }  (402 si non payé, 403 si accès expiré)
//   GET ?check_admin=1 + x-admin-code  -> 204 si le code admin est bon, 403 sinon
//
// Remplace verify-session : appelée au retour de Stripe, elle confirme aussi le paiement auprès de
// Stripe si le webhook n'est pas encore passé.
import Stripe from "npm:stripe@17";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import TOURS_DATA from "../_private/tours/index.js";

const TOURS: Record<string, any> = TOURS_DATA;

const ACCESS_HOURS = 24;

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
    apiVersion: "2024-06-20",
    httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

// Comparaison à temps constant (via hash) pour ne pas laisser deviner le code caractère par caractère.
async function isAdmin(code: string | null): Promise<boolean> {
    const expected = Deno.env.get("ADMIN_CODE");
    if (!code || !expected) return false;
    const enc = new TextEncoder();
    const [a, b] = await Promise.all(
        [code, expected].map(async (s) => new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(s)))),
    );
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
    return diff === 0;
}

Deno.serve(async (req) => {
    const headers = corsHeaders(req.headers.get("origin"));
    const json = (body: unknown, status = 200) =>
        new Response(JSON.stringify(body), { status, headers: { ...headers, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") {
        return new Response(null, { headers });
    }

    try {
        const url = new URL(req.url);
        const admin = await isAdmin(req.headers.get("x-admin-code"));

        if (url.searchParams.has("check_admin")) {
            return admin ? new Response(null, { status: 204, headers }) : json({ error: "forbidden" }, 403);
        }

        const tourId = url.searchParams.get("id") ?? "";
        const tour = Object.hasOwn(TOURS, tourId) ? TOURS[tourId] : undefined;
        if (!tour) return json({ error: "unknown_tour" }, 404);
        if (!tour.price || admin) return json({ tour, expiresAt: null });

        // Seules les sessions créées par create-checkout-session (donc présentes dans purchases) comptent.
        const sessionId = url.searchParams.get("session_id");
        if (!sessionId) return json({ error: "payment_required" }, 402);

        const { data: purchase, error } = await supabase
            .from("purchases")
            .select("tour_id, status, paid_at")
            .eq("stripe_session_id", sessionId)
            .maybeSingle();
        if (error) throw error;
        if (!purchase || purchase.tour_id !== tourId) return json({ error: "payment_required" }, 402);

        let paidAt = purchase.paid_at;
        if (purchase.status !== "paid") {
            // Webhook pas encore reçu : on demande directement à Stripe.
            const session = await stripe.checkout.sessions.retrieve(sessionId);
            if (session.payment_status !== "paid") return json({ error: "payment_required" }, 402);

            paidAt = new Date().toISOString();
            const { error: dbError } = await supabase
                .from("purchases")
                .update({
                    status: "paid",
                    paid_at: paidAt,
                    customer_email: session.customer_details?.email ?? null,
                })
                .eq("stripe_session_id", sessionId);
            if (dbError) console.error("Failed to update purchase record:", dbError);
        }

        const expiresAt = new Date(paidAt).getTime() + ACCESS_HOURS * 3600 * 1000;
        if (Date.now() > expiresAt) return json({ error: "access_expired" }, 403);

        return json({ tour, expiresAt });
    } catch (err) {
        console.error(err);
        return json({ error: "server_error" }, 500);
    }
});
