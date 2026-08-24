import type { Metadata } from "next";
import LegalTemplate from "@/components/templates/LegalTemplate";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

const UPDATED = "2026-08-01";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms on which myHoneymoon plans and books Greek honeymoons: what the planning fee covers, how payments and cancellations work, and where our responsibility begins and ends.",
  pathname: routes.terms,
});

export default function Page() {
  return (
    <LegalTemplate
      title="Terms & Conditions"
      intro="The rules of engagement, written to be read rather than skipped."
      updatedAt={UPDATED}
      pathname={routes.terms}
      sections={[
        {
          heading: "Using this website",
          body: [
            "The content here — the island pages, guides, itineraries and photographs — is published for your personal use in planning a trip. You are welcome to quote a short passage with a link back. You may not republish pages wholesale, and you may not reuse photography that carries a photographer's credit without asking that photographer.",
            "We write these pages carefully and update them, but ferry timetables change, restaurants close and hotels are refurbished. Nothing on this site is a guarantee of conditions on the day you travel.",
          ],
        },
        {
          heading: "What the planning service is",
          body: [
            "myHoneymoon designs itineraries and books travel arrangements on your behalf. We act as your agent with the hotels, ferry operators, drivers, guides and experience providers. The contract for each of those services is between you and that supplier, under that supplier's own terms, which we will pass to you.",
            "Our own responsibility is to design the trip with reasonable skill and care, to book what we have agreed, and to be reachable and act quickly when something goes wrong.",
          ],
        },
        {
          heading: "The planning fee",
          body: [
            "After the discovery call we quote a flat planning fee, based on the length and complexity of the trip. It is not a percentage of what you spend, so we have no incentive to steer you towards a more expensive room.",
            "The fee is payable before design work begins and is non-refundable once that work has started, because it is the work. Supplier costs — hotels, ferries, transfers, experiences — are separate and are payable on each supplier's own schedule.",
          ],
        },
        {
          heading: "Changes and cancellations",
          body: [
            "Changes are free while your itinerary is still in draft. Once we begin confirming bookings, each supplier's own change and cancellation terms apply, and we will tell you what a change costs before we make it.",
            "If you cancel the trip, whatever the suppliers refund is passed to you in full. We do not add a cancellation charge of our own. If we have to cancel — which has not yet happened — we refund any part of the planning fee covering work not yet done.",
          ],
        },
        {
          heading: "Your responsibilities",
          body: ["To make the trip work, you need to:"],
          bullets: [
            "Give us accurate names exactly as they appear on your passports, and correct dates of birth where a carrier requires them.",
            "Check that your passports are valid for the whole trip and meet any six-month rule that applies to you.",
            "Arrange your own travel insurance, including medical cover and cancellation cover, before we confirm bookings.",
            "Tell us about health conditions, mobility needs or dietary requirements that affect what we should book.",
            "Pay supplier invoices by the dates given, since late payment can release a held room.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We are liable for our own negligence in designing and arranging your trip. We are not liable for the acts or omissions of independent suppliers, nor for events outside anyone's control: weather, cancelled sailings, strikes, air traffic disruption, illness or civil emergency.",
            "Where we are liable, our liability is limited to the planning fee you paid, except where the law does not allow such a limit — including death or personal injury caused by our negligence.",
            "This does not affect any statutory rights you have as a consumer, including package travel rights where they apply to your booking.",
          ],
        },
        {
          heading: "Complaints",
          body: [
            `If something goes wrong during the trip, call us immediately — most problems are fixable in the moment and unfixable afterwards. If you are still unhappy afterwards, write to ${SITE.email} and we will respond within fourteen days.`,
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by Greek law, and the courts of Athens have jurisdiction. If you are a consumer resident elsewhere in the EU, you keep the protection of the mandatory consumer law of your own country.",
          ],
        },
      ]}
    />
  );
}
