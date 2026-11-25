
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

const seoContent = {
    en: {
        title: "Our Projects | MEP & HVAC Works in Qatar | PSTC",
        description:
            "Explore PSTC's project work in Qatar, including HVAC duct installation, ceiling works, MEP solutions and fire fighting system installation.",
    },
    ar: {
        title: "مشاريعنا | أعمال التكييف والأنظمة الكهروميكانيكية في قطر | PSTC",
        description:
            "اكتشف أعمال شركة PSTC في قطر في مجالات تركيب مجاري الهواء والتكييف والأسقف وأنظمة مكافحة الحريق وحلول الهندسة الكهروميكانيكية.",
    },
};

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const seo = seoContent[locale];

    return {
        title: seo.title,
        description: seo.description,
        alternates: {
            canonical: `/${locale}/projects`,
            languages: {
                en: "/en/projects",
                ar: "/ar/projects",
            },
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            images: [
                {
                    url: "/images/projects/projects-hero.webp",
                    alt: "PSTC Projects in Qatar",
                },
            ],
            type: "website",
            locale: locale === "ar" ? "ar_QA" : "en_QA",
        },
    };
}

export default async function ProjectsPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <ProjectsHero locale={locale} />
            <ProjectsGrid locale={locale} />
        </main>
    );
}
