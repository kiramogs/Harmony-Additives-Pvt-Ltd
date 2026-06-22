import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import { posts, authorOf } from "@/data/blog";

export const metadata: Metadata = {
    title: "Specialty Chemicals Blog — Technical Insights",
    description:
        "Expert articles on defoamers, emulsifiers, paint additives & industrial chemistry from Harmony Additives' formulation specialists. Technical guides and industry news.",
    alternates: { canonical: "/blog/" },
    openGraph: {
        title: "Specialty Chemicals Blog — Technical Insights & Industry News | Harmony Additives",
        description: "Technical guides and industry news from Mumbai specialty chemical manufacturer Harmony Additives.",
        url: "https://harmonyadditive.in/blog/",
    },
};

const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Specialty Chemicals Blog — Harmony Additives",
    description: "Technical insights and industry news from Harmony Additives formulation specialists",
    url: "https://harmonyadditive.in/blog/",
    publisher: { "@id": "https://harmonyadditive.in/#organization" },
    blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://harmonyadditive.in/blog/${p.slug}/`,
        datePublished: p.dateISO,
        description: p.excerpt,
        author: {
            "@type": "Person",
            name: authorOf(p).name,
            jobTitle: authorOf(p).jobTitle,
        },
        publisher: { "@id": "https://harmonyadditive.in/#organization" },
    })),
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function BlogPage() {
    const featured = posts[0];
    return (
        <InnerLayout
            heroTitle="Technical Insights & Industry News"
            heroSubtitle="Formulation guides, selection articles, and industry analysis from Harmony Additives' team of specialty chemical specialists."
            heroEyebrow="Defoamers · Dispersants · Formulation Guides"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Blog" },
            ]}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
            />

            {/* Featured / latest post */}
            <section className="inner-section">
                <h2 className="inner-section-title">Latest Article</h2>
                <Link href={`/blog/${featured.slug}/`} style={{ textDecoration: "none" }}>
                    <GlassCard className="blog-featured-card">
                        <span className="blog-card-thumb">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`/images/blog/${featured.slug}.webp`} alt={featured.title} width={1200} height={675} loading="lazy" decoding="async" />
                        </span>
                        <div className="blog-card-meta">
                            <span className="blog-card-tag">{featured.category}</span>
                            <span className="blog-card-date">{featured.date} · {featured.readTime} read</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-text)", margin: "1rem 0 0.75rem", lineHeight: 1.2 }}>
                            {featured.title}
                        </h2>
                        <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.97rem", color: "var(--color-text-secondary)", lineHeight: 1.75, maxWidth: "680px" }}>
                            {featured.excerpt}
                        </p>
                        <div className="blog-card-author" style={{ borderTop: "none", paddingTop: "1.25rem" }}>
                            <span className="blog-card-author-avatar">{authorOf(featured).initials}</span>
                            <div className="blog-card-author-info">
                                <span className="blog-card-author-name">{authorOf(featured).name}</span>
                                <span className="blog-card-author-role">{authorOf(featured).role}</span>
                            </div>
                            <span className="blog-card-readmore" style={{ marginLeft: "auto" }}>
                                Read article →
                            </span>
                        </div>
                    </GlassCard>
                </Link>
            </section>

            {/* All posts grid */}
            <section className="inner-section">
                <h2 className="inner-section-title">All Articles</h2>
                <div className="blog-grid">
                    {posts.slice(1).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none" }}>
                            <GlassCard className="blog-card">
                                <span className="blog-card-thumb">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`/images/blog/${post.slug}.webp`} alt={post.title} width={400} height={225} loading="lazy" decoding="async" />
                                </span>
                                <div className="blog-card-meta">
                                    <span className="blog-card-tag">{post.category}</span>
                                    <span className="blog-card-date">{post.readTime} read</span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <div className="blog-card-author">
                                    <span className="blog-card-author-avatar">{authorOf(post).initials}</span>
                                    <div className="blog-card-author-info">
                                        <span className="blog-card-author-name">{authorOf(post).name}</span>
                                        <span className="blog-card-author-role">{post.date}</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Topics */}
            <section className="inner-section">
                <h2 className="inner-section-title">Browse by Topic</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    {categories.map((cat) => (
                        <span key={cat} style={{
                            fontFamily: "var(--font-body-family)",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--color-accent)",
                            background: "var(--color-accent-soft)",
                            border: "1px solid rgba(3,105,161,0.15)",
                            padding: "0.45rem 1.1rem",
                            borderRadius: "100px",
                        }}>
                            {cat}
                        </span>
                    ))}
                </div>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Have a formulation question?</h2>
                <p className="cta-banner-desc">
                    Our technical articles cover common challenges. For your specific situation, ask our chemists directly.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/" className="btn-secondary">Browse Products</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
