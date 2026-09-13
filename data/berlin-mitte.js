TOURS['berlin-mitte'] = {
    title: { de: "Berlin Mitte: Auf den Spuren der Geschichte" },
    theme: { de: "🐻 Zwischen Mauer, Mythen und Monumenten" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Brandenburg_Gate_Quadriga.jpg/1280px-Brandenburg_Gate_Quadriga.jpg",
    defaultLang: 'de',
    guide: {
        avatar: "🐻",
        name: { de: "Bruno, der Berliner Bär" },
        secretLabel: { de: "Brunos Geheimnis" }
    },
    desc: {
        de: "Hallo zusammen! Ich bin Bruno, der Bär von Berlin — genau wie der auf dem Stadtwappen! Begleitet mich durch die historische Mitte der Stadt, vom Brandenburger Tor bis zum Fernsehturm, und entdeckt meine Lieblingsgeheimnisse!"
    },
    steps: [
        {
            title: { de: "Station 1: Das Brandenburger Tor" },
            coords: { lat: 52.5163, lng: 13.3777 },

            location_text: {
                de: "Fliegen wir zum Pariser Platz! Stellt euch direkt vor das große Sandsteintor mit den zwölf Säulen."
            },

            riddle: {
                de: "Oben auf dem Tor thront ein Bronzewagen, gezogen von mehreren Pferden und gelenkt von einer Göttin. Wie viele Pferde ziehen diese Quadriga?"
            },

            photo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Brandenburg_Gate_Quadriga.jpg/960px-Brandenburg_Gate_Quadriga.jpg",

            history: {
                de: "Das 1791 fertiggestellte Brandenburger Tor wird von der Quadriga gekrönt: ein Wagen mit vier Pferden, gelenkt von der Siegesgöttin Viktoria. Napoleon raubte die Statue 1806 nach Paris — erst 1814 kehrte sie nach Berlin zurück!"
            },

            hint1: { de: "Bruno brummt: Zählt die Beinpaare der Pferde und multipliziert mit zwei..." },
            hint2: { de: "Bruno verrät dir die Zahl: 4" },
            answer: ["4", "vier"]
        },
        {
            title: { de: "Station 2: Der Gendarmenmarkt" },
            coords: { lat: 52.5138, lng: 13.3925 },

            location_text: {
                de: "Weiter geht's zum Gendarmenmarkt, einem der schönsten Plätze Europas! Stellt euch vor das Konzerthaus in der Mitte des Platzes."
            },

            riddle: {
                de: "Das Konzerthaus wird von zwei fast identischen Domen flankiert. Wie hieß der berühmte preußische Baumeister, der dieses Konzerthaus im 19. Jahrhundert entworfen hat?"
            },

            photo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/150418_Konzerthaus_Berlin_Gendarmenmarkt.jpg/960px-150418_Konzerthaus_Berlin_Gendarmenmarkt.jpg",

            history: {
                de: "Das Konzerthaus wurde 1821 von Karl Friedrich Schinkel erbaut, dem bedeutendsten Architekten des Berliner Klassizismus. Es steht zwischen dem Deutschen und dem Französischen Dom — daher auch der Name 'Gendarmenmarkt'."
            },

            hint1: { de: "Bruno brummt: Sein Name beginnt mit 'Sch' und er hat auch die Alte Nationalgalerie mitgeprägt..." },
            hint2: { de: "Bruno verrät dir den Namen: SCHINKEL" },
            answer: ["schinkel", "karl friedrich schinkel"]
        },
        {
            title: { de: "Station 3: Der Fernsehturm" },
            coords: { lat: 52.5208, lng: 13.4094 },

            location_text: {
                de: "Ab zum Alexanderplatz! Sucht den 368 Meter hohen Turm mit der großen silbernen Kugel."
            },

            riddle: {
                de: "Wenn die Sonne auf die Kugel des Fernsehturms scheint, erscheint ein Lichtmuster in Form eines christlichen Symbols. Die Ost-Berliner gaben diesem Effekt einen spöttischen Spitznamen mit Bezug auf ein hohes kirchliches Oberhaupt — wie lautet er?"
            },

            photo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Berlin_Alexanderplatz_Fernsehturm.JPG",

            history: {
                de: "Der 1969 eröffnete Fernsehturm sollte ein sozialistisches Prestigeobjekt sein — ganz ohne Religion! Doch das Sonnenlicht auf der Kugel erzeugt ein Kreuz. Die Berliner nannten es spöttisch die 'Rache des Papstes', da sich das Kreuz partout nicht wegpolieren ließ."
            },

            hint1: { de: "Bruno brummt: Es ist ein Wortspiel mit dem Oberhaupt der katholischen Kirche und dem Wort 'Rache'..." },
            hint2: { de: "Bruno verrät dir die Antwort: RACHE DES PAPSTES" },
            answer: ["rache des papstes", "die rache des papstes", "papstes rache"]
        },
        {
            title: { de: "Station 4: Checkpoint Charlie" },
            coords: { lat: 52.5077, lng: 13.3904 },

            location_text: {
                de: "Letzte Station: Checkpoint Charlie, der berühmteste Grenzübergang des Kalten Krieges! Sucht das kleine weiße Wachhäuschen mitten auf der Straße."
            },

            riddle: {
                de: "Der Name 'Charlie' kommt aus dem NATO-Alphabet, in dem jeder Buchstabe für ein Wort steht (A=Alpha, B=Bravo, C=Charlie...). Für welchen einzelnen Buchstaben steht 'Charlie'?"
            },

            photo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Checkpoint_Charlie_Berlin.jpg/960px-Checkpoint_Charlie_Berlin.jpg",

            history: {
                de: "Checkpoint Charlie war während des Kalten Krieges der dritte alliierte Kontrollpunkt in Berlin — nach Checkpoint Alpha und Checkpoint Bravo. Der Name stammt aus dem NATO-Buchstabieralphabet, in dem 'C' als 'Charlie' ausgesprochen wird."
            },

            hint1: { de: "Bruno brummt: A, B, C... welcher Buchstabe kommt nach 'Bravo'?" },
            hint2: { de: "Bruno verrät dir den Buchstaben: C" },
            answer: ["c", "charlie"]
        }
    ]
};
