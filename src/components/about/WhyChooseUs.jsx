
"use client";

import { motion } from "framer-motion";
import {
    Wrench,
    Settings,
    Users,
    ShieldCheck,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function WhyChooseUs() {
    const t = useTranslations("AboutPage.whyChoose");
    const locale = useLocale();
    const isArabic = locale === "ar";

    const items = [
        { key: "solutions", icon: Wrench },
        { key: "technical", icon: Settings },
        { key: "manpower", icon: Users },
        { key: "commitment", icon: ShieldCheck },
    ];

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-pstc-blue">
                            {t("eyebrow")}
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-pstc-navy sm:text-4xl">
                            {t("title")}
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-500">
                            {t("description")}
                        </p>
                    </motion.div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {items.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-pstc-blue transition group-hover:bg-pstc-blue group-hover:text-white">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-lg font-bold text-pstc-navy">
                                        {t(`${item.key}.title`)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        {t(`${item.key}.description`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
