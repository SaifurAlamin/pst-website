
"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
    MessageCircle,
    Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

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

const managementMembers = [
    {
        key: "member1",
        name: "Md. Alamgir Hossain",
        phone: "+97477676249",
    },
    {
        key: "member2",
        name: "Md. Masum",
        phone: "+97466262691",
    },
    {
        key: "member3",
        name: "Md. Saju",
        phone: "+97450925474",
    },
    {
        key: "member4",
        name: "Iqbal Hossain",
        phone: "+97470475299",
    },
];

export default function ContactInfo() {
    const t = useTranslations("ContactPage.info");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-white py-20 sm:py-24"
        >
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* Section Heading */}
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

                {/* Company Contact Cards */}
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
                                        <ArrowUpRight
                                            size={16}
                                            className={isArabic ? "rotate-[-90deg]" : ""}
                                        />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Management Contact Section */}
                <div className="mt-24">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-12 max-w-2xl text-center"
                    >
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-pst-blue">
                            <Users size={16} />
                            {t("management.eyebrow")}
                        </span>

                        <h2 className="text-3xl font-bold text-pst-navy sm:text-4xl">
                            {t("management.title")}
                        </h2>

                        <p className="mt-5 leading-8 text-slate-500">
                            {t("management.description")}
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {managementMembers.map((member, index) => {
                            const whatsappUrl = `https://wa.me/${member.phone.replace("+", "")}?text=${encodeURIComponent(
                                isArabic
                                    ? "مرحباً، أود التواصل معكم بخصوص خدمات PST."
                                    : "Hello, I would like to contact you regarding PST services."
                            )}`;

                            return (
                                <motion.article
                                    key={member.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                                >
                                    {/* Card Header */}
                                    <div className="relative flex h-32 items-center gap-4 overflow-hidden bg-gradient-to-r from-[#101D3A] to-[#174A8B] px-6">
                                        <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-white/10" />

                                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-bold text-white">
                                            {member.name
                                                .split(" ")
                                                .filter(Boolean)
                                                .map((word) => word[0])
                                                .slice(0, 2)
                                                .join("")}
                                        </div>

                                        <span className="relative text-xs font-bold uppercase tracking-wider text-blue-100">
                                            {t("management.memberLabel")}
                                        </span>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h3
                                            dir="ltr"
                                            className="text-lg font-bold text-pst-navy"
                                        >
                                            {member.name}
                                        </h3>

                                        <p className="mt-2 text-sm font-semibold text-pst-blue">
                                            {t(`management.${member.key}.designation`)}
                                        </p>

                                        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                                            <Phone size={16} className="shrink-0 text-pst-blue" />

                                            <a
                                                href={`tel:${member.phone}`}
                                                dir="ltr"
                                                className="font-medium transition hover:text-pst-blue"
                                            >
                                                {member.phone}
                                            </a>
                                        </div>

                                        <div className="my-5 h-px bg-slate-100" />

                                        <div className="grid grid-cols-2 gap-3">
                                            <a
                                                href={`tel:${member.phone}`}
                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-3 py-3 text-sm font-bold text-pst-blue transition hover:bg-pst-blue hover:text-white"
                                            >
                                                <Phone size={16} />
                                                {t("management.call")}
                                            </a>

                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-50 px-3 py-3 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
                                            >
                                                <MessageCircle size={16} />
                                                {t("management.whatsapp")}
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
