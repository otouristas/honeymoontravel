import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { islandNames } from "@/content/islands";
import { ITINERARIES } from "@/content/itineraries";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Greece Honeymoon Itineraries | 7 to 14 Nights, Island by Island",
  description:
    "Seven Greek honeymoon itineraries we have actually built for couples — from ten nights in Santorini and Milos to a fortnight in the Ionian, with the ferries and the pacing worked out.",
  pathname: routes.itineraries,
  image: IMAGES.heroes.itineraries,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Itineraries", href: routes.itineraries },
];

const ANSWER =
  "A Greek honeymoon works best at ten to fourteen nights across two or three islands. Ten nights suits one Cycladic pair; fourteen lets you add Athens or a third island without spending your holiday on ferries.";

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.itineraries}
        alt="A sailing boat crossing the Aegean at golden hour"
        eyebrow="Itineraries"
        title="Routes we have actually built"
        subtitle="Seven shapes for a Greek honeymoon, from ten nights to a fortnight"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            How long should a Greece honeymoon be?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          <p>
            None of these are packages. Each one started as a real couple with real
            dates, and each has been rebuilt a dozen times since. Use them as shapes:
            the pacing, the order of the islands, the days that need protecting.
          </p>
          <p>
            Yours will differ. It always does. But if a route below already sounds
            like your fortnight, say so and we will start from there.
          </p>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-10">
          {ITINERARIES.map((itinerary, i) => (
            <Link
              key={itinerary.slug}
              href={routes.itinerary(itinerary.slug)}
              className={`group grid items-center gap-8 bg-white/70 transition hover:bg-white md:grid-cols-2 ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
                <Image
                  src={itinerary.heroImage}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 pb-8 md:px-10 md:py-10">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                  {itinerary.nights} nights · {itinerary.bestMonths}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink">
                  {itinerary.title}
                </h2>
                <p className="mt-2 font-script text-2xl text-brand-teal">
                  {itinerary.tagline}
                </p>
                <p className="mt-4 text-brand-ink/70">{itinerary.answer}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                  {islandNames(itinerary.islands).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Or start from a blank page"
        body="Tell us your dates and how you like to travel. We will send back a shape before we send back a price."
      />
    </>
  );
}
