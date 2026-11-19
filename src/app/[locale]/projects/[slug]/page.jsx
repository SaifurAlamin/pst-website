
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        projects.map((project) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const project = getProjectBySlug(slug);

    if (!project) {
        return {};
    }

    const content = project[locale] || project.en;

    return {
        title: `${content.title} | PST`,
        description: content.description,
        alternates: {
            canonical: `/${locale}/projects/${project.slug}`,
            languages: {
                en: `/en/projects/${project.slug}`,
                ar: `/ar/projects/${project.slug}`,
            },
        },
        openGraph: {
            title: content.title,
            description: content.description,
            images: [project.image],
            type: "article",
        },
    };
}

export default async function ProjectDetailsPage({ params }) {
    const { locale, slug } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    setRequestLocale(locale);

    return <ProjectDetails project={project} locale={locale} />;
}
