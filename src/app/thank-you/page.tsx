import type { Metadata } from "next";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Your message has reached Angeliki. Here is what happens next.",
  pathname: routes.thankYou,
  noIndex: true,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Thank you", href: routes.thankYou },
];

const NEXT = [
  {
    step: "01",
    title: "A reply within one working day",
    body: "From Angeliki, not an autoresponder. It will contain a first honest reaction to your dates and your shortlist.",
  },
  {
    step: "02",
    title: "A twenty-minute discovery call",
    body: "A virtual coffee to work out what you actually want. Nothing is quoted or committed before this.",
  },
  {
    step: "03",
    title: "A shape, then a price",
    body: "You get the route and the pacing first, so you can judge the trip rather than the invoice.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <section className="pattern-bg border-b border-brand-teal/10 px-6 py-20 text-center md:py-28">
        <p className="font-script text-5xl text-brand-teal">thank you</p>
        <h1 className="mt-5 font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
          It is with Angeliki
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-lg text-brand-ink/70">
          Your message has arrived. If it is urgent, call{" "}
          <a href={SITE.phoneHref} className="text-brand-teal underline underline-offset-4">
            {SITE.phoneDisplay}
          </a>{" "}
          and you will get a person.
        </p>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            What happens next
          </h2>
          <Diamond className="mt-4" />
          <ol className="mt-10 space-y-8">
            {NEXT.map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="font-display text-3xl text-brand-teal/45">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-brand-ink/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 text-center">
        <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
          While you wait
        </h2>
        <Diamond className="mt-4" />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={routes.destinations} className="btn-ghost">
            Browse the atlas
          </Link>
          <Link href={routes.quiz} className="btn-ghost">
            Take the quiz
          </Link>
          <Link href={routes.journal} className="btn-ghost">
            Read the journal
          </Link>
        </div>
      </section>
    </>
  );
}
