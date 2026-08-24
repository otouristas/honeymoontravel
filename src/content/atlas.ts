import { routes } from "@/lib/paths";
import { ISLANDS } from "./islands";
import { ISLAND_COORDS, REGION_ANCHORS, REGION_MAP_LABELS } from "./map";
import { REGIONS } from "./regions";
import type { RegionSlug } from "./types";

export type AtlasIsland = {
  slug: string;
  name: string;
  href: string;
  /** Null for islands we write about but do not plot. */
  coord: [number, number] | null;
};

export type AtlasRegion = {
  slug: RegionSlug;
  title: string;
  navLabel: string;
  mapLabel: string;
  tagline: string;
  href: string;
  anchor: [number, number];
  islands: AtlasIsland[];
};

/** The atlas only needs names, hrefs and coordinates. Deriving that here keeps
 *  the 220KB of island prose on the server. */
export const ATLAS: AtlasRegion[] = REGIONS.map((region) => ({
  slug: region.slug,
  title: region.title,
  navLabel: region.navLabel,
  mapLabel: REGION_MAP_LABELS[region.slug],
  tagline: region.tagline,
  href: routes.region(region.slug),
  anchor: REGION_ANCHORS[region.slug],
  islands: ISLANDS.filter((island) => island.region === region.slug).map(
    (island) => ({
      slug: island.slug,
      name: island.name,
      href: routes.island(island.slug),
      coord: ISLAND_COORDS[island.slug] ?? null,
    }),
  ),
}));
