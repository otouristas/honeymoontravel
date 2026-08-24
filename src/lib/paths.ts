import { SITE } from "@/content/site";

/** Canonical internal paths never carry a trailing slash. */
export function path(...parts: string[]): string {
  const joined = parts
    .filter(Boolean)
    .map((p) => p.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");
  return joined ? `/${joined}` : "/";
}

export const routes = {
  home: "/",
  about: "/about-us",
  planning: "/planning-a-honeymoon-to-greece",
  contact: "/contact",
  destinations: "/destinations",
  itineraries: "/itineraries",
  experiences: "/experiences",
  guides: "/guides",
  journal: "/journal",
  press: "/press",
  faq: "/faq",
  audiences: "/for",
  stories: "/stories",
  quiz: "/what-type-of-honeymoon-planner-are-you",
  brochure: "/download-brochure",
  privacy: "/privacy",
  cookies: "/cookies",
  terms: "/terms",
  thankYou: "/thank-you",
  region: (slug: string) => path(slug),
  island: (slug: string) => path("honeymoon", slug),
  itinerary: (slug: string) => path("itineraries", slug),
  experience: (slug: string) => path("experiences", slug),
  guide: (slug: string) => path("guides", slug),
  compare: (slug: string) => path("compare", slug),
  audience: (slug: string) => path("for", slug),
  journalPost: (slug: string) => path("journal", slug),
  story: (slug: string) => path("stories", slug),
  plannerType: (slug: string) => path(slug),
} as const;

export function absoluteUrl(pathname: string): string {
  const clean = pathname === "/" ? "" : path(pathname);
  return `${SITE.domain}${clean}`;
}
