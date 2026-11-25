
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ShieldCheck,
    Users,
    Settings,
    Headset,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        number: "01",
        en: {
            title: "Quality-Focused Solutions",
            description:
                "A focus on quality and careful execution across MEP installation and technical service requirements.",
        },
        ar: {
            title: "حلول تركز على الجودة",
            description:
                "التركيز على الجودة والتنفيذ الدقيق في أعمال تركيب أنظمة MEP ومتطلبات الخدمات الفنية.",
        },
    },
    {
        icon: Users,
        number: "02",
        en: {
            title: "Skilled Technical Manpower",
            description:
                "Technical manpower support for mechanical, electrical and plumbing project requirements.",
        },
        ar: {
            title: "كوادر فنية ماهرة",
            description:
                "دعم فني متخصص لتلبية متطلبات المشاريع الميكانيكية والكهربائية والسباكة.",
        },
    },
    {
        icon: Settings,
        number: "03",
        en: {
            title: "Practical Project Solutions",
            description:
                "Service solutions designed around building systems, project scopes and technical requirements.",
        },
        ar: {
            title: "حلول عملية للمشاريع",
            description:
                "حلول خدمية مصممة وفق أنظمة المباني ونطاق المشاريع والمتطلبات الفنية.",
        },
    },
    {
        icon: Headset,
        number: "04",
        en: {
            title: "Responsive Support",
            description:
                "Clear communication and support throughout service discussions and project coordination.",
        },
        ar: {
            title: "دعم واستجابة",
            description:
                "تواصل واضح ودعم مستمر خلال مناقشة الخدمات وتنسيق متطلبات المشاريع.",
        },
    },
];

export default function WhyChooseServices({ locale }) {
    const isArabic = locale === "ar";
    const reduceMotion = useReducedMotion();

    const content = {
        en: {
            eyebrow: "WHY WORK WITH US",
            title: "A Practical Approach to Every Project",
            description:
                "We focus on understanding project requirements and providing relevant MEP and technical service solutions.",
        },
        ar: {
            eyebrow: "لماذا تختارنا",
            title: "نهج عملي لكل مشروع",
            description:
                "نركز على فهم متطلبات المشاريع وتقديم حلول مناسبة لخدمات MEP والخدمات الفنية.",
        },
    };

    const t = content[locale] || content.en;

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-pstc-red" />
                        <span className="text-xs font-bold uppercase tracking-[3px] text-pstc-blue">
                            {t.eyebrow}
                        </span>
                        <span className="h-[2px] w-8 bg-pstc-red" />
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-pstc-navy sm:text-4xl lg:text-5xl">
                        {t.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
                        {t.description}
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const item = feature[locale] || feature.en;

                        return (
                            <motion.div
                                key={feature.number}
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 35 }
                                }
                                whileInView={
                                    reduceMotion
                                        ? {}
                                        : { opacity: 1, y: 0 }
                                }
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                whileHover={
                                    reduceMotion
                                        ? {}
                                        : { y: -8 }
                                }
                                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_8px_35px_rgba(16,29,58,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(16,29,58,0.11)]"
                            >
                                {/* Number */}
                                <span className="absolute right-6 top-6 text-sm font-bold tracking-widest text-slate-200">
                                    {feature.number}
                                </span>

                                {/* Icon */}
                                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-pstc-blue transition-all duration-300 group-hover:bg-pstc-blue group-hover:text-white">
                                    <Icon size={29} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-lg font-bold leading-snug text-pstc-navy">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-7 text-slate-500">
                                    {item.description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-pstc-red transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
