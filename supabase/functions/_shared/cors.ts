// Origines autorisées à appeler ces fonctions depuis un navigateur.
// Ajouter ici tout domaine supplémentaire (domaine perso, prévisualisation locale...).
const ALLOWED_ORIGINS = [
    "https://thomasburg-gif.github.io",
    "http://localhost:8123",
];

export function corsHeaders(origin: string | null): HeadersInit {
    const allowOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    return {
        "Access-Control-Allow-Origin": allowOrigin,
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-admin-code",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Vary": "Origin",
    };
}
