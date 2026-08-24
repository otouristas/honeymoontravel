import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItineraryTemplate from "@/components/templates/ItineraryTemplate";
import { ITINERARIES, itinerariesBySlug } from "@/content/itineraries";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ITINERARIES.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = itinerariesBySlug[slug];
  if (!itinerary) return {};

  return buildMetadata({
    title: `${itinerary.title} | ${itinerary.nights}-Night Greece Honeymoon Itinerary`,
    description: clampDescription(itinerary.answer),
    pathname: routes.itinerary(itinerary.slug),
    image: itinerary.heroImage,
    modifiedTime: itinerary.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const itinerary = itinerariesBySlug[slug];
  if (!itinerary) notFound();

  return <ItineraryTemplate itinerary={itinerary} />;
}
