const IMG_BASE = "https://www.myhoneymoon.travel/wp-content/uploads/2021/03";

export const SITE = {
  name: "myHoneymoon",
  tagline: "Luxury Honeymoons in Greece",
  domain: "https://www.myhoneymoon.travel",
  phoneDisplay: "+30 210 323 2522",
  phoneHref: "tel:+302103232522",
  whatsapp: "https://wa.me/302103232522",
  email: "design@myhoneymoon.travel",
  welcomeEmail: "welcome@myhoneymoon.gr",
  bookingUrl:
    "https://hello.dubsado.com/public/appointment-scheduler/5fff437b8bddf5a13954fb37/schedule",
  formUrl: "https://hello.dubsado.com/public/form/view/60b72818c729c79c02c21c9b",
  facebook: "https://www.facebook.com/myHoneymoonInGreece",
  instagram: "https://www.instagram.com/myhoneymooningreece",
  pinterest: "https://gr.pinterest.com/myHoneymooningreece",
  icon: "https://www.myhoneymoon.travel/wp-content/uploads/2021/03/cropped-RELEASE_myHoneymoon_Icon-03-192x192.png",
  address: {
    locality: "Athens",
    region: "Attica",
    country: "GR",
  },
  assets: {
    base: IMG_BASE,
    logoWordmark: `${IMG_BASE}/my-Honeymoon-Logo-03.png`,
    logoIcon: `${IMG_BASE}/cropped-RELEASE_myHoneymoon_Icon-03.png`,
    diamond: `${IMG_BASE}/RELEASE_myHoneymoon_Icon-04.png`,
    pattern: `${IMG_BASE}/RELEASE_myHoneymoon_Patterns-02-1.png`,
    footerLogo: `${IMG_BASE}/RELEASE_myHoneymoon_Primary-08.png`,
    hero: `${IMG_BASE}/my-honeymoon-santorini.jpg`,
    islandView: `${IMG_BASE}/my-honeymoon-santorini-island-view.jpg`,
    church: `${IMG_BASE}/my-honeymoon-santorini-church.jpg`,
    vimeo: "https://player.vimeo.com/video/370333393",
    gallery: [
      `${IMG_BASE}/haute-stock-photo-membership-santorini-blue-collection-final-15.jpg`,
      `${IMG_BASE}/haute-stock-photo-membership-santorini-blue-collection-final-12.jpg`,
      `${IMG_BASE}/haute-stock-photo-membership-santorini-blue-collection-final-13.jpg`,
      `${IMG_BASE}/haute-stock-photo-membership-santorini-blue-collection-final-24.jpg`,
      `${IMG_BASE}/haute-stock-photo-membership-santorini-blue-collection-final-19.jpg`,
    ],
  },
} as const;

/** Convenient alias used by chrome components */
export const site = {
  name: SITE.name,
  tagline: SITE.tagline,
  phone: SITE.phoneDisplay,
  phoneTel: SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  socials: {
    facebook: SITE.facebook,
    instagram: SITE.instagram,
    pinterest: SITE.pinterest,
  },
  assets: {
    wordmark: SITE.assets.logoWordmark,
    icon: SITE.assets.logoIcon,
    diamond: SITE.assets.diamond,
    pattern: SITE.assets.pattern,
    footerLogo: SITE.assets.footerLogo,
    hero: SITE.assets.hero,
    islandView: SITE.assets.islandView,
    church: SITE.assets.church,
    vimeo: SITE.assets.vimeo,
    gallery: SITE.assets.gallery,
  },
};

export type NavItem = { href: string; label: string };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/planning-a-honeymoon-to-greece", label: "Planning Process" },
  { href: "/guides", label: "Guides" },
  { href: "/journal", label: "Journal" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const DESTINATION_NAV: NavItem[] = [
  { href: "/cyclades", label: "Cyclades" },
  { href: "/ionian-islands", label: "Ionian Islands" },
  { href: "/north-aegean-islands", label: "North Aegean Islands" },
  { href: "/attica", label: "Attica & Saronic" },
  { href: "/crete", label: "Crete" },
  { href: "/dodecanese", label: "Dodecanese" },
  { href: "/peloponnese", label: "Peloponnese" },
];

export const UTILITY_NAV: NavItem[] = [
  { href: "/what-type-of-honeymoon-planner-are-you", label: "Planner Quiz" },
  { href: "/experiences", label: "Experiences" },
  { href: "/faq", label: "Questions" },
  { href: "/press", label: "Press" },
  { href: "/download-brochure", label: "Brochure" },
];

export const LEGAL_NAV: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
];

export const mainNav = PRIMARY_NAV;
export const destinationNav = DESTINATION_NAV;

export const PLANNING_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    body: "A virtual coffee catch-up where we get to know you, your tastes, and your dream honeymoon vision.",
  },
  {
    step: "02",
    title: "Bespoke Design",
    body: "We craft a personalised itinerary with handpicked accommodation, experiences, and romantic touches.",
  },
  {
    step: "03",
    title: "Refinement",
    body: "Review every detail together. We adjust until the plan feels exactly right for both of you.",
  },
  {
    step: "04",
    title: "Seamless Departure",
    body: "Flights, transfers, reservations — all handled. You simply arrive and begin your love story.",
  },
];
