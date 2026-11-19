
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import { Link } from "@/i18n/navigation";

export default async function CTASection() {
    const t = await getTranslations("HomePage");

    return (
        <section className="relative isolate overflow-hidden bg-pst-navy py-20 md:py-28">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-pst-blue/30 blur-3xl" />

            <Container>
                <Reveal>
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                            <span className="h-2 w-2 rounded-full bg-red-500" />
                            {t("ctaEyebrow")}
                        </span>

                        <h2 className="mt-7 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            {t("ctaTitle")}
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                            {t("ctaDescription")}
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-bold text-pst-navy transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                            >
                                <MessageCircle size={19} />
                                {t("ctaButton")}
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
                            >
                                {t("ctaSecondaryButton")}
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
