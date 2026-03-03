"use client";

import GlassCard from "./GlassCard";

const products = [
    {
        name: "Defoamers",
        desc: "Advanced antifoam solutions for water-based and solvent-based systems. Eliminate foam efficiently across industrial processes.",
        gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.05))",
    },
    {
        name: "Emulsifiers",
        desc: "Oil-in-water and water-in-oil emulsifiers designed for stable, high-performance formulations in paints, agro, and lubricants.",
        gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(139,92,246,0.05))",
    },
    {
        name: "Wetting & Dispersing Agents",
        desc: "Enhance pigment wetting and stabilize dispersions for uniform color, gloss, and improved product quality.",
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.05))",
    },
    {
        name: "Thickeners & Anti‑Settling",
        desc: "Rheology modifiers that prevent settling, sagging, and improve the storage stability of your formulations.",
        gradient: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(22,163,74,0.05))",
    },
    {
        name: "Surface Property Enhancers",
        desc: "Improve leveling, slip, scratch resistance, and surface appearance in coatings and finishing applications.",
        gradient: "linear-gradient(135deg, rgba(251,146,60,0.15), rgba(234,88,12,0.05))",
    },
    {
        name: "Specialty & Tailor‑Made",
        desc: "Custom-blended additive solutions engineered to meet your unique formulation challenges and specifications.",
        gradient: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(13,148,136,0.05))",
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Our Products</span>
                    <h2 className="section-title">Premium Additive Solutions</h2>
                    <p className="section-subtitle">
                        Proprietary blends for both aqueous and solvent-based systems —
                        maximizing quality while minimizing costs.
                    </p>
                </GlassCard>
            </div>

            <div className="products-grid">
                {products.map((product, i) => (
                    <GlassCard key={product.name} className="product-card" delay={i * 0.1}>
                        <div
                            className="product-card-accent"
                            style={{ background: product.gradient }}
                        />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-desc">{product.desc}</p>
                        <div className="product-link">
                            Learn more <span>→</span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
