import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";

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

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    relatedProduct?: string;
    relatedProductSlug?: string;
}

interface Author {
    name: string;
    role: string;
    initials: string;
    jobTitle: string;
}

const AUTHORS: Record<string, Author> = {
    technical: {
        name: "Bharat Thakkar",
        role: "Technical Director",
        initials: "BT",
        jobTitle: "Technical Director, Harmony Additives",
    },
    team: {
        name: "Harmony Additives Team",
        role: "Editorial Team",
        initials: "HA",
        jobTitle: "Harmony Additives Private Limited",
    },
};

// Technical/formulation content is authored by the Technical Director (E-E-A-T);
// company and industry-trend posts by the editorial team.
const COMPANY_CATEGORIES = new Set(["Company News", "Company", "Export"]);
function getAuthor(post: BlogPost): Author {
    return COMPANY_CATEGORIES.has(post.category) ? AUTHORS.team : AUTHORS.technical;
}

const posts: BlogPost[] = [
    {
        slug: "defoamers-antifoams-adhesive-industry",
        title: "Defoamers in Adhesive Manufacturing: Selection Guide & Best Practices",
        excerpt: "Foam in adhesive systems — PVA, acrylic, and polyurethane — causes application defects and storage instability. This guide covers defoamer selection for the most common adhesive chemistries.",
        date: "6 May 2026",
        category: "Defoamers",
        readTime: "8 min",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
    },
    {
        slug: "paint-india-2026",
        title: "Harmony Additives at Paint India 2026 — What to Expect",
        excerpt: "We are exhibiting at Paint India 2026 in Mumbai. Visit our booth to see live defoamer and dispersant demonstrations, meet our technical team, and request samples of our latest grades.",
        date: "7 January 2026",
        category: "Company News",
        readTime: "3 min",
    },
    {
        slug: "defoamers-non-aqueous-inks",
        title: "Defoamers for Solvent-Based Printing Inks: A Practical Guide",
        excerpt: "Foam in gravure and offset inks causes print voids, colour density variations, and press downtime. This guide covers defoamer selection for non-aqueous ink systems by print process and substrate.",
        date: "16 Oct 2025",
        category: "Defoamers",
        readTime: "9 min",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
    },
    {
        slug: "defoamers-aqueous-inks",
        title: "Defoamers for Water-Based Flexographic Inks: Selection & Troubleshooting",
        excerpt: "Water-based flexo inks are prone to foam at high press speeds and during anilox roll inking. This guide covers compatible defoamer chemistries and common troubleshooting scenarios.",
        date: "9 Oct 2025",
        category: "Defoamers",
        readTime: "8 min",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
    },
    {
        slug: "defoamers-non-aqueous-paints",
        title: "Defoamers for Solvent-Based Paints: Selection Guide & Best Practices",
        excerpt: "Solvent-based paint systems present different defoaming challenges than water-based ones. This guide covers mineral-oil and polymer defoamer selection for alkyd, epoxy, and polyurethane solvent coatings.",
        date: "29 Sep 2025",
        category: "Defoamers",
        readTime: "9 min",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
    },
    {
        slug: "defoamers-aqueous-paints",
        title: "Defoamers for Water-Based Paints: What Every Formulator Should Know",
        excerpt: "Choosing the wrong defoamer in an aqueous paint system causes cratering, fish-eyes, or persistent foam. This practical guide covers defoamer types, selection criteria, and dosage optimization.",
        date: "16 Sep 2025",
        category: "Defoamers",
        readTime: "10 min",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
    },
    {
        slug: "harmony-additives-trusted-partner",
        title: "Why 500+ Formulators Trust Harmony Additives: Quality, Service & Reach",
        excerpt: "Behind a 90%+ repeat-order rate lies consistent batch quality, honest lead times, and a technical team with an average 11-year tenure. Here is how we deliver on these promises.",
        date: "20 Aug 2025",
        category: "Company",
        readTime: "5 min",
    },
    {
        slug: "green-chemistry-specialty-additives",
        title: "Green Chemistry in Specialty Additives: How Harmony Additives Is Adapting",
        excerpt: "Regulatory and customer pressure for lower-VOC, biodegradable, and REACH-compliant additives is reshaping the specialty chemical industry. Here is our approach to sustainable formulation.",
        date: "30 Jul 2025",
        category: "Industry Trends",
        readTime: "7 min",
    },
    {
        slug: "indian-manufacturing-global-chemicals",
        title: "Why Indian Manufacturing Is a Competitive Advantage for Global Chemical Buyers",
        excerpt: "India's specialty chemical industry has moved from commodity supplier to formulation partner. We explain why overseas buyers are increasingly sourcing specialty additives from Indian manufacturers.",
        date: "23 Jul 2025",
        category: "Export",
        readTime: "6 min",
    },
    {
        slug: "export-clients-chemistry-culture",
        title: "What Our Export Clients Teach Us About Chemistry and Culture",
        excerpt: "Formulation requirements vary significantly between markets. Supplying to 13 countries has taught us lessons about technical adaptation, communication, and building long-term export partnerships.",
        date: "15 Jul 2025",
        category: "Export",
        readTime: "6 min",
    },
    {
        slug: "customization-specialty-chemicals",
        title: "The Power of Custom Additive Formulation: When Standard Grades Fall Short",
        excerpt: "Off-the-shelf additives solve most problems. But unusual resins, extreme process conditions, or proprietary specifications sometimes require a custom blend. Here is how our development process works.",
        date: "8 Jul 2025",
        category: "Custom Formulation",
        readTime: "7 min",
        relatedProduct: "Specialty & Tailor-Made",
        relatedProductSlug: "specialty-tailor-made",
    },
    {
        slug: "how-to-calculate-paint-coverage",
        title: "How to Calculate Paint Coverage Capacity (With Formula & Examples)",
        excerpt: "Paint coverage calculation determines how much area a given volume of paint will cover at a specific film thickness. This practical guide includes the formula, worked examples, and factors that affect real-world coverage.",
        date: "28 Sep 2021",
        category: "Technical Guide",
        readTime: "5 min",
    },
    {
        slug: "extenders-waterborne-coatings",
        title: "Selecting Extenders for Water-Borne Coatings: A Formulator's Guide",
        excerpt: "Extender pigments — calcium carbonate, talc, barytes, kaolin — affect opacity, sheen level, scrub resistance, and cost. This guide covers selection criteria and their interaction with dispersants.",
        date: "17 Mar 2021",
        category: "Technical Guide",
        readTime: "8 min",
        relatedProduct: "Wetting & Dispersing Agents",
        relatedProductSlug: "wetting-dispersing-agents",
    },
    {
        slug: "covid-19-specialty-additive-industry",
        title: "The Impact of COVID-19 on the Specialty Additive Industry — What Changed",
        excerpt: "The pandemic disrupted supply chains, changed demand patterns, and accelerated certain industry trends. This analysis looks at lasting changes to the Indian specialty chemical market.",
        date: "24 Feb 2021",
        category: "Industry Trends",
        readTime: "6 min",
    },
    {
        slug: "nanotechnology-coatings",
        title: "Nanotechnology in Coatings: Self-Cleaning, Anti-Microbial & Anti-Corrosion Applications",
        excerpt: "Nano-scale additives are enabling a new generation of functional coatings. This overview covers the most commercially relevant nanotechnology applications in the coatings industry.",
        date: "7 Nov 2020",
        category: "Innovation",
        readTime: "7 min",
    },
];

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
        datePublished: p.date,
        description: p.excerpt,
        author: {
            "@type": "Person",
            name: getAuthor(p).name,
            jobTitle: getAuthor(p).jobTitle,
        },
        publisher: { "@id": "https://harmonyadditive.in/#organization" },
    })),
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function BlogPage() {
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
                <Link href={`/blog/${posts[0].slug}/`} style={{ textDecoration: "none" }}>
                    <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                        <div className="blog-card-meta">
                            <span className="blog-card-tag">{posts[0].category}</span>
                            <span className="blog-card-date">{posts[0].date} · {posts[0].readTime} read</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-text)", margin: "1rem 0 0.75rem", lineHeight: 1.2 }}>
                            {posts[0].title}
                        </h2>
                        <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.97rem", color: "var(--color-text-secondary)", lineHeight: 1.75, maxWidth: "680px" }}>
                            {posts[0].excerpt}
                        </p>
                        {posts[0].relatedProduct && (
                            <p style={{ marginTop: "1rem", fontFamily: "var(--font-body-family)", fontSize: "0.82rem", color: "var(--color-accent)", fontWeight: 600 }}>
                                Related: {posts[0].relatedProduct}
                            </p>
                        )}
                        <div className="blog-card-author" style={{ borderTop: "none", paddingTop: "1.25rem" }}>
                            <span className="blog-card-author-avatar">{getAuthor(posts[0]).initials}</span>
                            <div className="blog-card-author-info">
                                <span className="blog-card-author-name">{getAuthor(posts[0]).name}</span>
                                <span className="blog-card-author-role">{getAuthor(posts[0]).role}</span>
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
                                <div className="blog-card-meta">
                                    <span className="blog-card-tag">{post.category}</span>
                                    <span className="blog-card-date">{post.readTime} read</span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                {post.relatedProduct && (
                                    <p style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: 600 }}>
                                        → {post.relatedProduct}
                                    </p>
                                )}
                                <span className="blog-card-readmore">
                                    Read more <span aria-hidden="true">→</span>
                                </span>
                                <div className="blog-card-author">
                                    <span className="blog-card-author-avatar">{getAuthor(post).initials}</span>
                                    <div className="blog-card-author-info">
                                        <span className="blog-card-author-name">{getAuthor(post).name}</span>
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
                            cursor: "pointer",
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
