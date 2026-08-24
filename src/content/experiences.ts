import { IMAGES } from "./images";
import type { Experience } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    slug: "wine",
    title: "Wine & Vineyards",
    tagline: "Assyrtiko, Agiorgitiko and vines trained in baskets",
    answer:
      "Greek wine is having its moment: Santorini's Assyrtiko from basket-trained vines in volcanic ash, Nemea's Agiorgitiko reds, Samian Muscat and Crete's revived indigenous grapes. We arrange private tastings at working estates.",
    intro: [
      "Greece has three hundred indigenous grape varieties, most of which grow nowhere else, and in the last twenty years a generation of producers has stopped making bulk wine and started making serious ones.",
      "Santorini is the headline. The vines there are trained into low woven baskets, kouloura, lying on the ground so the fruit is shielded from the wind and can drink the morning fog. Some of the rootstock is pre-phylloxera and well over a century old. The Assyrtiko it produces is bone dry, saline and unmistakable.",
      "But the mainland is where the reds are. Nemea's Agiorgitiko in the Peloponnese, Xinomavro in Naoussa up north, and on Crete a revival of Vidiano, Liatiko and Kotsifali that has changed the island's reputation entirely.",
    ],
    highlights: [
      {
        title: "Basket vines on Santorini",
        body: "Private tastings at two estates near Pyrgos and Megalochori, walking the vineyards to see how the kouloura training actually works before you taste what it produces.",
      },
      {
        title: "Nemea at harvest",
        body: "Agiorgitiko in the Peloponnese during the September pressing, with lunch among the vines and a night in Nafplio afterwards.",
      },
      {
        title: "Samian Muscat",
        body: "The terraces above Vathy, where sweet Muscat has been made since antiquity, tasted at the cooperative that still controls it.",
      },
      {
        title: "Cretan revival",
        body: "The producers around Rethymno and Heraklion who brought Vidiano and Liatiko back from near-extinction.",
      },
    ],
    islands: ["santorini", "nafplio", "samos", "rethymno", "chania"],
    faqs: [
      {
        question: "Is Greek wine worth building a honeymoon around?",
        answer:
          "Yes. Greece has around three hundred indigenous grape varieties and a producer generation that has transformed quality since 2000. Santorini's Assyrtiko and Nemea's Agiorgitiko are the obvious starting points.",
      },
      {
        question: "Why are Santorini's vines grown in baskets?",
        answer:
          "The vines are woven into low circular baskets on the ground so the fruit sits protected inside, shielded from the constant wind and able to absorb moisture from the morning sea fog. There is almost no rain.",
      },
      {
        question: "When is the Greek wine harvest?",
        answer:
          "Santorini harvests unusually early, often in the first half of August. The mainland and Crete run from late August into September, and Nemea is typically mid to late September.",
      },
    ],
    heroImage: IMAGES.creteWine,
    updatedAt: "2026-07-21",
  },
  {
    slug: "culinary",
    title: "Culinary Journeys",
    tagline: "Cooking with people who grew what you are cooking",
    answer:
      "We build honeymoons around food: a Sifnos home kitchen, a Cretan mountain village, the Athens market at seven in the morning, and dinners at tables that do not appear on booking platforms.",
    intro: [
      "Greek food outside Greece is a caricature. Inside it, it is regional to the point of stubbornness — Cretan cooking, Cycladic cooking and North Aegean cooking share almost nothing except olive oil.",
      "The cooking days we arrange are not demonstrations in hotel kitchens. They are mornings in family houses, usually with someone's grandmother supervising, cooking dishes with ingredients from the garden outside the door.",
      "The other half of the work is dinner. There are perhaps two dozen tables across Greece that we hold relationships with, several of which do not take bookings from anyone they do not know.",
    ],
    highlights: [
      {
        title: "Sifnos, in a home kitchen",
        body: "Revithada baked overnight in a clay pot and mastelo lamb, on the island that produced the cookbook which shaped modern Greek cuisine.",
      },
      {
        title: "Cretan mountain villages",
        body: "Wild greens, snails, sheep's cheese and unfiltered oil in the Apokoronas or the Amari valley, with the family who farm it.",
      },
      {
        title: "The Athens market",
        body: "Varvakios at seven in the morning with a chef, then cooking what you bought.",
      },
      {
        title: "A private table",
        body: "A courtyard, a beach, or a vineyard, with a chef cooking for the two of you and nobody else.",
      },
    ],
    islands: ["sifnos", "chania", "athens", "naxos", "tinos"],
    faqs: [
      {
        question: "Can you arrange cooking classes on a Greek honeymoon?",
        answer:
          "Yes, and we prefer home kitchens to hotel demonstrations. On Sifnos, Crete, Naxos and Tinos we work with families who cook what they grow and teach in their own houses.",
      },
      {
        question: "Which Greek island has the best food?",
        answer:
          "Sifnos for tradition and Crete for range and quality of raw ingredients. Tinos has the most interesting new cooking, and Athens has the most ambitious restaurants in the country.",
      },
      {
        question: "Can you book restaurants that are fully reserved?",
        answer:
          "Often, yes. Twenty years of relationships means we can usually place a table where a booking platform says there is none, particularly outside Athens.",
      },
    ],
    heroImage: IMAGES.gastronomy,
    updatedAt: "2026-07-21",
  },
  {
    slug: "sailing",
    title: "Sailing & Private Boats",
    tagline: "The coves you cannot reach any other way",
    answer:
      "The best parts of the Greek coast have no road to them. We arrange private caiques, catamarans and skippered yachts — a day at Kleftiko on Milos, the Paxos sea caves, or a week island hopping under sail.",
    intro: [
      "A boat is not a luxury add-on in Greece. On several islands it is the only way to see the thing you came for. Kleftiko on Milos, the Blue Caves of Zakynthos, Symi's cliff coves and the west of Paxos are all inaccessible by land.",
      "We work at three scales. A traditional wooden caique with a local skipper for a day, which is the most characterful and often the most enjoyable. A catamaran for a group or for shade and space. Or a skippered yacht for a week, which turns the honeymoon itself into a moving thing.",
      "The detail that matters is the skipper. A good one knows which cove the light hits at four and which anchorage the day boats reach at eleven, and will take you somewhere else.",
    ],
    highlights: [
      {
        title: "Kleftiko, Milos",
        body: "White sea caves on the south coast with no road access, best on a small boat that can go inside them.",
      },
      {
        title: "Paxos and Antipaxos",
        body: "A self-drive boat around the west-coast caves and across to water so clear the shadow of the hull sits on the sand below.",
      },
      {
        title: "The Santorini caldera",
        body: "A private catamaran to the volcano, the hot springs and the red and white beaches, timed for sunset on the water.",
      },
      {
        title: "A week under sail",
        body: "Skippered yacht charters through the Saronic, Ionian or Small Cyclades, with a cook aboard if you want one.",
      },
    ],
    islands: ["milos", "paxos", "santorini", "symi", "lefkada"],
    faqs: [
      {
        question: "Do you need a licence to hire a boat in Greece?",
        answer:
          "Not for small engines up to around 30 horsepower, which is enough for a day around Paxos, Corfu's northeast coast or Milos's sheltered bay. Anything larger requires a licence or a skipper.",
      },
      {
        question: "Is a private boat day worth it on a honeymoon?",
        answer:
          "On Milos, Paxos, Symi and Zakynthos it is the single best day of the trip, because the best coastline on those islands cannot be reached by road at all.",
      },
      {
        question: "Can wind cancel a boat day?",
        answer:
          "Yes. The meltemi in July and August can cancel small-boat trips in the Aegean at a few hours' notice. We build a spare day into itineraries that depend on the sea, and the Ionian is far more reliable in high summer.",
      },
    ],
    heroImage: IMAGES.aegeanSailing,
    updatedAt: "2026-07-21",
  },
  {
    slug: "wellness",
    title: "Wellness & Thermal Springs",
    tagline: "Hot springs, Blue Zone rhythms and doing nothing",
    answer:
      "Greece has natural thermal springs on Ikaria, Lesvos, Kythnos and at Vouliagmeni, plus the best resort spas at Elounda and Costa Navarino. We also design honeymoons around simply doing less.",
    intro: [
      "There are two kinds of wellness honeymoon in Greece and they barely overlap. One is the resort version: a serious spa, a private pool, a treatment schedule, and a hotel you never need to leave. Elounda and Costa Navarino do this as well as anywhere in Europe.",
      "The other is older and stranger. Greece sits on a volcanic arc and has natural thermal springs that have been used since antiquity — the radon springs at Therma on Ikaria, the thermal baths at Eftalou on Lesvos, and Lake Vouliagmeni outside Athens, a brackish thermal lake fed from underground.",
      "And then there is the version that requires no facility at all. Ikaria is a Blue Zone, and the most restorative thing we can do for some couples is book four nights somewhere with no schedule and let the island do the rest.",
    ],
    highlights: [
      {
        title: "Ikaria's radon springs",
        body: "The thermal baths at Therma, used since Roman times, on the island where people routinely live past ninety.",
      },
      {
        title: "Lake Vouliagmeni",
        body: "A thermal lake on the Athens Riviera, constant at around 24°C year-round, with small fish that clean your feet whether you want them to or not.",
      },
      {
        title: "Resort spas",
        body: "Elounda and Costa Navarino, where the treatment menus and the therapists genuinely stand comparison with anywhere.",
      },
      {
        title: "A honeymoon with nothing in it",
        body: "Four nights with three fixed bookings, on purpose. It is the request we get most often and grant least often.",
      },
    ],
    islands: ["ikaria", "elounda", "messinia", "lesvos", "athens"],
    faqs: [
      {
        question: "Does Greece have natural hot springs?",
        answer:
          "Yes. The volcanic arc produces thermal springs on Ikaria, Lesvos, Kythnos, Nisyros and Methana, plus the year-round thermal lake at Vouliagmeni near Athens. Several have been in use since antiquity.",
      },
      {
        question: "Which Greek island is best for a wellness honeymoon?",
        answer:
          "Ikaria for natural springs and a genuinely slower rhythm, Crete's Elounda for the best resort spas, and Messinia for Costa Navarino's combination of spa, golf and beach.",
      },
    ],
    heroImage: IMAGES.amenities,
    updatedAt: "2026-07-21",
  },
  {
    slug: "culture",
    title: "Culture & Antiquity",
    tagline: "The Acropolis at eight, Delos privately, Epidaurus in the evening",
    answer:
      "We arrange licensed archaeologist guides for the Acropolis, Delos, Mycenae, Epidaurus, Knossos and Akrotiri — and, more usefully, book them at the hours when the sites are empty and the light is worth having.",
    intro: [
      "Angeliki is a licensed premium tour guide, which is a specific and hard-won qualification in Greece, and it changes what is possible on an archaeological day.",
      "The main thing it buys you is timing. Almost everyone visits the Acropolis between ten and four, when it is crowded and the marble is throwing heat back at you. Booked properly, you can have the first forty minutes of the day nearly to yourselves.",
      "The second thing is context. Delos, Mycenae and Epidaurus are largely unintelligible without someone who can tell you what you are looking at. With that, they become the most memorable days of the honeymoon.",
    ],
    highlights: [
      {
        title: "The Acropolis at opening",
        body: "First entry at eight, with a licensed guide, then the museum where the Parthenon marbles are displayed in the orientation of the original building.",
      },
      {
        title: "Delos, privately",
        body: "The sacred island off Mykonos, on the first boat, with an archaeologist. One of the great sites of the Mediterranean and usually half empty at nine.",
      },
      {
        title: "Epidaurus at evening",
        body: "The best-preserved ancient theatre in the world, with acoustics that carry a whisper to the back row. A performance during the summer festival if the dates align.",
      },
      {
        title: "Akrotiri and Knossos",
        body: "The Bronze Age town buried by the Santorini eruption, and the Minoan palace on Crete — the two ends of the same civilisation.",
      },
    ],
    islands: ["athens", "mykonos", "nafplio", "santorini", "rhodes"],
    faqs: [
      {
        question: "Can you get a private guide for the Acropolis?",
        answer:
          "Yes. We use licensed guides, which is a regulated qualification in Greece, and book the first entry of the day so the site is quiet and the light is good.",
      },
      {
        question: "Is Delos worth a day on a honeymoon?",
        answer:
          "Yes. It is one of the most important archaeological sites in the Mediterranean, thirty minutes by boat from Mykonos, and far more rewarding with a guide who can explain what survives.",
      },
      {
        question: "What is the best ancient site in Greece after the Acropolis?",
        answer:
          "Delos for scale and atmosphere, Epidaurus for the theatre and its acoustics, and Akrotiri on Santorini for a Bronze Age town preserved under volcanic ash with its streets and staircases intact.",
      },
    ],
    heroImage: IMAGES.athensGastronomy,
    updatedAt: "2026-07-21",
  },
  {
    slug: "private-villa",
    title: "Private Villas & Seclusion",
    tagline: "A house, a pool, a cook, and nobody else",
    answer:
      "For couples who want no lobby and no other guests: cliff villas on Santorini and Milos, olive-grove houses on Corfu and Paxos, and stone estates in Crete — most with a chef, a driver and a concierge on call.",
    intro: [
      "A villa is often better value than two hotel suites, and it is almost always more private. For couples who want their honeymoon to feel like a house rather than an hotel, it is the right answer.",
      "The things that matter are unglamorous. How many steps from the parking to the door. Whether the pool is heated in May. Whether there is a road noise problem the photographs do not show. Whether a cook can actually be arranged, or whether that is a line on a website.",
      "We check all of it, because a villa that goes wrong is much harder to fix mid-honeymoon than a hotel room that does.",
    ],
    highlights: [
      {
        title: "Caldera villas, Santorini",
        body: "Cliff-edge houses with heated infinity pools. Ask about the step count — some are eighty steps below the road.",
      },
      {
        title: "Olive-grove houses, Corfu and Paxos",
        body: "Stone villas among ancient trees, several with their own jetty and a boat included.",
      },
      {
        title: "Cretan estates",
        body: "Restored stone houses in the Apokoronas and the Amari valley, with a cook who arrives in the morning.",
      },
      {
        title: "Staffed and serviced",
        body: "Chef, driver, daily housekeeping and a concierge who answers in the evening, arranged as a package rather than a set of separate bookings.",
      },
    ],
    islands: ["santorini", "milos", "corfu", "paxos", "chania", "elounda"],
    faqs: [
      {
        question: "Is a villa better than a hotel for a honeymoon in Greece?",
        answer:
          "For privacy and space, yes, and often for value. The trade-off is service: you lose the concierge desk and room service, which is why we arrange a chef and a local contact for villa stays.",
      },
      {
        question: "Can you arrange a private chef in a Greek villa?",
        answer:
          "Yes, on most islands. Anything from a single celebration dinner to a cook who comes each morning. On smaller islands this needs booking well in advance because there are only a handful of people who do it well.",
      },
      {
        question: "What should we check before booking a Greek villa?",
        answer:
          "The number of steps from parking to door, whether the pool is heated, the actual distance to the nearest taverna, and what the view is at eye level rather than from a drone.",
      },
    ],
    heroImage: IMAGES.stock4,
    updatedAt: "2026-07-21",
  },
];

export const experiencesBySlug = Object.fromEntries(
  EXPERIENCES.map((e) => [e.slug, e]),
);
