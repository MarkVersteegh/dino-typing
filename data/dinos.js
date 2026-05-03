(function () {
    const localCard = (id) => `data/images/cards/${id}.png`;
    const localHero = (id) => `data/images/heroes/${id}.png`;
    const paleoCreature = localCard;
    const heroCandidates = (id) => [
        localHero(id),
        localCard(id),
        `https://cdn.paleo.gg/games/jwe2/images/dino/${id}.png`,
        `https://cdn.paleo.gg/games/jwe/images/dino/${id}.png`,
        `https://cdn.paleo.gg/games/jwtg/images/creature/${id}.png`,
        `https://cdn.paleo.gg/games/jwplay/images/dino/${id}.png`,
        `https://cdn.paleo.gg/games/jwa/images/creature/${id}.png`
    ];
    const external = (id, name) => ({
        dinosaurPicturesUrl: `https://dinosaurpictures.org/${name.replace(/\s+/g, '-')}-pictures`,
        paleoDinoDbUrl: `https://www.paleo.gg/games/jurassic-world-evolution/dino-db/${id}`
    });

    window.DINO_DB = [
        {
            id: 'allosaurus',
            name: 'Allosaurus',
            rarity: 'common',
            unlockOrder: 1,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Allosauridae' },
                { label: 'Genus', value: 'Allosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '4 m' },
                { label: 'Length', value: '12 m' },
                { label: 'Weight', value: '2,300 kg' },
                { label: 'Base Appeal', value: '152' },
                { label: 'Appeal / $1MM', value: '81.2' },
                { label: 'Appeal / Hectare', value: '59.4' },
                { label: 'Lifespan', value: '46 - 72' },
                { label: 'Resilience', value: '41' },
                { label: 'Attack', value: '107' },
                { label: 'Defence', value: '33' },
                { label: 'Medical Dart Resistance', value: '123' },
                { label: 'Sedative Resistance', value: '123' },
                { label: 'Poison Resistance', value: '150' },
                { label: 'Comfort threshold', value: '80%' },
                { label: 'Grassland', value: '18,900 m2 / 74%' },
                { label: 'Forest', value: '6,700 m2 / 26%' },
                { label: 'Social Group', value: '1 - 1' },
                { label: 'Ideal Population', value: '0 - 16' },
                { label: 'Incubation', value: '7m 31s - 8m 20s' },
                { label: 'Incubation Cost', value: '1,873,000' }
            ],
            sections: {
                description: 'Allosaurus was a large theropod dinosaur. An unusually large number of fossil specimens makes the Allosaurus one of the best studied dinosaurs of all time. Its name means "different lizard". Notable features of the Allosaurus are a very strong skull and the ability to open its jaws extremely wide. It had a relatively weak bite force, unlike the largest theropods.',
                discovery: 'The first incomplete Allosaurus fossils were discovered in 1869. Major operations in the 1960s then uncovered over 45 specimens at the Cleveland-Lloyd Dinosaur Quarry.'
            },
            images: { card: paleoCreature('allosaurus'), heroCandidates: heroCandidates('allosaurus') },
            external: external('allosaurus', 'Allosaurus')
        },
        {
            id: 'apatosaurus',
            name: 'Apatosaurus',
            rarity: 'common',
            unlockOrder: 2,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Diplodocidae' },
                { label: 'Genus', value: 'Apatosaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '5 m' },
                { label: 'Length', value: '25 m' },
                { label: 'Weight', value: '38,000 kg' },
                { label: 'Base Appeal', value: '90' },
                { label: 'Appeal / $1MM', value: '105.8' },
                { label: 'Appeal / Hectare', value: '152.5' },
                { label: 'Lifespan', value: '71 - 113' },
                { label: 'Resilience', value: '57' },
                { label: 'Attack', value: '51' },
                { label: 'Defence', value: '0' },
                { label: 'Medical Dart Resistance', value: '234' },
                { label: 'Sedative Resistance', value: '234' },
                { label: 'Poison Resistance', value: '250' },
                { label: 'Comfort threshold', value: '45%' },
                { label: 'Grassland', value: '15,300 m2 / 52%' },
                { label: 'Forest', value: '14,200 m2 / 48%' },
                { label: 'Social Group', value: '3 - 7' },
                { label: 'Ideal Population', value: '0 - 22' },
                { label: 'Incubation', value: '8m 15s - 9m 10s' },
                { label: 'Incubation Cost', value: '851,000' }
            ],
            sections: {
                description: "Apatosaurus is a large sauropod with a long neck and corresponding tail for balance. Its name means 'deceptive lizard'. Like others in its family, the Apatosaurus's head is small in comparison with its body.",
                discovery: 'Apatosaurus was named from a nearly complete skeleton extracted from the eastern foothills of the Rocky Mountains in Colorado in 1877. So far, two species of Apatosaurus have been identified. The first from the original find, and the second from a later find in Utah.'
            },
            images: { card: paleoCreature('apatosaurus'), heroCandidates: heroCandidates('apatosaurus') },
            external: external('apatosaurus', 'Apatosaurus')
        },
        {
            id: 'euoplocephalus',
            name: 'Euoplocephalus',
            rarity: 'common',
            unlockOrder: 3,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ankylosauridae' },
                { label: 'Genus', value: 'Euoplocephalus' },
                { label: 'Bio Group', value: 'Armored Herbivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '2,800 kg' },
                { label: 'Base Appeal', value: '38' },
                { label: 'Appeal / $1MM', value: '133.3' },
                { label: 'Appeal / Hectare', value: '126.7' },
                { label: 'Lifespan', value: '37 - 64' },
                { label: 'Resilience', value: '36' },
                { label: 'Attack', value: '52' },
                { label: 'Defence', value: '46' },
                { label: 'Medical Dart Resistance', value: '76' },
                { label: 'Sedative Resistance', value: '76' },
                { label: 'Poison Resistance', value: '100' },
                { label: 'Comfort threshold', value: '60%' },
                { label: 'Grassland', value: '3,500 m2 / 29%' },
                { label: 'Forest', value: '8,500 m2 / 71%' },
                { label: 'Social Group', value: '2 - 6' },
                { label: 'Ideal Population', value: '2 - 15' },
                { label: 'Incubation', value: '2m 48s - 3m 5s' },
                { label: 'Incubation Cost', value: '285,000' }
            ],
            sections: {
                description: "The Euoplocephalus lives up to its name, which means 'well-armed head'. A distinctive feature of Euoplocephalus is its armored eyelids, which offered protection against predators. Like other Ankylosaurids, Euoplocephalus had a powerful club that it used for defense.",
                discovery: 'The first Euoplocephalus was discovered in 1897 by the Canadian paleontologist Lawrence Morris Lambe, in the area now known as the Dinosaur Provincial Park. The specimen was initially named Stereocephalus tutus, but was renamed Euoplocephalus in 1910.'
            },
            images: { card: paleoCreature('euoplocephalus'), heroCandidates: heroCandidates('euoplocephalus') },
            external: external('euoplocephalus', 'Euoplocephalus')
        },
        {
            id: 'gallimimus',
            name: 'Gallimimus',
            rarity: 'common',
            unlockOrder: 4,
            stats: [
                { label: 'Diet', value: 'Herbivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ornithomimidae' },
                { label: 'Genus', value: 'Gallimimus' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '4 m' },
                { label: 'Weight', value: '400 kg' },
                { label: 'Base Appeal', value: '8' },
                { label: 'Appeal / $1MM', value: '100.0' },
                { label: 'Appeal / Hectare', value: '149.0' },
                { label: 'Lifespan', value: '32 - 64' },
                { label: 'Resilience', value: '67' },
                { label: 'Attack', value: '6' },
                { label: 'Defence', value: '0' },
                { label: 'Medical Dart Resistance', value: '60' },
                { label: 'Sedative Resistance', value: '60' },
                { label: 'Poison Resistance', value: '82' },
                { label: 'Comfort threshold', value: '15%' },
                { label: 'Grassland', value: '3,700 m2 / 73%' },
                { label: 'Forest', value: '1,400 m2 / 27%' },
                { label: 'Social Group', value: '1 - 18' },
                { label: 'Ideal Population', value: '0 - 23' },
                { label: 'Incubation', value: '1m 30s - 1m 40s' },
                { label: 'Incubation Cost', value: '80,000' }
            ],
            sections: {
                description: "Gallimimus are an ostrich-like dinosaur known for their speed, which has been compared to that of a cheetah. Their name means 'chicken mimic'. They were one of the larger ornithomimosaurs.",
                discovery: 'The first Gallimimus fossil was discovered in a Polish-Mongolian expedition in the Nemegt Formation in the Gobi Desert. Only one species of this genus has so far been discovered.'
            },
            images: { card: paleoCreature('gallimimus'), heroCandidates: heroCandidates('gallimimus') },
            external: external('gallimimus', 'Gallimimus')
        },
        {
            id: 'iguanodon',
            name: 'Iguanodon',
            rarity: 'common',
            unlockOrder: 5,
            stats: [
                { label: 'Diet', value: 'Herbivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Iguanodontidae' },
                { label: 'Genus', value: 'Iguanodon' },
                { label: 'Bio Group', value: 'Medium Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '3,500 kg' },
                { label: 'Base Appeal', value: '32' },
                { label: 'Appeal / $1MM', value: '106.7' },
                { label: 'Appeal / Hectare', value: '131.3' },
                { label: 'Lifespan', value: '41 - 98' },
                { label: 'Resilience', value: '50' },
                { label: 'Attack', value: '55' },
                { label: 'Defence', value: '18' },
                { label: 'Medical Dart Resistance', value: '82' },
                { label: 'Sedative Resistance', value: '82' },
                { label: 'Poison Resistance', value: '82' },
                { label: 'Comfort threshold', value: '20%' },
                { label: 'Grassland', value: '8,000 m2 / 60%' },
                { label: 'Forest', value: '5,400 m2 / 40%' },
                { label: 'Social Group', value: '1 - 10' },
                { label: 'Ideal Population', value: '1 - 20' },
                { label: 'Incubation', value: '1m 30s - 1m 40s' },
                { label: 'Incubation Cost', value: '300,000' }
            ],
            sections: {
                description: 'Iguanodon was an ornithopod dinosaur from between the mid-Jurassic and late Cretaceous periods. Iguanodon is known for its large, spiked thumbs, which may have helped with defense or feeding.',
                discovery: "Iguanodon was first discovered in 1822 in Tilgate Forest, Cuckfield, England by Gideon Mantell. The find consisted of several fossilized teeth, and later discoveries revealed the true function of Iguanodon's spiked thumb."
            },
            images: { card: paleoCreature('iguanodon'), heroCandidates: heroCandidates('iguanodon') },
            external: external('iguanodon', 'Iguanodon')
        },
        {
            id: 'parasaurolophus',
            name: 'Parasaurolophus',
            rarity: 'common',
            unlockOrder: 6,
            stats: [
                { label: 'Diet', value: 'Herbivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Parasaurolophus' },
                { label: 'Bio Group', value: 'Medium Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '2,500 kg' },
                { label: 'Base Appeal', value: '24' },
                { label: 'Appeal / $1MM', value: '133.3' },
                { label: 'Appeal / Hectare', value: '168.8' },
                { label: 'Lifespan', value: '43 - 102' },
                { label: 'Resilience', value: '51' },
                { label: 'Attack', value: '10' },
                { label: 'Defence', value: '0' },
                { label: 'Medical Dart Resistance', value: '82' },
                { label: 'Sedative Resistance', value: '82' },
                { label: 'Poison Resistance', value: '125' },
                { label: 'Comfort threshold', value: '30%' },
                { label: 'Grassland', value: '7,600 m2 / 59%' },
                { label: 'Forest', value: '5,200 m2 / 41%' },
                { label: 'Social Group', value: '4 - 14' },
                { label: 'Ideal Population', value: '4 - 21' },
                { label: 'Incubation', value: '2m 42s - 3m' },
                { label: 'Incubation Cost', value: '180,000' }
            ],
            sections: {
                description: "Parasaurolophus's crested skull makes this a distinctive dinosaur within Jurassic World. Its name means 'near-crested lizard'. They are able to move on two or four legs.",
                discovery: 'The first identified fossils for Parasaurolophus came from near Sand Creek, along the Red Deer River in Alberta, Canada. Further fossils were later found in New Mexico and Utah.'
            },
            images: { card: paleoCreature('parasaurolophus'), heroCandidates: heroCandidates('parasaurolophus') },
            external: external('parasaurolophus', 'Parasaurolophus')
        },
        {
            id: 'stegosaurus',
            name: 'Stegosaurus',
            rarity: 'common',
            unlockOrder: 7,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Stegosauridae' },
                { label: 'Genus', value: 'Stegosaurus' },
                { label: 'Bio Group', value: 'Armored Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '7,000 kg' },
                { label: 'Base Appeal', value: '34' },
                { label: 'Appeal / $1MM', value: '106.3' },
                { label: 'Appeal / Hectare', value: '96.0' },
                { label: 'Lifespan', value: '49 - 73' },
                { label: 'Resilience', value: '64' },
                { label: 'Attack', value: '75' },
                { label: 'Defence', value: '24' },
                { label: 'Medical Dart Resistance', value: '88' },
                { label: 'Sedative Resistance', value: '88' },
                { label: 'Poison Resistance', value: '100' },
                { label: 'Comfort threshold', value: '55%' },
                { label: 'Grassland', value: '13,700 m2 / 55%' },
                { label: 'Forest', value: '11,100 m2 / 45%' },
                { label: 'Social Group', value: '5 - 9' },
                { label: 'Ideal Population', value: '5 - 15' },
                { label: 'Incubation', value: '4m 21s - 4m 50s' },
                { label: 'Incubation Cost', value: '320,000' }
            ],
            sections: {
                description: "With their distinctive dorsal plates, Stegosaurus is one of the most universally recognized dinosaurs and a popular attraction to Jurassic World parks. Its name means 'roofed lizard'.",
                discovery: 'Stegosaurus fossils have been recovered from North America and Portugal. They were first described during the Bone Wars from remains extracted from the Morrison Formation in Colorado.'
            },
            images: { card: paleoCreature('stegosaurus'), heroCandidates: heroCandidates('stegosaurus') },
            external: external('stegosaurus', 'Stegosaurus')
        },
        {
            id: 'suchomimus',
            name: 'Suchomimus',
            rarity: 'common',
            unlockOrder: 8,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Spinosauridae' },
                { label: 'Genus', value: 'Suchomimus' },
                { label: 'Bio Group', value: 'Large Piscivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '11 m' },
                { label: 'Weight', value: '5,000 kg' },
                { label: 'Base Appeal', value: '96' },
                { label: 'Appeal / $1MM', value: '78.2' },
                { label: 'Appeal / Hectare', value: '42.7' },
                { label: 'Lifespan', value: '46 - 62' },
                { label: 'Resilience', value: '34' },
                { label: 'Attack', value: '85' },
                { label: 'Defence', value: '31' },
                { label: 'Medical Dart Resistance', value: '131' },
                { label: 'Sedative Resistance', value: '131' },
                { label: 'Poison Resistance', value: '150' },
                { label: 'Comfort threshold', value: '65%' },
                { label: 'Grassland', value: '18,200 m2 / 54%' },
                { label: 'Forest', value: '4,600 m2 / 14%' },
                { label: 'Water', value: '10,920 m2 / 32%' },
                { label: 'Social Group', value: '1 - 2' },
                { label: 'Ideal Population', value: '0 - 16' },
                { label: 'Incubation', value: '5m 24s - 6m' },
                { label: 'Incubation Cost', value: '1,228,000' }
            ],
            sections: {
                description: "Suchomimus was a spinosaurid dinosaur found in Africa. Its name means 'crocodile mimic' because of its crocodile-like snout, which was better suited for hunting fish than typical theropod skulls.",
                discovery: 'Suchomimus fossils were first recovered in 1997 from Gadoufaoua in Niger. Other partial skeletons and fragments have been found in the wider Erlhaz Formation since then.'
            },
            images: { card: paleoCreature('suchomimus'), heroCandidates: heroCandidates('suchomimus') },
            external: external('suchomimus', 'Suchomimus')
        },
        {
            id: 'velociraptor',
            name: 'Velociraptor',
            rarity: 'common',
            unlockOrder: 9,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Velociraptor' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '4 m' },
                { label: 'Weight', value: '150 kg' },
                { label: 'Base Appeal', value: '49' },
                { label: 'Appeal / $1MM', value: '131.4' },
                { label: 'Appeal / Hectare', value: '98.0' },
                { label: 'Lifespan', value: '41 - 70' },
                { label: 'Resilience', value: '84' },
                { label: 'Attack', value: '60' },
                { label: 'Defence', value: '16' },
                { label: 'Medical Dart Resistance', value: '60' },
                { label: 'Sedative Resistance', value: '60' },
                { label: 'Poison Resistance', value: '155' },
                { label: 'Comfort threshold', value: '80%' },
                { label: 'Grassland', value: '14,800 m2 / 74%' },
                { label: 'Forest', value: '5,200 m2 / 26%' },
                { label: 'Social Group', value: '2 - 6' },
                { label: 'Ideal Population', value: '0 - 20' },
                { label: 'Incubation', value: '3m 36s - 4m' },
                { label: 'Incubation Cost', value: '373,000' }
            ],
            sections: {
                description: 'Velociraptors are one of the most dangerous animals in Jurassic World. Their history with InGen has been troubled, but they later became part of the IBRIS project where Owen Grady trained them to obey commands.',
                discovery: "In 1923, an American Museum of Natural History expedition to the Gobi Desert recovered the first Velociraptor fossil. Later discoveries included the famous 'fighting dinosaurs' specimen."
            },
            images: { card: paleoCreature('velociraptor'), heroCandidates: heroCandidates('velociraptor') },
            external: external('velociraptor', 'Velociraptor')
        },
        {
            id: 'ankylosaurus',
            name: 'Ankylosaurus',
            rarity: 'common',
            unlockOrder: 10,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ankylosauridae' },
                { label: 'Genus', value: 'Ankylosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '8,000 kg' }
            ],
            sections: {
                description: 'Ankylosaurus was the largest known ankylosaur. Its entire back was covered with large bony plates and spikes, and it possessed a heavy tail club capable of breaking the leg bones of large predators.',
                discovery: 'Ankylosaurus fossils were first discovered in Montana in 1906 by Barnum Brown during an expedition for the American Museum of Natural History.'
            },
            images: { card: paleoCreature('ankylosaurus'), heroCandidates: heroCandidates('ankylosaurus') },
            external: external('ankylosaurus', 'Ankylosaurus')
        },
        {
            id: 'brachiosaurus',
            name: 'Brachiosaurus',
            rarity: 'common',
            unlockOrder: 11,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Brachiosauridae' },
                { label: 'Genus', value: 'Brachiosaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '13 m' },
                { label: 'Length', value: '26 m' },
                { label: 'Weight', value: '56,000 kg' }
            ],
            sections: {
                description: 'Brachiosaurus was one of the tallest dinosaurs ever discovered. Unlike most sauropods, its front legs were longer than its hind legs, giving it a giraffe-like posture to reach treetop foliage.',
                discovery: 'First described in 1903 from fossils found in the Morrison Formation of Colorado by Elmer Riggs. A nearly complete specimen was later excavated from Tendaguru, Tanzania.'
            },
            images: { card: paleoCreature('brachiosaurus'), heroCandidates: heroCandidates('brachiosaurus') },
            external: external('brachiosaurus', 'Brachiosaurus')
        },
        {
            id: 'diplodocus',
            name: 'Diplodocus',
            rarity: 'common',
            unlockOrder: 12,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Diplodocidae' },
                { label: 'Genus', value: 'Diplodocus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '5 m' },
                { label: 'Length', value: '27 m' },
                { label: 'Weight', value: '16,000 kg' }
            ],
            sections: {
                description: 'Diplodocus was one of the longest dinosaurs known, with a famously long whip-like tail that may have been used for defence or communication. Its neck was held horizontally rather than upright.',
                discovery: 'The first Diplodocus fossils were found in 1877 in Colorado. Andrew Carnegie funded famous casts of the skeleton that were distributed to museums around the world in the early 1900s.'
            },
            images: { card: paleoCreature('diplodocus'), heroCandidates: heroCandidates('diplodocus') },
            external: external('diplodocus', 'Diplodocus')
        },
        {
            id: 'pachycephalosaurus',
            name: 'Pachycephalosaurus',
            rarity: 'common',
            unlockOrder: 13,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Pachycephalosauridae' },
                { label: 'Genus', value: 'Pachycephalosaurus' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '4.5 m' },
                { label: 'Weight', value: '450 kg' }
            ],
            sections: {
                description: 'Pachycephalosaurus had a domed skull up to 25 cm thick, which it likely used in head-butting contests with rivals. It was one of the last non-avian dinosaurs to exist before the mass extinction.',
                discovery: 'Described in 1931 from fragmentary fossil remains found in Montana and Wyoming. Its name means "thick-headed lizard".'
            },
            images: { card: paleoCreature('pachycephalosaurus'), heroCandidates: heroCandidates('pachycephalosaurus') },
            external: external('pachycephalosaurus', 'Pachycephalosaurus')
        },
        {
            id: 'pteranodon',
            name: 'Pteranodon',
            rarity: 'common',
            unlockOrder: 14,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Aviary' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Pteranodontidae' },
                { label: 'Genus', value: 'Pteranodon' },
                { label: 'Bio Group', value: 'Flying Reptile' },
                { label: 'Wingspan', value: '7 m' },
                { label: 'Weight', value: '20 kg' }
            ],
            sections: {
                description: 'Pteranodon was a large pterosaur with a distinctive backward-pointing head crest. Despite its association with dinosaurs in popular culture, Pteranodon was technically a pterosaur — a flying reptile that lived alongside dinosaurs.',
                discovery: 'First described in 1876 by Othniel Charles Marsh from specimens found in the Niobrara Formation of Kansas. Hundreds of specimens are now known, making it one of the best-studied pterosaurs.'
            },
            images: { card: paleoCreature('pteranodon'), heroCandidates: heroCandidates('pteranodon') },
            external: external('pteranodon', 'Pteranodon')
        },
        {
            id: 'tyrannosaurus',
            name: 'Tyrannosaurus',
            rarity: 'common',
            unlockOrder: 15,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Tyrannosauridae' },
                { label: 'Genus', value: 'Tyrannosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '4 m' },
                { label: 'Length', value: '13 m' },
                { label: 'Weight', value: '8,000 kg' }
            ],
            sections: {
                description: 'Tyrannosaurus Rex is the most famous dinosaur of all time and one of the largest land predators ever. With a bite force of over 35,000 Newtons — stronger than any known animal — it was a formidable apex predator of its time.',
                discovery: 'The first T. rex skeleton was found in 1902 by Barnum Brown in Montana. The species was formally described by Henry Fairfield Osborn in 1905 and quickly became a scientific and cultural icon.'
            },
            images: { card: paleoCreature('tyrannosaurus'), heroCandidates: heroCandidates('tyrannosaurus') },
            external: external('tyrannosaurus', 'Tyrannosaurus')
        },
        {
            id: 'troodon',
            name: 'Troodon',
            rarity: 'common',
            unlockOrder: 16,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Troodontidae' },
                { label: 'Genus', value: 'Troodon' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '2.4 m' },
                { label: 'Weight', value: '50 kg' }
            ],
            sections: {
                description: 'Troodon was one of the most intelligent dinosaurs relative to its body size, with a brain-to-body ratio comparable to modern birds. Its large forward-facing eyes suggest excellent night vision, making it likely a nocturnal hunter.',
                discovery: 'Known from a single tooth found in 1856, Troodon was long a mystery genus. More complete specimens from the Two Medicine Formation of Montana were described in the 1980s and 1990s.'
            },
            images: { card: paleoCreature('troodon'), heroCandidates: heroCandidates('troodon') },
            external: external('troodon', 'Troodon')
        },
        {
            id: 'maiasaura',
            name: 'Maiasaura',
            rarity: 'common',
            unlockOrder: 17,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Maiasaura' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Maiasaura, meaning "good mother lizard", was the first dinosaur found associated with eggs, embryos, juveniles and adults together — proving that some dinosaurs cared for their young. It lived in large herds for protection.',
                discovery: 'Discovered by Jack Horner and Bob Makela in Montana in 1978. The find revolutionised our understanding of dinosaur behaviour and parental care.'
            },
            images: { card: paleoCreature('maiasaura'), heroCandidates: heroCandidates('maiasaura') },
            external: external('maiasaura', 'Maiasaura')
        },
        {
            id: 'dilophosaurus',
            name: 'Dilophosaurus',
            rarity: 'common',
            unlockOrder: 18,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Jurassic' },
                { label: 'Family', value: 'Dilophosauridae' },
                { label: 'Genus', value: 'Dilophosaurus' },
                { label: 'Bio Group', value: 'Medium Carnivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '400 kg' }
            ],
            sections: {
                description: 'Dilophosaurus was one of the earliest and largest carnivorous dinosaurs of the Jurassic period, recognisable by the two thin bony crests on top of its skull. Despite its portrayal in Jurassic Park, there is no fossil evidence it could spit venom or had a neck frill.',
                discovery: 'First described in 1954 from fossils found in Arizona. The name means "two-crested lizard". Additional material found in China suggests a wide distribution.'
            },
            images: { card: paleoCreature('dilophosaurus'), heroCandidates: heroCandidates('dilophosaurus') },
            external: external('dilophosaurus', 'Dilophosaurus')
        },
        {
            id: 'ouranosaurus',
            name: 'Ouranosaurus',
            rarity: 'common',
            unlockOrder: 19,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Ouranosaurus' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Ouranosaurus was a hadrosaurid-like iguanodontid from Niger with a remarkable sail or hump along its back formed by elongated neural spines. The sail may have regulated body temperature or been used for display.',
                discovery: 'Described in 1976 by French palaeontologist Philippe Taquet from two well-preserved skeletons found in the Sahara Desert. Its name means "brave monitor lizard".'
            },
            images: { card: paleoCreature('ouranosaurus'), heroCandidates: heroCandidates('ouranosaurus') },
            external: external('ouranosaurus', 'Ouranosaurus')
        },
        {
            id: 'corythosaurus',
            name: 'Corythosaurus',
            rarity: 'common',
            unlockOrder: 20,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Corythosaurus' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Corythosaurus was a crested hadrosaur with a helmet-shaped crest on its head resembling a Corinthian helmet. The hollow crest was likely used to produce resonant calls for communication within the herd.',
                discovery: 'First described by Barnum Brown in 1914 from specimens found in the Horseshoe Canyon Formation of Alberta, Canada. Some skeletons preserve skin impressions showing a pebbly texture.'
            },
            images: { card: paleoCreature('corythosaurus'), heroCandidates: heroCandidates('corythosaurus') },
            external: external('corythosaurus', 'Corythosaurus')
        },
        {
            id: 'carnotaurus',
            name: 'Carnotaurus',
            rarity: 'rare',
            unlockOrder: 21,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Abelisauridae' },
                { label: 'Genus', value: 'Carnotaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '1,500 kg' }
            ],
            sections: {
                description: 'Carnotaurus was a large, lightly built predator from the late Cretaceous of South America. Its name means "meat-eating bull", referring to the distinctive horns above its eyes. It had unusually small forelimbs, even compared to Tyrannosaurus Rex.',
                discovery: 'Only a single skeleton of Carnotaurus has ever been found, discovered in Argentina in 1984 by José Bonaparte. The specimen was remarkable for preserving extensive skin impressions.'
            },
            images: { card: paleoCreature('carnotaurus'), heroCandidates: heroCandidates('carnotaurus') },
            external: external('carnotaurus', 'Carnotaurus')
        },
        {
            id: 'spinosaurus',
            name: 'Spinosaurus',
            rarity: 'rare',
            unlockOrder: 22,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Spinosauridae' },
                { label: 'Genus', value: 'Spinosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '7 m' },
                { label: 'Length', value: '18 m' },
                { label: 'Weight', value: '23,000 kg' }
            ],
            sections: {
                description: 'Spinosaurus is the largest known carnivorous dinosaur, surpassing even Tyrannosaurus Rex in length. It had a distinctive sail along its back formed by elongated neural spines, and was highly adapted for aquatic hunting with short hindlimbs and dense bones.',
                discovery: 'Spinosaurus was first described in 1915 from Egyptian fossils that were later destroyed in World War II. New specimens discovered in Morocco in 2014 revealed its semi-aquatic lifestyle.'
            },
            images: { card: paleoCreature('spinosaurus'), heroCandidates: heroCandidates('spinosaurus') },
            external: external('spinosaurus', 'Spinosaurus')
        },
        {
            id: 'triceratops',
            name: 'Triceratops',
            rarity: 'rare',
            unlockOrder: 23,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ceratopsidae' },
                { label: 'Genus', value: 'Triceratops' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '12,000 kg' }
            ],
            sections: {
                description: 'Triceratops is one of the most recognizable dinosaurs, with its iconic three-horned face and large bony frill. It was among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.',
                discovery: 'The first Triceratops fossil was discovered in 1887 near Denver, Colorado. Initially mistaken for a large extinct bison, it was correctly identified by Othniel Charles Marsh in 1889.'
            },
            images: { card: paleoCreature('triceratops'), heroCandidates: heroCandidates('triceratops') },
            external: external('triceratops', 'Triceratops')
        },
        {
            id: 'utahraptor',
            name: 'Utahraptor',
            rarity: 'rare',
            unlockOrder: 24,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Utahraptor' },
                { label: 'Bio Group', value: 'Medium Carnivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '500 kg' }
            ],
            sections: {
                description: 'Utahraptor is the largest known dromaeosaurid, or "raptor" dinosaur. It had a massive sickle-shaped killing claw on each foot measuring up to 24 cm. Unlike the smaller Velociraptor, Utahraptor was a formidable apex predator.',
                discovery: 'Utahraptor was discovered in 1975 in Utah and formally described in 1993. Its discovery conveniently came shortly after the release of Jurassic Park, which featured similar large raptors.'
            },
            images: { card: paleoCreature('utahraptor'), heroCandidates: heroCandidates('utahraptor') },
            external: external('utahraptor', 'Utahraptor')
        },
        {
            id: 'dracorex',
            name: 'Dracorex',
            rarity: 'rare',
            unlockOrder: 25,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Pachycephalosauridae' },
                { label: 'Genus', value: 'Dracorex' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '1.5 m' },
                { label: 'Length', value: '3.5 m' },
                { label: 'Weight', value: '200 kg' }
            ],
            sections: {
                description: 'Dracorex hogwartsia — named after Hogwarts from Harry Potter — had a flat skull covered in spikes and knobs, resembling a dragon. Some paleontologists believe it may be a juvenile form of Pachycephalosaurus.',
                discovery: 'Dracorex was discovered in the Hell Creek Formation of South Dakota and described in 2006. The species name hogwartsia was chosen by the children of the Children\'s Museum of Indianapolis.'
            },
            images: { card: paleoCreature('dracorex'), heroCandidates: heroCandidates('dracorex') },
            external: external('dracorex', 'Dracorex')
        },
        {
            id: 'irritator',
            name: 'Irritator',
            rarity: 'rare',
            unlockOrder: 26,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Spinosauridae' },
                { label: 'Genus', value: 'Irritator' },
                { label: 'Bio Group', value: 'Medium Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '1,000 kg' }
            ],
            sections: {
                description: 'Irritator was a spinosaurid dinosaur from Brazil with a long crocodile-like snout adapted for catching fish. It is closely related to Spinosaurus and Suchomimus.',
                discovery: 'The fossil was purchased from Brazilian fossil dealers in the early 1990s. Its name reflects the frustration of the scientists who described it, as the skull had been deliberately altered to appear more complete before sale.'
            },
            images: { card: paleoCreature('irritator'), heroCandidates: heroCandidates('irritator') },
            external: external('irritator', 'Irritator')
        },
        {
            id: 'argentinosaurus',
            name: 'Argentinosaurus',
            rarity: 'rare',
            unlockOrder: 27,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Andesauridae' },
                { label: 'Genus', value: 'Argentinosaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '12 m' },
                { label: 'Length', value: '35 m' },
                { label: 'Weight', value: '80,000 kg' }
            ],
            sections: {
                description: 'Argentinosaurus is one of the largest animals ever to have lived on land, a titanosaur sauropod from Argentina. Its vertebrae alone were over 1.5 metres tall. Estimates of its total weight range from 60,000 to 100,000 kilograms.',
                discovery: 'Discovered by a farmer in Patagonia, Argentina in 1987, Argentinosaurus was described in 1993 by José Bonaparte and Rodolfo Coria. Only partial remains are known, making exact size estimates difficult.'
            },
            images: { card: paleoCreature('argentinosaurus'), heroCandidates: heroCandidates('argentinosaurus') },
            external: external('argentinosaurus', 'Argentinosaurus')
        },
        {
            id: 'quetzalcoatlus',
            name: 'Quetzalcoatlus',
            rarity: 'rare',
            unlockOrder: 28,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Aviary' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Azhdarchidae' },
                { label: 'Genus', value: 'Quetzalcoatlus' },
                { label: 'Bio Group', value: 'Flying Reptile' },
                { label: 'Wingspan', value: '10-12 m' },
                { label: 'Weight', value: '250 kg' }
            ],
            sections: {
                description: 'Quetzalcoatlus was one of the largest flying animals of all time, with a wingspan reaching up to 12 metres. Named after the Aztec feathered serpent god, it was a pterosaur — not a dinosaur — that may have stalked prey on the ground like a modern stork.',
                discovery: 'Discovered in Big Bend National Park, Texas in 1971 by Douglas Lawson. The enormous size of the wing bones astonished paleontologists and remains the subject of ongoing research into how it achieved flight.'
            },
            images: { card: paleoCreature('quetzalcoatlus'), heroCandidates: heroCandidates('quetzalcoatlus') },
            external: external('quetzalcoatlus', 'Quetzalcoatlus')
        },
        {
            id: 'tarbosaurus',
            name: 'Tarbosaurus',
            rarity: 'common',
            unlockOrder: 30,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Tyrannosauridae' },
                { label: 'Genus', value: 'Tarbosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '4 m' },
                { label: 'Length', value: '12 m' },
                { label: 'Weight', value: '5,000 kg' }
            ],
            sections: {
                description: 'Tarbosaurus was a large tyrannosaurid from Late Cretaceous Asia, closely related to Tyrannosaurus rex. It was the apex predator of its ecosystem in what is now Mongolia, with powerful jaws and tiny two-fingered arms. Its name means "alarming lizard".',
                discovery: 'First described by Evgeny Maleev in 1955 from fossils found in Mongolia\'s Gobi Desert. Multiple well-preserved skulls have been recovered, making it one of the best-known Asian tyrannosaurids.'
            },
            images: { card: paleoCreature('tarbosaurus'), heroCandidates: heroCandidates('tarbosaurus') },
            external: external('tarbosaurus', 'Tarbosaurus')
        },
        {
            id: 'plateosaurus',
            name: 'Plateosaurus',
            rarity: 'common',
            unlockOrder: 31,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Triassic' },
                { label: 'Family', value: 'Plateosauridae' },
                { label: 'Genus', value: 'Plateosaurus' },
                { label: 'Bio Group', value: 'Prosauropod' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Plateosaurus was one of the earliest large dinosaurs and one of the most common prosauropods. It could walk on two or four legs and used small leaf-shaped teeth to strip vegetation. Over 100 specimens have been discovered, making it exceptionally well studied.',
                discovery: 'First described by Hermann von Meyer in 1837 from fossils found in Germany. Hundreds of specimens have since been recovered across central Europe, many from a remarkable bone bed in Trossingen, Germany.'
            },
            images: { card: paleoCreature('plateosaurus'), heroCandidates: heroCandidates('plateosaurus') },
            external: external('plateosaurus', 'Plateosaurus')
        },
        {
            id: 'majungasaurus',
            name: 'Majungasaurus',
            rarity: 'common',
            unlockOrder: 32,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Abelisauridae' },
                { label: 'Genus', value: 'Majungasaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '7 m' },
                { label: 'Weight', value: '1,100 kg' }
            ],
            sections: {
                description: 'Majungasaurus was the apex predator of Late Cretaceous Madagascar. It had a distinctive domed skull with a small horn and unusually short arms. Remarkably, tooth marks on its own bones provide clear evidence that it engaged in cannibalism.',
                discovery: 'First fossils were found in Madagascar in 1895 and initially misidentified. Complete skulls excavated in the 1990s revealed its true identity as a unique abelisaurid, unlike anything else on the island at the time.'
            },
            images: { card: paleoCreature('majungasaurus'), heroCandidates: heroCandidates('majungasaurus') },
            external: external('majungasaurus', 'Majungasaurus')
        },
        {
            id: 'deinocheirus',
            name: 'Deinocheirus',
            rarity: 'common',
            unlockOrder: 33,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Deinocheiridae' },
                { label: 'Genus', value: 'Deinocheirus' },
                { label: 'Bio Group', value: 'Large Omnivore' },
                { label: 'Height', value: '5 m' },
                { label: 'Length', value: '11 m' },
                { label: 'Weight', value: '6,400 kg' }
            ],
            sections: {
                description: 'Deinocheirus was one of the most bizarre dinosaurs ever found. Known only from its enormous arms for nearly 50 years, complete skeletons finally revealed a hump-backed omnivore with a duck-like snout. Its arms alone span 2.4 metres — the longest of any known bipedal animal.',
                discovery: 'The first fossils — two enormous arms — were found in Mongolia\'s Nemegt Formation in 1965. The full mystery was not solved until complete skeletons were discovered by a joint Korean-Mongolian expedition in 2009 and 2014.'
            },
            images: { card: paleoCreature('deinocheirus'), heroCandidates: heroCandidates('deinocheirus') },
            external: external('deinocheirus', 'Deinocheirus')
        },
        {
            id: 'sinosauropteryx',
            name: 'Sinosauropteryx',
            rarity: 'common',
            unlockOrder: 34,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Compsognathidae' },
                { label: 'Genus', value: 'Sinosauropteryx' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.3 m' },
                { label: 'Length', value: '1 m' },
                { label: 'Weight', value: '0.55 kg' }
            ],
            sections: {
                description: 'Sinosauropteryx was the first non-avian dinosaur discovered with clear evidence of feathers preserved in the fossil record. Scientists could even determine its colour from fossilized melanosomes: ginger-and-white stripes along its tail. It was a small, fast predator.',
                discovery: 'Discovered in 1996 in the Yixian Formation of Liaoning, China. Its feather impressions revolutionised our understanding of theropod evolution and the origin of birds, confirming the dinosaur-bird connection beyond doubt.'
            },
            images: { card: paleoCreature('sinosauropteryx'), heroCandidates: heroCandidates('sinosauropteryx') },
            external: external('sinosauropteryx', 'Sinosauropteryx')
        },
        {
            id: 'centrosaurus',
            name: 'Centrosaurus',
            rarity: 'common',
            unlockOrder: 35,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ceratopsidae' },
                { label: 'Genus', value: 'Centrosaurus' },
                { label: 'Bio Group', value: 'Ceratopsian' },
                { label: 'Height', value: '1.8 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '2,700 kg' }
            ],
            sections: {
                description: 'Centrosaurus was a medium-sized ceratopsian with a single large nasal horn and an elaborate frill. It lived in enormous herds — bone beds in Alberta contain thousands of individuals, suggesting mass drownings during river crossings.',
                discovery: 'First described by Lawrence Lambe in 1904 from fossils in Alberta, Canada. The Centrosaurus bone beds in Dinosaur Provincial Park remain among the largest dinosaur mass-death sites ever found.'
            },
            images: { card: paleoCreature('centrosaurus'), heroCandidates: heroCandidates('centrosaurus') },
            external: external('centrosaurus', 'Centrosaurus')
        },
        {
            id: 'deinonychus',
            name: 'Deinonychus',
            rarity: 'common',
            unlockOrder: 36,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Deinonychus' },
                { label: 'Bio Group', value: 'Medium Carnivore' },
                { label: 'Height', value: '0.9 m' },
                { label: 'Length', value: '3.4 m' },
                { label: 'Weight', value: '73 kg' }
            ],
            sections: {
                description: 'Deinonychus inspired the "Velociraptors" in Jurassic Park — the actual Velociraptor was turkey-sized. It had a large sickle-shaped claw on each foot and likely hunted cooperatively. Its discovery in the 1960s launched the "Dinosaur Renaissance" and the theory that dinosaurs were warm-blooded.',
                discovery: 'Described by John Ostrom in 1969 from fossils found in Montana. Its bird-like skeleton revolutionised palaeontology and eventually led to the scientific consensus that birds are living dinosaurs.'
            },
            images: { card: paleoCreature('deinonychus'), heroCandidates: heroCandidates('deinonychus') },
            external: external('deinonychus', 'Deinonychus')
        },
        {
            id: 'einiosaurus',
            name: 'Einiosaurus',
            rarity: 'common',
            unlockOrder: 37,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ceratopsidae' },
                { label: 'Genus', value: 'Einiosaurus' },
                { label: 'Bio Group', value: 'Ceratopsian' },
                { label: 'Height', value: '1.5 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '1,400 kg' }
            ],
            sections: {
                description: 'Einiosaurus had a distinctive forward-curving nasal horn that looks almost like a bottle opener. Like Centrosaurus it lived in large herds. Its name means "buffalo lizard" in the Blackfoot language, honouring the Indigenous people of its Montana homeland.',
                discovery: 'Described by Scott Sampson in 1995 from a bone bed in Montana containing dozens of individuals of all ages, giving exceptional insight into its growth and social behaviour.'
            },
            images: { card: paleoCreature('einiosaurus'), heroCandidates: heroCandidates('einiosaurus') },
            external: external('einiosaurus', 'Einiosaurus')
        },
        {
            id: 'lythronax',
            name: 'Lythronax',
            rarity: 'common',
            unlockOrder: 38,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Tyrannosauridae' },
                { label: 'Genus', value: 'Lythronax' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '2,500 kg' }
            ],
            sections: {
                description: 'Lythronax, meaning "gore king", was one of the earliest large tyrannosaurids. Its forward-facing eyes gave it exceptional binocular vision for tracking prey. It pre-dates Tyrannosaurus rex by about 10 million years, showing that the large-bodied tyrannosaur body plan evolved earlier than previously thought.',
                discovery: 'Described in 2013 from a nearly complete skull found in Utah\'s Wahweap Formation in 2009. Its discovery pushed back the origin of large-bodied tyrannosaurids by several million years.'
            },
            images: { card: paleoCreature('lythronax'), heroCandidates: heroCandidates('lythronax') },
            external: external('lythronax', 'Lythronax')
        },
        {
            id: 'megaraptor',
            name: 'Megaraptor',
            rarity: 'common',
            unlockOrder: 39,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Megaraptoridae' },
                { label: 'Genus', value: 'Megaraptor' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '8 m' },
                { label: 'Weight', value: '1,000 kg' }
            ],
            sections: {
                description: 'Megaraptor was a large theropod from Cretaceous Patagonia. Originally thought to be a giant dromaeosaurid because of its enormous hand claw, it is now classified as a megaraptoran — a distinct group of large-clawed predators. Its hand claws could reach 30 cm in length.',
                discovery: 'Described by Fernando Novas in 1998 from fragmentary fossils found in Argentina. Better material discovered later clarified its classification as neither a true raptor nor a tyrannosaur, but something in between.'
            },
            images: { card: paleoCreature('megaraptor'), heroCandidates: heroCandidates('megaraptor') },
            external: external('megaraptor', 'Megaraptor')
        },
        {
            id: 'miragaia',
            name: 'Miragaia',
            rarity: 'common',
            unlockOrder: 40,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Stegosauridae' },
                { label: 'Genus', value: 'Miragaia' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '1.5 m' },
                { label: 'Length', value: '6.5 m' },
                { label: 'Weight', value: '2,000 kg' }
            ],
            sections: {
                description: 'Miragaia was a stegosaur with an unusually long neck — up to 17 cervical vertebrae, more than any other known stegosaur. This gave it a giraffe-like reach to browse higher vegetation than its relatives. It is the only stegosaur known from Europe.',
                discovery: 'Described by Octávio Mateus in 2009 from fossils found near the village of Miragaia in Portugal\'s Lourinhã Formation, one of Europe\'s richest Late Jurassic fossil sites.'
            },
            images: { card: paleoCreature('miragaia'), heroCandidates: heroCandidates('miragaia') },
            external: external('miragaia', 'Miragaia')
        },
        {
            id: 'shantungosaurus',
            name: 'Shantungosaurus',
            rarity: 'common',
            unlockOrder: 41,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Shantungosaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '7 m' },
                { label: 'Length', value: '15 m' },
                { label: 'Weight', value: '16,000 kg' }
            ],
            sections: {
                description: 'Shantungosaurus was the largest known hadrosaur and possibly the largest non-sauropod dinosaur ever discovered. At up to 15 metres and 16 tonnes it dwarfed most predators of its time. Unlike many hadrosaurs it lacked a head crest, instead having a flat, broad skull with a duck-like beak.',
                discovery: 'Described by Hu Chengzhi in 1973 from multiple specimens in Shandong Province, China. A composite skeleton assembled from several individuals stands over 7 metres tall in the Geological Museum of China.'
            },
            images: { card: paleoCreature('shantungosaurus'), heroCandidates: heroCandidates('shantungosaurus') },
            external: external('shantungosaurus', 'Shantungosaurus')
        },
        {
            id: 'tanycolagreus',
            name: 'Tanycolagreus',
            rarity: 'common',
            unlockOrder: 42,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Coeluridae' },
                { label: 'Genus', value: 'Tanycolagreus' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.8 m' },
                { label: 'Length', value: '3.3 m' },
                { label: 'Weight', value: '35 kg' }
            ],
            sections: {
                description: 'Tanycolagreus was a slender, lightly built theropod and an agile hunter of small prey. Its classification remains debated — it may be related to Coelurus or represent its own distinct lineage among early coelurosaurs. Its name means "long-limbed hunter".',
                discovery: 'Described by Carpenter et al. in 2005 from a partial skeleton found in the Morrison Formation of Utah. The specimen had originally been excavated in 1879 but sat unidentified in museum collections for over a century.'
            },
            images: { card: paleoCreature('tanycolagreus'), heroCandidates: heroCandidates('tanycolagreus') },
            external: external('tanycolagreus', 'Tanycolagreus')
        },
        {
            id: 'saurornitholestes',
            name: 'Saurornitholestes',
            rarity: 'common',
            unlockOrder: 43,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Saurornitholestes' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.5 m' },
                { label: 'Length', value: '1.8 m' },
                { label: 'Weight', value: '7 kg' }
            ],
            sections: {
                description: 'Saurornitholestes was a small feathered dromaeosaurid raptor from Late Cretaceous Canada. Despite its small size it was an active predator, likely hunting lizards, small mammals and insects. Like all dromaeosaurids it bore a sickle claw on each foot.',
                discovery: 'Described by Hans-Dieter Sues in 1978 from teeth and fragmentary bones found in Alberta\'s Dinosaur Park Formation. Additional material has since been recovered across western North America.'
            },
            images: { card: paleoCreature('saurornitholestes'), heroCandidates: heroCandidates('saurornitholestes') },
            external: external('saurornitholestes', 'Saurornitholestes')
        },
        {
            id: 'scolosaurus',
            name: 'Scolosaurus',
            rarity: 'common',
            unlockOrder: 44,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ankylosauridae' },
                { label: 'Genus', value: 'Scolosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '1.5 m' },
                { label: 'Length', value: '5.5 m' },
                { label: 'Weight', value: '2,000 kg' }
            ],
            sections: {
                description: 'Scolosaurus was a heavily armoured ankylosaur covered in bony osteoderms and spikes, with a powerful tail club. It was long classified under Euoplocephalus but separated into its own genus based on differences in armour arrangement and skull proportions.',
                discovery: 'First described by Friedrich von Huene in 1929 from a nearly complete specimen found in Alberta, Canada. The well-preserved armour plating allowed a detailed reconstruction of how the scutes were arranged across its back and sides.'
            },
            images: { card: paleoCreature('scolosaurus'), heroCandidates: heroCandidates('scolosaurus') },
            external: external('scolosaurus', 'Scolosaurus')
        },
        {
            id: 'albertosaurus',
            name: 'Albertosaurus',
            rarity: 'rare',
            unlockOrder: 45,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Tyrannosauridae' },
                { label: 'Genus', value: 'Albertosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '2,000 kg' }
            ],
            sections: {
                description: 'Albertosaurus was a medium-sized tyrannosaur that roamed Late Cretaceous Canada about 10 million years before Tyrannosaurus rex. Slender and fast for its size, it likely hunted in groups — a bone bed in Alberta containing at least 26 individuals of different ages suggests pack behaviour.',
                discovery: 'First described by Henry Fairfield Osborn in 1905 from fossils found near the Red Deer River in Alberta. The remarkable multi-individual bone bed was discovered by Barnum Brown in 1910 and later re-excavated by Philip Currie starting in 1997.'
            },
            images: { card: paleoCreature('albertosaurus'), heroCandidates: heroCandidates('albertosaurus') },
            external: external('albertosaurus', 'Albertosaurus')
        },
        {
            id: 'amargasaurus',
            name: 'Amargasaurus',
            rarity: 'rare',
            unlockOrder: 46,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Dicraeosauridae' },
                { label: 'Genus', value: 'Amargasaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '4 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '2,600 kg' }
            ],
            sections: {
                description: 'Amargasaurus was a sauropod with a remarkable double row of tall spines running down its neck and back. Whether these supported a sail, a hump, or were bare spines used for display or defence is still debated. It is one of the most distinctive-looking sauropods ever found.',
                discovery: 'Described by Leonardo Salgado and José Bonaparte in 1991 from a nearly complete skeleton found in the La Amarga Formation of Argentina — hence the name. It remains the only known specimen of its genus.'
            },
            images: { card: paleoCreature('amargasaurus'), heroCandidates: heroCandidates('amargasaurus') },
            external: external('amargasaurus', 'Amargasaurus')
        },
        {
            id: 'archaeopteryx',
            name: 'Archaeopteryx',
            rarity: 'rare',
            unlockOrder: 47,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Archaeopterygidae' },
                { label: 'Genus', value: 'Archaeopteryx' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.3 m' },
                { label: 'Length', value: '0.5 m' },
                { label: 'Weight', value: '0.5 kg' }
            ],
            sections: {
                description: 'Archaeopteryx is the most famous transitional fossil in history — a crow-sized creature with the feathers and wishbone of a bird but the teeth, clawed wings, and long bony tail of a dinosaur. Its discovery in 1861, just two years after Darwin published On the Origin of Species, provided crucial evidence for evolution.',
                discovery: 'First specimen found in Bavaria in 1861. Hermann von Meyer formally described it the same year. Ten additional specimens have since been found, all from the Solnhofen limestone of Bavaria, Germany, preserved in extraordinary detail.'
            },
            images: { card: paleoCreature('archaeopteryx'), heroCandidates: heroCandidates('archaeopteryx') },
            external: external('archaeopteryx', 'Archaeopteryx')
        },
        {
            id: 'baryonyx',
            name: 'Baryonyx',
            rarity: 'rare',
            unlockOrder: 48,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Spinosauridae' },
                { label: 'Genus', value: 'Baryonyx' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '1,700 kg' }
            ],
            sections: {
                description: 'Baryonyx was a fish-eating spinosaur with a long, narrow crocodile-like snout and a massive thumb claw up to 31 cm long. Fish scales and bones found inside a fossil specimen proved its diet. Its name means "heavy claw". It is closely related to Spinosaurus.',
                discovery: 'Discovered in 1983 by amateur fossil hunter William Walker in a clay pit in Surrey, England — one of the most complete large theropod skeletons ever found in Europe. Formally described by Charig and Milner in 1986.'
            },
            images: { card: paleoCreature('baryonyx'), heroCandidates: heroCandidates('baryonyx') },
            external: external('baryonyx', 'Baryonyx')
        },
        {
            id: 'compsognathus',
            name: 'Compsognathus',
            rarity: 'rare',
            unlockOrder: 49,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Compsognathidae' },
                { label: 'Genus', value: 'Compsognathus' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.3 m' },
                { label: 'Length', value: '1 m' },
                { label: 'Weight', value: '3 kg' }
            ],
            sections: {
                description: 'Compsognathus was one of the smallest non-avian dinosaurs known, roughly the size of a turkey. For decades after its discovery it was considered the smallest dinosaur ever found. A lizard skeleton preserved inside one specimen proves it was a fast, active hunter of small prey.',
                discovery: 'First described by Johann Andreas Wagner in 1859 from a specimen found in Bavaria. A second specimen found in France in 1972 was noticeably larger, sparking debate about whether the two represent different species or growth stages.'
            },
            images: { card: paleoCreature('compsognathus'), heroCandidates: heroCandidates('compsognathus') },
            external: external('compsognathus', 'Compsognathus')
        },
        {
            id: 'edmontosaurus',
            name: 'Edmontosaurus',
            rarity: 'rare',
            unlockOrder: 50,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Edmontosaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '4 m' },
                { label: 'Length', value: '13 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Edmontosaurus was one of the largest hadrosaurs, living alongside Tyrannosaurus rex as one of its primary prey animals. A mummified specimen revealed soft tissue including a fleshy comb on its head — invisible from bones alone. With 71 known specimens it is among the best-studied dinosaurs.',
                discovery: 'First described by Lawrence Lambe in 1917 from fossils found in Alberta. Multiple remarkably preserved "mummy" specimens — with skin and soft tissue intact — have been recovered in Alberta and Wyoming, making it one of the most completely known dinosaurs.'
            },
            images: { card: paleoCreature('edmontosaurus'), heroCandidates: heroCandidates('edmontosaurus') },
            external: external('edmontosaurus', 'Edmontosaurus')
        },
        {
            id: 'gorgosaurus',
            name: 'Gorgosaurus',
            rarity: 'rare',
            unlockOrder: 51,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Tyrannosauridae' },
                { label: 'Genus', value: 'Gorgosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '2,500 kg' }
            ],
            sections: {
                description: 'Gorgosaurus was a tyrannosaur that lived about 10 million years before T. rex. Slimmer and possibly faster than its famous cousin, it was the apex predator of Late Cretaceous Alberta. With 17 known specimens including juveniles, palaeontologists can track how it grew from a swift adolescent hunter into a massive adult.',
                discovery: 'First described by Lawrence Lambe in 1914 from fossils found along the Red Deer River in Alberta. Specimens ranging from hatchlings to fully grown adults have been found, providing a complete picture of its growth stages.'
            },
            images: { card: paleoCreature('gorgosaurus'), heroCandidates: heroCandidates('gorgosaurus') },
            external: external('gorgosaurus', 'Gorgosaurus')
        },
        {
            id: 'herrerasaurus',
            name: 'Herrerasaurus',
            rarity: 'rare',
            unlockOrder: 52,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Triassic' },
                { label: 'Family', value: 'Herrerasauridae' },
                { label: 'Genus', value: 'Herrerasaurus' },
                { label: 'Bio Group', value: 'Medium Carnivore' },
                { label: 'Height', value: '1.1 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '350 kg' }
            ],
            sections: {
                description: 'Herrerasaurus was one of the earliest known dinosaurs, living about 231 million years ago — near the very origin of the group. A fast bipedal predator, it had flexible jaws to grip struggling prey and represents a very early branch of the theropod lineage before dinosaurs came to dominate the world.',
                discovery: 'First described by Osvaldo Reig in 1963 from fossils found in San Juan Province, Argentina. A nearly complete skeleton including a skull, found in 1988, finally revealed what the full animal looked like and confirmed its position as an early dinosaur.'
            },
            images: { card: paleoCreature('herrerasaurus'), heroCandidates: heroCandidates('herrerasaurus') },
            external: external('herrerasaurus', 'Herrerasaurus')
        },
        {
            id: 'megalosaurus',
            name: 'Megalosaurus',
            rarity: 'rare',
            unlockOrder: 53,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Mid Jurassic' },
                { label: 'Family', value: 'Megalosauridae' },
                { label: 'Genus', value: 'Megalosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '700 kg' }
            ],
            sections: {
                description: 'Megalosaurus holds a unique place in history as the first dinosaur ever to be scientifically named. Before "dinosaur" even existed as a concept, its bones puzzled naturalists who thought they might belong to a giant human. It was a large bipedal predator of Jurassic Europe.',
                discovery: 'A thigh bone from Megalosaurus was described as early as 1676 by Robert Plot, who thought it was from a giant man. William Buckland formally named it Megalosaurus in 1824, making it the first dinosaur to receive a scientific name — 18 years before the word "dinosaur" was coined.'
            },
            images: { card: paleoCreature('megalosaurus'), heroCandidates: heroCandidates('megalosaurus') },
            external: external('megalosaurus', 'Megalosaurus')
        },
        {
            id: 'nasutoceratops',
            name: 'Nasutoceratops',
            rarity: 'rare',
            unlockOrder: 54,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ceratopsidae' },
                { label: 'Genus', value: 'Nasutoceratops' },
                { label: 'Bio Group', value: 'Ceratopsian' },
                { label: 'Height', value: '1.8 m' },
                { label: 'Length', value: '4.5 m' },
                { label: 'Weight', value: '1,500 kg' }
            ],
            sections: {
                description: 'Nasutoceratops means "big-nose horned face" — it had an unusually large nasal region and long, forward-sweeping brow horns resembling those of a modern bull. Unlike most ceratopsians whose horns were thought to be for defence, its horns were more likely used for display and competition among males.',
                discovery: 'Described by Scott Sampson and colleagues in 2013 from fossils found in the Kaiparowits Formation of Utah. The discovery helped fill a gap in the ceratopsian family tree and revealed a previously unknown diversity of horned dinosaurs in the American Southwest.'
            },
            images: { card: paleoCreature('nasutoceratops'), heroCandidates: heroCandidates('nasutoceratops') },
            external: external('nasutoceratops', 'Nasutoceratops')
        },
        {
            id: 'nodosaurus',
            name: 'Nodosaurus',
            rarity: 'rare',
            unlockOrder: 55,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Nodosauridae' },
                { label: 'Genus', value: 'Nodosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '1.3 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '1,000 kg' }
            ],
            sections: {
                description: 'Nodosaurus was an early armoured dinosaur covered in bony plates, but unlike its relative Ankylosaurus it lacked a tail club. Its armour was purely defensive — a living tank against the predators of Early Cretaceous North America. It gives its name to the entire family of club-less armoured dinosaurs: the nodosaurids.',
                discovery: 'Discovered in Wyoming in 1889 and described by Othniel Charles Marsh in 1889. Only partial remains have been found, making it one of the less completely known ankylosaurs despite being one of the first named.'
            },
            images: { card: paleoCreature('nodosaurus'), heroCandidates: heroCandidates('nodosaurus') },
            external: external('nodosaurus', 'Nodosaurus')
        },
        {
            id: 'ornithomimus',
            name: 'Ornithomimus',
            rarity: 'rare',
            unlockOrder: 56,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ornithomimidae' },
                { label: 'Genus', value: 'Ornithomimus' },
                { label: 'Bio Group', value: 'Ornithomimosaur' },
                { label: 'Height', value: '1.4 m' },
                { label: 'Length', value: '4 m' },
                { label: 'Weight', value: '170 kg' }
            ],
            sections: {
                description: 'Ornithomimus was an ostrich-like dinosaur built for speed, capable of running up to 60 km/h. It had a toothless beak, long legs, and a small head. A feathered specimen from Alberta revealed that adults had wings — likely used for display or incubating eggs, just like modern ostriches.',
                discovery: 'First described by Othniel Charles Marsh in 1890 from fragmentary fossils found in Colorado. With 34 known specimens from Alberta and the US it is one of the better-known ornithomimosaurs, and the first discovered with direct feather evidence.'
            },
            images: { card: paleoCreature('ornithomimus'), heroCandidates: heroCandidates('ornithomimus') },
            external: external('ornithomimus', 'Ornithomimus')
        },
        {
            id: 'oviraptor',
            name: 'Oviraptor',
            rarity: 'rare',
            unlockOrder: 57,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Oviraptoridae' },
                { label: 'Genus', value: 'Oviraptor' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '2 m' },
                { label: 'Weight', value: '35 kg' }
            ],
            sections: {
                description: 'Oviraptor means "egg thief" — a name it earned unfairly. When first found on top of a nest of eggs, it was assumed to be raiding them. Decades later, embryos inside identical eggs proved it was actually brooding its own nest, just like modern birds. It likely had a colourful crest for display.',
                discovery: 'Described by Henry Fairfield Osborn in 1924 from fossils found in Mongolia\'s Gobi Desert. The 1993 discovery of a specimen sitting on a nest in the exact brooding posture of modern birds finally cleared its wrongful reputation as an egg thief.'
            },
            images: { card: paleoCreature('oviraptor'), heroCandidates: heroCandidates('oviraptor') },
            external: external('oviraptor', 'Oviraptor')
        },
        {
            id: 'tenontosaurus',
            name: 'Tenontosaurus',
            rarity: 'rare',
            unlockOrder: 58,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Ankylopollexia' },
                { label: 'Genus', value: 'Tenontosaurus' },
                { label: 'Bio Group', value: 'Medium Herbivore' },
                { label: 'Height', value: '2.1 m' },
                { label: 'Length', value: '7 m' },
                { label: 'Weight', value: '1,000 kg' }
            ],
            sections: {
                description: 'Tenontosaurus was a large ornithopod herbivore known primarily as the favourite prey of Deinonychus. Multiple Deinonychus teeth found among Tenontosaurus fossils, along with bones bearing claw and tooth marks, sparked the hypothesis that Deinonychus hunted in packs — a controversial idea still debated today.',
                discovery: 'First described by John Ostrom in 1970 from fossils found in Montana and Wyoming. With 77 known specimens it is among the most common Early Cretaceous dinosaurs of North America, and the bone-bed associations with Deinonychus are among the most studied predator-prey relationships in palaeontology.'
            },
            images: { card: paleoCreature('tenontosaurus'), heroCandidates: heroCandidates('tenontosaurus') },
            external: external('tenontosaurus', 'Tenontosaurus')
        },
        {
            id: 'therizinosaurus',
            name: 'Therizinosaurus',
            rarity: 'rare',
            unlockOrder: 59,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Therizinosauridae' },
                { label: 'Genus', value: 'Therizinosaurus' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '5 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '5,000 kg' }
            ],
            sections: {
                description: 'Therizinosaurus possessed the longest claws of any known animal — up to 1 metre — yet was a herbivore that used them to pull down branches, not to hunt. A giant pot-bellied theropod descended from meat-eating ancestors, it represents one of the most dramatic dietary shifts in dinosaur evolution.',
                discovery: 'Described by Evgeny Maleev in 1954 from enormous arm bones and claws found in Mongolia. For decades only arms were known, leading to wild theories about what the animal looked like. Related specimens found later finally revealed the full bizarre body plan.'
            },
            images: { card: paleoCreature('therizinosaurus'), heroCandidates: heroCandidates('therizinosaurus') },
            external: external('therizinosaurus', 'Therizinosaurus')
        },
        {
            id: 'tuojiangosaurus',
            name: 'Tuojiangosaurus',
            rarity: 'rare',
            unlockOrder: 60,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Stegosauridae' },
                { label: 'Genus', value: 'Tuojiangosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '7 m' },
                { label: 'Weight', value: '2,800 kg' }
            ],
            sections: {
                description: 'Tuojiangosaurus was a Chinese stegosaur with two rows of paired plates and spines running from neck to tail, including four sharp tail spikes. It is the best-known stegosaur from Asia and shows that the stegosaur body plan was remarkably consistent across different continents during the Jurassic.',
                discovery: 'Described by Dong Zhiming and colleagues in 1977 from fossils found in Sichuan Province, China — the most complete stegosaur skeleton found in Asia at the time. A mounted skeleton is on display in the Chongqing Natural History Museum.'
            },
            images: { card: paleoCreature('tuojiangosaurus'), heroCandidates: heroCandidates('tuojiangosaurus') },
            external: external('tuojiangosaurus', 'Tuojiangosaurus')
        },
        {
            id: 'proceratosaurus',
            name: 'Proceratosaurus',
            rarity: 'rare',
            unlockOrder: 61,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Mid Jurassic' },
                { label: 'Family', value: 'Proceratosauridae' },
                { label: 'Genus', value: 'Proceratosaurus' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '3 m' },
                { label: 'Weight', value: '100 kg' }
            ],
            sections: {
                description: 'Proceratosaurus was a small early tyrannosaur from Jurassic England — a surprising ancestor of the giant T. rex. It had a small crest on its nose and lived 90 million years before its famous descendants grew to enormous size. Its discovery showed that tyrannosaurs started small and only became giants much later.',
                discovery: 'Described by Arthur Smith Woodward in 1910 from a partial skull found in Gloucestershire, England. For decades its relationships were unclear; modern analyses confirmed it as one of the earliest known tyrannosaurs, fundamentally changing our understanding of that lineage\'s origins.'
            },
            images: { card: paleoCreature('proceratosaurus'), heroCandidates: heroCandidates('proceratosaurus') },
            external: external('proceratosaurus', 'Proceratosaurus')
        },
        {
            id: 'dreadnoughtus',
            name: 'Dreadnoughtus',
            rarity: 'rare',
            unlockOrder: 62,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Titanosauria' },
                { label: 'Genus', value: 'Dreadnoughtus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '10 m' },
                { label: 'Length', value: '26 m' },
                { label: 'Weight', value: '65,000 kg' }
            ],
            sections: {
                description: 'Dreadnoughtus was one of the most massive land animals ever to walk the Earth, estimated at up to 65 tonnes. Its name means "fears nothing" — at that size, few predators posed any threat. Remarkably, the bones of the known specimen were not fully fused, suggesting it was still growing when it died.',
                discovery: 'Described by Kenneth Lacovara in 2014 from fossils found in Patagonia, Argentina. The specimen, excavated over four field seasons from 2005 to 2009, represents about 70% of the skeleton — exceptionally complete for a titanosaur of this size.'
            },
            images: { card: paleoCreature('dreadnoughtus'), heroCandidates: heroCandidates('dreadnoughtus') },
            external: external('dreadnoughtus', 'Dreadnoughtus')
        },
        {
            id: 'acrocanthosaurus',
            name: 'Acrocanthosaurus',
            rarity: 'epic',
            unlockOrder: 63,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Carcharodontosauridae' },
                { label: 'Genus', value: 'Acrocanthosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '4.5 m' },
                { label: 'Length', value: '11.5 m' },
                { label: 'Weight', value: '6,200 kg' }
            ],
            sections: {
                description: 'Acrocanthosaurus was one of the largest carnivorous dinosaurs in North America, rivalling Tyrannosaurus in size. Its name means "high-spined lizard" — tall neural spines along its back may have supported a muscle ridge or low hump rather than a sail.',
                discovery: 'Described by Stovall and Langston in 1950 from remains found in Oklahoma and Texas. A near-complete skeleton discovered in South Dakota in 1983 provided the most detailed look at this apex predator of the Early Cretaceous.'
            },
            images: { card: paleoCreature('acrocanthosaurus'), heroCandidates: heroCandidates('acrocanthosaurus') },
            external: external('acrocanthosaurus', 'Acrocanthosaurus')
        },
        {
            id: 'concavenator',
            name: 'Concavenator',
            rarity: 'epic',
            unlockOrder: 64,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Carcharodontosauridae' },
                { label: 'Genus', value: 'Concavenator' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '1,000 kg' }
            ],
            sections: {
                description: 'Concavenator was a carcharodontosaurid with a distinctive hump formed by two elongated vertebrae just in front of its hips, unique among known dinosaurs. Quill knobs on its arm bones suggest the presence of proto-feathers, which was unexpected for a large predator of its type.',
                discovery: 'Described in 2010 by Ortega, Escaso, and Sanz from a near-complete skeleton discovered in the Cuenca Province of Spain. Its name means "hunchback hunter from Cuenca".'
            },
            images: { card: paleoCreature('concavenator'), heroCandidates: heroCandidates('concavenator') },
            external: external('concavenator', 'Concavenator')
        },
        {
            id: 'dakotaraptor',
            name: 'Dakotaraptor',
            rarity: 'epic',
            unlockOrder: 65,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Dakotaraptor' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '1.8 m' },
                { label: 'Length', value: '5.5 m' },
                { label: 'Weight', value: '350 kg' }
            ],
            sections: {
                description: 'Dakotaraptor was one of the largest known dromaeosaurids, living alongside Tyrannosaurus rex at the very end of the Cretaceous. It possessed large sickle claws and quill knobs indicating feathered wings, making it a formidable feathered predator.',
                discovery: 'Described by DePalma et al. in 2015 from fossils recovered in the Hell Creek Formation of South Dakota. The discovery showed that large raptors coexisted with tyrannosaurs in the final Cretaceous ecosystems of North America.'
            },
            images: { card: paleoCreature('dakotaraptor'), heroCandidates: heroCandidates('dakotaraptor') },
            external: external('dakotaraptor', 'Dakotaraptor')
        },
        {
            id: 'erlikosaurus',
            name: 'Erlikosaurus',
            rarity: 'epic',
            unlockOrder: 66,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Therizinosauridae' },
                { label: 'Genus', value: 'Erlikosaurus' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '700 kg' }
            ],
            sections: {
                description: 'Erlikosaurus was a therizinosaur — a bizarre group of herbivorous theropods with long necks, pot bellies, and huge claws. Its skull is one of the most complete known for any therizinosaur, revealing a toothless beak at the front and small teeth further back for processing plant matter.',
                discovery: 'Described by Barsbold and Perle in 1980 from remains found in the Bayan Shireh Formation of Mongolia. Named after Erlik, a demon figure from Mongolian mythology.'
            },
            images: { card: paleoCreature('erlikosaurus'), heroCandidates: heroCandidates('erlikosaurus') },
            external: external('erlikosaurus', 'Erlikosaurus')
        },
        {
            id: 'giganotosaurus',
            name: 'Giganotosaurus',
            rarity: 'epic',
            unlockOrder: 67,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Carcharodontosauridae' },
                { label: 'Genus', value: 'Giganotosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '4.5 m' },
                { label: 'Length', value: '13 m' },
                { label: 'Weight', value: '8,000 kg' }
            ],
            sections: {
                description: 'Giganotosaurus was one of the largest land carnivores ever, rivalling or exceeding Tyrannosaurus rex in length. It hunted giant titanosaur sauropods in Late Cretaceous South America and had a long, narrow skull with serrated blade-like teeth suited for slashing rather than bone-crushing.',
                discovery: 'Discovered by amateur fossil hunter Rubén Carolini in Argentina in 1993 and described by Coria and Salgado in 1995. The type specimen is estimated at 70–80% complete, making it one of the best-known carcharodontosaurids.'
            },
            images: { card: paleoCreature('giganotosaurus'), heroCandidates: heroCandidates('giganotosaurus') },
            external: external('giganotosaurus', 'Giganotosaurus')
        },
        {
            id: 'gigantspinosaurus',
            name: 'Gigantspinosaurus',
            rarity: 'epic',
            unlockOrder: 68,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Stegosauridae' },
                { label: 'Genus', value: 'Gigantspinosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '2 m' },
                { label: 'Length', value: '4.2 m' },
                { label: 'Weight', value: '700 kg' }
            ],
            sections: {
                description: 'Gigantspinosaurus was a stegosaur distinguished by enormous shoulder spines that dwarfed the small plates along its back — the opposite of most stegosaurs. These dramatic shoulder spines were likely used for display or defence against predators.',
                discovery: 'First described by Ouyang in 1992 from remains found in the Sichuan Province of China. Its unique combination of huge shoulder spines and tiny dorsal plates makes it one of the most distinctive stegosaurs known.'
            },
            images: { card: paleoCreature('gigantspinosaurus'), heroCandidates: heroCandidates('gigantspinosaurus') },
            external: external('gigantspinosaurus', 'Gigantspinosaurus')
        },
        {
            id: 'kentrosaurus',
            name: 'Kentrosaurus',
            rarity: 'epic',
            unlockOrder: 69,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Stegosauridae' },
                { label: 'Genus', value: 'Kentrosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '1.7 m' },
                { label: 'Length', value: '4.5 m' },
                { label: 'Weight', value: '700 kg' }
            ],
            sections: {
                description: 'Kentrosaurus was an African stegosaur with a striking combination of flat plates on its neck and shoulders transitioning into long paired spikes along its back and tail. Its thagomizer — the spiked tail — could deliver powerful defensive blows and biomechanical studies suggest it had remarkable tail flexibility.',
                discovery: 'Described by Edwin Hennig in 1915 from fossils collected during the German Tendaguru Expedition to Tanzania (1909–1913). Hundreds of bones from multiple individuals were recovered, making it one of the best-represented Jurassic dinosaurs from Africa.'
            },
            images: { card: paleoCreature('kentrosaurus'), heroCandidates: heroCandidates('kentrosaurus') },
            external: external('kentrosaurus', 'Kentrosaurus')
        },
        {
            id: 'microraptor',
            name: 'Microraptor',
            rarity: 'epic',
            unlockOrder: 70,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Arboreal' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Microraptor' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.3 m' },
                { label: 'Length', value: '0.8 m' },
                { label: 'Weight', value: '1 kg' }
            ],
            sections: {
                description: 'Microraptor was a crow-sized four-winged dinosaur with flight feathers on both its arms and legs, making it the only known four-winged dinosaur. Gut content fossils reveal it ate fish, birds, and lizards, and its iridescent black plumage has been inferred from fossilised melanosomes.',
                discovery: 'Described by Xu Xing et al. in 2003 from fossils found in the Yixian Formation of Liaoning Province, China. Dozens of specimens are known, preserving exquisite feather detail and even colour evidence.'
            },
            images: { card: paleoCreature('microraptor'), heroCandidates: heroCandidates('microraptor') },
            external: external('microraptor', 'Microraptor')
        },
        {
            id: 'monolophosaurus',
            name: 'Monolophosaurus',
            rarity: 'epic',
            unlockOrder: 71,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Middle Jurassic' },
                { label: 'Family', value: 'Monolophosauridae' },
                { label: 'Genus', value: 'Monolophosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '5.5 m' },
                { label: 'Weight', value: '475 kg' }
            ],
            sections: {
                description: 'Monolophosaurus was a medium-sized predator named for the single prominent crest running along the top of its skull. The hollow crest may have been used for display or to produce calls, and is the most distinctive feature separating it from other Jurassic theropods.',
                discovery: 'Described by Zhao and Currie in 1994 from a nearly complete skeleton found in the Junggar Basin of Xinjiang, China. It lived during the Middle Jurassic, an important but poorly-known time in dinosaur evolution.'
            },
            images: { card: paleoCreature('monolophosaurus'), heroCandidates: heroCandidates('monolophosaurus') },
            external: external('monolophosaurus', 'Monolophosaurus')
        },
        {
            id: 'protoceratops',
            name: 'Protoceratops',
            rarity: 'epic',
            unlockOrder: 72,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Protoceratopsidae' },
                { label: 'Genus', value: 'Protoceratops' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '0.6 m' },
                { label: 'Length', value: '1.8 m' },
                { label: 'Weight', value: '180 kg' }
            ],
            sections: {
                description: 'Protoceratops was a sheep-sized ceratopsian that lived in herds across the Gobi Desert, and its abundance in the fossil record has made it one of the best-studied small dinosaurs. It is famous for the "Fighting Dinosaurs" fossil — a locked-combat specimen found with a Velociraptor, preserved as a sandslide buried them alive.',
                discovery: 'Described by Granger and Gregory in 1923 from fossils collected during the American Museum of Natural History expeditions to Mongolia led by Roy Chapman Andrews.'
            },
            images: { card: paleoCreature('protoceratops'), heroCandidates: heroCandidates('protoceratops') },
            external: external('protoceratops', 'Protoceratops')
        },
        {
            id: 'pyroraptor',
            name: 'Pyroraptor',
            rarity: 'epic',
            unlockOrder: 73,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Pyroraptor' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.5 m' },
                { label: 'Length', value: '1.8 m' },
                { label: 'Weight', value: '15 kg' }
            ],
            sections: {
                description: 'Pyroraptor was a small European dromaeosaurid discovered in rocks that had been exposed by a forest fire — hence its name, meaning "fire thief". Like all dromaeosaurids it had a sickle-shaped killing claw on each foot and was likely feathered.',
                discovery: 'Described by Allain and Taquet in 2000 from fragmentary remains found in southern France in the Var department. Known material is limited to a few bones but its distinctive sickle claw confirms its dromaeosaurid identity.'
            },
            images: { card: paleoCreature('pyroraptor'), heroCandidates: heroCandidates('pyroraptor') },
            external: external('pyroraptor', 'Pyroraptor')
        },
        {
            id: 'rajasaurus',
            name: 'Rajasaurus',
            rarity: 'epic',
            unlockOrder: 74,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Abelisauridae' },
                { label: 'Genus', value: 'Rajasaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '3,000 kg' }
            ],
            sections: {
                description: 'Rajasaurus was an abelisaurid from Late Cretaceous India, closely related to Carnotaurus and Majungasaurus. Its name means "princely lizard" — it bore a single horn-like crest on its snout, similar to other abelisaurids but less pronounced than the nasal horn of Carnotaurus.',
                discovery: 'Described by Wilson et al. in 2003 from a partial skeleton found along the Narmada River in Gujarat, India. It is the best-known large theropod from the Indian subcontinent during the Cretaceous period.'
            },
            images: { card: paleoCreature('rajasaurus'), heroCandidates: heroCandidates('rajasaurus') },
            external: external('rajasaurus', 'Rajasaurus')
        },
        {
            id: 'sinoceratops',
            name: 'Sinoceratops',
            rarity: 'epic',
            unlockOrder: 75,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ceratopsidae' },
                { label: 'Genus', value: 'Sinoceratops' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '2.5 m' },
                { label: 'Length', value: '6 m' },
                { label: 'Weight', value: '2,000 kg' }
            ],
            sections: {
                description: 'Sinoceratops was a large ceratopsid — the only confirmed member of this group known from Asia. Its frill bore forward-curving hornlets along its edge rather than the typical spikes, giving it a distinctive crown-like appearance. It was likely closely related to Triceratops and its kin.',
                discovery: 'Described by Xu Xing et al. in 2010 from fossils found in the Zhucheng Formation of Shandong Province, China. Its discovery showed that large ceratopsids ranged into Asia during the Late Cretaceous.'
            },
            images: { card: paleoCreature('sinoceratops'), heroCandidates: heroCandidates('sinoceratops') },
            external: external('sinoceratops', 'Sinoceratops')
        },
        {
            id: 'struthiomimus',
            name: 'Struthiomimus',
            rarity: 'epic',
            unlockOrder: 76,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Ornithomimidae' },
                { label: 'Genus', value: 'Struthiomimus' },
                { label: 'Bio Group', value: 'Ornithomimosaur' },
                { label: 'Height', value: '1.4 m' },
                { label: 'Length', value: '4.3 m' },
                { label: 'Weight', value: '150 kg' }
            ],
            sections: {
                description: 'Struthiomimus was an ostrich-mimic dinosaur with long legs built for speed, a toothless beak, and long arms with clawed hands. Its name means "ostrich mimic" and it was one of the fastest dinosaurs of its time, likely reaching speeds of 50–80 km/h to escape predators.',
                discovery: 'First described by Osborn in 1917 from fossils found in Alberta, Canada. Well-preserved specimens with feather impressions were later found, confirming that ornithomimosaurs bore wing-like feathers on their arms despite being flightless.'
            },
            images: { card: paleoCreature('struthiomimus'), heroCandidates: heroCandidates('struthiomimus') },
            external: external('struthiomimus', 'Struthiomimus')
        },
        {
            id: 'stygimoloch',
            name: 'Stygimoloch',
            rarity: 'epic',
            unlockOrder: 77,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Pachycephalosauridae' },
                { label: 'Genus', value: 'Stygimoloch' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '1.2 m' },
                { label: 'Length', value: '3 m' },
                { label: 'Weight', value: '78 kg' }
            ],
            sections: {
                description: 'Stygimoloch was a dome-headed pachycephalosaur with a cluster of large spikes and horns at the back of its skull. Some researchers consider it a juvenile form of Pachycephalosaurus, with the horns and dome changing shape as it aged, though this remains debated.',
                discovery: 'Described by Galton and Sues in 1983 from fragmentary skull material found in the Hell Creek Formation of Montana and Wyoming. Its dramatic horned dome makes it one of the most visually striking pachycephalosaurs.'
            },
            images: { card: paleoCreature('stygimoloch'), heroCandidates: heroCandidates('stygimoloch') },
            external: external('stygimoloch', 'Stygimoloch')
        },
        {
            id: 'tsintaosaurus',
            name: 'Tsintaosaurus',
            rarity: 'epic',
            unlockOrder: 78,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Hadrosauridae' },
                { label: 'Genus', value: 'Tsintaosaurus' },
                { label: 'Bio Group', value: 'Large Herbivore' },
                { label: 'Height', value: '3.5 m' },
                { label: 'Length', value: '10 m' },
                { label: 'Weight', value: '4,000 kg' }
            ],
            sections: {
                description: 'Tsintaosaurus was a hadrosaur with an unusual hollow, unicorn-like crest pointing forward from its skull. Long debated as a broken or misinterpreted bone, CT scanning confirmed the crest was genuine. Like other hadrosaurs it may have used it to produce resonant calls.',
                discovery: 'Described by Yang Zhongjian in 1958 from fossils found in the Shandong Province of China. Named after the former romanisation of Qingdao (Tsingtao), the city near the discovery site.'
            },
            images: { card: paleoCreature('tsintaosaurus'), heroCandidates: heroCandidates('tsintaosaurus') },
            external: external('tsintaosaurus', 'Tsintaosaurus')
        },
        {
            id: 'stegoceras',
            name: 'Stegoceras',
            rarity: 'epic',
            unlockOrder: 79,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Pachycephalosauridae' },
                { label: 'Genus', value: 'Stegoceras' },
                { label: 'Bio Group', value: 'Small Herbivore' },
                { label: 'Height', value: '0.7 m' },
                { label: 'Length', value: '2 m' },
                { label: 'Weight', value: '10 kg' }
            ],
            sections: {
                description: 'Stegoceras was a small dome-headed pachycephalosaur with a thick, rounded skull roof reinforced by a lattice of bone underneath. The dome may have been used in head-butting contests between rivals, similar to modern bighorn sheep, though debate continues over the forces involved.',
                discovery: 'Described by Lambe in 1902, making it one of the earliest pachycephalosaurs known to science. Numerous skull caps have been found in the Dinosaur Park Formation of Alberta, Canada.'
            },
            images: { card: paleoCreature('stegoceras'), heroCandidates: heroCandidates('stegoceras') },
            external: external('stegoceras', 'Stegoceras')
        },
        {
            id: 'rinchenia',
            name: 'Rinchenia',
            rarity: 'epic',
            unlockOrder: 80,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Oviraptoridae' },
                { label: 'Genus', value: 'Rinchenia' },
                { label: 'Bio Group', value: 'Small Omnivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '1.8 m' },
                { label: 'Weight', value: '30 kg' }
            ],
            sections: {
                description: 'Rinchenia was an oviraptorid with an exceptionally tall, dome-shaped cranial crest — the tallest known among oviraptorids. This crest may have been used for species recognition or display. Like all oviraptorids it had a toothless beak and was likely an opportunistic omnivore.',
                discovery: 'Originally described as a species of Oviraptor in 1981 by Barsbold, it was reclassified into its own genus Rinchenia in 1997 based on its uniquely high crest and distinct skull proportions. Fossils come from the Nemegt Formation of Mongolia.'
            },
            images: { card: paleoCreature('rinchenia'), heroCandidates: heroCandidates('rinchenia') },
            external: external('rinchenia', 'Rinchenia')
        },
        {
            id: 'sonorasaurus',
            name: 'Sonorasaurus',
            rarity: 'epic',
            unlockOrder: 81,
            stats: [
                { label: 'Diet', value: 'High Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Brachiosauridae' },
                { label: 'Genus', value: 'Sonorasaurus' },
                { label: 'Bio Group', value: 'Giant Herbivore' },
                { label: 'Height', value: '8 m' },
                { label: 'Length', value: '15 m' },
                { label: 'Weight', value: '20,000 kg' }
            ],
            sections: {
                description: 'Sonorasaurus was a large brachiosaurid sauropod from the Cretaceous of North America — a time when such giant long-necked dinosaurs had become rare on that continent. Its high-shouldered body plan with forelegs longer than hindlegs let it reach tall vegetation unavailable to other herbivores.',
                discovery: 'Described by Ratkevich in 1998 from partial remains found in the Turney Ranch Formation of Arizona — hence "Sonora" in the name. It is the official state dinosaur of Arizona, designated in 2018.'
            },
            images: { card: paleoCreature('sonorasaurus'), heroCandidates: heroCandidates('sonorasaurus') },
            external: external('sonorasaurus', 'Sonorasaurus')
        },
        {
            id: 'scelidosaurus',
            name: 'Scelidosaurus',
            rarity: 'epic',
            unlockOrder: 82,
            stats: [
                { label: 'Diet', value: 'Ground Paleobotany' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Jurassic' },
                { label: 'Family', value: 'Scelidosauridae' },
                { label: 'Genus', value: 'Scelidosaurus' },
                { label: 'Bio Group', value: 'Armoured Herbivore' },
                { label: 'Height', value: '1.4 m' },
                { label: 'Length', value: '4 m' },
                { label: 'Weight', value: '270 kg' }
            ],
            sections: {
                description: 'Scelidosaurus was an early armoured dinosaur from the Jurassic of England, predating the more familiar ankylosaurs and stegosaurs. Its body was covered with rows of bony scutes embedded in the skin and it is one of the earliest complete dinosaur skeletons ever found.',
                discovery: 'Described by Richard Owen in 1861 from a beautifully preserved skeleton found in the Charmouth Mudstone of Dorset, England. The specimen was so well-preserved that Owen could reconstruct its entire body armour arrangement.'
            },
            images: { card: paleoCreature('scelidosaurus'), heroCandidates: heroCandidates('scelidosaurus') },
            external: external('scelidosaurus', 'Scelidosaurus')
        },
        {
            id: 'ceratosaurus',
            name: 'Ceratosaurus',
            rarity: 'unique',
            unlockOrder: 83,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Jurassic' },
                { label: 'Family', value: 'Ceratosauridae' },
                { label: 'Genus', value: 'Ceratosaurus' },
                { label: 'Bio Group', value: 'Large Carnivore' },
                { label: 'Height', value: '3.5 m' },
                { label: 'Length', value: '9 m' },
                { label: 'Weight', value: '1,500 kg' }
            ],
            sections: {
                description: 'Ceratosaurus was a large predatory dinosaur with a distinctive nasal horn and smaller horns above each eye, plus a row of bony scutes along its spine. It coexisted with Allosaurus in the Late Jurassic Morrison ecosystem but was generally less common and may have specialised in different prey.',
                discovery: 'Described by Othniel Charles Marsh in 1884 from a nearly complete skeleton found in the Morrison Formation of Colorado. It was one of the first large carnivorous dinosaurs described from North America and remains one of the few theropods known to bear a nasal horn.'
            },
            images: { card: paleoCreature('ceratosaurus'), heroCandidates: heroCandidates('ceratosaurus') },
            external: external('ceratosaurus', 'Ceratosaurus')
        },
        {
            id: 'graciliraptor',
            name: 'Graciliraptor',
            rarity: 'legendary',
            unlockOrder: 84,
            stats: [
                { label: 'Diet', value: 'Carnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Cretaceous' },
                { label: 'Family', value: 'Dromaeosauridae' },
                { label: 'Genus', value: 'Graciliraptor' },
                { label: 'Bio Group', value: 'Small Carnivore' },
                { label: 'Height', value: '0.3 m' },
                { label: 'Length', value: '0.9 m' },
                { label: 'Weight', value: '1 kg' }
            ],
            sections: {
                description: 'Graciliraptor was a tiny microraptorian dromaeosaurid from Early Cretaceous China, closely related to the four-winged Microraptor. It was among the smallest known dromaeosaurids and likely hunted insects and small vertebrates. Its long feathered tail served as a counterbalance.',
                discovery: 'Described by Xu Xing and Wang Xiaolin in 2004 from fragmentary limb and tail bones found in the Yixian Formation of Liaoning Province, China — the same formation that has produced many feathered dinosaur discoveries.'
            },
            images: { card: paleoCreature('graciliraptor'), heroCandidates: heroCandidates('graciliraptor') },
            external: external('graciliraptor', 'Graciliraptor')
        },
        {
            id: 'nyctosaurus',
            name: 'Nyctosaurus',
            rarity: 'legendary',
            unlockOrder: 85,
            stats: [
                { label: 'Diet', value: 'Piscivore' },
                { label: 'Habitat', value: 'Aerial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Nyctosauridae' },
                { label: 'Genus', value: 'Nyctosaurus' },
                { label: 'Bio Group', value: 'Flying Reptile' },
                { label: 'Height', value: '0.5 m' },
                { label: 'Length', value: '0.5 m' },
                { label: 'Weight', value: '2 kg' }
            ],
            sections: {
                description: 'Nyctosaurus was a pterosaur (flying reptile, not a dinosaur) with an extraordinary antler-like crest that could be taller than its entire body length. Unlike most pterosaurs it lacked claws on its wing fingers, suggesting it was highly specialised for soaring over open ocean to catch fish.',
                discovery: 'First described by Marsh in 1876. Remarkable crested specimens were described from the Niobrara Formation of Kansas in 2003, revealing a two-pronged crest longer than the skull — one of the most extreme cranial ornaments of any flying vertebrate.'
            },
            images: { card: paleoCreature('nyctosaurus'), heroCandidates: heroCandidates('nyctosaurus') },
            external: external('nyctosaurus', 'Nyctosaurus')
        },
        {
            id: 'nomingia',
            name: 'Nomingia',
            rarity: 'unique',
            unlockOrder: 86,
            stats: [
                { label: 'Diet', value: 'Omnivore' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Late Cretaceous' },
                { label: 'Family', value: 'Oviraptoridae' },
                { label: 'Genus', value: 'Nomingia' },
                { label: 'Bio Group', value: 'Small Omnivore' },
                { label: 'Height', value: '1 m' },
                { label: 'Length', value: '1.7 m' },
                { label: 'Weight', value: '20 kg' }
            ],
            sections: {
                description: 'Nomingia was an oviraptorid remarkable for having a pygostyle — a fused tail vertebra structure otherwise seen only in modern birds, providing the attachment point for a fan of tail feathers used in display. It is the first non-avian dinosaur known to have had this bird-like tail structure.',
                discovery: 'Described by Barsbold et al. in 2000 from a partial skeleton found in the Nemegt Formation of Mongolia. Named after the Nomingin Gobi region where it was found. The pygostyle discovery was a key piece of evidence linking oviraptorids to modern birds.'
            },
            images: { card: paleoCreature('nomingia'), heroCandidates: heroCandidates('nomingia') },
            external: external('nomingia', 'Nomingia')
        },
        {
            id: 'dimetrodon',
            name: 'Dimetrodon',
            rarity: 'rare',
            unlockOrder: 29,
            stats: [
                { label: 'Diet', value: 'Carnivore, Live Prey' },
                { label: 'Habitat', value: 'Terrestrial' },
                { label: 'Era', value: 'Early Permian' },
                { label: 'Family', value: 'Sphenacodontidae' },
                { label: 'Genus', value: 'Dimetrodon' },
                { label: 'Bio Group', value: 'Prehistoric Reptile' },
                { label: 'Height', value: '1.7 m' },
                { label: 'Length', value: '3.5 m' },
                { label: 'Weight', value: '250 kg' }
            ],
            sections: {
                description: 'Despite often being grouped with dinosaurs, Dimetrodon was a synapsid — more closely related to mammals than to any dinosaur. Its iconic sail, formed by elongated vertebral spines, may have regulated body temperature or been used for display.',
                discovery: 'Dimetrodon fossils were first described by Edward Drinker Cope in 1878 from remains found in Texas. It is one of the most commonly found fossils from the Permian period.'
            },
            images: { card: paleoCreature('dimetrodon'), heroCandidates: heroCandidates('dimetrodon') },
            external: external('dimetrodon', 'Dimetrodon')
        }
    ];
})();
