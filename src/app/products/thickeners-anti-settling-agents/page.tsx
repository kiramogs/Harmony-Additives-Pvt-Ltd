import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Thickeners & Anti-Settling Agents",
    description:
        "27 rheology modifiers — cellulosic, acrylic (HASE), polyurethane (HEUR) & powder thickeners for paints, inks, detergents & construction. APEO-free. Mumbai manufacturer.",
    alternates: { canonical: "/products/thickeners-anti-settling-agents/" },
    openGraph: {
        title: "Thickeners & Anti-Settling Agents for Coatings & Inks | Harmony Additives",
        description: "27 thickeners and anti-settling agents for paint, ink, detergent, and construction from Mumbai-based Harmony Additives.",
        url: "https://harmonyadditive.in/products/thickeners-anti-settling-agents/",
        images: [{ url: "https://harmonyadditive.in/images/category/thickeners-anti-settling-agents.webp", alt: "Thickeners & anti-settling agents by Harmony Additives" }],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a thickener and an anti-settling agent?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Thickeners increase overall viscosity at rest and under shear. Anti-settling agents create a weak gel network at rest that suspends pigments and fillers, preventing hard sedimentation, while still allowing the paint to flow when stirred or applied.",
            },
        },
        {
            "@type": "Question",
            name: "What is a HASE thickener?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "HASE stands for Hydrophobically-modified Alkali-Swellable Emulsion. Our Alkali Swellable Acrylic Thickener is a HASE-type product that activates at alkaline pH, providing good mid-shear viscosity for water-based paints and coatings.",
            },
        },
        {
            "@type": "Question",
            name: "Which thickener is best for LABSA (acid slurry) detergents?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We supply two dedicated LABSA thickener grades: Acid Slurry Thickener and LABSA (Acid Slurry) Thickener — both specifically formulated for viscosifying LABSA-based liquid detergents to produce clear, stable, pourable gels.",
            },
        },
        {
            "@type": "Question",
            name: "Do you have thickeners for non-aqueous (solvent-based) paints?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We supply Anti-Settling Agent For Alkyd Paints, Thixotropic Agent-Paste For Non Aqueous System, and Powder Rheology Modifier for non-aqueous systems — covering alkyd, epoxy, and other solvent-borne paint formulations.",
            },
        },
    ],
};

const thickenerProducts = getProductsByCategory("thickeners-anti-settling-agents");

export default function ThickenersPage() {
    return (
        <InnerLayout
            heroTitle="Thickeners & Anti-Settling Agents"
            heroSubtitle="27 rheology modifiers — cellulosic, HASE acrylic, HEUR polyurethane, and powder types. Paints, inks, detergents, personal care, and construction chemicals. APEO-free."
            heroEyebrow="27 Products · HASE · HEUR · Cellulosic · Powder · APEO-Free"
            heroImage={{ src: "/images/category/thickeners-anti-settling-agents.webp", alt: "Thickeners and anti-settling agents for coatings, inks and detergents" }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Thickeners & Anti-Settling Agents" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request Sample</Link>
                    <a href="mailto:sales@additive.in?subject=Thickener Enquiry" className="btn-secondary">Talk to Expert</a>
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
                        <h2 className="inner-section-title">Thickeners & Anti-Settling Agents — Overview</h2>
                        <p>
                            Rheology modifiers control the viscosity profile of liquid formulations — a property that
                            affects everything from in-can stability and application behaviour to sag resistance and film
                            build. Without the right thickener, paints run, pigments settle, and application defects
                            multiply. Our broad range covers both <strong>in-can viscosity</strong> (Krebs Units) and
                            <strong> high-shear viscosity</strong> (ICI cone-and-plate) requirements.
                        </p>
                        <p>
                            With <strong>27 grades</strong> including cellulosic (HEC), HASE acrylic, HEUR polyurethane,
                            powder thixotropic agents, and specialty thickeners for detergents and personal care —
                            Harmony Additives provides rheology solutions across a broad range of industries and
                            formulation types. All products are <strong>APEO-free</strong>.
                        </p>

                        <h3>Application Areas</h3>
                        <ul>
                            <li>Water-based architectural paints (interior emulsion, exterior weatherproof)</li>
                            <li>Industrial and protective coatings</li>
                            <li>Flexographic and gravure printing inks</li>
                            <li>Starch-based adhesives and corrugated board manufacturing</li>
                            <li>LABSA and SLES-based liquid detergents and shampoos</li>
                            <li>White phenyl, toilet cleaners, and household products</li>
                            <li>Construction chemicals: tile adhesives, grouts, waterproofing</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Thickener & Anti-Settling Agent Range</h2>
                <p className="pg-section-note">
                    All <strong>27 thickener &amp; anti-settling grades</strong>, by real product code. Search by
                    code or chemistry, or filter by your industry — then request a sample or technical data sheet.
                </p>
                <ProductGrid
                    products={thickenerProducts}
                    accentColor="#16A34A"
                    showSearch
                    showIndustryFilter
                />
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Thickener FAQ</h2>
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
                <h2 className="cta-banner-title">Solve your viscosity challenge</h2>
                <p className="cta-banner-desc">
                    Describe your formulation and target viscosity profile. We will recommend the right thickener and send a free sample.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/wetting-dispersing-agents/" className="btn-secondary">Wetting & Dispersing Agents</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
