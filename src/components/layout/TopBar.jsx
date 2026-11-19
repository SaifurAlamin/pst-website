
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocale } from "next-intl";

const phoneNumbers = [
    "+974 5092 5474",
    "+974 6626 2691",
];

export default function TopBar() {
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="border-b border-slate-100 bg-white text-pst-navy"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">

                {/* Phone Numbers */}
                <div className="flex items-center gap-2 text-xs">
                    <Phone
                        size={14}
                        className="shrink-0 text-pst-blue"
                    />

                    <div
                        dir="ltr"
                        className="flex flex-wrap items-center gap-x-3"
                    >
                        {phoneNumbers.map((phone, index) => (
                            <a
                                key={phone}
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className={`whitespace-nowrap transition-colors hover:text-pst-red ${index > 0 ? "hidden lg:inline" : ""
                                    }`}
                            >
                                {phone}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Email & Location */}
                <div className="hidden items-center gap-5 sm:flex">

                    <a
                        dir="ltr"
                        href="mailto:powersixers.qa@gmail.com"
                        className="flex items-center gap-2 text-xs transition-colors hover:text-pst-red"
                    >
                        <Mail
                            size={14}
                            className="shrink-0 text-pst-blue"
                        />

                        powersixers.qa@gmail.com
                    </a>

                    <div className="flex items-center gap-2 text-xs">
                        <MapPin
                            size={14}
                            className="shrink-0 text-pst-red"
                        />

                        <span>Doha, Qatar</span>
                    </div>
                </div>

                {/* Mobile Location */}
                <div className="flex items-center gap-1.5 text-xs sm:hidden">
                    <MapPin
                        size={14}
                        className="shrink-0 text-pst-red"
                    />

                    <span>Doha, Qatar</span>
                </div>
            </div>
        </div>
    );
}
