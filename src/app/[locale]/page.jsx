
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChoosePreview from "@/components/home/WhyChoosePreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTASection from "@/components/home/CTASection";
import ContactPreview from "@/components/home/ContactPreview";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default async function HomePage({ params }) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <AboutPreview />
            {/* <Stats /> */}
            <ServicesPreview />
            <WhyChoosePreview />
            <ProjectsPreview />
            <CTASection />
            <ContactPreview />
            <FloatingWhatsApp/>
        </main>
    );
}
