import { SITE } from "@/content/site";
import { ORGANIZATION_ID, PLANNER, PLANNER_ID, WEBSITE_ID } from "@/content/planner";
import type { FaqItem } from "@/content/types";
import { absoluteUrl } from "./paths";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@type": "TravelAgency",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.domain,
    logo: SITE.assets.logoWordmark,
    image: SITE.assets.hero,
    description:
      "Bespoke luxury honeymoon planning in Greece, designed island by island by a licensed premium tour guide.",
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { "@type": "Country", name: "Greece" },
    knowsLanguage: PLANNER.languages,
    founder: { "@id": PLANNER_ID },
    employee: { "@id": PLANNER_ID },
    sameAs: [SITE.facebook, SITE.instagram, SITE.pinterest],
  };
}

export function plannerSchema(): Json {
  return {
    "@type": "Person",
    "@id": PLANNER_ID,
    name: PLANNER.name,
    jobTitle: PLANNER.jobTitle,
    description: PLANNER.bio[0],
    image: PLANNER.portrait,
    knowsLanguage: PLANNER.languages,
    knowsAbout: [
      "Honeymoon planning",
      "Greek islands",
      "Luxury travel",
      "Cyclades",
      "Ionian Islands",
      "Greek gastronomy",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: PLANNER.credential,
    },
    worksFor: { "@id": ORGANIZATION_ID },
    url: absoluteUrl("/about-us"),
    sameAs: PLANNER.sameAs,
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.domain,
    inLanguage: "en-GB",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(
  trail: { name: string; href: string }[],
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]): Json | null {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function touristDestinationSchema({
  name,
  description,
  pathname,
  image,
  region,
}: {
  name: string;
  description: string;
  pathname: string;
  image: string;
  region: string;
}): Json {
  return {
    "@type": "TouristDestination",
    name,
    description,
    url: absoluteUrl(pathname),
    image,
    touristType: ["Honeymooners", "Luxury travellers"],
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: region,
      containedInPlace: { "@type": "Country", name: "Greece" },
    },
  };
}

export function touristTripSchema({
  name,
  description,
  pathname,
  image,
  nights,
  islands,
}: {
  name: string;
  description: string;
  pathname: string;
  image: string;
  nights: number;
  islands: string[];
}): Json {
  return {
    "@type": "TouristTrip",
    name,
    description,
    url: absoluteUrl(pathname),
    image,
    touristType: "Honeymooners",
    provider: { "@id": ORGANIZATION_ID },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: islands.length,
      itemListElement: islands.map((island, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: island },
      })),
    },
    subjectOf: {
      "@type": "CreativeWork",
      name: `${nights}-night honeymoon itinerary`,
    },
  };
}

export function articleSchema({
  headline,
  description,
  pathname,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  pathname: string;
  image: string;
  datePublished: string;
  dateModified: string;
}): Json {
  return {
    "@type": "Article",
    headline,
    description,
    image,
    url: absoluteUrl(pathname),
    datePublished,
    dateModified,
    author: { "@id": PLANNER_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: absoluteUrl(pathname),
  };
}

export function reviewSchema({
  body,
  author,
  headline,
  datePublished,
  pathname,
}: {
  body: string;
  author: string;
  headline?: string;
  datePublished?: string;
  pathname?: string;
}): Json {
  return {
    "@type": "Review",
    ...(headline ? { name: headline } : {}),
    reviewBody: body,
    author: { "@type": "Person", name: author },
    itemReviewed: { "@id": ORGANIZATION_ID },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    ...(datePublished ? { datePublished } : {}),
    ...(pathname ? { url: absoluteUrl(pathname) } : {}),
  };
}

/** Wraps graph nodes into a single JSON-LD document. */
export function graph(...nodes: (Json | null | undefined)[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
