
import { getTranslations } from "next-intl/server";
import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
    MessageCircle,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Link } from "@/i18n/navigation";

const contactItems = [
    {
        key: "location",
        icon: MapPin,
        title: "contactLocationTitle",
        value: "contactLocationValue",
        direction: "ltr",
    },
    {
        key: "phone",
        icon: Phone,
        title: "contactPhoneTitle",
        value: "contactPhoneValue",
        direction: "ltr",
    },
    {
        key: "email",
        icon: Mail,
        title: "contactEmailTitle",
        value: "contactEmailValue",
        direction: "ltr",
    },
];

export default async function ContactPreview() {
    const t = await getTranslations("HomePage");

    return (

        <section className="bg-slate-50 py-20 md:py-28">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow={t("contactEyebrow")}
                        title={t("contactTitle")}
                        description={t("contactDescription")}
                    />
                </Reveal>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;

                        const cardStyles = [
                            {
                                bg: "bg-blue-50/80",
                                border: "border-blue-100",
                                icon: "bg-blue-100 text-blue-700 group-hover:bg-blue-600",
                                glow: "hover:shadow-blue-900/10",
                            },
                            {
                                bg: "bg-green-50/80",
                                border: "border-emerald-100",
                                icon: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600",
                                glow: "hover:shadow-emerald-900/10",
                            },
                            {
                                bg: "bg-amber-50/80",
                                border: "border-amber-100",
                                icon: "bg-amber-100 text-amber-700 group-hover:bg-amber-500",
                                glow: "hover:shadow-amber-900/10",
                            },
                        ];

                        const style = cardStyles[index % cardStyles.length];

                        return (
                            <Reveal key={item.key} delay={index * 0.1}>
                                <div
                                    className={`group relative h-full overflow-hidden rounded-2xl border ${style.border} ${style.bg} p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${style.glow}`}
                                >
                                    {/* Decorative Circle */}
                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 transition-transform duration-700 ease-out group-hover:scale-150" />

                                    {/* Icon */}
                                    <div
                                        className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${style.icon} transition-all duration-500 group-hover:rotate-6 group-hover:text-white group-hover:shadow-lg`}
                                    >
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>

                                    <h3 className="relative mt-6 text-lg font-bold text-pstc-navy">
                                        {t(item.title)}
                                    </h3>

                                    <p
                                        dir={item.direction}
                                        className="relative mt-3 break-words text-sm leading-7 text-slate-600"
                                    >
                                        {t(item.value)}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-7 right-7 h-0.5 origin-left scale-x-0 bg-current opacity-40 transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Contact CTA */}
                <Reveal>
                    <div className="mt-12 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row sm:p-9">

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-pstc-red">
                                <MessageCircle size={23} />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-pstc-navy">
                                    {t("contactBannerTitle")}
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-slate-500">
                                    {t("contactBannerDescription")}
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-pstc-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pstc-navy hover:shadow-xl"
                        >
                            {t("contactButton")}
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>

    );
}
