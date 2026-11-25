
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
    MapPin,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react";

function FacebookIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.953.93-1.953 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="0.8" fill="currentColor" />
        </svg>
    );
}

export default function Footer() {
    const t = useTranslations("Footer");
    const nav = useTranslations("Navigation");
    const locale = useLocale();

    const isArabic = locale === "ar";

    const navItems = [
        { key: "home", href: "/" },
        { key: "about", href: "/about" },
        { key: "services", href: "/services" },
        { key: "projects", href: "/projects" },
        { key: "team", href: "/team" },
        { key: "contact", href: "/contact" },
    ];

    const phoneNumbers = [
        "+974 5092 5474",
        "+974 7767 6249",
        "+974 6626 2691",
    ];

    return (
        <footer
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-[#0B152B] text-white"
        >
            <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-6 lg:px-8">

                <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}
                    <div className="lg:col-span-2">

                        <Link
                            href="/"
                            dir="ltr"
                            className="group inline-flex items-center gap-2 sm:gap-3"
                        >
                            {/* Logo */}
                            <img
                                src="/images/logo/logo3.png"
                                alt="Power Sixers Trading and Contracting W.L.L."
                                className="h-16 w-auto object-contain sm:h-20 lg:h-18"
                                width="300"
                                height="150"
                            />

                            {/* Brand Text */}
                            <div className="flex flex-col justify-center text-left leading-tight">
                                <p className="text-lg font-extrabold tracking-wide text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-xl">
                                    POWER SIXERS
                                </p>

                                <p className="mt-0.5 text-[7px] font-semibold tracking-[1px] text-blue-300 sm:text-[8px] sm:tracking-[1.3px]">
                                    TRADING AND CONTRACTING W.L.L.
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                            {t("description")}
                        </p>

                        <p
                            dir="ltr"
                            className={`mt-5 text-xs font-semibold tracking-wider text-slate-500 ${isArabic ? "text-right" : "text-left"
                                }`}
                        >
                            {t("crNumber")}
                        </p>

                        {/* Social Media */}
                        <div className="mt-7">
                            <h3 className="text-sm font-bold text-white">
                                {isArabic ? "تابعونا" : "Follow Us"}
                            </h3>

                            <div className="mt-4 flex items-center gap-3">

                                <a
                                    href="https://www.facebook.com/profile.php?id=61596166545461"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    title="Follow us on Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                                >
                                    <FacebookIcon />
                                </a>

                                <a
                                    href="https://www.instagram.com/powersixers.qa2025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    title="Follow us on Instagram"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                                >
                                    <InstagramIcon />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold">
                            {t("quickLinks")}
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.key}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            className={`shrink-0 text-blue-400 transition group-hover:-translate-y-0.5 ${isArabic ? "rotate-[-90deg]" : ""
                                                }`}
                                        />

                                        {nav(item.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold">
                            {t("contactTitle")}
                        </h3>

                        <ul className="mt-6 space-y-5">

                            {/* Location */}
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={19}
                                    className="mt-1 shrink-0 text-blue-400"
                                />

                                <span
                                    dir={isArabic ? "rtl" : "ltr"}
                                    className="text-sm leading-6 text-slate-400"
                                >
                                    {isArabic
                                        ? "فريج بن عبد العزيز، الدوحة، قطر"
                                        : "Fereej Bin Abdel Aziz, Doha, Qatar"}
                                </span>
                            </li>

                            {/* Phone */}
                            <li className="flex items-start gap-3">
                                <Phone
                                    size={19}
                                    className="mt-1 shrink-0 text-blue-400"
                                />

                                <div
                                    dir="ltr"
                                    className="flex flex-col gap-2 text-left text-sm text-slate-400"
                                >
                                    {phoneNumbers.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/\s/g, "")}`}
                                            className="transition hover:text-white"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex items-start gap-3">
                                <Mail
                                    size={19}
                                    className="mt-1 shrink-0 text-blue-400"
                                />

                                <a
                                    dir="ltr"
                                    href="mailto:powersixers.qa@gmail.com"
                                    className="break-all text-left text-sm text-slate-400 transition hover:text-white"
                                >
                                    powersixers.qa@gmail.com
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col gap-4 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">

                    <p className="text-xs leading-6 text-slate-500">
                        © {new Date().getFullYear()}{" "}

                        <span dir="ltr" className="inline-block">
                            Power Sixers Trading and Contracting W.L.L.
                        </span>{" "}

                        {t("copyright")}
                    </p>

                    <p
                        dir="ltr"
                        className="text-xs font-semibold tracking-wider text-slate-400"
                    >
                        BUILD <span className="text-red-400">·</span>{" "}
                        INSTALL <span className="text-red-400">·</span>{" "}
                        MAINTAIN
                    </p>
                </div>
            </div>
        </footer>
    );
}
