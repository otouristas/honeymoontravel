import type { Metadata } from "next";
import LegalTemplate from "@/components/templates/LegalTemplate";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

const UPDATED = "2026-08-01";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What personal data myHoneymoon collects when you enquire about a Greek honeymoon, why we hold it, how long we keep it, and how to have it deleted.",
  pathname: routes.privacy,
  noIndex: false,
});

export default function Page() {
  return (
    <LegalTemplate
      title="Privacy Policy"
      intro="We collect the least we can, use it only to plan your trip, and delete it when we no longer need it."
      updatedAt={UPDATED}
      pathname={routes.privacy}
      sections={[
        {
          heading: "Who we are",
          body: [
            `myHoneymoon is a honeymoon planning service based in Athens, Greece, operated by Angeliki. For any question about your data, write to ${SITE.email} or call ${SITE.phoneDisplay}. We are the data controller for the information described on this page.`,
          ],
        },
        {
          heading: "What we collect",
          body: [
            "We only collect what you give us, and what your browser reports automatically.",
          ],
          bullets: [
            "Enquiry details: your names, email address, wedding or travel dates, the number of nights, islands you are considering, a budget band if you choose one, and whatever you write in the message field.",
            "Correspondence: the emails, calls and messages exchanged while planning your trip.",
            "Booking details needed by suppliers: passport names, dates of birth where an airline or ferry requires them, and dietary or accessibility needs you tell us about.",
            "Technical data: your IP address, browser type and the pages you viewed, recorded by our hosting provider in standard server logs.",
          ],
        },
        {
          heading: "Why we hold it, and on what basis",
          body: [
            "We use enquiry details to answer you and to design your trip. That is performance of a contract, or steps taken at your request before entering one.",
            "We pass the minimum necessary details to the hotels, ferry operators, drivers and guides we book on your behalf. Without this, the booking cannot be made.",
            "We keep correspondence and invoices to meet Greek accounting and tax obligations. That is a legal obligation.",
            "We do not build advertising profiles, we do not sell data to anyone, and we do not run a marketing list you have to escape from. If we ever want to send you something that is not about your trip, we will ask first.",
          ],
        },
        {
          heading: "Who else sees it",
          body: [
            "Only the parties who need it to deliver your honeymoon or to run this business:",
          ],
          bullets: [
            "Accommodation, transfer, ferry, guide and experience suppliers directly involved in your itinerary.",
            "Our scheduling and client-management provider, Dubsado, where you book a call or complete the long-form planning questionnaire.",
            "Our website host, which processes server logs, and our email provider.",
            "Our accountant, and the Greek tax authority where the law requires it.",
          ],
        },
        {
          heading: "Where your data goes",
          body: [
            "Some of our providers are based in the United States. Where personal data leaves the European Economic Area, it is transferred under the European Commission's standard contractual clauses or an equivalent approved mechanism.",
            "If your honeymoon takes you outside the EEA, the suppliers there necessarily receive your booking details in order to host you.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Enquiries that do not become bookings are deleted within twenty-four months. Booking records and invoices are kept for ten years, which is the retention period Greek tax law requires. Server logs are kept for a short rolling window by our host.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under the GDPR you can ask us for a copy of your data, ask us to correct it, ask us to delete it, ask us to restrict how we use it, object to our use of it, or ask for it in a portable format.",
            `Write to ${SITE.email} and we will respond within one month. If you are not satisfied, you may complain to the Hellenic Data Protection Authority, or to the supervisory authority in your own country.`,
          ],
        },
        {
          heading: "Security",
          body: [
            "This site is served over HTTPS. Enquiry forms are transmitted encrypted. Access to client records is limited to the people planning your trip. No system is perfect, and we will tell you promptly if a breach affects you.",
          ],
        },
        {
          heading: "Children",
          body: [
            "This service is intended for adults planning their own travel. We do not knowingly collect data from anyone under sixteen except as a passenger detail supplied by a parent.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "When we change this policy we update the date at the top of the page. Material changes affecting couples we are currently planning for will be sent to them by email.",
          ],
        },
      ]}
    />
  );
}
