
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Button({
    children,
    href,
    variant = "primary",
    showArrow = false,
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-pst-blue text-white hover:bg-pst-navy shadow-lg shadow-blue-900/10",
        secondary: "border border-pst-navy text-pst-navy hover:bg-pst-navy hover:text-white",
        white: "bg-white text-pst-navy hover:bg-slate-100",
    };

    const styles = `
        inline-flex items-center justify-center gap-3
        rounded-lg px-7 py-3.5
        text-sm font-bold
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-pst-blue focus-visible:ring-offset-2
        ${variants[variant] || variants.primary}
        ${className}
    `;

    if (href) {
        return (
            <Link href={href} className={styles} {...props}>
                {children}

                {showArrow && (
                    <ArrowUpRight size={18} />
                )}
            </Link>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}

            {showArrow && (
                <ArrowUpRight size={18} />
            )}
        </button>
    );
}
