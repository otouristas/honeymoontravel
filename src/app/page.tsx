import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import HomePage, { HOME_FAQS } from "@/components/HomePage";
import { JsonLd } from "@/components/ui/JsonLd";
import { IMAGES } from "@/content/images";
import { faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Luxury Greece Honeymoon Planner | myHoneymoon",
  description:
    "Bespoke Greek honeymoons planned island by island by Angeliki, a licensed premium guide with 20+ years' experience. 37 destinations, honest advice, no packages.",
  pathname: "/",
  image: IMAGES.heroes.home,
});

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(HOME_FAQS))} />
      <HomePage />
      <CtaSection
        title="Let's plan yours"
        body="Tell us your dates and what you want the days to feel like. Angeliki replies within a working day."
      />
    </>
  );
}
