import { SEASONALITY } from "@/content/seasonality";

const CROWD_WIDTH: Record<string, string> = {
  Low: "w-[20%]",
  Building: "w-[45%]",
  Easing: "w-[55%]",
  High: "w-[75%]",
  Peak: "w-full",
};

const RATE_TONE: Record<string, string> = {
  Low: "bg-brand-teal-soft/30",
  Shoulder: "bg-brand-teal-soft/55",
  High: "bg-brand-teal/60",
  Peak: "bg-brand-teal",
};

export default function SeasonalityCalendar() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-center text-xs uppercase tracking-[0.22em] text-brand-ink/45">
        Aegean averages · Crete and the Dodecanese run two weeks warmer at each end
      </p>

      <ol className="mt-8 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
        {SEASONALITY.map((m) => (
          <li key={m.month} className="grid gap-3 py-6 md:grid-cols-[6rem_1fr] md:gap-8">
            <div>
              <p className="font-display text-xl tracking-wide text-brand-ink">
                {m.month}
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-brand-teal">
                Sea {m.sea}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="min-w-[9rem] flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/40">
                    Crowds · {m.crowds}
                  </p>
                  <div className="mt-1 h-1.5 w-full bg-brand-teal/10">
                    <div className={`h-full bg-brand-ink/50 ${CROWD_WIDTH[m.crowds]}`} />
                  </div>
                </div>
                <div className="min-w-[9rem] flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/40">
                    Rates · {m.rates}
                  </p>
                  <div className="mt-1 h-1.5 w-full bg-brand-teal/10">
                    <div className={`h-full w-full ${RATE_TONE[m.rates]}`} />
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/40">
                  Wind · {m.wind}
                </p>
              </div>
              <p className="mt-3 text-brand-ink/70">{m.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
