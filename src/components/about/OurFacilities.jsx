
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Building2, Wrench, Settings, ShieldCheck } from "lucide-react";

const facilities = [
    {
        key: "office",
        image: "/images/about/facilities-office.webp",
        icon: Building2,
    },
    {
        key: "equipment",
        image: "/images/about/facilities-equipment.webp",
        icon: Wrench,
    },
    {
        key: "technical",
        image: "/images/about/facilities-technical.webp",
        icon: Settings,
    },
    {
        key: "safety",
        image: "/images/about/facilities-safety.webp",
        icon: ShieldCheck,
    },
];

export default function OurFacilities() {
    const t = useTranslations("AboutPage.facilities");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Section Header */}
                <div className="mb-14 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-pst-blue"
                    >
                        {t("eyebrow")}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl"
                    >
                        {t("title")}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 max-w-2xl text-base leading-8 text-slate-600"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;

                        return (
                            <motion.div
                                key={facility.key}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12,
                                }}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={facility.image}
                                        alt={t(`${facility.key}.imageAlt`)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-pst-navy/70 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 start-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-pst-blue shadow-lg">
                                        <Icon size={23} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="mb-3 text-xl font-bold text-pst-navy">
                                        {t(`${facility.key}.title`)}
                                    </h3>

                                    <p className="text-sm leading-7 text-slate-600">
                                        {t(`${facility.key}.description`)}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-pst-blue">
                                        <span className="text-xs font-semibold uppercase tracking-wider">
                                            {t("cardLabel")}
                                        </span>

                                        <ArrowUpRight
                                            size={18}
                                            className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${isArabic ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
