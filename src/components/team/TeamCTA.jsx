
"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, MessageCircle, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function TeamCTA() {
    const t = useTranslations("TeamPage.cta");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-pst-navy py-20 md:py-24"
        >
            {/* Background Decorations */}
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-pst-blue/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-pst-red/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    {/* Icon */}
                    <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                        <Users size={30} />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                        {t("description")}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 text-sm font-bold text-pst-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 sm:w-auto"
                        >
                            {t("contactButton")}
                            <ArrowUpRight
                                size={19}
                                className={isArabic ? "rotate-[-90deg]" : ""}
                            />
                        </Link>

                        <a
                            href={`https://wa.me/97450925474?text=${encodeURIComponent(
                                t("whatsappMessage")
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
                        >
                            <MessageCircle size={19} />
                            {t("whatsappButton")}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
