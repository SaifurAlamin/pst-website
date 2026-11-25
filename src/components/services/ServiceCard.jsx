
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ServicesCard({ service, locale, index = 0 }) {
    const isArabic = locale === "ar";
    const content = service[locale];
    const Icon = Icons[service.icon] || Icons.BriefcaseBusiness;
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10"
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* Image */}
            <div className="relative h-60 overflow-hidden bg-slate-100">
                <Image
                    src={service.image}
                    alt={content.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101D3A]/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-pstc-blue shadow-lg backdrop-blur-md">
                    <Icon size={23} strokeWidth={1.8} />
                </span>

                <span className="absolute bottom-5 right-5 text-5xl font-black text-white/20">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="mb-3 text-xl font-bold leading-snug text-pstc-navy transition-colors duration-300 group-hover:text-pstc-blue">
                    {content.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">
                    {content.shortDescription}
                </p>

                <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <CheckCircle2 size={15} className="shrink-0 text-pstc-blue" />
                    <span>
                        {isArabic
                            ? "حلول فنية للمشاريع"
                            : "Technical Project Solutions"}
                    </span>
                </div>

                <Link
                    href={`/services/${service.slug}`}
                    className="group/link flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-pstc-blue transition-colors duration-300 hover:text-pstc-red"
                >
                    <span>
                        {isArabic ? "اكتشف الخدمة" : "Explore Service"}
                    </span>

                    {isArabic ? (
                        <ArrowDownLeft
                            size={19}
                            className="transition-transform duration-300 group-hover/link:-translate-x-1 group-hover/link:translate-y-1"
                        />
                    ) : (
                        <ArrowUpRight
                            size={19}
                            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                    )}
                </Link>
            </div>

            {/* Hover accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-pstc-blue transition-all duration-500 group-hover:w-full" />
        </motion.article>
    );
}
