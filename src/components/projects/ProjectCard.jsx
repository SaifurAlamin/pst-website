
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ProjectCard({ project, locale, index = 0 }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    const content = project[locale] || project.en;

    const status = project.statusLabels?.[locale] || "";
    const category = project.categoryLabels?.[locale] || "";

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -7 }}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* Project Image */}
            <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
            >
                <Image
                    src={project.image}
                    alt={content.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101D3A]/70 via-transparent to-transparent opacity-70" />

                {/* Status */}
                {status && (
                    <span
                        className={`absolute top-4 ${isArabic ? "right-4" : "left-4"
                            } rounded-full px-3 py-1.5 text-xs font-bold text-white ${project.status === "completed"
                                ? "bg-emerald-600"
                                : "bg-amber-600"
                            }`}
                    >
                        {status}
                    </span>
                )}

                {/* Category */}
                {category && (
                    <span
                        className={`absolute bottom-4 ${isArabic ? "right-4" : "left-4"
                            } rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-pst-navy`}
                    >
                        {category}
                    </span>
                )}
            </Link>

            {/* Content */}
            <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pst-blue">
                    <span className="h-1.5 w-1.5 rounded-full bg-pst-red" />
                    {category}
                </div>

                <h3 className="text-xl font-bold leading-snug text-pst-navy transition-colors duration-300 group-hover:text-pst-blue sm:text-2xl">
                    {content.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {content.description}
                </p>

                {content.location && (
                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} className="shrink-0 text-pst-red" />
                        <span>{content.location}</span>
                    </div>
                )}

                <div className="mt-6 border-t border-slate-100 pt-5">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-pst-blue transition-colors hover:text-pst-red"
                    >
                        {isArabic ? "عرض تفاصيل المشروع" : "View Project Details"}

                        {isArabic ? (
                            <ArrowUpLeft size={17} />
                        ) : (
                            <ArrowUpRight size={17} />
                        )}
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
