import type { Island, RegionSlug } from "../types";
import { ATTICA_ISLANDS } from "./attica";
import { CRETE_ISLANDS } from "./crete";
import { CYCLADES_ISLANDS } from "./cyclades";
import { DODECANESE_ISLANDS } from "./dodecanese";
import { IONIAN_ISLANDS } from "./ionian";
import { NORTH_AEGEAN_ISLANDS } from "./north-aegean";
import { PELOPONNESE_ISLANDS } from "./peloponnese";

export const ISLANDS: Island[] = [
  ...CYCLADES_ISLANDS,
  ...IONIAN_ISLANDS,
  ...NORTH_AEGEAN_ISLANDS,
  ...ATTICA_ISLANDS,
  ...CRETE_ISLANDS,
  ...DODECANESE_ISLANDS,
  ...PELOPONNESE_ISLANDS,
];

export const islandsBySlug: Record<string, Island> = Object.fromEntries(
  ISLANDS.map((i) => [i.slug, i]),
);

export function islandsInRegion(region: RegionSlug): Island[] {
  return ISLANDS.filter((i) => i.region === region);
}

export function getIsland(slug: string): Island | undefined {
  return islandsBySlug[slug];
}

export function islandNames(slugs: string[]): string[] {
  return slugs.map((s) => islandsBySlug[s]?.name ?? s);
}
