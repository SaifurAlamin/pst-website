
import { hasLocale } from "next-intl";
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseServices from "@/components/services/WhyChooseServices";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const t = await getTranslations({
        locale,
        namespace: "ServicesPage.metadata",
    });

    const pageUrl = `/${locale}/services`;
    const image = "/images/services/services-hero.webp";

    return {
        title: t("title"),
        description: t("description"),

        alternates: {
            canonical: pageUrl,
            languages: {
                en: "/en/services",
                ar: "/ar/services",
                "x-default": "/en/services",
            },
        },

        openGraph: {
            title: t("title"),
            description: t("description"),
            url: pageUrl,
            siteName: "PSTC - Power Sixers Trading and Contracting W.L.L.",
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

export default async function ServicesPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <ServicesHero locale={locale} />
            <ServicesGrid locale={locale} />
            <WhyChooseServices locale={locale} />
        </main>
    );
}
