
import { getTranslations } from "next-intl/server";
import {
    Wind,
    Snowflake,
    Wrench,
    Droplets,
    Flame,
    Users,
    ArrowUpRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Link } from "@/i18n/navigation";

const services = [
    {
        key: "serviceOne",
        icon: Wind,
        image: "/images/services/hvac-ducting.webp",
    },
    {
        key: "serviceTwo",
        icon: Snowflake,
        image: "/images/services/vrf-installation.webp",
    },
    {
        key: "serviceThree",
        icon: Wrench,
        image: "/images/services/ac-maintenance.webp",
    },
    {
        key: "serviceFour",
        icon: Droplets,
        image: "/images/services/chilled-water-piping.webp",
    },
    {
        key: "serviceFive",
        icon: Flame,
        image: "/images/services/plumbing-firefighting.webp",
    },
    {
        key: "serviceSix",
        icon: Users,
        image: "/images/services/mep-manpower.webp",
    },
];

export default async function ServicesPreview() {
    const t = await getTranslations("HomePage");

    return (
        <section className="bg-slate-50 py-20 md:py-28">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow={t("servicesEyebrow")}
                        title={t("servicesTitle")}
                        description={t("servicesDescription")}
                    />
                </Reveal>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Reveal key={service.key} delay={index * 0.08}>
                                <Link
                                    href="/services"
                                    className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
                                >
                                    {/* Animated Background Image */}
                                    <div
                                        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                                        aria-hidden="true"
                                    >
                                        <img
                                            src={service.image}
                                            alt=""
                                            className="h-full w-full object-cover opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Light Overlay */}
                                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-white/20 to-white/95" />

                                    {/* Watermark Brand Text */}
                                    <div className="pointer-events-none absolute bottom-5 end-5 select-none">
                                        <span className="text-[10px] font-extrabold tracking-[2px] text-pst-navy/[0.07]">
                                            POWER SIXERS
                                        </span>
                                    </div>


                                    {/* Card Content */}
                                    <div className="relative z-10 flex h-full flex-1 flex-col">

                                        {/* Icon and Number */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 text-pst-blue shadow-sm transition-all duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                                <Icon size={29} strokeWidth={1.7} />
                                            </div>

                                            <span className="text-sm font-bold tracking-widest text-[#101D3A]">
                                                {service.number}
                                            </span>
                                        </div>

                                        {/* Title & Description at Bottom */}
                                        <div className="mt-auto pt-10">

                                            {/* Title */}
                                            <h3 className="text-xl font-extrabold leading-snug text-pst-navy transition-colors duration-300 group-hover:text-pst-blue sm:text-2xl">
                                                {t(`${service.key}Title`)}
                                            </h3>

                                            {/* Description */}
                                            <p className="mt-4 text-sm font-semibold leading-7 text-pst-navy sm:text-[15px]">
                                                {t(`${service.key}Description`)}
                                            </p>

                                            {/* Arrow */}
                                            <div className="flex items-center justify-end pt-5 text-[#174A8B]">
                                                <ArrowUpRight
                                                    size={21}
                                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                                />
                                            </div>

                                        </div>
                                    </div>


                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-pst-blue transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>

                {/* View All Services */}
                <Reveal>
                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 rounded-lg bg-pst-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pst-navy"
                        >
                            {t("servicesButton")}
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>

    );
}
