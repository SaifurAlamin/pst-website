
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    CheckCircle2,
    Wind,
    Snowflake,
    Wrench,
    Settings2,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/common/Container";

const heroImages = [
    "/images/hero/hero-main.webp",
    "/images/hero/hero-second.webp",
    "/images/hero/hero-third.webp",
];

export default function Hero() {
    const t = useTranslations("HomePage");
    const reduceMotion = useReducedMotion();

    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        if (reduceMotion) return;

        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reduceMotion]);

    const fadeUp = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative isolate min-h-[680px] overflow-hidden bg-pstc-navy lg:min-h-[740px]">

            {/* Animated Background Images */}
            <div className="absolute inset-0 -z-20">
                {heroImages.map((image, index) => (
                    <Image
                        key={image}
                        src={image}
                        alt="Power Sixers MEP and HVAC services"
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${activeImage === index
                            ? "opacity-100"
                            : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* Balanced Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D3A]/85 via-[#101D3A]/55 to-[#101D3A]/20" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101D3A]/70 via-transparent to-[#101D3A]/20" />

            <Container>
                <div className="grid min-h-[680px] items-center gap-14 py-20 lg:min-h-[740px] lg:grid-cols-[1.1fr_0.9fr] lg:py-24">

                    {/* Left Content */}
                    <div className="max-w-2xl">

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-200"
                        >
                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                            {t("heroEyebrow")}
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                        >
                            {t("heroTitle")}
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
                        >
                            {t("heroDescription")}
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.65 }}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-3 rounded-lg bg-pstc-blue px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                            >
                                {t("exploreServices")}
                                <ArrowUpRight
                                    size={19}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-pstc-navy"
                            >
                                {t("contactUs")}
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-12 flex flex-wrap gap-x-7 gap-y-4"
                        >
                            {[t("heroFeatureOne"), t("heroFeatureTwo")].map(
                                (feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2 text-sm text-slate-200"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-blue-400"
                                        />
                                        {feature}
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative mx-auto hidden w-full max-w-md lg:block"
                    >
                        {/* Main Visual Card */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl shadow-black/30 backdrop-blur-md">

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold tracking-[3px] text-blue-300">
                                        PSTC ENGINEERING
                                    </p>
                                    <h2 className="mt-3 text-2xl font-bold text-white">
                                        {t("visualTitle")}
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                                    <Settings2 size={26} />
                                </div>
                            </div>

                            <div className="my-8 h-px bg-white/15" />

                            <div className="space-y-5">
                                {[
                                    { icon: Wind, text: t("visualItemOne") },
                                    { icon: Snowflake, text: t("visualItemTwo") },
                                    { icon: Wrench, text: t("visualItemThree") },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.text}
                                            initial={false}
                                            animate={reduceMotion ? {} : { x: [0, 5, 0] }}
                                            transition={{
                                                duration: 4,
                                                delay: index * 0.4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                                                <Icon size={22} />
                                            </div>

                                            <span className="text-sm font-semibold text-white">
                                                {item.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                                <span className="text-xs font-medium tracking-widest text-blue-200">
                                    BUILD · INSTALL · MAINTAIN
                                </span>
                                <ArrowUpRight className="text-blue-300" />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -right-8 top-20 rounded-2xl border border-white/20 bg-white p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-pstc-blue">
                                    <Wind size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-pstc-navy">
                                        HVAC SOLUTIONS
                                    </p>
                                    <p className="mt-1 text-[11px] text-slate-500">
                                        Installation & Maintenance
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 end-8 z-10 flex items-center gap-2">
                {heroImages.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`Show background image ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 ${activeImage === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pstc-blue via-blue-400 to-pstc-red" />
        </section>
    );
}
