"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

const FIELD =
  "mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-teal";
const LABEL = "text-xs uppercase tracking-[0.18em] text-brand-ink/45";

const BUDGETS = [
  { value: "", label: "Prefer not to say yet" },
  { value: "under-350", label: "Under £350 a night" },
  { value: "350-550", label: "£350 – £550 a night" },
  { value: "550-900", label: "£550 – £900 a night" },
  { value: "900-plus", label: "£900+ a night" },
  { value: "unsure", label: "We genuinely have no idea" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setError(result.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      if (result.mailto) window.location.href = result.mailto;
      setStatus("sent");
    } catch {
      setError(
        "We could not reach the server. Please email us directly and we will pick it up.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white/85 px-8 py-16 text-center">
        <p className="font-script text-4xl text-brand-teal">thank you</p>
        <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-ink">
          It is with Angeliki
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-brand-ink/70">
          You will hear back within one working day, from a person rather than an
          autoresponder. If it is urgent, call {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white/85 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>First name</span>
          <input required type="text" name="firstName" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Surname</span>
          <input required type="text" name="lastName" className={FIELD} />
        </label>
      </div>

      <label className="block">
        <span className={LABEL}>Email</span>
        <input required type="email" name="email" className={FIELD} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Wedding date</span>
          <input type="date" name="weddingDate" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Roughly when you would travel</span>
          <input
            type="text"
            name="travelDate"
            placeholder="Late September 2027"
            className={FIELD}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>How many nights</span>
          <input type="text" name="nights" placeholder="10 – 14" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Budget per night, for two</span>
          <select name="budget" className={FIELD} defaultValue="">
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={LABEL}>Islands you have in mind</span>
        <input
          type="text"
          name="islands"
          placeholder="Santorini and something quieter"
          className={FIELD}
        />
      </label>

      <label className="block">
        <span className={LABEL}>What do you want the days to feel like?</span>
        <textarea
          required
          name="message"
          rows={5}
          minLength={20}
          className={FIELD}
          placeholder="We want to swim a lot, eat well, and not be on a boat every other morning…"
        />
      </label>

      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-solid w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-center text-xs text-brand-ink/45">
        We reply within one working day. We never share your details, and there is no
        mailing list to escape from.
      </p>
    </form>
  );
}
