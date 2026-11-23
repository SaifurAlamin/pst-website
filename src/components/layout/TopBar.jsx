
"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const phoneNumbers = [
    { name: "Alamgir", phone: "+974 7767 6249" },
    { name: "Masum", phone: "+974 6626 2691" },
    { name: "Saju", phone: "+974 5092 5474" },
];

function WhatsAppIcon({ size = 14 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="WhatsApp"
            role="img"
        >
            <path d="M16.04 2.67C8.71 2.67 2.75 8.58 2.75 15.86c0 2.34.62 4.62 1.8 6.64L2.67 29.33l7.03-1.83a13.4 13.4 0 0 0 6.34 1.6h.01c7.33 0 13.29-5.92 13.29-13.2a13.1 13.1 0 0 0-3.9-9.36 13.3 13.3 0 0 0-9.4-3.87Zm0 24.2h-.01a11.1 11.1 0 0 1-5.65-1.54l-.4-.24-4.17 1.09 1.11-4.05-.26-.42a10.94 10.94 0 0 1-1.7-5.85c0-6.1 4.98-11.06 11.1-11.06a11.06 11.06 0 0 1 11.1 11.06c0 6.1-4.99 11.06-11.12 11.06Zm6.09-8.29c-.33-.16-1.96-.96-2.26-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.33-.16-1.4-.52-2.67-1.65-.99-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.16.22 2.32 3.54 5.62 4.96.79.34 1.41.55 1.9.7.8.25 1.53.21 2.1.13.64-.1 1.96-.8 2.23-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
        </svg>
    );
}

export default function TopBar() {
    const locale = useLocale();
    const isArabic = locale === "ar";

    const [showWhatsApp, setShowWhatsApp] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowWhatsApp((prev) => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="relative z-50 border-b border-slate-200/80 bg-white text-pst-navy"
        >
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">

                {/* Left Side - Logo & Phone Numbers */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

                    {/* <Link
                        href="/"
                        dir="ltr"
                        className="flex shrink-0 items-center"
                    >
                        <img
                            src="/images/logo/logo.png"
                            alt="Power Sixers Trading and Contracting W.L.L."
                            className="h-11 w-auto object-contain sm:h-12"
                            width="200"
                            height="80"
                        />
                    </Link> */}

                    {/* Phone Contacts */}
                    <div className="flex min-w-0 items-center gap-2">
                        <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${showWhatsApp
                                ? "bg-green-50 text-[#25D366]"
                                : "bg-blue-50 text-pst-blue"
                                }`}
                        >
                            {showWhatsApp ? (
                                <WhatsAppIcon size={16} />
                            ) : (
                                <Phone size={14} />
                            )}
                        </div>

                        <div
                            dir="ltr"
                            className="flex flex-wrap items-center gap-x-2 text-[11px] font-medium sm:gap-x-3 sm:text-xs"
                        >
                            {phoneNumbers.map((item, index) => (
                                <div
                                    key={item.phone}
                                    className="flex items-center gap-2"
                                >
                                    {index > 0 && (
                                        <span className="text-slate-300">|</span>
                                    )}

                                    <a
                                        href={`tel:${item.phone.replace(/\s/g, "")}`}
                                        className="whitespace-nowrap transition-colors duration-200 hover:text-pst-red"
                                    >
                                        {item.phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Right Side - Email, Location & Social Links */}
                <div className="flex items-center gap-3 text-[11px] font-medium sm:gap-4 sm:text-xs">

                    <a
                        dir="ltr"
                        href="mailto:powersixers.qa@gmail.com"
                        className="hidden items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-pst-red md:flex"
                    >
                        <Mail size={14} className="shrink-0 text-pst-blue" />
                        <span>powersixers.qa@gmail.com</span>
                    </a>

                    <span className="hidden text-slate-300 md:inline">|</span>

                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <MapPin size={14} className="shrink-0 text-pst-red" />
                        <span>Doha, Qatar</span>
                    </div>

                    <span className="text-slate-300">|</span>

                    {/* Social Media */}
                    {/* Social Media */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61596166545461"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Follow us on Facebook"
                            className="text-[#1877F2] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-75"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-[17px] w-[17px]"
                            >
                                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.953.93-1.953 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/powersixers.qa2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Follow us on Instagram"
                            className="text-[#E4405F] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-75"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-[17px] w-[17px]"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="0.8" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );


}
