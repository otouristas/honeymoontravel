import type { MetadataRoute } from "next";
import { AUDIENCES } from "@/content/audiences";
import { COMPARES } from "@/content/compares";
import { EXPERIENCES } from "@/content/experiences";
import { GUIDES } from "@/content/guides";
import { ISLANDS } from "@/content/islands";
import { ITINERARIES } from "@/content/itineraries";
import { JOURNAL } from "@/content/journal";
import { PLANNER_TYPES } from "@/content/quiz";
import { REGIONS } from "@/content/regions";
import { STORIES } from "@/content/stories";
import { absoluteUrl, routes } from "@/lib/paths";

type Entry = MetadataRoute.Sitemap[number];

function entry(
  pathname: string,
  updatedAt: string,
  priority: number,
  image?: string,
): Entry {
  return {
    url: absoluteUrl(pathname),
    lastModified: new Date(updatedAt),
    changeFrequency: priority >= 0.8 ? "weekly" : "monthly",
    priority,
    ...(image ? { images: [image] } : {}),
  };
}

/** Newest updatedAt in a registry, so a hub's date reflects its children. */
function latest(dates: string[]): string {
  return dates.slice().sort().at(-1) ?? new Date().toISOString().slice(0, 10);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const islandDates = ISLANDS.map((i) => i.updatedAt);
  const guideDates = GUIDES.map((g) => g.updatedAt);
  const journalDates = JOURNAL.map((p) => p.updatedAt);

  const hubs: Entry[] = [
    entry("/", latest(islandDates), 1),
    entry(routes.destinations, latest(islandDates), 0.9),
    entry(routes.itineraries, latest(ITINERARIES.map((i) => i.updatedAt)), 0.9),
    entry(routes.experiences, latest(EXPERIENCES.map((e) => e.updatedAt)), 0.8),
    entry(routes.guides, latest(guideDates), 0.8),
    entry(routes.journal, latest(journalDates), 0.7),
    entry(routes.audiences, latest(AUDIENCES.map((a) => a.updatedAt)), 0.7),
    entry(routes.stories, latest(STORIES.map((s) => s.updatedAt)), 0.6),
    entry(routes.faq, latest(guideDates), 0.7),
    entry(routes.about, latest(islandDates), 0.8),
    entry(routes.planning, latest(islandDates), 0.8),
    entry(routes.contact, latest(islandDates), 0.8),
    entry(routes.quiz, latest(PLANNER_TYPES.map((t) => t.updatedAt)), 0.8),
    entry(routes.press, latest(islandDates), 0.5),
    entry(routes.brochure, latest(islandDates), 0.5),
    entry(routes.privacy, "2026-08-01", 0.2),
    entry(routes.cookies, "2026-08-01", 0.2),
    entry(routes.terms, "2026-08-01", 0.2),
  ];

  const regions = REGIONS.map((r) =>
    entry(routes.region(r.slug), r.updatedAt, 0.9, r.heroImage),
  );

  const islands = ISLANDS.map((i) =>
    entry(routes.island(i.slug), i.updatedAt, 0.9, i.heroImage),
  );

  const itineraries = ITINERARIES.map((i) =>
    entry(routes.itinerary(i.slug), i.updatedAt, 0.8, i.heroImage),
  );

  const experiences = EXPERIENCES.map((e) =>
    entry(routes.experience(e.slug), e.updatedAt, 0.7, e.heroImage),
  );

  const guides = GUIDES.map((g) =>
    entry(routes.guide(g.slug), g.updatedAt, 0.8, g.heroImage),
  );

  const compares = COMPARES.map((c) =>
    entry(routes.compare(c.slug), c.updatedAt, 0.8, c.left.image),
  );

  const audiences = AUDIENCES.map((a) =>
    entry(routes.audience(a.slug), a.updatedAt, 0.7, a.heroImage),
  );

  const plannerTypes = PLANNER_TYPES.map((t) =>
    entry(routes.plannerType(t.slug), t.updatedAt, 0.7, t.heroImage),
  );

  const journal = JOURNAL.map((p) =>
    entry(routes.journalPost(p.slug), p.updatedAt, 0.6, p.heroImage),
  );

  const stories = STORIES.map((s) =>
    entry(routes.story(s.slug), s.updatedAt, 0.5, s.heroImage),
  );

  return [
    ...hubs,
    ...regions,
    ...islands,
    ...itineraries,
    ...experiences,
    ...guides,
    ...compares,
    ...audiences,
    ...plannerTypes,
    ...journal,
    ...stories,
  ];
}
