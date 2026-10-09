-- Achats Stripe : un enregistrement par session de paiement Stripe Checkout.
-- Aucun accès public : seules les Edge Functions (clé service_role) lisent/écrivent ici.
create table if not exists public.purchases (
    id uuid primary key default gen_random_uuid(),
    stripe_session_id text not null unique,
    tour_id text not null,
    amount_cents integer not null,
    currency text not null default 'eur',
    customer_email text,
    status text not null default 'pending' check (status in ('pending', 'paid', 'expired', 'failed')),
    created_at timestamptz not null default now(),
    paid_at timestamptz
);

create index if not exists purchases_tour_id_idx on public.purchases (tour_id);
create index if not exists purchases_status_idx on public.purchases (status);

alter table public.purchases enable row level security;
-- Pas de policy = aucun accès via les clés anon/authenticated (PostgREST).
-- Seule la clé service_role (utilisée côté Edge Functions) contourne RLS.
