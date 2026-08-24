import { IMAGES } from "./images";
import { POST_BODIES } from "./records";
import type { JournalPost } from "./types";

/** Essays written for the rebuild, in Angeliki's voice. */
const NEW_BODIES: Record<string, string> = {
  "the-village-i-send-people-to-instead-of-oia": `Every couple who writes to me about Santorini mentions Oia. Almost none of them mention Imerovigli, and that is the single most useful piece of information I have.

**The same view, without the queue**

Imerovigli sits at the highest point of the caldera rim, about two hundred and sixty metres above the water. Oia sits at the northern tip, roughly a hundred metres lower. The view is the same crescent of flooded volcano, the same island of Nea Kameni smoking gently in the middle, the same improbable blue.

What is different is the number of people standing in it. Between five and nine in the evening, the lanes of Oia hold thousands of visitors who have come specifically for the sunset. In Imerovigli, at the same hour, you will find perhaps a few dozen people, most of them on their own terraces.

**And you can still walk to Oia**

This is the part couples do not realise. The caldera path runs along the rim, and from Imerovigli to Oia is about six kilometres — an hour and a half at an unhurried pace, with the whole caldera on your left the entire way.

So you can have both. Stay in the quiet village, walk the path in the late afternoon when the light starts to go, arrive in Oia at the height of it, and — this is the trick — have dinner booked for after sunset rather than before it. You will be sitting down as everyone else is leaving.

**What to check before you book**

The word "caldera view" does a lot of work in Santorini listings. Ask for a photograph taken from the bed, not from a drone. Ask how many steps there are between the road and the room, because some suites are eighty steps down and there is no lift. And ask which direction the terrace faces, because a surprising number of them look sideways at the neighbour's.

I check all three before I book anything on that island, and I have cancelled more than one reservation over the answers.`,

  "why-i-stopped-recommending-three-islands-in-a-week": `I used to build three-island honeymoons for couples who asked for them. I have stopped, and here is the arithmetic that changed my mind.

**What a move actually costs**

You wake up on the day of a ferry. You pack — properly, because everything has to go back in — which takes an hour and a bit of the morning's mood. You check out at eleven. The boat is at two, so you sit with your luggage somewhere. You cross for two hours. You transfer, you check in, you unpack. It is five o'clock and the first real thing you do on the new island is dinner.

That is a day. Not half a day. A day.

**The maths of ten nights**

Two islands, ten nights: one moving day. You lose ten percent of the honeymoon and gain a genuine contrast.

Three islands, ten nights: two moving days. You lose twenty percent, and the stays become three nights each, which is not long enough to stop feeling like a visitor anywhere.

Four islands in ten nights, which people do ask for, is a tour, not a honeymoon.

**The exception**

Fourteen nights changes it. Three islands over a fortnight gives you four or five nights in each place, which is enough to have a routine — the same café in the morning, the same swimming spot, the man at the harbour who now recognises you. That is when a Greek island stops being scenery and starts being somewhere you were.

**What I suggest instead**

Pick two islands that do different things. Santorini and Milos: the view and the water. Paros and Naxos: the town and the beach. Corfu and Paxos: the architecture and the sea caves. Hydra and Spetses: no cars and then pine trees.

Contrast is what makes a trip feel long. Motion just makes it feel busy.`,

  "the-meltemi-and-what-it-does-to-your-plans": `Nobody mentions the wind in the brochures, and it is the thing most likely to change your week.

**What it is**

The meltemi is a dry northerly that blows across the Aegean through the summer, strongest from the middle of July to the end of August. It is caused by a pressure difference between a high over the Balkans and a low over Turkey, and it is completely normal — Greeks plan around it without thinking.

On a good day it is the reason the islands are bearable in August. Thirty-four degrees with a stiff breeze is pleasant. Thirty-four degrees without one is not.

**What it actually disrupts**

Small boats, first. A private caique to Kleftiko on Milos or around the sea caves of Symi will be cancelled in a strong meltemi, sometimes with a few hours' notice. If your honeymoon has one unmissable boat day in it, do not put it on the last morning.

Ferries, second. Big conventional ferries almost always sail. Fast catamarans are more delicate and are cancelled more often, which catches people out because the fast boat is the one they booked.

Flights, occasionally. Small aircraft into Milos, Naxos, Ikaria and Skyros are the first to go. Santorini and Mykonos are affected a few days each summer.

And beaches. An exposed north-facing beach in a force six is not a beach, it is a sandblasting.

**How I plan around it**

Three rules. Never schedule an island departure on the day of an international flight — spend the last night in Athens. Build one spare day into any itinerary that depends on a boat. And if you can only travel in late July or August and boat days matter to you, go to the Ionian, where the meltemi barely reaches.

Corfu, Paxos, Kefalonia and Lefkada are calm in August while the Cyclades are white with spray. That is not a small difference. For some couples it is the whole decision.`,

  "what-twenty-years-taught-me-about-hotel-photographs": `I have been booking hotels in Greece for over twenty years, and the photographs have got better while the rooms have stayed the same. Here is what I have learnt to distrust.

**The drone shot**

Every property now has one. A wide aerial of the whole village with a small arrow, or no arrow at all, indicating that the hotel is somewhere in this beautiful scene. It tells you nothing about what you will see from the bed.

I always ask for a photograph taken standing on the terrace, facing out, with no wide-angle lens. If a hotel cannot or will not send one, that is itself an answer.

**The infinity pool that everyone shares**

Cycladic hotels are built on slopes in terraces, which means one pool is often visible from a dozen rooms and used by all of them. In photographs it appears private. In August it is not.

The phrase to look for is "private plunge pool", and even then, ask whether it is overlooked by the terrace above. On a stepped hillside, it usually is.

**The absent staircase**

This is the one that causes the most disappointment. Santorini, Symi, Hydra and Folegandros are all vertical places. A suite can be sixty or eighty steps below the reception, with no lift and no vehicle access, and the listing will not mention it because from the room it looks like paradise.

I ask for a step count in writing. For couples travelling with a knee, a bag, or a plan to have a drink before bed, it matters more than the thread count.

**The restaurant photograph taken in May**

An empty terrace with two place settings and the sea behind. Perfectly true — in May. In August the same terrace has forty covers and a queue.

None of this is dishonesty exactly. It is marketing, and marketing shows the best version. My job is to know the ordinary version, which is why I keep going back and walking these places myself rather than booking them from a screen.`,

  "the-case-for-two-nights-in-athens": `Almost every couple I speak to wants to skip Athens. They have heard it is hot, busy and just an airport with a ruin attached. I argue with all of them, and I win about eighty percent of the time.

**It changes the shape of the trip**

A honeymoon that is two islands is a beach holiday with a good view. A honeymoon that opens with two nights in a four-thousand-year-old city and then goes to two islands is a journey through a country. The difference is entirely psychological and entirely real.

**It removes the worst day of your holiday**

If you fly in and connect straight to an island, your first day is: overnight flight, airport, domestic flight, transfer, check in exhausted, eat badly because you cannot face going out. Couples remember that day. It is not the memory you want from day one of a marriage.

Two nights in the city means you sleep, you wake up somewhere interesting, and you arrive on your island rested and excited.

**The city has changed**

The Athens of twenty years ago deserved some of its reputation. The Athens of now does not. The pedestrian route around the base of the Acropolis is one of the great city walks in Europe. The Acropolis Museum is world-class by any standard. And the restaurant scene has gone from competent to genuinely ambitious, with a generation of chefs cooking Greek ingredients seriously.

**How to do it properly**

Book the first entry of the day at the Acropolis — around eight in the morning. For the first forty minutes the site is nearly empty and the marble is not yet throwing heat back at you. Do the museum afterwards, in the cool. Have a long lunch. See the Agora in the evening light.

And book a hotel with a roof terrace facing the Parthenon. Having dinner with it floodlit above your table is the single most photographed moment of most of the honeymoons I plan, and it happens on day one.`,

  "the-islands-i-would-choose-for-myself": `Couples ask me this constantly, usually at the end of a call, half-joking: where would you go? So here is the honest answer, which is not the same as the answer I would give most of them.

**Folegandros, for three nights**

There is one village on a cliff and almost nothing to do. The walk up to Panagia church at dusk, with the whole Aegean going pink below you, is the most romantic hour I know in Greece, and I have never once found it crowded. No airport means no day-trippers, which is the entire reason it has stayed as it is.

**Chios, for five**

I go back to Mesta more than anywhere else. It is a fortified medieval village where the outer houses form the wall and the lanes are roofed over against pirates who stopped coming four hundred years ago. At night it is lit low and there is nobody in it. Half an hour away, Pyrgi has every façade scratched into grey and white geometric patterns, and it looks like nothing else on earth.

**Ikaria, for as long as I can**

Not for the beaches, which are difficult, or the hotels, which are simple. For the fact that nobody is in a hurry and it is contagious within about forty-eight hours. Dinner starts at ten. The shop opens when the owner arrives. If a festival falls while you are there, you will dance until four in the morning with three generations of a village, and you will not be able to explain it properly afterwards.

**And Milos, when I want to swim**

Seventy-odd beaches, most of them without a road, all of them different colours because the rock is. A day on a small boat around Kleftiko, swimming into caves, is the best day I can put in anyone's itinerary and I never get bored of it.

**Why I do not send everyone to these**

Because they are what I want, and this is not my honeymoon. Two of them have no airport, one has almost no luxury accommodation at all, and none of them has the view that most couples have been imagining since the day they got engaged.

The job is not to send you where I would go. It is to find out what you would go back to, and send you there.`,
};

export const JOURNAL: JournalPost[] = [
  {
    slug: "the-village-i-send-people-to-instead-of-oia",
    title: "The village I send people to instead of Oia",
    excerpt:
      "Imerovigli has the same caldera view as Oia, a fraction of the crowd, and a cliff path between the two. Here is why it is on almost every Santorini itinerary I build.",
    date: "2026-06-18",
    body: NEW_BODIES["the-village-i-send-people-to-instead-of-oia"],
    heroImage: IMAGES.santoriniIslandView,
    islands: ["santorini"],
    updatedAt: "2026-06-18",
  },
  {
    slug: "why-i-stopped-recommending-three-islands-in-a-week",
    title: "Why I stopped recommending three islands in a week",
    excerpt:
      "An island change costs a full day once you count packing, ferry buffers and check-in. Here is the arithmetic that changed how I plan ten-night honeymoons.",
    date: "2026-05-28",
    body: NEW_BODIES["why-i-stopped-recommending-three-islands-in-a-week"],
    heroImage: IMAGES.aegeanSailing,
    islands: ["santorini", "milos", "paros", "naxos", "hydra"],
    updatedAt: "2026-05-28",
  },
  {
    slug: "the-meltemi-and-what-it-does-to-your-plans",
    title: "The meltemi, and what it does to your plans",
    excerpt:
      "The wind that nobody mentions in the brochures is the thing most likely to change your week. What it cancels, when it blows, and how I plan around it.",
    date: "2026-05-06",
    body: NEW_BODIES["the-meltemi-and-what-it-does-to-your-plans"],
    heroImage: IMAGES.stock1,
    islands: ["milos", "symi", "corfu", "paxos", "kefalonia"],
    updatedAt: "2026-05-06",
  },
  {
    slug: "what-twenty-years-taught-me-about-hotel-photographs",
    title: "What twenty years taught me about hotel photographs",
    excerpt:
      "The drone shot, the shared infinity pool, the staircase nobody mentions. Four things I have learnt to distrust in a Greek hotel listing, and what I ask for instead.",
    date: "2026-04-22",
    body: NEW_BODIES["what-twenty-years-taught-me-about-hotel-photographs"],
    heroImage: IMAGES.amenities,
    islands: ["santorini", "symi", "hydra", "folegandros"],
    updatedAt: "2026-04-22",
  },
  {
    slug: "the-case-for-two-nights-in-athens",
    title: "The case for two nights in Athens",
    excerpt:
      "Almost every couple wants to skip the city. Here is why two nights there removes the worst day of your honeymoon and changes the shape of the whole trip.",
    date: "2026-04-02",
    body: NEW_BODIES["the-case-for-two-nights-in-athens"],
    heroImage: IMAGES.athensLuxury,
    islands: ["athens", "sounion"],
    updatedAt: "2026-04-02",
  },
  {
    slug: "the-islands-i-would-choose-for-myself",
    title: "The islands I would choose for myself",
    excerpt:
      "Folegandros, Chios, Ikaria and Milos — and an honest explanation of why I do not send most couples to any of them.",
    date: "2026-03-14",
    body: NEW_BODIES["the-islands-i-would-choose-for-myself"],
    heroImage: IMAGES.chiosPyrgi,
    islands: ["folegandros", "chios", "ikaria", "milos"],
    updatedAt: "2026-03-14",
  },
  {
    slug: "luxury-honeymoon-hidden-gems-in-greece",
    title: "Luxury honeymoon hidden gems in Greece",
    excerpt:
      "Five underrated Greek honeymoon destinations, from a seaside town on the Argolic Gulf to a mountain village Greeks call the Switzerland of Greece.",
    date: "2021-06-15",
    body: POST_BODIES["luxury-honeymoon-hidden-gems-in-greece"],
    heroImage: IMAGES.gastronomy,
    islands: ["nafplio", "chios", "messinia"],
    updatedAt: "2026-03-01",
  },
  {
    slug: "the-best-honeymoon-destinations-in-greece-for-romance",
    title: "The best honeymoon destinations in Greece for romance",
    excerpt:
      "Six romantic Greek destinations, from the famous caldera of Santorini to the medieval fortress town of Monemvasia on the Peloponnese coast.",
    date: "2021-05-12",
    body: POST_BODIES["the-best-honeymoon-destinations-in-greece-for-romance"],
    heroImage: IMAGES.santoriniChurch,
    islands: ["santorini", "corfu", "rhodes"],
    updatedAt: "2026-03-01",
  },
  {
    slug: "how-myhoneymoon-can-get-rid-of-these-honeymoon-worries",
    title: "How myHoneymoon can get rid of these honeymoon worries",
    excerpt:
      "A busy schedule, a lack of local insight, and the right balance between your ideas and a planner's expertise. Angeliki on what she takes off your plate.",
    date: "2021-04-20",
    body: POST_BODIES["how-myhoneymoon-can-get-rid-of-these-honeymoon-worries"],
    heroImage: IMAGES.plannerPortrait,
    islands: [],
    updatedAt: "2026-03-01",
  },
  {
    slug: "5-worries-a-honeymoon-planner-can-solve",
    title: "5 worries a honeymoon planner can solve",
    excerpt:
      "Couples spend up to 500 hours planning a wedding and often have nothing left for the honeymoon. Five worries we hear most, and how we answer them.",
    date: "2021-03-30",
    body: POST_BODIES["5-worries-a-honeymoon-planner-can-solve"],
    heroImage: IMAGES.stock3,
    islands: [],
    updatedAt: "2026-03-01",
  },
];

export const journalBySlug = Object.fromEntries(JOURNAL.map((p) => [p.slug, p]));

export const journalSorted = [...JOURNAL].sort((a, b) =>
  b.date.localeCompare(a.date),
);
