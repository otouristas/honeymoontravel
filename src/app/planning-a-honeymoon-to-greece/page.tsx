import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import TimelineTool from "@/components/TimelineTool";
import AnswerBlock from "@/components/ui/AnswerBlock";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { PLANNING_STEPS } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Planning a Honeymoon to Greece | Our Process & Your Timeline",
  description:
    "How we plan a Greek honeymoon, from discovery call to departure — plus an interactive timeline that turns your travel date into the month each decision has to be made.",
  pathname: routes.planning,
  image: IMAGES.santoriniIsland,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Planning process", href: routes.planning },
];

const ANSWER =
  "Start twelve months out by choosing the fortnight, hold rooms at ten months, book long-haul flights at eight, and confirm ferries when the schedules open three to five months ahead. Everything else fits around those four.";

const FAQS = [
  {
    question: "How far in advance should we plan a Greek honeymoon?",
    answer:
      "Eight to twelve months for June or September. The cliff-edge suites on Santorini and the good villas on Paxos are gone a year out; everything else can be arranged in six months without losing quality.",
  },
  {
    question: "What does the planning fee cover?",
    answer:
      "The design work, every booking, all supplier correspondence, and a named person reachable throughout the trip. It is a flat fee agreed after the discovery call, never a percentage of what you spend.",
  },
  {
    question: "Can we change the itinerary once it is agreed?",
    answer:
      "Yes, and most couples do once or twice. Changes are free until we start confirming non-refundable bookings, at which point we will tell you exactly what a change costs before making it.",
  },
  {
    question: "What happens if a ferry is cancelled while we are there?",
    answer:
      "You call one number. We rebook the crossing, move the hotel night, tell the driver, and reschedule the dinner. This is the part of the service that is impossible to demonstrate in a brochure.",
  },
  {
    question: "Do you book our flights too?",
    answer:
      "We advise on them and will book internal Greek flights, but most couples book their own long-haul using points or a preferred carrier. Send us the times before you confirm — arrival hour genuinely changes the first two days.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.santoriniIsland}
        alt="A Cycladic island seen from the water"
        eyebrow="The process"
        title="Planning a honeymoon to Greece"
        subtitle="Four stages, one planner, no surprises"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            When should we start planning a Greek honeymoon?
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
            Your honeymoon deserves as much attention as the wedding day, and almost
            nobody has any energy left to give it. That is the actual problem we
            solve: not access to hotels, but the fact that you are exhausted by the
            time this decision arrives.
          </p>
          <p>
            So we make it a conversation rather than a research project. You tell us
            what you want the days to feel like. We tell you where that exists, how
            long it takes, and what it costs — then we book all of it.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <AuthorByline note="I plan a limited number of honeymoons each year, because the value is in the attention. If we are full for your dates, I will tell you in the first email rather than the fifth." />
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">how it goes</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Four stages
            </h2>
            <Diamond className="mt-4" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PLANNING_STEPS.map((s) => (
              <div key={s.step} className="bg-white/75 px-6 py-8 text-center">
                <span className="font-display text-3xl text-brand-teal">{s.step}</span>
                <h3 className="mt-4 font-display text-lg tracking-wide text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-brand-ink/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-24 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-brand-teal">your timeline</p>
          <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Put in a date, get the deadlines
          </h2>
          <Diamond className="mt-4" />
          <p className="mx-auto mt-5 max-w-xl text-brand-ink/70">
            Every milestone below is a real bottleneck — the month rooms sell out, the
            month ferry schedules open, the month long-haul fares turn. Enter roughly
            when you would travel and it will tell you where you stand.
          </p>
        </div>
        <div className="mt-12">
          <TimelineTool />
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Before the call, read one of these
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={routes.guides} className="btn-ghost">
              Planning guides
            </Link>
            <Link href={routes.itineraries} className="btn-ghost">
              Sample itineraries
            </Link>
            <Link href={routes.quiz} className="btn-ghost">
              The planner quiz
            </Link>
          </div>
        </div>
      </section>

      <ProofWall />

      <FaqList faqs={FAQS} title="How we work" />

      <CtaSection />
    </>
  );
}
