
"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function CompanyIntroduction() {
    const t = useTranslations("AboutPage.introduction");
    const locale = useLocale();
    const isArabic = locale === "ar";

    const features = [
        t("features.installation"),
        t("features.maintenance"),
        t("features.technical"),
    ];

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="overflow-hidden bg-white py-20 sm:py-24"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: isArabic ? 35 : -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-pstc-blue">
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pstc-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-600">
                        {t("description")}
                    </p>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                        {t("secondDescription")}
                    </p>

                    <div className="mt-8 space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2
                                    size={20}
                                    className="shrink-0 text-pstc-blue"
                                />
                                <span className="text-sm font-semibold text-slate-700 sm:text-base">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isArabic ? -35 : 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[2rem] border-l-4 border-t-4 border-[#DC2626]" />

                    <div className="relative overflow-hidden rounded-3xl bg-[#101D3A] p-8 text-white shadow-2xl sm:p-12">
                        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-white/10" />

                        <div className="relative">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                                <Building2 size={32} />
                            </div>

                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                                {t("card.eyebrow")}
                            </p>

                            <h3 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
                                {t("card.title")}
                            </h3>

                            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                                {t("card.description")}
                            </p>

                            <div className="mt-10 h-1 w-16 rounded-full bg-[#DC2626]" />
                            <p className="mt-5 text-sm font-semibold text-white/80">
                                {t("card.location")}
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-br-[2rem] border-b-4 border-r-4 border-pstc-blue" />
                </motion.div>
            </div>
        </section>
    );
}
