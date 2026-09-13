TOURS['alsace'] = {
    title: { fr: "La vieille fable alsacienne", en: "The Old Alsatian Fable" },
    theme: { fr: "🎄 Sur les traces de Saint Nicolas & du Père Fouettard", en: "🎄 Following St. Nicholas & Knecht Ruprecht" },
    image: "colmar.jpg",
    defaultLang: 'fr',
    guide: {
        avatar: "🦩",
        name: { fr: "Barnabé la Cigogne", en: "Barnabé the Stork" },
        secretLabel: { fr: "Le Secret de Barnabé", en: "Barnabé's Secret" }
    },
    desc: {
        fr: "Salut l'équipe ! Moi c'est Barnabé, la cigogne officielle de Colmar ! Suivez-moi à travers le centre historique, je vais vous faire découvrir mes endroits secrets préférés et les plus beaux trésors de la ville !",
        en: "Hi team! I'm Barnabé, Colmar's official stork! Follow me through the historic center, I'll show you my favorite secret spots and monuments!"
    },
    steps: [
        {
            title: { fr: "Étape 1 : La Collégiale Saint-Martin", en: "Step 1: St. Martin's Church" },
            coords: { lat: 48.0772, lng: 7.3582 },

            location_text: {
                fr: "Volons jusqu'à la Place de la Cathédrale ! Retrouvez-moi juste devant le portail Sud de la grande église en pierre rose.",
                en: "Let's fly to Church Square! Meet me in front of the South portal of the big pink stone church."
            },

            riddle: {
                fr: "Observez bien les sculptures autour de la porte. L'une des figures tient un outil tranchant de maçon au lieu d'un livre. Quel est cet outil ?",
                en: "Look closely at the sculptures around the door. One figure holds a sharp mason tool instead of a book. What tool is it?"
            },

            photo: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=800",

            history: {
                fr: "Cette hachette (ou erminette) rappelle le rôle clé des tailleurs de pierre ! En bâtissant la Collégiale entre 1234 et 1365, ces artisans gravaient leur marque personnelle dans le grès rose pour percevoir leur salaire. Une vraie signature d'artiste du Moyen Âge !",
                en: "This axe symbolizes the crucial role of medieval stonemasons who built St. Martin's Church between 1234 and 1365. Masons carved personal marks on every stone to get paid!"
            },

            hint1: { fr: "Barnabé chuchote : Regardez la voûte sculptée au-dessus du portail. Cet outil a un manche et sert à tailler la pierre !", en: "Look at the arch above the door. It's a cutting tool with a handle!" },
            hint2: { fr: "Barnabé te donne le mot exact : HACHE", en: "Barnabé gives you the word: AXE" },
            answer: ["hache", "l'hache", "une hache", "erminette", "hachette"]
        },
        {
            title: { fr: "Étape 2 : La Maison des Têtes", en: "Step 2: The House of Heads" },
            coords: { lat: 48.0786, lng: 7.3556 },

            location_text: {
                fr: "Suivez-moi au 19 Rue des Têtes ! On va admirer la plus drôle des façades de Colmar !",
                en: "Follow me to 19 Rue des Têtes! We are going to admire the funniest facade in town!"
            },

            riddle: {
                fr: "Regardez tout au sommet du pignon : la statue en bronze de Bartholdi tient un récipient lié à la boisson la plus célèbre de notre région. Quel est ce produit ?",
                en: "Look at the very top: the bronze statue holds a vessel related to our region's most famous drink. What product is it?"
            },

            photo: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",

            history: {
                fr: "Construite en 1609, cette maison compte 106 masques en pierre grimaçants ! Et devinez quoi ? La statue du Tonnelier au sommet a été sculptée par Auguste Bartholdi en 1902... le génie colmarien qui a aussi créé la Statue de la Liberté à New York !",
                en: "Built in 1609, this house has 106 grimacing stone masks! The top Cooper statue was sculpted by Auguste Bartholdi, the genius from Colmar who created the Statue of Liberty in NY!"
            },

            hint1: { fr: "Barnabé chuchote : C'est la statue du Tonnelier tout en haut... Pensez au breuvage fait avec les raisins alsaciens !", en: "Think of the drink made with local grapes!" },
            hint2: { fr: "Barnabé te donne le mot exact : VIN", en: "Barnabé gives you the word: WINE" },
            answer: ["vin", "le vin", "biere", "la biere", "vin d'alsace"]
        },
        {
            title: { fr: "Étape 3 : Le Koïfhus (Ancienne Douane)", en: "Step 3: The Old Custom House" },
            coords: { lat: 48.0758, lng: 7.3592 },

            location_text: {
                fr: "Direction la Place de l'Ancienne Douane ! C'est le plus ancien bâtiment public profane de la ville !",
                en: "Head to Old Custom Square! It's the oldest public building in town!"
            },

            riddle: {
                fr: "Observez le blason sculpté au-dessus de la grande voûte traversante. Quel animal mythique (mi-aigle, mi-lion) protège les armoiries de Colmar ?",
                en: "Look at the crest above the vaulted passage. Which mythical creature (half eagle, half lion) protects Colmar's seal?"
            },

            photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800",

            history: {
                fr: "Achevé en 1480, le Koïfhus servait de douane où toutes les marchandises étaient taxées. Le Griffon sculpté au-dessus de la voûte est un gardien parfait : il a la force du lion pour protéger le trésor et la vue d'aigle pour repérer les fraudeurs !",
                en: "Completed in 1480, Koïfhus was a customs building. The Griffon above the arch has lion strength to guard money and eagle sight to catch frauds!"
            },

            hint1: { fr: "Barnabé chuchote : C'est une créature légendaire ailée avec un corps de lion !", en: "It's a legendary winged creature with a lion body!" },
            hint2: { fr: "Barnabé te donne le mot exact : GRIFFON", en: "Barnabé gives you the word: GRYPHON" },
            answer: ["griffon", "le griffon", "griffin", "un griffon"]
        },
        {
            title: { fr: "Étape 4 : La Petite Venise", en: "Step 4: Little Venice" },
            coords: { lat: 48.0742, lng: 7.3597 },

            location_text: {
                fr: "Posons-nous sur le pont du Quai de la Poissonnerie, au cœur de la Petite Venise ! C'est mon endroit préféré pour nicher !",
                en: "Let's stop on the bridge at Quai de la Poissonnerie in Little Venice! It's my favorite nesting spot!"
            },

            riddle: {
                fr: "Quel légume traditionnel de notre célèbre choucroute alsacienne était autrefois transporté en masse sur ces barques à fond plat ?",
                en: "Which traditional sauerkraut vegetable was transported by these flat boats?"
            },

            photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",

            history: {
                fr: "C'était le quartier des pêcheurs et des maraîchers ! Ces derniers naviguaient sur la rivière Lauch pour apporter des tonnes de choux directement aux marchés de la ville. Une vraie tradition alsacienne !",
                en: "This was the home of fishermen and boatmen! They navigated the Lauch river to bring tons of cabbages directly to city markets!"
            },

            hint1: { fr: "Barnabé chuchote : C'est le légume vert ou blanc qui sert de base à la Choucroute !", en: "It's the vegetable used to make Sauerkraut!" },
            hint2: { fr: "Barnabé te donne le mot exact : CHOU", en: "Barnabé gives you the word: CABBAGE" },
            answer: ["chou", "le chou", "choux", "les choux"]
        }
    ]
};
