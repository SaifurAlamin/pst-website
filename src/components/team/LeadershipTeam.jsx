
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, ArrowUpRight } from "lucide-react";

const teamMembers = [
    {
        key: "member1",
        imagePosition: "12%",
    },
    {
        key: "member2",
        imagePosition: "38%",
    },
    {
        key: "member3",
        imagePosition: "64%",
    },
    {
        key: "member4",
        imagePosition: "90%",
    },
];

export default function LeadershipTeam() {
    const t = useTranslations("TeamPage.leadership");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="overflow-hidden bg-white py-20 md:py-28"
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
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-pst-blue">
                        <Users size={16} />
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Team Members */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
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
                            {/* Profile Image */}
                            <div className="relative h-[340px] overflow-hidden bg-slate-100">
                                <Image
                                    src="/images/team/team-hero.webp"
                                    alt={t(`${member.key}.imageAlt`)}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: `${member.imagePosition} center`,
                                    }}
                                    className="transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pst-navy/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Member Number */}
                                <span className={`absolute top-5 ${isArabic ? "right-5" : "left-5"} flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-pst-navy/70 text-sm font-bold text-white backdrop-blur-md`}>
                                    0{index + 1}
                                </span>

                                {/* Hover Icon */}
                                <div className={`absolute bottom-5 ${isArabic ? "left-5" : "right-5"} flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-pst-blue opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100`}>
                                    <ArrowUpRight
                                        size={21}
                                        className={isArabic ? "rotate-180" : ""}
                                    />
                                </div>
                            </div>

                            {/* Member Information */}
                            <div className="p-6">
                                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-pst-blue">
                                    {t("memberLabel")}
                                </span>

                                <h3 className="text-xl font-bold text-pst-navy">
                                    {t(`${member.key}.name`)}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-slate-500">
                                    {t(`${member.key}.designation`)}
                                </p>

                                <div className="mt-5 h-1 w-12 rounded-full bg-pst-blue transition-all duration-500 group-hover:w-20" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
