import { IMAGES } from "./images";
import type { Itinerary } from "./types";

export const ITINERARIES: Itinerary[] = [
  {
    slug: "santorini-milos-10-days",
    title: "Santorini & Milos in Ten Days",
    tagline: "The view, then the water",
    answer:
      "Ten nights split between Santorini and Milos: four on the caldera for the view and the wine, five on Milos for boat days and swimming, with one night in Athens. The best-balanced two-island honeymoon in Greece.",
    nights: 10,
    bestMonths: "Late May to June, and September",
    islands: ["athens", "santorini", "milos"],
    intro: [
      "This is the itinerary we build most often, because it solves the central problem of a Santorini honeymoon: the island is a cliff, and after four days most couples want to get in the sea from something other than a hotel pool.",
      "Milos is two hours away by fast ferry and has the best swimming in the Cyclades. Putting the two together gives you the postcard and the holiday, with one ferry and no backtracking.",
      "We open with a night in Athens rather than a same-day connection. It sounds like a wasted evening. It is not — it removes the exhaustion that otherwise ruins your first day on the caldera.",
    ],
    days: [
      {
        day: "Day 1",
        title: "Athens",
        body: "Arrive, transfer to Plaka, and dinner on a roof terrace with the Parthenon floodlit above you. Nothing else planned.",
      },
      {
        day: "Day 2",
        title: "Acropolis, then fly south",
        body: "First entry at the Acropolis at eight, the museum afterwards, then the afternoon flight to Santorini and sunset from your own terrace.",
      },
      {
        day: "Day 3",
        title: "The caldera walk",
        body: "The rim path from Imerovigli to Oia in the late afternoon, timed so you are seated for dinner as everyone else leaves.",
      },
      {
        day: "Day 4",
        title: "Assyrtiko and the volcano",
        body: "Morning tasting among the basket-trained vines at Pyrgos, then a private catamaran around the caldera and into the hot springs.",
      },
      {
        day: "Day 5",
        title: "Akrotiri and the south",
        body: "The Bronze Age town in the morning, then a long lunch at Ammoudi below Oia, reached down three hundred steps or by car.",
      },
      {
        day: "Day 6",
        title: "Ferry to Milos",
        body: "The late-morning boat, arriving for a first swim off the rocks at Pollonia and dinner on the water.",
      },
      {
        day: "Day 7",
        title: "Kleftiko by private boat",
        body: "A full day around the south coast — sea caves, the collapsed cavern at Sykia, and swimming where there is no road at all.",
      },
      {
        day: "Day 8",
        title: "Sarakiniko and the north",
        body: "The white lunar rock early, before the light flattens, then Mandrakia and Firopotamos for lunch and a quieter swim.",
      },
      {
        day: "Day 9",
        title: "Plaka and the west",
        body: "The old town, the catacombs and the Roman theatre, then the castle at sunset — the best view in the western Cyclades.",
      },
      {
        day: "Day 10",
        title: "One last cove, then home",
        body: "Tsigrado or Firiplaka in the morning, then the short flight back to Athens for your connection.",
      },
    ],
    includes: [
      "Private transfers throughout, including the ferry ports",
      "Caldera-view suite in Imerovigli with a heated plunge pool",
      "Private catamaran day on the Santorini caldera",
      "Small-boat charter to Kleftiko with a skipper who knows the light",
      "Assyrtiko tasting at two estates, arranged privately",
      "Restaurant bookings held from the moment you confirm",
    ],
    faqs: [
      {
        question: "Is ten days enough for Santorini and Milos?",
        answer:
          "Comfortably. Four nights on Santorini covers the caldera properly, and five on Milos allows a full boat day plus time for the beaches you can drive to.",
      },
      {
        question: "How do you get from Santorini to Milos?",
        answer:
          "By fast ferry in about two hours, with daily summer departures. We build a buffer into the timing because Cycladic ferries can run late in a strong meltemi.",
      },
      {
        question: "Should we do Santorini first or Milos first?",
        answer:
          "Santorini first, almost always. The caldera is the high note and it works better while the excitement is fresh; Milos is where you want to be by the second week.",
      },
    ],
    heroImage: IMAGES.santoriniIslandView,
    updatedAt: "2026-07-21",
  },
  {
    slug: "athens-cyclades-14-days",
    title: "Athens & the Cyclades in Fourteen Days",
    tagline: "A capital, a beach island, and the caldera",
    answer:
      "Fourteen nights: two in Athens, five on Naxos or Paros for beaches and food, three on Mykonos for one glamorous stretch, and four on Santorini to finish. One country, properly seen.",
    nights: 14,
    bestMonths: "June and September",
    islands: ["athens", "paros", "naxos", "mykonos", "santorini"],
    intro: [
      "A fortnight is the length at which a Greek honeymoon stops being a holiday and starts being a journey. This itinerary uses that time to give you four distinct experiences rather than four versions of the same one.",
      "The shape matters. Culture first while you have energy, then a long unhurried beach stretch in the middle, then a short burst of glamour, then the caldera as the closing image.",
      "Every leg is a short ferry. There is no backtracking through Piraeus and no domestic flight after the first one.",
    ],
    days: [
      {
        day: "Days 1–2",
        title: "Athens",
        body: "Plaka, the Acropolis at opening time, the museum, and two long dinners with the Parthenon lit above the table.",
      },
      {
        day: "Day 3",
        title: "Ferry to Paros",
        body: "The morning boat from Piraeus, arriving in Naoussa for a swim and an evening on the old harbour.",
      },
      {
        day: "Days 4–5",
        title: "Paros",
        body: "Kolymbithres and the north bay, the marble villages of Lefkes and Marpissa, and a day on Antiparos.",
      },
      {
        day: "Days 6–7",
        title: "Naxos",
        body: "The thirty-minute crossing, then the Portara at sunset, the long sands at Plaka, and a day in the Tragaea among olive groves and Byzantine chapels.",
      },
      {
        day: "Days 8–10",
        title: "Mykonos",
        body: "An hour by ferry. The old town before the shops open, Delos on the first boat, one very good dinner, and a day on whichever beach suits your temperament.",
      },
      {
        day: "Day 11",
        title: "Ferry to Santorini",
        body: "Two hours south, arriving in the afternoon for sunset from your own terrace in Imerovigli.",
      },
      {
        day: "Days 12–13",
        title: "Santorini",
        body: "The caldera walk, an Assyrtiko afternoon in Pyrgos, a private catamaran and hot springs, and Akrotiri.",
      },
      {
        day: "Day 14",
        title: "Home",
        body: "A slow morning on the terrace, then the direct flight out or a connection through Athens.",
      },
    ],
    includes: [
      "All ferries booked with sensible connection buffers",
      "Private transfers at every port and airport",
      "Two nights in a rooftop Acropolis-view room",
      "Delos guided privately by a licensed archaeologist",
      "Caldera suite for the final four nights",
      "A restaurant list for each island, with the bookings already made",
    ],
    faqs: [
      {
        question: "Is four islands too many for two weeks?",
        answer:
          "Four is the maximum we recommend for fourteen nights, and it only works because these islands are on the same ferry spine. Any more and you spend the honeymoon packing.",
      },
      {
        question: "Should we end in Santorini or start there?",
        answer:
          "End there. The caldera is the strongest image of the trip and it works best as the closing chapter, when you are rested rather than jet-lagged.",
      },
      {
        question: "Can we swap Mykonos for something quieter?",
        answer:
          "Easily. Folegandros, Sifnos or Tinos all slot into the same three nights. Mykonos is in the default version because many couples want one night that feels like an event.",
      },
    ],
    heroImage: IMAGES.athensLuxury,
    updatedAt: "2026-07-21",
  },
  {
    slug: "ionian-quietly",
    title: "The Ionian, Quietly",
    tagline: "Twelve nights of turquoise water and olive shade",
    answer:
      "Twelve nights across Corfu, Paxos and Kefalonia: Venetian old towns, olive-shaded coves, sea caves and the clearest water in Greece. Calmer than the Aegean in August because the meltemi does not reach here.",
    nights: 12,
    bestMonths: "June and September",
    islands: ["corfu", "paxos", "kefalonia", "ithaca"],
    intro: [
      "The Ionian is the answer for couples who can only travel in high summer and do not want their boat days cancelled. The meltemi that torments the Aegean in July and August barely reaches this coast.",
      "It is also greener, softer and more Venetian than the Cyclades — olive groves and cypress rather than bare rock, ochre façades rather than whitewash.",
      "This itinerary is built around water. Three of the four stops are places where the right way to spend a day is in a small boat you steer yourselves.",
    ],
    days: [
      {
        day: "Days 1–2",
        title: "Corfu Old Town",
        body: "The Venetian fortresses, the arcaded Liston, and dinner in the Campiello lanes. One afternoon at the Achilleion.",
      },
      {
        day: "Days 3–4",
        title: "Northeast Corfu",
        body: "Up to the olive coves around Kalami and Agni, with a self-drive boat and lunch at a taverna jetty you can only reach by sea.",
      },
      {
        day: "Days 5–7",
        title: "Paxos & Antipaxos",
        body: "The boat down from Corfu to Lakka. Early mornings at Voutoumi and Vrika before the day trips, and a circuit of the west-coast sea caves.",
      },
      {
        day: "Days 8–10",
        title: "Kefalonia",
        body: "North to Fiskardo and Assos. Myrtos in the last hour of light, Melissani's underground lake at midday, and Robola tasting at Omala.",
      },
      {
        day: "Day 11",
        title: "Ithaca",
        body: "Thirty minutes by boat to Kioni — a harbour, a jetty, three tavernas and nothing else to do.",
      },
      {
        day: "Day 12",
        title: "Home",
        body: "Back across to Kefalonia for the flight, or up to Corfu if your return routes that way.",
      },
    ],
    includes: [
      "Self-drive boat days on Corfu and Paxos",
      "All inter-island boats and transfers",
      "A waterfront villa on the Corfu northeast coast",
      "Robola tasting and a private tour of the Melissani cave outside peak hours",
      "Restaurant bookings, including the jetty tavernas that fill in July",
    ],
    faqs: [
      {
        question: "Is the Ionian better than the Cyclades in August?",
        answer:
          "For boat days, yes. The Ionian escapes the meltemi, so small-boat trips run reliably and the sea stays calm. It is more humid and greener, and the architecture is Venetian rather than Cycladic.",
      },
      {
        question: "Do we need a car for this itinerary?",
        answer:
          "On Corfu and Kefalonia, yes. On Paxos and Ithaca you do not — both are small enough to manage on foot, by taxi and by boat.",
      },
      {
        question: "How do you get between the Ionian islands?",
        answer:
          "Corfu to Paxos is about an hour by fast boat. Paxos to Kefalonia requires a connection, so we usually route it through Lefkada or fly the short leg, and Kefalonia to Ithaca is thirty minutes.",
      },
    ],
    heroImage: IMAGES.corfu,
    updatedAt: "2026-07-21",
  },
  {
    slug: "winter-athens-crete",
    title: "Late-Season Athens, Nafplio & Crete",
    tagline: "For couples married in October or November",
    answer:
      "Eleven nights for a late-season honeymoon: Athens, Nafplio's neoclassical old town and the Argolid sites, then Chania in western Crete, where hotels stay open and the sea stays swimmable into November.",
    nights: 11,
    bestMonths: "October to early November",
    islands: ["athens", "nafplio", "chania", "messinia"],
    intro: [
      "Most Greek islands begin closing in mid-October. Couples married in autumn are routinely told that Greece is not an option, which is wrong — it just means going to the places that stay open and are better in the cool.",
      "Athens is at its best in October. Nafplio and the Argolid are transformed by the harvest and the absence of crowds. And western Crete keeps its season running until November, with sea temperatures that hold up remarkably well.",
      "The trade-off is honest: you may lose an afternoon to rain. You gain empty archaeological sites, half-price rates and restaurants that have time for you.",
    ],
    days: [
      {
        day: "Days 1–2",
        title: "Athens",
        body: "The Acropolis without the summer queues, the museum, and the food markets which are at their best in autumn.",
      },
      {
        day: "Days 3–5",
        title: "Nafplio",
        body: "The marble old town, Palamidi's steps, Epidaurus and Mycenae, and Agiorgitiko tasting in Nemea during the harvest.",
      },
      {
        day: "Day 6",
        title: "Fly to Chania",
        body: "Down to western Crete, into the Venetian old town, with the harbour lighthouse walk before dinner.",
      },
      {
        day: "Days 7–10",
        title: "Chania and the west",
        body: "The covered market and a cooking morning, Balos by boat, Elafonissi's pink sand, and the olive harvest in the villages of the Apokoronas.",
      },
      {
        day: "Day 11",
        title: "Home",
        body: "A last walk through the old town before the flight to Athens or a direct departure.",
      },
    ],
    includes: [
      "Private driver for the Peloponnese leg",
      "Nemea harvest tasting, arranged for the working season",
      "Cretan cooking morning with a family in the Apokoronas",
      "Olive mill visit during the November pressing",
      "Hotels chosen specifically for staying open and heated late in the season",
    ],
    faqs: [
      {
        question: "Can you honeymoon in Greece in October or November?",
        answer:
          "Yes, on the mainland and in Crete. Athens, Nafplio and western Crete all stay open and are genuinely better without crowds. Most Cycladic islands close from mid-October, so avoid building an itinerary around them.",
      },
      {
        question: "Will the sea be warm enough to swim in November?",
        answer:
          "In western Crete, usually. Sea temperatures lag the air by about six weeks, so early November often still allows swimming even when the mornings are cool.",
      },
      {
        question: "What is the weather like in Greece in late October?",
        answer:
          "Warm days in the low twenties, cool evenings, and the first rain of the season. It is the best month of the year for walking archaeological sites and the worst for sunbathing all day.",
      },
    ],
    heroImage: IMAGES.gastronomy,
    updatedAt: "2026-07-21",
  },
  {
    slug: "crete-slow-luxury",
    title: "Crete, Slowly",
    tagline: "One island, two bases, fourteen nights",
    answer:
      "Fourteen nights in Crete without island hopping: seven in Chania's Venetian old town for food and the west, then seven at Elounda for a private-pool resort and Spinalonga. No ferries, no repacking.",
    nights: 14,
    bestMonths: "May to June and September to October",
    islands: ["chania", "rethymno", "elounda"],
    intro: [
      "Crete is big enough to be a country, and a fortnight here beats a fortnight of island hopping for couples who dislike moving. Two bases, one drive between them, and nothing else to organise.",
      "The two halves are deliberately opposite. Chania is walking, eating, markets and gorges — the atmospheric half. Elounda is a private pool, a spa and a beach club — the half where you stop.",
      "In between, a night in Rethymno breaks the three-hour drive and gives you a third Venetian old town with almost nobody in it.",
    ],
    days: [
      {
        day: "Days 1–3",
        title: "Chania old town",
        body: "The Venetian harbour, Splantzia's courtyards, the covered market, and a Cretan cooking morning.",
      },
      {
        day: "Day 4",
        title: "Balos",
        body: "The boat from Kissamos to the lagoon and Gramvousa's fortress, with swimming in water that barely reaches your knees for a hundred metres.",
      },
      {
        day: "Days 5–6",
        title: "The southwest",
        body: "Elafonissi's pink sand, or the Samaria Gorge and the ferry out from Agia Roumeli, then two nights in Loutro, which has no road to it.",
      },
      {
        day: "Day 7",
        title: "Rethymno",
        body: "East along the coast, an afternoon in the Venetian and Ottoman old town, and the Fortezza at sunset.",
      },
      {
        day: "Days 8–13",
        title: "Elounda",
        body: "A private-pool villa on the Mirabello gulf. Spinalonga by boat, the Lasithi plateau, the palm beach at Vai, and several days of doing nothing at all.",
      },
      {
        day: "Day 14",
        title: "Home",
        body: "The transfer to Heraklion for the flight.",
      },
    ],
    includes: [
      "Private transfers and a car for the western half",
      "Cretan cooking morning and a mountain-village lunch",
      "Boat to Balos and Gramvousa, timed before the day boats",
      "Private-pool villa or suite at Elounda for six nights",
      "Early-morning private crossing to Spinalonga",
    ],
    faqs: [
      {
        question: "Is fourteen nights too long for Crete?",
        answer:
          "No. Crete is 260 kilometres end to end with several distinct regions. Two weeks with two bases is comfortable; two weeks touring the whole island would not be.",
      },
      {
        question: "Do we need a car in Crete?",
        answer:
          "For the western half, yes. At Elounda you can manage without one if you intend to stay at the resort, and we arrange a driver for the days you want to go out.",
      },
      {
        question: "Chania or Elounda for a honeymoon?",
        answer:
          "Chania if you want a beautiful town and to eat somewhere different every night. Elounda if you want a private pool and a spa. This itinerary exists because the honest answer is both.",
      },
    ],
    heroImage: IMAGES.creteWine,
    updatedAt: "2026-07-21",
  },
  {
    slug: "hydra-spetses-escape",
    title: "Hydra, Spetses & Nafplio",
    tagline: "A week with no flights after the first",
    answer:
      "Eight nights reachable entirely from Athens by hydrofoil and road: two in the city, three on car-free Hydra, and three in Nafplio or on Spetses. The fastest luxury honeymoon in Greece to assemble.",
    nights: 8,
    bestMonths: "May to June and September to October",
    islands: ["athens", "hydra", "spetses", "nafplio"],
    intro: [
      "Not every couple has a fortnight. This itinerary is built for eight nights and one flight, using hydrofoils and a short drive instead of domestic connections.",
      "Hydra does something no other Greek island can: it has banned all wheeled vehicles, so your luggage arrives on a mule and the harbour is silent apart from hooves and water.",
      "Spetses and Nafplio then give you two very different second halves — one an elegant pine-backed island, the other the most beautiful small town on the mainland.",
    ],
    days: [
      {
        day: "Days 1–2",
        title: "Athens",
        body: "Two nights in Plaka with the Acropolis at opening time and a rooftop dinner.",
      },
      {
        day: "Days 3–5",
        title: "Hydra",
        body: "The 90-minute hydrofoil, mules for the bags, the coast walk to Kamini and Vlychos, the monastery climb, and swimming from the ladders at Hydronetta.",
      },
      {
        day: "Days 6–8",
        title: "Spetses or Nafplio",
        body: "An hour by hydrofoil to Spetses for carriages, the Old Harbour and pine-backed beaches — or across to the mainland for Nafplio, Epidaurus and the Nemea vineyards.",
      },
    ],
    includes: [
      "All hydrofoils and a private transfer at each end",
      "A captain's mansion on Hydra with a harbour view",
      "Water taxi days around Hydra's coves",
      "Either a Spetses mansion hotel or a Nafplio neoclassical townhouse",
      "Optional private driver for Epidaurus, Mycenae and Nemea",
    ],
    faqs: [
      {
        question: "Can you honeymoon in Greece without a domestic flight?",
        answer:
          "Yes. The Saronic islands and the Peloponnese are all reachable from Athens by hydrofoil or road, which makes this the quickest Greek honeymoon to put together from a single arrival.",
      },
      {
        question: "Is eight nights enough for a Greek honeymoon?",
        answer:
          "It is, provided you do not try to reach the Cyclades. Two nights in Athens and two stops within two hours of Piraeus gives you a complete trip without spending days in transit.",
      },
      {
        question: "Is Hydra really car-free?",
        answer:
          "Completely. Cars, motorbikes and bicycles are all banned. Luggage moves by mule and everything else is on foot or by water taxi.",
      },
    ],
    heroImage: IMAGES.aegeanWindow,
    updatedAt: "2026-07-21",
  },
  {
    slug: "north-aegean-authenticity",
    title: "The North Aegean, Unvarnished",
    tagline: "Medieval villages, ouzo, hot springs and no crowds",
    answer:
      "Twelve nights across Chios, Lesvos and Ikaria: mastic villages, Byzantine mosaics, ouzo distilleries, thermal springs and Blue Zone slowness. For couples who want to feel like they went somewhere.",
    nights: 12,
    bestMonths: "Late May to June, and September",
    islands: ["chios", "lesvos", "ikaria", "samos"],
    intro: [
      "This is the itinerary for couples who find Santorini dispiriting. The North Aegean has almost no honeymoon industry, which means nobody is performing Greekness for you and dinner costs what it costs locals.",
      "The trade-off is stated plainly: accommodation here tops out at excellent boutique, not palatial. If a butler and an infinity pool are essential, this is the wrong region.",
      "What you get instead is a medieval village where every façade is scratched into geometric patterns, an island where people routinely live past ninety, and beaches you will have entirely to yourselves in June.",
    ],
    days: [
      {
        day: "Days 1–4",
        title: "Chios",
        body: "The walled citrus estates of Kampos, the mosaics at Nea Moni, the abandoned cliff village of Anavatos, and the mastic villages of Pyrgi and Mesta — where you sleep inside the medieval walls.",
      },
      {
        day: "Days 5–8",
        title: "Lesvos",
        body: "North to Molyvos beneath its Genoese castle. An ouzo distillery in Plomari, the thermal springs at Eftalou, the petrified forest in the west, and the flamingos on the Gulf of Kalloni.",
      },
      {
        day: "Days 9–12",
        title: "Ikaria",
        body: "The Blue Zone island. Nas, where a river meets the sea under a ruined temple to Artemis; the radon springs at Therma; and, if the calendar obliges, a village panigyri that starts at eleven and ends at dawn.",
      },
    ],
    includes: [
      "Domestic flights and ferries between the islands",
      "A restored tower house inside the walls at Mesta",
      "Mastic cultivation visit to see the trees actually tapped",
      "Ouzo distillery and olive oil producer visits",
      "A car on each island, which is essential here",
    ],
    faqs: [
      {
        question: "Are the North Aegean islands suitable for a luxury honeymoon?",
        answer:
          "They suit couples whose definition of luxury is privacy, food and authenticity. Hotels are boutique rather than five-star, and there are no resorts with spas and butlers.",
      },
      {
        question: "Is it easy to travel between Chios, Lesvos and Ikaria?",
        answer:
          "Less so than in the Cyclades. Chios to Lesvos is a straightforward ferry; Ikaria usually needs a connection via Samos or a short domestic flight. We build the routing around the actual schedules each season.",
      },
      {
        question: "What is a Blue Zone?",
        answer:
          "One of a handful of places worldwide where an unusual proportion of people live past ninety. Ikaria is one, and researchers credit its diet, daily walking, strong social ties and relaxed relationship with time.",
      },
    ],
    heroImage: IMAGES.chios,
    updatedAt: "2026-07-21",
  },
];

export const itinerariesBySlug = Object.fromEntries(
  ITINERARIES.map((i) => [i.slug, i]),
);
