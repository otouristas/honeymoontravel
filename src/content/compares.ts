import { IMAGES } from "./images";
import type { ComparePair } from "./types";

export const COMPARES: ComparePair[] = [
  {
    slug: "santorini-vs-mykonos",
    title: "Santorini or Mykonos for a honeymoon?",
    answer:
      "Santorini for the view, romance and a quieter three or four nights. Mykonos for swimming, beach clubs and going out. Santorini has no walkable beaches; Mykonos has no comparable view. Many couples do both.",
    intro: [
      "This is the most common decision in Greek honeymoon planning and it is usually framed wrongly, as though the two islands are alternatives of the same kind.",
      "They are not. Santorini is a cliff with a view. Mykonos is a beach island with a nightlife industry. Choosing between them is really choosing what your honeymoon is for.",
    ],
    left: {
      islandSlug: "santorini",
      name: "Santorini",
      verdict: "The view, the wine, the sense of occasion",
      points: [
        "The caldera is genuinely one of the great views in the world",
        "The best hotel terraces in Greece, most with private plunge pools",
        "Assyrtiko wine from vines trained in baskets against the wind",
        "No walkable beaches — swimming means a drive or a pool",
        "Cruise crowds in Fira and Oia between roughly 10am and 6pm",
      ],
      image: IMAGES.santoriniCaldera,
    },
    right: {
      islandSlug: "mykonos",
      name: "Mykonos",
      verdict: "The beaches, the design, the night out",
      points: [
        "Excellent beaches on every coast, with a calm side and a loud side",
        "The best hotel architecture in Greece",
        "A genuine restaurant and nightlife scene that runs late",
        "Delos, one of the great archaeological sites, thirty minutes away",
        "The most expensive island in Greece in July and August",
      ],
      image: IMAGES.stock2,
    },
    table: [
      { label: "Best for", left: "Views and romance", right: "Beaches and nightlife" },
      { label: "Beaches", left: "Black sand, 20 minutes by car", right: "Excellent, all around the island" },
      { label: "Nightlife", left: "Dinner and a view", right: "Until sunrise if you want it" },
      { label: "Cost", left: "High", right: "Highest in Greece" },
      { label: "Nights", left: "3–4", right: "3–4" },
      { label: "Crowds", left: "Cruise ships by day", right: "Constant July–August" },
      { label: "Quiet option", left: "Imerovigli or a vineyard estate", right: "North coast or Agios Ioannis" },
    ],
    chooseLeftIf: [
      "You want the caldera photograph and are honest that it is why you are going",
      "Dinner with a view matters more to you than a night out",
      "Three or four nights is enough, and you will pair it with a beach island",
    ],
    chooseRightIf: [
      "You want to swim from the beach every day",
      "One of you wants at least one very late night",
      "You care about hotel design more than hotel views",
    ],
    faqs: [
      {
        question: "Is Santorini or Mykonos better for a honeymoon?",
        answer:
          "Santorini for views and romance, Mykonos for beaches and nightlife. Santorini suits couples who want three or four quiet, spectacular nights; Mykonos suits couples who want to swim and go out.",
      },
      {
        question: "Can you visit both Santorini and Mykonos?",
        answer:
          "Yes. They are about two hours apart by fast ferry, and four nights on one plus three on the other is one of the most popular honeymoon shapes in Greece.",
      },
      {
        question: "Which is more expensive, Santorini or Mykonos?",
        answer:
          "Mykonos, particularly in July and August, where beach club day beds and headline restaurants price like the French Riviera. Santorini's premium is concentrated in caldera-view rooms.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "santorini-vs-milos",
    title: "Santorini or Milos for a honeymoon?",
    answer:
      "Santorini for the view and the hotels; Milos for the best swimming in the Cyclades. They are two hours apart and solve each other's weakness, which is why we usually recommend four nights on each rather than choosing.",
    intro: [
      "Both islands are volcanic, and that is where the resemblance stops. Santorini's eruption left a cliff. Milos's left a coastline of caves, arches and white rock at sea level.",
      "If you have ten nights, this is not a choice. It is an itinerary.",
    ],
    left: {
      islandSlug: "santorini",
      name: "Santorini",
      verdict: "The view, and the hotels that exploit it",
      points: [
        "The caldera, which nothing on Milos comes close to",
        "World-class cave suites and cliff-edge pools",
        "Direct European flights all summer",
        "Nowhere to swim from the villages",
        "The busiest island in Greece by day",
      ],
      image: IMAGES.santoriniIslandView,
    },
    right: {
      islandSlug: "milos",
      name: "Milos",
      verdict: "Over seventy beaches and the best boat day in Greece",
      points: [
        "Kleftiko's sea caves, reachable only by boat",
        "Sarakiniko's white lunar rock",
        "A large sheltered bay, so boat days run in most winds",
        "Quieter evenings, with dinner concentrated in Pollonia",
        "Smaller aircraft and fewer direct flights",
      ],
      image: IMAGES.aegeanSailing,
    },
    table: [
      { label: "Best for", left: "The view", right: "The water" },
      { label: "Swimming", left: "Poor from the villages", right: "The best in the Cyclades" },
      { label: "Hotels", left: "Exceptional", right: "Good and improving" },
      { label: "Evenings", left: "Lively", right: "Quiet" },
      { label: "Boat day", left: "Caldera and hot springs", right: "Kleftiko, and unmissable" },
      { label: "Getting there", left: "Direct flights, frequent ferries", right: "Small aircraft or ferry" },
      { label: "Nights", left: "3–4", right: "4–5" },
    ],
    chooseLeftIf: [
      "The caldera view is non-negotiable",
      "You want the highest hotel standard in Greece",
      "You have fewer than six nights and can only do one island",
    ],
    chooseRightIf: [
      "Swimming is the point of your honeymoon",
      "You would rather be on a boat than at a viewpoint",
      "Quiet evenings suit you better than a busy village",
    ],
    faqs: [
      {
        question: "Is Milos better than Santorini?",
        answer:
          "For swimming and boat days, comfortably. For views and hotels, no. They are two hours apart by ferry and most couples with ten nights should do both rather than choose.",
      },
      {
        question: "How long is the ferry from Santorini to Milos?",
        answer:
          "About two hours on a fast ferry, with daily departures through the summer. Allow a buffer, because Cycladic ferries can run late in a strong meltemi.",
      },
      {
        question: "Is Milos cheaper than Santorini?",
        answer:
          "Yes, noticeably, particularly for accommodation. Villas and boutique hotels on Milos cost considerably less than caldera-view rooms of an equivalent standard.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "milos-vs-folegandros",
    title: "Milos or Folegandros for a quiet honeymoon?",
    answer:
      "Milos for swimming, boat days and variety; Folegandros for stillness and one extraordinary clifftop village. Milos gives you something to do every day. Folegandros deliberately does not.",
    intro: [
      "Both are the quiet answer to Santorini, but they are quiet in different ways.",
      "Milos is quiet in the evening and busy in the day. Folegandros is quiet all the time, and that is the entire proposition.",
    ],
    left: {
      islandSlug: "milos",
      name: "Milos",
      verdict: "Quiet evenings, extraordinary days",
      points: [
        "Over seventy beaches and coves",
        "Kleftiko by boat, which is the best day in the Cyclades",
        "A small airport with flights from Athens",
        "Good restaurants concentrated in Pollonia",
        "You need a car",
      ],
      image: IMAGES.stock1,
    },
    right: {
      islandSlug: "folegandros",
      name: "Folegandros",
      verdict: "One perfect village and nothing to achieve",
      points: [
        "Chora, arguably the most beautiful village in the Cyclades",
        "No airport, so no day-trippers at all",
        "The cliff walk to Panagia church at sunset",
        "Small pebble beaches, most easier by boat",
        "Very little to do, deliberately",
      ],
      image: IMAGES.santoriniView,
    },
    table: [
      { label: "Best for", left: "Swimming and exploring", right: "Stopping entirely" },
      { label: "Beaches", left: "Seventy-plus, varied", right: "A handful, small and pebbly" },
      { label: "Getting there", left: "Flight or ferry", right: "Ferry only" },
      { label: "Car needed", left: "Yes", right: "No" },
      { label: "Nights", left: "4–5", right: "3–4" },
      { label: "Evenings", left: "Pollonia's restaurants", right: "Three squares under plane trees" },
    ],
    chooseLeftIf: [
      "You want a full day on a boat and beaches to choose between",
      "You would find three nights with no plan frustrating",
      "You want the option of a flight rather than a ferry",
    ],
    chooseRightIf: [
      "You genuinely want to do nothing",
      "A single beautiful village is enough",
      "You are pairing it with a busier island such as Santorini",
    ],
    faqs: [
      {
        question: "Which is quieter, Milos or Folegandros?",
        answer:
          "Folegandros, considerably. It has no airport, which removes day visitors entirely, and one small clifftop village. Milos is quiet in the evenings but busy at its road-accessible beaches.",
      },
      {
        question: "Can you visit both Milos and Folegandros?",
        answer:
          "Yes. They are around ninety minutes apart by ferry, and four nights on Milos plus three on Folegandros makes an unusually restful week.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "paros-vs-naxos",
    title: "Paros or Naxos for a honeymoon?",
    answer:
      "Paros for the prettier town, better restaurants and more polish. Naxos for longer sandy beaches, mountain villages and better value. Paros edges it for a short honeymoon; Naxos rewards a longer stay.",
    intro: [
      "These two islands are thirty minutes apart and constantly confused with each other. They are more different than that distance suggests.",
      "Paros has become sophisticated. Naxos has stayed agricultural. Both are excellent; the question is which you would rather be in for five nights.",
    ],
    left: {
      islandSlug: "paros",
      name: "Paros",
      verdict: "The harbour town and the dining",
      points: [
        "Naoussa's Venetian harbour, the most romantic evening in the Cyclades",
        "The strongest restaurant scene of the two",
        "Antiparos twenty minutes away by ferry",
        "Sandy beaches, though shorter than Naxos's",
        "Busier and pricier, especially in August",
      ],
      image: IMAGES.stock4,
    },
    right: {
      islandSlug: "naxos",
      name: "Naxos",
      verdict: "The beaches, the mountains, the value",
      points: [
        "Twelve kilometres of continuous west-coast sand",
        "Mountain villages, Byzantine chapels and Kitron distilleries",
        "The Portara at sunset and the Venetian kastro lanes",
        "The best value in the Cyclades for food and accommodation",
        "Fewer high-end hotels",
      ],
      image: IMAGES.stock5,
    },
    table: [
      { label: "Best town", left: "Naoussa", right: "Chora and the kastro" },
      { label: "Beaches", left: "Good", right: "Excellent and very long" },
      { label: "Restaurants", left: "Better", right: "Cheaper and more traditional" },
      { label: "Interior", left: "Marble villages", right: "Mountains and Byzantine chapels" },
      { label: "Value", left: "Higher prices", right: "Best in the Cyclades" },
      { label: "Nights", left: "4–5", right: "4–5" },
    ],
    chooseLeftIf: [
      "Where you eat dinner matters as much as where you swim",
      "You want a harbour town you can walk out into every evening",
      "You are combining it with Mykonos or Santorini",
    ],
    chooseRightIf: [
      "You want a very long beach and no plans",
      "Mountain villages and local food appeal more than a scene",
      "You want your budget to go further",
    ],
    faqs: [
      {
        question: "Is Paros or Naxos better for couples?",
        answer:
          "Paros, narrowly, because Naoussa's harbour makes for better evenings and the restaurants are stronger. Naxos wins on beaches, mountains and value.",
      },
      {
        question: "Can you do Paros and Naxos together?",
        answer:
          "Easily. They are thirty minutes apart by ferry with frequent daily departures, and four nights on each makes an excellent ten-night honeymoon.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "corfu-vs-kefalonia",
    title: "Corfu or Kefalonia for a honeymoon?",
    answer:
      "Corfu for a Venetian old town, the best Ionian restaurants and easier flights. Kefalonia for dramatic scenery, Myrtos beach and more space. Corfu is the more elegant week; Kefalonia the more spectacular one.",
    intro: [
      "The two big Ionian islands do genuinely different things, and the choice usually comes down to whether you want a town in your honeymoon or not.",
    ],
    left: {
      islandSlug: "corfu",
      name: "Corfu",
      verdict: "Architecture, dining and olive-shaded coves",
      points: [
        "A UNESCO-listed Venetian old town you can stay in",
        "The northeast coast: coves, jetty tavernas and self-drive boats",
        "The best restaurants in the Ionian",
        "Excellent direct flights from across Europe",
        "Heavy package tourism in the south, which you must avoid",
      ],
      image: IMAGES.corfu,
    },
    right: {
      islandSlug: "kefalonia",
      name: "Kefalonia",
      verdict: "Cliffs, caves and the best beach in the Ionian",
      points: [
        "Myrtos, seen from six hundred feet above",
        "Assos and Fiskardo, two beautiful Venetian harbours",
        "Melissani's underground lake",
        "Serious Robola wine grown at altitude on limestone",
        "Large, with slow mountain drives between regions",
      ],
      image: IMAGES.kefaloniaMyrtos,
    },
    table: [
      { label: "Old town", left: "Outstanding", right: "None, but lovely harbours" },
      { label: "Scenery", left: "Green and gentle", right: "Dramatic cliffs" },
      { label: "Restaurants", left: "Best in the Ionian", right: "Good in the north" },
      { label: "Beaches", left: "Pebble coves", right: "Myrtos and long southern sands" },
      { label: "Driving", left: "Winding but short", right: "Long and mountainous" },
      { label: "Nights", left: "4–5", right: "5" },
    ],
    chooseLeftIf: [
      "You want a beautiful town as well as a coastline",
      "Dinner matters and you want choice",
      "You would like a self-drive boat day among olive coves",
    ],
    chooseRightIf: [
      "You want the most dramatic scenery in the Ionian",
      "You are happy to drive and want space",
      "Wine and caves appeal more than architecture",
    ],
    faqs: [
      {
        question: "Corfu or Kefalonia for a honeymoon?",
        answer:
          "Corfu for the Venetian old town, restaurants and easier flights; Kefalonia for Myrtos beach, dramatic cliffs and more space. Both work best in June or September.",
      },
      {
        question: "Can you combine Corfu and Kefalonia?",
        answer:
          "Yes, though the connection is awkward — usually via Lefkada by road and boat, or a short flight. With twelve nights it is worth it; with fewer, pick one.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "hydra-vs-spetses",
    title: "Hydra or Spetses for a honeymoon?",
    answer:
      "Hydra for the more beautiful harbour and the complete absence of vehicles. Spetses for pine-backed beaches, more restaurants and slightly more comfort. Both are under two hours from Athens by hydrofoil.",
    intro: [
      "The two Saronic islands couples actually consider, and the closest thing Greece has to a genuine luxury honeymoon that requires no domestic flight.",
    ],
    left: {
      islandSlug: "hydra",
      name: "Hydra",
      verdict: "No cars at all, and the best harbour in Greece",
      points: [
        "Cars, motorbikes and bicycles are entirely banned",
        "A stone amphitheatre of captains' mansions around the port",
        "Swimming from rock platforms and ladders at sunset",
        "An artists' island since the 1950s",
        "No sandy beaches whatsoever",
      ],
      image: IMAGES.aegeanWindow,
    },
    right: {
      islandSlug: "spetses",
      name: "Spetses",
      verdict: "Pine, carriages and a wider choice of dinner",
      points: [
        "The Old Harbour with its working wooden boatyards",
        "Horse-drawn carriages and bicycles rather than cars",
        "Pine-backed sandy beaches on the west coast",
        "More restaurants and a livelier Athenian crowd",
        "Not fully car-free like Hydra",
      ],
      image: IMAGES.stock4,
    },
    table: [
      { label: "Vehicles", left: "Completely banned", right: "Restricted in town" },
      { label: "Beaches", left: "Rocks and ladders", right: "Pine-backed sand" },
      { label: "Harbour", left: "The finest in Greece", right: "Beautiful, especially Palio Limani" },
      { label: "Restaurants", left: "Good, limited", right: "More choice" },
      { label: "From Piraeus", left: "90 minutes", right: "2 hours" },
      { label: "Nights", left: "3", right: "3" },
    ],
    chooseLeftIf: [
      "The idea of an island with no vehicles appeals",
      "You do not need sand to be happy",
      "You want the single most beautiful harbour in Greece",
    ],
    chooseRightIf: [
      "You want an actual beach",
      "You would like more choice at dinner",
      "You are combining with Nafplio, which is closer to Spetses",
    ],
    faqs: [
      {
        question: "Hydra or Spetses?",
        answer:
          "Hydra for the harbour and the total absence of cars; Spetses for sandy pine-backed beaches and more restaurants. Three nights on each is the ideal answer if you have the time.",
      },
      {
        question: "Are Hydra and Spetses easy to reach from Athens?",
        answer:
          "Yes. Hydrofoils from Piraeus take about ninety minutes to Hydra and two hours to Spetses, with no flight or long ferry required.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "crete-vs-cyclades",
    title: "Crete or the Cyclades for a honeymoon?",
    answer:
      "Crete for one island, no ferries, the best food in Greece and a season from April to November. The Cyclades for the classic whitewashed island-hopping honeymoon with the caldera at the end.",
    intro: [
      "This is a decision about shape as much as destination. Crete is one place you settle into; the Cyclades are a sequence you move through.",
    ],
    left: {
      islandSlug: "chania",
      name: "Crete",
      verdict: "One island, two bases, no repacking",
      points: [
        "The best food in Greece by a clear margin",
        "A Venetian old town in Chania and grand resorts at Elounda",
        "The longest season in the country, April to November",
        "Balos, Elafonissi and the Samaria Gorge",
        "Long drives; you cannot see it all",
      ],
      image: IMAGES.creteWine,
    },
    right: {
      islandSlug: "santorini",
      name: "The Cyclades",
      verdict: "Whitewash, ferries and the caldera",
      points: [
        "The classic Greek image: white villages, blue domes, deep blue sea",
        "Frequent short ferries make two or three islands easy",
        "Santorini's caldera and Mykonos's beaches",
        "The best boutique hotels in Greece",
        "A shorter season and a windier summer",
      ],
      image: IMAGES.santoriniCaldera,
    },
    table: [
      { label: "Shape", left: "One or two bases", right: "Two or three islands" },
      { label: "Food", left: "Best in Greece", right: "Very good on Sifnos and Naxos" },
      { label: "Season", left: "April to November", right: "Late April to mid-October" },
      { label: "Ferries", left: "None needed", right: "Central to the trip" },
      { label: "Wind", left: "Moderate", right: "Strong meltemi in high summer" },
      { label: "Nights", left: "10–14", right: "10–14" },
    ],
    chooseLeftIf: [
      "You hate packing and want to settle in",
      "You are marrying in October or November",
      "Food is central to how you travel",
    ],
    chooseRightIf: [
      "You want the whitewashed Greek island image",
      "The caldera is on your list",
      "You like the rhythm of moving every four or five days",
    ],
    faqs: [
      {
        question: "Is Crete better than the Cyclades for a honeymoon?",
        answer:
          "Crete is better for couples who want one base, exceptional food and a long season. The Cyclades are better for the classic whitewashed island-hopping honeymoon and the Santorini caldera.",
      },
      {
        question: "Can you combine Crete and Santorini?",
        answer:
          "Yes. A fast ferry from Heraklion to Santorini takes about two hours, which makes a week in Crete followed by four caldera nights a very workable fortnight.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "athens-vs-nafplio",
    title: "Athens or Nafplio to start a honeymoon?",
    answer:
      "Athens for the Acropolis, the best restaurants in Greece and easy onward ferries. Nafplio for a quieter, more romantic neoclassical town under two hours away by road. Ideally, two nights in each.",
    intro: [
      "Most couples default to Athens because the plane lands there. Nafplio is the alternative Greeks themselves choose for a romantic few days, and it is worth knowing about.",
    ],
    left: {
      islandSlug: "athens",
      name: "Athens",
      verdict: "The Acropolis, the museums, the food scene",
      points: [
        "The Acropolis and one of the world's best museums",
        "The most ambitious restaurants in Greece",
        "Rooftop dinners with the Parthenon floodlit",
        "Piraeus and every island ferry on the doorstep",
        "Hot, loud and busy in high summer",
      ],
      image: IMAGES.athensLuxury,
    },
    right: {
      islandSlug: "nafplio",
      name: "Nafplio",
      verdict: "Marble streets, three castles and no crowds midweek",
      points: [
        "The most elegant small town in Greece",
        "Palamidi fortress, and Bourtzi castle on its islet",
        "Mycenae, Epidaurus and the Nemea vineyards within an hour",
        "Under two hours from Athens by motorway",
        "Very busy with Athenians at weekends",
      ],
      image: IMAGES.athensWineTwo,
    },
    table: [
      { label: "Best for", left: "Antiquity and dining", right: "Romance and quiet" },
      { label: "Onward travel", left: "Ferries and flights", right: "Road only" },
      { label: "Crowds", left: "Constant", right: "Weekends only" },
      { label: "Nights", left: "2", right: "3" },
      { label: "Nearby sites", left: "Sounion, Delphi", right: "Mycenae, Epidaurus, Nemea" },
    ],
    chooseLeftIf: [
      "You have never seen the Acropolis",
      "You are heading straight to the islands afterwards",
      "You want the best restaurant meal of the trip",
    ],
    chooseRightIf: [
      "You would rather walk a beautiful town than a big city",
      "You are travelling in shoulder season",
      "You want Mycenae and Epidaurus without a day trip from Athens",
    ],
    faqs: [
      {
        question: "Should we start our honeymoon in Athens or Nafplio?",
        answer:
          "Athens if you want the Acropolis and are heading to the islands next. Nafplio if you want somewhere quieter and more romantic, and are travelling by road. Two nights in each is better than either alone.",
      },
      {
        question: "How far is Nafplio from Athens airport?",
        answer:
          "About two hours by car on the motorway. There is no ferry or flight involved, which makes it easy to add to the start or end of a trip.",
      },
    ],
    updatedAt: "2026-07-22",
  },
];

export const comparesBySlug = Object.fromEntries(COMPARES.map((c) => [c.slug, c]));
