
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
    services,
    getServiceBySlug,
} from "@/data/services";
import ServiceDetails from "@/components/services/ServiceDetails";

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        services.map((service) => ({
            locale,
            slug: service.slug,
        }))
    );
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;

    if (!routing.locales.includes(locale)) {
        return {};
    }

    const service = getServiceBySlug(slug);

    if (!service) {
        return {};
    }

    const content = service[locale];

    return {
        title: `${content.title} | PST`,
        description: content.description,
        alternates: {
            canonical: `/${locale}/services/${slug}`,
            languages: {
                en: `/en/services/${slug}`,
                ar: `/ar/services/${slug}`,
                "x-default": `/en/services/${slug}`,
            },
        },
        openGraph: {
            title: `${content.title} | PST`,
            description: content.description,
            images: [
                {
                    url: service.image,
                    alt: content.imageAlt,
                },
            ],
            type: "website",
        },
    };
}

export default async function ServiceDetailsPage({ params }) {
    const { locale, slug } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <ServiceDetails
            service={service}
            locale={locale}
        />
    );
}
