import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Industrial Emulsifier Manufacturer India",
    description:
        "15 anionic, non-ionic, cationic & biodegradable emulsifiers for agrochemicals, paints & metalworking fluids. APEO-free. ISO-certified Mumbai manufacturer since 1996.",
    alternates: { canonical: "/products/emulsifiers/" },
    openGraph: {
        title: "Industrial Emulsifier Manufacturer India — 15 Products | Harmony Additives",
        description: "Anionic and non-ionic emulsifiers for stable oil-in-water and water-in-oil formulations. APEO-free. Mumbai since 1996.",
        url: "https://harmonyadditive.in/products/emulsifiers/",
        images: [{ url: "https://harmonyadditive.in/images/category/emulsifiers.webp", alt: "Industrial emulsifiers by Harmony Additives" }],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between anionic and non-ionic emulsifiers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Anionic emulsifiers carry a negative charge and are effective in alkaline systems, widely used in paints and agrochemicals. Non-ionic emulsifiers are charge-neutral, compatible with a wider range of electrolytes and pH conditions — preferred in formulations where ionic sensitivity is a concern.",
            },
        },
        {
            "@type": "Question",
            name: "Which emulsifier is suitable for agrochemical emulsifiable concentrates (EC)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For EC formulations in crop protection, a synergistic blend of anionic and non-ionic emulsifiers with appropriate HLB values (typically 8–14 for O/W systems) is most suitable. Our Synergistic Blend of Anionic & Non-Ionic Surfactants is specifically designed for agrochemical concentrates.",
            },
        },
        {
            "@type": "Question",
            name: "Do you supply biodegradable emulsifiers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We supply biodegradable emulsifiers for eco-conscious formulations, household products, and regulated markets. Our biodegradable grades meet ready biodegradability standards.",
            },
        },
        {
            "@type": "Question",
            name: "Are all your emulsifiers APEO-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. All Harmony Additives emulsifiers are APEO-free (manufactured without alkylphenol ethoxylates), in compliance with EU REACH restrictions and export market requirements.",
            },
        },
    ],
};

const emulsifierProducts = getProductsByCategory("emulsifiers");

export default function EmulsifiersPage() {
    return (
        <InnerLayout
            heroTitle="Industrial Emulsifiers"
            heroSubtitle="15 anionic, non-ionic, cationic, and biodegradable emulsifier grades. Stable O/W and W/O formulations for agrochemicals, paints, metalworking, and more. APEO-free."
            heroEyebrow="15 Products · Anionic · Non-Ionic · Biodegradable · APEO-Free"
            heroImage={{ src: "/images/category/emulsifiers.webp", alt: "Industrial emulsifiers for agrochemicals, paints and metalworking fluids" }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Emulsifiers" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request Sample</Link>
                    <Link href="/industry/agrochemicals/" className="btn-secondary">Agro Applications</Link>
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
                        <h2 className="inner-section-title">Industrial Emulsifiers — Product Overview</h2>
                        <p>
                            Emulsifiers are surface-active agents that stabilise immiscible phases — typically oil and water —
                            into uniform, stable dispersions. Without an emulsifier, phases separate rapidly. The right
                            emulsifier creates a stable interface that maintains the product's integrity through its
                            shelf life and application conditions.
                        </p>
                        <p>
                            Harmony Additives manufactures <strong>15 emulsifier grades</strong> including anionic, non-ionic,
                            cationic, biodegradable, and multi-functional types. Our range covers the full HLB spectrum from
                            3 to 18, serving both oil-in-water (O/W) and water-in-oil (W/O) systems. All products are
                            <strong> APEO-free</strong>.
                        </p>

                        <h3>Key Application Areas</h3>
                        <ul>
                            <li><strong>Agrochemicals:</strong> Emulsifiable concentrates (EC), suspension concentrates (SC), ready-to-use formulations</li>
                            <li><strong>Paints &amp; Coatings:</strong> Alkyd emulsification, oil-modified waterborne resins</li>
                            <li><strong>Metalworking Fluids:</strong> Neat cutting oil emulsification for soluble coolants</li>
                            <li><strong>Household Products:</strong> Floor cleaners, degreasers, liquid detergents</li>
                            <li><strong>Lubricating Oils:</strong> Oil-in-water emulsions for industrial lubrication</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Emulsifier Product Range</h2>
                <p className="pg-section-note">
                    All <strong>15 emulsifier grades</strong>, by real product code. Search by code or type, or
                    filter by your industry — then request a sample or ask our chemists to match the right HLB
                    for your oil phase.
                </p>
                <ProductGrid
                    products={emulsifierProducts}
                    accentColor="#DB2777"
                    showSearch
                    showIndustryFilter
                />
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Emulsifier FAQ</h2>
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
                <h2 className="cta-banner-title">Need an emulsifier for your system?</h2>
                <p className="cta-banner-desc">
                    Share your oil phase and system conditions. We identify the right HLB and recommend the best-fit grade.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/defoamers/" className="btn-secondary">Explore Defoamers</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
