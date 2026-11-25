
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title: {
            default: "PSTC | Your Trusted MEP Partner in Qatar",
            template: "%s | PSTC",
        },
        description:
            "Power Sixers Trading and Contracting W.L.L. - Your Trusted MEP Partner in Qatar.",
        alternates: {
            languages: {
                en: "/en",
                ar: "/ar",
            },
        },
        openGraph: {
            type: "website",
            siteName: "Power Sixers Trading and Contracting W.L.L.",
            locale: locale === "ar" ? "ar_QA" : "en_QA",
            title: "PSTC | Your Trusted MEP Partner in Qatar",
            description:
                "Professional MEP, HVAC and maintenance services in Qatar.",
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
        >
            <body className="min-h-screen antialiased">
                <NextIntlClientProvider messages={messages}>
                    <TopBar />
                    <Navbar />
                    {children}
                    <Footer />
                    <FloatingWhatsApp />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
