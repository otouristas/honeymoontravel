import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import { posts } from "@/content/records";
import { formatDate } from "@/lib/prose";

export default function BlogHub() {
  return (
    <>
      <section className="px-6 py-16 text-center md:py-20">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-ink/45">Inspiration</p>
        <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-brand-ink md:text-5xl">
          on the blog
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-xl text-brand-ink/65">
          Ideas, tips and inspiration for luxury honeymoons in Greece from the
          myHoneymoon planners.
        </p>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={post.path.replace(/\/$/, "") || "/"} className="block">
                {post.featuredImage ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                ) : null}
                <div className="mt-5">
                  {post.date ? (
                    <time className="text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                      {formatDate(post.date)}
                    </time>
                  ) : null}
                  <h2 className="mt-2 font-display text-2xl tracking-wide text-brand-ink transition group-hover:text-brand-teal">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-brand-ink/65">{post.seoDesc}</p>
                  <span className="mt-4 inline-block text-sm text-brand-teal">read more</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
