import { Diamond } from "@/components/Logo";
import { TESTIMONIALS } from "@/content/stories";

export default function Testimonials() {
  return (
    <section className="pattern-bg py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-script text-4xl text-brand-teal md:text-5xl">kind words</h2>
        <Diamond className="mt-4" />
        <div className="mt-10 space-y-12">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.author} className="space-y-4">
              <h3 className="font-display text-xl tracking-wide text-brand-ink">{t.author}</h3>
              <p className="text-left text-brand-ink/70 md:text-center">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
