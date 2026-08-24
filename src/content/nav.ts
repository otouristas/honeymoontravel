import { routes } from "@/lib/paths";
import { COMPARES } from "./compares";
import { EXPERIENCES } from "./experiences";
import { ALL_FAQS } from "./faq";
import { GUIDES } from "./guides";
import { ISLANDS } from "./islands";
import { ITINERARIES } from "./itineraries";
import { JOURNAL } from "./journal";
import { PLANNER } from "./planner";
import { REGIONS } from "./regions";
import { PLANNING_STEPS } from "./site";

export type MenuLink = {
  href: string;
  label: string;
  /** The marketing indicator shown beside the label — a count, a promise or a cost. */
  badge?: string;
  /** Draws the indicator in the accent colour, for the rows that drive enquiries. */
  accent?: boolean;
  /** One line of supporting copy, shown under the label on mobile. */
  hint?: string;
};

export type SiteMenuModel = {
  primary: MenuLink[];
  regions: MenuLink[];
  islands: MenuLink[];
  utility: MenuLink[];
  /** Credibility strip across the top of the menu. */
  proof: string[];
};

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

function islandsIn(regionSlug: string): number {
  return ISLANDS.filter((island) => island.region === regionSlug).length;
}

/** Derived once at module scope on the server, so the content registries never
 *  reach the client bundle — only these few hundred bytes of labels do. */
export const SITE_MENU: SiteMenuModel = {
  primary: [
    {
      href: routes.destinations,
      label: "Destinations",
      badge: `${ISLANDS.length} islands`,
      hint: "Seven regions, and who each one suits",
    },
    {
      href: routes.itineraries,
      label: "Itineraries",
      badge: `${ITINERARIES.length} routes`,
      hint: "Seven to fourteen nights, night by night",
    },
    {
      href: routes.planning,
      label: "Planning Process",
      badge: `${PLANNING_STEPS.length} steps`,
      hint: "How we work, and what it costs",
    },
    {
      href: routes.guides,
      label: "Guides",
      badge: `${GUIDES.length + COMPARES.length} answers`,
      hint: "Costs, timing and honest comparisons",
    },
    {
      href: routes.journal,
      label: "Journal",
      badge: `${JOURNAL.length} essays`,
      hint: "Twenty years of unfiltered opinion",
    },
    {
      href: routes.about,
      label: "About Us",
      badge: PLANNER.name,
      hint: `${PLANNER.credential}, ${PLANNER.yearsExperience}+ years`,
    },
    {
      href: routes.contact,
      label: "Contact",
      badge: "Reply in 1 day",
      accent: true,
      hint: "Tell us your dates and we will be honest",
    },
  ],

  regions: REGIONS.map((region) => ({
    href: routes.region(region.slug),
    label: region.navLabel,
    badge: `${islandsIn(region.slug)}`,
    hint: region.tagline,
  })),

  islands: FEATURED_ISLANDS.map((slug) => {
    const island = ISLANDS.find((i) => i.slug === slug);
    return {
      href: routes.island(slug),
      label: island?.name ?? slug,
    };
  }).filter((link) => link.label),

  utility: [
    {
      href: routes.quiz,
      label: "Planner Quiz",
      badge: "2 min",
      accent: true,
      hint: "Which of four couples are you?",
    },
    {
      href: routes.experiences,
      label: "Experiences",
      badge: `${EXPERIENCES.length}`,
      hint: "Sailing, wine, private guiding",
    },
    {
      href: routes.faq,
      label: "Questions",
      badge: `${ALL_FAQS.length}`,
      hint: "Everything couples actually ask",
    },
    {
      href: routes.brochure,
      label: "Brochure",
      badge: "No email",
      hint: "Print it or save it as a PDF",
    },
    {
      href: routes.press,
      label: "Press",
      hint: "Media enquiries and facts",
    },
  ],

  // Kept short so the strip fits a 390px screen without truncating.
  proof: [
    "Licensed Greek guide",
    `${PLANNER.yearsExperience}+ years`,
    "No packages",
  ],
};
