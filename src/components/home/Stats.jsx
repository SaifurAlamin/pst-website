
import { Building2, FileCheck2, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

export default async function Stats() {
    const t = await getTranslations("HomePage");

    const highlights = [
        {
            icon: MapPin,
            value: "Doha",
            label: t("highlightOne"),
            description: t("highlightOneDescription"),
        },
        {
            icon: FileCheck2,
            value: "169875",
            label: t("highlightTwo"),
            description: t("highlightTwoDescription"),
        },
        {
            icon: Building2,
            value: "06",
            label: t("highlightThree"),
            description: t("highlightThreeDescription"),
        },
    ];

    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
            <Container>
                <div className="grid gap-5 md:grid-cols-3">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Reveal key={item.label} delay={index * 0.12}>
                                <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-pst-blue transition-colors duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                        <Icon size={23} />
                                    </div>

                                    <p className="mt-6 text-3xl font-extrabold tracking-tight text-pst-navy">
                                        {item.value}
                                    </p>

                                    <h3 className="mt-2 text-base font-bold text-slate-800">
                                        {item.label}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
