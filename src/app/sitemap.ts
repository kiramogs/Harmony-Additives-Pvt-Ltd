import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { CATEGORY_META } from "@/data/products";
import { posts } from "@/data/blog";

const BASE = "https://harmonyadditive.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE}/industry/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE}/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/ask-expert/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ];

    const categoryPages: MetadataRoute.Sitemap = Object.values(CATEGORY_META).map((c) => ({
        url: `${BASE}/products/${c.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
    }));

    const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
        url: `${BASE}/industry/${i.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
        url: `${BASE}/blog/${p.slug}/`,
        lastModified: new Date(p.dateISO),
        changeFrequency: "yearly",
        priority: 0.6,
    }));

    return [...staticPages, ...categoryPages, ...industryPages, ...blogPages];
}
