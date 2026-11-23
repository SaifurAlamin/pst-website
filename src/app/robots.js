
const BASE_URL = "https://pst-project-qatar.netlify.app";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/api/",
                "/_next/",
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
