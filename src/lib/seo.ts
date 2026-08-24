import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { absoluteUrl, path } from "./paths";

/** Pages that also exist in Greek at /el/<slug>. Keep this list honest: a thin
 *  machine-translated alternate is worse than no alternate at all. */
export const GREEK_PARITY = new Set<string>([
  "/",
  "/about-us",
  "/planning-a-honeymoon-to-greece",
  "/contact",
  "/what-type-of-honeymoon-planner-are-you",
  "/destinations",
  "/cyclades",
  "/honeymoon/santorini",
  "/faq",
]);

type BuildMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  locale?: "en" | "el";
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  pathname,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  locale = "en",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const englishPath = locale === "el" ? stripGreek(pathname) : path(pathname);
  const canonical = locale === "el" ? absoluteUrl(pathname) : absoluteUrl(englishPath);
  const hasGreek = GREEK_PARITY.has(englishPath);

  const languages: Record<string, string> = {};
  if (hasGreek) {
    languages["en-GB"] = absoluteUrl(englishPath);
    languages["el-GR"] = absoluteUrl(greekPath(englishPath));
    languages["x-default"] = absoluteUrl(englishPath);
  }

  const ogImage = image ?? SITE.assets.hero;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(hasGreek ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: locale === "el" ? "el_GR" : "en_GB",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function greekPath(englishPath: string): string {
  return englishPath === "/" ? "/el" : path("el", englishPath);
}

export function stripGreek(pathname: string): string {
  const clean = path(pathname);
  if (clean === "/el") return "/";
  return clean.startsWith("/el/") ? clean.slice(3) : clean;
}

/** Trim a description to a length search engines will actually render. */
export function clampDescription(text: string, max = 158): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}
