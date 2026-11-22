
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import { galleryCategories, galleryImages } from "@/data/gallery";

export default function GalleryGrid({ locale }) {
    const isArabic = locale === "ar";

    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);

    const touchStartX = useRef(null);

    const filteredImages = useMemo(() => {
        return activeCategory === "all"
            ? galleryImages
            : galleryImages.filter(
                  (image) => image.category === activeCategory
              );
    }, [activeCategory]);

    const currentIndex = filteredImages.findIndex(
        (image) => image.id === selectedImage?.id
    );

    const content = {
        en: {
            eyebrow: "PROJECT SHOWCASE",
            title: "Our Work Gallery",
            description:
                "Browse through our installation, maintenance and technical work across different projects.",
            empty: "No images available in this category.",
            close: "Close image preview",
            previous: "Previous image",
            next: "Next image",
        },
        ar: {
            eyebrow: "عرض المشاريع",
            title: "معرض أعمالنا",
            description:
                "تصفح صور أعمالنا في التركيب والصيانة والخدمات الفنية ضمن مختلف المشاريع.",
            empty: "لا توجد صور متاحة في هذه الفئة.",
            close: "إغلاق معاينة الصورة",
            previous: "الصورة السابقة",
            next: "الصورة التالية",
        },
    };

    const t = content[locale] || content.en;

    // Close image preview
    const closePreview = useCallback(() => {
        setSelectedImage(null);
    }, []);

    // Previous image
    const showPrevious = useCallback(() => {
        setSelectedImage((current) => {
            if (!current) return null;

            const index = filteredImages.findIndex(
                (image) => image.id === current.id
            );

            if (index <= 0) return current;

            return filteredImages[index - 1];
        });
    }, [filteredImages]);

    // Next image
    const showNext = useCallback(() => {
        setSelectedImage((current) => {
            if (!current) return null;

            const index = filteredImages.findIndex(
                (image) => image.id === current.id
            );

            if (index === -1 || index >= filteredImages.length - 1) {
                return current;
            }

            return filteredImages[index + 1];
        });
    }, [filteredImages]);

    // Keyboard navigation and body scroll lock
    useEffect(() => {
        if (!selectedImage) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closePreview();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedImage, closePreview, showPrevious, showNext]);

    // Mobile swipe navigation
    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const touchEndX = event.changedTouches[0].clientX;
        const difference = touchStartX.current - touchEndX;

        if (Math.abs(difference) > 60) {
            if (difference > 0) {
                showNext();
            } else {
                showPrevious();
            }
        }

        touchStartX.current = null;
    };

    return (
        <section
            id="gallery-grid"
            dir={isArabic ? "rtl" : "ltr"}
            className="bg-slate-50 py-20 md:py-28"
        >
            <Container>
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold uppercase tracking-[0.2em] text-pst-red"
                    >
                        {t.eyebrow}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-3xl font-bold text-pst-navy md:text-5xl"
                    >
                        {t.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 text-base leading-8 text-slate-600 md:text-lg"
                    >
                        {t.description}
                    </motion.p>
                </div>

                {/* Category Filters */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {galleryCategories.map((category) => {
                        const isActive =
                            activeCategory === category.slug;

                        return (
                            <button
                                key={category.slug}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(category.slug)
                                }
                                aria-pressed={isActive}
                                className={`rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${
                                    isActive
                                        ? "border-pst-navy bg-pst-navy text-white shadow-lg shadow-pst-navy/10"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-pst-blue hover:text-pst-blue"
                                }`}
                            >
                                {category[locale] || category.en}
                            </button>
                        );
                    })}
                </div>

                {/* Gallery Images */}
                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, index) => (
                            <motion.button
                                key={image.id}
                                type="button"
                                layout
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.04,
                                }}
                                onClick={() => setSelectedImage(image)}
                                aria-label={image.title[locale] || image.title.en}
                                className="group relative block overflow-hidden rounded-2xl bg-white text-start shadow-sm outline-none ring-pst-blue/30 transition hover:shadow-xl focus-visible:ring-2"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.title[locale] || image.title.en}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-pst-navy/90 via-pst-navy/10 to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />

                                    {/* Image Title */}
                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                                                {galleryCategories.find(
                                                    (category) =>
                                                        category.slug === image.category
                                                )?.[locale] || image.category}
                                            </p>

                                            <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                                                {image.title[locale] || image.title.en}
                                            </h3>
                                        </div>

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-pst-navy transition duration-300 group-hover:bg-pst-red group-hover:text-white">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="py-20 text-center text-slate-500">
                        {t.empty}
                    </div>
                )}
            </Container>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedImage.title[locale] || selectedImage.title.en}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
                        onClick={closePreview}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={closePreview}
                            aria-label={t.close}
                            className="absolute end-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-pst-red md:end-8 md:top-8"
                        >
                            <X size={24} />
                        </button>

                        {/* Previous Button */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            disabled={currentIndex <= 0}
                            aria-label={t.previous}
                            className="absolute start-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 md:start-8"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Image Preview */}
                        <motion.div
                            key={selectedImage.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative flex max-h-[85vh] w-full max-w-6xl flex-col items-center"
                            onClick={(event) => event.stopPropagation()}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="relative h-[65vh] w-full md:h-[75vh]">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title[locale] || selectedImage.title.en}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-5 text-center">
                                <h3 className="text-lg font-semibold text-white md:text-2xl">
                                    {selectedImage.title[locale] || selectedImage.title.en}
                                </h3>

                                <p className="mt-2 text-sm text-white/60">
                                    {currentIndex + 1} / {filteredImages.length}
                                </p>
                            </div>
                        </motion.div>

                        {/* Next Button */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            disabled={currentIndex >= filteredImages.length - 1}
                            aria-label={t.next}
                            className="absolute end-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 md:end-8"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
