import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { PLANNER } from "@/content/planner";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Press & Media | myHoneymoon Greece",
  description:
    "Press resources for myHoneymoon: Angeliki's credentials, the subjects she can speak to on the record, image usage, and how to reach us on deadline.",
  pathname: routes.press,
  image: IMAGES.heroes.press,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Press", href: routes.press },
];

const TOPICS = [
  {
    title: "Island choice beyond Santorini",
    body: "Why the same five islands dominate coverage, which fifteen deserve it, and what happens to a couple who books the wrong one.",
  },
  {
    title: "The meltemi and the summer myth",
    body: "How the August wind actually affects a Cycladic holiday, and why late September is the honest peak for couples.",
  },
  {
    title: "What luxury costs in Greece in practice",
    body: "Real per-night bands across cave suites, Ionian villas and Cretan resorts, and where the money stops buying anything.",
  },
  {
    title: "Overtourism and the shoulder season",
    body: "Where the pressure genuinely bites, which islands absorb visitors well, and how planners can move demand off the peak.",
  },
  {
    title: "Getting married abroad, then honeymooning",
    body: "The practical sequencing of a Greek destination wedding and the honeymoon that follows it, including paperwork realities.",
  },
];

const CHECKLIST = [
  "Google Business Profile kept current, with the same name, address and phone as this site.",
  "Reviews collected on Google and WeddingWire after each trip, never incentivised.",
  "Short island films published to YouTube with full transcripts mirrored on the island pages.",
  "Journalist pitches offered with photography rights cleared and photographer credits intact.",
  "Partner hotels asked to link to the island page rather than the home page.",
  "Monthly checks of how assistants answer the questions our island pages target.",
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.press}
        alt="Athens rooftop terrace at dusk"
        eyebrow="Press"
        title="For journalists and editors"
        subtitle="Credentials, subjects, and how to reach us on deadline"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-4xl items-start gap-10 md:grid-cols-[220px_1fr]">
          <div className="relative mx-auto aspect-[3/4] w-48 overflow-hidden md:w-full">
            <Image
              src={PLANNER.portrait}
              alt={`${PLANNER.name}, ${PLANNER.jobTitle}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 12rem, 220px"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink">
              {PLANNER.name}
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-teal">
              {PLANNER.jobTitle}
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-32 shrink-0 uppercase tracking-[0.16em] text-brand-ink/45">
                  Credential
                </dt>
                <dd className="text-brand-ink/75">{PLANNER.credential}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-32 shrink-0 uppercase tracking-[0.16em] text-brand-ink/45">
                  Experience
                </dt>
                <dd className="text-brand-ink/75">
                  {PLANNER.yearsExperience}+ years guiding and planning in Greece
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-32 shrink-0 uppercase tracking-[0.16em] text-brand-ink/45">
                  Languages
                </dt>
                <dd className="text-brand-ink/75">{PLANNER.languages.join(", ")}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-32 shrink-0 uppercase tracking-[0.16em] text-brand-ink/45">
                  Based
                </dt>
                <dd className="text-brand-ink/75">Athens, Greece</dd>
              </div>
            </dl>
            <p className="mt-6 text-brand-ink/75">{PLANNER.bio[0]}</p>
          </div>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Subjects Angeliki can speak to
            </h2>
            <Diamond className="mt-4" />
          </div>
          <ul className="mt-10 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {TOPICS.map((topic) => (
              <li key={topic.title} className="py-6">
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {topic.title}
                </h3>
                <p className="mt-2 text-brand-ink/70">{topic.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Contact and image usage
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-8 space-y-4 text-brand-ink/75">
            <p>
              For interviews, quotes or fact-checks, email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-brand-teal underline underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              or call{" "}
              <a
                href={SITE.phoneHref}
                className="text-brand-teal underline underline-offset-4"
              >
                {SITE.phoneDisplay}
              </a>
              . We answer within a working day, and faster if you say “deadline” in
              the subject line.
            </p>
            <p>
              Photography on this site is credited in the filenames. Please retain the
              photographer credit where one exists, and ask before reusing an image
              that carries a copyright line — most are cleared for editorial use with
              attribution, but not all of them are ours to give.
            </p>
          </div>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">in the open</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              How we build authority off this site
            </h2>
            <Diamond className="mt-4" />
            <p className="mx-auto mt-5 max-w-xl text-brand-ink/70">
              Nothing on this page ranks by itself. These are the things we do
              elsewhere so that the writing here is believed.
            </p>
          </div>
          <ul className="mt-10 space-y-3">
            {CHECKLIST.map((item) => (
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

      <CtaSection
        title="Working on a Greece feature?"
        body="We will give you a straight quote, a correction if we think you have it wrong, and a photographer credit list."
      />
    </>
  );
}
