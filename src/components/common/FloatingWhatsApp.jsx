
export default function FloatingWhatsApp() {
    const phoneNumber = "97450925474";

    const message = encodeURIComponent(
        "Hello PST, I would like to know more about your services."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with PST on WhatsApp"
            dir="ltr"
            className="group fixed bottom-6 right-6 left-auto z-[9999] flex flex-row items-center gap-3"
        >
            {/* Tooltip */}
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-pst-navy shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Chat with us
            </span>

            {/* WhatsApp Button */}
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">

                {/* Animated Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

                {/* WhatsApp SVG Logo */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="relative z-10 h-8 w-8 fill-current"
                    aria-hidden="true"
                >
                    <path d="M16.02 3C8.85 3 3.02 8.83 3.02 16c0 2.3.61 4.56 1.77 6.55L3 29l6.62-1.73A12.94 12.94 0 0 0 16.02 29C23.19 29 29 23.17 29 16S23.19 3 16.02 3Zm0 23.8c-2.03 0-4.02-.55-5.76-1.6l-.41-.24-3.93 1.03 1.05-3.83-.27-.43A10.72 10.72 0 0 1 5 16c0-6.08 4.94-11.02 11.02-11.02S27.04 9.92 27.04 16s-4.94 10.8-11.02 10.8Zm6.05-8.13c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.67-1.65-.99-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.64-.55-.55-.74-.56h-.63c-.22 0-.57.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.55 5.63 4.98.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.64-.1 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z" />
                </svg>
            </span>
        </a>
    );
}
