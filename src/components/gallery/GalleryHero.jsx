"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Images, ArrowDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function GalleryHero({ locale }) {
    const isArabic = locale === "ar";

    const content = {
        en: {
            eyebrow: "OUR WORK IN ACTION",
            title: "Project Gallery",
            description:
                "Explore a visual collection of our MEP, HVAC, installation and technical work across different projects.",
            home: "Home",
            gallery: "Gallery",
            button: "Explore Gallery",
        },
        ar: {
            eyebrow: "أعمالنا على أرض الواقع",
            title: "معرض المشاريع",
            description:
                "استكشف مجموعة من الصور لأعمالنا في مجالات الهندسة الميكانيكية والكهربائية والسباكة والتكييف والخدمات الفنية.",
            home: "الرئيسية",
            gallery: "المعرض",
            button: "استكشف المعرض",
        },
    };

    const t = content[locale] || content.en;

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-pst-navy"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/projects/projects-hero.webp"
                    alt="MEP project background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-pst-navy/85" />

                <div className="absolute inset-0 bg-gradient-to-r from-pst-navy via-pst-navy/80 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />

            <div className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:py-40">
                <div className="max-w-3xl">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex items-center gap-3 text-sm text-white/70"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-white"
                        >
                            {t.home}
                        </Link>

                        <span className="text-pst-red">/</span>

                        <span className="text-white">
                            {t.gallery}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                                <Images size={24} />
                            </div>

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                                {t.eyebrow}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                            {t.title}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                            {t.description}
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-10"
                    >
                        <a
                            href="#gallery-grid"
                            className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-semibold text-pst-navy transition duration-300 hover:bg-red-600 hover:text-white"
                        >
                            {t.button}

                            <ArrowDown size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-pst-red" />
        </section>
    );
}
