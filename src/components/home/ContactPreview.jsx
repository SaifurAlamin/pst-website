
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

                        return (
                            <Reveal key={item.key} delay={index * 0.08}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-pst-blue transition-colors duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-pst-navy">
                                        {t(item.title)}
                                    </h3>

                                    <p
                                        dir={item.direction}
                                        className="mt-3 break-words text-sm leading-7 text-slate-500"
                                    >
                                        {t(item.value)}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal>
                    <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:p-9">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-pst-red">
                                <MessageCircle size={23} />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-pst-navy">
                                    {t("contactBannerTitle")}
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-slate-500">
                                    {t("contactBannerDescription")}
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-pst-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pst-navy"
                        >
                            {t("contactButton")}
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
