import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import IslandAtlas from "@/components/ui/IslandAtlas";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { ISLANDS } from "@/content/islands";
import { REGIONS } from "@/content/regions";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const ANSWER =
  "Greece has around 6,000 islands and roughly 200 inhabited ones. We plan honeymoons across 37 of them, grouped into seven regions: the Cyclades, Ionian, North Aegean, Attica and the Saronic, Crete, the Dodecanese and the Peloponnese.";

const FAQS = [
  {
    question: "How many Greek islands should we visit on a honeymoon?",
    answer:
      "Two for ten nights, three for fourteen. Every move costs you half a day in ferries, packing and check-in, so a third island rarely pays for itself under two weeks. Couples who ignore this always say the same thing afterwards.",
  },
  {
    question: "Which Greek region is best for a honeymoon?",
    answer:
      "The Cyclades if you want the Greece of photographs, the Ionian if you want green and swimmable, Crete if you want one island and no ferries, the Peloponnese if you want to drive. Attica suits short trips and stopovers.",
  },
  {
    question: "Do we need to island-hop at all?",
    answer:
      "No. Crete and the Peloponnese both give you a fortnight's variety without a single boat. Couples who hate logistics are often happiest staying put and going deeper.",
  },
  {
    question: "When is the best time to visit the Greek islands?",
    answer:
      "Late May to mid June, and mid September to early October. The sea is warm, the meltemi is manageable, the tavernas are still open and the rates are twenty to forty per cent below August.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Greek Island Honeymoon Destinations | All 37, Region by Region",
  description:
    "An honest atlas of the Greek islands for honeymooners — 37 destinations across seven regions, with who each one suits, how many nights it deserves, and when to go.",
  pathname: routes.destinations,
  image: IMAGES.heroes.destinations,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: routes.destinations },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.destinations}
        alt="Greek island coastline at dusk"
        eyebrow="The atlas"
        title="Where in Greece"
        subtitle={`${ISLANDS.length} destinations, ${REGIONS.length} regions, one honest opinion each`}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            How many Greek islands are there, and which do we plan?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          <p>
            Most honeymoon sites give you a list of the same five islands and a photo
            of a blue dome. This is not that. Every destination below has a page
            written after standing in it — who it suits, who it does not, how many
            nights it deserves, and which island you should pair it with.
          </p>
          <p>
            The honest part matters more than the flattering part. If Mykonos would
            ruin your fortnight, we say so on the Mykonos page. If you have ten nights
            and want three islands, we will tell you to take two.
          </p>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
        <IslandAtlas />
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">the seven</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Regions at a glance
            </h2>
            <Diamond className="mt-4" />
          </div>
          <ul className="mt-10 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {REGIONS.map((region) => (
              <li key={region.slug}>
                <Link
                  href={routes.region(region.slug)}
                  className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
                >
                  <span className="font-display text-2xl tracking-wide text-brand-ink transition group-hover:text-brand-teal md:w-64 md:shrink-0">
                    {region.title}
                  </span>
                  <span className="text-brand-ink/70">{region.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList faqs={FAQS} title="Choosing where to go" />

      <CtaSection
        title="Not sure which island is yours?"
        body="Two minutes of questions, or twenty minutes on a call. Either way you will leave with a shortlist rather than a longlist."
      />
    </>
  );
}
