
import { hasLocale } from "next-intl";
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        return {};
    }

    const t = await getTranslations({
        locale,
        namespace: "ContactPage.metadata",
    });

    const pageUrl = `/${locale}/contact`;
    const image = "/images/projects/projects-hero.webp";

    return {
        title: t("title"),
        description: t("description"),

        alternates: {
            canonical: pageUrl,
            languages: {
                en: "/en/contact",
                ar: "/ar/contact",
                "x-default": "/en/contact",
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

export default async function ContactPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </main>
    );
}
