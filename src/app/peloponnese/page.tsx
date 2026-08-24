import type { Metadata } from "next";
import RegionTemplate from "@/components/templates/RegionTemplate";
import { regionsBySlug } from "@/content/regions";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

const region = regionsBySlug["peloponnese"];

export const metadata: Metadata = buildMetadata({
  title: "Peloponnese Honeymoon | Nafplio & Messinia",
  description: clampDescription(region.answer),
  pathname: routes.region(region.slug),
  image: region.heroImage,
});

export default function Page() {
  return <RegionTemplate region={region} />;
}
