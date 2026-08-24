import Link from "next/link";
import { SITE } from "@/content/site";
import { Diamond } from "@/components/Logo";

export default function CtaSection({
  title = "Ready to get started?",
  body = "Let's plan your perfect honeymoon together.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
          {title}
        </h2>
        <Diamond className="mt-4" />
        <p className="mt-6 text-brand-ink/70">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-ghost">
            Book a call
          </Link>
          <a href={SITE.phoneHref} className="text-sm text-brand-ink/60 hover:text-brand-teal">
            Or call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
