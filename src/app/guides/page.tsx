import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { COMPARES } from "@/content/compares";
import { GUIDES } from "@/content/guides";
import { IMAGES } from "@/content/images";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Greece Honeymoon Planning Guides | Timing, Islands, Budget, Ferries",
  description:
    "Six planning guides and eight island comparisons written by a licensed Greek guide — when to go, how many islands, what luxury costs, and whether to take the ferry or the seaplane.",
  pathname: routes.guides,
  image: IMAGES.heroes.guides,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Guides", href: routes.guides },
];

const ANSWER =
  "The four decisions that shape a Greek honeymoon are when to go, how many islands to take, what to spend a night, and how to move between them. Get those right and the rest is detail.";

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.guides}
        alt="A shuttered window opening onto the Aegean"
        eyebrow="Guides"
        title="The honest answers"
        subtitle="Written by someone who has to face you afterwards"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            What actually decides a Greek honeymoon?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={routes.guide(guide.slug)}
                  className="group block py-7 transition"
                >
                  <h2 className="font-display text-2xl tracking-[0.04em] text-brand-ink transition group-hover:text-brand-teal">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-brand-ink/70">{guide.answer}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">this or that</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Island comparisons
            </h2>
            <Diamond className="mt-4" />
            <p className="mx-auto mt-5 max-w-xl text-brand-ink/70">
              Eight pairs couples genuinely agonise over. Each one ends with a verdict,
              not a shrug.
            </p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {COMPARES.map((pair) => (
              <li key={pair.slug}>
                <Link
                  href={routes.compare(pair.slug)}
                  className="flex items-baseline gap-3 border-b border-brand-teal/15 py-3 text-brand-ink/80 transition hover:text-brand-teal"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                  />
                  <span className="font-display text-lg tracking-wide">
                    {pair.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Reading is slower than asking"
        body="Twenty minutes on a call with Angeliki will settle more than an afternoon of guides. No script, no obligation."
      />
    </>
  );
}
