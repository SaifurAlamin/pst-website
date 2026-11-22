
import { hasLocale } from "next-intl";
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import AboutHero from "@/components/about/AboutHero";
import CompanyIntroduction from "@/components/about/CompanyIntroduction";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CompanyStrengths from "@/components/about/CompanyStrengths";
import AboutCTA from "@/components/about/AboutCTA";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const t = await getTranslations({
        locale,
        namespace: "AboutPage.metadata",
    });

    const pageUrl = `/${locale}/about`;
    const image = "/images/projects/projects-hero.webp";

    return {
        title: t("title"),
        description: t("description"),

        alternates: {
            canonical: pageUrl,
            languages: {
                en: "/en/about",
                ar: "/ar/about",
                "x-default": "/en/about",
            },
        },

        openGraph: {
            title: t("title"),
            description: t("description"),
            url: pageUrl,
            siteName: "PST - Power Sixers Trading and Contracting W.L.L.",
            locale: locale === "ar" ? "ar_QA" : "en_QA",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: t("imageAlt"),
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
            images: [image],
        },
    };
}

export default async function AboutPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <AboutHero />
            <CompanyIntroduction />
            <MissionVision />
            <WhyChooseUs />
            <CompanyStrengths />
            <AboutCTA />
        </main>
    );
}
