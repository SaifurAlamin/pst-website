
"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Users,
    Phone,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

const teamMembers = [
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

export default function LeadershipTeam() {
    const t = useTranslations("TeamPage.leadership");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden bg-white py-20 md:py-28"
        >
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-50/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-pst-blue">
                        <Users size={16} />
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Management Team */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => {
                        const initials = member.name
                            .split(" ")
                            .filter(Boolean)
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("");

                        const whatsappUrl = `https://wa.me/${member.phone.replace("+", "")}?text=${encodeURIComponent(
                            isArabic
                                ? "مرحباً، أود التواصل معكم بخصوص خدمات PST."
                                : "Hello, I would like to contact you regarding PST services."
                        )}`;

                        return (
                            <motion.article
                                key={member.key}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >
                                {/* Profile Area */}
                                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#101D3A] via-[#174A8B] to-[#087F9B]">
                                    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
                                    <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border border-white/10" />

                                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 text-4xl font-bold tracking-wider text-white shadow-xl backdrop-blur-sm transition duration-500 group-hover:scale-110">
                                        {initials}
                                    </div>

                                    <span className={`absolute top-5 ${isArabic ? "right-5" : "left-5"} flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold text-white backdrop-blur-md`}>
                                        0{index + 1}
                                    </span>

                                    <Users
                                        size={20}
                                        className={`absolute bottom-5 ${isArabic ? "left-5" : "right-5"} text-white/60`}
                                    />
                                </div>

                                {/* Member Information */}
                                <div className="p-6">
                                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-pst-blue">
                                        {t("memberLabel")}
                                    </span>

                                    <h3
                                        dir="ltr"
                                        className="text-lg font-bold text-pst-navy"
                                    >
                                        {member.name}
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-slate-500">
                                        {t(`${member.key}.designation`)}
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
                                        <Phone size={15} className="text-pst-blue" />
                                        <a
                                            href={`tel:${member.phone}`}
                                            dir="ltr"
                                            className="transition hover:text-pst-blue"
                                        >
                                            {member.phone}
                                        </a>
                                    </div>

                                    <div className="my-5 h-px bg-slate-100" />

                                    {/* Contact Actions */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-3 py-3 text-sm font-bold text-pst-blue transition hover:bg-pst-blue hover:text-white"
                                        >
                                            <Phone size={16} />
                                            {t("call")}
                                        </a>

                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-50 px-3 py-3 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
                                        >
                                            <MessageCircle size={16} />
                                            {t("whatsapp")}
                                        </a>
                                    </div>

                                    <div className="mt-5 h-1 w-12 rounded-full bg-pst-blue transition-all duration-500 group-hover:w-20" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
