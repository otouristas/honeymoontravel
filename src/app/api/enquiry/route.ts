import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const runtime = "nodejs";

export type EnquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  weddingDate?: string;
  travelDate?: string;
  nights?: string;
  islands?: string;
  budget?: string;
  message: string;
  /** Honeypot. Real people leave this empty. */
  website?: string;
};

const BUDGET_BANDS = new Set([
  "under-350",
  "350-550",
  "550-900",
  "900-plus",
  "unsure",
]);

function fail(message: string, field?: string) {
  return NextResponse.json({ ok: false, message, field }, { status: 400 });
}

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return fail("We could not read that. Please try again.");
  }

  if (body.website) {
    // Silently accept so bots do not learn the rule.
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (firstName.length < 2) return fail("Please tell us your first name.", "firstName");
  if (lastName.length < 2) return fail("Please tell us your surname.", "lastName");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return fail("That email address does not look right.", "email");
  if (message.length < 20)
    return fail(
      "A sentence or two about what you want helps us reply properly.",
      "message",
    );
  if (message.length > 4000) return fail("That message is a little too long.", "message");
  if (body.budget && !BUDGET_BANDS.has(body.budget))
    return fail("Please choose one of the budget bands.", "budget");

  const enquiry = {
    receivedAt: new Date().toISOString(),
    firstName,
    lastName,
    email,
    weddingDate: body.weddingDate?.trim() || null,
    travelDate: body.travelDate?.trim() || null,
    nights: body.nights?.trim() || null,
    islands: body.islands?.trim() || null,
    budget: body.budget || null,
    message,
  };

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM ?? "enquiries@myhoneymoon.travel",
          to: [process.env.ENQUIRY_TO ?? SITE.email],
          reply_to: email,
          subject: `Honeymoon enquiry — ${firstName} ${lastName}`,
          text: [
            `${firstName} ${lastName} <${email}>`,
            `Wedding date: ${enquiry.weddingDate ?? "not given"}`,
            `Travel date: ${enquiry.travelDate ?? "not given"}`,
            `Nights: ${enquiry.nights ?? "not given"}`,
            `Islands of interest: ${enquiry.islands ?? "not given"}`,
            `Budget band: ${enquiry.budget ?? "not given"}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!response.ok) throw new Error(`Resend responded ${response.status}`);
      return NextResponse.json({ ok: true, delivered: "email" });
    } catch (error) {
      console.error("Enquiry email failed", error);
      // Fall through to the mailto handoff rather than losing the enquiry.
    }
  }

  // No mail provider configured (or it failed): hand the browser a prefilled
  // mailto so the couple can still reach us in one click.
  const subject = encodeURIComponent(
    `Honeymoon enquiry — ${firstName} ${lastName}`,
  );
  const lines = [
    `Wedding date: ${enquiry.weddingDate ?? "not given"}`,
    `Travel date: ${enquiry.travelDate ?? "not given"}`,
    `Nights: ${enquiry.nights ?? "not given"}`,
    `Islands of interest: ${enquiry.islands ?? "not given"}`,
    `Budget band: ${enquiry.budget ?? "not given"}`,
    "",
    message,
  ].join("\n");

  console.info("Enquiry received", enquiry);

  return NextResponse.json({
    ok: true,
    delivered: "mailto",
    mailto: `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(lines)}`,
  });
}
