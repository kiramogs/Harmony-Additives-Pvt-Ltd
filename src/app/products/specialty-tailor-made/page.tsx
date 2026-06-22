import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Specialty & Tailor-Made Additives",
    description:
        "22 specialty additives including water repellents, optical brighteners, anti-skinning agents & ETP flocculants. Custom development in 2–4 weeks. APEO-free. Mumbai since 1996.",
    alternates: { canonical: "/products/specialty-tailor-made/" },
    openGraph: {
        title: "Specialty & Tailor-Made Chemical Additives | Harmony Additives",
        description: "Custom chemical additive development and 22 specialty products. 2–4 week sample turnaround from ISO-certified Mumbai lab. APEO-free.",
        url: "https://harmonyadditive.in/products/specialty-tailor-made/",
        images: [{ url: "https://harmonyadditive.in/images/category/specialty-tailor-made.webp", alt: "Specialty & tailor-made additives by Harmony Additives" }],
    },
};

const specialtyProducts = getProductsByCategory("specialty-tailor-made");

export default function SpecialtyTailorMade() {
    return (
        <InnerLayout
            heroTitle="Specialty & Tailor-Made Additives"
            heroSubtitle="22 specialty products — water repellents, optical brighteners, anti-skinning agents, ETP flocculants, flow polymers, and more. Plus custom development to your specification in 2–4 weeks."
            heroEyebrow="22 Products · Custom Development · NDA Available · APEO-Free"
            heroImage={{ src: "/images/category/specialty-tailor-made.webp", alt: "Specialty and tailor-made chemical additives by Harmony Additives" }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: "Specialty & Tailor-Made" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Start Custom Project</Link>
                    <a href="mailto:sales@additive.in?subject=Custom Additive Development Enquiry" className="btn-secondary">Email Our Lab</a>
                </>
            }
        >
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Specialty Products & Custom Development</h2>
                        <p>
                            Standard additive grades solve most problems. When your resin is unusual, your process runs at
                            extreme conditions, or your specification exceeds what any catalogue product delivers — our
                            specialty range and custom development capability fills the gap.
                        </p>
                        <p>
                            Our <strong>22 specialty products</strong> cover application areas that don't fit neatly
                            into the other categories: water repellents for masonry and textiles, anti-skinning agents
                            for alkyd paints, effluent treatment chemicals, optical brighteners, decorative effect
                            additives, and flow polymers for economy coatings. All products are <strong>APEO-free</strong>.
                        </p>

                        <h3>Custom Development Process</h3>
                        <ul>
                            <li><strong>Brief →</strong> Share your formulation challenge and performance targets via Ask Expert</li>
                            <li><strong>Feasibility →</strong> Technical review and development proposal within 3 business days</li>
                            <li><strong>Development →</strong> Lab synthesis and testing at our Tarapur facility</li>
                            <li><strong>Sample →</strong> First samples dispatched within 2–4 weeks of project confirmation</li>
                            <li><strong>Iteration →</strong> We adjust until the product meets specification</li>
                            <li><strong>Scale-Up →</strong> Seamless transition to production batch with full QC documentation</li>
                        </ul>

                        <p>
                            We operate under NDA for proprietary development projects and do not share formulation details
                            between clients. Our team has experience with MNCs, SMEs, and research institutions.
                        </p>
                    </div>
                </GlassCard>
            </section>

            <section className="inner-section">
                <div className="inner-stats-row">
                    {[
                        { value: "2–4w", label: "Sample Turnaround" },
                        { value: "30yr", label: "Formulation Experience" },
                        { value: "NDA", label: "IP Protection Available" },
                        { value: "3", label: "Production Facilities" },
                    ].map((s) => (
                        <GlassCard key={s.label} className="inner-stat-card">
                            <span className="inner-stat-value">{s.value}</span>
                            <span className="inner-stat-label">{s.label}</span>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <section className="inner-section">
                <h2 className="inner-section-title">Specialty Product Range</h2>
                <p className="pg-section-note">
                    All <strong>22 specialty &amp; tailor-made grades</strong>, by real product code — plus full
                    custom development. Search by code or function, or filter by your industry, then request a
                    sample or start a tailor-made project with our lab.
                </p>
                <ProductGrid
                    products={specialtyProducts}
                    accentColor="#0D9488"
                    showSearch
                    showIndustryFilter
                />
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Tell us your challenge</h2>
                <p className="cta-banner-desc">
                    Describe your formulation problem and performance targets. We will return a development proposal within 3 business days.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Start Custom Project</Link>
                    <a href="mailto:sales@additive.in" className="btn-secondary">sales@additive.in</a>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
