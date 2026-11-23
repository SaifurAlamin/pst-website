
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowRight, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function TeamHero() {
    const t = useTranslations("TeamPage.hero");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative flex min-h-[520px] items-center overflow-hidden bg-pst-navy md:min-h-[620px]"
        >
            {/* Background Image */}
            <Image
                src="/images/team/team-hero.webp"
                alt={t("imageAlt")}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pst-navy/95 via-pst-navy/75 to-pst-navy/30" />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
                <div className="max-w-3xl">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex items-center gap-3 text-sm font-medium text-white/80"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 transition-colors hover:text-white"
                        >
                            <Home size={15} />
                            {t("home")}
                        </Link>

                        <ArrowRight
                            size={15}
                            className={isArabic ? "rotate-180" : ""}
                        />

                        <span className="text-white">
                            {t("breadcrumb")}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                            <Users size={16} />
                            {t("eyebrow")}
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                            {t("title")}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                            {t("description")}
                        </p>

                        <div className="mt-9">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg bg-pst-blue px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                            >
                                {t("button")}
                                <ArrowRight
                                    size={18}
                                    className={`transition-transform group-hover:translate-x-1 ${isArabic ? "rotate-180" : ""
                                        }`}
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-pst-blue via-white/40 to-pst-red" />
        </section>
    );
}

