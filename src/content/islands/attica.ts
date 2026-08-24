import { IMAGES } from "../images";
import type { Island } from "../types";

export const ATTICA_ISLANDS: Island[] = [
  {
    slug: "athens",
    name: "Athens",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Two nights in Athens at the start of a honeymoon gives the trip a spine. Stay in Plaka or Kolonaki, see the Acropolis at opening time and the museum after, and eat on a rooftop with the Parthenon lit above you.",
    bestFor: "Antiquities, the best restaurant scene in Greece, rooftop dinners",
    notFor: "Couples who want to swim from the door",
    nights: "2 nights",
    bestMonths: "April to early June, September to November",
    plannerNote:
      "Book the Acropolis for the first entry of the day, not sunset. You get the marble to yourselves for forty minutes and the light is far kinder for photographs.",
    lastWalked: "July 2026",
    intro: [
      "Most couples treat Athens as an obstacle between the plane and the ferry. Two nights here changes the shape of the entire honeymoon: it turns a beach holiday into a journey through a country.",
      "The city has transformed in the last decade. The pedestrian route around the base of the Acropolis is one of the great urban walks in Europe. The Acropolis Museum is genuinely world-class. And the food has gone from competent to serious, with a generation of chefs cooking Greek ingredients with real ambition.",
      "The other argument is practical. Almost every island journey starts here anyway. Sleeping two nights in the city rather than sprinting through the airport removes the exhaustion that otherwise ruins the first island day.",
    ],
    bases: [
      {
        name: "Plaka & Anafiotika",
        note: "Beneath the Acropolis, with the tiny Cycladic quarter of Anafiotika built by island stonemasons in the 1800s. The most romantic place to sleep in the city.",
      },
      {
        name: "Kolonaki",
        note: "Elegant, residential, with the best shopping and the funicular up Lycabettus. Quieter at night than Plaka.",
      },
      {
        name: "Monastiraki & Psyrri",
        note: "Rooftops with the best Parthenon views and the liveliest evenings. Noisier.",
      },
      {
        name: "The Athens Riviera",
        note: "Vouliagmeni and Kavouri, thirty minutes south, where the city gets a coastline. Useful if you want a sea day without leaving Attica.",
      },
    ],
    stays: [
      {
        label: "Rooftop suite with Acropolis view",
        note: "Worth the premium for two nights. Waking up with the Parthenon in the window is the point.",
      },
      {
        label: "Neoclassical boutique hotel",
        note: "Restored townhouses in Plaka and Kolonaki, quiet and characterful.",
      },
      {
        label: "Riviera resort at Vouliagmeni",
        note: "For couples who want to combine the city with a beach base and a spa.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and look up",
        body: "Settle, walk Plaka and Anafiotika in the late afternoon, then dinner on a rooftop with the Acropolis floodlit.",
      },
      {
        day: "Day 2",
        title: "The Acropolis, properly",
        body: "First entry at eight, then the Acropolis Museum with the Parthenon marbles displayed in the orientation of the original building. Long lunch, then the Agora in the cool of the evening.",
      },
      {
        day: "Day 3",
        title: "Sounion or the port",
        body: "Either the coast road to the Temple of Poseidon at Cape Sounion for sunset, or straight to Piraeus for the boat.",
      },
    ],
    pairings: [
      {
        slug: "hydra",
        note: "Ninety minutes by hydrofoil, and the fastest way from a capital city to a car-free island anywhere in Europe.",
      },
      {
        slug: "santorini",
        note: "The standard opening: two nights of culture before the caldera.",
      },
      {
        slug: "naxos",
        note: "For couples who want the city and then a long, unhurried beach week.",
      },
    ],
    gettingThere:
      "Athens International is served by direct flights worldwide. The metro reaches the centre in 40 minutes. Piraeus port is 30–50 minutes from the centre by road; the Saronic hydrofoils leave from Gate E8.",
    crowds:
      "The Acropolis is uncomfortable between 10am and 4pm from May to October. Early morning and the last two hours before closing are transformed.",
    wind: "Not a factor in the city. Sea days on the Riviera can be breezy in July and August.",
    faqs: [
      {
        question: "How many nights should we spend in Athens on a honeymoon?",
        answer:
          "Two. That covers the Acropolis at opening time, the museum, one long dinner and an unhurried morning, without cutting into island time.",
      },
      {
        question: "Is Athens worth visiting on a honeymoon?",
        answer:
          "Yes. It gives the trip context, the restaurant scene is the best in Greece, and since most island journeys route through Athens anyway, two nights here removes a punishing travel day.",
      },
      {
        question: "Where should honeymooners stay in Athens?",
        answer:
          "Plaka for atmosphere beneath the Acropolis, or Kolonaki for elegance and quiet. Choose a hotel with a roof terrace facing the Parthenon — it is the detail couples remember.",
      },
      {
        question: "When is the best time to visit the Acropolis?",
        answer:
          "At opening, around eight in the morning. The site is nearly empty for the first forty minutes, the marble is not yet radiating heat, and the light is far better than at midday.",
      },
    ],
    heroImage: IMAGES.athensLuxury,
    gallery: [
      IMAGES.athensWine,
      IMAGES.athensGastronomy,
      IMAGES.athensWineTwo,
      IMAGES.aegeanWindow,
    ],
    plannerType: "the-administrator",
    itinerary: "athens-cyclades-14-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "hydra",
    name: "Hydra",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Hydra bans cars and wheeled vehicles entirely — luggage moves by donkey. A stone amphitheatre of captains' mansions around a perfect harbour, ninety minutes from Athens. Stay 3 nights, any time from April to October.",
    bestFor: "No cars, a flawless harbour, swimming platforms, art",
    notFor: "Couples who need sandy beaches",
    nights: "3 nights",
    bestMonths: "April to June and September to October",
    plannerNote:
      "Walk out to Spilia or Hydronetta before sunset, take the ladder into the sea from the rocks, and swim with the whole harbour in front of you. It is the best hour on the island.",
    lastWalked: "May 2026",
    intro: [
      "There are no cars on Hydra. Not restricted — banned, along with motorbikes and bicycles. Your luggage goes up the hill on a mule, and the loudest sound in the harbour is hooves on stone.",
      "The island grew rich from shipping in the eighteenth century and spent the money on grey stone mansions that climb the slope in a perfect amphitheatre around the port. Nothing has been allowed to spoil it since. The result is arguably the most beautiful harbour in Greece.",
      "It has been an artists' island since the 1950s — Leonard Cohen bought a house here in 1960 — and that crowd never entirely left. There are no proper beaches, only rocks and ladders, which is part of why the island stayed as it is.",
    ],
    bases: [
      {
        name: "The harbour and the lanes above",
        note: "Everything is here. Stay high enough for a view and be prepared for steps.",
      },
      {
        name: "Kamini",
        note: "A tiny fishing harbour fifteen minutes' walk west, quieter, with one excellent taverna on the water.",
      },
      {
        name: "Vlychos",
        note: "Thirty minutes on foot or five by water taxi, with the island's best pebble beach and a stone bridge.",
      },
    ],
    stays: [
      {
        label: "Captain's mansion",
        note: "Eighteenth-century shipowners' houses converted into small hotels — vaulted ceilings, courtyards, and views over the roofs to the harbour.",
      },
      {
        label: "Waterfront guesthouse at Kamini",
        note: "Small and simple, away from the harbour bustle, with swimming off the rocks below.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive by sea",
        body: "The hydrofoil from Piraeus, the mules taking your bags up, and an evening on the harbour watching the boats.",
      },
      {
        day: "Day 2",
        title: "Swim and walk",
        body: "The coast path west to Kamini and Vlychos, swimming from the rocks along the way, and lunch on the water at Kamini.",
      },
      {
        day: "Day 3",
        title: "The monastery and the sunset rocks",
        body: "The climb up to Profitis Ilias monastery in the morning for the view across to the Peloponnese, then the ladders at Hydronetta before dinner.",
      },
    ],
    pairings: [
      {
        slug: "spetses",
        note: "An hour by hydrofoil, and the natural Saronic pair.",
      },
      {
        slug: "athens",
        note: "Ninety minutes back to the city. The easiest culture-and-island honeymoon in Greece.",
      },
      {
        slug: "nafplio",
        note: "By boat and short drive, combining the island with the prettiest town on the mainland.",
      },
    ],
    gettingThere:
      "Hydrofoil from Piraeus in 90 minutes — no flight, no car. Water taxis run around the island. There is no airport and no vehicle traffic of any kind.",
    crowds:
      "Day-trippers arrive from Athens around eleven and leave by five. Stay overnight and you get the harbour back.",
    wind: "Sheltered in the Saronic gulf. Crossings are rarely disrupted.",
    faqs: [
      {
        question: "Are there really no cars on Hydra?",
        answer:
          "None. Cars, motorbikes and even bicycles are banned. Goods and luggage move by donkey and mule, and everything else is done on foot or by water taxi.",
      },
      {
        question: "Is Hydra good for a honeymoon?",
        answer:
          "Very. It is ninety minutes from Athens, has the most beautiful harbour in Greece, no traffic and a genuine artistic history. The one caveat is that it has no sandy beaches — you swim from rocks and ladders.",
      },
      {
        question: "Does Hydra have beaches?",
        answer:
          "Not sandy ones. Swimming is from rock platforms and ladders at Spilia and Hydronetta, or from pebble at Vlychos and Bisti, reached on foot or by water taxi.",
      },
      {
        question: "How long should we stay on Hydra?",
        answer:
          "Three nights. That gives you the coast walk, a boat around the island, the monastery climb and two long evenings on the harbour after the day-trippers have gone.",
      },
    ],
    heroImage: IMAGES.aegeanWindow,
    gallery: [IMAGES.stock2, IMAGES.athensLuxury, IMAGES.stock4, IMAGES.aegeanSailing],
    plannerType: "the-visionary",
    itinerary: "hydra-spetses-escape",
    updatedAt: "2026-07-20",
  },
  {
    slug: "spetses",
    name: "Spetses",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Spetses combines Venetian-influenced mansions, horse-drawn carriages and pine-backed beaches two hours from Athens. Cars are restricted in the town. Stay 3 nights between May and October, usually with Hydra.",
    bestFor: "Elegant old town, horse carriages, pine forest, good restaurants",
    notFor: "Couples looking for a remote or undiscovered island",
    nights: "3 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Hire bicycles and ride the coast road round the island in the late afternoon. It is flat, shaded by pines, and the light through them at six is remarkable.",
    lastWalked: "May 2026",
    intro: [
      "Spetses is Hydra's more comfortable sibling: the same shipping wealth and neoclassical architecture, but with pine forest, actual beaches and a slightly grander social life. Athenian families have had houses here for generations.",
      "The Old Harbour, Palio Limani, is the beautiful part — boatyards still building wooden hulls by hand, mansions along the water, and the best restaurants on the island. Cars are restricted in Dapia, the main town, so transport is by horse-drawn carriage, water taxi or bicycle.",
      "It has a heroine, too. Laskarina Bouboulina, who commanded ships in the War of Independence, lived here, and her house is now a museum. Greeks take her very seriously.",
    ],
    bases: [
      {
        name: "The Old Harbour",
        note: "Where honeymooners should be. Boatyards, mansions and the best dinners on the island.",
      },
      {
        name: "Dapia",
        note: "The main town and port, with the shops, the museums and the carriages.",
      },
      {
        name: "Ligoneri & Vrellos",
        note: "West along the coast, pine-backed and quieter, with the sunset beaches.",
      },
    ],
    stays: [
      {
        label: "Restored mansion hotel",
        note: "Spetses has several grand nineteenth-century houses turned into small hotels with gardens and pools.",
      },
      {
        label: "Old Harbour boutique",
        note: "Small properties on the water where you walk out into dinner.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Old Harbour evening",
        body: "Arrive by hydrofoil, take a carriage round to Palio Limani, and eat with the boatyards behind you.",
      },
      {
        day: "Day 2",
        title: "Around the island",
        body: "Bicycles or a water taxi round the coast to Agioi Anargyroi and Zogeria, with a swim and a long lunch.",
      },
      {
        day: "Day 3",
        title: "Bouboulina and the beaches",
        body: "The museum and the old town in the morning, then Vrellos for sunset before a final dinner.",
      },
    ],
    pairings: [
      {
        slug: "hydra",
        note: "An hour by hydrofoil. The natural pair.",
      },
      {
        slug: "nafplio",
        note: "A short boat to the mainland and a half-hour drive to the loveliest town in the Peloponnese.",
      },
    ],
    gettingThere:
      "Hydrofoil from Piraeus in about two hours, or a short boat from Kosta in the Peloponnese, which can be reached by road from Athens in two and a half hours.",
    crowds:
      "Busy with Athenians at weekends and through August. Weekdays in June and September are calm.",
    wind: "Sheltered. The Saronic rarely causes crossing problems.",
    faqs: [
      {
        question: "Hydra or Spetses for a honeymoon?",
        answer:
          "Hydra for the more dramatic harbour and the complete absence of vehicles. Spetses for pine-backed beaches, a wider choice of restaurants and slightly more comfort. Three nights on each is the ideal answer.",
      },
      {
        question: "Are there cars on Spetses?",
        answer:
          "Movement is restricted in the main town, so most transport is by horse-drawn carriage, scooter, bicycle or water taxi. It is not fully car-free like Hydra.",
      },
      {
        question: "How do you get to Spetses from Athens?",
        answer:
          "A two-hour hydrofoil from Piraeus, or drive two and a half hours to Kosta in the Peloponnese and take the ten-minute boat across.",
      },
    ],
    heroImage: IMAGES.stock4,
    gallery: [IMAGES.aegeanSailing, IMAGES.aegeanWindow, IMAGES.stock1, IMAGES.athensLuxury],
    plannerType: "the-processor",
    itinerary: "hydra-spetses-escape",
    updatedAt: "2026-07-20",
  },
  {
    slug: "aegina",
    name: "Aegina",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Aegina is forty minutes from Piraeus and has one of the best-preserved ancient temples in Greece at Aphaia, plus pistachio groves and the abandoned Byzantine town of Paleochora. Stay 2 nights, or visit for a day.",
    bestFor: "A great temple, pistachios, easy access, day trips",
    notFor: "Couples wanting a secluded, undiscovered island",
    nights: "2 nights",
    bestMonths: "April to June and September to October",
    plannerNote:
      "Paleochora is a hillside with thirty-odd surviving Byzantine chapels and nothing else. Almost no visitor goes, and it is one of the strangest, quietest places in Attica.",
    lastWalked: "April 2026",
    intro: [
      "Aegina is the closest island to Athens and the easiest thing in Greece to underestimate. It was once the leading maritime power in the Aegean and briefly the capital of the modern Greek state, and it kept the buildings to prove it.",
      "The Temple of Aphaia, on a pine-covered ridge in the northeast, is one of the three best-preserved Doric temples in the country and forms a near-perfect triangle with the Parthenon and the temple at Sounion.",
      "It is also pistachio country. The Aegina pistachio has protected designation status and the roadside stalls in autumn are worth the trip on their own.",
    ],
    bases: [
      {
        name: "Aegina Town",
        note: "The neoclassical port, with the fish market, the single standing column of Apollo's temple, and the ferries.",
      },
      {
        name: "Agia Marina",
        note: "The main beach resort on the east coast, directly below the Temple of Aphaia.",
      },
      {
        name: "Perdika",
        note: "A small fishing harbour in the south with the best seafood on the island and the boat to Moni islet.",
      },
    ],
    stays: [
      {
        label: "Neoclassical guesthouse in town",
        note: "Simple restored houses near the harbour, ideal for a night or two.",
      },
      {
        label: "Villa in the pistachio groves",
        note: "Inland, quiet, and close to both coasts.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Town and Perdika",
        body: "Arrive from Piraeus, walk the harbour and the fish market, then dinner on the water at Perdika.",
      },
      {
        day: "Day 2",
        title: "Aphaia and Paleochora",
        body: "The temple in the morning light, the abandoned Byzantine chapels of Paleochora afterwards, and a swim at Agia Marina.",
      },
    ],
    pairings: [
      {
        slug: "hydra",
        note: "A short hop further down the Saronic, and a considerable step up in beauty.",
      },
      {
        slug: "athens",
        note: "Forty minutes back to Piraeus. The easiest island escape from the city.",
      },
    ],
    gettingThere:
      "Forty minutes by fast ferry from Piraeus, or seventy on the conventional boat. Extremely frequent departures all year. A car or scooter helps but is not essential.",
    crowds: "Busy with Athenians at weekends. Quiet on weekdays outside August.",
    wind: "Sheltered in the Saronic gulf.",
    faqs: [
      {
        question: "Is Aegina worth staying on for a honeymoon?",
        answer:
          "For a night or two at the start or end of a trip, yes — particularly for the Temple of Aphaia. As a main honeymoon base it is too close to Athens and too busy at weekends.",
      },
      {
        question: "What is the Temple of Aphaia?",
        answer:
          "A remarkably complete Doric temple of around 500 BC on a pine ridge in northeast Aegina. It is one of the three best-preserved in Greece and has views across to both Athens and the Peloponnese.",
      },
      {
        question: "Why is Aegina famous for pistachios?",
        answer:
          "The island's volcanic soil and dry climate produce an unusually sweet, intensely flavoured nut, protected by designation of origin. Harvest is in September and the roadside stalls sell it fresh.",
      },
    ],
    heroImage: IMAGES.stock5,
    gallery: [IMAGES.athensGastronomy, IMAGES.aegeanWindow, IMAGES.stock3, IMAGES.athensLuxury],
    plannerType: "the-action-taker",
    updatedAt: "2026-07-20",
  },
  {
    slug: "poros",
    name: "Poros",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Poros is separated from the Peloponnese by a two-hundred-metre channel, with a clocktower town, a lemon forest opposite and pine-covered coves. One hour from Piraeus. Stay 2–3 nights from May to October.",
    bestFor: "A pretty harbour town, lemon groves, calm swimming, sailing",
    notFor: "Couples wanting drama or major sights",
    nights: "2–3 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Cross to Galatas and walk into the lemon forest — thirty thousand trees on the hillside with a waterfall in the middle. In blossom season the smell reaches the boat.",
    lastWalked: "April 2026",
    intro: [
      "Poros is almost part of the mainland: a channel two hundred metres wide separates it from the Peloponnese, and boats cross constantly. The town rises in tiers of tiled roofs to a blue-and-white clocktower, and the whole thing reflects in water that barely moves.",
      "Opposite, on the mainland side, is the lemon forest of Lemonodasos — some thirty thousand trees on a hillside with a waterfall and a taverna in the middle of them. Walking up through it in spring is one of the loveliest hours in Attica.",
      "The island itself is small and pine-covered, with sheltered coves at Love Bay and Russian Bay, the ruins of an eighteenth-century Russian naval station, and a sanctuary of Poseidon in the hills.",
    ],
    bases: [
      {
        name: "Poros Town",
        note: "The tiered harbour town beneath the clocktower. Everything is walkable and the waterfront is lovely at night.",
      },
      {
        name: "Askeli",
        note: "The main sandy beach on the east coast, ten minutes from town, with the larger hotels.",
      },
      {
        name: "Neorio & Love Bay",
        note: "West, pine-fringed and sheltered, with the calmest swimming on the island.",
      },
    ],
    stays: [
      {
        label: "Harbourfront townhouse",
        note: "Small hotels in the tiered lanes with balconies over the channel.",
      },
      {
        label: "Beach hotel at Askeli",
        note: "Straightforward and comfortable, with a pool and sand.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Harbour and clocktower",
        body: "Arrive, climb to the clocktower for the view down the channel, then dinner on the waterfront.",
      },
      {
        day: "Day 2",
        title: "The lemon forest",
        body: "The five-minute crossing to Galatas and the walk up through thirty thousand lemon trees to the waterfall taverna.",
      },
      {
        day: "Day 3",
        title: "Coves and the sanctuary",
        body: "Love Bay and Russian Bay in the morning, the sanctuary of Poseidon in the pines, and a last swim at Askeli.",
      },
    ],
    pairings: [
      {
        slug: "hydra",
        note: "Thirty minutes further down the Saronic.",
      },
      {
        slug: "nafplio",
        note: "An hour and a half by road from Galatas, combining island and mainland.",
      },
    ],
    gettingThere:
      "One hour by hydrofoil from Piraeus, or drive to Galatas in the Peloponnese in two and a half hours and take the five-minute ferry across.",
    crowds: "Popular with Athenian weekenders and sailing flotillas. Weekdays are calm.",
    wind: "Very sheltered. The channel is flat in almost all conditions.",
    faqs: [
      {
        question: "Is Poros good for a honeymoon?",
        answer:
          "It suits a relaxed two or three nights rather than a full honeymoon. The town is pretty, the swimming is calm and the lemon forest opposite is genuinely special, but the island is small.",
      },
      {
        question: "What is Lemonodasos?",
        answer:
          "A forest of around thirty thousand lemon trees on the mainland hillside opposite Poros, with a waterfall and taverna in the middle. It is reached by a five-minute boat crossing to Galatas.",
      },
    ],
    heroImage: IMAGES.stock3,
    gallery: [IMAGES.aegeanSailing, IMAGES.stock1, IMAGES.athensGastronomy, IMAGES.aegeanWindow],
    plannerType: "the-processor",
    updatedAt: "2026-07-20",
  },
  {
    slug: "sounion",
    name: "Cape Sounion",
    region: "attica",
    eyebrow: "Attica & the Saronic",
    answer:
      "Cape Sounion is a fifth-century BC Temple of Poseidon on a headland seventy minutes south of Athens, and the best sunset within reach of the city. Visit for an evening, or stay one night on the Athens Riviera.",
    bestFor: "A sunset temple, the coast road, a first or last night",
    notFor: "Couples looking for a multi-night base",
    nights: "1 night or an evening",
    bestMonths: "April to October",
    plannerNote:
      "Drive down the coast road with the roof off, arrive an hour before sunset, and have dinner booked below the temple afterwards. It is the best possible last night in Greece.",
    lastWalked: "June 2026",
    intro: [
      "Sounion is where Attica ends. A white marble temple to Poseidon stands on a cliff sixty metres above the sea, built in 444 BC on the site of an earlier one, and fifteen of its columns are still standing.",
      "It works as an evening rather than a destination. The drive from Athens along the coast road takes about seventy minutes past the beaches of the Athens Riviera, and if you time it for an hour before sunset the marble turns gold and then rose while the sea goes dark below.",
      "Byron carved his name into one of the columns in 1810, which was vandalism then and is a curiosity now.",
    ],
    bases: [
      {
        name: "The Athens Riviera",
        note: "Vouliagmeni and Lagonissi have the good hotels, twenty to forty minutes back up the coast from the cape.",
      },
      {
        name: "Sounio village",
        note: "A handful of hotels and tavernas directly below the headland, if you want to wake up beneath the temple.",
      },
    ],
    stays: [
      {
        label: "Riviera resort",
        note: "Vouliagmeni's hotels sit on private coves with the thermal lake nearby, and Sounion is an easy evening drive.",
      },
    ],
    arc: [
      {
        day: "Evening",
        title: "The coast road and the temple",
        body: "Leave Athens mid-afternoon, stop to swim at Varkiza or Legrena, reach the temple an hour before sunset, then dinner on the water below.",
      },
    ],
    pairings: [
      {
        slug: "athens",
        note: "Seventy minutes back to the city. The natural bookend to a honeymoon.",
      },
      {
        slug: "aegina",
        note: "Visible across the water, and an easy addition from Piraeus.",
      },
    ],
    gettingThere:
      "A 70-minute drive from central Athens along the coast road, or 50 minutes from the airport. Private transfers are straightforward; we usually arrange a driver so you can both have a drink at dinner.",
    crowds:
      "Coach tours arrive for sunset from about an hour beforehand. Come earlier and walk the headland while it is quiet.",
    wind: "Exposed and often breezy on the headland, which is welcome in July and August.",
    faqs: [
      {
        question: "Is Cape Sounion worth visiting?",
        answer:
          "Yes, particularly at sunset. The Temple of Poseidon is one of the most dramatically sited buildings in Greece and it is only seventy minutes from central Athens by road.",
      },
      {
        question: "How do you get to Cape Sounion from Athens?",
        answer:
          "By car or private transfer along the coast road in about seventy minutes, or fifty minutes from the airport. Buses run from central Athens but are slow and limit your timing.",
      },
      {
        question: "Can you stay near Cape Sounion?",
        answer:
          "Yes. There are a few hotels in Sounio village directly below the temple, and rather better ones twenty to forty minutes north on the Athens Riviera at Lagonissi and Vouliagmeni.",
      },
    ],
    heroImage: IMAGES.athensWineTwo,
    gallery: [IMAGES.athensLuxury, IMAGES.aegeanWindow, IMAGES.stock2, IMAGES.athensGastronomy],
    plannerType: "the-visionary",
    updatedAt: "2026-07-20",
  },
];
