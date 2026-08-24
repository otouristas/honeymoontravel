import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import FaqList from "@/components/ui/FaqList";
import IslandAtlas from "@/components/ui/IslandAtlas";
import MagazineSpread from "@/components/ui/MagazineSpread";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { itinerariesBySlug } from "@/content/itineraries";
import { journalSorted } from "@/content/journal";
import { PLANNER } from "@/content/planner";
import { PLANNER_TYPES } from "@/content/quiz";
import { SITE, site } from "@/content/site";
import { routes } from "@/lib/paths";

export const HOME_FAQS = [
  {
    question: "How much does a Greek honeymoon cost?",
    answer:
      "Most couples we plan for spend £350 to £900 a night for two, covering the room, transfers and a couple of experiences. Below £350 Greece is still wonderful; above £900 you are buying scarcity rather than quality.",
  },
  {
    question: "When is the best time for a honeymoon in Greece?",
    answer:
      "Late May to mid June, and mid September to early October. The sea has warmed, the meltemi is manageable, everything is open, and rates sit twenty to forty per cent below August.",
  },
  {
    question: "How many Greek islands should we visit?",
    answer:
      "Two for ten nights, three for fourteen. Each move costs roughly half a day of packing, ferries and check-in. Couples who squeeze in a third island on ten nights invariably wish they had not.",
  },
  {
    question: "Do we need a honeymoon planner for Greece?",
    answer:
      "Not to book a hotel. You need one to know which cave suite faces a rock wall, which harbour is unusable in an August wind, and what to do when the ferry is cancelled on your anniversary night.",
  },
  {
    question: "Where should we go for our first trip to Greece?",
    answer:
      "Two nights in Athens, then one iconic Cycladic island paired with a quieter one — Santorini with Milos, or Paros with Naxos. It gives you the photographs and the afternoons in equal measure.",
  },
];

const FEATURED_ITINERARY = "santorini-milos-10-days";

export default function HomePage() {
  const lead = journalSorted[0];
  const itinerary = itinerariesBySlug[FEATURED_ITINERARY];

  return (
    <>
      <section className="relative h-[72vh] min-h-[420px] w-full overflow-hidden md:h-[85vh]">
        <Image
          src={IMAGES.heroes.home}
          alt="Whitewashed Cycladic domes above the Aegean at golden hour"
          fill
          priority
          fetchPriority="high"
          className="scale-105 object-cover object-center animate-[fade-up_1.4s_ease-out]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/25 via-transparent to-brand-ink/40" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-14 text-center text-white md:pb-20">
          <p className="animate-fade-up font-display text-[11px] uppercase tracking-[0.35em] text-white/85">
            Luxury Travel Planning
          </p>
          <h1 className="animate-fade-up-delay mt-3 font-display text-4xl tracking-[0.08em] text-white md:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <Diamond className="animate-fade-up-delay-2 mt-5 brightness-0 invert" />
          <p className="animate-fade-up-delay-2 mt-4 max-w-md font-body text-base text-white/90 md:text-lg">
            Thirty-nine islands. One planner who has walked all of them.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.destinations}
              className="btn-ghost border-white text-white hover:bg-white hover:text-brand-ink"
            >
              Explore the atlas
            </Link>
            <Link
              href={routes.quiz}
              className="btn-ghost border-white text-white hover:bg-white hover:text-brand-ink"
            >
              Take the quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-14 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            What is the best Greek island for a honeymoon?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>
              There is no single best island — there is a best island for you.
              Santorini for the view you have imagined, Milos for the water, Paxos for
              quiet, Crete if you want one island and no ferries at all.
            </AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          <p>
            Your honeymoon should be the trip of a lifetime, and most of the regret we
            hear afterwards is the same three sentences: it was too rushed, the hotel
            was not what the photographs promised, and we spent the good days
            travelling between islands.
          </p>
          <p>
            All three are planning failures, and all three are avoidable. That is the
            entire service — not access to hotels, but knowing which ones are worth
            the money and how many nights each island actually deserves.
          </p>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
          <p className="font-script text-4xl text-brand-teal md:text-5xl">where to</p>
          <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
            The atlas
          </h2>
          <Diamond className="mt-4" />
        </div>
        <IslandAtlas />
      </section>

      <MagazineSpread
        image={PLANNER.portrait}
        alt={`${PLANNER.name}, ${PLANNER.jobTitle}`}
        eyebrow={PLANNER.credential}
        title="Hello, I'm Angeliki"
        caption="Athens, where every itinerary starts"
      >
        <p>{PLANNER.bio[0]}</p>
        <p>{PLANNER.bio[2]}</p>
        <p>
          <Link
            href={routes.about}
            className="font-display text-xs uppercase tracking-[0.22em] text-brand-teal"
          >
            More about how we work
          </Link>
        </p>
      </MagazineSpread>

      <section className="relative h-[45vh] min-h-[280px] overflow-hidden md:h-[55vh]">
        <Image
          src={site.assets.islandView}
          alt="Cliffside Santorini at dusk"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {itinerary ? (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-script text-4xl text-brand-teal">a shape to steal</p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
                {itinerary.title}
              </h2>
              <Diamond className="mt-4" />
            </div>
            <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={itinerary.heroImage}
                  alt={itinerary.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                  {itinerary.nights} nights · {itinerary.bestMonths}
                </p>
                <p className="mt-4 text-brand-ink/75">{itinerary.answer}</p>
                <ul className="mt-6 space-y-2">
                  {itinerary.days.slice(0, 4).map((day) => (
                    <li key={day.day} className="flex gap-4 text-sm">
                      <span className="w-20 shrink-0 font-display uppercase tracking-[0.14em] text-brand-teal">
                        {day.day}
                      </span>
                      <span className="text-brand-ink/70">{day.title}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={routes.itinerary(itinerary.slug)}
                  className="btn-ghost mt-8 inline-block"
                >
                  See all {itinerary.nights} nights
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <ProofWall />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
            your dream honeymoon
          </h2>
          <Diamond className="mt-4" />
        </div>
        <div className="mx-auto mt-10 aspect-video max-w-3xl overflow-hidden px-6">
          <iframe
            title="myHoneymoon Greece — a film"
            src={site.assets.vimeo}
            className="h-full w-full"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mx-auto mt-8 max-w-2xl px-6">
          <details className="border-t border-brand-teal/15 pt-4">
            <summary className="cursor-pointer font-display text-[11px] uppercase tracking-[0.22em] text-brand-teal">
              Read the transcript
            </summary>
            <div className="mt-4 space-y-4 text-brand-ink/75">
              <p>
                You arrive at your destination, greeted by the salty tang of the
                seawater and the weathered smiles of local fishermen. Quaint shops
                line the narrow, sun-bleached streets, each holding gifts that will
                remind you of your break in paradise.
              </p>
              <p>
                If you take a chance and step away from the beaten track, you will
                discover incredible places to reconnect and strengthen your bond. As
                the birds chirp and the gentle sound of waves caresses you into a deep
                sleep, you will be delighted you chose a truly personal honeymoon
                experience.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">two minutes</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
              What type of honeymoon planner are you?
            </h2>
            <Diamond className="mt-4" />
            <p className="mx-auto mt-5 max-w-lg text-brand-ink/70">
              Four kinds of couple book Greek honeymoons, and each needs a different
              shape of trip. Five questions will tell you which islands are yours.
            </p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {PLANNER_TYPES.map((type) => (
              <li key={type.slug}>
                <Link
                  href={routes.plannerType(type.slug)}
                  className="block border-b border-brand-teal/15 py-3 font-display text-lg tracking-wide text-brand-ink hover:text-brand-teal"
                >
                  {type.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href={routes.quiz} className="btn-ghost">
              Take the quiz
            </Link>
          </p>
        </div>
      </section>

      <section className="relative h-[42vh] min-h-[260px] overflow-hidden md:h-[50vh]">
        <Image
          src={site.assets.church}
          alt="White Greek Orthodox church above the sea"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink">
              from the journal
            </h2>
            <Diamond className="mt-4" />
          </div>
          <article className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <Link
              href={routes.journalPost(lead.slug)}
              className="relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={lead.heroImage}
                alt={lead.title}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </Link>
            <div>
              <h3 className="font-display text-2xl tracking-wide text-brand-ink">
                <Link href={routes.journalPost(lead.slug)}>{lead.title}</Link>
              </h3>
              <p className="mt-4 text-brand-ink/70">{lead.excerpt}</p>
              <Link
                href={routes.journal}
                className="mt-6 inline-block font-display text-xs uppercase tracking-[0.22em] text-brand-teal"
              >
                read the journal
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FaqList faqs={HOME_FAQS} title="Greek honeymoon questions" />
    </>
  );
}
