import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { islandNames } from "@/content/islands";
import { STORIES } from "@/content/stories";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Couples We Have Planned For | Greek Honeymoon Stories",
  description:
    "Three couples, three routes, three honest accounts of what a planned Greek honeymoon actually felt like — including the parts that went sideways.",
  pathname: routes.stories,
  image: IMAGES.heroes.stories,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Couples", href: routes.stories },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.stories}
        alt="A honeymoon table set on a Greek terrace"
        eyebrow="Couples"
        title="Their fortnights"
        subtitle="Named couples, real routes, unedited views"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-2xl space-y-5 text-center text-brand-ink/75">
          <p>
            We do not run a review widget. These are three couples who agreed to let
            us publish their route and their words in full, including the day the
            weather turned and the plan had to change.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-12">
          {STORIES.map((story, i) => (
            <Link
              key={story.slug}
              href={routes.story(story.slug)}
              className={`group grid items-center gap-8 md:grid-cols-2 ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.heroImage}
                  alt={`${story.couple}'s honeymoon`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                  {story.from} · {story.year}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink">
                  {story.couple}
                </h2>
                <p className="mt-2 font-script text-2xl text-brand-teal">
                  {story.headline}
                </p>
                <p className="mt-4 text-brand-ink/70">“{story.quote}”</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                  {islandNames(story.islands).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Write yours next year"
        body="Every one of these began with two lines about dates and a rough idea. Send us yours."
      />
    </>
  );
}
