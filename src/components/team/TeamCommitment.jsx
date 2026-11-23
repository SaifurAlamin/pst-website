
"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Users,
    Award,
    ShieldCheck,
    ArrowUpRight,
} from "lucide-react";

const commitments = [
    {
        key: "teamwork",
        icon: Users,
        color: "bg-blue-50 text-pst-blue",
        number: "01",
    },
    {
        key: "expertise",
        icon: Award,
        color: "bg-red-50 text-red-700",
        number: "02",
    },
    {
        key: "safety",
        icon: ShieldCheck,
        color: "bg-slate-100 text-pst-navy",
        number: "03",
    },
];

export default function TeamCommitment() {
    const t = useTranslations("TeamPage.commitment");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-white py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-wider text-pst-blue">
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Commitment Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                    {commitments.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.key}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-pst-blue/30 hover:shadow-xl md:p-10"
                            >
                                {/* Background Number */}
                                <span className={`absolute top-5 ${isArabic ? "left-7" : "right-7"} text-6xl font-black text-slate-100 transition-colors duration-500 group-hover:text-blue-50`}>
                                    {item.number}
                                </span>

                                {/* Icon */}
                                <div className={`relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon size={30} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="relative mb-4 text-2xl font-bold text-pst-navy transition-colors duration-300 group-hover:text-pst-blue">
                                    {t(`${item.key}.title`)}
                                </h3>

                                <p className="relative text-base leading-8 text-slate-600">
                                    {t(`${item.key}.description`)}
                                </p>

                                {/* Bottom Accent */}
                                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                                    <span className="text-xs font-bold uppercase tracking-widest text-pst-blue">
                                        {t("cardLabel")}
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className={`text-pst-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${isArabic ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
