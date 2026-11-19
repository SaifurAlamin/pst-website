
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const isArabic = locale === "ar";
    const nextLocale = isArabic ? "en" : "ar";

    const handleLanguageChange = () => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            type="button"
            onClick={handleLanguageChange}
            dir="ltr"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-pst-navy transition duration-300 hover:border-pst-blue hover:bg-blue-50"
            aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
            lang={isArabic ? "en" : "ar"}
        >
            {isArabic ? "English" : "العربية"}
        </button>
    );
}
