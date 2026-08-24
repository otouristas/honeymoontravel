import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "./CtaSection";
import type { ContentRecord } from "@/content/types";
import { POST_BODIES } from "@/content/records";
import { formatDate, parseProse } from "@/lib/prose";

export default function BlogPost({ record }: { record: ContentRecord }) {
  const body = POST_BODIES[record.slug] ?? "";
  const blocks = parseProse(body);

  return (
    <>
      <section className="px-6 py-14 text-center md:py-16">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-[0.22em] text-brand-teal hover:underline"
        >
          &larr; Back to Blog
        </Link>
        {record.date ? (
          <time className="mt-6 block text-xs uppercase tracking-[0.18em] text-brand-ink/45">
            {formatDate(record.date)}
          </time>
        ) : null}
        <h1 className="mt-4 font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
          {record.title}
        </h1>
        <Diamond className="mt-5" />
      </section>

      {record.featuredImage ? (
        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden">
          <Image
            src={record.featuredImage}
            alt={record.title}
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />
        </div>
      ) : null}

      <article className="prose-block mx-auto max-w-2xl px-6 py-16">
        {blocks.map((block, i) =>
          block.type === "h" ? (
            <h3 key={i}>{block.text}</h3>
          ) : (
            <p key={i}>{block.text}</p>
          ),
        )}
      </article>

      <CtaSection />
    </>
  );
}
