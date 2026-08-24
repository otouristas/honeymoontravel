import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

/** Netlify sets this on deploy previews and branch deploys so they never
 *  compete with the canonical domain in search results. */
const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "1";

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
