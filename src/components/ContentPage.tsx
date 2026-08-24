import Image from "next/image";
import { Diamond } from "@/components/Logo";
import CtaSection from "./CtaSection";
import Testimonials from "./Testimonials";
import type { ContentRecord } from "@/content/types";
import { heroOf } from "@/lib/content";

export default function ContentPage({ record }: { record: ContentRecord }) {
  const hero = heroOf(record);
  const blocks = record.textBlocks.filter(
    (t) =>
      !t.startsWith("Luxury Honeymoons in Greece") &&
      !t.includes("testimonials we") &&
      t.length > 30,
  );

  return (
    <>
      {hero ? (
        <section className="relative h-[48vh] min-h-[320px] overflow-hidden">
          <Image src={hero} alt={record.title} fill priority className="object-cover" sizes="100vw" />
        </section>
      ) : null}

      <section className="px-6 py-14 text-center md:py-16">
        <h1 className="font-display text-4xl tracking-[0.06em] text-brand-ink md:text-5xl">
          {record.title}
        </h1>
        <Diamond className="mt-5" />
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-2xl">
          {blocks.map((block, i) => {
            const isQuote =
              block.startsWith("\u201c") ||
              block.includes("JULI SLATTERY") ||
              block.includes("GINGER STRAND");
            const isHeading = block.length < 80 && !block.includes(".") && i > 0;

            if (isQuote) {
              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-brand-teal py-2 pl-6 font-display text-xl italic leading-relaxed text-brand-ink"
                >
                  {block}
                </blockquote>
              );
            }
            if (isHeading) {
              return (
                <h2 key={i} className="mt-12 font-display text-2xl tracking-wide text-brand-ink">
                  {block}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-5 text-brand-ink/70">
                {block}
              </p>
            );
          })}
        </div>
      </section>

      {record.images.length > 2 ? (
        <section className="pattern-bg border-y border-brand-teal/10 px-6 py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
            {record.images.slice(1, 7).map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Testimonials />
      <CtaSection />
    </>
  );
}
