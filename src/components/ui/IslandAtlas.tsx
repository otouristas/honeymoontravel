"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ISLAND_COORDS,
  LANDMASSES,
  REGION_ANCHORS,
  REGION_MAP_LABELS,
} from "@/content/map";
import { REGIONS } from "@/content/regions";
import { ISLANDS } from "@/content/islands";
import type { RegionSlug } from "@/content/types";
import { MAP_HEIGHT, MAP_WIDTH, polygon, project } from "@/lib/geo";
import { routes } from "@/lib/paths";

const LAND_PATHS = LANDMASSES.map((m) => ({ id: m.id, d: polygon(m.points) }));

const REGION_ISLANDS = REGIONS.map((region) => ({
  region,
  islands: ISLANDS.filter((i) => i.region === region.slug),
}));

export default function IslandAtlas() {
  const [active, setActive] = useState<RegionSlug | null>(null);

  const activeRegion = REGION_ISLANDS.find((r) => r.region.slug === active);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Desktop: the map. Offset from the sticky header so region labels near
          the top of the SVG stay clickable when the section is scrolled to. */}
      <div className="hidden scroll-mt-28 md:grid md:grid-cols-[1.35fr_1fr] md:items-start md:gap-10">
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          role="img"
          aria-label="Map of the Greek regions we plan honeymoons in"
          className="w-full"
        >
          <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="var(--cream)" />

          {LAND_PATHS.map((land) => (
            <path
              key={land.id}
              d={land.d}
              fill="var(--color-brand-teal-soft, #82c0c7)"
              fillOpacity={0.35}
              stroke="var(--accent)"
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          ))}

          {ISLANDS.map((island) => {
            const coord = ISLAND_COORDS[island.slug];
            if (!coord) return null;
            const [x, y] = project(coord);
            const highlighted = active !== null && island.region === active;
            const dimmed = active !== null && island.region !== active;
            return (
              <rect
                key={island.slug}
                x={x - 3.5}
                y={y - 3.5}
                width={7}
                height={7}
                transform={`rotate(45 ${x} ${y})`}
                fill={highlighted ? "var(--accent-dark)" : "var(--ink)"}
                opacity={dimmed ? 0.18 : 0.85}
                stroke="var(--cream)"
                strokeWidth={1}
                className="transition-opacity duration-300"
              />
            );
          })}

          {REGION_ISLANDS.map(({ region, islands }) => {
            const [x, y] = project(REGION_ANCHORS[region.slug]);
            const isActive = active === region.slug;
            return (
              <Link
                key={region.slug}
                href={routes.region(region.slug)}
                aria-label={`${region.title} — ${islands.length} destinations`}
                onMouseEnter={() => setActive(region.slug)}
                onFocus={() => setActive(region.slug)}
                className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-brand-teal"
              >
                <rect
                  x={x - 56}
                  y={y - 15}
                  width={112}
                  height={22}
                  fill="transparent"
                  strokeWidth={1.5}
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  className="pointer-events-none font-display"
                  fontSize={14}
                  letterSpacing={1.4}
                  fill={isActive ? "var(--accent-dark)" : "var(--ink)"}
                  opacity={isActive ? 1 : 0.6}
                >
                  {REGION_MAP_LABELS[region.slug]}
                </text>
              </Link>
            );
          })}
        </svg>

        <div>
          {activeRegion ? (
            <div key={activeRegion.region.slug} className="animate-fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">
                {activeRegion.islands.length} destinations
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink">
                {activeRegion.region.title}
              </h3>
              <p className="mt-4 text-brand-ink/70">{activeRegion.region.tagline}</p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {activeRegion.islands.map((island) => (
                  <li key={island.slug}>
                    <Link
                      href={routes.island(island.slug)}
                      className="text-brand-ink/75 underline-offset-4 hover:text-brand-teal hover:underline"
                    >
                      {island.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={routes.region(activeRegion.region.slug)}
                className="btn-ghost mt-8 inline-block"
              >
                Explore {activeRegion.region.navLabel}
              </Link>
            </div>
          ) : (
            <div>
              <p className="font-script text-4xl text-brand-teal">the atlas</p>
              <h3 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink">
                Thirty-nine places, seven seas
              </h3>
              <p className="mt-5 text-brand-ink/70">
                Hover a region to see the islands we plan there. Every one has its own
                page, written after walking it — not a list of beaches, but who it
                suits, how many nights, and who should go somewhere else.
              </p>
              <Link href={routes.destinations} className="btn-ghost mt-8 inline-block">
                All destinations
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: a vertical index */}
      <div className="space-y-8 md:hidden">
        {REGION_ISLANDS.map(({ region, islands }) => (
          <div key={region.slug} className="border-t border-brand-teal/20 pt-5">
            <Link
              href={routes.region(region.slug)}
              className="font-display text-2xl tracking-[0.05em] text-brand-ink"
            >
              {region.title}
            </Link>
            <p className="mt-2 text-sm text-brand-ink/60">{region.tagline}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {islands.map((island) => (
                <li key={island.slug}>
                  <Link
                    href={routes.island(island.slug)}
                    className="text-sm text-brand-teal underline-offset-4 hover:underline"
                  >
                    {island.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
