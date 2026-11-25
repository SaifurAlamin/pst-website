
"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, Award, Phone } from "lucide-react";

const teamMembers = [
    {
        key: "member1",
        name: "Md. Saju Bhuiyan",
        phone: "+97450925474",
        image: "/images/team/saju.webp",
    },
    {
        key: "member2",
        name: "Md. Masum",
        phone: "+97466262691",
        image: "/images/team/masum.webp",
    },
    {
        key: "member3",
        name: "Md. Alamgir Hossain",
        phone: "+97477676249",
        image: "/images/team/alamgir.webp",
    },
    {
        key: "member4",
        name: "Iqbal Hossain",
        phone: "+97470475299",
        image: "/images/team/iqbal.webp",
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
            {/* Background Decorations */}
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
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-pstc-blue">
                        <Users size={16} />
                        {t("eyebrow")}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight text-pstc-navy sm:text-4xl lg:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
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
                                ? "مرحباً، أود التواصل معكم بخصوص خدمات PSTC."
                                : "Hello, I would like to contact you regarding PSTC services."
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

                                    {/* Member Image */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                    <Users
                                        size={20}
                                        className={`absolute bottom-5 ${isArabic ? "left-5" : "right-5"
                                            } text-white/80`}
                                    />
                                </div>

                                {/* Member Information */}
                                <div className="p-6">
                                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-pstc-blue">
                                        {t("memberLabel")}
                                    </span>

                                    <h3
                                        dir="ltr"
                                        className="text-lg font-bold text-pstc-navy"
                                    >
                                        {member.name}
                                    </h3>

                                    {/* Experience */}
                                    <div className="mt-5 flex items-center gap-3 rounded-xl bg-blue-50/70 p-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-pstc-blue shadow-sm">
                                            <Award size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-slate-500">
                                                {t("experienceLabel")}
                                            </p>

                                            <p className="mt-1 text-base font-extrabold text-pstc-navy">
                                                {t(`${member.key}.experience`)}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Contact Actions */}
                                    <div className="mt-5 grid grid-cols-2 gap-3">
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-3 py-3 text-sm font-bold text-pstc-blue transition hover:bg-pstc-blue hover:text-white"
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <path d="M16.04 2.67A13.27 13.27 0 0 0 4.68 22.8L2.8 29.33l6.7-1.76A13.28 13.28 0 1 0 16.04 2.67Zm0 24.15c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.97 1.04 1.06-3.87-.27-.43a10.85 10.85 0 1 1 9.32 5.07Zm5.96-8.13c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.64-1.96-1.83-2.29-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75s1.18 3.19 1.34 3.41c.17.22 2.32 3.54 5.62 4.96.79.34 1.4.54 1.88.69.79.25 1.51.22 2.08.13.63-.09 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
                                            </svg>

                                            {t("whatsapp")}
                                        </a>
                                    </div>
                                    <div className="mt-5 h-1 w-12 rounded-full bg-pstc-blue transition-all duration-500 group-hover:w-20" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
