import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { AUDIENCES } from "@/content/audiences";
import { IMAGES } from "@/content/images";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Who We Plan For | Greek Honeymoons by Couple",
  description:
    "American and British couples, LGBTQ+ couples, vow renewals, second marriages and couples where only one of you wants to plan. Seven honest starting points for a Greek honeymoon.",
  pathname: routes.audiences,
  image: IMAGES.heroes.audiences,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Who we plan for", href: routes.audiences },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.audiences}
        alt="A couple walking a Greek harbour front"
        eyebrow="Who we plan for"
        title="Start where you actually are"
        subtitle="Seven honest starting points"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-12 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <AnswerBlock>
            Different couples need different things from Greece. A couple flying from
            Chicago has a jet-lag problem; a couple renewing vows has a ceremony
            problem; a couple where only one of you enjoys planning has a different
            problem entirely.
          </AnswerBlock>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <Link
              key={audience.slug}
              href={routes.audience(audience.slug)}
              className="group block border border-brand-teal/20 transition hover:border-brand-teal"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={audience.heroImage}
                  alt={audience.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="px-5 py-6">
                <h2 className="font-display text-xl tracking-wide text-brand-ink">
                  {audience.title}
                </h2>
                <p className="mt-1 font-script text-lg text-brand-teal">
                  {audience.tagline}
                </p>
                <p className="mt-3 text-sm text-brand-ink/70">{audience.answer}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="None of these quite you?"
        body="Say so in a sentence and we will work from that instead. Most couples are a mix of three."
      />
    </>
  );
}
