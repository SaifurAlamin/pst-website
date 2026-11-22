
"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const t = useTranslations("ContactPage.form");
    const locale = useLocale();
    const isArabic = locale === "ar";

    const [submitted, setSubmitted] = useState(false);

    const contactSchema = z.object({
        name: z.string().trim().min(2, t("validation.name")),
        email: z.string().trim().email(t("validation.email")),
        phone: z.string().trim().min(7, t("validation.phone")),
        subject: z.string().trim().min(3, t("validation.subject")),
        message: z.string().trim().min(10, t("validation.message")),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        // Frontend only - backend/email integration will be added later
        console.log("Contact form submission:", data);

        setSubmitted(true);
        reset();
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-pst-blue focus:bg-white focus:ring-4 focus:ring-blue-50";

    const labelClass =
        "mb-2 block text-sm font-semibold text-pst-navy";

    const renderError = (error) =>
        error && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
                {error.message}
            </p>
        );

    return (
        <section
            id="contact-form"
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-28"
                    >
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-pst-blue">
                            {t("eyebrow")}
                        </span>

                        <h2 className="max-w-lg text-3xl font-bold leading-tight text-pst-navy sm:text-4xl lg:text-5xl">
                            {t("title")}
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                            {t("description")}
                        </p>

                        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-pst-blue">
                                <Send size={22} />
                            </div>

                            <div>
                                <h3 className="font-bold text-pst-navy">
                                    {t("noteTitle")}
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-slate-500">
                                    {t("noteDescription")}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9"
                    >
                        {submitted && (
                            <div
                                role="status"
                                className="mb-7 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
                            >
                                <CheckCircle2
                                    size={22}
                                    className="mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="font-bold">
                                        {t("successTitle")}
                                    </p>
                                    <p className="mt-1 text-sm leading-6">
                                        {t("successDescription")}
                                    </p>
                                </div>
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className="space-y-5"
                        >
                            {/* Name & Email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className={labelClass}>
                                        {t("name")}
                                        <span className="text-red-500"> *</span>
                                    </label>

                                    <input
                                        {...register("name")}
                                        type="text"
                                        placeholder={t("namePlaceholder")}
                                        autoComplete="name"
                                        aria-invalid={!!errors.name}
                                        className={inputClass}
                                    />

                                    {renderError(errors.name)}
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        {t("email")}
                                        <span className="text-red-500"> *</span>
                                    </label>

                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder={t("emailPlaceholder")}
                                        autoComplete="email"
                                        dir="ltr"
                                        aria-invalid={!!errors.email}
                                        className={inputClass}
                                    />

                                    {renderError(errors.email)}
                                </div>
                            </div>

                            {/* Phone & Subject */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className={labelClass}>
                                        {t("phone")}
                                        <span className="text-red-500"> *</span>
                                    </label>

                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        placeholder={t("phonePlaceholder")}
                                        autoComplete="tel"
                                        dir="ltr"
                                        aria-invalid={!!errors.phone}
                                        className={inputClass}
                                    />

                                    {renderError(errors.phone)}
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        {t("subject")}
                                        <span className="text-red-500"> *</span>
                                    </label>

                                    <input
                                        {...register("subject")}
                                        type="text"
                                        placeholder={t("subjectPlaceholder")}
                                        aria-invalid={!!errors.subject}
                                        className={inputClass}
                                    />

                                    {renderError(errors.subject)}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className={labelClass}>
                                    {t("message")}
                                    <span className="text-red-500"> *</span>
                                </label>

                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    placeholder={t("messagePlaceholder")}
                                    aria-invalid={!!errors.message}
                                    className={`${inputClass} resize-none`}
                                />

                                {renderError(errors.message)}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-pst-blue px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition duration-300 hover:-translate-y-1 hover:bg-pst-navy hover:shadow-xl"
                            >
                                {t("submit")}
                                <Send
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                />
                            </button>

                            <p className="text-center text-xs leading-6 text-slate-400">
                                {t("disclaimer")}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
