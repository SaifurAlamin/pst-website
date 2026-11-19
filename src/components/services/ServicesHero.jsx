
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ServicesHero({ locale }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-pst-navy sm:min-h-[600px] lg:min-h-[650px]"
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/services/services-hero.webp"
                    alt={
                        isArabic
                            ? "خدمات الهندسة والتركيبات للمباني"
                            : "Professional MEP engineering and installation services"
                    }
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D3A] via-[#101D3A]/90 to-[#101D3A]/55" />

            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-12 top-24 h-56 w-56 rounded-full border border-white/10" />

            {/* Content */}
            <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="max-w-3xl"
                >
                    {/* Breadcrumb */}
                    <motion.div
                        variants={reduceMotion ? {} : fadeUp}
                        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300"
                    >
                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            {isArabic ? "الرئيسية" : "Home"}
                        </Link>

                        <ChevronRight
                            size={15}
                            className={isArabic ? "rotate-180" : ""}
                        />

                        <span className="font-semibold text-blue-300">
                            {isArabic ? "خدماتنا" : "Our Services"}
                        </span>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.div
                        variants={reduceMotion ? {} : fadeUp}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-[2px] w-10 bg-pst-red" />

                        <span className="text-xs font-bold uppercase tracking-[3px] text-blue-200 sm:text-sm">
                            {isArabic
                                ? "باور سيكسرز للتجارة والمقاولات"
                                : "POWER SIXERS TRADING & CONTRACTING"}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={reduceMotion ? {} : fadeUp}
                        className="mb-7 text-4xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-7xl"
                    >
                        {isArabic ? (
                            <>
                                حلول هندسية
                                <span className="mt-2 block text-blue-300">
                                    وخدمات فنية متكاملة
                                </span>
                            </>
                        ) : (
                            <>
                                Professional MEP
                                <span className="mt-2 block text-blue-300">
                                    & Technical Services
                                </span>
                            </>
                        )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={reduceMotion ? {} : fadeUp}
                        className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base lg:text-lg"
                    >
                        {isArabic
                            ? "نقدم خدمات التركيب والصيانة والدعم الفني لتلبية متطلبات مشاريع المباني والمنشآت في قطر."
                            : "Explore our MEP installation, HVAC, maintenance and technical services designed to support building and project requirements in Qatar."}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={reduceMotion ? {} : fadeUp}
                        className="mt-9 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-lg bg-pst-blue px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                        >
                            {isArabic ? "تواصل معنا" : "Discuss Your Project"}

                            {isArabic ? (
                                <ArrowLeft size={18} />
                            ) : (
                                <ArrowRight size={18} />
                            )}
                        </Link>

                        <Link
                            href="/services/mep-installation"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                        >
                            {isArabic ? "استكشف خدماتنا" : "Explore Services"}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pst-blue via-blue-400 to-pst-red" />
        </section>
    );
}
