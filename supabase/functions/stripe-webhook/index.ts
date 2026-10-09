// Source de vérité durable : Stripe appelle cette fonction directement (indépendamment du
// navigateur de l'acheteur) dès qu'un paiement est confirmé. Garantit que purchases reste à jour
// même si l'utilisateur ferme l'onglet avant la redirection de retour vers le site.
import Stripe from "npm:stripe@17";
import { createClient } from "jsr:@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
    apiVersion: "2024-06-20",
    httpClient: Stripe.createFetchHttpClient(),
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";

const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

Deno.serve(async (req) => {
    const signature = req.headers.get("stripe-signature");
    const body = await req.text();

    let event: Stripe.Event;
    try {
        if (!signature) throw new Error("Missing stripe-signature header");
        event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return new Response(`Webhook Error: ${err}`, { status: 400 });
    }

    if (
        event.type === "checkout.session.completed" ||
        event.type === "checkout.session.async_payment_succeeded"
    ) {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.payment_status === "paid") {
            const { error } = await supabase
                .from("purchases")
                .update({
                    status: "paid",
                    paid_at: new Date().toISOString(),
                    customer_email: session.customer_details?.email ?? null,
                })
                .eq("stripe_session_id", session.id);
            if (error) console.error("Failed to update purchase record from webhook:", error);
        }
    }

    if (event.type === "checkout.session.expired") {
        const session = event.data.object as Stripe.Checkout.Session;
        await supabase
            .from("purchases")
            .update({ status: "expired" })
            .eq("stripe_session_id", session.id);
    }

    return new Response(JSON.stringify({ received: true }), {
        headers: { "Content-Type": "application/json" },
    });
});
