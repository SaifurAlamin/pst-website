
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
        slug: "hvac-duct-installation",
        icon: Wind,
        image: "/images/services/hvac-ducting.webp",
    },
    {
        key: "serviceTwo",
        slug: "vrf-installation",
        icon: Snowflake,
        image: "/images/services/vrf-installation.webp",
    },
    {
        key: "serviceThree",
        slug: "ac-maintenance-repair",
        icon: Wrench,
        image: "/images/services/ac-maintenance.webp",
    },
    {
        key: "serviceFour",
        slug: "plumbing-services",
        icon: Droplets,
        image: "/images/services/plumbing.webp",
    },
    {
        key: "serviceFive",
        slug: "chiller-fire-fighting",
        icon: Flame,
        image: "/images/services/chiller-fire-fighting.webp",
    },
    {
        key: "serviceSix",
        slug: "skilled-mep-manpower",
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
                                    href={`/services/${service.slug}`}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden sm:h-64">
                                        <img
                                            src={service.image}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101D3A]/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                        {/* Icon */}
                                        <div className="absolute bottom-5 start-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-pstc-blue shadow-lg transition-all duration-500 group-hover:bg-pstc-blue group-hover:text-white group-hover:-translate-y-1">
                                            <Icon size={27} strokeWidth={1.7} />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                                        <h3 className="text-xl font-extrabold leading-snug text-pstc-navy transition-colors duration-300 group-hover:text-pstc-blue sm:text-2xl">
                                            {t(`${service.key}Title`)}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                                            {t(`${service.key}Description`)}
                                        </p>

                                        {/* Arrow */}
                                        <div className="mt-auto flex items-center justify-end pt-6 text-pstc-blue">
                                            <ArrowUpRight
                                                size={22}
                                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 w-0 bg-pstc-blue transition-all duration-500 group-hover:w-full" />
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
                            className="inline-flex items-center gap-3 rounded-lg bg-pstc-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pstc-navy"
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
