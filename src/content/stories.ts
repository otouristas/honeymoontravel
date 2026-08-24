import type { CoupleStory } from "./types";
import { SITE } from "./site";

const IMG = SITE.assets.base;

export const STORIES: CoupleStory[] = [
  {
    slug: "hannah-and-mike",
    couple: "Hannah & Mike Shaw",
    from: "Manchester",
    year: "2023",
    islands: ["santorini", "paros"],
    headline: "Two weeks, no research, no regrets",
    quote:
      "myHoneymoon made the process of planning our dream honeymoon in Greece completely stress free. All we had to do was turn up to the airport and get ready to relax, which was such a relief after a year of intense wedding planning.",
    body: [
      "Hannah and Mike arrived with a clear brief and no time: an exclusive boutique hotel, romantic dinners by the beach, and a little sightseeing across two weeks. Between work and a wedding, neither of them had an hour left for research.",
      "We built the fortnight as a two-island arc. Santorini first, because they wanted the caldera and they wanted it early while the excitement was still high — four nights in Imerovigli rather than Oia, so the sunset was a five-minute walk away rather than a scrum. Then a slow ferry down to Paros, where the beach days actually happen.",
      "The detail that mattered most was the pacing. We alternated: one full day out, one day with nothing in it at all. That rhythm is the single thing couples thank us for more than any hotel upgrade.",
      "They booked a table for two on the sand at Santa Maria on their last night without knowing we had arranged it in March.",
    ],
    heroImage: `${IMG}/my-honeymoon-santorini-island-view.jpg`,
    updatedAt: "2026-05-14",
  },
  {
    slug: "anahi-and-david",
    couple: "Anahi & David Fernandez-Collins",
    from: "New York City",
    year: "2024",
    islands: ["athens", "naxos", "santorini"],
    headline: "When you want completely different holidays",
    quote:
      "My husband and I like different things and we were struggling to compromise. With myHoneymoon's help, we came up with a good balance of activities we'd both enjoy. Angeliki made sure there were personal touches throughout, like a private dinner at a wonderful local restaurant.",
    body: [
      "Anahi wanted a beach and a book. David wanted vineyards, museums, and a reason to walk. Left alone, this becomes a negotiation that nobody wins and both remember.",
      "The answer was not to compromise on every day. It was to give each of them whole days. Athens opened the trip with two nights of antiquities and rooftop dinners, which satisfied David's appetite for context. Naxos followed with five nights of long, unstructured beach time for Anahi, plus a half-day of mountain villages and Kitron tasting that David did on his own while she stayed at Plaka.",
      "We finished in Santorini for three nights, which is the right length for that island when it is the dessert and not the meal.",
      "The private dinner they mention was in a Naxian courtyard, cooked by a family who do not take bookings. That is not a package inclusion. That is twenty years of knowing who to call.",
    ],
    heroImage: `${IMG}/my-Honeymoon-Athens-Wine-copyright-KKouzouni.jpg`,
    updatedAt: "2026-06-02",
  },
  {
    slug: "carolina-and-freddie",
    couple: "Carolina & Freddie Baumann",
    from: "London",
    year: "2024",
    islands: ["ikaria", "chios"],
    headline: "The honeymoon after the disastrous holiday",
    quote:
      "Our last holiday together before our wedding was a disaster — the itinerary was way too hectic. Angeliki found us a gorgeous base where we could unwind, go hiking and completely switch off. It was just what we needed to get our married life off to a wonderful start.",
    body: [
      "Carolina and Freddie came to us slightly frightened of their own planning. Their previous trip had eleven moves in fourteen days, and they came home more tired than they left.",
      "So we did the opposite. Two islands, ten nights, and a deliberate refusal to fill the calendar. Ikaria first, because it is the one Greek island where slowness is the local culture rather than a marketing line — shops open when they open, dinner starts at ten, nobody is in a hurry.",
      "From there, a crossing to Chios and the mastic villages. Pyrgi's geometric façades and Mesta's covered lanes give you something to look at without anything to achieve.",
      "We booked exactly three fixed things in ten days: two dinners and a boat. Everything else was left open on purpose. They tell us it is the only holiday they have ever finished feeling rested.",
    ],
    heroImage: `${IMG}/my-Honeymoon-Ikaria-Copyright-DRozaki.jpg`,
    updatedAt: "2026-06-20",
  },
];

export const storiesBySlug = Object.fromEntries(STORIES.map((s) => [s.slug, s]));

/** Short pull-quotes for the proof wall, derived from the full stories. */
export const TESTIMONIALS = STORIES.map((s) => ({
  quote: s.quote,
  author: `${s.couple}, ${s.from}.`,
  slug: s.slug,
  year: s.year,
  headline: s.headline,
}));
