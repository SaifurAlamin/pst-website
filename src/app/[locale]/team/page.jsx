
import { hasLocale } from "next-intl";
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import TeamHero from "@/components/team/TeamHero";
import LeadershipTeam from "@/components/team/LeadershipTeam";
import TechnicalTeam from "@/components/team/TechnicalTeam";
import TeamCommitment from "@/components/team/TeamCommitment";
import TeamCTA from "@/components/team/TeamCTA";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const t = await getTranslations({
        locale,
        namespace: "TeamPage.metadata",
    });

    const pageUrl = `/${locale}/team`;
    const image = "/images/team/team-hero.webp";

    return {
        title: t("title"),
        description: t("description"),

        keywords: t("keywords"),

        alternates: {
            canonical: pageUrl,
            languages: {
                en: "/en/team",
                ar: "/ar/team",
                "x-default": "/en/team",
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

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function TeamPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <TeamHero />
            <LeadershipTeam />
            <TechnicalTeam />
            <TeamCommitment />
            <TeamCTA />
        </main>
    );
}
