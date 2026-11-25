"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const items = [
    {
        key: "mission",
        icon: Target,
        image: "/images/about/mission.webp",
        color: "bg-blue-50 text-pstc-blue",
    },
    {
        key: "vision",
        icon: Eye,
        image: "/images/about/vision.webp",
        color: "bg-red-50 text-red-700",
    },
    {
        key: "values",
        icon: Heart,
        image: "/images/about/values.webp",
        color: "bg-slate-100 text-pstc-navy",
    },
];

export default function MissionVision() {
    const t = useTranslations("AboutPage.missionVision");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="overflow-hidden bg-white py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 md:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-pstc-blue">
                        {t("badge")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pstc-navy md:text-5xl">
                        {t("heading")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={t(`${item.key}.title`)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-pstc-navy/70 via-transparent to-transparent" />

                                    {/* Icon */}
                                    <div
                                        className={`absolute bottom-5 ${isArabic ? "right-5" : "left-5"} flex h-14 w-14 items-center justify-center rounded-xl ${item.color} shadow-lg`}
                                    >
                                        <Icon size={28} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7 md:p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-pstc-navy transition-colors duration-300 group-hover:text-pstc-blue">
                                        {t(`${item.key}.title`)}
                                    </h3>

                                    <p className="text-base leading-8 text-slate-600">
                                        {t(`${item.key}.description`)}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className="mt-6 h-1 w-16 rounded-full bg-pstc-blue transition-all duration-500 group-hover:w-28" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}