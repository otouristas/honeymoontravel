import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IslandTemplate from "@/components/templates/IslandTemplate";
import { ISLANDS, getIsland } from "@/content/islands";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ISLANDS.map((island) => ({ slug: island.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const island = getIsland(slug);
  if (!island) return {};

  return buildMetadata({
    title: `${island.name} Honeymoon | Where to Stay, How Long, When to Go`,
    description: clampDescription(island.answer),
    pathname: routes.island(island.slug),
    image: island.heroImage,
    modifiedTime: island.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const island = getIsland(slug);
  if (!island) notFound();

  return <IslandTemplate island={island} />;
}
