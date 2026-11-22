
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
export async function generateMetadata({ params }) {
    const { locale } = await params;

    const content = {
        en: {
            title: "Project Gallery | PST Qatar",
            description:
                "Explore PST's project gallery featuring HVAC, MEP installation, fire fighting, ducting and technical works in Qatar.",
        },
        ar: {
            title: "معرض المشاريع | PST قطر",
            description:
                "استكشف معرض مشاريع شركة PST في قطر، بما يشمل أعمال التكييف والتركيب الميكانيكي والكهربائي ومكافحة الحريق والخدمات الفنية.",
        },
    };

    const t = content[locale] || content.en;

    return {
        title: t.title,
        description: t.description,

        alternates: {
            canonical: `/${locale}/gallery`,
            languages: {
                en: "/en/gallery",
                ar: "/ar/gallery",
                "x-default": "/en/gallery",
            },
        },

        openGraph: {
            title: t.title,
            description: t.description,
            type: "website",
            images: [
                {
                    url: "/images/projects/projects-hero.webp",
                    width: 1200,
                    height: 630,
                    alt: "PST Project Gallery",
                },
            ],
        },
    };
}

export default async function GalleryPage({ params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <GalleryHero locale={locale} />
            <GalleryGrid locale={locale} />
            <GalleryCTA locale={locale} />
        </main>
    );
}
