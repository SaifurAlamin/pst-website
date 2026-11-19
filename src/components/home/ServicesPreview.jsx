
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
        number: "01",
    },
    {
        key: "serviceTwo",
        icon: Snowflake,
        number: "02",
    },
    {
        key: "serviceThree",
        icon: Wrench,
        number: "03",
    },
    {
        key: "serviceFour",
        icon: Droplets,
        number: "04",
    },
    {
        key: "serviceFive",
        icon: Flame,
        number: "05",
    },
    {
        key: "serviceSix",
        icon: Users,
        number: "06",
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
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-pst-blue transition-colors duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                            <Icon size={27} strokeWidth={1.7} />
                                        </div>

                                        <span className="text-sm font-semibold tracking-widest text-slate-300">
                                            {service.number}
                                        </span>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-pst-navy transition-colors group-hover:text-pst-blue">
                                            {t(`${service.key}Title`)}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {t(`${service.key}Description`)}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex items-center justify-end pt-6 text-pst-blue">
                                        <ArrowUpRight
                                            size={20}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-pst-blue transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>

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
