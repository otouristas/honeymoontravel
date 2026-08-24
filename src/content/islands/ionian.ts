import { IMAGES } from "../images";
import type { Island } from "../types";

export const IONIAN_ISLANDS: Island[] = [
  {
    slug: "corfu",
    name: "Corfu",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Corfu pairs a UNESCO-listed Venetian old town with the elegant northeast coast, where the best hotels and restaurants are. Stay 4–5 nights between May and September. Choose the northeast, not the package resorts of the south.",
    bestFor: "Venetian architecture, olive-shaded coves, the best Ionian dining",
    notFor: "Couples who want an undiscovered island",
    nights: "4–5 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Corfu is two islands: the northeast between Kalami and Agios Stefanos, and everywhere the charter flights go. Book on the wrong side and you have a different holiday entirely.",
    lastWalked: "June 2026",
    intro: [
      "Corfu was never Ottoman. Four hundred years of Venetian rule, then British administration, left an island that reads more Italian than Greek: a walled old town of tall ochre houses and shuttered windows, an arcaded esplanade built by the French, and a cricket pitch in the middle of it.",
      "The landscape is startlingly green — three million olive trees planted under Venetian subsidy, cypress spearing up between them, and coves of extraordinarily clear water beneath.",
      "For a honeymoon, geography is everything. The northeast coast, the stretch the Durrells wrote about, has the good hotels, the pebble coves and the restaurants worth booking. The south and the far west have the mass-market resorts. Same island, entirely different holiday.",
    ],
    bases: [
      {
        name: "The northeast (Kalami, Agni, Kassiopi)",
        note: "Where I book almost every Corfu honeymoon. Olive-shaded coves, boats for hire, and a run of tavernas on the water that people fly in for.",
      },
      {
        name: "Corfu Old Town",
        note: "Two nights here at the start is worth it. Venetian fortresses, the Liston arcade, and the best evening passeggiata in Greece.",
      },
      {
        name: "Paleokastritsa",
        note: "Dramatic west-coast bays beneath a monastery. Beautiful, but busy with day trips at midday.",
      },
      {
        name: "The northwest (Agios Stefanos, Arillas)",
        note: "Sunset coast, quieter, with sandy rather than pebble beaches.",
      },
    ],
    stays: [
      {
        label: "Waterfront villa on the northeast",
        note: "The Corfu classic: a stone house with a jetty, olive terraces behind and a boat you can take to lunch.",
      },
      {
        label: "Grand hotel with private bay",
        note: "Corfu has two or three genuinely grand resorts on private coves, which is unusual in the Ionian.",
      },
      {
        label: "Old Town apartment",
        note: "Living inside the Venetian city for a couple of nights before you move to the coast.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Old Town evening",
        body: "Arrive, walk the Liston and the Old Fortress at dusk, and eat in the Campiello lanes.",
      },
      {
        day: "Day 2",
        title: "Move northeast",
        body: "Drive up the coast, settle into the olive groves above Kalami, and swim off the rocks before dinner at Agni.",
      },
      {
        day: "Day 3",
        title: "A boat of your own",
        body: "Hire a small boat without a licence and spend the day working along the coast to coves you cannot reach by road, with lunch at a taverna jetty.",
      },
      {
        day: "Day 4",
        title: "The west coast",
        body: "Angelokastro and Paleokastritsa in the morning, then sunset at Loggas beach on the cliffs at Peroulades.",
      },
      {
        day: "Day 5",
        title: "Achilleion and one last lunch",
        body: "The Empress Elisabeth's palace south of town, then a final long meal before departure.",
      },
    ],
    pairings: [
      {
        slug: "paxos",
        note: "An hour by boat, and the natural second half of an Ionian honeymoon.",
      },
      {
        slug: "kefalonia",
        note: "Further, but the two together cover the whole Ionian range from elegant to dramatic.",
      },
    ],
    gettingThere:
      "Direct summer flights from across the UK and Europe, and year-round Athens connections. Ferries link Corfu with Igoumenitsa on the mainland and with Paxos. A car is essential for the northeast.",
    crowds:
      "Very busy in the south and around the airport in July and August. The northeast stays comparatively civilised because it has no large hotels.",
    wind: "Sheltered by the mainland and rarely troubled by the meltemi. This is a reliable August island.",
    faqs: [
      {
        question: "Is Corfu good for a honeymoon?",
        answer:
          "Yes, if you stay on the northeast coast or in the old town. Corfu offers the best combination of architecture, restaurants and clear-water coves in the Ionian, with the easiest flights.",
      },
      {
        question: "Where should honeymooners stay in Corfu?",
        answer:
          "The northeast coast between Nissaki and Kassiopi — Kalami, Agni and Avlaki — where the villas, the coves and the good tavernas are. Avoid the southern resort strip entirely.",
      },
      {
        question: "Is Corfu too touristy for a honeymoon?",
        answer:
          "Parts of it are, and they are easy to avoid. The charter crowds concentrate in the south and around Sidari. The northeast and the interior remain quiet even in August.",
      },
      {
        question: "Do you need a car in Corfu?",
        answer:
          "Yes. The island is large, the northeast coast road is winding, and the best beaches and restaurants are spread out. Many couples add a driver for the evenings.",
      },
    ],
    heroImage: IMAGES.corfu,
    gallery: [
      IMAGES.corfuOldTown,
      IMAGES.corfuAchilleion,
      IMAGES.stock3,
      IMAGES.aegeanSailing,
    ],
    plannerType: "the-visionary",
    itinerary: "ionian-quietly",
    updatedAt: "2026-07-20",
  },
  {
    slug: "kefalonia",
    name: "Kefalonia",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Kefalonia is the most dramatic Ionian island: Myrtos beach beneath white cliffs, an underground lake at Melissani, and serious Robola wine. Stay 5 nights between May and September. It is big, so pick one base.",
    bestFor: "Dramatic coastline, wine, caves, space",
    notFor: "Couples who dislike driving mountain roads",
    nights: "5 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Myrtos is best an hour before sunset, when the tour buses have gone and the cliffs turn gold. At midday it is a car park with a beach attached.",
    lastWalked: "June 2026",
    intro: [
      "Kefalonia is the largest Ionian island and the most physically dramatic. A limestone spine runs down the middle rising to Mount Ainos, and the coast falls away from it in white cliffs to water of an almost artificial blue.",
      "Myrtos is the famous view — a curve of white pebble seen from six hundred feet above — but the island's real character is quieter: the Venetian harbour at Assos beneath its ruined castle, the fishing village of Fiskardo which survived the 1953 earthquake that flattened everywhere else, and the Robola vineyards on the mountain's shoulder.",
      "It is large, and that catches couples out. Fiskardo to Skala is a two-hour drive. Choose one end and stay there.",
    ],
    bases: [
      {
        name: "Fiskardo & Assos",
        note: "The north, and my choice for honeymooners. Venetian colour, small harbours, good restaurants and the best boat access.",
      },
      {
        name: "Lourdas & the south coast",
        note: "Long sandy beaches beneath Mount Ainos, with the bigger hotels.",
      },
      {
        name: "Sami & Agia Efimia",
        note: "The east coast, close to the Melissani and Drogarati caves and the ferry to Ithaca.",
      },
      {
        name: "Lassi & Argostoli",
        note: "Convenient for the airport and the town, but the busiest part of the island.",
      },
    ],
    stays: [
      {
        label: "Hillside villa with pool",
        note: "Kefalonia does villas exceptionally well — stone, terraced, with a view down to a bay you drive to in ten minutes.",
      },
      {
        label: "Harbourfront suite in Fiskardo",
        note: "Small, pastel and right on the quay. You will eat within fifty metres of your door every night.",
      },
      {
        label: "Beach resort in the south",
        note: "For couples who want a pool, a spa and a beach without moving the car.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "North to Fiskardo",
        body: "Arrive, drive up the coast, and eat on the quay watching the boats come in.",
      },
      {
        day: "Day 2",
        title: "Assos and Myrtos",
        body: "The Venetian castle above Assos in the morning, a swim in its harbour, then Myrtos late in the afternoon when the light is right.",
      },
      {
        day: "Day 3",
        title: "Caves and the east coast",
        body: "Melissani's underground lake at midday, when the sun comes through the collapsed roof and turns the water electric blue, then Antisamos for the afternoon.",
      },
      {
        day: "Day 4",
        title: "Robola and Mount Ainos",
        body: "The wine cooperative at Omala, tasting Robola grown on limestone at eight hundred metres, then the fir forest on Ainos.",
      },
      {
        day: "Day 5",
        title: "Boat to Ithaca",
        body: "Across to Ithaca for the day from Fiskardo or Sami — a small harbour, a monastery, and lunch in Kioni.",
      },
    ],
    pairings: [
      {
        slug: "ithaca",
        note: "Thirty minutes by boat. The natural companion, and impossibly quiet.",
      },
      {
        slug: "lefkada",
        note: "Reachable by ferry and road, adding the best beaches in the Ionian.",
      },
      {
        slug: "corfu",
        note: "For couples who want architecture and dining alongside the drama.",
      },
    ],
    gettingThere:
      "Direct summer flights from the UK and Europe into Argostoli, plus Athens connections. Ferries link Kefalonia with Ithaca, Lefkada, Zakynthos and the mainland at Kyllini and Astakos. A car is essential.",
    crowds:
      "Myrtos, Melissani and Fiskardo are busy at midday in July and August. The island is large enough that everywhere else stays calm.",
    wind: "Largely sheltered from the meltemi. Afternoon breezes on the west coast can make Myrtos choppy.",
    faqs: [
      {
        question: "Is Kefalonia good for a honeymoon?",
        answer:
          "Yes, for couples who want dramatic scenery and space. Kefalonia has the most spectacular coastline in the Ionian, excellent villas and serious wine, though it requires a car and some driving.",
      },
      {
        question: "Where is the best place to stay in Kefalonia for couples?",
        answer:
          "The north, around Fiskardo and Assos. Both are small, beautiful harbours with good restaurants, close to Myrtos and to the boats for Ithaca.",
      },
      {
        question: "How many nights do you need in Kefalonia?",
        answer:
          "Five. The island is big and the drives are slow, so fewer than five nights means you spend a disproportionate amount of the trip in the car.",
      },
      {
        question: "When is the best time to see Melissani cave?",
        answer:
          "Between roughly 11am and 1pm, when the sun is directly overhead and comes through the collapsed cave roof, lighting the underground lake an intense blue.",
      },
    ],
    heroImage: IMAGES.kefaloniaMyrtos,
    gallery: [IMAGES.corfu, IMAGES.aegeanSailing, IMAGES.stock1, IMAGES.lefkadaPortoKatsiki],
    plannerType: "the-action-taker",
    itinerary: "ionian-quietly",
    updatedAt: "2026-07-20",
  },
  {
    slug: "lefkada",
    name: "Lefkada",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Lefkada has the most spectacular beaches in Greece — Porto Katsiki, Egremni and Kathisma beneath white cliffs — and you drive there from the mainland over a causeway. Stay 4–5 nights from June to September.",
    bestFor: "West-coast beaches, sailing, no flight to an island required",
    notFor: "Couples wanting an old town or serious hotel luxury",
    nights: "4–5 nights",
    bestMonths: "June and September",
    plannerNote:
      "Lefkada's west-coast beaches are best seen from the water. The road down to Egremni is long and the steps are worse; take a boat and swim in from the blue.",
    lastWalked: "September 2025",
    intro: [
      "Lefkada is joined to the mainland by a floating bridge, which means you can land at Preveza and be on the island in half an hour without a ferry or a second flight. For couples with limited time that convenience is worth a great deal.",
      "What you come for is the west coast. A run of beaches beneath sheer chalk-white cliffs — Kathisma, Egremni, Porto Katsiki, Milos — where the water is a blue that people assume has been edited. They are, by a comfortable margin, the most photogenic beaches in Greece.",
      "The east coast is a different island: sheltered, green, dotted with yacht harbours at Nydri and Sivota, and the launching point for the small islands of Meganisi and Skorpios.",
    ],
    bases: [
      {
        name: "Agios Nikitas",
        note: "The only proper village on the west coast, small and walkable, with the beaches a short drive south.",
      },
      {
        name: "Sivota",
        note: "A deep, narrow inlet on the southeast coast lined with tavernas at the water's edge. Beautiful in the evening.",
      },
      {
        name: "Vasiliki",
        note: "The windsurfing bay in the south, with the boats to Kefalonia and Ithaca.",
      },
      {
        name: "Nydri & the east",
        note: "Yachts, day boats and easy access to Meganisi. Busier and less pretty than the west.",
      },
    ],
    stays: [
      {
        label: "West-coast villa",
        note: "Terraced above Kathisma or Agios Nikitas with a pool and a sunset that runs the whole length of the horizon.",
      },
      {
        label: "Boutique hotel in Sivota",
        note: "Small properties on the inlet where you step out of the door into dinner.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Over the causeway",
        body: "Land at Preveza, drive the bridge, and settle on the west coast for sunset at Agios Nikitas.",
      },
      {
        day: "Day 2",
        title: "The beach run",
        body: "Kathisma early, lunch above the cliffs, then Porto Katsiki late in the afternoon when the shadow leaves the sand.",
      },
      {
        day: "Day 3",
        title: "A boat day",
        body: "From Nydri or Sivota out to Meganisi's sea caves, past Skorpios, swimming off the back all day.",
      },
      {
        day: "Day 4",
        title: "Mountain villages",
        body: "Karya and Englouvi in the interior for lace-making, lentils and a cool lunch under plane trees, then Egremni in the evening.",
      },
    ],
    pairings: [
      {
        slug: "kefalonia",
        note: "A short ferry from Vasiliki, and a complete change of scale.",
      },
      {
        slug: "ithaca",
        note: "Reachable in the same hop, for the quietest possible second week.",
      },
    ],
    gettingThere:
      "Fly to Preveza (Aktion), 30 minutes from the island by road across the causeway — no ferry needed. Alternatively drive from Athens in about four hours. Ferries from Vasiliki serve Kefalonia and Ithaca.",
    crowds:
      "The famous beaches fill by 11am in August. Go early or late and they are transformed.",
    wind:
      "Vasiliki in the south is one of Europe's most reliable windsurfing bays because it blows every afternoon. The west coast can get swell; the east stays flat.",
    faqs: [
      {
        question: "Is Lefkada good for a honeymoon?",
        answer:
          "Yes, for beach-focused couples. Lefkada has the most beautiful beaches in Greece and is reached by road from the mainland, though its hotels are simpler than Corfu's or Crete's.",
      },
      {
        question: "Do you need a ferry to get to Lefkada?",
        answer:
          "No. Lefkada is connected to the mainland by a causeway and floating bridge, about thirty minutes from Preveza airport, which makes it the easiest Ionian island to reach.",
      },
      {
        question: "What is the best beach in Lefkada?",
        answer:
          "Porto Katsiki for the view and Egremni for the scale, both beneath white cliffs on the west coast. Kathisma is the most practical, with facilities and easier access.",
      },
    ],
    heroImage: IMAGES.lefkadaPortoKatsiki,
    gallery: [IMAGES.kefaloniaMyrtos, IMAGES.aegeanSailing, IMAGES.corfu, IMAGES.stock4],
    plannerType: "the-action-taker",
    itinerary: "ionian-quietly",
    updatedAt: "2026-07-20",
  },
  {
    slug: "zakynthos",
    name: "Zakynthos",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Zakynthos has Navagio shipwreck beach, the Blue Caves and loggerhead turtles nesting in Laganas bay. Stay 4 nights on the quiet west or northeast coast between May and September, well away from the southern resort strip.",
    bestFor: "The shipwreck bay, sea caves, turtles, dramatic cliffs",
    notFor: "Couples who would be unsettled by nearby package resorts",
    nights: "4 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Navagio's viewing platform has been closed and reopened repeatedly for safety. Seeing the bay from a small boat is better anyway, and it is not weather-dependent in the same way.",
    lastWalked: "September 2025",
    intro: [
      "Zakynthos suffers from its own most famous image. Navagio — the rusting hull on a crescent of white sand under three-hundred-foot cliffs — is on more posters than anywhere else in Greece, and the southern coast around Laganas has grown a nightlife industry that has nothing to do with honeymoons.",
      "Ignore both and there is a serious island here. The west coast is a wall of cliffs with sea caves at the northern tip that glow blue from below. The Vasilikos peninsula in the southeast has soft sand and protected turtle nesting beaches. The mountainous interior has villages that have never seen a tour bus.",
      "It is a question of where you point yourself. Stay north or east, and Zakynthos is beautiful and calm.",
    ],
    bases: [
      {
        name: "Vasilikos peninsula",
        note: "The southeast, with the best sandy beaches and small hotels, inside the marine park so development is restricted.",
      },
      {
        name: "The northeast (Agios Nikolaos, Makris Gialos)",
        note: "Close to the Blue Caves and the boats for Navagio, and much quieter.",
      },
      {
        name: "The hill villages",
        note: "Keri, Volimes and the interior, with villas and views down the whole coast.",
      },
    ],
    stays: [
      {
        label: "Villa on Vasilikos",
        note: "Olive terraces, a pool, and a five-minute walk down to a beach where turtles nest.",
      },
      {
        label: "Cliffside hotel in the north",
        note: "Small properties above the Blue Caves with steps down to swimming platforms.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Settle east",
        body: "Arrive and go straight to Vasilikos. Swim at Gerakas, then dinner overlooking the bay.",
      },
      {
        day: "Day 2",
        title: "Navagio and the caves by sea",
        body: "A small boat from the north, into the Blue Caves at the right hour and then around to the shipwreck bay to swim from the water.",
      },
      {
        day: "Day 3",
        title: "Turtles and Keri",
        body: "An early kayak in the marine park where loggerheads feed, then up to Keri for the cliffs and sunset.",
      },
      {
        day: "Day 4",
        title: "The interior",
        body: "Volimes for the weaving villages and a slow drive through the mountains before departure.",
      },
    ],
    pairings: [
      {
        slug: "kefalonia",
        note: "A short ferry north, and a step up in drama.",
      },
      {
        slug: "messinia",
        note: "The ferry to Kyllini puts you an hour from the Peloponnese coast and Costa Navarino.",
      },
    ],
    gettingThere:
      "Direct summer charter flights from the UK and Europe, plus Athens connections. Ferries from Kyllini in the Peloponnese take an hour. A car is needed.",
    crowds:
      "The southern strip around Laganas and Tsilivi is very busy and very loud in high summer. The north, east and interior are not.",
    wind: "Generally sheltered. Boat trips to Navagio can be cancelled by swell on the exposed west coast.",
    faqs: [
      {
        question: "Is Zakynthos good for a honeymoon?",
        answer:
          "It can be, provided you stay on the Vasilikos peninsula or in the north. The southern resort strip is aimed at a very different market and should be avoided entirely.",
      },
      {
        question: "Can you still visit Navagio shipwreck beach?",
        answer:
          "Access changes with landslide risk assessments, and the clifftop viewing platform has closed several times. Approaching by small boat and swimming in is the more reliable and better experience.",
      },
      {
        question: "Where can you see turtles in Zakynthos?",
        answer:
          "In the National Marine Park in Laganas bay, particularly off Gerakas and Marathonisi. Go by kayak or a licensed small boat early in the morning, and never on a large motorised tour.",
      },
    ],
    heroImage: IMAGES.aegeanSailing,
    gallery: [IMAGES.lefkadaPortoKatsiki, IMAGES.kefaloniaMyrtos, IMAGES.stock1, IMAGES.corfu],
    plannerType: "the-processor",
    updatedAt: "2026-07-20",
  },
  {
    slug: "ithaca",
    name: "Ithaca",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Ithaca is Odysseus's island: three small harbours, no airport, no resorts and almost no crowds. Stay 3–4 nights in Kioni or Vathy between June and September, usually alongside Kefalonia.",
    bestFor: "Quiet harbours, myth, sailing, doing nothing at all",
    notFor: "Couples who want a range of hotels, beaches or restaurants",
    nights: "3–4 nights",
    bestMonths: "June to September",
    plannerNote:
      "Kioni has three tavernas, a jetty and a pair of ruined windmills. That is the entire offer, and for the right couple it is the best three nights of the honeymoon.",
    lastWalked: "June 2026",
    intro: [
      "Ithaca is small, mountainous and almost entirely undeveloped, which is remarkable given it is one of the most famous place names in Western literature. There is no airport and no resort of any kind. Two deep bays almost cut the island in half.",
      "The pleasure here is a specific kind of nothing: a harbour, a jetty, a boat, a taverna, and a hillside of cypress and olive going gold at seven in the evening. Kioni and Frikes in the north are pastel-coloured and tiny. Vathy, the capital, curls around one of the finest natural harbours in the Mediterranean.",
      "It works best as the second island of an Ionian honeymoon, when you have already had your dose of scenery and want somewhere to stop moving.",
    ],
    bases: [
      {
        name: "Kioni",
        note: "The prettiest harbour in the Ionian and the one I book. Pastel houses, three tavernas, swimming off the rocks.",
      },
      {
        name: "Vathy",
        note: "The capital, wrapped around its bay, with the widest choice of places to eat and the ferry connections.",
      },
      {
        name: "Frikes",
        note: "A fishing harbour ten minutes from Kioni, with the boats to Lefkada.",
      },
    ],
    stays: [
      {
        label: "Stone house above a harbour",
        note: "Ithaca's accommodation is villas and small guesthouses rather than hotels. Take one with a terrace over the water.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive by sea",
        body: "The boat in from Kefalonia or Lefkada, then settle in Kioni and swim off the jetty before dinner.",
      },
      {
        day: "Day 2",
        title: "A boat and a cove",
        body: "Hire a small boat for the day and work down the east coast to Gidaki, which has no road to it at all.",
      },
      {
        day: "Day 3",
        title: "Myth and mountain",
        body: "The Cave of the Nymphs and Anogi's Byzantine church in the hills, then a long lunch at Stavros looking down on three bays.",
      },
    ],
    pairings: [
      {
        slug: "kefalonia",
        note: "Thirty minutes by boat. The standard and correct pairing.",
      },
      {
        slug: "lefkada",
        note: "An hour north, and easier to reach by air.",
      },
    ],
    gettingThere:
      "No airport. Ferries from Kefalonia take 30 minutes from Fiskardo or an hour from Sami; Lefkada connects via Vasiliki. Most couples fly into Kefalonia or Preveza. A car is useful but the island is small.",
    crowds:
      "Yachts fill the harbours in August evenings and leave in the morning. Otherwise this is one of the quietest islands in Greece.",
    wind: "Sheltered. The harbours stay calm in almost all conditions.",
    faqs: [
      {
        question: "Is Ithaca worth visiting on a honeymoon?",
        answer:
          "Yes, if you want quiet above all else. Ithaca has no airport, no resorts and three small harbours, which makes it the most restful stop in the Ionian for three or four nights.",
      },
      {
        question: "How do you get to Ithaca?",
        answer:
          "By ferry only, most easily from Fiskardo or Sami on Kefalonia in thirty to sixty minutes. Fly into Kefalonia or Preveza and continue by boat.",
      },
      {
        question: "Is Ithaca really Odysseus's island?",
        answer:
          "It is the traditional identification and the one the island lives by, with sites named for the Cave of the Nymphs and Odysseus's palace. Archaeologists still argue; nobody in Kioni does.",
      },
    ],
    heroImage: IMAGES.corfuOldTown,
    gallery: [IMAGES.kefaloniaMyrtos, IMAGES.corfu, IMAGES.aegeanSailing, IMAGES.stock5],
    plannerType: "the-visionary",
    itinerary: "ionian-quietly",
    updatedAt: "2026-07-20",
  },
  {
    slug: "paxos",
    name: "Paxos & Antipaxos",
    region: "ionian-islands",
    eyebrow: "Ionian Islands",
    answer:
      "Paxos is a small olive-covered island with three harbours, sea caves along its west cliffs and, on neighbouring Antipaxos, the clearest water in Greece. Stay 4–5 nights from June to September. Reached by boat from Corfu.",
    bestFor: "Boat days, Venetian harbours, extraordinary water, seclusion",
    notFor: "Couples who want sandy beaches or a lot of choice",
    nights: "4–5 nights",
    bestMonths: "June and September",
    plannerNote:
      "Antipaxos in the early morning, before the day boats come over from Corfu, is the single clearest water I know in Greece. Be there by nine.",
    lastWalked: "June 2026",
    intro: [
      "Paxos is ten kilometres long, covered in ancient olive trees, and has no airport, no large hotels and no room for either. It has instead three harbours — Gaios, Lakka and Loggos — each a Venetian miniature, and a west coast of white cliffs pierced by sea caves.",
      "Almost everything here happens on the water. You hire a small boat, you round the island, you swim into the caves at Ipapanti, you cross to Antipaxos and anchor over sand so pale the water turns a colour that does not photograph accurately.",
      "It has a devoted following, largely British and Italian, who come back to the same house every year. Book early; there simply is not much of it.",
    ],
    bases: [
      {
        name: "Lakka",
        note: "A near-circular bay at the north end, shallow and turquoise, with a handful of restaurants around it. My first choice.",
      },
      {
        name: "Loggos",
        note: "The smallest harbour, barely more than a quay and four tavernas. Utterly charming.",
      },
      {
        name: "Gaios",
        note: "The capital and the ferry port, sheltered behind an islet with a monastery on it. The most convenient base.",
      },
    ],
    stays: [
      {
        label: "Olive-grove villa",
        note: "Stone houses among the trees with a pool, ten minutes from a harbour. The standard Paxos honeymoon.",
      },
      {
        label: "Harbourside apartment",
        note: "Small and simple, but you walk out into the evening rather than driving to it.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and slow down",
        body: "The boat from Corfu, settle in Lakka, swim in the bay and eat on the quay.",
      },
      {
        day: "Day 2",
        title: "Antipaxos",
        body: "Early across to Voutoumi and Vrika before the day boats. Swim, lunch above the beach, and be back before the afternoon crowd.",
      },
      {
        day: "Day 3",
        title: "The west cliffs",
        body: "Around the island by boat to the sea caves and the Tripitos arch, with the cliffs rising two hundred metres above you.",
      },
      {
        day: "Day 4",
        title: "Olives and the interior",
        body: "Walk the old paths between the villages through groves planted under Venetian rule, then a final dinner at Loggos.",
      },
    ],
    pairings: [
      {
        slug: "corfu",
        note: "An hour by boat, and the standard way in and out.",
      },
      {
        slug: "lefkada",
        note: "Further, but combines the best water in Greece with the best beaches.",
      },
    ],
    gettingThere:
      "No airport. Fly to Corfu, then a fast boat to Gaios in about an hour, or the slower car ferry in ninety minutes. There is also a seasonal hydrofoil from Igoumenitsa. You barely need a car.",
    crowds:
      "Day boats from Corfu arrive at Antipaxos and Gaios around midday and leave by four. Mornings and evenings belong to residents and guests.",
    wind: "Sheltered by Corfu and the mainland. One of the calmest places in Greece for small boats.",
    faqs: [
      {
        question: "Is Paxos good for a honeymoon?",
        answer:
          "Excellent, for couples who want seclusion and boat days. Paxos has three beautiful small harbours, dramatic sea caves and, on Antipaxos, arguably the clearest water in the Mediterranean.",
      },
      {
        question: "How do you get to Paxos?",
        answer:
          "By boat from Corfu, about an hour on the fast ferry to Gaios. There is no airport, so you fly to Corfu first.",
      },
      {
        question: "Does Paxos have sandy beaches?",
        answer:
          "Barely. Paxos itself is pebble and rock. The white sand is on Antipaxos, twenty minutes away by boat, at Vrika and Voutoumi.",
      },
      {
        question: "Do you need a car on Paxos?",
        answer:
          "Not really. The island is ten kilometres long, taxis are easy, and most couples hire a boat instead — which is the far better way to see it.",
      },
    ],
    heroImage: IMAGES.stock1,
    gallery: [IMAGES.corfu, IMAGES.aegeanSailing, IMAGES.corfuOldTown, IMAGES.stock4],
    plannerType: "the-visionary",
    itinerary: "ionian-quietly",
    updatedAt: "2026-07-20",
  },
];
