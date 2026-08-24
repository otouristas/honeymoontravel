import { IMAGES } from "../images";
import type { Island } from "../types";

export const DODECANESE_ISLANDS: Island[] = [
  {
    slug: "rhodes",
    name: "Rhodes",
    region: "dodecanese",
    eyebrow: "Dodecanese",
    answer:
      "Rhodes has an inhabited medieval walled city you can sleep inside, plus Lindos, the Valley of the Butterflies and a long season. Stay 4–5 nights in the Old Town or the far south, well away from the package coast.",
    bestFor: "Sleeping inside a medieval city, Lindos, an early and late season",
    notFor: "Couples who want a small, quiet island",
    nights: "4–5 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "Almost nobody stays inside the walls, and they should. The Old Town after ten at night, when the day visitors have gone, is entirely yours.",
    lastWalked: "May 2026",
    intro: [
      "Rhodes Old Town is the largest inhabited medieval city in Europe: four kilometres of walls, a moat you can walk the whole way round, the Palace of the Grand Master, and a cobbled Street of the Knights that has barely changed since the fourteenth century. People live in it. You can sleep in it.",
      "The island beyond it is large and uneven. The northeast coast is package tourism at scale and should be avoided. But Lindos, with its whitewashed village under an acropolis on a cliff, is one of the great sights of Greece, and the south beyond Gennadi empties out almost completely.",
      "Being the furthest southeast of the Greek islands, Rhodes warms early and stays warm late, which makes it one of the best answers for a May or October honeymoon.",
    ],
    bases: [
      {
        name: "The Old Town",
        note: "Inside the walls, in one of the restored houses in the Jewish quarter or near the Street of the Knights. My first choice.",
      },
      {
        name: "Lindos",
        note: "The whitewashed village beneath the acropolis. Beautiful and very busy by day; magical in the evening once the coaches leave.",
      },
      {
        name: "The south (Gennadi to Prasonisi)",
        note: "Long empty beaches and almost no development, an hour and a half from the airport.",
      },
      {
        name: "The west coast",
        note: "Windier and quieter, with the ancient site at Kamiros and the wineries around Embona.",
      },
    ],
    stays: [
      {
        label: "Restored house inside the walls",
        note: "Ottoman and medieval houses converted into small hotels with courtyards. Atmospheric and surprisingly quiet at night.",
      },
      {
        label: "Captain's house in Lindos",
        note: "Traditional Lindian houses with pebble-mosaic courtyards and roof terraces facing the acropolis.",
      },
      {
        label: "Southern beach hotel",
        note: "Small, modern and near-empty stretches of sand in the far south.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Inside the walls",
        body: "Arrive, walk the Street of the Knights and the moat, and eat in a courtyard in the old Jewish quarter.",
      },
      {
        day: "Day 2",
        title: "Lindos",
        body: "The acropolis early before the heat and the crowds, then a swim at St Paul's Bay and a late lunch on a roof terrace.",
      },
      {
        day: "Day 3",
        title: "The interior",
        body: "The Valley of the Butterflies, the medieval village of Koskinou, and wine tasting at Embona beneath Mount Attavyros.",
      },
      {
        day: "Day 4",
        title: "The south",
        body: "Down the empty east coast to Gennadi and Prasonisi, where the Aegean and the Mediterranean meet on a sandbar.",
      },
    ],
    pairings: [
      {
        slug: "symi",
        note: "Fifty minutes by fast boat, and a total change of scale.",
      },
      {
        slug: "patmos",
        note: "Further north, and the two together make a thoughtful Dodecanese fortnight.",
      },
    ],
    gettingThere:
      "Direct summer flights from across Europe and year-round Athens connections. Ferries link Rhodes with Symi, Kos, Patmos and Piraeus. A car is needed for anywhere beyond the Old Town.",
    crowds:
      "The Old Town and Lindos are heavy with day visitors between ten and five. Both are transformed in the evening.",
    wind: "The west coast is exposed — Prasonisi is a windsurfing centre. The east coast is sheltered.",
    faqs: [
      {
        question: "Is Rhodes good for a honeymoon?",
        answer:
          "Yes, if you choose carefully. The medieval Old Town and Lindos are extraordinary, and the south is empty. The northeast package coast is not a honeymoon destination and is easy to avoid.",
      },
      {
        question: "Can you stay inside Rhodes Old Town?",
        answer:
          "Yes. It is the largest inhabited medieval city in Europe, and there are restored houses and small hotels within the walls. Staying inside is by far the best way to experience it.",
      },
      {
        question: "Is Lindos worth visiting?",
        answer:
          "Yes. The acropolis on its cliff above a whitewashed village is one of the finest sites in Greece. Go at opening time or late afternoon; the middle of the day is uncomfortably crowded.",
      },
      {
        question: "When is the best time to visit Rhodes?",
        answer:
          "May to June and September to October. Being the furthest southeast of the Greek islands, Rhodes is reliably warm by mid-May and stays swimmable well into October.",
      },
    ],
    heroImage: IMAGES.stock2,
    gallery: [IMAGES.aegeanWindow, IMAGES.stock4, IMAGES.santoriniDomes, IMAGES.stock1],
    plannerType: "the-administrator",
    updatedAt: "2026-07-20",
  },
  {
    slug: "symi",
    name: "Symi",
    region: "dodecanese",
    eyebrow: "Dodecanese",
    answer:
      "Symi's harbour is an amphitheatre of ochre and cream neoclassical mansions rising from the water — arguably the most beautiful arrival in Greece. Stay 4 nights between May and October, reached by boat from Rhodes.",
    bestFor: "The most beautiful harbour in Greece, boat days, shrimp, quiet",
    notFor: "Couples who want sandy beaches or a lot of choice",
    nights: "4 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "Arrive on the afternoon boat, not the morning one. Coming into Gialos harbour with the low sun on those façades is the single best entrance in the Greek islands.",
    lastWalked: "May 2026",
    intro: [
      "Symi got rich on sponges and shipbuilding in the nineteenth century and built accordingly: hundreds of neoclassical mansions in ochre, cream, blue and dusty pink, stacked up the sides of a steep natural harbour. Building restrictions have protected all of it.",
      "Above the port, reached by five hundred stone steps known as the Kali Strata, sits Chorio, the old upper village, with a castle and views down over the whole bowl.",
      "The island is dry and rugged with almost no sandy beaches — swimming is off rocks and pebbles in coves reached by boat. Which is fine, because a boat is how you should spend your days here anyway. The small shrimp caught locally, garides symis, are worth planning a lunch around.",
    ],
    bases: [
      {
        name: "Gialos (the harbour)",
        note: "In among the mansions on the waterfront. Everything happens here and the evening light is the reason you came.",
      },
      {
        name: "Chorio",
        note: "Up the Kali Strata steps in the old village. Quieter, cooler, and the view down is remarkable. Not for weak knees.",
      },
      {
        name: "Pedi",
        note: "The bay over the ridge, with a small beach and a couple of tavernas.",
      },
    ],
    stays: [
      {
        label: "Neoclassical mansion on the harbour",
        note: "Restored merchants' houses with high ceilings and balconies over the water.",
      },
      {
        label: "House in Chorio",
        note: "Up the steps, with the whole harbour laid out below and complete quiet at night.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "The arrival",
        body: "The afternoon boat from Rhodes into Gialos, then a slow evening on the harbour with the mansions going gold.",
      },
      {
        day: "Day 2",
        title: "Kali Strata and the castle",
        body: "The five hundred steps up to Chorio early, the castle and the museum, and lunch coming back down.",
      },
      {
        day: "Day 3",
        title: "Panormitis and the coves",
        body: "A boat around the island to the monastery of Panormitis and the swimming coves at Agios Georgios Dysalonas beneath its three-hundred-metre cliff.",
      },
      {
        day: "Day 4",
        title: "Shrimp and Nimborios",
        body: "The coast walk to Nimborios, a swim, and a last lunch of Symi shrimp on the water.",
      },
    ],
    pairings: [
      {
        slug: "rhodes",
        note: "Fifty minutes by fast boat, and the way in and out.",
      },
      {
        slug: "patmos",
        note: "Further north, pairing the two most refined islands in the Dodecanese.",
      },
    ],
    gettingThere:
      "No airport. Fly to Rhodes, then a 50–90 minute boat to Gialos depending on the vessel. There are also ferries from Kos and Piraeus. You do not need a car.",
    crowds:
      "Day boats from Rhodes arrive around ten and leave by four. Before and after, the harbour is almost empty.",
    wind: "Sheltered inside the harbour. The exposed north coast can be rough, which affects boat trips.",
    faqs: [
      {
        question: "Is Symi good for a honeymoon?",
        answer:
          "Yes, for couples who want beauty and quiet over beaches. Symi's harbour is the most striking in Greece and the island is small, walkable and almost entirely undeveloped.",
      },
      {
        question: "How do you get to Symi?",
        answer:
          "By boat from Rhodes, fifty to ninety minutes depending on the vessel. There is no airport, so you fly to Rhodes first.",
      },
      {
        question: "Does Symi have beaches?",
        answer:
          "Only small pebble and rock coves, most of them best reached by boat. Nimborios and Agia Marina are walkable; Agios Georgios Dysalonas, beneath a huge cliff, is the most dramatic.",
      },
      {
        question: "What is the Kali Strata?",
        answer:
          "The stone staircase of around five hundred steps linking the harbour at Gialos with the old upper village of Chorio. Climb it early in the day or at dusk, not at noon.",
      },
    ],
    heroImage: IMAGES.stock4,
    gallery: [IMAGES.stock2, IMAGES.aegeanSailing, IMAGES.aegeanWindow, IMAGES.stock1],
    plannerType: "the-visionary",
    updatedAt: "2026-07-20",
  },
  {
    slug: "patmos",
    name: "Patmos",
    region: "dodecanese",
    eyebrow: "Dodecanese",
    answer:
      "Patmos is where the Book of Revelation was written, with a fortified monastery over a UNESCO-listed white village and a discreet, well-travelled crowd. Stay 4–5 nights from June to September. There is no airport.",
    bestFor: "Quiet sophistication, a UNESCO hilltop village, beaches, privacy",
    notFor: "Couples who want nightlife or easy access",
    nights: "4–5 nights",
    bestMonths: "June and September",
    plannerNote:
      "Patmos has strict building rules and no airport, which is exactly why the people who could go anywhere keep coming back here instead.",
    lastWalked: "June 2026",
    intro: [
      "Saint John was exiled to Patmos and, according to tradition, dictated the Book of Revelation in a cave on the hillside here. The monastery built above it in 1088 is a fortress, and the white village of Chora that grew in its shadow is a UNESCO World Heritage Site.",
      "What that history produced is an island with unusually strict building controls and no airport, which has filtered its visitors into a particular kind: quiet, well-off, often Italian or French, frequently returning to the same house for twenty years.",
      "The beaches are good and varied — Psili Ammos in the south is reached by boat or a half-hour walk, Livadi Geranou in the north has a tamarisk-shaded taverna — and Skala, the port, has restaurants that are considerably better than a small island deserves.",
    ],
    bases: [
      {
        name: "Chora",
        note: "The white hilltop village around the monastery, with the best houses and total quiet. My first choice.",
      },
      {
        name: "Skala",
        note: "The port below, with the restaurants, the boats and the shops. Convenient rather than beautiful.",
      },
      {
        name: "Grikos",
        note: "A sheltered bay in the south with a curve of sand and the island's more comfortable hotels.",
      },
    ],
    stays: [
      {
        label: "Captain's house in Chora",
        note: "Vaulted stone houses in the lanes below the monastery, several with gardens and sea views on both sides.",
      },
      {
        label: "Bay-front hotel at Grikos",
        note: "Small, well-run and directly on the sand, ten minutes from Skala.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Up to Chora",
        body: "Arrive by ferry, climb to the village, and eat in a courtyard beneath the monastery walls.",
      },
      {
        day: "Day 2",
        title: "The Cave and the Monastery",
        body: "The Cave of the Apocalypse and Saint John's monastery early in the morning, with its treasury and library, then an afternoon at Grikos.",
      },
      {
        day: "Day 3",
        title: "Psili Ammos",
        body: "The boat from Skala to the southern sand, or the half-hour walk over the headland, with a taverna lunch and nothing else planned.",
      },
      {
        day: "Day 4",
        title: "The north and Lipsi",
        body: "Livadi Geranou and Lampi's coloured pebble beach, or the day boat to Lipsi for an even quieter island.",
      },
    ],
    pairings: [
      {
        slug: "symi",
        note: "South through the Dodecanese, matching one refined island with another.",
      },
      {
        slug: "samos",
        note: "A short ferry north, and the easiest air connection in and out.",
      },
    ],
    gettingThere:
      "No airport. Fly to Samos, Kos or Leros and take a ferry — Samos to Patmos is around two hours on a fast boat. There are also overnight ferries from Piraeus. A car or scooter is useful.",
    crowds:
      "Busy in August with Italian and Greek regulars. June and September are calm. Cruise ships call at Skala but rarely reach the beaches.",
    wind: "The meltemi reaches here in high summer. The southern bays stay sheltered.",
    faqs: [
      {
        question: "Is Patmos good for a honeymoon?",
        answer:
          "Yes, for couples who want quiet sophistication. Patmos has a UNESCO-listed hilltop village, strict building controls, good beaches and a discreet crowd, though getting there requires a ferry.",
      },
      {
        question: "How do you get to Patmos?",
        answer:
          "By ferry only. Fly to Samos, Kos or Leros and continue by boat — Samos to Patmos takes about two hours on a fast ferry. Overnight boats also run from Piraeus.",
      },
      {
        question: "Why is Patmos famous?",
        answer:
          "Saint John is said to have received and dictated the Book of Revelation in a cave here while in exile. The Cave of the Apocalypse and the eleventh-century monastery above it are UNESCO World Heritage Sites.",
      },
    ],
    heroImage: IMAGES.santoriniDomes,
    gallery: [IMAGES.stock2, IMAGES.aegeanWindow, IMAGES.stock4, IMAGES.santoriniChurch],
    plannerType: "the-visionary",
    updatedAt: "2026-07-20",
  },
  {
    slug: "kos",
    name: "Kos",
    region: "dodecanese",
    eyebrow: "Dodecanese",
    answer:
      "Kos has the ancient Asklepieion, a Crusader castle, Roman ruins in the town centre, and long sandy beaches — but also heavy package tourism. Stay 3–4 nights in the town or the far southwest, from May to October.",
    bestFor: "Ancient sites, flat cycling, long beaches, ferry connections",
    notFor: "Couples seeking exclusivity or a quiet island",
    nights: "3–4 nights",
    bestMonths: "May to June and September",
    plannerNote:
      "Kos is flat, which almost no Greek island is. Hiring bicycles here is genuinely the best way to spend a day, and the town has proper cycle lanes.",
    lastWalked: "May 2026",
    intro: [
      "Kos was the home of Hippocrates and the site of the Asklepieion, the great healing sanctuary of the ancient world, which sits on terraces above the town looking across a narrow strait at Turkey.",
      "The town itself has Roman houses, an agora and a Crusader castle, all interleaved with modern streets — an earthquake in 1933 flattened much of the centre, and the Italian administration excavated what it revealed.",
      "It is also, frankly, a package island in parts. Kardamena and Tigaki are aimed at a mass market. But the town has charm, the southwest around Kefalos is much quieter, and the ferry links to Patmos, Nisyros and Symi make it a useful hub.",
    ],
    bases: [
      {
        name: "Kos Town",
        note: "The most interesting base, with the ruins, the castle, the harbour and cycle lanes to the beaches.",
      },
      {
        name: "Kefalos & the southwest",
        note: "Far quieter, with long sandy beaches and the volcano of Nisyros visible offshore.",
      },
      {
        name: "Zia & the mountain villages",
        note: "Up on Mount Dikeos, cool in summer, with the best sunsets on the island.",
      },
    ],
    stays: [
      {
        label: "Small hotel in Kos Town",
        note: "Near the harbour and the ruins, with bicycles included at most properties.",
      },
      {
        label: "Beach hotel at Kefalos",
        note: "Quieter, with long sand and views to Nisyros.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Town and castle",
        body: "Arrive, walk the Roman agora and the Crusader castle, and eat in the back streets away from the harbour.",
      },
      {
        day: "Day 2",
        title: "The Asklepieion and Zia",
        body: "The healing sanctuary in the morning, then up to Zia in the mountains for lunch and the sunset.",
      },
      {
        day: "Day 3",
        title: "Nisyros",
        body: "The day boat to the neighbouring volcano island, where you can walk down into a still-steaming crater.",
      },
      {
        day: "Day 4",
        title: "The southwest",
        body: "Kefalos, Agios Stefanos with its basilica ruins on the sand, and a last swim before the ferry.",
      },
    ],
    pairings: [
      {
        slug: "patmos",
        note: "North by ferry, and a very large step up in quiet.",
      },
      {
        slug: "symi",
        note: "Southeast, for the most beautiful harbour in the Dodecanese.",
      },
    ],
    gettingThere:
      "Direct summer flights from across Europe and Athens connections year-round. Ferries link Kos with Rhodes, Patmos, Symi, Nisyros and Piraeus. Bicycles work in and around the town; a car is needed for the southwest.",
    crowds:
      "Very busy in the resort areas in July and August. The town and the southwest are more manageable.",
    wind: "Breezy on the north coast, which is why Tigaki and Marmari attract windsurfers.",
    faqs: [
      {
        question: "Is Kos good for a honeymoon?",
        answer:
          "It is a reasonable two or three nights for the ancient sites and ferry links rather than a full honeymoon base. Much of the island is given over to package tourism, though the town and southwest are pleasant.",
      },
      {
        question: "What is the Asklepieion of Kos?",
        answer:
          "The great healing sanctuary of the ancient world, built on terraces above Kos Town and associated with Hippocrates, who was born on the island. It remains one of the most complete examples anywhere.",
      },
      {
        question: "Can you visit the Nisyros volcano from Kos?",
        answer:
          "Yes. Day boats run from Kardamena and Kos Town to Nisyros, where you can walk down into the Stefanos crater, which still vents sulphurous steam.",
      },
    ],
    heroImage: IMAGES.stock1,
    gallery: [IMAGES.stock3, IMAGES.aegeanSailing, IMAGES.stock5, IMAGES.aegeanWindow],
    plannerType: "the-action-taker",
    updatedAt: "2026-07-20",
  },
];
