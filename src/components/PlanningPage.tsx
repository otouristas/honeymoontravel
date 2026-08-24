import Image from "next/image";
import { Diamond } from "@/components/Logo";
import CtaSection from "./CtaSection";
import Testimonials from "./Testimonials";
import { PLANNING_STEPS } from "@/content/site";

export default function PlanningPage() {
  return (
    <>
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-santorini-island.jpg"
          alt="Greek island"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-14 text-center md:py-16">
        <h1 className="font-display text-4xl tracking-[0.06em] text-brand-ink md:text-5xl">
          How we plan your honeymoon
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-xl text-brand-ink/70">
          Your honeymoon deserves just as much attention as your wedding day.
        </p>
      </section>

      <section className="px-6 pb-16 text-center">
        <blockquote className="mx-auto max-w-3xl font-display text-2xl italic leading-relaxed text-brand-ink md:text-3xl">
          &ldquo;Your honeymoon tells the world — and maybe you — who you
          are.&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-brand-ink/50">Ginger Strand, Inventing Niagara</p>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mx-auto max-w-3xl text-center text-brand-ink/70">
            Together, we&apos;ll curate an itinerary and add in the little touches
            to make it the break of a lifetime — truly bespoke to your tastes.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PLANNING_STEPS.map((s) => (
              <div key={s.step} className="bg-white/75 px-6 py-8 text-center">
                <span className="font-display text-3xl text-brand-teal">{s.step}</span>
                <h3 className="mt-4 font-display text-lg tracking-wide text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-brand-ink/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            "https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-special-amenities-1.jpg",
            "https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-special-amenities-2.jpg",
            "https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-special-amenities-3.jpg",
          ].map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden">
              <Image src={src} alt="Honeymoon amenity" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaSection />
    </>
  );
}
