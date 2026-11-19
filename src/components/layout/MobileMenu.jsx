
"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "gallery", href: "/gallery" },
    { key: "team", href: "/team" },
    { key: "contact", href: "/contact" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Navigation");
    const locale = useLocale();

    const isArabic = locale === "ar";

    return (
        <div className="relative lg:hidden">
            {/* Toggle Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-blue-300/40 hover:bg-white/15"
                aria-label={
                    isOpen
                        ? isArabic ? "إغلاق القائمة" : "Close menu"
                        : isArabic ? "فتح القائمة" : "Open menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                <span className="transition-transform duration-300">
                    {isOpen ? <X size={23} /> : <Menu size={23} />}
                </span>
            </button>

            {/* Mobile Dropdown */}
            <div
                id="mobile-navigation"
                dir={isArabic ? "rtl" : "ltr"}
                className={`fixed left-4 right-4 top-[5.75rem] z-[60] overflow-hidden rounded-2xl border border-white/10 bg-[#101D3A]/[0.98] shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition-all duration-300 sm:left-auto sm:right-6 sm:w-[360px] ${isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none -translate-y-3 opacity-0"
                    }`}
            >
                <nav className="flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto p-4">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                transitionDelay: isOpen
                                    ? `${index * 40}ms`
                                    : "0ms",
                            }}
                            className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                        >
                            <span>{t(item.key)}</span>

                            <ChevronRight
                                size={17}
                                className={`shrink-0 text-blue-300 transition-transform duration-300 ${isArabic
                                        ? "rotate-180 group-hover:-translate-x-1"
                                        : "group-hover:translate-x-1"
                                    }`}
                            />
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <div className="mt-3 border-t border-white/10 px-4 pt-4 [&_button]:text-white">
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* Bottom Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-pst-blue via-blue-400 to-pst-red" />
            </div>
        </div>
    );
}
