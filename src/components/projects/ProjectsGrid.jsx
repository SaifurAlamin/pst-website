
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ locale }) {
    const isArabic = locale === "ar";
    const [activeCategory, setActiveCategory] = useState("all");

    const filters = [
        {
            value: "all",
            label: isArabic ? "جميع المشاريع" : "All Projects",
        },
        {
            value: "hvac",
            label: isArabic ? "التكييف والتهوية" : "HVAC",
        },
        {
            value: "hvac-ceiling",
            label: isArabic ? "التكييف والأسقف" : "HVAC & Ceiling",
        },
        {
            value: "fire-fighting",
            label: isArabic ? "مكافحة الحريق" : "Fire Fighting",
        },
    ];

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") return projects;

        return projects.filter(
            (project) => project.category === activeCategory
        );
    }, [activeCategory]);

    return (
        <section
            id="projects-list"
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-slate-50 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-pst-red" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-pst-blue">
                            {isArabic ? "أعمالنا" : "OUR WORK"}
                        </span>
                        <span className="h-[2px] w-8 bg-pst-red" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-pst-navy sm:text-4xl lg:text-5xl">
                        {isArabic
                            ? "مشاريعنا وأعمالنا"
                            : "Our Featured Projects"}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                        {isArabic
                            ? "تعرّف على مجموعة من أعمالنا في مجالات التكييف والتهوية وتركيبات أنظمة مكافحة الحريق."
                            : "Explore our project work across HVAC, ceiling installation and fire fighting systems."}
                    </p>
                </div>

                {/* Category Filters */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => {
                        const isActive = activeCategory === filter.value;

                        return (
                            <button
                                key={filter.value}
                                type="button"
                                onClick={() => setActiveCategory(filter.value)}
                                className={`rounded-md px-5 py-3 text-sm font-bold transition-all duration-300 ${isActive
                                        ? "bg-pst-navy text-white shadow-lg shadow-slate-900/15"
                                        : "border border-slate-200 bg-white text-slate-600 hover:border-pst-blue hover:text-pst-blue"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Projects */}
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                    locale={locale}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="py-16 text-center">
                            <FolderOpen
                                size={42}
                                className="mx-auto text-slate-300"
                            />
                            <p className="mt-4 font-semibold text-slate-500">
                                {isArabic
                                    ? "لا توجد مشاريع في هذا التصنيف."
                                    : "No projects found in this category."}
                            </p>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
