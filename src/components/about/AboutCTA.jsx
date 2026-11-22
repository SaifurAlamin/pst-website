
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutCTA() {
    const t = useTranslations("AboutPage.cta");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-white px-5 py-20 sm:px-8 sm:py-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#174A8B] px-7 py-14 text-center sm:px-12 sm:py-16"
            >
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-3xl">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                        {t("eyebrow")}
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">
                        {t("description")}
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-pst-navy transition hover:-translate-y-1 hover:bg-blue-50"
                        >
                            <MessageCircle size={18} />
                            {t("contactButton")}
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
                        >
                            {t("servicesButton")}
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
