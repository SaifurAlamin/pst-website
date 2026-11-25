
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Phone,
    MessageCircle,
} from "lucide-react";
import RelatedServices from "./RelatedServices";

export default function ServiceDetails({ service, locale }) {
    const isArabic = locale === "ar";
    const content = service[locale];

    return (
        <main dir={isArabic ? "rtl" : "ltr"}>
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-pstc-navy">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt={content.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pstc-navy via-pstc-navy/90 to-pstc-navy/65" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                    <div className="max-w-3xl">
                        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-blue-200">
                            <Link href="/" className="transition hover:text-white">
                                {isArabic ? "الرئيسية" : "Home"}
                            </Link>
                            <span>/</span>
                            <Link
                                href="/services"
                                className="transition hover:text-white"
                            >
                                {isArabic ? "خدماتنا" : "Services"}
                            </Link>
                            <span>/</span>
                            <span className="text-white">{content.title}</span>
                        </div>

                        <span className="mb-5 inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-200">
                            {isArabic ? "خدماتنا" : "OUR SERVICES"}
                        </span>

                        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
                            {content.title}
                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            {content.description}
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg bg-pstc-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500"
                            >
                                {isArabic ? "اطلب الخدمة" : "Request This Service"}
                                {isArabic ? (
                                    <ArrowLeft size={18} />
                                ) : (
                                    <ArrowRight size={18} />
                                )}
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                {isArabic ? "جميع الخدمات" : "All Services"}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pstc-blue via-blue-400 to-pstc-red" />
            </section>

            {/* Overview */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                    <div className="relative">
                        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-bl-3xl border-b-4 border-l-4 border-pstc-blue/30" />

                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10">
                            <Image
                                src={service.image}
                                alt={content.imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-3xl border-r-4 border-t-4 border-pstc-red/50" />
                    </div>

                    <div>
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[2px] text-pstc-red">
                            {isArabic ? "نظرة عامة" : "SERVICE OVERVIEW"}
                        </span>

                        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-pstc-navy sm:text-4xl">
                            {isArabic
                                ? "حلول موثوقة لمتطلبات مشاريعكم"
                                : "Reliable Solutions for Your Project Requirements"}
                        </h2>

                        <p className="text-base leading-8 text-slate-600">
                            {content.overview}
                        </p>

                        <div className="mt-7 h-1 w-20 rounded-full bg-pstc-blue" />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[2px] text-pstc-red">
                            {isArabic ? "نطاق خدماتنا" : "WHAT WE OFFER"}
                        </span>

                        <h2 className="text-3xl font-extrabold text-pstc-navy sm:text-4xl">
                            {isArabic ? "نطاق الخدمة" : "Our Service Scope"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {content.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >
                                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-pstc-blue transition-colors duration-300 group-hover:bg-pstc-blue group-hover:text-white">
                                    <CheckCircle2 size={23} />
                                </span>

                                <h3 className="text-base font-bold leading-7 text-pstc-navy">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* related services  */}
            <RelatedServices
                currentSlug={service.slug}
                locale={locale}
            />
            {/* Contact CTA */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-pstc-navy px-7 py-12 sm:px-12 sm:py-16">
                        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
                        <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-pstc-blue/20 blur-3xl" />

                        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                            <div className="max-w-2xl">
                                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-300">
                                    {isArabic ? "لنتحدث عن مشروعكم" : "LET'S WORK TOGETHER"}
                                </span>

                                <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                    {isArabic
                                        ? "هل تحتاجون إلى هذه الخدمة؟"
                                        : "Need This Service for Your Project?"}
                                </h2>

                                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                                    {isArabic
                                        ? "تواصلوا معنا لمناقشة متطلبات مشروعكم."
                                        : "Get in touch with our team to discuss your project requirements."}
                                </p>
                            </div>

                            <div className="flex shrink-0 flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg bg-pstc-blue px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                                >
                                    <MessageCircle size={18} />
                                    {isArabic ? "اتصل بنا" : "Contact Us"}
                                </Link>

                                <a
                                    href="tel:+97450925474"
                                    dir="ltr"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    <Phone size={17} />
                                    +974 5092 5474
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
