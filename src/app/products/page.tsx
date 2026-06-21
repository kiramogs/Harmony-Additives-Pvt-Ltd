import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
    title: "Chemical Additives — 173 Products",
    description:
        "Browse 173 specialty chemical additives across 6 categories. Defoamers, emulsifiers, wetting agents, thickeners & more from a leading Indian manufacturer since 1996.",
    alternates: { canonical: "/products/" },
    openGraph: {
        title: "Industrial Chemical Additives — Defoamers, Emulsifiers, Thickeners | Harmony Additives",
        description:
            "Browse 173 specialty chemical additives across 6 categories from Mumbai-based manufacturer Harmony Additives.",
        url: "https://harmonyadditive.in/products/",
    },
};

const categories = [
    {
        name: "Defoamers & Antifoams",
        slug: "defoamers",
        count: 70,
        desc: "Silicone, mineral-oil, and polyether foam-control agents for aqueous and non-aqueous systems — paints, paper mills, adhesives, ETP plants, and more.",
        industries: ["Paint & Coatings", "Pulp & Paper", "Adhesives", "Water Treatment"],
    },
    {
        name: "Wetting & Dispersing Agents",
        slug: "wetting-dispersing-agents",
        count: 28,
        desc: "Reduce pigment grinding time and stabilize dispersions for uniform colour development. Grades for organic and inorganic pigment systems across water and solvent-based formulations.",
        industries: ["Paint & Coatings", "Printing Inks", "Textile", "Agrochemicals"],
    },
    {
        name: "Emulsifiers",
        slug: "emulsifiers",
        count: 15,
        desc: "Anionic and non-ionic emulsifiers for stable oil-in-water and water-in-oil formulations in agrochemicals, paints, and metalworking fluids.",
        industries: ["Agrochemicals", "Metalworking", "Paints", "Personal Care"],
    },
    {
        name: "Thickeners & Anti-Settling Agents",
        slug: "thickeners-anti-settling-agents",
        count: 27,
        desc: "Cellulosic, acrylic, and polyurethane-based rheology modifiers that prevent pigment settling and sagging, delivering consistent viscosity from production to application.",
        industries: ["Paint & Coatings", "Printing Inks", "Construction", "Adhesives"],
    },
    {
        name: "Surface Property Enhancers",
        slug: "surface-property-enhancers",
        count: 11,
        desc: "Leveling, slip, and scratch-resistance additives for coatings. Silicone and wax-based products that improve the final finish without affecting recoatability.",
        industries: ["Paint & Coatings", "Printing Inks", "Plastic Coatings", "Wood Finishes"],
    },
    {
        name: "Specialty & Tailor-Made Additives",
        slug: "specialty-tailor-made",
        count: 22,
        desc: "Custom formulations developed to your exact specifications. When off-the-shelf products don't meet your process needs, our lab creates the solution — typically 2–4 weeks for samples.",
        industries: ["All Industries", "Custom Applications", "R&D Partnerships"],
    },
];

const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Specialty Chemical Additives by Harmony Additives",
    description: "Complete range of 173 specialty chemical additives across 6 categories",
    numberOfItems: 6,
    itemListElement: categories.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: cat.name,
        url: `https://harmonyadditive.in/products/${cat.slug}/`,
    })),
};

export default function ProductsPage() {
    return (
        <InnerLayout
            heroTitle="Specialty Chemical Additives"
            heroSubtitle="173 products across 6 categories — manufactured in Mumbai and exported to 13 countries. Request samples or technical data sheets for any product."
            heroEyebrow="170+ Products · 6 Categories"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request a Sample</Link>
                    <Link href="/industry/" className="btn-secondary">Browse by Industry</Link>
                </>
            }
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Intro text — important for SEO crawlable content */}
            <section className="inner-section">
                <GlassCard className="inner-section-body" style={{ padding: "2.5rem 2.75rem", maxWidth: "none" }}>
                    <p>
                        Harmony Additives Private Limited manufactures and exports <strong>specialty chemical additives</strong> for
                        the paint &amp; coatings, printing inks, pulp &amp; paper, textile, construction, agrochemical,
                        household, and water-treatment industries. Established in 1996 and ISO 9001 &amp; 14001 certified,
                        we operate three production facilities — two in Tarapur, Maharashtra and one in Umbergaon, Gujarat —
                        giving us the scale to serve both domestic buyers and export clients.
                    </p>
                    <p>
                        Our catalogue covers <strong>173 products</strong> across six functional categories: defoamers &amp; antifoams,
                        wetting &amp; dispersing agents, emulsifiers, thickeners &amp; anti-settling agents, surface property enhancers,
                        and specialty &amp; tailor-made formulations. Where standard grades do not meet your system requirements,
                        our in-house formulators develop custom blends to specification.
                    </p>
                    <p>
                        All products ship with a technical data sheet. Samples are available on request with a typical
                        turnaround of 5–7 working days for standard grades.
                    </p>
                </GlassCard>
            </section>

            {/* Category grid */}
            <section className="inner-section">
                <h2 className="inner-section-title">Browse by Product Category</h2>
                <div className="category-grid">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}/`}
                            style={{ textDecoration: "none" }}
                        >
                            <GlassCard className="category-card">
                                <span className="category-card-count">{cat.count} Products</span>
                                <h3 className="category-card-title">{cat.name}</h3>
                                <p className="category-card-desc">{cat.desc}</p>
                                <div className="category-card-industries">
                                    {cat.industries.slice(0, 3).map((ind) => (
                                        <span key={ind} className="industry-tag">{ind}</span>
                                    ))}
                                </div>
                                <span className="category-card-link">
                                    View category <span aria-hidden="true">→</span>
                                </span>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="inner-section">
                <div className="inner-stats-row">
                    {[
                        { value: "173", label: "Total Products" },
                        { value: "6", label: "Categories" },
                        { value: "10+", label: "Industries Served" },
                        { value: "13", label: "Export Countries" },
                    ].map((s) => (
                        <GlassCard key={s.label} className="inner-stat-card">
                            <span className="inner-stat-value">{s.value}</span>
                            <span className="inner-stat-label">{s.label}</span>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Can't find what you need?</h2>
                <p className="cta-banner-desc">
                    Describe your formulation challenge and our chemists will identify the right additive — or develop a custom blend.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <a href="mailto:sales@additive.in" className="btn-secondary">Email Sales Team</a>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
