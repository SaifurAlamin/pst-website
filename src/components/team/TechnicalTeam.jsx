
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Wrench,
    Wind,
    Settings,
    HardHat,
} from "lucide-react";

const technicalMembers = [
    {
        key: "hvac",
        image: "/images/team/technical-hvac.webp",
        icon: Wind,
    },
    {
        key: "mep",
        image: "/images/team/technical-mep.webp",
        icon: Settings,
    },
    {
        key: "installation",
        image: "/images/team/technical-installation.webp",
        icon: HardHat,
    },
    {
        key: "maintenance",
        image: "/images/team/technical-maintenance.webp",
        icon: Wrench,
    },
];

export default function TechnicalTeam() {
    const t = useTranslations("TeamPage.technical");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-pst-blue">
                        <Settings size={16} />
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Technical Team Grid */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {technicalMembers.map((member, index) => {
                        const Icon = member.icon;

                        return (
                            <motion.article
                                key={member.key}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden bg-slate-200">
                                    <Image
                                        src={member.image}
                                        alt={t(`${member.key}.imageAlt`)}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-pst-navy/70 via-transparent to-transparent" />

                                    <div className={`absolute bottom-5 ${isArabic ? "right-5" : "left-5"} flex h-12 w-12 items-center justify-center rounded-xl bg-white text-pst-blue shadow-lg`}>
                                        <Icon size={23} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-pst-blue">
                                        {t("memberLabel")}
                                    </span>

                                    <h3 className="text-xl font-bold text-pst-navy transition-colors group-hover:text-pst-blue">
                                        {t(`${member.key}.title`)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {t(`${member.key}.description`)}
                                    </p>

                                    <div className="mt-5 h-1 w-12 rounded-full bg-pst-blue transition-all duration-500 group-hover:w-20" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
