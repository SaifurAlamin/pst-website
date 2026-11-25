
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Wrench } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function GalleryCTA({ locale }) {
    const isArabic = locale === "ar";

    const content = {
        en: {
            eyebrow: "HAVE A PROJECT IN MIND?",
            title: "Let's Build Something Great Together",
            description:
                "Looking for reliable MEP, HVAC or technical solutions for your project? Get in touch with our team to discuss your requirements.",
            contact: "Contact Our Team",
            services: "Explore Our Services",
        },
        ar: {
            eyebrow: "هل لديك مشروع في ذهنك؟",
            title: "لنعمل معًا على إنجاز مشروع مميز",
            description:
                "هل تبحث عن حلول موثوقة في مجالات الهندسة الميكانيكية والكهربائية والتكييف والخدمات الفنية؟ تواصل مع فريقنا لمناقشة متطلبات مشروعك.",
            contact: "تواصل مع فريقنا",
            services: "اكتشف خدماتنا",
        },
    };

    const t = content[locale] || content.en;

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-pstc-navy py-20 md:py-28"
        >
            {/* Decorative background */}
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-pstc-blue/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                        <Wrench size={30} />
                    </div>

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                        {t.eyebrow}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        {t.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                        {t.description}
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 font-semibold text-pstc-navy transition duration-300 hover:bg-pstc-red hover:text-white sm:w-auto"
                        >
                            <MessageCircle size={19} />
                            {t.contact}
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/25 px-8 py-4 font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
                        >
                            {t.services}
                            <ArrowUpRight size={19} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
