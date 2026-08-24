import { IMAGES } from "./images";
import type { Region, RegionSlug } from "./types";

export const REGIONS: Region[] = [
  {
    slug: "cyclades",
    title: "Cyclades",
    navLabel: "Cyclades",
    tagline: "Iconic islands, endless blue",
    answer:
      "The Cyclades are the classic Greek honeymoon: whitewashed villages, deep blue sea, and easy ferry links. Santorini and Mykonos are the famous pair; Milos, Folegandros and Sifnos give the same light with a fraction of the crowd.",
    intro: [
      "This is the archipelago people picture when they say Greece. Twenty-four inhabited islands scattered across the central Aegean, bleached white and improbably blue, close enough together that two or three of them make a coherent honeymoon rather than a scramble.",
      "The mistake couples make here is assuming the Cyclades are interchangeable. They are not. Santorini is a cliff, not a beach island. Mykonos is a party town with beautiful beaches attached. Milos is a geology lesson with the best swimming in Greece. Naxos is where you go to eat well and do nothing. Pick wrongly and you spend a fortnight in the wrong film.",
      "Almost every Cycladic honeymoon we design uses two islands, occasionally three. One with drama, one with sand.",
    ],
    heroImage: IMAGES.santoriniCaldera,
    gallery: [
      IMAGES.santoriniChurch,
      IMAGES.santoriniIslandView,
      IMAGES.santoriniDomes,
      IMAGES.tinosPyrgos,
    ],
    gettingThere:
      "Fly into Athens, then a 35–50 minute domestic hop to Santorini, Mykonos, Paros or Naxos, or a 2–5 hour ferry from Piraeus and Rafina. Santorini and Mykonos also take direct seasonal flights from most of Europe between May and October.",
    bestMonths: "Late April to mid-June, and September to mid-October.",
    faqs: [
      {
        question: "How many Cycladic islands should we visit on a honeymoon?",
        answer:
          "Two for a ten-night trip, three only if you have fourteen nights or more. Every island change costs you the better part of a day once you count packing, ferry buffer and check-in.",
      },
      {
        question: "Which Cycladic island is best for a quiet honeymoon?",
        answer:
          "Folegandros and Sifnos. Both have a single beautiful main village, genuinely good food, and no airport, which filters out day-trippers and short-break crowds entirely.",
      },
      {
        question: "Is it easy to island hop in the Cyclades?",
        answer:
          "Between the western and central Cyclades, yes — Santorini, Ios, Naxos, Paros and Mykonos are on the same fast ferry spine. Sideways routes, such as Milos to Mykonos, often require backtracking through Piraeus.",
      },
      {
        question: "When is the meltemi wind at its worst in the Cyclades?",
        answer:
          "Mid-July through late August. It can cancel small ferries, close exposed beaches for a day or two, and occasionally disrupt Mykonos and Santorini flights. It also keeps the temperature bearable.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "ionian-islands",
    title: "Ionian Islands",
    navLabel: "Ionian Islands",
    tagline: "Emerald seas and Venetian charm",
    answer:
      "The Ionian Islands sit off Greece's west coast: green, Venetian-influenced and softer than the Cyclades. Choose them for turquoise water, olive and cypress landscapes, elegant old towns and a gentler, less windy climate.",
    intro: [
      "If your image of Greece is arid and white, the Ionian will surprise you. Four centuries of Venetian rule and a great deal more rain left these islands green — olive groves, cypress, bougainvillea over stone — and the architecture reads more Italian than Aegean.",
      "The water is the headline. Ionian sea colour, particularly around Paxos, Antipaxos and the Kefalonian west coast, is the most saturated turquoise in Greece and photographs as though it has been retouched.",
      "It is also the calmer choice in August. The meltemi that torments the Aegean barely reaches here, which makes the Ionian the sensible answer for couples who can only travel at the height of summer and want to spend it on a boat.",
    ],
    heroImage: IMAGES.corfu,
    gallery: [
      IMAGES.corfuAchilleion,
      IMAGES.kefaloniaMyrtos,
      IMAGES.lefkadaPortoKatsiki,
      IMAGES.corfuOldTown,
    ],
    gettingThere:
      "Direct summer flights from the UK and much of Europe into Corfu, Kefalonia, Zakynthos and Preveza for Lefkada. Athens connections exist but are less convenient than for the Cyclades. Paxos is reached by boat from Corfu.",
    bestMonths: "May to early July, and September. June is the sweet spot.",
    faqs: [
      {
        question: "Which Ionian island is best for a honeymoon?",
        answer:
          "Paxos for seclusion and boat days, Kefalonia for dramatic scenery and space, and northeast Corfu for elegance with the best restaurants and easiest flights.",
      },
      {
        question: "Is the Ionian better than the Cyclades in August?",
        answer:
          "Usually, yes. The Ionian escapes the meltemi, so small boats run reliably and swimming is calm. It is hotter and more humid, but far less disrupted.",
      },
      {
        question: "Can we combine the Ionian with Santorini?",
        answer:
          "You can, but it costs a full travel day each way via Athens. Unless you have fourteen nights, we would rather send you deeper into one sea than across both.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "north-aegean-islands",
    title: "North Aegean Islands",
    navLabel: "North Aegean",
    tagline: "Authentic solitude and raw beauty",
    answer:
      "The North Aegean — Chios, Lesvos, Samos, Ikaria, Limnos, Thassos — is where Greeks holiday. Expect medieval villages, working vineyards, empty beaches and almost no honeymoon industry. Choose it for authenticity over polish.",
    intro: [
      "These are big, working islands with real economies: mastic on Chios, ouzo and olive oil on Lesvos, wine on Samos and Limnos. Tourism happens here but it does not define the place, which means dinner is cheaper, service is warmer and nobody is performing.",
      "The trade-off is honest: luxury accommodation is thin. You will find beautiful restored stone houses and excellent small hotels, but not caldera-edge infinity pools with butler service. If a five-star spa is non-negotiable, this is not your region.",
      "For couples who want to feel like they went somewhere rather than to a resort, it is the most rewarding corner of Greece we plan.",
    ],
    heroImage: IMAGES.chios,
    gallery: [
      IMAGES.chiosPyrgi,
      IMAGES.samosBeach,
      IMAGES.ikaria,
      IMAGES.limnosMyrina,
    ],
    gettingThere:
      "Domestic flights from Athens to Chios, Lesvos, Samos, Ikaria and Limnos take under an hour. Overnight ferries from Piraeus run to most of them. Thassos is reached by short ferry from Keramoti near Kavala.",
    bestMonths: "Late May to June, and September to early October.",
    faqs: [
      {
        question: "Are the North Aegean islands good for a luxury honeymoon?",
        answer:
          "They suit couples whose definition of luxury is space, privacy and exceptional food rather than branded resorts. Accommodation tops out at excellent boutique rather than palatial.",
      },
      {
        question: "Which North Aegean island is the most romantic?",
        answer:
          "Chios, for the medieval mastic villages of Pyrgi and Mesta. Nowhere else in Greece looks like it, and evenings in the covered lanes of Mesta are genuinely atmospheric.",
      },
      {
        question: "Can we island hop in the North Aegean?",
        answer:
          "Less freely than in the Cyclades. Chios to Lesvos and Samos to Ikaria are straightforward; other combinations often need an Athens connection. Plan two islands, not four.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "attica",
    title: "Attica & the Saronic",
    navLabel: "Attica & Saronic",
    tagline: "Athens culture meets coastal bliss",
    answer:
      "Attica pairs Athens — antiquities, rooftop dining, a serious food scene — with the Saronic islands an hour or two away by hydrofoil. It is the easiest place in Greece to combine culture and sea without a domestic flight.",
    intro: [
      "Most couples treat Athens as an airport with a monument attached. That is a mistake. Two nights here at the start of a honeymoon does something no island can: it gives the trip a spine, a sense that you came to a country rather than a beach.",
      "The city has also changed. The restaurant scene now stands comparison with any European capital, the Acropolis Museum is one of the best in the world, and a good rooftop with the Parthenon lit above you is a first-night dinner people remember for decades.",
      "Then, an hour or so from the port, the Saronic islands. Hydra, where cars are banned and donkeys still carry the luggage. Spetses, with its Venetian mansions and horse-drawn carriages. Aegina and Poros, quieter still.",
    ],
    heroImage: IMAGES.athensLuxury,
    gallery: [
      IMAGES.athensWine,
      IMAGES.athensGastronomy,
      IMAGES.aegeanWindow,
      IMAGES.plannerPortrait,
    ],
    gettingThere:
      "Athens International is served by direct flights worldwide. Hydra, Spetses, Poros and Aegina are 1–2 hours by hydrofoil from Piraeus. Cape Sounion is a 70-minute drive down the coast road.",
    bestMonths: "April to early June, and September to early November.",
    faqs: [
      {
        question: "How many nights should we spend in Athens on a honeymoon?",
        answer:
          "Two, at the start. That covers the Acropolis and museum properly, one long dinner, and one unhurried morning, without the city eating into your island time.",
      },
      {
        question: "Which Saronic island is best for a honeymoon?",
        answer:
          "Hydra. No cars, no scooters, a perfect stone harbour, and the ability to walk to a swimming platform for sunset. Spetses is the alternative if you want more restaurants.",
      },
      {
        question: "Can we visit the Saronic islands without a domestic flight?",
        answer:
          "Yes. All of them are hydrofoil or ferry trips from Piraeus, so Athens plus a Saronic island is the fastest honeymoon in Greece to assemble from a single arrival.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "crete",
    title: "Crete",
    navLabel: "Crete",
    tagline: "One island, an entire country",
    answer:
      "Crete is large enough to be a whole honeymoon: Venetian harbour towns, mountain villages, the best food in Greece and a long season that runs from April to November. Base in Chania, Rethymno or Elounda rather than touring.",
    intro: [
      "Crete is 260 kilometres end to end, which catches couples out. You cannot see it in a week and you should not try. The honeymoons that work here pick one base and travel outward in half-days.",
      "It earns its place for two reasons. The food is the best in the country — Cretan cooking is genuinely distinct, the raw materials are extraordinary, and the wine has become serious in the last decade. And the season is longer than anywhere else in Greece, which makes it the right answer for an October or early-November wedding.",
      "Elounda is where the grand hotels are. Chania is where the atmosphere is. Rethymno sits between the two, in both senses.",
    ],
    heroImage: IMAGES.creteWine,
    gallery: [
      IMAGES.gastronomy,
      IMAGES.amenities,
      IMAGES.aegeanWindow,
      IMAGES.stock3,
    ],
    gettingThere:
      "Direct summer flights into Chania and Heraklion from across Europe, plus year-round Athens connections in under an hour. Overnight ferries from Piraeus arrive in both cities at dawn.",
    bestMonths: "May to June and September to early November.",
    faqs: [
      {
        question: "Is Crete good for a honeymoon?",
        answer:
          "Very, if you want one base rather than island hopping. Crete offers the strongest combination of luxury hotels, food, beaches and things to do of any single Greek island.",
      },
      {
        question: "Chania or Elounda for a honeymoon?",
        answer:
          "Chania for atmosphere, dining and walkability. Elounda for grand resorts, private pools and a hotel you will barely leave. Many couples split the fortnight between them.",
      },
      {
        question: "Can we honeymoon in Crete in October?",
        answer:
          "Yes. Sea temperatures stay swimmable into late October, hotels stay open later than in the Cyclades, and the crowds and rates both drop sharply after mid-September.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "dodecanese",
    title: "Dodecanese",
    navLabel: "Dodecanese",
    tagline: "Crusader stone and Italian light",
    answer:
      "The Dodecanese — Rhodes, Symi, Patmos, Kos — sit along Turkey's coast and carry layers of Crusader, Ottoman and Italian history. Choose them for medieval towns, neoclassical harbours and a season that starts early.",
    intro: [
      "This is the most architecturally interesting corner of Greece. Rhodes Old Town is an intact walled medieval city you can sleep inside. Symi's harbour is a bowl of ochre and cream neoclassical houses stacked up a cliff. Patmos has a fortified monastery and the quietest sophistication in the Aegean.",
      "The Italian occupation between the wars left proper civic architecture and, more usefully, decent roads. The islands sit far enough south to warm up early, so a May honeymoon here works when the Cyclades are still bracing.",
      "Symi and Patmos in particular attract a discreet, well-travelled crowd who have already done Santorini and want something with fewer photographers in it.",
    ],
    heroImage: IMAGES.aegeanWindow,
    gallery: [IMAGES.stock2, IMAGES.stock4, IMAGES.aegeanSailing, IMAGES.santoriniDomes],
    gettingThere:
      "Direct summer flights into Rhodes and Kos from most of Europe, plus Athens connections. Symi is 50–90 minutes by boat from Rhodes. Patmos has no airport and is reached by ferry from Kos, Samos or Piraeus.",
    bestMonths: "May to June and September to mid-October.",
    faqs: [
      {
        question: "Which Dodecanese island is best for a honeymoon?",
        answer:
          "Symi for the harbour and seclusion, Patmos for quiet sophistication, and Rhodes if you want to sleep inside a medieval walled city with beaches nearby.",
      },
      {
        question: "Is Rhodes too busy for a honeymoon?",
        answer:
          "The package resorts on the east coast are. The Old Town, the west of the island and the far south are not. Where you stay matters more on Rhodes than on any other Greek island.",
      },
      {
        question: "Can we do a Dodecanese honeymoon in May?",
        answer:
          "Yes, and it is one of the best regions for it. Being far south, the Dodecanese are reliably warm by mid-May while the northern Aegean is still unsettled.",
      },
    ],
    updatedAt: "2026-07-18",
  },
  {
    slug: "peloponnese",
    title: "Peloponnese",
    navLabel: "Peloponnese",
    tagline: "Mainland romance, no ferries",
    answer:
      "The Peloponnese offers a Greek honeymoon by car: Nafplio's neoclassical old town, Messinia's olive country and golf resorts, Monemvasia's fortress town, and Mani's stone towers. No ferries, no domestic flights.",
    intro: [
      "Everything here is reachable from Athens by road, which is the whole argument. You land, you collect a car, and by lunchtime you are somewhere beautiful with no baggage allowance and no ferry timetable governing your week.",
      "Nafplio is the most elegant small town in Greece and Greeks know it — it is where Athenians go for a romantic weekend. Monemvasia is a Byzantine fortress town built into a rock, invisible from the mainland until you cross the causeway. Costa Navarino in Messinia is the country's most ambitious luxury resort development.",
      "It is also the best answer for a shoulder-season honeymoon, when islands are closing but the mainland is at its most beautiful.",
    ],
    heroImage: IMAGES.gastronomy,
    gallery: [IMAGES.creteWine, IMAGES.athensWineTwo, IMAGES.stock5, IMAGES.amenities],
    gettingThere:
      "Drive from Athens: Nafplio in 1 hour 45, Monemvasia in 4, Costa Navarino in 3 hours 30 via the Olympia Odos and Moreas motorways. Kalamata airport takes some direct European flights in summer.",
    bestMonths: "April to June and September to early November.",
    faqs: [
      {
        question: "Is the Peloponnese good for a honeymoon?",
        answer:
          "Yes, particularly for couples who want a road trip rather than ferries, or who are travelling in April, October or November when many islands have shut.",
      },
      {
        question: "Do we need a car in the Peloponnese?",
        answer:
          "Yes. Public transport exists but it will dictate your days. A car — or a driver, which we arrange often — is what makes the region work.",
      },
      {
        question: "Can we combine the Peloponnese with an island?",
        answer:
          "Easily. Nafplio pairs naturally with Hydra or Spetses, both a short drive and a short boat from the eastern Peloponnese coast.",
      },
    ],
    updatedAt: "2026-07-18",
  },
];

export const regionsBySlug = Object.fromEntries(
  REGIONS.map((r) => [r.slug, r]),
) as Record<RegionSlug, Region>;

export const REGION_SLUGS = REGIONS.map((r) => r.slug);
