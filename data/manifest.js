// Manifeste des villes et de leurs visites (l'ordre d'affichage suit l'ordre des tableaux ci-dessous).
// Pour ajouter une visite : créer un fichier data/<id>.js qui fait `TOURS['<id>'] = {...}`,
// l'inclure dans index.html, puis référencer son id ici dans le bon groupe de ville.
CITIES.push(
    {
        id: 'colmar',
        name: { fr: 'Colmar', en: 'Colmar', de: 'Colmar' },
        flag: '🇫🇷',
        tours: ['alsace', 'vigne']
    },
    {
        id: 'paris',
        name: { fr: 'Paris', en: 'Paris', de: 'Paris' },
        flag: '🇫🇷',
        tours: [
            'paris-1er', 'paris-2e', 'paris-3e', 'paris-4e', 'paris-5e',
            'paris-6e', 'paris-7e', 'paris-8e', 'paris-9e', 'paris-10e',
            'paris-11e', 'paris-12e', 'paris-13e', 'paris-14e', 'paris-15e',
            'paris-16e', 'paris-17e', 'paris-18e', 'paris-19e', 'paris-20e'
        ]
    },
    {
        id: 'berlin',
        name: { fr: 'Berlin', en: 'Berlin', de: 'Berlin' },
        flag: '🇩🇪',
        tours: ['berlin-mitte']
    }
);
