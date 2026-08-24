import type { DestinationRegion } from "./types";

const IMG = "https://www.myhoneymoon.travel/wp-content/uploads/2021/03";

export const DESTINATIONS: DestinationRegion[] = [
  {
    slug: "cyclades",
    path: "/cyclades/",
    title: "Cyclades",
    tagline: "Iconic islands, endless blue",
    description:
      "Santorini sunsets, Mykonos charm, and hidden gems like Milos and Folegandros — the Cyclades offer the quintessential Greek island honeymoon.",
    heroImage: `${IMG}/my-honeymoon-santorini.jpg`,
    islands: ["Santorini", "Mykonos", "Milos", "Paros", "Naxos", "Folegandros", "Sifnos", "Syros", "Tinos", "Andros"],
    gallery: [
      `${IMG}/my-honeymoon-santorini-church.jpg`,
      `${IMG}/my-honeymoon-santorini-island-view.jpg`,
      `${IMG}/my-Honeymoon-Santorini-3.jpg`,
      `${IMG}/Tinos_PyrgosVillage_7392_YSkoulas.jpg`,
    ],
  },
  {
    slug: "ionian-island",
    path: "/ionian-island/",
    title: "Ionian Islands",
    tagline: "Emerald seas and Venetian charm",
    description:
      "Corfu's elegance, Kefalonia's dramatic cliffs, and Lefkada's turquoise waters — the Ionian Islands blend lush landscapes with refined romance.",
    heroImage: `${IMG}/my-Honeymoon-Corfu-Copyright-SMourelatou.jpg`,
    islands: ["Corfu", "Kefalonia", "Lefkada", "Zakynthos", "Ithaca", "Paxos", "Antipaxos"],
    gallery: [
      `${IMG}/my-Honeymoon-Corfu-Achilleion-Copyright-SMourelatou.jpg`,
      `${IMG}/my-Honeymoon-Kefalonia-Myrtos-copyright-KKouzouni.jpg`,
      `${IMG}/my-Honeymoon-Lefkada-Porto-Katsiki-copyright-GFilippini.jpg`,
      `${IMG}/my-Honeymoon-Ionian-islands-Corfu-Old-town-copyright-MMitzithropoulos.jpg`,
    ],
  },
  {
    slug: "north-aegean-islands",
    path: "/north-aegean-islands/",
    title: "North Aegean Islands",
    tagline: "Authentic solitude and raw beauty",
    description:
      "Chios mastic villages, Samos vineyards, and Ikaria's slow pace — discover Greece's quieter islands where romance meets authenticity.",
    heroImage: `${IMG}/my-Honeymoon-Chios-Copyright-GFIlippini.jpg`,
    islands: ["Chios", "Lesvos", "Samos", "Ikaria", "Limnos", "Thassos"],
    gallery: [
      `${IMG}/my-Honeymoon-Chios-Pyrgi-Copyright-GFIlippini.jpg`,
      `${IMG}/my-Honeymoon-Samos-Beach-Copyright-DRozaki.jpg`,
      `${IMG}/my-Honeymoon-Ikaria-Copyright-DRozaki.jpg`,
      `${IMG}/my-Honeymoon-Limnos-Myrina-Copyright-KVergas.jpg`,
    ],
  },
  {
    slug: "attica",
    path: "/attica/",
    title: "Attica",
    tagline: "Athens culture meets coastal bliss",
    description:
      "World-class antiquities, rooftop dining, and island escapes to Hydra and Aegina — Attica pairs urban sophistication with seaside serenity.",
    heroImage: `${IMG}/my-Honeymoon-Athens-Luxury-copyright-KKouzouni.jpg`,
    islands: ["Athens", "Cape Sounion", "Aegina", "Hydra", "Poros", "Spetses"],
    gallery: [
      `${IMG}/my-Honeymoon-Athens-Wine-copyright-KKouzouni.jpg`,
      `${IMG}/my-Honeymoon-Athens-Gastronomy-copyright-KKouzouni7.jpg`,
      `${IMG}/my-honeymoon-aegean-window.jpg`,
      `${IMG}/my-honeymoon-santorini-door.jpg`,
    ],
  },
  {
    slug: "thematic-experiences",
    path: "/thematic-experiences/",
    title: "Thematic Experiences",
    tagline: "Curated passions, shared moments",
    description:
      "Wine and gastronomy, wellness retreats, cultural immersion, or total seclusion — we design honeymoons around what moves you both.",
    heroImage: `${IMG}/my-Honeymoon-Gastronomy-copyright-SMourelatou.jpg`,
    islands: ["Gastronomy", "Wine & Vineyards", "Wellness & Spa", "Culture & History", "Adventure", "Secluded Romance"],
    gallery: [
      `${IMG}/my-Honeymoon-Crete-Rethymnon-Wine-Copyright-E-Fili..jpg`,
      `${IMG}/my-Honeymoon-Athens-Wine-copyright-KKouzouni2.jpg`,
      `${IMG}/my-honeymoon-special-amenities-1.jpg`,
      `${IMG}/my-honeymoon-aegean-sailing.jpg`,
    ],
  },
];

export const destinationsByPath = Object.fromEntries(
  DESTINATIONS.map((d) => [d.path, d]),
);
