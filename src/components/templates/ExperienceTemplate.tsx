import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { islandsBySlug } from "@/content/islands";
import type { Experience } from "@/content/types";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export default function ExperienceTemplate({
  experience,
}: {
  experience: Experience;
}) {
  const pathname = routes.experience(experience.slug);
  const islands = experience.islands
    .map((slug) => islandsBySlug[slug])
    .filter(Boolean);

  const trail = [
    { name: "Home", href: "/" },
    { name: "Experiences", href: routes.experiences },
    { name: experience.title, href: pathname },
  ];

  const schema = graph(faqSchema(experience.faqs), breadcrumbSchema(trail));

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={experience.heroImage}
        alt={experience.title}
        eyebrow="Experiences"
        title={experience.title}
        subtitle={experience.tagline}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-8 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            {experience.title} on a Greek honeymoon
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{experience.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {experience.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {experience.highlights.map((h) => (
              <div
                key={h.title}
                className="border border-brand-teal/20 bg-white/75 px-6 py-6"
              >
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {h.title}
                </h3>
                <p className="mt-2 text-brand-ink/70">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {islands.length ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Where we do this best
            </h2>
            <Diamond className="mt-4" />
            <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
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

      <FaqList faqs={experience.faqs} title={`${experience.title} questions`} />

      <CtaSection
        title={`Build a honeymoon around ${experience.title.toLowerCase()}`}
        body="Tell us what draws you and we will design the days around it."
      />
    </>
  );
}
