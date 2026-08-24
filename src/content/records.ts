import rawPages from "./_raw_pages.json";
import type { ContentRecord } from "./types";

type RawPage = {
  id: number;
  type: string;
  title: string;
  slug: string;
  path: string;
  excerpt: string;
  featured_image: string | null;
  yoast_title: string;
  yoast_desc: string;
  text_blocks: string[];
  images: string[];
  date?: string;
};

const SKIP_IMAGES = /cdnjs|dubsado|iframe|\.js$/i;

function cleanImages(urls: string[]): string[] {
  return urls.filter((u) => u.startsWith("http") && !SKIP_IMAGES.test(u));
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export const records: ContentRecord[] = (rawPages as RawPage[]).map((p) => ({
  id: p.id,
  slug: p.slug,
  path: normalizePath(p.path),
  kind: p.type === "post" ? "post" : "page",
  title: p.title,
  excerpt: p.excerpt,
  seoTitle: p.yoast_title.replace(/\s*\|\s*myHoneymoon\s*$/, "").trim() || p.title,
  seoDesc: p.yoast_desc,
  textBlocks: p.text_blocks.filter((t) => t.length > 20),
  images: cleanImages(p.images),
  featuredImage: p.featured_image,
  date: p.date,
}));

export const recordsByPath = Object.fromEntries(
  records.map((r) => [r.path, r]),
);

export const pages = records.filter((r) => r.kind === "page");
export const posts = records
  .filter((r) => r.kind === "post")
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

/** Full blog post bodies migrated from WordPress */
export const POST_BODIES: Record<string, string> = {
  "luxury-honeymoon-hidden-gems-in-greece": `Looking for a luxury honeymoon destination in Greece that's off the beaten track? We've picked five of our favourite underrated Greek honeymoon destinations. From historic seaside cities to mountain retreats to countryside idylls, you'll find plenty of unique inspiration in these five locations.

**1. Nafplio**

Nafplio, a seaside paradise on the Argolic Gulf, is a beautiful alternative to Greece's tourist traps. This upmarket town is located just south of the historic city of Argos and is a popular escape for Athens' discerning residents.

Nafplio is home to a great selection of tavernas, restaurants and bars, but it's best known for its rich history. From the landmarks of the Old Town, including the Hellenic Parliament, to the hexagonal, 15th century Bourtzi Castle to the triple-level Akronafplia (Acropolis of Nafplio), there's so much to see.

Want to earn a fantastic view? Take the 999 (or 857, depending on who you ask) steps up to the top of Palamidi Castle. The panoramic vistas of the city and azure sea from the 18th century relic will make the cardio and leg workout worth it.

**2. Karpenisi**

This mountainous paradise has earned the nickname 'The Switzerland of Greece' thanks to its alpine beauty and verdant valleys. During summer, you can take a stroll along River Karpenisiotis and snap photos on the town's quaint bridges or visit the traditional Panagia Prousiotissa monastery. After a busy day exploring, simply sit back and relax as you sample delicious food and wine at one of Karpenisi's many tavernas.

If you're planning a winter honeymoon in Greece, Karpenisi is the perfect destination. It sits in the shadow of Mount Tymfristos and its altitude means snow is common during the cooler months. You can take to the slopes at Velhouchiou and enjoy skiing through the Hellenic Alps – a rare treat in this traditionally warm and dry country.

**3. Chios**

The gorgeous island of Chios is one the Aegean's most underrated destinations. Separated from Çeşme, Turkey, by the Chios Strait, it can be reached by scenic ferry or flight from the mainland capital. And once you're there, you'll be free to explore its serene medieval villages; Pyrgi, Mesta and Vessa are some of the prettiest. They're surrounded by the island's famous Mastic fields, as Chios is one of the only places this rare, fragrant resin can be harvested.

In the north, Pelinaio (the island's highest mountain) is perfect for adventurous hikes, but its base is surrounded by secluded beaches if you're not feeling so wild. And at the heart of the island, Nea Moni Monastery, a UNESCO World Heritage Site that was built in 1024, is home to some of the most breathtaking mosaics in the world.

When you've had enough of exploring, sit down to sample local delights including Mastelo cheese and pasteli, a delicious honey and sesame bar.

**4. Messinia**

Foodies will adore Messinia, which has established itself as one of the olive oil capitals of the world. Olive groves stretch as far as you can see in this coastal region and it's certainly not a case of quantity over quality; 95% of the liquid gold produced here is extra-virgin. The city of Kalamata, where the eponymous olive originates from, is lively and traditional, so you'll find plenty of action to fill your time down its narrow alleys and along the pretty coast.

You'll also find one of Greece's most luxurious destinations, Costa Navarino, in Messinia. Dramatic cliffs shelter golden bays and azure seas, making this the ideal location if you're looking to stretch out on the sands. It's also home to exclusive resorts like The Westin, which has two 18-hole golf courses and a state-of-the-art spa, among other endless amenities.

**5. Thessaloniki**

Vineyards, nightlife, historic monuments, open-air markets: the bustling city of Thessaloniki has a little bit of everything. Greece's second city sits on the Thermaic Gulf and is an intoxicating contrast of historic and modern, calm and lively. Whatever your perfect honeymoon looks like, you can find a corner of Thessaloniki for you.

If you come alive in the evenings, the city's nightlife is famously excellent. Party in converted industrial nightclubs, enjoy an intimate drink in a cosy bar or listen to live music at a friendly taverna. Thanks to its location, Thessaloniki's food is diverse and delicious. You'll be able to sample Turkish, Macedonian, Greek and Mediterranean flavours at its eateries, which range from trendy and high end to homely and authentic.

There's plenty of history to spot in Thessaloniki too. Ottoman monuments are scattered across Ano Poli, the city's oldest district, next to landmarks like Trigoniou Tower and Byzantine church Agios Nikolaos Orfanos. While you're in the city's highest area, you'll also be treated to incredible views across the ocean as far as Mount Olympus (if the weather's on your side).

We hope these incredible destinations have given you some more inspiration for your Greek honeymoon. Need a hand finding the perfect honeymoon location in Greece? Our team has more than 20 years' experience planning unforgettable breaks.`,
  "how-myhoneymoon-can-get-rid-of-these-honeymoon-worries": `Hello honeymooner! I'm so glad you've found us here at myHoneymoon. I'm Angeliki, an expert honeymoon planner and licensed premium tour guide in Greece. I've got more than 20 years' experience in the industry and have lived in a number of places across my beautiful home country. Since I was a child, travel has been my passion. Now, it's my mission to help newlyweds plan a honeymoon that's as memorable and personal as the wedding itself.

I know the years or months leading up to your wedding can be stressful and confusing. But with the help of the myHoneymoon team, you'll be able to plan the honeymoon of your dreams without adding to your never-ending to-do list! Here are just some of the worries we can take off your plate.

**A busy schedule**

Life doesn't stop just because you've got a wedding to plan, does it? You've still got to put in the hours at work, keep up with your personal commitments or run around after your family – or potentially do it all! Your fiancé's probably just as busy too, aren't they?

A honeymoon planner can make it feel like you've got a few more hours in your never-ending days. All you'll need to do is tell me what you're looking for and I'll make it happen. It's a collaborative process, so you can be as involved or hands-off as you like.

**A lack of local insight**

In my opinion, one of the best parts of travel is getting to soak up the culture of your new destination. And if you're travelling to Greece, fascinating contemporary and historical culture is something you'll find in abundance.

Whether your ideal honeymoon is made up of tranquil beach days, snapping unforgettable views or immersing yourself in Greece's fascinating history, I can add a local's insight to make sure it's full of special touches.

**The right balance of your ideas and a planner's expertise**

A honeymoon planner's main job is to make your life easier by listening to exactly what you want out of the process. With myHoneymoon, the process is 100% a collaborative effort. During our first meeting, I'll get to know you and your fiancé and find out how involved you'd like to be in planning your honeymoon.

**Crafting the perfect honeymoon**

I know each honeymooner is completely different. Something that wouldn't cross one person's mind could be haunting another's nightmares, like making enough time for relaxation while also getting to see plenty of sights. My process isn't prescriptive, and I'll adapt the way I work to best suit you.`,
  "the-best-honeymoon-destinations-in-greece-for-romance": `Seeking a Greek honeymoon paradise that makes the perfect setting for romance? We've picked six of our favourite romantic honeymoon destinations in Greece, from famous destinations to countryside retreats to cities with plenty of traditional charm.

**The Famous Destination: Santorini**

Santorini's iconic sun-bleached white and blue buildings and hilly, cobbled streets have probably made an appearance or two on your Instagram feed. But this in-vogue island paradise has become a coveted holiday destination for many excellent reasons beyond its picture-perfect architecture.

Thera, as it's known in Greek, is one of the largest islands in the Cyclades island group and was formed by massive volcanic eruptions millennia ago. Its dramatic landscape, made up of black beaches, striking cliffside homes and quaint avenues, has inspired painters and poets from across the country.

**The Traditionally Greek Destination: Ioannina**

Looking for a real taste of Greek life on your honeymoon? Ioannina, located in Epirus, northwestern Greece, is bursting with Hellenic charm. This city has a rich history and plenty of sites to explore, including the Castle of Ioannina which boasts citadels from the Ottoman and Byzantine periods.

**The Rural Destination: Mount Pelion**

Venture down to Thessaly in south-eastern Greece and you'll find the mountainous villages of Pelion. Fancy staying in a traditional guesthouse and immersing yourself in Ancient Greek mythology? This could be the ideal Greek honeymoon destination for you.

**The Island Destinations: Corfu & Rhodes**

Seeking an island escape? The popular holiday destinations of Corfu and Rhodes are so much more than their beautiful sandy beaches. You'll find plenty of romantic corners and countless historic remnants to explore on both.

**The City Destination: Kavala City**

Up in the Macedonia region of northern Greece is Kavala. This vibrant city, which rises up from the harbour in impressive fashion, is a true melting pot of cultures.

**My Favourite Destination: Monemvasia**

Monemvasia is ideal for secluded honeymoons, as it's located on an island linked to the Peloponnese mainland by a short causeway. This small island is dominated by an intimidating medieval fortress and you'll find gorgeous Byzantine churches and historic walls down virtually every cobbled street.`,
  "5-worries-a-honeymoon-planner-can-solve": `Struggling to find the time to plan your Greek honeymoon? Looking for ways to make it as memorable and romantic as possible? Here's how a honeymoon planner could get rid of your worries and help you organise the perfect honeymoon.

Planning a wedding can be exciting and wonderful, but it's also pretty stressful. On average, couples will spend between a year and 18 months planning the big day, devoting up to 500 hours of their time to the perfect wedding.

After all that hard work, you and your spouse deserve to escape for a romantic getaway. But after allocating so many hours to planning the main event, many couples don't have the time or energy to make their honeymoon just as special.

That's where our bespoke honeymoon planning services come in.

**1. "I don't have the time to plan a honeymoon."**

A honeymoon planner can take the stress of planning a honeymoon off your plate. All you'll need to do is brief them on what you're looking for and they'll get to work planning an idyllic getaway.

**2. "I don't know how to add those personal touches we'll always remember."**

A honeymoon planner with in-depth knowledge of your destination will offer plenty of inspiration and access to experiences you didn't even know were possible.

**3. "I'm worried about planning an itinerary."**

In our opinion, the best trip schedule finds time for activities like sightseeing, culinary tours, romantic dinners and adrenaline-filled sports, while giving you plenty of time to relax in between.

**4. "Will my honeymoon live up to my expectations?"**

We'll make sure to bring as many elements of your dream honeymoon in Greece to life as possible. From sustainable eco-resort to agri-tourism destinations to five-star boutique hotels, nothing's off limits at myHoneymoon.

**5. "I want to be involved in the process."**

We truly believe the best honeymoon planning process is a collaborative process. Together, using your vision, personalities and interests and our Greek travel expertise, we'll shape a honeymoon that's perfect for you.`,
};

export const QUIZ_TYPES = [
  {
    slug: "the-visionary",
    path: "/the-visionary/",
    title: "The Visionary",
    summary: "You love working towards clear goals and have your perfect honeymoon mapped out — you just need someone to make it happen.",
  },
  {
    slug: "the-processor",
    path: "/the-processor/",
    title: "The Processor",
    summary: "You know where you want to end up but figure out the big steps as you go. You need help with the finer details.",
  },
  {
    slug: "the-administrator",
    path: "/the-administrator/",
    title: "The Administrator",
    summary: "You love lists and ticking items off. You need a guiding influence to bring all the separate parts together perfectly.",
  },
  {
    slug: "the-action-taker",
    path: "/the-action-taker/",
    title: "The Action Taker",
    summary: "You live in the moment and turn ideas into action fast. You need a solid plan to follow so your enthusiasm delivers the best results.",
  },
];
