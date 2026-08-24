import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import MagazineSpread from "@/components/ui/MagazineSpread";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { PLANNER } from "@/content/planner";
import { PLANNING_STEPS } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Angeliki | Licensed Greek Guide & Honeymoon Planner",
  description:
    "Angeliki is a licensed premium tour guide with more than twenty years in Greek travel. She plans honeymoons across 37 islands and will tell you when one of them is wrong for you.",
  pathname: routes.about,
  image: IMAGES.heroes.about,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "About", href: routes.about },
];

const ANSWER =
  "myHoneymoon is Angeliki: a licensed premium tour guide in Greece with more than twenty years in the industry, planning honeymoons across 37 islands from Athens. One planner, no call centre, no packages.";

const FAQS = [
  {
    question: "Who actually plans our honeymoon?",
    answer:
      "Angeliki does. There is no team of junior consultants behind a shared inbox. The person on your discovery call is the person choosing your rooms and the person answering the phone if a ferry is cancelled.",
  },
  {
    question: "What does a licensed premium tour guide mean in Greece?",
    answer:
      "It is a state-recognised qualification requiring formal study in Greek history, archaeology and art, plus examination. It is what allows a guide to lead you inside protected sites, and it is why the history you hear on your trip is accurate.",
  },
  {
    question: "What does the service cost?",
    answer:
      "A planning fee, agreed after the discovery call, based on the length and complexity of the trip. It is quoted before you commit to anything, and it is not a percentage of what you spend, so nobody has an incentive to upsell you.",
  },
  {
    question: "Will you tell us if Greece is wrong for us?",
    answer:
      "Yes. Several times a year we tell couples that what they are describing is not a Greek honeymoon, and point them elsewhere. A wrong trip planned beautifully is still a wrong trip.",
  },
  {
    question: "Do you work with couples outside the UK and Greece?",
    answer:
      "Most of our couples fly from the United States, the United Kingdom and Australia. We work in English and Greek, and we plan around your flight times rather than assuming a European arrival.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.about}
        alt="The Aegean from a Cycladic terrace"
        eyebrow="About"
        title="One planner, thirty-seven islands"
        subtitle="And an opinion about every one of them"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Who is behind myHoneymoon?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <MagazineSpread
        image={PLANNER.portrait}
        alt={`${PLANNER.name}, ${PLANNER.jobTitle}`}
        eyebrow={PLANNER.credential}
        title="Hello, I'm Angeliki"
        caption="Athens, where every itinerary starts"
      >
        {PLANNER.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </MagazineSpread>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">the credentials</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Why you can trust the advice
            </h2>
            <Diamond className="mt-4" />
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden border border-brand-teal/20 bg-brand-teal/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Licence",
                value: "State-licensed premium tour guide, Greece",
              },
              {
                label: "Experience",
                value: `${PLANNER.yearsExperience}+ years in Greek travel`,
              },
              { label: "Languages", value: PLANNER.languages.join(" and ") },
              { label: "Based", value: "Athens, and on a ferry most of the summer" },
            ].map((item) => (
              <div key={item.label} className="bg-white px-5 py-6">
                <dt className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-teal">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm text-brand-ink/75">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              How working together goes
            </h2>
            <Diamond className="mt-4" />
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2">
            {PLANNING_STEPS.map((step) => (
              <li key={step.step} className="flex gap-5">
                <span className="font-display text-3xl text-brand-teal/45">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-brand-ink/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center">
            <Link href={routes.planning} className="btn-ghost">
              The full planning process
            </Link>
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            What we will not do
          </h2>
          <Diamond className="mt-4" />
          <ul className="mt-8 space-y-4">
            {[
              "Send you a template. Every itinerary is written from your dates and your appetite for movement.",
              "Recommend a hotel we have not walked through, or a room type we have not seen.",
              "Squeeze a third island into ten nights because it looks better on paper.",
              "Take a commission that changes what we suggest. The planning fee is agreed up front.",
              "Agree with you when we think you are wrong. That is the whole point of hiring a person.",
            ].map((item) => (
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

      <ProofWall />

      <FaqList faqs={FAQS} title="About working with us" />

      <div className="px-6 pb-12 text-center">
        <Link
          href={routes.press}
          className="text-sm text-brand-ink/50 hover:text-brand-teal"
        >
          Press and media enquiries
        </Link>
      </div>

      <CtaSection
        title="Say hello"
        body="A twenty-minute call costs you nothing and usually saves a month of browsing."
      />
    </>
  );
}
