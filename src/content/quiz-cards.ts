import { routes } from "@/lib/paths";
import { islandsBySlug } from "./islands";
import { PLANNER_TYPES } from "./quiz";

export type QuizIslandCard = {
  slug: string;
  name: string;
  heroImage: string;
  href: string;
};

const REFERENCED = [...new Set(PLANNER_TYPES.flatMap((type) => type.islands))];

/** Just the four fields the result cards render, so the quiz does not drag the
 *  island registry into the client bundle. */
export const QUIZ_ISLAND_CARDS: Record<string, QuizIslandCard> =
  Object.fromEntries(
    REFERENCED.flatMap((slug) => {
      const island = islandsBySlug[slug];
      if (!island) return [];
      return [
        [
          slug,
          {
            slug,
            name: island.name,
            heroImage: island.heroImage,
            href: routes.island(slug),
          },
        ],
      ];
    }),
  );
