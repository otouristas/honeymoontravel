import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import QuizPage from "@/components/QuizPage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "What Type of Honeymoon Planner Are You? | 2-Minute Quiz",
  description:
    "Five questions that tell you which Greek islands suit the way you travel, and how your honeymoon should be paced. No email required to see your result.",
  pathname: routes.quiz,
});

const trail = [
  { name: "Home", href: "/" },
  { name: "Planner quiz", href: routes.quiz },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />
      <Breadcrumbs trail={trail} />
      <QuizPage />
      <CtaSection
        title="Prefer to just talk?"
        body="Skip the quiz. Twenty minutes on a call gets you further than any set of multiple-choice questions."
      />
    </>
  );
}
