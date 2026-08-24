import { IMAGES } from "./images";
import type { Audience } from "./types";

export const AUDIENCES: Audience[] = [
  {
    slug: "us-couples",
    title: "Greek honeymoons for American couples",
    tagline: "Long-haul planning, jet lag, and making the days count",
    answer:
      "For US couples, the two things that matter most are jet lag and internal flights. Land in Athens, spend two nights there, and never plan an island departure on the day of your transatlantic flight home.",
    intro: [
      "Roughly a third of the couples we plan for fly from North America, and the mistakes are consistent enough to be predictable.",
      "The first is trying to connect straight through to an island on arrival day. A transatlantic overnight plus a domestic hop plus a transfer produces a first day nobody enjoys and a memory of exhaustion.",
      "The second is booking the return too tightly. Aegean ferries and small-island flights are weather-dependent, and an August meltemi does not care about your connection in Newark.",
    ],
    concerns: [
      {
        title: "Jet lag on arrival",
        body: "Overnight from the East Coast lands you in Athens mid-morning with a seven-hour deficit. Two nights in the city — not one — lets you sleep, see the Acropolis properly, and start the islands as human beings.",
      },
      {
        title: "The flight home",
        body: "We never book an island departure on the same day as your transatlantic return. One night in Athens at the end removes the single biggest risk in Greek travel.",
      },
      {
        title: "Tipping and etiquette",
        body: "Greece is not a tipping culture on the American scale. Rounding up, or five to ten percent for exceptional service, is normal. Over-tipping is noticed and slightly awkward.",
      },
      {
        title: "How long you actually need",
        body: "For a transatlantic flight, ten nights is the practical minimum and fourteen is much better. A week means you spend a fifth of it in the air.",
      },
      {
        title: "Time zones for planning",
        body: "We work with US couples across every time zone. Calls are scheduled for your evening, and we answer written questions overnight so you wake up to an answer.",
      },
    ],
    islands: ["athens", "santorini", "milos", "naxos", "chania"],
    itinerary: "athens-cyclades-14-days",
    faqs: [
      {
        question: "How many days do Americans need for a Greek honeymoon?",
        answer:
          "Ten nights minimum, fourteen ideally. A transatlantic flight each way consumes two days, so a shorter trip leaves too little time on the ground to justify the journey.",
      },
      {
        question: "Do you need a visa for Greece as a US citizen?",
        answer:
          "US citizens can currently enter Greece for short stays without a visa, though the EU's ETIAS travel authorisation is being introduced. Check the current requirement before you travel, as the start date has moved several times.",
      },
      {
        question: "Is tipping expected in Greece?",
        answer:
          "Not at American levels. Rounding up the bill, or leaving five to ten percent for good service, is standard. Service is often already included on the check.",
      },
    ],
    heroImage: IMAGES.athensLuxury,
    updatedAt: "2026-07-22",
  },
  {
    slug: "uk-couples",
    title: "Greek honeymoons for British couples",
    tagline: "Direct flights, shoulder season, and avoiding the charter coast",
    answer:
      "British couples have the best flight access to Greece in Europe, including direct routes to Santorini, Corfu, Crete, Rhodes and Kefalonia. The main risk is booking on to a coast built for package holidays.",
    intro: [
      "The UK has more direct summer routes into Greek airports than any other country, which is a genuine advantage — and also the source of the most common British honeymoon mistake.",
      "Those direct routes exist because of the package market, and they land in exactly the places you do not want to honeymoon. Corfu's southern strip, Zakynthos's Laganas, Rhodes's northeast coast and Kos's resort belt are all a short transfer from an airport with cheap flights.",
      "The island is rarely the problem. The coast is.",
    ],
    concerns: [
      {
        title: "Where the charter flights land",
        body: "Corfu, Rhodes, Zakynthos, Kos and Crete all have parts aimed squarely at the package market and parts that are as beautiful as anywhere in Greece. We book the second kind.",
      },
      {
        title: "School holidays and cost",
        body: "Late July and August carry a substantial UK premium. Moving to the second week of September typically saves 25–40 percent for warmer sea and fewer people.",
      },
      {
        title: "Regional departures",
        body: "Manchester, Birmingham, Edinburgh and Bristol all have direct summer Greek routes, which often removes a London connection entirely. We plan around your actual airport, not Heathrow.",
      },
      {
        title: "Travel insurance and the GHIC",
        body: "A GHIC covers state healthcare but not repatriation or private clinics, which is what you would actually use on a small island. Proper travel insurance is not optional.",
      },
    ],
    islands: ["corfu", "kefalonia", "chania", "santorini", "paxos"],
    itinerary: "ionian-quietly",
    faqs: [
      {
        question: "Which Greek islands have direct flights from the UK?",
        answer:
          "Santorini, Mykonos, Corfu, Kefalonia, Zakynthos, Preveza for Lefkada, Crete's Chania and Heraklion, Rhodes, Kos, Samos and Skiathos all take direct UK summer flights.",
      },
      {
        question: "When is the cheapest time for UK couples to honeymoon in Greece?",
        answer:
          "Late September and early October, or mid-May. Both avoid the school holiday premium while keeping warm weather, and September has the warmest sea of the year.",
      },
      {
        question: "Do British travellers need anything special to visit Greece?",
        answer:
          "A passport with sufficient validity and, from its introduction, the EU's ETIAS authorisation. A GHIC covers state healthcare but you still need proper travel insurance.",
      },
    ],
    heroImage: IMAGES.corfu,
    updatedAt: "2026-07-22",
  },
  {
    slug: "lgbtq-couples",
    title: "LGBTQ+ honeymoons in Greece",
    tagline: "Where you will be welcomed, and where you will be celebrated",
    answer:
      "Greece legalised same-sex marriage in 2024. Mykonos, Athens, Skiathos and Lesvos are the most established destinations, and we only book properties where we know how a same-sex couple will actually be received.",
    intro: [
      "Greece legalised same-sex marriage and adoption in February 2024, the first majority-Orthodox country to do so. That is the legal position, and it matters.",
      "The lived position is more varied. Athens, Mykonos, Skiathos and parts of Crete are entirely comfortable. Small conservative villages are usually courteous rather than hostile, but courteous is not the same as welcoming, and a honeymoon should be more than tolerated.",
      "So we do the unglamorous work: we know which hotels put two men in a room with a double bed without a phone call to reception, and which ones will quietly try to fix what they assume is a booking error.",
    ],
    concerns: [
      {
        title: "Where you will feel most at home",
        body: "Mykonos has been an international gay destination since the 1960s and remains the most established. Athens has a substantial scene in Gazi and Metaxourgeio. Lesvos, and Skala Eressos in particular, has a long history as a destination for women.",
      },
      {
        title: "Beyond the obvious islands",
        body: "Plenty of couples want quiet rather than a scene. Paros, Naxos, Hydra, Chania and Corfu's northeast are all comfortable, and we vet properties individually rather than assuming.",
      },
      {
        title: "The properties we book",
        body: "We only place same-sex couples in hotels where we know from experience how the booking will be handled. That is a short list on some islands, and we would rather tell you that than pretend otherwise.",
      },
      {
        title: "Marrying in Greece",
        body: "Civil same-sex marriage has been legal since 2024. Requirements and processing times vary by municipality, so confirm current details locally and allow time for translations.",
      },
    ],
    islands: ["mykonos", "athens", "lesvos", "paros", "chania"],
    itinerary: "athens-cyclades-14-days",
    faqs: [
      {
        question: "Is Greece LGBTQ+ friendly for a honeymoon?",
        answer:
          "Yes in law — same-sex marriage was legalised in 2024 — and in practice in Athens, Mykonos, Skiathos, Lesvos and larger towns. Rural and conservative areas are generally courteous rather than actively welcoming.",
      },
      {
        question: "Can same-sex couples get married in Greece?",
        answer:
          "Yes. Greece legalised same-sex civil marriage in February 2024, the first majority-Orthodox country to do so. Requirements vary by municipality, so confirm the process locally.",
      },
      {
        question: "Which Greek island is best for a gay honeymoon?",
        answer:
          "Mykonos is the most established, with a scene dating to the 1960s. Athens offers the widest choice, and Lesvos — particularly Skala Eressos — has a long history as a destination for women.",
      },
    ],
    heroImage: IMAGES.stock2,
    updatedAt: "2026-07-22",
  },
  {
    slug: "vow-renewal",
    title: "Vow renewals in Greece",
    tagline: "A ceremony without paperwork, on a cliff or a beach",
    answer:
      "A vow renewal has no legal requirements, which makes it far simpler than a wedding. Popular settings include the Santorini caldera at sunset, a Cretan olive grove, and the rocks below Hydra's harbour.",
    intro: [
      "Vow renewals are the fastest-growing thing we plan, and they suit Greece particularly well because the setting does most of the work.",
      "The freedom is the point. There is no municipality, no certificate of no impediment, no translation, no waiting period. You choose a place, a celebrant, a time of day, and who is there.",
      "Which means the planning can be entirely about atmosphere: where the light falls at seven, whether you want anyone else present, and what happens afterwards.",
    ],
    concerns: [
      {
        title: "No legal paperwork at all",
        body: "Because a renewal has no legal effect, none of the wedding requirements apply. This can be arranged in weeks rather than months.",
      },
      {
        title: "Choosing the setting",
        body: "The Santorini caldera at sunset, a Cretan olive grove, a Corfiot cove reached only by boat, or the rocks below Hydra's harbour. We match the setting to what the day is actually for.",
      },
      {
        title: "Just the two of you, or everyone",
        body: "Roughly half the renewals we arrange have no guests at all — a celebrant, a photographer and a table for two afterwards. The other half are a small family gathering.",
      },
      {
        title: "Anniversaries and second chances",
        body: "Many renewals mark a tenth or twenty-fifth anniversary, or a wedding that could not be what the couple wanted at the time. Both call for different planning, and we ask.",
      },
    ],
    islands: ["santorini", "hydra", "chania", "corfu", "folegandros"],
    itinerary: "santorini-milos-10-days",
    faqs: [
      {
        question: "Do you need paperwork for a vow renewal in Greece?",
        answer:
          "No. A renewal has no legal effect, so none of the marriage requirements apply. It can be arranged in a matter of weeks rather than the month or more a legal ceremony needs.",
      },
      {
        question: "Where is the best place for a vow renewal in Greece?",
        answer:
          "The Santorini caldera at sunset is the classic. Quieter alternatives include a Cretan olive grove, a boat-access cove on Corfu or Paxos, and the swimming rocks below Hydra's harbour.",
      },
      {
        question: "Can we renew our vows with just the two of us?",
        answer:
          "Yes, and about half of the renewals we arrange are exactly that — a celebrant, a photographer, and dinner for two afterwards with nobody else involved.",
      },
    ],
    heroImage: IMAGES.santoriniChurch,
    updatedAt: "2026-07-22",
  },
  {
    slug: "destination-wedding-then-honeymoon",
    title: "Married in Greece, honeymooning in Greece",
    tagline: "How to make the second week feel different from the first",
    answer:
      "If you are marrying in Greece, change islands afterwards. Staying put keeps you in host mode. A two-hour ferry the day after the wedding is the single most effective thing you can do.",
    intro: [
      "We plan a lot of honeymoons that begin the morning after a Greek wedding, and the couples who enjoy them most all did the same thing: they moved.",
      "A wedding, however small, puts you on show. There are guests to look after, a schedule, and a version of yourselves that is performing. Staying on the same island afterwards means running into your own wedding party at breakfast.",
      "One ferry solves it.",
    ],
    concerns: [
      {
        title: "Two quiet nights, then move",
        body: "We usually build in one or two undemanding nights immediately after the wedding — you will be more tired than you expect — and then a short crossing to somewhere entirely different.",
      },
      {
        title: "Choosing the pair",
        body: "Wedding islands need direct flights for guests: Santorini, Mykonos, Corfu, Rhodes, Crete. Honeymoon islands are usually the ones without them. That contrast is exactly what you want.",
      },
      {
        title: "Guests who linger",
        body: "Some guests will want to extend. We handle that separately — recommendations for them, silence about your onward plans — so the honeymoon does not become a group holiday.",
      },
      {
        title: "Coordinating with your wedding planner",
        body: "We work alongside your wedding planner rather than duplicating them. They own the day; we own everything after it.",
      },
    ],
    islands: ["santorini", "milos", "folegandros", "paros", "sifnos"],
    itinerary: "santorini-milos-10-days",
    faqs: [
      {
        question: "Should we honeymoon on the same island as our Greek wedding?",
        answer:
          "We strongly recommend moving. Staying put keeps you in host mode and means running into your own guests. A two-hour ferry the day after transforms the trip.",
      },
      {
        question: "How soon after a destination wedding should the honeymoon start?",
        answer:
          "Leave one or two low-effort nights before you travel. Couples are consistently more tired after a destination wedding than they expect, and a same-day departure is punishing.",
      },
    ],
    heroImage: IMAGES.santoriniDomes,
    updatedAt: "2026-07-22",
  },
  {
    slug: "second-marriage",
    title: "Honeymoons for second marriages",
    tagline: "Fewer boxes to tick, and a trip that is genuinely yours",
    answer:
      "Second-marriage honeymoons are often the best ones we plan, because the couples know what they actually enjoy. Expect fewer performative moments, better food, and a willingness to skip Santorini entirely.",
    intro: [
      "Couples marrying for the second time arrive with something first-timers rarely have: an accurate sense of what they enjoy and what they merely think they should enjoy.",
      "In practice that means fewer sunset viewpoints and more good dinners. Fewer islands. More willingness to spend the budget on one exceptional thing rather than spreading it thinly.",
      "It also often means children, existing families, and a shorter window. All of which is planning, not a problem.",
    ],
    concerns: [
      {
        title: "You can skip the obligatory sights",
        body: "If neither of you wants to queue for a sunset in Oia, we will not put one in. There is no rule that a Greek honeymoon must include Santorini.",
      },
      {
        title: "Shorter trips, planned better",
        body: "Second marriages often come with less annual leave and more commitments. Eight nights in the Saronic or Crete can be better than a rushed fortnight.",
      },
      {
        title: "Children and family",
        body: "Some couples want a few family days at the start and then time alone. We plan both halves, including the handover, and it works well.",
      },
      {
        title: "Spending where it counts",
        body: "One extraordinary hotel and one private boat day tends to be more memorable than four decent hotels. We are happy to say so.",
      },
    ],
    islands: ["chania", "hydra", "sifnos", "paxos", "nafplio"],
    itinerary: "hydra-spetses-escape",
    faqs: [
      {
        question: "Do you plan honeymoons for second marriages?",
        answer:
          "Frequently, and they are among the most enjoyable to design. Couples usually know what they like, which means fewer obligatory sights and a trip built around what you actually want.",
      },
      {
        question: "Can we include our children for part of the trip?",
        answer:
          "Yes. We often plan a family opening — Crete or the Saronic work well — followed by a handover and a week for the two of you on a different island.",
      },
    ],
    heroImage: IMAGES.aegeanWindow,
    updatedAt: "2026-07-22",
  },
  {
    slug: "partner-hates-planning",
    title: "When one of you hates planning",
    tagline: "For couples where one does all the research and the other does none",
    answer:
      "The most common dynamic we see: one partner has forty browser tabs open and the other has none. We interview both of you separately, because the quiet one usually has stronger preferences than they let on.",
    intro: [
      "This is the single most common shape of the couples who contact us, and it is almost never a problem with the relationship. It is a problem with how holiday planning gets distributed.",
      "One person becomes the researcher by default. They accumulate options, present them, and get 'whatever you think' in reply. Then they carry the responsibility for whether the honeymoon was any good.",
      "The fix is structural. We talk to you separately.",
    ],
    concerns: [
      {
        title: "We interview you separately",
        body: "Ten minutes each, on your own. The partner who says they have no preferences almost always has three or four strong ones — they just do not want to argue about hotels.",
      },
      {
        title: "The researcher gets to stop",
        body: "Handing over the tabs is the point. We take the shortlist, tell you honestly which of it is wrong and why, and you stop being the person responsible for the outcome.",
      },
      {
        title: "Decisions in twos, not twenties",
        body: "We never present twelve hotels. We present two, with a recommendation and the reason. Choice paralysis is what makes planning miserable.",
      },
      {
        title: "One thing each, non-negotiable",
        body: "Every itinerary we build has at least one day that exists purely because one of you wanted it. It is a small thing and it changes how the trip feels for both people.",
      },
    ],
    islands: ["paros", "naxos", "milos", "chania", "corfu"],
    itinerary: "santorini-milos-10-days",
    faqs: [
      {
        question: "What if my partner has no opinions about our honeymoon?",
        answer:
          "They almost always do. We interview each of you separately for ten minutes, and the partner who claims to be easygoing usually turns out to have several firm preferences they did not want to negotiate over.",
      },
      {
        question: "How involved do we have to be in the planning?",
        answer:
          "As involved as you want. Some couples want to see every option; others want two choices and a recommendation. We ask which you are at the start rather than assuming.",
      },
    ],
    heroImage: IMAGES.stock5,
    updatedAt: "2026-07-22",
  },
];

export const audiencesBySlug = Object.fromEntries(
  AUDIENCES.map((a) => [a.slug, a]),
);
