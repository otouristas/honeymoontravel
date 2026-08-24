"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import type { QuizIslandCard } from "@/content/quiz-cards";
import { PLANNER_TYPES, QUIZ_QUESTIONS } from "@/content/quiz";
import { routes } from "@/lib/paths";

const STORAGE_KEY = "myhoneymoon:planner-type";

/** sessionStorage is an external store, and it is not there during SSR. */
const noopSubscribe = () => () => {};

function readStoredType(): string | null {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function QuizPage({
  islandCards,
}: {
  islandCards: Record<string, QuizIslandCard>;
}) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);
  const previous = useSyncExternalStore(noopSubscribe, readStoredType, () => null);

  const result = done
    ? PLANNER_TYPES.reduce((best, t) =>
        (scores[t.slug] ?? 0) > (scores[best.slug] ?? 0) ? t : best,
      )
    : null;

  useEffect(() => {
    if (!result) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, result.slug);
    } catch {
      /* private browsing — the result is still on screen */
    }
  }, [result]);

  function answer(type: string) {
    setScores((prev) => ({ ...prev, [type]: (prev[type] ?? 0) + 1 }));
    if (step + 1 >= QUIZ_QUESTIONS.length) setDone(true);
    else setStep(step + 1);
  }

  function restart() {
    setScores({});
    setStep(0);
    setDone(false);
  }

  const previousType = previous
    ? PLANNER_TYPES.find((t) => t.slug === previous)
    : undefined;

  return (
    <>
      <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image
          src="https://www.myhoneymoon.travel/wp-content/uploads/2021/03/my-honeymoon-santorini-blue.jpg"
          alt="The Aegean seen from a blue-shuttered window"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-14 text-center md:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">
          Two minutes, five questions
        </p>
        <h1 className="mt-4 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
          What type of honeymoon planner are you?
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-xl text-brand-ink/70">
          Four kinds of couple book Greek honeymoons, and each one needs a different
          shape of trip. Answer honestly and we will tell you which islands suit you
          and how the fortnight should run.
        </p>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          {!done ? (
            <>
              <p className="text-center text-xs uppercase tracking-[0.22em] text-brand-ink/45">
                Question {step + 1} of {QUIZ_QUESTIONS.length}
              </p>
              <div
                aria-hidden
                className="mx-auto mt-4 h-px w-full max-w-xs bg-brand-teal/20"
              >
                <div
                  className="h-px bg-brand-teal transition-all duration-300"
                  style={{
                    width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
              <h2 className="mt-6 text-center font-display text-2xl tracking-wide text-brand-ink md:text-3xl">
                {QUIZ_QUESTIONS[step].q}
              </h2>
              <div className="mt-8 space-y-3">
                {QUIZ_QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => answer(opt.type)}
                    className="w-full border border-brand-teal/25 bg-white/80 px-6 py-4 text-left text-brand-ink transition hover:border-brand-teal hover:bg-white"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {previousType && step === 0 ? (
                <p className="mt-8 text-center text-sm text-brand-ink/50">
                  Last time you were{" "}
                  <Link
                    href={`${routes.plannerType(previousType.slug)}?from=quiz`}
                    className="text-brand-teal underline underline-offset-4"
                  >
                    {previousType.title}
                  </Link>
                  .
                </p>
              ) : null}
            </>
          ) : result ? (
            <div className="animate-fade-up text-center">
              <p className="font-script text-3xl text-brand-teal">your result</p>
              <h2 className="mt-4 font-display text-4xl tracking-wide text-brand-ink">
                {result.title}
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-brand-ink/70">
                {result.summary}
              </p>

              <div className="mx-auto mt-10 grid max-w-lg gap-4 sm:grid-cols-2">
                {result.islands.map((slug) => {
                  const island = islandCards[slug];
                  if (!island) return null;
                  return (
                    <Link
                      key={slug}
                      href={island.href}
                      className="group block bg-white/80"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={island.heroImage}
                          alt={`${island.name} honeymoon`}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <p className="px-4 py-3 font-display text-lg tracking-wide text-brand-ink">
                        {island.name}
                      </p>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`${routes.plannerType(result.slug)}?from=quiz`}
                  className="btn-ghost"
                >
                  Read your full profile
                </Link>
                <button
                  type="button"
                  onClick={restart}
                  className="text-sm text-brand-ink/50 hover:text-brand-teal"
                >
                  Start again
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            The four types
          </h2>
          <Diamond className="mt-4" />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {PLANNER_TYPES.map((type) => (
              <li key={type.slug}>
                <Link
                  href={routes.plannerType(type.slug)}
                  className="block border-b border-brand-teal/15 py-4"
                >
                  <span className="font-display text-xl tracking-wide text-brand-ink hover:text-brand-teal">
                    {type.title}
                  </span>
                  <span className="mt-1 block text-sm text-brand-ink/65">
                    {type.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
