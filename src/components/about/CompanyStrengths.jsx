
"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, HardHat, Cog, Building2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function CompanyStrengths() {
    const t = useTranslations("AboutPage.strengths");
    const locale = useLocale();
    const isArabic = locale === "ar";

    const items = [
        { key: "mep", icon: Building2 },
        { key: "hvac", icon: Cog },
        { key: "execution", icon: ClipboardCheck },
        { key: "manpower", icon: HardHat },
    ];

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-[#101D3A] py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                        {t("eyebrow")}
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-300">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                                    <Icon size={27} />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    {t(`${item.key}.title`)}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    {t(`${item.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
