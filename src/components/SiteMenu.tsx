"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";
import type { MenuLink, SiteMenuModel } from "@/content/nav";
import { SITE, site } from "@/content/site";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0 opacity-35"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

/** The marketing indicator: a count, a promise or a price signal. */
function Indicator({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap border px-2 py-[3px] font-display text-[10px] uppercase tracking-[0.16em] ${
        accent
          ? "border-brand-teal-soft/50 bg-brand-teal-soft/10 text-brand-teal-soft"
          : "border-white/20 text-white/55"
      }`}
    >
      {children}
    </span>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-display text-[10px] uppercase tracking-[0.28em] text-brand-teal-soft ${className}`}
    >
      {children}
    </p>
  );
}

/** Full-bleed tappable row. Dividers run edge to edge; the row's own padding
 *  keeps the content clear of the screen edges and the notch. */
function MenuRow({
  link,
  onNavigate,
  current,
  size = "lg",
}: {
  link: MenuLink;
  onNavigate: () => void;
  current: boolean;
  size?: "lg" | "sm";
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={`flex min-h-[64px] items-center gap-4 border-b border-white/10 px-5 py-3.5 transition active:bg-white/[0.06] ${
        current ? "bg-white/[0.05]" : ""
      }`}
    >
      <span className="min-w-0 flex-1">
        <span
          className={`block font-display tracking-wide ${
            size === "lg" ? "text-[26px] leading-tight" : "text-lg"
          } ${current ? "text-brand-teal-soft" : "text-white"}`}
        >
          {link.label}
        </span>
        {link.hint ? (
          <span className="mt-1 block text-[13px] leading-snug text-white/45">
            {link.hint}
          </span>
        ) : null}
      </span>
      {link.badge ? <Indicator accent={link.accent}>{link.badge}</Indicator> : null}
      <Chevron />
    </Link>
  );
}

export function SiteMenu({ menu }: { menu: SiteMenuModel }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href;
  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-teal/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-4">
          <Logo variant="icon" priority />
          <Logo variant="wordmark" priority className="justify-self-center" />
          <button
            ref={toggleRef}
            type="button"
            className="justify-self-end text-right"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-display text-[11px] uppercase tracking-[0.28em] text-brand-ink">
              Menu
            </span>
            <span className="mt-1.5 flex w-8 flex-col items-end gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 bg-brand-ink transition ${open ? "w-8 translate-y-2 rotate-45" : "w-8"}`}
              />
              <span
                className={`block h-0.5 bg-brand-ink transition ${open ? "opacity-0" : "w-6"}`}
              />
              <span
                className={`block h-0.5 bg-brand-ink transition ${open ? "w-8 -translate-y-2 -rotate-45" : "w-4"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        inert={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[70] bg-brand-ink text-white transition duration-400 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[100dvh] flex-col">
          {/* Bar: edge to edge, above the notch on iOS. */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/12 px-5 pb-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] md:px-10 md:py-5">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-white/70">
              myHoneymoon
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                close();
                toggleRef.current?.focus();
              }}
              className="-mr-2 px-2 py-1 font-display text-xs uppercase tracking-[0.28em] text-white"
            >
              Close
            </button>
          </div>

          {/* Marketing indicators: the credibility strip. */}
          <ul className="no-scrollbar flex shrink-0 items-center gap-3 overflow-x-auto border-b border-white/12 px-5 py-2.5 md:justify-center md:px-10">
            {menu.proof.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/50"
              >
                <span aria-hidden className="h-1 w-1 rotate-45 bg-brand-teal-soft" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            {/* ---------- Mobile: full-bleed rows ---------- */}
            <div className="md:hidden">
              <nav aria-label="Main">
                {menu.primary.map((link) => (
                  <MenuRow
                    key={link.href}
                    link={link}
                    onNavigate={close}
                    current={isCurrent(link.href)}
                  />
                ))}
              </nav>

              <SectionLabel className="px-5 pb-3 pt-7">Regions</SectionLabel>
              <nav aria-label="Regions" className="grid grid-cols-2 border-t border-white/10">
                {menu.regions.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`flex min-h-[76px] flex-col justify-center gap-1 border-b border-white/10 px-5 py-3 transition active:bg-white/[0.06] ${
                      index % 2 === 0 ? "border-r border-white/10" : ""
                    } ${isCurrent(link.href) ? "bg-white/[0.05]" : ""}`}
                  >
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-base leading-tight tracking-wide text-white">
                        {link.label}
                      </span>
                      <span className="font-display text-[11px] text-brand-teal-soft">
                        {link.badge}
                      </span>
                    </span>
                    <span className="text-[12px] leading-snug text-white/40">
                      {link.hint}
                    </span>
                  </Link>
                ))}
              </nav>

              <SectionLabel className="px-5 pb-3 pt-7">Popular islands</SectionLabel>
              <ul className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-1">
                {menu.islands.map((link) => (
                  <li key={link.href} className="shrink-0">
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block border border-white/20 px-3.5 py-2 text-sm text-white/80 transition active:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <SectionLabel className="px-5 pb-3 pt-8">More</SectionLabel>
              <nav aria-label="More" className="border-t border-white/10">
                {menu.utility.map((link) => (
                  <MenuRow
                    key={link.href}
                    link={link}
                    onNavigate={close}
                    current={isCurrent(link.href)}
                    size="sm"
                  />
                ))}
              </nav>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-white/70">
                <a href={SITE.phoneHref} className="active:text-white">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="active:text-white">
                  {site.email}
                </a>
                <SocialIcons
                  facebook={site.socials.facebook}
                  instagram={site.socials.instagram}
                  className="border-white/30 text-white"
                />
              </div>
            </div>

            {/* ---------- Desktop: three columns ---------- */}
            <div className="mx-auto hidden max-w-5xl gap-12 px-10 py-10 md:grid md:grid-cols-3">
              <div>
                <SectionLabel className="mb-4">Main Menu</SectionLabel>
                <ul className="space-y-3">
                  {menu.primary.map((link) => (
                    <li key={link.href} className="flex items-center gap-3">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`font-display text-3xl tracking-wide transition hover:text-brand-teal-soft ${
                          isCurrent(link.href) ? "text-brand-teal-soft" : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.badge ? (
                        <Indicator accent={link.accent}>{link.badge}</Indicator>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel className="mb-4">Regions</SectionLabel>
                <ul className="space-y-2">
                  {menu.regions.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`font-display text-xl tracking-wide transition hover:text-brand-teal-soft ${
                          isCurrent(link.href) ? "text-brand-teal-soft" : "text-white/90"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <span className="font-display text-xs text-white/40">
                        {link.badge}
                      </span>
                    </li>
                  ))}
                </ul>

                <SectionLabel className="mb-3 mt-8">Popular islands</SectionLabel>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {menu.islands.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className="text-sm text-white/70 transition hover:text-brand-teal-soft"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel className="mb-4">
                  What&apos;s your planning type?
                </SectionLabel>
                <Link
                  href={menu.utility[0].href}
                  onClick={close}
                  className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-brand-ink"
                >
                  Take the Honeymoon Quiz
                </Link>

                <SectionLabel className="mb-3 mt-10">More</SectionLabel>
                <ul className="space-y-2">
                  {menu.utility.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`text-sm transition hover:text-brand-teal-soft ${
                          isCurrent(link.href) ? "text-brand-teal-soft" : "text-white/75"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.badge ? (
                        <span className="font-display text-[10px] uppercase tracking-[0.16em] text-white/35">
                          {link.badge}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/15 pt-6 text-sm text-white/75">
                  <a href={SITE.phoneHref} className="hover:text-white">
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
          </div>

          {/* Conversion bar, pinned edge to edge above the home indicator. */}
          <div className="grid shrink-0 grid-cols-2 border-t border-white/15 pb-[env(safe-area-inset-bottom)] md:hidden">
            <a
              href={SITE.phoneHref}
              className="py-4 text-center font-display text-[11px] uppercase tracking-[0.24em] text-white active:bg-white/10"
            >
              Call Angeliki
            </a>
            <Link
              href="/contact"
              onClick={close}
              className="border-l border-white/15 bg-brand-teal py-4 text-center font-display text-[11px] uppercase tracking-[0.24em] text-white active:bg-brand-teal/80"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
