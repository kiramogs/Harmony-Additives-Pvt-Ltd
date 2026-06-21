import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Wetting & Dispersing Agents for Coatings",
    description:
        "28 wetting & dispersing agents for paints, inks, textiles & agrochemicals. Grades for carbon black, TiO2, organic pigments. APEO-free. Mumbai manufacturer since 1996.",
    alternates: { canonical: "/products/wetting-dispersing-agents/" },
    openGraph: {
        title: "Wetting & Dispersing Agents for Paint, Ink & Coatings | Harmony Additives",
        description: "28 dispersing agents for organic and inorganic pigment systems. Reduce grinding time, stabilize dispersions. APEO-free.",
        url: "https://harmonyadditive.in/products/wetting-dispersing-agents/",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a wetting agent and a dispersing agent?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A wetting agent reduces surface tension so the liquid wets and penetrates the pigment surface during grinding. A dispersing agent then stabilises the wetted pigment particles, preventing re-agglomeration. Many products combine both functions — these are called wetting and dispersing agents.",
            },
        },
        {
            "@type": "Question",
            name: "Which dispersing agent works best for titanium dioxide (TiO2)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our Special Titanium Dioxide Dispersing Agent is purpose-built for TiO2 grinding in aqueous systems, achieving maximum opacity and brightness. For non-aqueous systems, our non-aqueous universal dispersant is compatible with TiO2 in solvent-borne paints.",
            },
        },
        {
            "@type": "Question",
            name: "Do you have a dispersing agent specifically for carbon black?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — we have two dedicated carbon black grades: Dispersing Agent Specially For Carbon Black and Special Carbon Black Dispersing Agent (for high-jetness applications). Both deliver superior jetness and tinting strength in aqueous systems.",
            },
        },
        {
            "@type": "Question",
            name: "Can your dispersants reduce pigment grinding time?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our wetting and dispersing agents typically reduce grinding time by 30–50% depending on the pigment system. They also enable higher pigment loadings without viscosity penalties.",
            },
        },
    ],
};

const wdProducts = getProductsByCategory("wetting-dispersing-agents");

export default function WettingDispersing() {
    return (
        <InnerLayout
            heroTitle="Wetting & Dispersing Agents"
            heroSubtitle="28 grades for organic and inorganic pigment systems. Dedicated grades for carbon black, TiO2, fluorescent pigments, and paste inks. All APEO-free."
            heroEyebrow="28 Products · Carbon Black · TiO2 · Fluorescent · APEO-Free"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Wetting & Dispersing Agents" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request Sample</Link>
                    <Link href="/industry/paint-coatings/" className="btn-secondary">Paint Applications</Link>
                </>
            }
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Wetting & Dispersing Agents — Product Overview</h2>
                        <p>
                            Wetting and dispersing agents are critical to any pigmented formulation. During grinding,
                            pigment agglomerates must be broken down and kept separated — an inadequate dispersant leads
                            to flooding, floating, flocculation, and colour development failures. The right
                            <strong> dispersing agent</strong> cuts grinding time, boosts colour strength, and stabilises
                            the finished product through storage and application.
                        </p>
                        <p>
                            Our <strong>28 wetting and dispersing agent grades</strong> include anionic, non-ionic, and
                            polymeric types for aqueous and non-aqueous systems. The range features dedicated grades for
                            carbon black, titanium dioxide, fluorescent pigments, and paste inks — covering both organic
                            and inorganic pigment systems. All products are <strong>APEO-free</strong>.
                        </p>

                        <h3>Key Benefits</h3>
                        <ul>
                            <li>30–50% reduction in pigment grinding time</li>
                            <li>Higher pigment loading without viscosity increase</li>
                            <li>Improved colour strength and tinting efficiency</li>
                            <li>Prevention of hard settling, flooding, and floating</li>
                            <li>Better storage stability in pigment concentrates</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Wetting & Dispersing Agent Range</h2>
                <p className="pg-section-note">
                    All <strong>28 wetting &amp; dispersing grades</strong>, by real product code. Search by code or
                    pigment type, or filter by your industry — then request a sample or technical data sheet.
                </p>
                <ProductGrid
                    products={wdProducts}
                    accentColor="#7C3AED"
                    showSearch
                    showIndustryFilter
                />
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqSchema.mainEntity.map((faq) => (
                        <GlassCard key={faq.name} className="faq-item">
                            <h3 className="faq-question">{faq.name}</h3>
                            <p className="faq-answer">{faq.acceptedAnswer.text}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Improve your next pigment grind</h2>
                <p className="cta-banner-desc">
                    Share your pigment type and binder system. We will recommend the right dispersant and send a free sample.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Get Free Recommendation</Link>
                    <Link href="/products/defoamers/" className="btn-secondary">Defoamers for Paints</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
