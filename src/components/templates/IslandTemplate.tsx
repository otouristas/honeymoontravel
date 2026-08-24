import Image from "next/image";
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
import { itinerariesBySlug } from "@/content/itineraries";
import { plannerTypesBySlug } from "@/content/quiz";
import { regionsBySlug } from "@/content/regions";
import type { Island } from "@/content/types";
import { routes } from "@/lib/paths";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  touristDestinationSchema,
} from "@/lib/schema";

export default function IslandTemplate({ island }: { island: Island }) {
  const region = regionsBySlug[island.region];
  const plannerType = plannerTypesBySlug[island.plannerType];
  const itinerary = island.itinerary ? itinerariesBySlug[island.itinerary] : undefined;
  const pathname = routes.island(island.slug);

  const trail = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: routes.destinations },
    { name: region.navLabel, href: routes.region(region.slug) },
    { name: island.name, href: pathname },
  ];

  const schema = graph(
    touristDestinationSchema({
      name: `${island.name} honeymoon`,
      description: island.answer,
      pathname,
      image: island.heroImage,
      region: region.title,
    }),
    faqSchema(island.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={island.heroImage}
        alt={`${island.name}, Greece — honeymoon destination`}
        eyebrow={island.eyebrow}
        title={`${island.name} Honeymoon`}
        subtitle={island.nights === "1 night or an evening" ? undefined : `${island.nights} · ${island.bestMonths}`}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      {/* Answer-first block for extraction */}
      <section className="px-6 pb-4 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Is {island.name} right for your honeymoon?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{island.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <dl className="mx-auto grid max-w-4xl gap-px overflow-hidden border border-brand-teal/20 bg-brand-teal/20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Best for", value: island.bestFor },
            { label: "Not for", value: island.notFor },
            { label: "How many nights", value: island.nights },
            { label: "When to go", value: island.bestMonths },
          ].map((item) => (
            <div key={item.label} className="bg-white px-5 py-6">
              <dt className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-teal">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {island.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 pb-14">
        <AuthorByline note={island.plannerNote} lastWalked={island.lastWalked} />
      </section>

      {island.gallery.length ? (
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {island.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`${island.name} — ${["village", "coastline", "landscape", "detail"][i] ?? "view"}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Where to stay */}
      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Where to base yourselves on {island.name}
            </h2>
            <Diamond className="mt-4" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {island.bases.map((base) => (
              <div
                key={base.name}
                className="border border-brand-teal/20 bg-white/75 px-6 py-6"
              >
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {base.name}
                </h3>
                <p className="mt-2 text-brand-ink/70">{base.note}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-center font-display text-2xl tracking-[0.05em] text-brand-ink">
            The kinds of places we book here
          </h3>
          <ul className="mx-auto mt-6 max-w-2xl divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {island.stays.map((stay) => (
              <li key={stay.label} className="py-5">
                <p className="font-display text-lg tracking-wide text-brand-ink">
                  {stay.label}
                </p>
                <p className="mt-1 text-brand-ink/70">{stay.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample arc */}
      <section className="px-6 py-16 md:py-20">
        <DayRibbon
          days={island.arc}
          title={`A sample ${island.name.toLowerCase()} arc`}
        />
        {itinerary ? (
          <p className="mt-10 text-center">
            <Link href={routes.itinerary(itinerary.slug)} className="btn-ghost">
              See the full {itinerary.nights}-night itinerary
            </Link>
          </p>
        ) : null}
      </section>

      {/* Logistics */}
      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Getting there, and what to expect
          </h2>
          <Diamond className="mt-4" />
          <dl className="mt-10 space-y-7">
            {[
              { label: "Getting there", value: island.gettingThere },
              { label: "Crowds", value: island.crowds },
              { label: "Wind and weather", value: island.wind },
            ].map((row) => (
              <div key={row.label}>
                <dt className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
                  {row.label}
                </dt>
                <dd className="mt-2 text-brand-ink/75">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pairings */}
      {island.pairings.length ? (
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                What to pair {island.name} with
              </h2>
              <Diamond className="mt-4" />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {island.pairings.map((pair) => {
                const other = islandsBySlug[pair.slug];
                if (!other) return null;
                return (
                  <Link
                    key={pair.slug}
                    href={routes.island(pair.slug)}
                    className="group block border border-brand-teal/20 transition hover:border-brand-teal"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={other.heroImage}
                        alt={other.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="font-display text-xl tracking-wide text-brand-ink">
                        {other.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-ink/70">{pair.note}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <FaqList
        faqs={island.faqs}
        title={`${island.name} honeymoon questions`}
      />

      {plannerType ? (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-2xl border border-brand-teal/25 px-8 py-10 text-center">
            <p className="font-script text-3xl text-brand-teal">not sure yet?</p>
            <p className="mt-4 text-brand-ink/70">
              {island.name} tends to suit couples we call{" "}
              <Link
                href={routes.plannerType(plannerType.slug)}
                className="text-brand-teal underline underline-offset-4"
              >
                {plannerType.title}
              </Link>
              . Two minutes will tell you whether that is you.
            </p>
            <Link href={routes.quiz} className="btn-ghost mt-7 inline-block">
              Take the planner quiz
            </Link>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Plan your ${island.name} honeymoon`}
        body="Tell us your dates and what you want the days to feel like. Angeliki will reply with an honest view — including whether this is the right island for you."
      />
    </>
  );
}
