
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
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-pst-red" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-pst-blue">
                                    {t("whyChooseEyebrow")}
                                </span>
                            </div>

                            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                                {t("whyChooseTitle")}
                            </h2>

                            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
                                {t("whyChooseDescription")}
                            </p>

                            <Link
                                href="/about"
                                className="mt-9 inline-flex items-center gap-3 rounded-lg bg-pst-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pst-navy"
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

                            return (
                                <Reveal
                                    key={feature.key}
                                    delay={index * 0.08}
                                >
                                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-pst-blue transition-all duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                                <Icon
                                                    size={27}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <span className="text-sm font-semibold tracking-widest text-slate-300">
                                                {feature.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-7 text-lg font-bold text-pst-navy">
                                            {t(`${feature.key}Title`)}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {t(`${feature.key}Description`)}
                                        </p>

                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-pst-blue transition-all duration-300 group-hover:w-full" />
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
