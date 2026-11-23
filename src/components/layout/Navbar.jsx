
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "gallery", href: "/gallery" },
    { key: "team", href: "/team" },
];

export default function Navbar() {
    const t = useTranslations("Navigation");
    const locale = useLocale();

    const isArabic = locale === "ar";

    return (
        <header
            dir={isArabic ? "rtl" : "ltr"}
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-pst-navy/95 shadow-lg shadow-slate-950/10 backdrop-blur-xl"
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

                {/* Brand - Always LTR */}
                
                                    <Link
                                        href="/"
                                        dir="ltr"
                                        className="flex shrink-0 items-center"
                                    >
                                        <img
                                            src="/images/logo/logo3.png"
                                            alt="Power Sixers Trading and Contracting W.L.L."
                                            className="h-11 w-auto object-contain sm:h-12"
                                            width="300"
                                            height="150"
                                        />
                                    </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className="relative py-2 text-sm font-medium text-slate-200 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:start-0 after:h-0.5 after:w-0 after:rounded-full after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden items-center gap-4 lg:flex">
                    <div className="text-white [&_button]:text-white">
                        <LanguageSwitcher />
                    </div>

                    <Link
                        href="/contact"
                        className="rounded-lg bg-pst-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20"
                    >
                        {t("contact")}
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="text-white [&_button]:text-white">
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
