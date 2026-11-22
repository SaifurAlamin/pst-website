
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutHero() {
    const t = useTranslations("AboutPage.hero");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#101D3A] py-24 sm:min-h-[480px] lg:min-h-[520px]"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#174A8B]/30 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
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
                            {t("home")}
                        </Link>

                        {isArabic ? (
                            <ArrowRight size={14} />
                        ) : (
                            <ArrowRight size={14} />
                        )}

                        <span className="font-medium text-white">
                            {t("breadcrumb")}
                        </span>
                    </div>

                    {/* Eyebrow */}
                    <span className="mb-5 inline-block border-s-4 border-[#DC2626] ps-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                        {t("eyebrow")}
                    </span>

                    {/* Title */}
                    <h1 className="mb-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                        {t("title")}
                    </h1>

                    {/* Description */}
                    <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t("description")}
                    </p>

                    <div className="mt-9 h-1 w-20 rounded-full bg-[#DC2626]" />
                </motion.div>
            </div>
        </section>
    );
}
