import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { islandsBySlug } from "@/content/islands";
import { itinerariesBySlug } from "@/content/itineraries";
import type { Audience } from "@/content/types";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export default function AudienceTemplate({ audience }: { audience: Audience }) {
  const pathname = routes.audience(audience.slug);
  const islands = audience.islands.map((s) => islandsBySlug[s]).filter(Boolean);
  const itinerary = audience.itinerary
    ? itinerariesBySlug[audience.itinerary]
    : undefined;

  const trail = [
    { name: "Home", href: "/" },
    { name: "Who we plan for", href: routes.audiences },
    { name: audience.title, href: pathname },
  ];

  const schema = graph(faqSchema(audience.faqs), breadcrumbSchema(trail));

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={audience.heroImage}
        alt={audience.title}
        eyebrow="Who we plan for"
        title={audience.title}
        subtitle={audience.tagline}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-8 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <AnswerBlock>{audience.answer}</AnswerBlock>
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {audience.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              What couples like you ask us first
            </h2>
            <Diamond className="mt-4" />
          </div>
          <div className="mt-10 space-y-8">
            {audience.concerns.map((c) => (
              <div key={c.title} className="border-l-2 border-brand-teal/40 pl-6">
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-brand-ink/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {islands.length ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                Where we usually send you
              </h2>
              <Diamond className="mt-4" />
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {islands.map((island) => (
                <Link
                  key={island.slug}
                  href={routes.island(island.slug)}
                  className="group block border border-brand-teal/20 transition hover:border-brand-teal"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={island.heroImage}
                      alt={`${island.name} honeymoon`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="font-display text-xl tracking-wide text-brand-ink">
                      {island.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-ink/70">{island.bestFor}</p>
                  </div>
                </Link>
              ))}
            </div>
            {itinerary ? (
              <p className="mt-10 text-center">
                <Link href={routes.itinerary(itinerary.slug)} className="btn-ghost">
                  See the {itinerary.nights}-night shape we suggest
                </Link>
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <FaqList faqs={audience.faqs} />

      <CtaSection
        title="Tell us where you are starting from"
        body="No forms full of dropdowns. Just your dates, roughly what you want, and we will take it from there."
      />
    </>
  );
}
