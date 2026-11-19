
export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className = "",
}) {
    const alignment = {
        center: "mx-auto text-center",
        left: "me-auto text-start",
        right: "ms-auto text-end",
    };

    return (
        <div className={`max-w-3xl ${alignment[align]} ${className}`}>
            {eyebrow && (
                <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-pst-blue">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-pst-navy sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
