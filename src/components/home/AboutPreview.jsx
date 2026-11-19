
import { ArrowUpRight, Building2, CheckCircle2, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";

export default async function AboutPreview() {
    const t = await getTranslations("HomePage");

    const features = [
        t("aboutFeatureOne"),
        t("aboutFeatureTwo"),
        t("aboutFeatureThree"),
        t("aboutFeatureFour"),
    ];

    return (
        <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            <Container>
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Visual */}
                    <Reveal direction="right">
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -start-5 -top-5 h-32 w-32 rounded-2xl border-2 border-pst-blue/20" />

                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101D3A] via-[#174A8B] to-[#0B152B] p-7 text-white shadow-2xl sm:p-10">
                                <div className="absolute -end-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

                                <div className="relative">
                                    <p className="text-xs font-bold tracking-[3px] text-blue-200">
                                        POWER SIXERS
                                    </p>

                                    <h3 className="mt-4 max-w-sm text-3xl font-extrabold leading-tight sm:text-4xl">
                                        {t("aboutVisualTitle")}
                                    </h3>

                                    <p className="mt-4 max-w-sm text-sm leading-7 text-blue-100">
                                        {t("aboutVisualDescription")}
                                    </p>

                                    <div className="mt-10 grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                                            <Building2 size={28} className="text-blue-200" />
                                            <p className="mt-4 text-sm font-semibold">
                                                {t("aboutVisualItemOne")}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                                            <MapPin size={28} className="text-blue-200" />
                                            <p className="mt-4 text-sm font-semibold">
                                                {t("aboutVisualItemTwo")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -end-4 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
                                <p className="text-xs font-semibold text-slate-500">
                                    {t("aboutVisualBadge")}
                                </p>
                                <p className="mt-1 font-extrabold text-pst-navy">
                                    Build · Install · Maintain
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Content */}
                    <Reveal direction="left" delay={0.15}>
                        <div>
                            <SectionHeading
                                eyebrow={t("aboutEyebrow")}
                                title={t("aboutTitle")}
                                description={t("aboutDescription")}
                                align="left"
                            />

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={20}
                                            className="mt-0.5 shrink-0 text-pst-blue"
                                        />
                                        <p className="text-sm font-medium leading-6 text-slate-700">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Button href="/about" showArrow>
                                    {t("aboutButton")}
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
