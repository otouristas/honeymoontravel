"use client";

import Link from "next/link";
import { useState } from "react";
import type { AtlasRegion } from "@/content/atlas";
import { LANDMASSES } from "@/content/map";
import type { RegionSlug } from "@/content/types";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  heartConstellation,
  polygon,
  project,
} from "@/lib/geo";
import { routes } from "@/lib/paths";

const LAND_PATHS = LANDMASSES.map((m) => ({ id: m.id, d: polygon(m.points) }));

/** Centred on the open Aegean, east of Attica, so the outline threads between
 *  the Cyclades and the Dodecanese rather than sitting on the mainland. */
const HEART = heartConstellation({
  center: project([25.9, 37.3]),
  width: 246,
});

export default function IslandAtlasClient({
  regions,
}: {
  regions: AtlasRegion[];
}) {
  const [active, setActive] = useState<RegionSlug | null>(null);

  const activeRegion = regions.find((r) => r.slug === active);
  const total = regions.reduce((n, r) => n + r.islands.length, 0);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Desktop: the map. Offset from the sticky header so region labels near
          the top of the SVG stay clickable when the section is scrolled to. */}
      <div className="hidden scroll-mt-28 md:grid md:grid-cols-[1.35fr_1fr] md:items-start md:gap-10">
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          role="img"
          aria-label={`Map of the Greek regions we plan honeymoons in, with a heart traced across the Aegean`}
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

          <g
            className="pointer-events-none transition-opacity duration-500"
            opacity={active ? 0.3 : 1}
          >
            <path
              d={HEART.d}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.42}
              className="atlas-heart-line"
              style={{ "--dash": HEART.length } as React.CSSProperties}
            />
            {HEART.nodes.map(([x, y], i) => (
              <rect
                key={`${x}-${y}`}
                x={x - 2.4}
                y={y - 2.4}
                width={4.8}
                height={4.8}
                transform={`rotate(45 ${x} ${y})`}
                fill="var(--accent)"
                className="atlas-heart-node"
                style={{ animationDelay: `${900 + i * 110}ms` }}
              />
            ))}
          </g>

          {regions.flatMap((region) =>
            region.islands.map((island) => {
              if (!island.coord) return null;
              const [x, y] = project(island.coord);
              const highlighted = active !== null && region.slug === active;
              const dimmed = active !== null && region.slug !== active;
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
            }),
          )}

          {regions.map((region) => {
            const [x, y] = project(region.anchor);
            const isActive = active === region.slug;
            return (
              <Link
                key={region.slug}
                href={region.href}
                aria-label={`${region.title} — ${region.islands.length} destinations`}
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
                  {region.mapLabel}
                </text>
              </Link>
            );
          })}
        </svg>

        <div>
          {activeRegion ? (
            <div key={activeRegion.slug} className="animate-fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">
                {activeRegion.islands.length} destinations
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink">
                {activeRegion.title}
              </h3>
              <p className="mt-4 text-brand-ink/70">{activeRegion.tagline}</p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {activeRegion.islands.map((island) => (
                  <li key={island.slug}>
                    <Link
                      href={island.href}
                      className="text-brand-ink/75 underline-offset-4 hover:text-brand-teal hover:underline"
                    >
                      {island.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={activeRegion.href} className="btn-ghost mt-8 inline-block">
                Explore {activeRegion.navLabel}
              </Link>
            </div>
          ) : (
            <div>
              <p className="font-script text-4xl text-brand-teal">the atlas</p>
              <h3 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink">
                {total} places, seven seas
              </h3>
              <p className="mt-5 text-brand-ink/70">
                Hover a region to see the islands we plan there. Every one has its own
                page, written after walking it — not a list of beaches, but who it
                suits, how many nights, and who should go somewhere else.
              </p>
              <p className="mt-4 text-sm italic text-brand-ink/45">
                Join the Aegean together and it draws a heart. We noticed late, and
                have not stopped seeing it since.
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
        {regions.map((region) => (
          <div key={region.slug} className="border-t border-brand-teal/20 pt-5">
            <Link
              href={region.href}
              className="font-display text-2xl tracking-[0.05em] text-brand-ink"
            >
              {region.title}
            </Link>
            <p className="mt-2 text-sm text-brand-ink/60">{region.tagline}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {region.islands.map((island) => (
                <li key={island.slug}>
                  <Link
                    href={island.href}
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
