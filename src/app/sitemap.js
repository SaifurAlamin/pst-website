import { routing } from "@/i18n/routing";

const BASE_URL = "https://pstc-project-qatar.netlify.app";

const pages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/gallery",
    "/team",
    "/contact",
];

export default function sitemap() {
    return pages.flatMap((page) =>
        routing.locales.map((locale) => ({
            url: `${BASE_URL}/${locale}${page}`,
            lastModified: new Date(),
            changeFrequency: page === "" ? "weekly" : "monthly",
            priority: page === "" ? 1 : 0.8,
        }))
    );
}