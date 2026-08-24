"use client";

import { useMemo, useState } from "react";

/** Months before departure that each milestone should be handled. */
const MILESTONES = [
  {
    monthsBefore: 12,
    title: "Choose the fortnight, not the islands",
    body: "Late May, mid June and mid September behave completely differently. Fix the window first; the islands follow from it.",
  },
  {
    monthsBefore: 11,
    title: "Discovery call and planning brief",
    body: "Twenty minutes on the phone, then a written brief. This is where we tell you honestly whether the route you have imagined will work.",
  },
  {
    monthsBefore: 10,
    title: "Hold the rooms",
    body: "Caldera suites and the eight-room Ionian villas go first, often a year out. Everything else can wait; these cannot.",
  },
  {
    monthsBefore: 8,
    title: "Book long-haul flights",
    body: "Transatlantic fares are usually at their best eight to ten months out. Send us the times before you confirm — a 3am arrival changes the first two days.",
  },
  {
    monthsBefore: 6,
    title: "Lock the island order",
    body: "Which island first matters more than which islands. We sequence around ferry timetables, wind patterns and where you want the last night to be.",
  },
  {
    monthsBefore: 4,
    title: "Ferries and internal flights released",
    body: "Greek ferry schedules for the summer typically open three to five months ahead. We book the crossings the moment they appear.",
  },
  {
    monthsBefore: 3,
    title: "Experiences and the table reservations",
    body: "The vineyard at altitude, the private sail, the two restaurants that matter. Booked now, not on the day.",
  },
  {
    monthsBefore: 2,
    title: "Transfers, drivers and documents",
    body: "Every port and airport covered by a named driver. Passports checked against the six-month rule, travel insurance confirmed.",
  },
  {
    monthsBefore: 1,
    title: "Final walkthrough",
    body: "A call to run the whole trip end to end, plus the packing note for the islands you are actually visiting.",
  },
  {
    monthsBefore: 0,
    title: "Departure",
    body: "You get one document and one phone number. Angeliki is awake in your timezone for the arrival day.",
  },
];

function shiftMonths(date: Date, months: number): Date {
  const next = new Date(date);
  next.setMonth(next.getMonth() - months);
  return next;
}

function label(date: Date) {
  return date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export default function TimelineTool() {
  const [travelDate, setTravelDate] = useState("");

  const rows = useMemo(() => {
    const parsed = travelDate ? new Date(travelDate) : null;
    const valid = parsed && !Number.isNaN(parsed.valueOf());

    return MILESTONES.map((milestone) => ({
      ...milestone,
      when: valid
        ? label(shiftMonths(parsed, milestone.monthsBefore))
        : milestone.monthsBefore === 0
          ? "Departure"
          : `${milestone.monthsBefore} months before`,
    }));
  }, [travelDate]);

  return (
    <div className="mx-auto max-w-3xl">
      <label className="mx-auto block max-w-sm text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
          When would you travel?
        </span>
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="mt-2 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-center text-sm outline-none focus:border-brand-teal"
        />
      </label>

      <ol className="mt-12 space-y-0">
        {rows.map((row, i) => (
          <li key={row.title} className="relative grid gap-2 pb-10 pl-8 md:grid-cols-[10rem_1fr] md:gap-8 md:pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-2.5 w-2.5 rotate-45 bg-brand-teal"
            />
            {i < rows.length - 1 ? (
              <span
                aria-hidden
                className="absolute bottom-0 left-[5px] top-6 w-px bg-brand-teal/25"
              />
            ) : null}
            <p className="font-display text-sm uppercase tracking-[0.16em] text-brand-teal">
              {row.when}
            </p>
            <div>
              <h3 className="font-display text-xl tracking-wide text-brand-ink">
                {row.title}
              </h3>
              <p className="mt-1.5 text-brand-ink/70">{row.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="text-center text-sm text-brand-ink/50">
        Later than this? We have built a fortnight in eleven weeks before. It costs you
        choice, not quality.
      </p>
    </div>
  );
}
