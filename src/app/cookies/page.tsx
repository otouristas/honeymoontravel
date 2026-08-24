import type { Metadata } from "next";
import LegalTemplate from "@/components/templates/LegalTemplate";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

const UPDATED = "2026-08-01";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Which cookies and similar technologies this site uses, what each one does, and how to switch them off in your browser.",
  pathname: routes.cookies,
});

export default function Page() {
  return (
    <LegalTemplate
      title="Cookie Policy"
      intro="This site runs on very little. Here is exactly what is stored on your device and why."
      updatedAt={UPDATED}
      pathname={routes.cookies}
      sections={[
        {
          heading: "What a cookie is",
          body: [
            "A cookie is a small text file a website asks your browser to keep. Related technologies — local storage and session storage — work the same way from your point of view: they leave something on your device between page loads.",
          ],
        },
        {
          heading: "What this site stores",
          body: [
            "We do not run advertising cookies, cross-site trackers or social media pixels. What we do store is:",
          ],
          bullets: [
            "Session storage for the planner quiz. When you finish the quiz, your result is kept in your browser's session storage so we can show it again if you come back to the page. It never leaves your device and it is erased when you close the tab.",
            "Strictly necessary hosting cookies. Our host may set a cookie to route your request and to protect the site from automated abuse. These carry no marketing data.",
            "Third-party cookies on embedded content. If a page embeds a Vimeo film, Vimeo may set its own cookies once the player loads. If you follow a link to our Dubsado scheduling pages, Dubsado sets cookies on its own domain, under its own policy.",
          ],
        },
        {
          heading: "What we deliberately do not use",
          body: [
            "There is no Google Analytics, no Meta pixel, no remarketing tag and no A/B testing tool on this site. Nobody is following you around the internet because you read about Folegandros.",
          ],
        },
        {
          heading: "How to switch cookies off",
          body: [
            "Every major browser lets you block or delete cookies and clear local and session storage, usually under Settings, then Privacy. Blocking strictly necessary cookies may stop parts of the site working; blocking the quiz storage simply means your result is not remembered.",
          ],
        },
        {
          heading: "Questions",
          body: [
            `If you want to know whether something specific is being stored, ask us at ${SITE.email} and we will tell you plainly.`,
          ],
        },
      ]}
    />
  );
}
