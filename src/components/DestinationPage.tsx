import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "./CtaSection";
import Testimonials from "./Testimonials";
import type { DestinationRegion } from "@/content/types";

export default function DestinationPage({ dest }: { dest: DestinationRegion }) {
  return (
    <>
      <section className="relative h-[58vh] min-h-[380px] overflow-hidden">
        <Image
          src={dest.heroImage}
          alt={dest.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-16 text-center md:py-20">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-ink/45">
          Honeymoon in Greece
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-[0.06em] text-brand-ink md:text-5xl">
          {dest.title}
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-ink/70">{dest.tagline}</p>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="text-left">
            <h2 className="font-display text-3xl tracking-wide text-brand-ink">
              Explore {dest.title}
            </h2>
            <p className="mt-6 text-brand-ink/70">{dest.description}</p>
            <p className="mt-4 text-brand-ink/70">
              Every honeymoon we plan is customised to your unique desires and
              tastes — so you can make memories strong enough to last a lifetime.
            </p>
            <Link href="/contact" className="btn-ghost mt-8">
              Book a call
            </Link>
          </div>
          <div>
            <h3 className="font-script text-3xl text-brand-teal">highlights</h3>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {dest.islands.map((island) => (
                <li
                  key={island}
                  className="border border-brand-teal/25 bg-white/70 px-4 py-3 text-center text-sm tracking-wide text-brand-ink"
                >
                  {island}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dest.gallery.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden">
              <Image src={src} alt={dest.title} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaSection />
    </>
  );
}
