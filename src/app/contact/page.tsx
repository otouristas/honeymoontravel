import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Start Planning Your Greek Honeymoon",
  description:
    "Tell Angeliki your dates and what you want the days to feel like. You will get a considered reply within one working day — from a person, not an autoresponder.",
  pathname: routes.contact,
  image: IMAGES.santoriniView,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Contact", href: routes.contact },
];

const FAQS = [
  {
    question: "How quickly will we hear back?",
    answer:
      "Within one working day, and usually the same afternoon. Angeliki answers her own enquiries, so if she is on a ferry it may be the evening rather than the morning.",
  },
  {
    question: "Are we committing to anything by getting in touch?",
    answer:
      "No. The first conversation is a discovery call: twenty minutes to work out whether Greece is right for you and whether we are right for each other. Nothing is quoted until after it.",
  },
  {
    question: "How far ahead should we be enquiring?",
    answer:
      "Eight to twelve months for June or September, which are the months everybody wants. Six months is workable. Under three months we can still help, but the best rooms will already be gone.",
  },
  {
    question: "What if we do not know our dates yet?",
    answer:
      "Get in touch anyway. Half of the couples we plan for arrive with a season rather than a date, and choosing the right fortnight is part of what we do.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.santoriniView}
        alt="The Aegean from a Santorini terrace at dusk"
        eyebrow="Contact"
        title="Start the conversation"
        subtitle="One working day, one person, no sales script"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            How do we start planning a Greek honeymoon?
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>
              Send your rough dates and a sentence about the kind of days you want.
              Angeliki replies within a working day with an honest first view, then
              you book a twenty-minute discovery call. No fee until after that.
            </AnswerBlock>
          </div>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[0.85fr_1fr]">
          <div className="text-center lg:text-left">
            <p className="font-script text-4xl text-brand-teal">get in touch</p>
            <p className="mt-5 text-brand-ink/70">
              Use whichever of these suits you. The form goes to the same inbox as the
              email address, and both are read by Angeliki.
            </p>

            <ul className="mt-10 space-y-6 text-brand-ink">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Book a discovery call
                </p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-teal hover:underline"
                >
                  Choose a time in the diary
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Phone
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  WhatsApp
                </p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  Message us
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Long-form brief
                </p>
                <a
                  href={SITE.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-teal hover:underline"
                >
                  The full planning questionnaire
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Based
                </p>
                <p className="mt-1">Athens, Attica, Greece</p>
              </li>
            </ul>

            <p className="mt-10 text-sm text-brand-ink/55">
              Not ready to write? Take the{" "}
              <Link
                href={routes.quiz}
                className="text-brand-teal underline underline-offset-4"
              >
                two-minute planner quiz
              </Link>{" "}
              instead.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <ProofWall title="couples who wrote first" limit={3} />

      <FaqList faqs={FAQS} title="Before you write" />
    </>
  );
}
