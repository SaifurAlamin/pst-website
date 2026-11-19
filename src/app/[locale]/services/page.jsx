import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseServices from "@/components/services/WhyChooseServices";

export default async function ServicesPage({ params }) {
    const { locale } = await params;

    return (
        <main>
            <ServicesHero locale={locale} />

            <ServicesGrid locale={locale} />

            <WhyChooseServices locale={locale} />
        </main>
    );
}