import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Defoamer & Antifoam Manufacturer India",
    description:
        "70 silicone, mineral-oil & polyether defoamers for paints, paper, adhesives, textile & ETP. All APEO-free. ISO-certified manufacturer in Mumbai since 1996. Request samples.",
    alternates: { canonical: "/products/defoamers/" },
    openGraph: {
        title: "Defoamer & Antifoam Manufacturer India — 70 Products | Harmony Additives",
        description:
            "Mumbai-based manufacturer of 70+ silicone, mineral-oil & polyether defoamers. APEO-free. ISO 9001 certified since 1996.",
        url: "https://harmonyadditive.in/products/defoamers/",
        images: [{ url: "https://harmonyadditive.in/images/category/defoamers.webp", alt: "Defoamers & antifoams by Harmony Additives" }],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a defoamer and an antifoam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Antifoams are added before foaming begins to prevent foam formation. Defoamers are added after foam has already formed to collapse it quickly. In practice, most products perform both functions and the terms are used interchangeably in the industry.",
            },
        },
        {
            "@type": "Question",
            name: "Which defoamer is best for water-based paints?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For water-based (aqueous) paint systems, polyether-based and silicone emulsion defoamers are most effective. The right choice depends on resin type, application method, and gloss level required. Harmony Additives offers free technical consultation to help you select the correct grade from our 70-product range.",
            },
        },
        {
            "@type": "Question",
            name: "Do you supply defoamers for non-aqueous (solvent-based) systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We manufacture mineral-oil-based and polymer defoamers specifically formulated for solvent-based paints, inks, and adhesive systems. Our non-aqueous range includes both 100% active and diluted grades.",
            },
        },
        {
            "@type": "Question",
            name: "Are your defoamers APEO-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. All Harmony Additives defoamers and antifoams are manufactured without alkylphenol ethoxylates (APEOs), which are restricted under EU REACH and other environmental regulations.",
            },
        },
        {
            "@type": "Question",
            name: "Can you develop a custom defoamer for my specific formulation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our R&D lab develops tailor-made defoamer blends for systems where standard grades underperform. Typical turnaround for a custom sample is 2–4 weeks. Contact our Ask Expert team to initiate a development request.",
            },
        },
    ],
};

const defoamerProducts = getProductsByCategory("defoamers");

export default function DefoamersPage() {
    return (
        <InnerLayout
            heroTitle="Defoamers & Antifoams"
            heroSubtitle="70 foam-control agents for aqueous and non-aqueous systems — silicone, mineral-oil, and polyether chemistries. All APEO-free. ISO 9001 certified."
            heroEyebrow="70 Products · Silicone · Mineral Oil · Polyether · APEO-Free"
            heroImage={{ src: "/images/category/defoamers.webp", alt: "Harmony Additives defoamers and antifoams for industrial use" }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Defoamers & Antifoams" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request Sample</Link>
                    <a href="mailto:sales@additive.in?subject=TDS Request — Defoamers" className="btn-secondary">Download TDS</a>
                </>
            }
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* What are defoamers */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">What Are Defoamers?</h2>
                        <p>
                            Defoamers and antifoams are specialty chemical additives that suppress and eliminate foam
                            in liquid formulations. Foam — unwanted air entrained during mixing, pumping, or application —
                            causes surface defects, reduces coating coverage, slows production lines, and shortens equipment
                            life. A correctly selected <strong>defoamer additive</strong> eliminates these issues at
                            dosages typically below 0.5% by weight.
                        </p>
                        <p>
                            The three primary defoamer chemistries are: <strong>silicone-based</strong> (highest efficiency,
                            broad compatibility across aqueous systems), <strong>mineral-oil-based</strong> (cost-effective
                            for non-aqueous systems), and <strong>polyether / polyglycol-based</strong> (silicone-free for
                            systems where contamination is a concern — wood coatings, food-contact paper). We also supply
                            organophosphate antifoams for specific industrial applications.
                        </p>
                        <p>
                            Harmony Additives manufactures <strong>70 defoamer and antifoam grades</strong>, covering
                            industries including paints &amp; coatings, printing inks, pulp &amp; paper, textiles,
                            adhesives, starch, construction chemicals, and effluent treatment plants (ETP).
                            All products are <strong>APEO-free</strong>.
                        </p>

                        <h3>Key Applications</h3>
                        <ul>
                            <li>Water-based and solvent-based paints &amp; architectural coatings</li>
                            <li>Paper mill wet-end, size press, and coating colour</li>
                            <li>Flexographic, gravure, and offset printing inks</li>
                            <li>Textile dyeing, scouring, and finishing baths</li>
                            <li>Starch adhesives and corrugated board manufacturing</li>
                            <li>Industrial adhesives (PVA, acrylic, polyurethane)</li>
                            <li>Effluent treatment plants (ETP) and industrial wastewater</li>
                            <li>Construction chemicals: grouts, screeds, waterproofing</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            {/* Product Grid — all 28 listed products */}
            <section className="inner-section">
                <h2 className="inner-section-title">Defoamer Product Range</h2>
                <p className="pg-section-note">
                    All <strong>70 defoamer &amp; antifoam grades</strong>, by real product code. Search by code or
                    chemistry, or filter by your industry — then request a sample or technical data sheet for any grade.
                </p>
                <ProductGrid
                    products={defoamerProducts}
                    accentColor="#0369A1"
                    showSearch
                    showIndustryFilter
                />
            </section>

            {/* FAQ */}
            <section className="inner-section">
                <h2 className="inner-section-title">Defoamer FAQ</h2>
                <div className="faq-list">
                    {faqSchema.mainEntity.map((faq) => (
                        <GlassCard key={faq.name} className="faq-item">
                            <h3 className="faq-question">{faq.name}</h3>
                            <p className="faq-answer">{faq.acceptedAnswer.text}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Related categories — cross-sell */}
            <section className="inner-section">
                <h2 className="inner-section-title">Frequently Used Alongside Defoamers</h2>
                <div className="category-grid">
                    {[
                        { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents", desc: "Often used alongside defoamers in paint systems for pigment stabilization and colour development." },
                        { name: "Thickeners & Anti-Settling", slug: "thickeners-anti-settling-agents", desc: "Rheology modifiers that complement foam control in coatings and inks." },
                        { name: "Surface Property Enhancers", slug: "surface-property-enhancers", desc: "Leveling agents and wax dispersions that work synergistically with defoamers for defect-free surfaces." },
                    ].map((cat) => (
                        <Link key={cat.slug} href={`/products/${cat.slug}/`} style={{ textDecoration: "none" }}>
                            <GlassCard className="category-card">
                                <h3 className="category-card-title">{cat.name}</h3>
                                <p className="category-card-desc">{cat.desc}</p>
                                <span className="category-card-link">View category →</span>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Ready to trial a defoamer?</h2>
                <p className="cta-banner-desc">
                    Share your formulation details and we will recommend the best-fit grade and dispatch a sample within the week.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Request Free Sample</Link>
                    <Link href="/industry/paint-coatings/" className="btn-secondary">Defoamers for Paints</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
