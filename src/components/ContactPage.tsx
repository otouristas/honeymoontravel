"use client";

import { useState } from "react";
import Image from "next/image";
import { Diamond } from "@/components/Logo";
import Testimonials from "./Testimonials";
import { SITE } from "@/content/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image
          src="https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-santorini-view.jpg"
          alt="Santorini view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-14 text-center md:py-16">
        <h1 className="font-display text-4xl tracking-[0.06em] text-brand-ink md:text-5xl">
          Contact
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-lg text-brand-ink/70">
          Let&apos;s plan your perfect honeymoon together.
        </p>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="font-script text-4xl text-brand-teal">get in touch</h2>
            <p className="mt-5 text-brand-ink/70">
              Ready to get started? Book a call, phone us, email us, or fill in
              the form and we will get back to you.
            </p>
            <ul className="mt-10 space-y-5 text-brand-ink">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Book a call
                </p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-teal hover:underline"
                >
                  Schedule your free Discovery Call
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">Phone</p>
                <a href={SITE.phoneHref} className="mt-1 inline-block hover:text-brand-teal">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 p-8 shadow-sm">
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="font-display text-2xl text-brand-ink">Thank you!</h3>
                <p className="mt-3 text-brand-ink/65">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                      First name
                    </span>
                    <input
                      required
                      type="text"
                      name="firstName"
                      className="mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                      Last name
                    </span>
                    <input
                      required
                      type="text"
                      name="lastName"
                      className="mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
                    placeholder="Tell us about your dream honeymoon..."
                  />
                </label>
                <button type="submit" className="btn-solid w-full">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
