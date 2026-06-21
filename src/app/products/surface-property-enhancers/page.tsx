import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Surface Property Enhancers for Coatings",
    description:
        "11 silicone leveling agents & PE wax dispersions for paint, inks & coatings. Mar-scratch resistance, surface slip & gloss improvement. APEO-free. Mumbai manufacturer since 1996.",
    alternates: { canonical: "/products/surface-property-enhancers/" },
    openGraph: {
        title: "Surface Property Enhancer Additives — Leveling, Slip & Scratch Resistance | Harmony Additives",
        description: "Silicone leveling agents and PE wax dispersions for improved surface feel, gloss, and scratch resistance in coatings and inks.",
        url: "https://harmonyadditive.in/products/surface-property-enhancers/",
    },
};

const spProducts = getProductsByCategory("surface-property-enhancers");

export default function SurfacePropertyEnhancers() {
    return (
        <InnerLayout
            heroTitle="Surface Property Enhancers"
            heroSubtitle="Silicone leveling agents, polyethylene wax dispersions, and mar-scratch resistance additives for premium surface feel, gloss, and film protection in coatings and inks."
            heroEyebrow="11 Products · Leveling · Slip · Mar-Scratch · PE Wax · APEO-Free"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Surface Property Enhancers" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request Sample</Link>
                    <Link href="/products/defoamers/" className="btn-secondary">Explore Defoamers</Link>
                </>
            }
        >
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Surface Property Enhancers — Overview</h2>
                        <p>
                            Surface property enhancers modify the final film surface of a coating — influencing leveling,
                            gloss, slip, scratch resistance, and anti-blocking performance. Typically added at 0.1–1%
                            dosage, they have an outsized impact on the perceived quality of the finished film.
                        </p>
                        <p>
                            Our range includes <strong>silicone leveling agents</strong> for maximum flow and gloss,
                            <strong> polyethylene wax dispersions</strong> for mar and scratch resistance, and a
                            <strong> silicone wetting agent</strong> for difficult low-energy substrates. Grades are
                            available for both aqueous and non-aqueous systems, including solvent-free epoxy and UV
                            coatings. All products are <strong>APEO-free</strong>.
                        </p>

                        <h3>Key Functions</h3>
                        <ul>
                            <li><strong>Leveling:</strong> Eliminates brush marks, roller texture, and orange-peel effects</li>
                            <li><strong>Slip &amp; Mar Resistance:</strong> Wax additives create a protective surface layer</li>
                            <li><strong>Anti-Blocking:</strong> Prevents film surfaces from sticking under pressure or heat</li>
                            <li><strong>Gloss Enhancement:</strong> Silicone additives improve surface flow for higher gloss</li>
                            <li><strong>Scratch Resistance:</strong> Hard wax dispersions protect the film from scuffs</li>
                        </ul>

                        <h3>Application Areas</h3>
                        <ul>
                            <li>Interior and exterior architectural paints</li>
                            <li>Industrial and automotive refinish coatings</li>
                            <li>Wood furniture lacquers and floor coatings</li>
                            <li>Flexographic, gravure, and offset printing inks</li>
                            <li>Plastic substrate coatings and overprint varnishes</li>
                            <li>Solvent-free epoxy floor coatings</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Surface Property Enhancer Range</h2>
                <p className="pg-section-note">
                    All <strong>11 surface property enhancer grades</strong>, by real product code. Search by code
                    or function, or filter by your industry — then request a sample or technical data sheet.
                </p>
                <ProductGrid
                    products={spProducts}
                    accentColor="#EA580C"
                    showSearch
                    showIndustryFilter
                />
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Improve your coating's surface feel</h2>
                <p className="cta-banner-desc">
                    Tell us your substrate, application method, and target surface properties. We will recommend the right additive.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Get Expert Advice</Link>
                    <Link href="/products/wetting-dispersing-agents/" className="btn-secondary">Wetting & Dispersing Agents</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
