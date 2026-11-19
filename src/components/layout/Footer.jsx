
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
    MapPin,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react";

export default function Footer() {
    const t = useTranslations("Footer");
    const nav = useTranslations("Navigation");
    const locale = useLocale();

    const isArabic = locale === "ar";

    const navItems = [
        { key: "home", href: "/" },
        // { key: "about", href: "/about" },
        { key: "services", href: "/services" },
        { key: "projects", href: "/projects" },
        // { key: "team", href: "/team" },
        // { key: "contact", href: "/contact" },
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
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pst-blue text-xl font-extrabold">
                                PST
                            </div>

                            <div className="text-left">
                                <p className="text-lg font-extrabold tracking-wide">
                                    POWER SIXERS
                                </p>

                                <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-blue-300">
                                    BUILD · INSTALL · MAINTAIN
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
                            {t("crNumber")}: 169875
                        </p>
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

                                <span className="text-sm leading-6 text-slate-400">
                                    Doha, Qatar
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
                                    <a
                                        href="tel:+97450925474"
                                        className="transition hover:text-white"
                                    >
                                        +974 5092 5474
                                    </a>

                                    <a
                                        href="tel:+97466262691"
                                        className="transition hover:text-white"
                                    >
                                        +974 6626 2691
                                    </a>
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
