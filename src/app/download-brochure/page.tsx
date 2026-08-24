import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import PrintButton from "@/components/PrintButton";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { IMAGES } from "@/content/images";
import { ISLANDS } from "@/content/islands";
import { ITINERARIES } from "@/content/itineraries";
import { PLANNER } from "@/content/planner";
import { REGIONS } from "@/content/regions";
import { PLANNING_STEPS, SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Greece Honeymoon Brochure | Print or Save as PDF",
  description:
    "A printable folio of everything we plan — the seven regions, 39 islands, seven itineraries and how the process works. No email required, no download gate.",
  pathname: routes.brochure,
  image: IMAGES.heroes.brochure,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Brochure", href: routes.brochure },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <div className="no-print">
        <Breadcrumbs trail={trail} />
      </div>

      <section className="no-print px-6 pb-12 pt-10 text-center">
        <p className="font-script text-4xl text-brand-teal">the folio</p>
        <h1 className="mt-3 font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
          The brochure
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-xl text-brand-ink/70">
          No form, no email gate, no PDF that lands in your spam folder. Everything is
          on this page. Print it, or choose “Save as PDF” in the print dialogue and it
          will lay itself out as a folio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrintButton />
          <Link href={routes.contact} className="btn-ghost">
            Or just talk to us
          </Link>
        </div>
      </section>

      <article className="folio mx-auto max-w-3xl px-6 pb-20">
        <header className="folio-page border-y border-brand-teal/25 py-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">
            myHoneymoon · Athens, Greece
          </p>
          <h2 className="mt-5 font-display text-4xl tracking-[0.05em] text-brand-ink">
            Luxury Honeymoons in Greece
          </h2>
          <Diamond className="mt-5" />
          <p className="mx-auto mt-6 max-w-md text-brand-ink/70">
            Thirty-nine islands, seven regions, one planner who has walked all of them.
          </p>
          <div className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-lg overflow-hidden">
            <Image
              src={IMAGES.heroes.brochure}
              alt="A Cycladic terrace above the Aegean"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 32rem"
            />
          </div>
          <dl className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <div>
              <dt className="sr-only">Telephone</dt>
              <dd>{SITE.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="sr-only">Email</dt>
              <dd>{SITE.email}</dd>
            </div>
            <div>
              <dt className="sr-only">Website</dt>
              <dd>myhoneymoon.travel</dd>
            </div>
          </dl>
        </header>

        <section className="folio-page pt-12">
          <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink">
            Who plans your honeymoon
          </h2>
          <Diamond className="mt-4" align="left" />
          <div className="mt-6 space-y-4 text-brand-ink/75">
            {PLANNER.bio.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-brand-teal">
            {PLANNER.credential} · {PLANNER.yearsExperience}+ years ·{" "}
            {PLANNER.languages.join(" and ")}
          </p>
        </section>

        <section className="folio-page pt-12">
          <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink">
            How it works
          </h2>
          <Diamond className="mt-4" align="left" />
          <ol className="mt-6 space-y-6">
            {PLANNING_STEPS.map((step) => (
              <li key={step.step} className="flex gap-5">
                <span className="font-display text-2xl text-brand-teal/50">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-brand-ink/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="folio-page pt-12">
          <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink">
            Where we plan
          </h2>
          <Diamond className="mt-4" align="left" />
          <div className="mt-6 space-y-7">
            {REGIONS.map((region) => (
              <div key={region.slug}>
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {region.title}
                  <span className="ml-3 text-sm font-normal tracking-normal text-brand-teal">
                    {region.tagline}
                  </span>
                </h3>
                <p className="mt-1.5 text-sm text-brand-ink/70">{region.answer}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-ink/45">
                  {ISLANDS.filter((i) => i.region === region.slug)
                    .map((i) => i.name)
                    .join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="folio-page pt-12">
          <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink">
            Itineraries to start from
          </h2>
          <Diamond className="mt-4" align="left" />
          <ul className="mt-6 space-y-5">
            {ITINERARIES.map((itinerary) => (
              <li key={itinerary.slug}>
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {itinerary.title}
                  <span className="ml-3 text-sm font-normal tracking-normal text-brand-teal">
                    {itinerary.nights} nights
                  </span>
                </h3>
                <p className="mt-1.5 text-sm text-brand-ink/70">{itinerary.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="folio-page border-t border-brand-teal/25 pt-12 text-center">
          <p className="font-script text-4xl text-brand-teal">let&apos;s begin</p>
          <h2 className="mt-3 font-display text-2xl tracking-[0.05em] text-brand-ink">
            Tell us your dates
          </h2>
          <Diamond className="mt-4" />
          <p className="mx-auto mt-5 max-w-md text-brand-ink/70">
            A twenty-minute discovery call costs nothing and usually saves a month of
            browsing.
          </p>
          <p className="mt-6 text-sm">
            {SITE.phoneDisplay} · {SITE.email} · myhoneymoon.travel
          </p>
        </section>
      </article>
    </>
  );
}
