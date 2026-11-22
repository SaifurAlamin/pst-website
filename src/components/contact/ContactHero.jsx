
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactHero() {
    const t = useTranslations("ContactPage");

    return (
        <section className="relative overflow-hidden bg-[#101D3A] py-24 sm:py-28 lg:py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#174A8B]/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    {/* Breadcrumb */}
                    <div className="mb-8 flex items-center gap-3 text-sm text-white/60">
                        <Link
                            href="/"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Home size={15} />
                            {t("hero.home")}
                        </Link>

                        <ArrowRight size={14} />

                        <span className="font-medium text-white">
                            {t("hero.breadcrumb")}
                        </span>
                    </div>

                    {/* Heading */}
                    <span className="mb-5 inline-block border-s-4 border-[#DC2626] ps-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                        {t("hero.eyebrow")}
                    </span>

                    <h1 className="mb-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                        {t("hero.title")}
                    </h1>

                    <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t("hero.description")}
                    </p>

                    <div className="mt-9 h-1 w-20 rounded-full bg-[#DC2626]" />
                </motion.div>
            </div>
        </section>
    );
}
