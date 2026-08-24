import type { RegionSlug } from "./types";

type LonLat = [number, number];

/** Where each island marker sits on the map. */
export const ISLAND_COORDS: Record<string, LonLat> = {
  santorini: [25.43, 36.4],
  mykonos: [25.33, 37.45],
  milos: [24.42, 36.7],
  paros: [25.15, 37.08],
  naxos: [25.5, 37.05],
  folegandros: [24.9, 36.63],
  sifnos: [24.7, 36.98],
  syros: [24.9, 37.44],
  tinos: [25.16, 37.56],
  andros: [24.87, 37.85],
  corfu: [19.92, 39.6],
  kefalonia: [20.55, 38.25],
  lefkada: [20.65, 38.7],
  zakynthos: [20.75, 37.78],
  ithaca: [20.71, 38.42],
  paxos: [20.18, 39.2],
  chios: [26.02, 38.37],
  lesvos: [26.28, 39.18],
  samos: [26.9, 37.74],
  ikaria: [26.1, 37.6],
  limnos: [25.22, 39.9],
  thassos: [24.68, 40.68],
  athens: [23.73, 37.98],
  sounion: [24.03, 37.65],
  aegina: [23.45, 37.75],
  hydra: [23.47, 37.33],
  poros: [23.45, 37.52],
  spetses: [23.15, 37.26],
  chania: [24.02, 35.51],
  rethymno: [24.48, 35.37],
  elounda: [25.72, 35.26],
  rhodes: [28.0, 36.25],
  patmos: [26.55, 37.32],
  kos: [27.15, 36.85],
  symi: [27.83, 36.6],
  nafplio: [22.8, 37.57],
  messinia: [21.85, 36.98],
};

/** Open-water positions for region labels on the Wikimedia coastline. */
export const REGION_ANCHORS: Record<RegionSlug, LonLat> = {
  cyclades: [25.15, 36.05],
  "ionian-islands": [19.55, 38.35],
  "north-aegean-islands": [27.15, 39.55],
  attica: [23.15, 36.55],
  crete: [24.95, 34.8],
  dodecanese: [28.55, 37.05],
  peloponnese: [21.35, 36.15],
};

/** Shorter than navLabel, because map labels have to fit in open water. */
export const REGION_MAP_LABELS: Record<RegionSlug, string> = {
  cyclades: "Cyclades",
  "ionian-islands": "Ionian",
  "north-aegean-islands": "N. Aegean",
  attica: "Saronic",
  crete: "Crete",
  dodecanese: "Dodecanese",
  peloponnese: "Peloponnese",
};
