import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { ALL_FAQS, FAQ_GROUPS } from "@/content/faq";
import { IMAGES } from "@/content/images";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Greek Honeymoon FAQ | Costs, Timing, Ferries & Working With Us",
  description:
    "Straight answers to the questions couples actually ask about a Greek honeymoon — what it costs, when to go, how the ferries work, and what a planner does that you cannot.",
  pathname: routes.faq,
  image: IMAGES.heroes.faq,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: routes.faq },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(ALL_FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.faq}
        alt="A view across the Aegean from a whitewashed terrace"
        eyebrow="Questions"
        title="Everything couples ask"
        subtitle={`${ALL_FAQS.length} answers, none of them evasive`}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-12 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <AnswerBlock>
            A Greek honeymoon usually runs ten to fourteen nights across two islands,
            costs £350 to £900 a night for the standard couples expect, and is best
            booked eight to twelve months ahead for June or September.
          </AnswerBlock>
        </div>
      </section>

      <nav aria-label="FAQ sections" className="px-6 pb-12">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2">
          {FAQ_GROUPS.map((group) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-teal hover:text-brand-ink"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {FAQ_GROUPS.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 px-6 py-14 ${
            i % 2 ? "pattern-bg border-y border-brand-teal/10" : ""
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                {group.title}
              </h2>
              <Diamond className="mt-4" />
            </div>
            <dl className="mt-10 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
              {group.items.map((item) => (
                <div key={item.question} className="py-6">
                  <dt className="font-display text-xl tracking-wide text-brand-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-3 text-brand-ink/75">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <CtaSection
        title="Ask us something not on this list"
        body="If it is a question worth asking, it is probably worth adding here. Send it over."
      />
    </>
  );
}
