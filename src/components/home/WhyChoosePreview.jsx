
import { getTranslations } from "next-intl/server";
import {
    ShieldCheck,
    Users,
    Settings2,
    Headset,
    ArrowUpRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Link } from "@/i18n/navigation";

const features = [
    {
        key: "featureOne",
        icon: ShieldCheck,
        number: "01",
    },
    {
        key: "featureTwo",
        icon: Users,
        number: "02",
    },
    {
        key: "featureThree",
        icon: Settings2,
        number: "03",
    },
    {
        key: "featureFour",
        icon: Headset,
        number: "04",
    },
];

export default async function WhyChoosePreview() {
    const t = await getTranslations("HomePage");

    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-50/40 blur-3xl" />

            <Container>
                <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <Reveal>
                        <div>

                            {/* Section Label */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-pstc-red" />

                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-pstc-blue">
                                    {t("whyChooseEyebrow")}
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-pstc-navy sm:text-4xl lg:text-5xl">
                                {t("whyChooseTitle")}
                            </h2>

                            {/* Description */}
                            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
                                {t("whyChooseDescription")}
                            </p>

                            {/* Related Image */}
                            <div className="group relative mt-8 overflow-hidden rounded-2xl shadow-xl shadow-blue-950/10">

                                <img
                                    src="/images/services/services-hero.webp"
                                    alt="Professional MEP and HVAC installation services by Power Sixers"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#101D3A]/60 via-transparent to-transparent" />

                                {/* Image Caption */}
                                <div className="absolute bottom-0 start-0 p-5 sm:p-6">
                                    <p className="text-xs font-semibold uppercase tracking-[2px] text-blue-200">
                                        POWER SIXERS
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                                        Build · Install · Maintain
                                    </p>
                                </div>

                            </div>

                            {/* Button */}
                            <Link
                                href="/about"
                                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-pstc-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pstc-navy"
                            >
                                {t("whyChooseButton")}
                                <ArrowUpRight size={18} />
                            </Link>

                        </div>
                    </Reveal>

                    {/* Right Features */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            const colors = [
                                {
                                    card: "border-blue-100 bg-blue-50/60 hover:border-blue-200",
                                    icon: "bg-blue-100 text-blue-700 group-hover:bg-blue-700",
                                    number: "text-blue-300",
                                    title: "group-hover:text-blue-700",
                                    bottom: "bg-blue-600",
                                },
                                {
                                    card: "border-red-100 bg-red-50/50 hover:border-red-200",
                                    icon: "bg-red-100 text-red-700 group-hover:bg-red-700",
                                    number: "text-red-300",
                                    title: "group-hover:text-red-700",
                                    bottom: "bg-red-600",
                                },
                                {
                                    card: "border-sky-100 bg-sky-50/60 hover:border-sky-200",
                                    icon: "bg-sky-100 text-sky-700 group-hover:bg-sky-700",
                                    number: "text-sky-300",
                                    title: "group-hover:text-sky-700",
                                    bottom: "bg-sky-600",
                                },
                                {
                                    card: "border-slate-200 bg-slate-50/80 hover:border-slate-300",
                                    icon: "bg-slate-200 text-slate-700 group-hover:bg-slate-700",
                                    number: "text-slate-300",
                                    title: "group-hover:text-slate-700",
                                    bottom: "bg-slate-700",
                                },
                            ];

                            const color = colors[index % colors.length];

                            return (
                                <Reveal
                                    key={feature.key}
                                    delay={index * 0.08}
                                >
                                    <div
                                        className={`group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 ${color.card}`}
                                    >

                                        {/* Icon and Number */}
                                        <div className="flex items-center justify-between">

                                            <div
                                                className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white ${color.icon}`}
                                            >
                                                <Icon
                                                    size={27}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <span
                                                className={`text-sm font-semibold tracking-widest ${color.number}`}
                                            >
                                                {feature.number}
                                            </span>

                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`mt-7 text-lg font-bold text-pstc-navy transition-colors duration-300 ${color.title}`}
                                        >
                                            {t(`${feature.key}Title`)}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {t(`${feature.key}Description`)}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${color.bottom}`}
                                        />

                                    </div>
                                </Reveal>
                            );
                        })}

                    </div>
                </div>
            </Container>
        </section>

    );
}
