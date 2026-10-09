// Crée une session Stripe Checkout pour débloquer une visite. Le prix vient du champ `price` de la
// visite côté serveur (jamais du client).
import Stripe from "npm:stripe@17";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import TOURS_DATA from "../_private/tours/index.js";

const TOURS: Record<string, any> = TOURS_DATA;

const CURRENCY = "eur";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
    apiVersion: "2024-06-20",
    httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

Deno.serve(async (req) => {
    const headers = corsHeaders(req.headers.get("origin"));

    if (req.method === "OPTIONS") {
        return new Response(null, { headers });
    }
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { ...headers, "Content-Type": "application/json" },
        });
    }

    try {
        const { tourId, returnUrl } = await req.json();
        const tour = Object.hasOwn(TOURS, tourId) ? TOURS[tourId] : undefined;

        if (!tour || !tour.price) {
            return new Response(JSON.stringify({ error: "unknown or free tour" }), {
                status: 400,
                headers: { ...headers, "Content-Type": "application/json" },
            });
        }
        if (!returnUrl || typeof returnUrl !== "string") {
            return new Response(JSON.stringify({ error: "returnUrl is required" }), {
                status: 400,
                headers: { ...headers, "Content-Type": "application/json" },
            });
        }

        const separator = returnUrl.includes("?") ? "&" : "?";

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: CURRENCY,
                        unit_amount: tour.price,
                        product_data: {
                            name: `Accès visite : ${tour.title.fr ?? Object.values(tour.title)[0]}`,
                        },
                    },
                    quantity: 1,
                },
            ],
            metadata: { tourId },
            success_url: `${returnUrl}${separator}game=${encodeURIComponent(tourId)}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${returnUrl}${separator}cancelled=1`,
        });

        const { error: dbError } = await supabase.from("purchases").insert({
            stripe_session_id: session.id,
            tour_id: tourId,
            amount_cents: tour.price,
            currency: CURRENCY,
            status: "pending",
        });
        if (dbError) throw dbError;

        return new Response(JSON.stringify({ url: session.url }), {
            headers: { ...headers, "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: String(err) }), {
            status: 500,
            headers: { ...headers, "Content-Type": "application/json" },
        });
    }
});
