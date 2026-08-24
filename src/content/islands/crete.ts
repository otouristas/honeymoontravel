import { IMAGES } from "../images";
import type { Island } from "../types";

export const CRETE_ISLANDS: Island[] = [
  {
    slug: "chania",
    name: "Chania",
    region: "crete",
    eyebrow: "Crete",
    answer:
      "Chania has the most beautiful Venetian harbour in Greece, the best food in Crete, and Balos and Elafonissi within reach. Stay 5 nights in the old town between April and November. It is the strongest single base on the island.",
    bestFor: "Venetian old town, exceptional food, pink-sand beaches, long season",
    notFor: "Couples who want a resort they never leave",
    nights: "5 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "Stay inside the old town walls, not on the beach strip at Agioi Apostoloi. The whole pleasure of Chania is walking home through the Venetian lanes after dinner.",
    lastWalked: "October 2025",
    intro: [
      "Chania's old town is a layered thing: Venetian arsenals along the water, an Egyptian lighthouse at the harbour mouth, an Ottoman mosque on the quay, and Byzantine walls underneath everything. It survived heavy bombing in 1941 and what remains is the most atmospheric town in Greece.",
      "The food is the other reason. Cretan cooking is genuinely distinct — wild greens, stamnagathi, snails, sheep's cheeses, unrefined olive oil poured with abandon — and Chania is where it is cooked most seriously, in the covered market and in the courtyard tavernas of Splantzia.",
      "Beyond the town, the west of Crete has the island's most extraordinary landscapes: the pink sand at Elafonissi, the lagoon at Balos, and the Samaria Gorge cutting sixteen kilometres down through the White Mountains to the Libyan Sea.",
    ],
    bases: [
      {
        name: "The Venetian old town",
        note: "Inside the walls, ideally in Splantzia or near the harbour. Everything is on foot and the evenings are the point.",
      },
      {
        name: "Akrotiri peninsula",
        note: "Ten minutes out, with quiet coves, the Venetian monasteries and easier parking.",
      },
      {
        name: "The Apokoronas",
        note: "Inland villages between Chania and Rethymno, with the best villas in olive country and the sea twenty minutes away.",
      },
      {
        name: "The southwest coast",
        note: "Loutro and Sfakia, reachable only by boat, for a couple of nights of genuine remoteness.",
      },
    ],
    stays: [
      {
        label: "Venetian mansion hotel",
        note: "Restored merchants' houses inside the old town — stone, vaulted, often with a roof terrace over the harbour.",
      },
      {
        label: "Olive-grove villa in the Apokoronas",
        note: "For couples who want a pool, a car and a base for exploring the west.",
      },
      {
        label: "Waterfront room in Loutro",
        note: "A village with no road to it, reachable only by ferry. Two nights here resets everything.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "The harbour at dusk",
        body: "Arrive, walk out along the mole to the lighthouse, and eat in a Splantzia courtyard away from the waterfront menus.",
      },
      {
        day: "Day 2",
        title: "Balos",
        body: "The boat from Kissamos to the Balos lagoon and Gramvousa's Venetian fortress. Go by sea rather than down the track.",
      },
      {
        day: "Day 3",
        title: "Food and the market",
        body: "The covered market and a Cretan cooking morning, then an afternoon at Seitan Limania or on the Akrotiri coves.",
      },
      {
        day: "Day 4",
        title: "Elafonissi or the gorge",
        body: "Either the pink sand at Elafonissi in the far southwest, or the sixteen-kilometre walk down the Samaria Gorge and the boat out from Agia Roumeli.",
      },
      {
        day: "Day 5",
        title: "Loutro",
        body: "The ferry along the south coast to a village with no road, for a swim and a lunch that takes three hours.",
      },
    ],
    pairings: [
      {
        slug: "rethymno",
        note: "An hour east, and a gentler version of the same Venetian idea.",
      },
      {
        slug: "elounda",
        note: "Three hours east, for grand hotels after the old town.",
      },
      {
        slug: "santorini",
        note: "A two-hour ferry north, for a caldera finish to a Cretan fortnight.",
      },
    ],
    gettingThere:
      "Direct summer flights into Chania from across Europe, and 50-minute Athens connections year-round. Overnight ferry from Piraeus arrives at Souda at dawn. A car is essential for the west.",
    crowds:
      "The harbourfront is busy from June to September; the back lanes are not. Balos and Elafonissi are overwhelmed at midday in August — go early.",
    wind: "The north coast catches summer wind. The south coast beaches are usually calmer.",
    faqs: [
      {
        question: "Is Chania good for a honeymoon?",
        answer:
          "It is the best base in Crete. The Venetian old town is the most atmospheric in Greece, the food is exceptional, and Balos, Elafonissi and the Samaria Gorge are all within reach.",
      },
      {
        question: "Where should we stay in Chania?",
        answer:
          "Inside the old town walls, ideally in the Splantzia quarter or near the Venetian harbour. Staying out on the beach strip means driving in every evening and missing the point.",
      },
      {
        question: "How do you get to Balos lagoon?",
        answer:
          "By boat from Kissamos, which takes about an hour and stops at Gramvousa fortress. There is a rough unpaved track and a steep walk down as an alternative, but the boat is far better.",
      },
      {
        question: "Is the Samaria Gorge worth doing on a honeymoon?",
        answer:
          "If you both enjoy walking. It is sixteen kilometres downhill over loose rock, takes five to seven hours, and ends with a ferry. Start at dawn and it is one of the great walks in Europe.",
      },
    ],
    heroImage: IMAGES.creteWine,
    gallery: [IMAGES.gastronomy, IMAGES.stock3, IMAGES.amenities, IMAGES.aegeanWindow],
    plannerType: "the-processor",
    itinerary: "crete-slow-luxury",
    updatedAt: "2026-07-20",
  },
  {
    slug: "rethymno",
    name: "Rethymno",
    region: "crete",
    eyebrow: "Crete",
    answer:
      "Rethymno has a Venetian and Ottoman old town under a huge fortress, a long sandy beach, and the Amari valley and Preveli palm gorge inland. Stay 4–5 nights between April and November. Quieter than Chania.",
    bestFor: "Old town without the crowds, wine, mountain villages, a long beach",
    notFor: "Couples who want the very best restaurants in Crete",
    nights: "4–5 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "The Amari valley behind Rethymno is where Cretan food actually comes from. A day up there among the villages does more for a honeymoon than another beach.",
    lastWalked: "October 2025",
    intro: [
      "Rethymno is the middle child of Crete's three cities and the most underrated. Its old town has the same Venetian bones as Chania with a heavier Ottoman overlay — wooden balconies overhanging the lanes, minarets, a fountain in every small square — and considerably fewer people photographing it.",
      "Above it sits the Fortezza, one of the largest Venetian fortresses in the Mediterranean, with the whole town and the sea laid out below.",
      "The real argument for basing here is what lies behind. The Amari valley under Mount Psiloritis is Crete at its most agricultural and beautiful, the Preveli gorge on the south coast has a river running through a palm forest into the Libyan Sea, and the wine villages around Vrysses have improved enormously.",
    ],
    bases: [
      {
        name: "The old town",
        note: "Inside the Venetian quarter beneath the Fortezza, with the beach at the end of the lanes.",
      },
      {
        name: "The Amari valley",
        note: "Inland villages beneath Psiloritis, cool in summer, with the best food and the least tourism in Crete.",
      },
      {
        name: "Plakias & the south coast",
        note: "Over the mountains for Preveli, Triopetra and the Libyan Sea.",
      },
      {
        name: "Bali & Panormo",
        note: "Small coastal villages east of the city with sheltered coves.",
      },
    ],
    stays: [
      {
        label: "Venetian townhouse hotel",
        note: "Small restored properties in the old town, several with courtyards and roof terraces facing the Fortezza.",
      },
      {
        label: "Stone villa in the Amari",
        note: "Among olive terraces with Psiloritis above you and almost nobody around.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Old town and Fortezza",
        body: "Arrive, walk the Venetian lanes and up to the fortress for sunset, then dinner in a courtyard.",
      },
      {
        day: "Day 2",
        title: "The Amari valley",
        body: "Villages, Byzantine churches and a long lunch of things cooked by whoever grew them.",
      },
      {
        day: "Day 3",
        title: "Preveli",
        body: "Over the mountains to the south coast, the walk down to the palm gorge, and swimming where the river meets the Libyan Sea.",
      },
      {
        day: "Day 4",
        title: "Wine and Arkadi",
        body: "The monastery at Arkadi, central to Cretan history, then tasting at the vineyards on the way back.",
      },
    ],
    pairings: [
      {
        slug: "chania",
        note: "An hour west, for the better old town and the better restaurants.",
      },
      {
        slug: "elounda",
        note: "Two hours east, for the grand hotel half of a Cretan fortnight.",
      },
    ],
    gettingThere:
      "Fly into Chania or Heraklion, both roughly an hour away by road. Overnight ferries from Piraeus serve both cities. A car is essential.",
    crowds:
      "The beach strip east of town is busy in high summer. The old town, and everywhere inland, is calm.",
    wind: "The north coast can be breezy in July and August; the south coast is usually calmer and warmer.",
    faqs: [
      {
        question: "Is Rethymno good for a honeymoon?",
        answer:
          "Yes, particularly for couples who want a Venetian old town without Chania's crowds. It is also the best base for the Amari valley, Preveli and Crete's improving wine country.",
      },
      {
        question: "Chania or Rethymno?",
        answer:
          "Chania for the more beautiful harbour and better restaurants. Rethymno for a quieter old town, a long sandy beach at the end of the lanes and easier access to the mountains and south coast.",
      },
      {
        question: "What is Preveli?",
        answer:
          "A gorge on Crete's south coast where a freshwater river runs through a natural palm forest into the Libyan Sea. You walk down from the monastery above or arrive by boat from Plakias.",
      },
    ],
    heroImage: IMAGES.gastronomy,
    gallery: [IMAGES.creteWine, IMAGES.amenities, IMAGES.stock5, IMAGES.stock1],
    plannerType: "the-administrator",
    itinerary: "crete-slow-luxury",
    updatedAt: "2026-07-20",
  },
  {
    slug: "elounda",
    name: "Elounda",
    region: "crete",
    eyebrow: "Crete",
    answer:
      "Elounda is where Greece's grandest resorts are: private-pool villas on a sheltered gulf in eastern Crete, facing the fortress island of Spinalonga. Stay 5–7 nights between May and October if the hotel is the holiday.",
    bestFor: "Five-star resorts, private pools, spas, calm swimming",
    notFor: "Couples who want a village and a sense of discovery",
    nights: "5–7 nights",
    bestMonths: "May to June and September to October",
    plannerNote:
      "Elounda is the one place in Greece where booking the hotel first and the itinerary second is the right order. The properties here are the destination.",
    lastWalked: "May 2026",
    intro: [
      "Elounda has, for fifty years, been where Greece keeps its grandest hotels. The Mirabello gulf is almost enclosed, so the water is flat and warm, the slope behind it is steep enough to give every room a view, and the resorts have had decades to refine what they do.",
      "This is the part of Greece where a private pool, a butler and a beach club are ordinary rather than exceptional. Several properties have their own coves, their own jetties, and villas that would be considered houses anywhere else.",
      "Opposite lies Spinalonga, a Venetian fortress island that served as a leper colony until 1957 — a strange and moving place, and the subject of Victoria Hislop's novel, which brought a great many British visitors here.",
    ],
    bases: [
      {
        name: "Elounda",
        note: "The resort strip along the gulf. Choose your hotel carefully; they differ enormously in character.",
      },
      {
        name: "Plaka",
        note: "The small village at the northern end, opposite Spinalonga, with better tavernas and a quieter feel.",
      },
      {
        name: "Agios Nikolaos",
        note: "The town ten minutes south, with the bottomless lake, shops and a wider choice of restaurants.",
      },
    ],
    stays: [
      {
        label: "Private-pool villa on the gulf",
        note: "The Elounda signature. Multiple bedrooms you will not use, a heated pool and direct sea access.",
      },
      {
        label: "Suite with a sea-view terrace",
        note: "The more sensible choice for two people, still with a plunge pool at most properties.",
      },
    ],
    arc: [
      {
        day: "Day 1",
        title: "Arrive and stop",
        body: "Settle into the hotel and go no further than the water. This is a resort holiday and the first day should feel like one.",
      },
      {
        day: "Day 2",
        title: "Spinalonga",
        body: "A boat from Plaka to the fortress island, best in the early morning, followed by lunch in the village.",
      },
      {
        day: "Day 3",
        title: "The Lasithi plateau",
        body: "Up into the mountains to the plateau of windmills and the Diktaean cave where Zeus was said to be born.",
      },
      {
        day: "Day 4",
        title: "Vai and the east",
        body: "The palm forest beach at Vai, Europe's largest, and the sheltered bay at Kouremenos.",
      },
      {
        day: "Day 5",
        title: "Nothing at all",
        body: "The spa, the beach club, and a table on the water at sunset.",
      },
    ],
    pairings: [
      {
        slug: "chania",
        note: "Three hours west. The classic Cretan fortnight is Chania for the town and Elounda for the hotel.",
      },
      {
        slug: "santorini",
        note: "A ferry from Heraklion, for couples who want the caldera after the resort.",
      },
    ],
    gettingThere:
      "Fly into Heraklion, then a 70-minute drive east. Sitia airport is closer but has few flights. Most resorts arrange transfers; a car is optional if you intend to stay put.",
    crowds:
      "The resorts control their own density, so it rarely feels busy. Spinalonga is crowded from mid-morning.",
    wind: "The Mirabello gulf is sheltered, which is exactly why the hotels are here.",
    faqs: [
      {
        question: "Is Elounda good for a honeymoon?",
        answer:
          "Yes, if you want a five-star resort holiday. Elounda has the highest concentration of luxury hotels in Greece, on a sheltered gulf with calm swimming and a long season.",
      },
      {
        question: "What is Spinalonga?",
        answer:
          "A Venetian fortress island in the Mirabello gulf that operated as a leper colony until 1957. It is reached by boat from Plaka or Elounda and is one of Crete's most affecting sites.",
      },
      {
        question: "Elounda or Chania for a honeymoon?",
        answer:
          "Elounda if the hotel is the holiday and you want a private pool and a spa. Chania if you want to walk out into a beautiful town and eat somewhere different every night. Many couples do both.",
      },
    ],
    heroImage: IMAGES.amenities,
    gallery: [IMAGES.creteWine, IMAGES.stock4, IMAGES.gastronomy, IMAGES.stock2],
    plannerType: "the-visionary",
    itinerary: "crete-slow-luxury",
    updatedAt: "2026-07-20",
  },
];
