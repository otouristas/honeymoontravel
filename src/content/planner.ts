import type { Planner } from "./types";
import { SITE } from "./site";

export const PLANNER: Planner = {
  name: "Angeliki",
  jobTitle: "Honeymoon Planner & Licensed Premium Tour Guide",
  credential: "Licensed premium tour guide, Greece",
  yearsExperience: 20,
  languages: ["English", "Greek"],
  portrait: `${SITE.assets.base}/my-honeymoon-santorini-door.jpg`,
  bio: [
    "I'm Angeliki, an expert honeymoon planner and licensed premium tour guide in Greece. I've got more than 20 years' experience in the industry and have lived in a number of places across my beautiful home country.",
    "Since I was a child, travel has been my passion. Now it's my mission to help newlyweds plan a honeymoon that's as memorable and personal as the wedding itself.",
    "I don't sell packages. I walk the islands, I know which cave suite has a wall of rock where the view should be, which harbour is unusable in an August meltemi, and which taverna will quietly lay a table for two on the sand. That knowledge is the whole service.",
  ],
  sameAs: [SITE.facebook, SITE.instagram, SITE.pinterest],
};

export const PLANNER_ID = `${SITE.domain}/about-us#angeliki`;
export const ORGANIZATION_ID = `${SITE.domain}/#organization`;
export const WEBSITE_ID = `${SITE.domain}/#website`;
