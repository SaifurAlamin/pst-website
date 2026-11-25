
import { getTranslations } from "next-intl/server";
import { services } from "@/data/services";
import ServicesCard from "./ServiceCard";

export default async function ServicesGrid({ locale }) {
    const t = await getTranslations("ServicesPage");

    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-red-100/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-pstc-blue">
                        <span className="h-2 w-2 rounded-full bg-pstc-red" />
                        {t("eyebrow")}
                    </span>

                    <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-pstc-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                        {t("description")}
                    </p>

                    <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-pstc-blue" />
                </div>

                {/* Services cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={service.slug}
                            service={service}
                            locale={locale}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
