"use client";

import Link from "next/link";
import { useState } from "react";
import type { AtlasRegion } from "@/content/atlas";
import type { RegionSlug } from "@/content/types";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  heartConstellation,
  project,
} from "@/lib/geo";
import { routes } from "@/lib/paths";

/** Sits over the Cyclades, in open water, so the outline is a detail
 *  on the Aegean rather than a sticker on the mainland. */
const HEART = heartConstellation({
  center: project([25.35, 36.95]),
  width: 168,
  nodeCount: 12,
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
      <div className="hidden scroll-mt-28 md:grid md:grid-cols-[1.45fr_1fr] md:items-start md:gap-10">
        <div>
          <div className="relative">
            {/* Professional coastline. Overlay SVG shares this viewBox so
                markers sit on the geography rather than a cartoon outline.
                next/image does not usefully compress SVG, so this is a
                static asset. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/maps/greece.svg"
              alt=""
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              className="h-auto w-full"
            />
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              role="img"
              aria-label="Map of Greece showing the islands we plan honeymoons on"
              className="absolute inset-0 h-full w-full"
            >
              <g
                className="pointer-events-none transition-opacity duration-500"
                opacity={active ? 0.22 : 0.85}
              >
                <path
                  d={HEART.d}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth={1.1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.55}
                  className="atlas-heart-line"
                  style={{ "--dash": HEART.length } as React.CSSProperties}
                />
                {HEART.nodes.map(([x, y], i) => (
                  <circle
                    key={`${x}-${y}`}
                    cx={x}
                    cy={y}
                    r={2.2}
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
                    <circle
                      key={island.slug}
                      cx={x}
                      cy={y}
                      r={highlighted ? 4.2 : 3.2}
                      fill={highlighted ? "var(--accent-dark)" : "var(--ink)"}
                      opacity={dimmed ? 0.2 : 0.92}
                      stroke="var(--cream)"
                      strokeWidth={1.1}
                      className="transition-all duration-300"
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
                      x={x - 52}
                      y={y - 14}
                      width={104}
                      height={20}
                      fill="transparent"
                    />
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      className="pointer-events-none font-display"
                      fontSize={13}
                      letterSpacing={1.3}
                      fill={isActive ? "var(--accent-dark)" : "var(--ink)"}
                      opacity={isActive ? 1 : 0.62}
                    >
                      {region.mapLabel}
                    </text>
                  </Link>
                );
              })}
            </svg>
          </div>
          <p className="mt-2 text-[10px] tracking-wide text-brand-ink/35">
            Coastline after{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Greece_location_map.svg"
              className="underline decoration-brand-ink/20 underline-offset-2 hover:text-brand-ink/55"
            >
              Lencer / Wikimedia
            </a>
            , CC BY-SA 3.0
          </p>
        </div>

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
                The Aegean already knows the shape. We only traced it.
              </p>
              <Link href={routes.destinations} className="btn-ghost mt-8 inline-block">
                All destinations
              </Link>
            </div>
          )}
        </div>
      </div>

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
