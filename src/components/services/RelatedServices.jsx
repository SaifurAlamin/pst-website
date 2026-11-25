
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";

export default function RelatedServices({ currentSlug, locale }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    // Exclude current service and show maximum 3 related services
    const relatedServices = services
        .filter((service) => service.slug !== currentSlug)
        .slice(0, 3);

    if (!relatedServices.length) return null;

    return (
        <section
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-red-100/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-pstc-blue">
                        <span className="h-2 w-2 rounded-full bg-pstc-red" />
                        {isArabic ? "اكتشف المزيد" : "EXPLORE MORE"}
                    </span>

                    <h2 className="mb-4 text-3xl font-extrabold text-pstc-navy sm:text-4xl">
                        {isArabic
                            ? "خدمات أخرى قد تهمكم"
                            : "Explore Our Other Services"}
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                        {isArabic
                            ? "اكتشفوا المزيد من خدماتنا الفنية والهندسية لدعم متطلبات مشاريعكم."
                            : "Discover more of our technical and engineering services to support your project requirements."}
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-pstc-blue" />
                </motion.div>

                {/* Related service cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedServices.map((service, index) => {
                        const content = service[locale];

                        return (
                            <motion.article
                                key={service.slug}
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 35 }
                                }
                                whileInView={
                                    reduceMotion
                                        ? undefined
                                        : { opacity: 1, y: 0 }
                                }
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.55,
                                    delay: reduceMotion ? 0 : index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={
                                    reduceMotion ? undefined : { y: -8 }
                                }
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-slate-900/10"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden bg-slate-200">
                                    <Image
                                        src={service.image}
                                        alt={content.imageAlt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-pstc-navy/70 via-transparent to-transparent" />

                                    <span className="absolute bottom-4 start-5 text-4xl font-black text-white/40">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="mb-3 text-xl font-bold leading-snug text-pstc-navy transition-colors duration-300 group-hover:text-pstc-blue">
                                        {content.title}
                                    </h3>

                                    <p className="mb-6 line-clamp-3 min-h-[5rem] text-sm leading-7 text-slate-600">
                                        {content.shortDescription}
                                    </p>

                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-pstc-blue transition-colors hover:text-pstc-red"
                                    >
                                        <span>
                                            {isArabic
                                                ? "اكتشف الخدمة"
                                                : "Explore Service"}
                                        </span>

                                        {isArabic ? (
                                            <ArrowDownLeft
                                                size={19}
                                                className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                                            />
                                        ) : (
                                            <ArrowUpRight
                                                size={19}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        )}
                                    </Link>
                                </div>

                                <div className="h-1 w-0 bg-pstc-blue transition-all duration-500 group-hover:w-full" />
                            </motion.article>
                        );
                    })}
                </div>

                {/* All services link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 rounded-lg bg-pstc-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pstc-blue"
                    >
                        {isArabic ? "عرض جميع الخدمات" : "View All Services"}

                        {isArabic ? (
                            <ArrowDownLeft size={18} />
                        ) : (
                            <ArrowUpRight size={18} />
                        )}
                    </Link>
                </div>
            </div>
        </section>
    );
}
