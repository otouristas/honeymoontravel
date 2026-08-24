import { IMAGES } from "./images";
import type { PlannerType } from "./types";

export const QUIZ_QUESTIONS = [
  {
    q: "When planning a big trip, you typically…",
    options: [
      { label: "Have a clear vision and detailed milestones", type: "the-visionary" },
      { label: "Know the destination but figure out steps as you go", type: "the-processor" },
      { label: "Make extensive lists and tick items off", type: "the-administrator" },
      { label: "Focus on what needs doing right now", type: "the-action-taker" },
    ],
  },
  {
    q: "Your friends would describe your planning style as…",
    options: [
      { label: "Visionary and goal-oriented", type: "the-visionary" },
      { label: "Easy-going and adaptable", type: "the-processor" },
      { label: "Detail-oriented and thorough", type: "the-administrator" },
      { label: "Efficient and action-focused", type: "the-action-taker" },
    ],
  },
  {
    q: "When it comes to your honeymoon, you most want…",
    options: [
      { label: "Someone to execute my perfect vision", type: "the-visionary" },
      { label: "Help with the finer details I might miss", type: "the-processor" },
      { label: "A planner to bring all my ideas together", type: "the-administrator" },
      { label: "A solid plan I can follow step by step", type: "the-action-taker" },
    ],
  },
  {
    q: "It is day four and it has rained all morning. You…",
    options: [
      { label: "Already had a wet-weather alternative in mind", type: "the-visionary" },
      { label: "Wait it out over a long breakfast and see", type: "the-processor" },
      { label: "Consult the list and reshuffle the week", type: "the-administrator" },
      { label: "Get in the car and find something to do", type: "the-action-taker" },
    ],
  },
  {
    q: "Which sentence sounds most like you?",
    options: [
      { label: "I know exactly what the photographs should look like", type: "the-visionary" },
      { label: "I want to be somewhere beautiful and see what happens", type: "the-processor" },
      { label: "I want to understand where I am and what I am looking at", type: "the-administrator" },
      { label: "I want to have done something worth talking about", type: "the-action-taker" },
    ],
  },
];

export const PLANNER_TYPES: PlannerType[] = [
  {
    slug: "the-visionary",
    title: "The Visionary",
    summary:
      "You love working towards clear goals and have your perfect honeymoon mapped out — you just need someone to make it happen.",
    answer:
      "Visionaries arrive with the honeymoon already imagined and need someone to execute it faithfully. You should be on Santorini, Hydra or Folegandros: places with one overwhelming image that the whole trip organises itself around.",
    essay: [
      "You already know what this honeymoon looks like. Not in a vague way — you can picture the terrace, the hour of the evening, the light. What you do not have is the time or the local knowledge to make the real thing match the version in your head, and you are quietly worried that it will not.",
      "That worry is well founded, because the gap between the image and the reality in Greece is almost entirely a matter of specifics. The caldera view you are imagining exists, but roughly half the rooms sold as having it are looking sideways at a neighbour's terrace. The empty cliff-edge village exists, but not on the island with the airport. The sunset you have in mind happens at a particular spot, at a particular time, in a particular month.",
      "So the work we do for Visionaries is precision rather than inspiration. You do not need us to suggest destinations; you need us to tell you that the hotel you found has eighty steps down from reception, that Imerovigli gives you the same view as Oia without the crowd, and that the picture you have in your head is a mid-June picture, not an August one.",
      "The failure mode to watch for is rigidity. Visionaries build a plan so complete that a cancelled ferry becomes a crisis. We deliberately leave two days with nothing in them, and every Visionary itinerary we have ever built has had those days turn out to be the favourites.",
    ],
    strengths: [
      "You know what you want, which makes decisions fast",
      "You will not waste the trip wondering whether somewhere else was better",
      "You notice and appreciate the details we put in",
    ],
    watchOuts: [
      "A plan with no slack in it turns a delayed ferry into a bad day",
      "You may over-invest in the photograph and under-invest in the afternoon",
      "The most memorable moments are almost never the ones you scheduled",
    ],
    howWeWork: [
      "We start from your reference images, not from a brochure",
      "We check every sightline, step count and orientation before booking",
      "We build in two unplanned days, and we insist on them",
      "We hold restaurant bookings from the day you confirm, not the month before",
    ],
    islands: ["santorini", "hydra", "folegandros", "symi"],
    itinerary: "santorini-milos-10-days",
    heroImage: IMAGES.santoriniIslandView,
    updatedAt: "2026-07-23",
  },
  {
    slug: "the-processor",
    title: "The Processor",
    summary:
      "You know where you want to end up but figure out the big steps as you go. You need help with the finer details.",
    answer:
      "Processors want a beautiful place and room to improvise. You should be on Milos, Naxos or Paros: islands with enough to do that an unplanned day is still a good one, and enough space that nothing feels compulsory.",
    essay: [
      "You are not disorganised. You simply believe, correctly, that the best parts of a trip are the ones nobody scheduled — and you have learnt to leave room for them.",
      "The risk in Greece is that improvisation runs into logistics. Ferries sell out in August. The taverna everyone recommends does not take walk-ins in July. The boat to the cove you heard about goes at nine and only when the wind allows. Spontaneity works beautifully here right up until the moment it collides with a timetable.",
      "So the shape we build for Processors is a firm skeleton with soft tissue. The islands, the hotels, the boats and the two or three tables that genuinely need booking are fixed. Everything else is a list of options with a note on which days they work, and you choose on the morning.",
      "The islands matter too. Some places punish improvisation — Santorini in August, where every good table is spoken for. Others reward it. Milos has seventy beaches and you can pick one at breakfast. Naxos has twelve kilometres of sand and a mountain range. Paros has three towns and a ferry to a fourth. These are the islands where waking up without a plan is a pleasure rather than a problem.",
    ],
    strengths: [
      "You will actually relax, which many couples do not",
      "You are open to the recommendation made on the day",
      "A change of plan does not ruin your mood",
    ],
    watchOuts: [
      "Popular ferries and restaurants genuinely do sell out in high summer",
      "Too little structure can mean the two of you spend the morning deciding",
      "Small-island boat trips depend on wind and often cannot be arranged same-day",
    ],
    howWeWork: [
      "We fix only what has to be fixed: islands, hotels, boats and two or three tables",
      "You get a shortlist per island with notes on which days each option works",
      "We flag the handful of things that genuinely need booking in advance",
      "Someone is on the end of the phone if you want to change something at breakfast",
    ],
    islands: ["milos", "naxos", "paros", "ikaria"],
    itinerary: "athens-cyclades-14-days",
    heroImage: IMAGES.stock5,
    updatedAt: "2026-07-23",
  },
  {
    slug: "the-administrator",
    title: "The Administrator",
    summary:
      "You love lists and ticking items off. You need a guiding influence to bring all the separate parts together perfectly.",
    answer:
      "Administrators want to understand where they are. You should be on Chios, Tinos, Sifnos or in Athens and Nafplio: places with depth, history and craft, where knowing more genuinely makes the days better.",
    essay: [
      "You have a spreadsheet. It is a good spreadsheet. It has tabs.",
      "What you are missing is not information — you have gathered more of it than most planners would — but the judgement about which of it matters. Twenty hours of research produces forty candidate hotels and no way to choose between them, because the thing that distinguishes them is not written down anywhere.",
      "Administrators also tend to want a reason for each day. Not a schedule for its own sake, but an answer to 'why here'. Which is why the islands that suit you are the ones with substance underneath the view: Chios, where a medieval village exists because of a resin that grows nowhere else on earth. Tinos, where fifty villages are carved from marble by a tradition that still has a school. Sifnos, whose cookbook shaped how a whole country eats. Athens and Nafplio, where the layers go down four thousand years.",
      "Our job with an Administrator is editorial. We take your forty options and give you back four, with the reason for each and — more usefully — the reason the other thirty-six are wrong. Then we book everything, in order, and give you a single document that replaces the spreadsheet.",
      "The one thing we will push back on is over-scheduling. A honeymoon with every hour allocated is a work trip with better views.",
    ],
    strengths: [
      "Nothing gets forgotten, and you will have read the ferry timetable already",
      "You get more out of guided days and archaeological sites than most people",
      "You will notice and enjoy the craft, the food and the history",
    ],
    watchOuts: [
      "A full calendar is the fastest way to arrive home tired",
      "Research volume is not the same as decision quality",
      "The best day of the trip will probably not be on the list",
    ],
    howWeWork: [
      "Send us the spreadsheet. Genuinely — it is the fastest way for us to understand you",
      "We return a shortlist of two options per decision, with reasons for and against",
      "Licensed guides for the sites where context transforms the visit",
      "One document with everything in order, replacing all your tabs",
    ],
    islands: ["chios", "tinos", "sifnos", "athens", "nafplio"],
    itinerary: "north-aegean-authenticity",
    heroImage: IMAGES.chiosPyrgi,
    updatedAt: "2026-07-23",
  },
  {
    slug: "the-action-taker",
    title: "The Action Taker",
    summary:
      "You live in the moment and turn ideas into action fast. You need a solid plan to follow so your enthusiasm delivers the best results.",
    answer:
      "Action Takers want to have done something. You should be on Kefalonia, Lefkada, Crete or Andros: islands with gorges, boats, cliffs and roads worth driving, where energy has somewhere to go.",
    essay: [
      "You will not be happy lying on a sunbed for eleven days, and you know it. The honeymoon you want has a boat in it, a walk that was slightly too long, a road with switchbacks, and something you can describe to people afterwards.",
      "The problem is that this instinct, unplanned, produces a fortnight of driving. Action Takers left to their own devices tend to cover four hundred kilometres, see nine things, and remember none of them clearly. Enthusiasm without a plan becomes motion.",
      "So we do the opposite of what you might expect. We build fewer, bigger days. One proper walk — Samaria, sixteen kilometres downhill through a gorge ending at a ferry — rather than four short ones. One full boat day where you get somewhere no road reaches, rather than three half-days from the same harbour. One drive that is genuinely worth doing.",
      "The islands that suit you have physical range. Kefalonia has Myrtos, an underground lake and a mountain. Lefkada has cliffs and the best windsurfing bay in Europe. Crete has a gorge, a lagoon and a two-hundred-and-sixty-kilometre spine. Andros has three hundred kilometres of waymarked stone paths and waterfalls that run in August.",
      "And then, because this is a honeymoon rather than an expedition, we put a genuinely still day after each big one. You will resist this. You will be glad of it.",
    ],
    strengths: [
      "You will actually do the things, not just book them",
      "Weather changes and last-minute swaps do not bother you",
      "You come home with a trip rather than a rest",
    ],
    watchOuts: [
      "Four hundred kilometres of driving is not a honeymoon",
      "Big days need recovery days or the second week suffers",
      "Your partner may want more stillness than you do — we will ask them separately",
    ],
    howWeWork: [
      "Fewer, better days: one gorge, one boat, one drive worth doing",
      "A still day booked immediately after each demanding one",
      "Everything physical is checked for the actual conditions in your month",
      "We interview both of you separately, because energy levels rarely match",
    ],
    islands: ["kefalonia", "lefkada", "chania", "andros"],
    itinerary: "ionian-quietly",
    heroImage: IMAGES.kefaloniaMyrtos,
    updatedAt: "2026-07-23",
  },
];

export const plannerTypesBySlug = Object.fromEntries(
  PLANNER_TYPES.map((t) => [t.slug, t]),
);

export const PLANNER_TYPE_SLUGS = PLANNER_TYPES.map((t) => t.slug);
