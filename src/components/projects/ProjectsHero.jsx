
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ProjectsHero({ locale }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    const content = {
        en: {
            breadcrumbHome: "Home",
            breadcrumbCurrent: "Projects",
            eyebrow: "OUR PROJECT PORTFOLIO",
            title: "Delivering Projects",
            highlight: "That Make a Difference.",
            description:
                "Explore our project work across HVAC, MEP installation, fire fighting and technical solutions in Qatar.",
            button: "Explore Projects",
            contact: "Discuss Your Project",
        },
        ar: {
            breadcrumbHome: "الرئيسية",
            breadcrumbCurrent: "مشاريعنا",
            eyebrow: "سجل مشاريعنا",
            title: "ننـفذ مشاريع",
            highlight: "تصنع الفرق.",
            description:
                "اكتشف أعمالنا في مجالات التكييف والتهوية وتركيبات الهندسة الميكانيكية والكهربائية والسباكة وأنظمة مكافحة الحريق في قطر.",
            button: "استكشف المشاريع",
            contact: "ناقش مشروعك معنا",
        },
    };

    const t = content[locale] || content.en;

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative flex min-h-[540px] items-center overflow-hidden bg-pstc-navy sm:min-h-[600px] lg:min-h-[650px]"
        >
            {/* Background Image */}
            <Image
                src="/images/projects/projects-hero.webp"
                alt={
                    isArabic
                        ? "مشاريع وحلول هندسية"
                        : "PSTC engineering and MEP projects"
                }
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#101D3A]/95 via-[#101D3A]/80 to-[#101D3A]/40" />

            {/* Arabic overlay adjustment */}
            {isArabic && (
                <div className="absolute inset-0 bg-gradient-to-l from-[#101D3A]/95 via-[#101D3A]/80 to-[#101D3A]/40" />
            )}

            {/* Decorative Elements */}
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-8 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    {/* Breadcrumb */}
                    <div className="mb-8 flex items-center gap-3 text-sm text-white/70">
                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            {t.breadcrumbHome}
                        </Link>

                        <span className="text-pstc-red">/</span>

                        <span className="font-medium text-white">
                            {t.breadcrumbCurrent}
                        </span>
                    </div>

                    {/* Eyebrow */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-red-500" />
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:text-sm">
                            {t.eyebrow}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                        {t.title}
                        <span className="mt-2 block text-red-400">
                            {t.highlight}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                        {t.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects-list"
                            className="group inline-flex items-center gap-3 rounded-md bg-pstc-blue px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:bg-blue-700"
                        >
                            {t.button}

                            {isArabic ? (
                                <ArrowUpLeft
                                    size={18}
                                    className="transition-transform group-hover:-translate-x-1"
                                />
                            ) : (
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            )}
                        </a>

                        <Link
                            href="/contact"
                            className="rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                        >
                            {t.contact}
                        </Link>
                    </div>
                </motion.div>

                {/* Bottom Scroll Indicator */}
                <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/60 lg:flex">
                    <span>{isArabic ? "اكتشف المزيد" : "Scroll to explore"}</span>
                    <ArrowDown size={16} className="animate-bounce" />
                </div>
            </div>
        </section>
    );
}
