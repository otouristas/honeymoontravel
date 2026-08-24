import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { EXPERIENCES } from "@/content/experiences";
import { IMAGES } from "@/content/images";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Greek Honeymoon Experiences | Wine, Sailing, Wellness & More",
  description:
    "The six things couples actually remember from a Greek honeymoon — a vineyard at altitude, a boat with no schedule, a kitchen you were invited into. Here is how we build days around them.",
  pathname: routes.experiences,
  image: IMAGES.heroes.experiences,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Experiences", href: routes.experiences },
];

const ANSWER =
  "The best Greek honeymoon experiences are private rather than exclusive: a boat without a schedule, a vineyard at 800 metres, a kitchen you are invited into. We build two or three of these into a fortnight, never more.";

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.experiences}
        alt="A Greek table laid for two"
        eyebrow="Experiences"
        title="The days you will retell"
        subtitle="Six threads we weave through a honeymoon"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            What makes a Greek honeymoon experience worth booking?
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
            An itinerary crammed with excursions is a schedule, not a honeymoon. The
            couples who come home happiest did three memorable things and slept a lot
            in between.
          </p>
          <p>
            Choose the threads that sound like you. We will place them on the right
            days — the sail on the calm morning, the tasting on the afternoon you
            would otherwise waste, the dinner on the night the light is best.
          </p>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((experience) => (
            <Link
              key={experience.slug}
              href={routes.experience(experience.slug)}
              className="group block bg-white/70 transition hover:bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.heroImage}
                  alt={experience.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="px-6 py-6">
                <h2 className="font-display text-2xl tracking-wide text-brand-ink">
                  {experience.title}
                </h2>
                <p className="mt-1 font-script text-xl text-brand-teal">
                  {experience.tagline}
                </p>
                <p className="mt-3 text-sm text-brand-ink/70">{experience.answer}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Build a honeymoon around what you love"
        body="Tell us which of these makes you look at each other. We will design the fortnight outward from there."
      />
    </>
  );
}
