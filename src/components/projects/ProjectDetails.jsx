
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpLeft,
    ArrowUpRight,
    MapPin,
    FolderOpen,
    Building2,
} from "lucide-react";
import RelatedProjects from "./RelatedProjects";

export default function ProjectDetails({ project, locale }) {
    const isArabic = locale === "ar";
    const content = project[locale] || project.en;

    const status = project.statusLabels?.[locale] || "";
    const category = project.categoryLabels?.[locale] || "";

    return (
        <main dir={isArabic ? "rtl" : "ltr"}>

            {/* Project Hero */}
            <section className="relative overflow-hidden bg-pst-navy py-20 sm:py-28">
                <div className="absolute inset-0 bg-gradient-to-r from-[#101D3A] via-[#101D3A]/95 to-pst-blue/70" />

                <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                        <Link href="/" className="hover:text-white">
                            {isArabic ? "الرئيسية" : "Home"}
                        </Link>

                        <span>/</span>

                        <Link href="/projects" className="hover:text-white">
                            {isArabic ? "مشاريعنا" : "Projects"}
                        </Link>

                        <span>/</span>

                        <span className="text-white">{content.title}</span>
                    </div>

                    {/* Category */}
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[2px] w-9 bg-pst-red" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                            {category}
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                        {content.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                        {content.description}
                    </p>

                    {/* Project Information */}
                    <div className="mt-9 flex flex-wrap gap-6">
                        {content.location && (
                            <div className="flex items-center gap-2 text-sm text-white/80">
                                <MapPin size={18} className="text-red-400" />
                                {content.location}
                            </div>
                        )}

                        {status && (
                            <div className="flex items-center gap-2 text-sm text-white/80">
                                <FolderOpen size={18} className="text-red-400" />
                                {status}
                            </div>
                        )}

                        {project.client && (
                            <div className="flex items-center gap-2 text-sm text-white/80">
                                <Building2 size={18} className="text-red-400" />
                                {project.client}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">

                    {/* Main Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-lg">
                        <Image
                            src={project.image}
                            alt={content.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-9 bg-pst-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pst-blue">
                                {isArabic ? "نظرة عامة" : "PROJECT OVERVIEW"}
                            </span>
                        </div>

                        <h2 className="text-3xl font-extrabold leading-tight text-pst-navy sm:text-4xl">
                            {isArabic
                                ? "تفاصيل المشروع"
                                : "About This Project"}
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-600">
                            {content.description}
                        </p>

                        {content.overview && (
                            <p className="mt-4 text-base leading-8 text-slate-600">
                                {content.overview}
                            </p>
                        )}

                        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                            {content.location && (
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-1 shrink-0 text-pst-red" size={19} />
                                    <div>
                                        <p className="text-sm font-bold text-pst-navy">
                                            {isArabic ? "الموقع" : "Location"}
                                        </p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {content.location}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {project.client && (
                                <div className="flex items-start gap-3">
                                    <Building2 className="mt-1 shrink-0 text-pst-red" size={19} />
                                    <div>
                                        <p className="text-sm font-bold text-pst-navy">
                                            {isArabic ? "العميل" : "Associated Company"}
                                        </p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {project.client}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            {project.gallery?.length > 0 && (
                <section className="bg-slate-50 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                        <div className="mb-12">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-pst-red" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-pst-blue">
                                    {isArabic ? "معرض الصور" : "PROJECT GALLERY"}
                                </span>
                            </div>

                            <h2 className="text-3xl font-extrabold text-pst-navy sm:text-4xl">
                                {isArabic ? "صور المشروع" : "Project Images"}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {project.gallery.map((image, index) => (
                                <div
                                    key={image}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
                                >
                                    <Image
                                        src={image}
                                        alt={`${content.title} - ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* //related project  */}
            <RelatedProjects
                currentSlug={project.slug}
                locale={locale}
            />
            {/* Contact CTA */}
            <section className="bg-pst-navy py-16 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:text-start lg:px-12">
                    <div>
                        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                            {isArabic
                                ? "هل لديك مشروع قادم؟"
                                : "Have a Project in Mind?"}
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                            {isArabic
                                ? "تواصل معنا لمناقشة متطلبات مشروعك."
                                : "Let's discuss your project requirements and technical needs."}
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-md bg-pst-blue px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                    >
                        {isArabic ? "تواصل معنا" : "Contact Us"}

                        {isArabic ? (
                            <ArrowUpLeft size={18} />
                        ) : (
                            <ArrowUpRight size={18} />
                        )}
                    </Link>
                </div>
            </section>

            {/* Back to Projects */}
            <div className="bg-white py-7">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-bold text-pst-blue transition-colors hover:text-pst-red"
                    >
                        {isArabic ? (
                            <>
                                <ArrowRight size={17} />
                                العودة إلى المشاريع
                            </>
                        ) : (
                            <>
                                <ArrowLeft size={17} />
                                Back to Projects
                            </>
                        )}
                    </Link>
                </div>
            </div>
        </main>
    );
}
