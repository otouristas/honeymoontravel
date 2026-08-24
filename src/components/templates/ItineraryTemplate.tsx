import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DayRibbon from "@/components/ui/DayRibbon";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { islandsBySlug } from "@/content/islands";
import type { Itinerary } from "@/content/types";
import { routes } from "@/lib/paths";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  touristTripSchema,
} from "@/lib/schema";

export default function ItineraryTemplate({ itinerary }: { itinerary: Itinerary }) {
  const pathname = routes.itinerary(itinerary.slug);
  const islands = itinerary.islands
    .map((slug) => islandsBySlug[slug])
    .filter(Boolean);

  const trail = [
    { name: "Home", href: "/" },
    { name: "Itineraries", href: routes.itineraries },
    { name: itinerary.title, href: pathname },
  ];

  const schema = graph(
    touristTripSchema({
      name: itinerary.title,
      description: itinerary.answer,
      pathname,
      image: itinerary.heroImage,
      nights: itinerary.nights,
      islands: islands.map((i) => i.name),
    }),
    faqSchema(itinerary.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={itinerary.heroImage}
        alt={itinerary.title}
        eyebrow={`${itinerary.nights} nights`}
        title={itinerary.title}
        subtitle={itinerary.tagline}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-8 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            What this itinerary is for
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{itinerary.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {itinerary.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 pb-14">
        <dl className="mx-auto grid max-w-3xl gap-px overflow-hidden border border-brand-teal/20 bg-brand-teal/20 sm:grid-cols-3">
          {[
            { label: "Nights", value: String(itinerary.nights) },
            { label: "Best months", value: itinerary.bestMonths },
            { label: "Stops", value: islands.map((i) => i.name).join(" · ") },
          ].map((item) => (
            <div key={item.label} className="bg-white px-5 py-6">
              <dt className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-teal">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm text-brand-ink/75">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <DayRibbon days={itinerary.days} title="Day by day" />
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            What we arrange
          </h2>
          <Diamond className="mt-4" />
          <ul className="mt-8 space-y-3">
            {itinerary.includes.map((item) => (
              <li key={item} className="flex gap-3 text-brand-ink/75">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {islands.length ? (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Read about each stop
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {islands.map((island) => (
                <li key={island.slug}>
                  <Link
                    href={routes.island(island.slug)}
                    className="text-brand-teal underline-offset-4 hover:underline"
                  >
                    {island.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-14">
        <AuthorByline note="Every itinerary on this site is one I have actually built for a couple, not a template. Yours will differ — that is the point." />
      </section>

      <FaqList faqs={itinerary.faqs} title="Questions about this itinerary" />

      <CtaSection
        title="Make this yours"
        body="Send us your dates and we will adapt this itinerary to how you actually travel — or tell you honestly that a different shape would suit you better."
      />
    </>
  );
}
