// Génère le catalogue public du site (data/catalog.js) à partir des visites privées
// (supabase/functions/_private/tours/) : uniquement ce qui s'affiche avant de jouer
// (titre, thème, image, guide, description, prix), jamais les étapes, énigmes ni réponses.
//
//   node scripts/build-catalog.mjs

import { writeFileSync } from 'node:fs';
import TOURS from '../supabase/functions/_private/tours/index.js';

const OUT = new URL('../data/catalog.js', import.meta.url);

const lines = [
    '// Généré par scripts/build-catalog.mjs — ne pas modifier à la main.',
    "// Aperçu public des visites ; le contenu complet est servi par la fonction get-tour."
];
for (const [id, t] of Object.entries(TOURS)) {
    const preview = {
        title: t.title,
        theme: t.theme,
        image: t.image,
        price: t.price,
        defaultLang: t.defaultLang,
        guide: t.guide,
        desc: t.desc,
        stepCount: t.steps.length
    };
    lines.push(`TOURS[${JSON.stringify(id)}] = ${JSON.stringify(preview, null, 4)};`);
}
writeFileSync(OUT, lines.join('\n') + '\n');
console.log(`${Object.keys(TOURS).length} visites écrites dans data/catalog.js`);
