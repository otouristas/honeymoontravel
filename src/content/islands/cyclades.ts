import { IMAGES } from "../images";
import type { Island } from "../types";

export const CYCLADES_ISLANDS: Island[] = [
  {
    slug: "santorini",
    name: "Santorini",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Santorini suits couples who want drama over beaches. Stay 3–4 nights in Imerovigli or Oia between late April and mid-June or in September. It is a cliff, not a swimming island — pair it with somewhere you can get in the sea.",
    bestFor: "Caldera views, cave suites, volcanic wine, one unforgettable sunset",
    notFor: "Couples whose priority is walking barefoot from room to sand",
    nights: "3–4 nights",
    bestMonths: "Late April to mid-June, September to mid-October",
    plannerNote:
      "Half the caldera suites sold as 'sea view' are looking sideways at the neighbour's terrace. I check the actual sightline before I book anything here.",
    lastWalked: "June 2026",
    intro: [
      "Santorini is the most photographed place in Greece and one of the easiest to get wrong. The island is the rim of a flooded volcano: a crescent of cliff seven hundred feet above the water, with the villages clinging to the inside edge. That geometry is why it is spectacular, and also why nobody strolls down to the beach before breakfast.",
      "Understand that and the island becomes straightforward. You come here for the view, the light on the caldera at seven in the evening, the volcanic wine, and one of the highest concentrations of genuinely beautiful hotels anywhere in the Mediterranean. You do not come here to swim off the doorstep — the black-sand beaches are on the far side of the island, twenty minutes away by road.",
      "Almost every Santorini honeymoon we plan is three or four nights, then a ferry to somewhere with water you can walk into. That structure gives couples the postcard and the holiday.",
    ],
    bases: [
      {
        name: "Imerovigli",
        note: "The highest point on the caldera and where I send most honeymooners. Same view as Oia, a fraction of the foot traffic, and a twenty-five minute cliff walk to Oia for sunset when you want it.",
      },
      {
        name: "Oia",
        note: "The famous one. Extraordinary at dawn and after ten at night, uncomfortably busy between five and nine in the evening. Worth it if your hotel has a terrace you can watch sunset from without leaving it.",
      },
      {
        name: "Fira",
        note: "The working town. More restaurants and the cable car down to the old port, but cruise traffic and noise. Useful as a base if you want to eat out every night.",
      },
      {
        name: "Akrotiri & the south",
        note: "Quiet, close to the Bronze Age site and Red Beach, and the only part of the island where caldera-view hotels still feel like a discovery.",
      },
    ],
    stays: [
      {
        label: "Cave suite with plunge pool",
        note: "The Santorini signature: a vaulted room dug into the cliff with a small heated pool on the terrace. Ask about the number of steps — some suites are eighty steps below reception.",
      },
      {
        label: "Caldera villa",
        note: "For couples who want space and privacy for four nights and are happy to eat in. The good ones come with a chef on call.",
      },
      {
        label: "Vineyard estate inland",
        note: "An underrated alternative. No caldera view, considerably more room and quiet, and you wake up in a working Assyrtiko vineyard.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and do nothing",
        body: "Land, transfer, and stay on your terrace. The caldera at golden hour on your first evening is the memory people keep. Dinner walked to, not driven to.",
      },
      {
        day: "Day 2",
        title: "Caldera walk and Oia sunset",
        body: "The Fira-to-Oia path along the rim, ideally starting from Imerovigli around five in the afternoon. Book dinner in Oia for after sunset so you are seated while everyone else is leaving.",
      },
      {
        day: "Day 3",
        title: "Wine and the volcano",
        body: "Assyrtiko tasting at the estates near Pyrgos in the morning — the vines are trained in low baskets against the wind, unlike anywhere else. Afternoon on a private catamaran around the caldera and into the hot springs.",
      },
      {
        day: "Day 4",
        title: "Akrotiri and the south",
        body: "The Bronze Age town at Akrotiri, then a long lunch at Ammoudi or on the black sand at Perissa before your ferry or flight.",
      },
    ],
    pairings: [
      {
        slug: "milos",
        note: "The best pairing in Greece. Two hours by ferry, and Milos gives you the swimming Santorini cannot.",
      },
      {
        slug: "naxos",
        note: "For couples who want long sandy beaches and much better everyday food after the caldera.",
      },
      {
        slug: "folegandros",
        note: "Forty-five minutes away and a complete change of tempo. The quiet after the spectacle.",
      },
    ],
    gettingThere:
      "Direct seasonal flights from most European capitals between May and October, or 45 minutes from Athens. Fast ferries from Piraeus take 4.5–5.5 hours; the conventional boat takes 8. Transfers from the airport or port take 15–30 minutes.",
    crowds:
      "Cruise ships dock most mornings between May and October and empty into Fira and Oia. Before ten and after seven the island belongs to residents and hotel guests again.",
    wind:
      "The meltemi blows hardest in July and August. It rarely spoils a caldera holiday but it will cancel small-boat trips and, a few days each summer, delay flights.",
    faqs: [
      {
        question: "How many nights should we spend in Santorini on our honeymoon?",
        answer:
          "Three or four. That covers the caldera walk, a wine afternoon, a boat trip and one unhurried day. Beyond five nights most couples start wanting a beach the island cannot give them.",
      },
      {
        question: "Is Santorini worth it for a luxury honeymoon?",
        answer:
          "Yes, if you want the view and understand what you are buying. The hotel standard on the caldera is genuinely world-class. If your priority is swimming and sand, spend your budget on Milos or Crete instead.",
      },
      {
        question: "Should we stay in Oia or Imerovigli?",
        answer:
          "Imerovigli for most honeymooners: identical caldera view, far fewer people outside your door, and Oia is a twenty-five minute walk away when you want it. Choose Oia only if your terrace faces the sunset.",
      },
      {
        question: "When is the best time to visit Santorini for a honeymoon?",
        answer:
          "Late April to mid-June, or September to mid-October. The light is best, the sea is swimmable from June, and you avoid both the August heat and the worst of the cruise schedule.",
      },
      {
        question: "Does Santorini have good beaches?",
        answer:
          "It has interesting beaches rather than good ones. Perissa and Kamari are long stretches of black volcanic sand that get very hot; Red Beach is dramatic and small. None are within walking distance of the caldera villages.",
      },
      {
        question: "Can you swim from a caldera hotel in Santorini?",
        answer:
          "No. The caldera is a cliff seven hundred feet above the sea with no access from the villages. Swimming happens in your hotel's pool or at a beach on the other side of the island.",
      },
    ],
    heroImage: IMAGES.santoriniCaldera,
    gallery: [
      IMAGES.santoriniChurch,
      IMAGES.santoriniDomes,
      IMAGES.santoriniIslandView,
      IMAGES.santoriniBlue,
    ],
    plannerType: "the-visionary",
    itinerary: "santorini-milos-10-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "mykonos",
    name: "Mykonos",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Mykonos suits couples who want beautiful beaches and a genuine night out. Stay 3–4 nights, choose the north coast or Agios Ioannis for calm and the south for scene. Visit in June or September; August is expensive and frantic.",
    bestFor: "Beach clubs, the best hotel design in Greece, dinner that runs to 2am",
    notFor: "Couples looking for quiet, traditional or inexpensive",
    nights: "3–4 nights",
    bestMonths: "June and September",
    plannerNote:
      "Mykonos punishes couples who book by photograph. The difference between a north-coast hotel and a Paradise Beach hotel is the difference between two entirely separate holidays.",
    lastWalked: "September 2025",
    intro: [
      "Mykonos has a reputation problem in both directions. Couples who want a party assume the whole island is one, and couples who want peace write it off entirely. Both are wrong, because Mykonos is really two islands sharing a name.",
      "The south coast — Paradise, Super Paradise, Psarou, Nammos — is the international scene: beach clubs, day beds at serious prices, and a soundtrack from midday. The north and the far east are almost empty, with rough beaches, good wind, and hotels where you will hear nothing but the sea.",
      "What both halves share is the town, which remains one of the most beautiful in Greece despite everything, and a level of hotel design that no other Greek island matches. Chora at eight in the morning, before the shops open, is worth setting an alarm for.",
    ],
    bases: [
      {
        name: "Agios Ioannis & Ornos",
        note: "The sensible honeymoon base. Sheltered, swimmable, sunset-facing, and ten minutes from town without being in it.",
      },
      {
        name: "The north coast (Agios Sostis, Ftelia)",
        note: "Where I send couples who want beauty without the scene. Windier, wilder and considerably calmer.",
      },
      {
        name: "Chora",
        note: "Stay in town if you intend to eat and drink your way through the island. Charming by day, loud until very late.",
      },
      {
        name: "Psarou & Platis Gialos",
        note: "For couples who genuinely want the beach-club version of Mykonos. Book the day beds before you fly.",
      },
    ],
    stays: [
      {
        label: "Design hotel with private pool",
        note: "Mykonos does this better than anywhere in Greece — architect-built, minimal, usually with a plunge pool per suite.",
      },
      {
        label: "North-coast villa",
        note: "Four bedrooms you do not need, but total privacy and a cook. Often better value than two suites in the south.",
      },
      {
        label: "Chora townhouse",
        note: "Restored Cycladic houses in the back lanes. Atmospheric, but bring earplugs in August.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Settle and eat in town",
        body: "Arrive, swim, then early evening in Chora before the crowds — Little Venice for a drink, then dinner in the Kastro lanes.",
      },
      {
        day: "Day 2",
        title: "A beach day, properly",
        body: "Whichever version of Mykonos you chose. Psarou with a reserved bed, or a north-coast cove with a taverna and nothing else.",
      },
      {
        day: "Day 3",
        title: "Delos and a long lunch",
        body: "The morning boat to Delos, the sacred island and one of the great archaeological sites of the Mediterranean. Back by two for lunch at Agios Sostis.",
      },
      {
        day: "Day 4",
        title: "Boat and departure",
        body: "A private caique around the south coast, swimming off the back, then the short ferry onward to Paros or Naxos.",
      },
    ],
    pairings: [
      {
        slug: "naxos",
        note: "An hour away and the perfect corrective — quiet, green, and a third of the price for dinner.",
      },
      {
        slug: "paros",
        note: "Forty-five minutes. Similar sophistication, calmer pace, better everyday food.",
      },
      {
        slug: "santorini",
        note: "The classic pairing. Two hours by fast ferry and a completely different landscape.",
      },
    ],
    gettingThere:
      "Direct summer flights from across Europe, 40 minutes from Athens, or 2.5–5 hours by ferry from Piraeus and Rafina. Ferries arrive at the New Port, 15 minutes from town.",
    crowds:
      "July and August are extremely busy and priced accordingly. June and September have the same weather with perhaps half the people and noticeably better service.",
    wind:
      "Mykonos is one of the windiest islands in the Cyclades. The north coast is exposed for much of the summer, which is precisely why it stays quiet.",
    faqs: [
      {
        question: "Is Mykonos good for a honeymoon?",
        answer:
          "Yes, if you want beaches and nightlife together and choose your side of the island deliberately. It has the best hotel design in Greece. It is not the place for a quiet, traditional honeymoon.",
      },
      {
        question: "Where should honeymooners stay in Mykonos?",
        answer:
          "Agios Ioannis or Ornos for sheltered swimming and sunsets ten minutes from town. The north coast if you want calm. Psarou or Platis Gialos only if the beach-club scene is the point.",
      },
      {
        question: "How expensive is Mykonos for a honeymoon?",
        answer:
          "The most expensive island in Greece in July and August, when beach-club beds and headline restaurants price like Saint-Tropez. June and late September cost meaningfully less for the same weather.",
      },
      {
        question: "Santorini or Mykonos for a honeymoon?",
        answer:
          "Santorini for the view and a quieter, more romantic three nights. Mykonos for swimming, beach clubs and going out. Many couples do both, four nights and three, with a two-hour ferry between them.",
      },
      {
        question: "Is Delos worth visiting from Mykonos?",
        answer:
          "Yes. It is one of the most important archaeological sites in the Mediterranean and thirty minutes away by boat. Go on the first departure before the heat and the tour groups.",
      },
    ],
    heroImage: IMAGES.stock2,
    gallery: [IMAGES.aegeanSailing, IMAGES.stock4, IMAGES.aegeanWindow, IMAGES.stock1],
    plannerType: "the-action-taker",
    itinerary: "athens-cyclades-14-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "milos",
    name: "Milos",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Milos has the best swimming in the Cyclades — over seventy beaches around a volcanic coastline, most reached by boat. Stay 4–5 nights in Pollonia or Plaka between June and September. It is the ideal partner for Santorini.",
    bestFor: "Boat days, extraordinary geology, empty coves, seafood",
    notFor: "Couples who want a walkable town with a long dinner scene",
    nights: "4–5 nights",
    bestMonths: "June to mid-September",
    plannerNote:
      "Sarakiniko gets the photographs, but the south coast — Kleftiko, Sykia, Gerakas — is why you come, and you can only reach it by sea. Budget a private boat day.",
    lastWalked: "June 2026",
    intro: [
      "Milos is the same volcano story as Santorini told the other way round. Here the eruption left not a cliff but a coastline of white rock, red rock, ochre cliffs, sea caves and pale moonscapes, wrapped around a bay so large that the whole island feels like a lagoon.",
      "The result is the best swimming in the Cyclades and it is not close. There are somewhere north of seventy beaches, many with no road to them, which means a boat day here is not a nice extra — it is the main event.",
      "It has changed in the last five years. There are now genuinely good hotels and a serious restaurant or two in Pollonia. But it remains a place where you get up, get on a boat, and come back sunburnt and happy rather than a place you dress for.",
    ],
    bases: [
      {
        name: "Pollonia",
        note: "A small fishing village on the northeast tip with the best restaurants on the island and swimming off the rocks. My default for honeymooners.",
      },
      {
        name: "Plaka & Trypiti",
        note: "The hilltop old town, with the best sunset on the island from the castle and the Catacombs below. Beautiful, but you drive to every beach.",
      },
      {
        name: "Adamas",
        note: "The port. Convenient and central, short on charm. Fine for one night on either end.",
      },
      {
        name: "Firopotamos & the northwest",
        note: "Tiny painted fishing settlements — syrmata — with boat garages under the houses. Some are now rentable and they are wonderful.",
      },
    ],
    stays: [
      {
        label: "Boutique hotel in Pollonia",
        note: "A dozen or so rooms, sea-facing, walkable to dinner. The most practical honeymoon base on the island.",
      },
      {
        label: "Cliffside villa with pool",
        note: "Milos villas are newer and better value than their Santorini equivalents. Worth it if you want a car and total privacy.",
      },
      {
        label: "Restored syrma",
        note: "A converted boathouse at the water's edge. Small, characterful, and the sea is literally at your door.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and swim",
        body: "Settle in Pollonia, swim off the rocks at Voudia or Papafrangas, then a seafood dinner on the water.",
      },
      {
        day: "Day 2",
        title: "The south coast by boat",
        body: "A full private day around Kleftiko's sea caves, Sykia's collapsed cavern and Gerakas. Bring snorkels. This is the reason to be on Milos.",
      },
      {
        day: "Day 3",
        title: "Sarakiniko and the north",
        body: "The white lunar rock at Sarakiniko early, before the light goes flat, then Mandrakia and Firopotamos for lunch and a quieter swim.",
      },
      {
        day: "Day 4",
        title: "Plaka, catacombs, sunset",
        body: "The old town, the Roman theatre and the Catacombs in the afternoon, then the castle at Plaka for the best sunset in the western Cyclades.",
      },
      {
        day: "Day 5",
        title: "One last cove",
        body: "Tsigrado or Firiplaka in the south, reached down a rope ladder if you fancy it, before the ferry onward.",
      },
    ],
    pairings: [
      {
        slug: "santorini",
        note: "Two hours by fast ferry. The single best two-island honeymoon in Greece: the view, then the water.",
      },
      {
        slug: "folegandros",
        note: "Ninety minutes. Two very different kinds of quiet in one week.",
      },
      {
        slug: "sifnos",
        note: "An hour away, and the food capital of the Cyclades. Ideal for couples who eat.",
      },
    ],
    gettingThere:
      "A 40-minute flight from Athens on a small aircraft, or 3–5 hours by ferry from Piraeus. Fast ferries connect to Santorini, Folegandros, Sifnos and Serifos through the summer. You need a car here.",
    crowds:
      "Busy but never overwhelming. August fills the road-accessible beaches; the boat-only coast stays quiet all season.",
    wind:
      "The large central bay gives you a sheltered option in almost any wind, which is why boat days here are more reliable than in the central Cyclades.",
    faqs: [
      {
        question: "Is Milos good for a honeymoon?",
        answer:
          "Excellent, for couples whose priority is swimming. Milos has the most varied and beautiful coastline in the Cyclades and increasingly good small hotels, though it is quieter in the evenings than Santorini or Mykonos.",
      },
      {
        question: "How many nights do you need in Milos?",
        answer:
          "Four or five. One is lost to the south-coast boat trip, and the beaches are spread widely enough that fewer than four nights leaves you rushing between them.",
      },
      {
        question: "Do you need a car in Milos?",
        answer:
          "Yes. The island is large, the best beaches are scattered, and bus coverage is limited. A small car or a quad for the unpaved tracks in the south.",
      },
      {
        question: "Is Kleftiko worth it?",
        answer:
          "Yes, and it can only be reached by sea. Go on a small private boat rather than a large group catamaran so you can swim into the caves when the light is right and nobody else is there.",
      },
      {
        question: "Santorini or Milos for a honeymoon?",
        answer:
          "Santorini for the view, hotels and sense of occasion. Milos for swimming, boat days and a quieter, more natural week. The right answer for most couples is four nights on one and four on the other.",
      },
    ],
    heroImage: IMAGES.aegeanSailing,
    gallery: [IMAGES.stock1, IMAGES.santoriniView, IMAGES.stock3, IMAGES.aegeanWindow],
    plannerType: "the-processor",
    itinerary: "santorini-milos-10-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "paros",
    name: "Paros",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Paros is the balanced Cycladic honeymoon: proper beaches, two beautiful towns, good food and easy ferries. Stay 4–5 nights in Naoussa between June and September. It is more sophisticated than Naxos, calmer than Mykonos.",
    bestFor: "Sandy beaches, Naoussa's harbour, marble villages, sailing",
    notFor: "Couples wanting a single dramatic view to build the trip around",
    nights: "4–5 nights",
    bestMonths: "June and September",
    plannerNote:
      "Naoussa's harbour at nine in the evening is the most quietly romantic scene in the Cyclades, and almost nobody puts it on a list. Book a table on the water.",
    lastWalked: "September 2025",
    intro: [
      "Paros has become the island Athenians recommend when a friend asks where to go instead of Mykonos. It has real beaches, two towns worth walking, marble quarries that supplied the Venus de Milo, and a food scene that has grown up considerably in the past decade.",
      "The island splits neatly. Naoussa in the north is the pretty one: a Venetian harbour with a half-sunken castle, fishing boats, and restaurants set on the water's edge. Parikia in the west is the port town, with a magnificent Byzantine church and a more workaday feel. Inland, Lefkes and Marpissa are stone villages that have barely changed.",
      "It also has wind, which is why the east coast is a kitesurfing centre — useful to know if you want a calm beach, since the west and north coves stay sheltered when Golden Beach is unusable.",
    ],
    bases: [
      {
        name: "Naoussa",
        note: "Where honeymooners should stay. The harbour, the restaurants and the best northern beaches are all within reach on foot or in ten minutes by car.",
      },
      {
        name: "Parikia",
        note: "Ferries, the Panagia Ekatontapiliani church and lower prices. Practical rather than romantic.",
      },
      {
        name: "Lefkes",
        note: "The old inland capital, high in the hills, cool in August, with the Byzantine marble path down to the coast starting at its edge.",
      },
      {
        name: "The east coast",
        note: "Golden Beach and New Golden Beach for wind sports. Beautiful and blustery.",
      },
    ],
    stays: [
      {
        label: "Boutique hotel above Naoussa",
        note: "Small, white, sea-facing, five minutes down the hill to dinner. The reliable honeymoon choice here.",
      },
      {
        label: "Beachfront suite at Kolymbithres",
        note: "The sculpted granite coves on the bay opposite Naoussa. Shallow, warm and sheltered.",
      },
      {
        label: "Stone villa inland",
        note: "For couples with a car who want olive trees, a pool and no neighbours, ten minutes from the sea.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Naoussa evening",
        body: "Arrive and do nothing but walk the harbour at dusk. Dinner with your feet almost in the water at the old port.",
      },
      {
        day: "Day 2",
        title: "Kolymbithres and the north bay",
        body: "The wind-carved granite coves in the morning, a boat across the bay, lunch at Monastiri.",
      },
      {
        day: "Day 3",
        title: "Antiparos",
        body: "The short ferry across for a day on Antiparos — the cave, a long lunch in the small town, and the beaches at Soros and Agios Georgios.",
      },
      {
        day: "Day 4",
        title: "Marble villages and wine",
        body: "Lefkes and the Byzantine path in the morning, then a tasting at one of the island's small wineries before an early dinner in Marpissa.",
      },
    ],
    pairings: [
      {
        slug: "naxos",
        note: "Thirty minutes by ferry. Naxos for beaches and mountains, Paros for towns and dinner.",
      },
      {
        slug: "santorini",
        note: "Two hours south. The classic combination of a beach island and the caldera.",
      },
      {
        slug: "mykonos",
        note: "Forty-five minutes, and a useful way to get one big night out without staying for four of them.",
      },
    ],
    gettingThere:
      "A 35-minute flight from Athens, or 2.5–4.5 hours by ferry from Piraeus. Paros is one of the best-connected islands in the Cyclades, with frequent links to Naxos, Mykonos, Ios, Santorini and Antiparos.",
    crowds:
      "Busy in August, particularly Naoussa, which now takes some of Mykonos's overflow. June and September are comfortable.",
    wind:
      "The meltemi funnels down the strait between Paros and Naxos. The north and west coasts stay usable when the east coast is blown out.",
    faqs: [
      {
        question: "Is Paros good for a honeymoon?",
        answer:
          "Yes, and it is the best all-rounder in the Cyclades. Paros gives you good beaches, a genuinely romantic harbour town in Naoussa, strong restaurants and easy ferries to three other islands.",
      },
      {
        question: "Paros or Naxos for a honeymoon?",
        answer:
          "Paros for the prettier town, better restaurants and more polish. Naxos for longer sandy beaches, mountain villages and better value. Paros edges it for a honeymoon; Naxos for a longer stay.",
      },
      {
        question: "Where should we stay in Paros?",
        answer:
          "Naoussa. The harbour is the reason to be on Paros, and staying there means dinner is a walk rather than a drive.",
      },
      {
        question: "Is Antiparos worth a day trip?",
        answer:
          "Yes. The ferry is seven minutes from Pounta, the main town is charming and low-key, and the beaches on the west side are quieter than anything on Paros itself.",
      },
    ],
    heroImage: IMAGES.stock4,
    gallery: [IMAGES.stock1, IMAGES.aegeanWindow, IMAGES.stock5, IMAGES.aegeanSailing],
    plannerType: "the-processor",
    itinerary: "athens-cyclades-14-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "naxos",
    name: "Naxos",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Naxos is the greenest and best-value Cycladic island: kilometres of sandy west-coast beach, mountain villages, and the best everyday food in the group. Stay 4–5 nights near Plaka or Agios Prokopios from June to September.",
    bestFor: "Long sandy beaches, mountain villages, food, value",
    notFor: "Couples who want polished five-star hotels and a scene",
    nights: "4–5 nights",
    bestMonths: "June to September",
    plannerNote:
      "Naxos is where I send couples who want to be still. Twelve kilometres of west-coast sand means you can walk for an hour in August and lose everyone.",
    lastWalked: "July 2025",
    intro: [
      "Naxos is the largest of the Cyclades and the only one that feels self-sufficient. It grows its own food — potatoes, citrus, cheese, and the Kitron liqueur made from citron leaves — and has a mountain range in the middle with villages that have nothing to do with tourism at all.",
      "For a honeymoon its case is simple: the west coast is one continuous ribbon of pale sand from Agios Georgios down past Plaka to Mikri Vigla and Kastraki, shallow and warm and long enough that you can always find a stretch to yourselves.",
      "Chora is a genuine surprise. Beneath a Venetian castle, a warren of covered marble lanes climbs the hill, and at the harbour entrance stands the Portara — a lone marble doorframe from an unfinished temple to Apollo, which is where you go at sunset and understand the island.",
    ],
    bases: [
      {
        name: "Plaka & Agia Anna",
        note: "The best honeymoon base: soft sand, shallow water, tamarisk shade and a handful of tavernas, twenty minutes from Chora.",
      },
      {
        name: "Chora (Naxos Town)",
        note: "For couples who want to walk to dinner in the castle lanes. Less beach, much more atmosphere.",
      },
      {
        name: "Mikri Vigla & Kastraki",
        note: "Further south, wilder, windier and emptier. Beautiful if you have a car.",
      },
      {
        name: "Halki & the Tragaea",
        note: "Inland among olive groves and Byzantine chapels. Cool in high summer and utterly quiet.",
      },
    ],
    stays: [
      {
        label: "Beachfront suite",
        note: "Naxos does simple, well-run, sea-facing hotels better than luxury. Many have a pool and a path straight onto the sand.",
      },
      {
        label: "Villa in the Tragaea",
        note: "A stone house among olive trees with a pool and a view down to the sea. Best if you like driving.",
      },
      {
        label: "Chora townhouse",
        note: "Restored houses inside the Venetian kastro. Atmospheric, and the whole town is at your door.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Portara at sunset",
        body: "Arrive, settle, and walk out to the marble doorframe on the islet at sunset. Dinner in the old town afterwards.",
      },
      {
        day: "Day 2",
        title: "The west coast",
        body: "A slow day at Plaka. Swim, read, lunch under the tamarisks, swim again.",
      },
      {
        day: "Day 3",
        title: "Mountains and marble",
        body: "Drive into the Tragaea for Halki, the Kitron distillery and Byzantine chapels, then up to the abandoned kouros statues lying in the fields at Melanes and Apollonas.",
      },
      {
        day: "Day 4",
        title: "South beaches and a boat",
        body: "Mikri Vigla and Kastraki in the morning, then a caique to the small islands of the Small Cyclades for a swim off the back.",
      },
    ],
    pairings: [
      {
        slug: "paros",
        note: "Thirty minutes by ferry, and the pair covers everything the Cyclades do well.",
      },
      {
        slug: "santorini",
        note: "Two hours south. Naxos to relax, Santorini for the occasion.",
      },
      {
        slug: "mykonos",
        note: "An hour away and a very useful contrast if one of you wants a night out.",
      },
    ],
    gettingThere:
      "A 45-minute flight from Athens on a small aircraft, or 3.5–5.5 hours by ferry from Piraeus. Excellent onward links to Paros, Mykonos, Ios, Santorini and the Small Cyclades.",
    crowds:
      "Comfortable even in August thanks to the sheer length of the beaches. Chora fills in the evenings; the mountains never do.",
    wind:
      "The meltemi hits the exposed southwest — Mikri Vigla is a windsurfing beach for a reason. Agia Anna and Plaka are more sheltered.",
    faqs: [
      {
        question: "Is Naxos good for a honeymoon?",
        answer:
          "Yes, for couples who want beaches, food and quiet rather than luxury hotels and a scene. Naxos offers the best value in the Cyclades and the longest sandy beaches in the group.",
      },
      {
        question: "How many nights should we spend in Naxos?",
        answer:
          "Four or five. The island is big enough that you want a full day for the mountains, one for a boat, and at least two doing nothing on the west coast.",
      },
      {
        question: "Does Naxos have luxury hotels?",
        answer:
          "A handful of very good boutique properties and villas, but nothing on the scale of Santorini or Mykonos. Naxos rewards couples who care more about the beach outside than the brand above the door.",
      },
      {
        question: "What is the best beach in Naxos for honeymooners?",
        answer:
          "Plaka for length, shade and shallow water. Head to the southern end, past the last taverna, and you will usually have a stretch to yourselves even in August.",
      },
    ],
    heroImage: IMAGES.stock5,
    gallery: [IMAGES.stock3, IMAGES.gastronomy, IMAGES.aegeanWindow, IMAGES.stock2],
    plannerType: "the-processor",
    itinerary: "athens-cyclades-14-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "folegandros",
    name: "Folegandros",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Folegandros is the quietest beautiful island in the Cyclades: one clifftop village, no airport, and almost no day-trippers. Stay 3–4 nights between June and September. Choose it for stillness rather than sightseeing.",
    bestFor: "Silence, a cliff-edge village, walking, a genuine escape",
    notFor: "Couples who want variety, nightlife or lots of beaches",
    nights: "3–4 nights",
    bestMonths: "June to mid-September",
    plannerNote:
      "The walk up to Panagia church above Chora at dusk, with the whole Aegean going pink below you, is the single most romantic hour I can put in a Greek itinerary.",
    lastWalked: "June 2026",
    intro: [
      "Folegandros is a ridge of rock with one village on top of a two-hundred-metre cliff, and that is most of what there is to say about it — which is exactly the point.",
      "There is no airport, which changes everything. No day-trippers, no short breaks, no coach parties. Everyone here has made a deliberate two-hour ferry journey to arrive, and the island keeps a hush that Santorini lost decades ago.",
      "Chora is arguably the most beautiful village in the Cyclades: three linked squares under plane trees, bougainvillea, no cars, and a cliff edge you can walk to in four minutes. The beaches are small, pebbly and reached on foot or by boat. You will not be busy here. That is the offer.",
    ],
    bases: [
      {
        name: "Chora",
        note: "Stay in or just below the village. Everything is walkable and the evening squares are the whole social life of the island.",
      },
      {
        name: "Karavostasi",
        note: "The port, with a swimmable beach and a few tavernas. Convenient, quieter, less magical.",
      },
      {
        name: "Ano Meria",
        note: "The scattered farming settlement along the spine of the island, with the path down to Agios Georgios beach.",
      },
    ],
    stays: [
      {
        label: "Cliff-edge boutique hotel",
        note: "A handful of small properties on the Chora rim with pools looking two hundred metres straight down. Book six to nine months ahead.",
      },
      {
        label: "Village house",
        note: "Simple, whitewashed, in the lanes. You are paying for the location, and the location is faultless.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and climb",
        body: "Settle, then the zigzag path up to Panagia church for sunset. Dinner in the squares afterwards, unhurried.",
      },
      {
        day: "Day 2",
        title: "Boat around the island",
        body: "The daily caique to Katergo and the southern coves, swimming off the boat where there is no path down.",
      },
      {
        day: "Day 3",
        title: "Ano Meria and Agios Georgios",
        body: "The bus or a drive along the ridge, then the forty-minute walk down to the long pebble beach at Agios Georgios with nobody on it.",
      },
    ],
    pairings: [
      {
        slug: "santorini",
        note: "Forty-five minutes by fast ferry. The quiet before or after the spectacle — most couples do Santorini first.",
      },
      {
        slug: "milos",
        note: "Ninety minutes. Two different flavours of unhurried, with wonderful swimming on the Milos half.",
      },
      {
        slug: "sifnos",
        note: "Under two hours, and Sifnos brings the food that Folegandros deliberately does without.",
      },
    ],
    gettingThere:
      "No airport. Fast ferries from Piraeus take 4–5 hours; from Santorini, 45 minutes; from Milos, about 90 minutes. The road up from the port to Chora is short but steep.",
    crowds:
      "Genuinely quiet outside the first three weeks of August, when Athenians and Italians arrive and the squares fill.",
    wind:
      "Exposed. A strong meltemi can cancel the small boat trips and, occasionally, the ferries. Build a spare day into your plan if Folegandros is your last stop.",
    faqs: [
      {
        question: "Is Folegandros good for a honeymoon?",
        answer:
          "Perfect for couples who want peace. One extraordinarily beautiful clifftop village, no airport, no crowds and no obligations. It is not the island for couples who need variety.",
      },
      {
        question: "How do you get to Folegandros?",
        answer:
          "Only by ferry. Four to five hours from Piraeus, 45 minutes from Santorini or around 90 minutes from Milos. The lack of an airport is why it stays quiet.",
      },
      {
        question: "How many nights in Folegandros?",
        answer:
          "Three or four. The island is small and the pleasure is repetition — the same walk, the same square, the same table — rather than a list of sights.",
      },
      {
        question: "Does Folegandros have good beaches?",
        answer:
          "Small, pebbly and beautiful rather than sandy and long. Katergo and Agios Nikolaos are the best and both are easier to reach by boat than on foot.",
      },
    ],
    heroImage: IMAGES.santoriniView,
    gallery: [IMAGES.santoriniChurch, IMAGES.aegeanWindow, IMAGES.stock3, IMAGES.santoriniIsland],
    plannerType: "the-visionary",
    itinerary: "santorini-milos-10-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "sifnos",
    name: "Sifnos",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Sifnos is the food capital of the Cyclades — the birthplace of modern Greek cookery writing — with three hundred chapels, a walkable trail network and quiet beaches. Stay 4 nights in Kastro or Apollonia from June to September.",
    bestFor: "Cooking, pottery, hiking trails, unhurried elegance",
    notFor: "Couples who want dramatic scenery or nightlife",
    nights: "4 nights",
    bestMonths: "June to September",
    plannerNote:
      "Sifnos is where Greeks who cook go on holiday. If food is the thread of your honeymoon, this island earns four nights on its own.",
    lastWalked: "May 2026",
    intro: [
      "Nikolaos Tselementes, who wrote the cookbook that shaped modern Greek home cooking, was from Sifnos, and the island has never let anyone forget it. Eating here is consistently the best in the Cyclades — chickpea stew baked overnight in a clay pot, capers, honey, almond sweets — and the tavernas take it seriously in a way that is not performative.",
      "The island is also strikingly pretty in a low-key way. Apollonia and Artemonas are laced with whitewashed lanes, Kastro is a Venetian settlement built as a fortified ring on a headland, and Chrysopigi monastery sits on a rock spit that is the island's postcard.",
      "There is a network of restored footpaths — nearly a hundred kilometres of them — which makes Sifnos one of the few Greek islands where walking between villages is a genuine pleasure rather than an ordeal.",
    ],
    bases: [
      {
        name: "Kastro",
        note: "The old capital, a ring of houses forming its own wall on a headland. Small, atmospheric and my first choice for a couple.",
      },
      {
        name: "Apollonia",
        note: "The lively centre, where the restaurants and shops are, with the best transport links.",
      },
      {
        name: "Platis Gialos & Vathi",
        note: "The two sandy bays in the south, both with good hotels and shallow, calm swimming.",
      },
      {
        name: "Chrysopigi",
        note: "Beside the monastery on its rock, with the small beach at Apokofto and one exceptional taverna.",
      },
    ],
    stays: [
      {
        label: "Small design hotel",
        note: "Sifnos has quietly acquired a few beautifully done boutique properties, mostly in the south and around Kastro.",
      },
      {
        label: "Traditional house in Kastro",
        note: "Living inside the fortified village, with the sea on three sides and no cars.",
      },
      {
        label: "Beachfront in Vathi",
        note: "A sheltered horseshoe bay with a pottery workshop, a monastery and very little else.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Kastro at dusk",
        body: "Arrive, walk the ring of the old village, and eat looking out at the Aegean from the wall.",
      },
      {
        day: "Day 2",
        title: "Cook",
        body: "A morning in a home kitchen learning revithada and mastelo, then the afternoon swimming at Platis Gialos to recover from lunch.",
      },
      {
        day: "Day 3",
        title: "The footpaths",
        body: "The trail from Artemonas over to Chrysopigi, roughly two hours, ending with a swim at Apokofto and a long late lunch.",
      },
      {
        day: "Day 4",
        title: "Pottery and Vathi",
        body: "The workshops at Vathi where the island's clay tradition survives, then a final swim in the calmest bay on Sifnos.",
      },
    ],
    pairings: [
      {
        slug: "milos",
        note: "An hour by ferry. Sifnos to eat, Milos to swim.",
      },
      {
        slug: "folegandros",
        note: "Under two hours, and the pair makes a beautifully quiet ten nights.",
      },
      {
        slug: "santorini",
        note: "Three hours or so, for couples who want one big view at the end.",
      },
    ],
    gettingThere:
      "No airport. Fast ferries from Piraeus take 2.5–3 hours, conventional boats around 5. Regular summer links to Milos, Serifos, Kimolos and Folegandros.",
    crowds:
      "Popular with Athenians in August but never overwhelmed. Extremely quiet in June and late September.",
    wind:
      "Moderate by Cycladic standards. Vathi and Platis Gialos stay swimmable in most conditions.",
    faqs: [
      {
        question: "Is Sifnos good for a honeymoon?",
        answer:
          "Yes, for couples who care about food and quiet. Sifnos has the best cooking in the Cyclades, a beautiful fortified old village in Kastro, and a walking network almost no other island offers.",
      },
      {
        question: "How do you get to Sifnos?",
        answer:
          "By ferry only — two and a half to three hours from Piraeus on a fast boat. There is no airport, which is a large part of why it remains calm.",
      },
      {
        question: "What is Sifnos famous for?",
        answer:
          "Cooking and ceramics. It is the home island of Nikolaos Tselementes, whose cookbook defined modern Greek cuisine, and it still produces the clay pots that chickpea stew is baked in.",
      },
    ],
    heroImage: IMAGES.gastronomy,
    gallery: [IMAGES.stock3, IMAGES.santoriniChurch, IMAGES.stock5, IMAGES.aegeanWindow],
    plannerType: "the-administrator",
    itinerary: "santorini-milos-10-days",
    updatedAt: "2026-07-20",
  },
  {
    slug: "syros",
    name: "Syros",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Syros is the Cycladic capital and the only island with a real year-round city: neoclassical Ermoupoli, a marble opera house, and a medieval Catholic hill town. Stay 3 nights. Choose it for culture rather than beaches.",
    bestFor: "Neoclassical architecture, opera, rebetiko, a working Greek city",
    notFor: "Couples whose main requirement is a spectacular beach",
    nights: "3 nights",
    bestMonths: "May to October",
    plannerNote:
      "Syros is the island I recommend to couples who found Santorini's crowds dispiriting and want somewhere that exists for its own residents.",
    lastWalked: "May 2026",
    intro: [
      "Syros looks nothing like the rest of the Cyclades and that is its charm. Ermoupoli was the greatest port in Greece in the nineteenth century, and the wealth left behind a neoclassical city of marble squares, painted ceilings, grand staircases and a miniature copy of La Scala.",
      "Above the port stand two hills: Ano Syros, a medieval Catholic settlement founded under Venetian rule, and Vrontado, its Orthodox counterpart. The island has kept both communities and both Easters, which is unique in Greece.",
      "It is also the administrative capital of the Cyclades, so life goes on in February. Shops are for residents, restaurants are priced for locals, and nobody is performing Greekness for you.",
    ],
    bases: [
      {
        name: "Ermoupoli",
        note: "Stay in the neoclassical centre. Miaouli Square in the evening, the Apollon Theatre, and dinner in the Vaporia district where the mansions come down to the sea.",
      },
      {
        name: "Vaporia",
        note: "The captains' quarter, where you swim off ladders set into the rocks beneath the houses. Wonderfully odd and very romantic.",
      },
      {
        name: "Galissas & Finikas",
        note: "The west-coast beach villages, quieter and sandier, twenty minutes from town.",
      },
    ],
    stays: [
      {
        label: "Restored neoclassical mansion",
        note: "Syros's speciality: high ceilings, painted panels, marble stairs, often with a roof terrace over the harbour.",
      },
      {
        label: "Ano Syros house",
        note: "Up in the medieval lanes, reached on foot. Steep, quiet and full of view.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Ermoupoli evening",
        body: "Arrive and walk Miaouli Square as it fills at dusk. Dinner in Vaporia with the sea directly below the terrace.",
      },
      {
        day: "Day 2",
        title: "Ano Syros and rebetiko",
        body: "The climb to the Catholic hill town and Saint George's cathedral in the morning, then a late-night rebetiko taverna — Syros is one of the birthplaces of the music.",
      },
      {
        day: "Day 3",
        title: "West-coast beaches",
        body: "Galissas, Kini for sunset and dinner on the sand, with a stop at the Apollon Theatre on the way back.",
      },
    ],
    pairings: [
      {
        slug: "mykonos",
        note: "Thirty minutes by ferry. Culture then scene, and an easy contrast.",
      },
      {
        slug: "tinos",
        note: "Twenty-five minutes, and the two together make the most interesting non-obvious week in the Cyclades.",
      },
      {
        slug: "paros",
        note: "Around an hour, for beaches after the city.",
      },
    ],
    gettingThere:
      "Two to four hours by ferry from Piraeus, with very frequent departures as Syros is the administrative hub. A small airport takes short flights from Athens. Excellent links to Tinos, Mykonos and Paros.",
    crowds:
      "Busy with Greek visitors in August, calm the rest of the season. Never overrun by international tourism.",
    wind: "Exposed on the north and west. Ermoupoli's harbour and the Vaporia swimming ladders are sheltered.",
    faqs: [
      {
        question: "Is Syros worth visiting on a honeymoon?",
        answer:
          "Yes, for couples who want architecture, music and a real Greek town rather than a resort. Ermoupoli is the most beautiful neoclassical city in the Aegean and it functions year-round.",
      },
      {
        question: "Does Syros have good beaches?",
        answer:
          "Decent rather than exceptional. The west coast has pleasant sandy bays at Galissas, Finikas and Kini, but nobody comes to Syros primarily to swim.",
      },
      {
        question: "What is Ano Syros?",
        answer:
          "The medieval Catholic hill town above Ermoupoli, founded under Venetian rule. It is a steep, car-free warren of lanes topped by Saint George's cathedral, with the best view on the island.",
      },
    ],
    heroImage: IMAGES.stock3,
    gallery: [IMAGES.athensGastronomy, IMAGES.stock1, IMAGES.tinosPyrgos, IMAGES.stock2],
    plannerType: "the-administrator",
    updatedAt: "2026-07-20",
  },
  {
    slug: "tinos",
    name: "Tinos",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Tinos has fifty stone villages, a marble-carving tradition, thousands of ornamental dovecotes and the best rural food scene in the Cyclades. Stay 4 nights from May to October. It is thirty minutes from Mykonos and nothing like it.",
    bestFor: "Marble villages, dovecotes, walking, serious rural cooking",
    notFor: "Couples wanting beach-club energy or one big view",
    nights: "4 nights",
    bestMonths: "May to October",
    plannerNote:
      "Pyrgos is a village where the bus shelter, the fountains and the gravestones are all hand-carved marble. There is nowhere else like it in Greece.",
    lastWalked: "May 2026",
    intro: [
      "Tinos sits half an hour from Mykonos and has spent decades being ignored by everyone heading there, which has preserved it beautifully. It is a big, mountainous island with around fifty villages, most of them built in pale stone rather than the usual white cubes.",
      "Two things define it. Marble: the village of Pyrgos has carved it for centuries and still runs a school of fine arts, so the entire settlement is a demonstration piece. And dovecotes: elaborate two-storey stone towers built by the Venetians, patterned like lacework, scattered across the valleys in their hundreds.",
      "In the last few years it has also become a food destination, with a cluster of ambitious young chefs cooking with island produce in villages that had nothing a decade ago. It is now one of the most rewarding islands in Greece to eat your way around.",
    ],
    bases: [
      {
        name: "Chora (Tinos Town)",
        note: "The port, dominated by the pilgrimage church of Panagia Evangelistria. Practical and increasingly good for dinner.",
      },
      {
        name: "Pyrgos",
        note: "The marble village in the north. Beautiful, artistic and remote — an hour from the port.",
      },
      {
        name: "Volax & the interior",
        note: "A village sitting in a field of enormous round granite boulders, which looks like nowhere else on earth.",
      },
      {
        name: "Agios Ioannis Porto & Kionia",
        note: "The sandy south-coast bays, sheltered and shallow, with the best beach hotels.",
      },
    ],
    stays: [
      {
        label: "Stone villa in the hills",
        note: "The Tinos speciality: restored stone houses with a pool and dovecotes in the view. You need a car.",
      },
      {
        label: "Small hotel on the south coast",
        note: "For couples who want the beach as the base and the villages as day trips.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Chora and the church",
        body: "Arrive, walk up to Panagia Evangelistria, then dinner in the back lanes of the port town.",
      },
      {
        day: "Day 2",
        title: "The marble north",
        body: "Pyrgos for the museum of marble crafts and the workshops, lunch at Panormos harbour, and the long drive back through the villages at golden hour.",
      },
      {
        day: "Day 3",
        title: "Dovecotes and Volax",
        body: "The Tarambados valley, where the dovecotes are densest, then the boulder field at Volax and basket weavers in the village.",
      },
      {
        day: "Day 4",
        title: "Beaches and a last dinner",
        body: "Kolimbithra in the north or Agios Ioannis Porto in the south, then whichever village restaurant you have been recommended most often.",
      },
    ],
    pairings: [
      {
        slug: "mykonos",
        note: "Thirty minutes. Tinos for substance, Mykonos for one glamorous evening.",
      },
      {
        slug: "syros",
        note: "Twenty-five minutes, and together they make the thinking couple's Cyclades.",
      },
      {
        slug: "andros",
        note: "An hour, completing the trio of overlooked northern islands.",
      },
    ],
    gettingThere:
      "Ferries from Rafina take 2–4 hours; from Piraeus, 4–5. Thirty minutes from Mykonos and twenty-five from Syros. No airport — fly to Mykonos and take the boat. A car is essential.",
    crowds:
      "Extremely busy around 15 August for the religious pilgrimage, when the island is full. Quiet at almost every other moment of the year.",
    wind:
      "One of the windier Cyclades. The north coast beaches are exposed; the south stays usable.",
    faqs: [
      {
        question: "Is Tinos good for a honeymoon?",
        answer:
          "Yes, for couples who want villages, food and landscape over beaches and nightlife. Tinos has the most interesting rural architecture in the Cyclades and an excellent, still-underrated restaurant scene.",
      },
      {
        question: "How do you get to Tinos?",
        answer:
          "By ferry from Rafina or Piraeus, or in thirty minutes from Mykonos. There is no airport, so most couples fly to Mykonos and take the boat across.",
      },
      {
        question: "What are the Tinos dovecotes?",
        answer:
          "Ornamental two-storey stone pigeon towers built under Venetian rule, decorated with intricate geometric slate lacework. Around a thousand survive, concentrated in the Tarambados valley.",
      },
      {
        question: "Should we avoid Tinos in August?",
        answer:
          "Avoid the week around 15 August, when tens of thousands of pilgrims arrive for the Feast of the Dormition and accommodation is impossible. The rest of the month is fine.",
      },
    ],
    heroImage: IMAGES.tinosPyrgos,
    gallery: [IMAGES.stock1, IMAGES.gastronomy, IMAGES.aegeanWindow, IMAGES.stock4],
    plannerType: "the-administrator",
    updatedAt: "2026-07-20",
  },
  {
    slug: "andros",
    name: "Andros",
    region: "cyclades",
    eyebrow: "Cyclades",
    answer:
      "Andros is the green Cyclade: running water, three hundred kilometres of waymarked footpaths, shipowners' mansions and empty sandy beaches, two hours from Athens by ferry. Stay 4 nights from May to October.",
    bestFor: "Hiking, waterfalls, neoclassical Chora, contemporary art",
    notFor: "Couples expecting whitewashed Cycladic postcard villages",
    nights: "4 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "Andros has streams that run in August, which no other Cyclade can claim. If you want to walk on your honeymoon, this is the island.",
    lastWalked: "October 2025",
    intro: [
      "Andros breaks the Cycladic rules. It has water — real streams, waterfalls and plane trees — because the mountains catch enough rain to keep the island green when its neighbours are the colour of bone.",
      "It was also a shipowning island, and the wealth built a Chora unlike any other: a narrow spit of neoclassical mansions running out to sea, ending at a ruined Venetian tower on a rock. The Goulandris family endowed a museum of modern art here, which is why you can see serious international work in a village of a few thousand people.",
      "The walking is the best in the Cyclades and possibly in Greece: the Andros Route is a marked network of old stone paths, kalderimia, linking villages, monasteries and beaches, and it is properly maintained.",
    ],
    bases: [
      {
        name: "Chora (Andros Town)",
        note: "Neoclassical, marble-paved and quietly grand. The museums, the best restaurants and the tower at the end of the spit.",
      },
      {
        name: "Batsi",
        note: "The pretty resort bay in the west, with the most hotels and the easiest swimming.",
      },
      {
        name: "Apikia & the hills",
        note: "Above Chora, with springs, plane trees and the Pythara waterfalls a short walk away.",
      },
      {
        name: "Achla & the north",
        note: "One of the most beautiful beaches in the Cyclades, reached by a rough track or by boat.",
      },
    ],
    stays: [
      {
        label: "Restored mansion in Chora",
        note: "High-ceilinged shipowners' houses converted into small hotels. The most characterful option.",
      },
      {
        label: "Country estate with pool",
        note: "Inland among terraces and streams, with paths starting at the gate.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Chora and the tower",
        body: "Arrive and walk the marble spine of the old town out to the Venetian tower, then dinner overlooking the bay.",
      },
      {
        day: "Day 2",
        title: "A kalderimi walk",
        body: "One stage of the Andros Route — the path from Chora through Menites and Messaria, past Byzantine churches and springs.",
      },
      {
        day: "Day 3",
        title: "Waterfalls and beaches",
        body: "The Pythara falls above Apikia in the morning, then down to Achla or Vori for an empty afternoon on the sand.",
      },
      {
        day: "Day 4",
        title: "Art and a last swim",
        body: "The Goulandris Museum of Contemporary Art, then Batsi for lunch on the water before the ferry back to Rafina.",
      },
    ],
    pairings: [
      {
        slug: "tinos",
        note: "An hour by ferry, and the natural next stop on the northern chain.",
      },
      {
        slug: "athens",
        note: "Two hours from Rafina, which makes Andros the easiest island to reach for a short honeymoon.",
      },
    ],
    gettingThere:
      "Two hours by ferry from Rafina, which is 45 minutes from Athens airport — often faster door to door than a flight plus transfer. No airport on the island. A car is needed.",
    crowds:
      "Busy with Athenian families in August. Almost empty in May, June, September and October, which is when the walking is best anyway.",
    wind:
      "Exposed to the north. The west-coast bays around Batsi are sheltered in most conditions.",
    faqs: [
      {
        question: "Is Andros good for a honeymoon?",
        answer:
          "Yes, for active couples. Andros combines the best hiking network in the Greek islands with empty beaches, a grand neoclassical town and a serious modern art museum, two hours from Athens.",
      },
      {
        question: "Why is Andros green when other Cyclades are not?",
        answer:
          "Its mountains are high enough to capture significant rainfall, so springs and streams run year-round. That is why you find plane trees, waterfalls and terraced farming here and almost nowhere else in the group.",
      },
      {
        question: "How do you get to Andros?",
        answer:
          "A two-hour ferry from Rafina port, about 45 minutes from Athens airport. There are no flights, which keeps the island quiet.",
      },
    ],
    heroImage: IMAGES.stock1,
    gallery: [IMAGES.stock5, IMAGES.tinosPyrgos, IMAGES.gastronomy, IMAGES.aegeanWindow],
    plannerType: "the-action-taker",
    updatedAt: "2026-07-20",
  },
];
