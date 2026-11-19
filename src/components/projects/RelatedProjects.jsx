
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function RelatedProjects({ currentSlug, locale }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    const relatedProjects = projects
        .filter((project) => project.slug !== currentSlug)
        .slice(0, 3);

    if (!relatedProjects.length) return null;

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* Heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
                >
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-9 bg-pst-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pst-blue">
                                {isArabic ? "اكتشف المزيد" : "EXPLORE MORE"}
                            </span>
                        </div>

                        <h2 className="text-3xl font-extrabold text-pst-navy sm:text-4xl">
                            {isArabic
                                ? "مشاريع ذات صلة"
                                : "Related Projects"}
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            {isArabic
                                ? "اكتشف المزيد من أعمالنا وحلولنا الفنية."
                                : "Explore more of our project work and technical solutions."}
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-pst-blue transition-colors hover:text-pst-red"
                    >
                        {isArabic ? "جميع المشاريع" : "View All Projects"}

                        {isArabic ? (
                            <ArrowUpLeft size={18} />
                        ) : (
                            <ArrowUpRight size={18} />
                        )}
                    </Link>
                </motion.div>

                {/* Related Project Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {relatedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            locale={locale}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
