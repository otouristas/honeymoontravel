export type ContentKind = "page" | "post";

export type ContentRecord = {
  id: number;
  slug: string;
  path: string;
  kind: ContentKind;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDesc: string;
  textBlocks: string[];
  images: string[];
  featuredImage: string | null;
  date?: string;
  categories?: string[];
};

export type DestinationRegion = {
  slug: string;
  path: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  islands: string[];
  gallery: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Planner = {
  name: string;
  jobTitle: string;
  credential: string;
  yearsExperience: number;
  languages: string[];
  bio: string[];
  portrait: string;
  sameAs: string[];
};

export type RegionSlug =
  | "cyclades"
  | "ionian-islands"
  | "north-aegean-islands"
  | "attica"
  | "crete"
  | "dodecanese"
  | "peloponnese";

export type Region = {
  slug: RegionSlug;
  title: string;
  /** Short label used in navigation and breadcrumbs. */
  navLabel: string;
  tagline: string;
  /** <=40 words. Sits directly under the H1 for answer extraction. */
  answer: string;
  intro: string[];
  heroImage: string;
  gallery: string[];
  gettingThere: string;
  bestMonths: string;
  faqs: FaqItem[];
  updatedAt: string;
};

export type IslandBase = {
  /** Village, town or resort area a couple would actually sleep in. */
  name: string;
  note: string;
};

export type StayType = {
  label: string;
  note: string;
};

export type ArcDay = {
  day: string;
  title: string;
  body: string;
};

export type Pairing = {
  /** Island slug this destination pairs well with. */
  slug: string;
  note: string;
};

export type Island = {
  slug: string;
  name: string;
  region: RegionSlug;
  /** Appears above the H1. */
  eyebrow: string;
  /** <=40 words. The extractable answer for "{name} honeymoon". */
  answer: string;
  bestFor: string;
  notFor: string;
  nights: string;
  bestMonths: string;
  plannerNote: string;
  lastWalked: string;
  intro: string[];
  bases: IslandBase[];
  stays: StayType[];
  arc: ArcDay[];
  pairings: Pairing[];
  gettingThere: string;
  crowds: string;
  wind: string;
  faqs: FaqItem[];
  heroImage: string;
  gallery: string[];
  /** Quiz planner-type slug this island suits best. */
  plannerType: string;
  /** Itinerary slug featuring this island. */
  itinerary?: string;
  updatedAt: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  /** Short marketing line under the H1. */
  tagline: string;
  answer: string;
  nights: number;
  bestMonths: string;
  islands: string[];
  intro: string[];
  days: ArcDay[];
  includes: string[];
  faqs: FaqItem[];
  heroImage: string;
  updatedAt: string;
};

export type Experience = {
  slug: string;
  title: string;
  tagline: string;
  answer: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  islands: string[];
  faqs: FaqItem[];
  heroImage: string;
  updatedAt: string;
};

export type GuideSection = {
  /** Question-shaped H2. */
  heading: string;
  /** <=40 words, sits directly under the heading. */
  answer: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  answer: string;
  intro: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
  heroImage: string;
  /** Renders the seasonality calendar on this guide. */
  showSeasonality?: boolean;
  updatedAt: string;
};

export type CompareColumn = {
  islandSlug: string;
  name: string;
  verdict: string;
  points: string[];
  image: string;
};

export type ComparePair = {
  slug: string;
  title: string;
  answer: string;
  intro: string[];
  left: CompareColumn;
  right: CompareColumn;
  table: { label: string; left: string; right: string }[];
  chooseLeftIf: string[];
  chooseRightIf: string[];
  faqs: FaqItem[];
  updatedAt: string;
};

export type Audience = {
  slug: string;
  title: string;
  tagline: string;
  answer: string;
  intro: string[];
  concerns: { title: string; body: string }[];
  islands: string[];
  itinerary?: string;
  faqs: FaqItem[];
  heroImage: string;
  updatedAt: string;
};

export type PlannerType = {
  slug: string;
  title: string;
  summary: string;
  answer: string;
  essay: string[];
  strengths: string[];
  watchOuts: string[];
  howWeWork: string[];
  islands: string[];
  itinerary: string;
  heroImage: string;
  updatedAt: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
  heroImage: string;
  /** Island slugs referenced by this essay, used for internal linking. */
  islands: string[];
  updatedAt: string;
};

export type CoupleStory = {
  slug: string;
  couple: string;
  from: string;
  year: string;
  islands: string[];
  headline: string;
  quote: string;
  body: string[];
  heroImage: string;
  updatedAt: string;
};

export type SeasonMonth = {
  month: string;
  sea: string;
  crowds: "Low" | "Building" | "High" | "Peak" | "Easing";
  wind: string;
  rates: "Low" | "Shoulder" | "High" | "Peak";
  note: string;
};
