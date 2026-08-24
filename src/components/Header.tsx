"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";
import { DESTINATION_NAV, PRIMARY_NAV, UTILITY_NAV, site } from "@/content/site";
import { ISLANDS } from "@/content/islands";
import { routes } from "@/lib/paths";

const FEATURED_ISLANDS = [
  "santorini",
  "mykonos",
  "milos",
  "paros",
  "naxos",
  "chania",
  "corfu",
  "hydra",
];

const islandLinks = FEATURED_ISLANDS.map((slug) =>
  ISLANDS.find((i) => i.slug === slug),
).filter((i): i is (typeof ISLANDS)[number] => Boolean(i));

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-teal/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-4">
          <Logo variant="icon" priority />
          <Logo variant="wordmark" priority className="justify-self-center" />
          <button
            type="button"
            className="justify-self-end text-right"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-display text-[11px] uppercase tracking-[0.28em] text-brand-ink">
              Menu
            </span>
            <span className="mt-1.5 flex w-8 flex-col items-end gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 bg-brand-ink transition ${open ? "w-8 translate-y-2 rotate-45" : "w-8"}`}
              />
              <span className={`block h-0.5 bg-brand-ink transition ${open ? "opacity-0" : "w-6"}`} />
              <span
                className={`block h-0.5 bg-brand-ink transition ${open ? "w-8 -translate-y-2 -rotate-45" : "w-4"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-[60] bg-brand-ink/95 text-white transition duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-5xl flex-col px-6 py-8 md:px-10">
          <div className="mb-8 flex items-center justify-between">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-white/70">
              myHoneymoon
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-display text-xs uppercase tracking-[0.28em] text-white"
            >
              Close
            </button>
          </div>

          <div className="grid flex-1 gap-10 overflow-y-auto pb-10 md:grid-cols-3 md:gap-12 md:overflow-y-auto">
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-brand-teal-soft">
                Main Menu
              </p>
              <ul className="space-y-3">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl tracking-wide text-white transition hover:text-brand-teal-soft md:text-3xl"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-brand-teal-soft">
                Regions
              </p>
              <ul className="space-y-2">
                {DESTINATION_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-xl tracking-wide text-white/90 transition hover:text-brand-teal-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mb-3 mt-8 font-display text-xs uppercase tracking-[0.28em] text-brand-teal-soft">
                Popular islands
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {islandLinks.map((island) => (
                  <li key={island.slug}>
                    <Link
                      href={routes.island(island.slug)}
                      onClick={() => setOpen(false)}
                      className="text-sm text-white/70 transition hover:text-brand-teal-soft"
                    >
                      {island.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-brand-teal-soft">
                What&apos;s your planning type?
              </p>
              <Link
                href="/what-type-of-honeymoon-planner-are-you"
                onClick={() => setOpen(false)}
                className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-brand-ink"
              >
                Take the Honeymoon Quiz
              </Link>

              <p className="mb-3 mt-10 font-display text-xs uppercase tracking-[0.28em] text-brand-teal-soft">
                More
              </p>
              <ul className="space-y-2">
                {UTILITY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm text-white/75 transition hover:text-brand-teal-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/75">
            <a href={`tel:${site.phoneTel}`} className="hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <SocialIcons
              facebook={site.socials.facebook}
              instagram={site.socials.instagram}
              className="border-white/30 text-white hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
