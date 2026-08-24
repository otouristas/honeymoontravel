import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { islandsBySlug } from "@/content/islands";
import type { JournalPost } from "@/content/types";
import { routes } from "@/lib/paths";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/schema";

export default function JournalTemplate({ post }: { post: JournalPost }) {
  const pathname = routes.journalPost(post.slug);
  const islands = post.islands.map((s) => islandsBySlug[s]).filter(Boolean);

  const trail = [
    { name: "Home", href: "/" },
    { name: "Journal", href: routes.journal },
    { name: post.title, href: pathname },
  ];

  const schema = graph(
    articleSchema({
      headline: post.title,
      description: post.excerpt,
      pathname,
      image: post.heroImage,
      datePublished: post.date,
      dateModified: post.updatedAt,
    }),
    breadcrumbSchema(trail),
  );

  const paragraphs = post.body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={post.heroImage}
        alt={post.title}
        eyebrow={new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        title={post.title}
      />

      <Breadcrumbs trail={trail} />

      <article className="px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <p className="font-display text-xl leading-relaxed text-brand-ink">
            {post.excerpt}
          </p>
          <Diamond className="my-8" align="left" />
          <div className="space-y-5 text-brand-ink/75">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <div className="mt-12">
            <AuthorByline lastWalked={post.updatedAt} />
          </div>

          {islands.length ? (
            <div className="mt-12 border-t border-brand-teal/20 pt-8">
              <p className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
                Places in this piece
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {islands.map((island) => (
                  <li key={island.slug}>
                    <Link
                      href={routes.island(island.slug)}
                      className="text-brand-ink/75 underline-offset-4 hover:text-brand-teal hover:underline"
                    >
                      {island.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>

      <CtaSection
        title="Want a honeymoon that reads like this?"
        body="We plan the whole thing — the ferries, the rooms, the table on the right night — so you only have to turn up."
      />
    </>
  );
}
