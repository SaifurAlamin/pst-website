
"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function MissionVision() {
    const t = useTranslations("AboutPage.missionVision");
    const locale = useLocale();
    const isArabic = locale === "ar";

    const items = [
        {
            key: "mission",
            icon: Target,
            color: "bg-blue-50 text-pst-blue",
        },
        {
            key: "vision",
            icon: Eye,
            color: "bg-red-50 text-red-700",
        },
        {
            key: "values",
            icon: Heart,
            color: "bg-slate-100 text-pst-navy",
        },
    ];

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-pst-blue">
                        {t("eyebrow")}
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-pst-navy sm:text-4xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-500">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -7 }}
                                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
                            >
                                <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                                    <Icon size={27} />
                                </div>

                                <h3 className="text-xl font-bold text-pst-navy">
                                    {t(`${item.key}.title`)}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-500">
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
