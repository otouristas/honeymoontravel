import type { FaqItem } from "./types";

export type FaqGroup = {
  /** Anchor target used by the FAQ hub's jump navigation. */
  id: string;
  title: string;
  items: FaqItem[];
};

function toId(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const GROUPS: Omit<FaqGroup, "id">[] = [
  {
    title: "Planning with us",
    items: [
      {
        question: "What does a honeymoon planner actually do?",
        answer:
          "We design the itinerary, choose and book the hotels, arrange transfers, boats, guides and restaurants, and remain reachable throughout the trip. In practice most of the value is in the decisions we stop you making.",
      },
      {
        question: "How far in advance should we start planning?",
        answer:
          "Nine to twelve months for a July or August honeymoon, six for June or September. The very best rooms on small islands — cliff-edge suites on Folegandros, the good houses on Paxos — go a year out.",
      },
      {
        question: "How do you charge?",
        answer:
          "A planning fee based on the complexity of the trip rather than a percentage of your spend, so our recommendations are never influenced by what a hotel costs.",
      },
      {
        question: "Can we be involved in the planning?",
        answer:
          "As much or as little as you like. Some couples want to see every option; others want two choices and a recommendation. We ask which you are at the start rather than assuming.",
      },
      {
        question: "What happens if something goes wrong while we are away?",
        answer:
          "You call us. Ferries are cancelled, weather changes and hotels occasionally disappoint. Having someone in Greece who can rearrange the day is most of what you are paying for.",
      },
    ],
  },
  {
    title: "When to go",
    items: [
      {
        question: "When is the best time for a Greece honeymoon?",
        answer:
          "June and September. Both give you sea above 23°C, everything open and manageable crowds. September has the warmer water; June has the longer days.",
      },
      {
        question: "Is August a bad time to visit Greece?",
        answer:
          "It is the hottest, busiest and most expensive month, with the meltemi wind at its strongest in the Aegean. If August is unavoidable, the Ionian islands are far calmer and more reliable for boat days.",
      },
      {
        question: "Can we honeymoon in Greece in October or November?",
        answer:
          "Yes, in Crete, the Dodecanese and on the mainland. Most Cycladic hotels close from mid-October, but Athens, Nafplio, Chania and Rhodes stay open and are lovely in the cool.",
      },
      {
        question: "When is the sea warmest in Greece?",
        answer:
          "Late August to mid-September, when the Aegean reaches around 26°C. Sea temperature lags air temperature by about six weeks, which is why September swims better than June.",
      },
    ],
  },
  {
    title: "Where to go",
    items: [
      {
        question: "How many Greek islands should we visit?",
        answer:
          "Two for ten nights, three for fourteen. Every island change costs the better part of a day, so more islands means less honeymoon.",
      },
      {
        question: "Which Greek island is best for a honeymoon?",
        answer:
          "There is no single answer, which is why we ask questions first. Santorini for views, Milos for swimming, Paros for balance, Crete for food, Hydra for calm, Folegandros for quiet.",
      },
      {
        question: "Do we have to go to Santorini?",
        answer:
          "No. Santorini is spectacular and it is also a cliff with no walkable beaches. Plenty of the best honeymoons we plan do not include it at all.",
      },
      {
        question: "Is Santorini or Mykonos better?",
        answer:
          "Santorini for the view and a quieter, more romantic few nights. Mykonos for beaches and nightlife. They are two hours apart by ferry, so many couples do both.",
      },
      {
        question: "Which Greek island has the best food?",
        answer:
          "Crete for range and quality of ingredients, Sifnos for tradition, Tinos for the most interesting new cooking, and Athens for the country's most ambitious restaurants.",
      },
    ],
  },
  {
    title: "Getting around",
    items: [
      {
        question: "Should we take ferries or fly between islands?",
        answer:
          "Ferry for journeys under about three hours, where you avoid two airport processes. Fly for Crete, Rhodes and the North Aegean, where the boat takes eight hours or more.",
      },
      {
        question: "Are Greek ferries reliable?",
        answer:
          "Generally yes, but weather-dependent. Strong summer winds can delay or cancel fast catamarans at short notice, which is why we never schedule an island departure on the day of a flight home.",
      },
      {
        question: "Do we need to hire a car?",
        answer:
          "On Naxos, Milos, Crete, Rhodes, Corfu, Kefalonia and Lesvos, yes. On Hydra, Paxos, Folegandros, Symi and Santorini's caldera villages, no — and on Hydra, cars are banned entirely.",
      },
      {
        question: "How long should we allow between a ferry and a flight home?",
        answer:
          "A night. Never fly home on the same day you leave an island. One night in Athens costs far less than a missed international flight.",
      },
    ],
  },
  {
    title: "Money and practicalities",
    items: [
      {
        question: "How much does a luxury Greek honeymoon cost?",
        answer:
          "For ten to fourteen nights at the luxury end, most couples spend between £6,000 and £15,000 excluding international flights. Travelling in September rather than August typically saves 25–40 percent.",
      },
      {
        question: "Is tipping expected in Greece?",
        answer:
          "Not at American levels. Rounding up, or five to ten percent for excellent service, is normal. Service is often already included on the bill.",
      },
      {
        question: "What should we pack?",
        answer:
          "Soft-sided luggage, because island hotels have steps and no lifts. Shoes with grip for marble streets and archaeological sites. A wind layer for ferry decks, and one smart outfit each.",
      },
      {
        question: "Do we need travel insurance?",
        answer:
          "Yes. A European health card covers state healthcare but not repatriation or private clinics, which is what you would actually use on a small island.",
      },
    ],
  },
];

export const FAQ_GROUPS: FaqGroup[] = GROUPS.map((group) => ({
  id: toId(group.title),
  ...group,
}));

export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
