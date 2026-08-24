import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperienceTemplate from "@/components/templates/ExperienceTemplate";
import { EXPERIENCES, experiencesBySlug } from "@/content/experiences";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiencesBySlug[slug];
  if (!experience) return {};

  return buildMetadata({
    title: `${experience.title} | Greece Honeymoon Experiences`,
    description: clampDescription(experience.answer),
    pathname: routes.experience(experience.slug),
    image: experience.heroImage,
    modifiedTime: experience.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const experience = experiencesBySlug[slug];
  if (!experience) notFound();

  return <ExperienceTemplate experience={experience} />;
}
