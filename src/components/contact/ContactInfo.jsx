
"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

const contactItems = [
    {
        key: "location",
        icon: MapPin,
        href: "https://www.google.com/maps/search/?api=1&query=Doha%2C+Qatar",
        external: true,
    },
    {
        key: "phone",
        icon: Phone,
        href: "tel:+97450925474",
    },
    {
        key: "email",
        icon: Mail,
        href: "mailto:powersixers.qa@gmail.com",
    },
    {
        key: "hours",
        icon: Clock,
        href: null,
    },
];

export default function ContactInfo() {
    const t = useTranslations("ContactPage.info");

    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-pst-blue">
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold text-pst-navy sm:text-4xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-500">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-pst-blue transition-colors duration-300 group-hover:bg-pst-blue group-hover:text-white">
                                    <Icon size={25} strokeWidth={1.8} />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-pst-navy">
                                    {t(`${item.key}.title`)}
                                </h3>

                                <p className="min-h-16 whitespace-pre-line text-sm leading-7 text-slate-500">
                                    {t(`${item.key}.value`)}
                                </p>

                                {item.href && (
                                    <a
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pst-blue transition hover:text-pst-red"
                                    >
                                        {t(`${item.key}.action`)}
                                        <ArrowUpRight size={16} />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
