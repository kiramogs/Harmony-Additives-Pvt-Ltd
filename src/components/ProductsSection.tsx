"use client";

import GlassCard from "./GlassCard";

const products = [
    {
        name: "Defoamers",
        desc: "Silicone, mineral-oil, and polyether-based antifoams. We match the defoamer chemistry to your specific system, whether it is a latex paint or a paper mill wet-end.",
        gradient: "linear-gradient(135deg, rgba(3,105,161,0.12), rgba(14,165,233,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
    },
    {
        name: "Emulsifiers",
        desc: "Oil-in-water and water-in-oil emulsifiers for stable formulations in paints, agrochemicals, and metalworking fluids. Available in both anionic and non-ionic variants.",
        gradient: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(139,92,246,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
            </svg>
        ),
    },
    {
        name: "Wetting & Dispersing Agents",
        desc: "Reduce pigment grinding time and stabilize dispersions for uniform color development. Grades available for both organic and inorganic pigment systems.",
        gradient: "linear-gradient(135deg, rgba(219,39,119,0.12), rgba(236,72,153,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        name: "Thickeners & Anti-settling Agents",
        desc: "Rheology modifiers that prevent pigment settling and sagging in storage. Cellulosic, acrylic, and polyurethane-based options depending on your system.",
        gradient: "linear-gradient(135deg, rgba(22,163,74,0.12), rgba(34,197,94,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
            </svg>
        ),
    },
    {
        name: "Surface Enhancers",
        desc: "Leveling, slip, and scratch-resistance additives for coatings. Silicone and wax-based products that improve the final finish without affecting recoatability.",
        gradient: "linear-gradient(135deg, rgba(234,88,12,0.12), rgba(251,146,60,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        name: "Custom Formulations",
        desc: "If your process has a specific challenge that off-the-shelf products cannot solve, our lab develops blends to your specifications. Typical turnaround: 2 to 4 weeks for samples.",
        gradient: "linear-gradient(135deg, rgba(13,148,136,0.12), rgba(20,184,166,0.04))",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Products</span>
                    <h2 className="section-title">Our Specialty Chemical Additives</h2>
                    <p className="section-subtitle">
                        Additive blends for water-based and solvent-based systems.
                        Most products ship within 7 working days.
                    </p>
                </GlassCard>
            </div>

            <div className="products-grid">
                {products.map((product, i) => (
                    <GlassCard key={product.name} className="product-card" delay={i * 0.08}>
                        <div
                            className="product-card-accent"
                            style={{ background: product.gradient }}
                        />
                        <div className="product-icon">{product.icon}</div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-desc">{product.desc}</p>
                        <div className="product-link">
                            Request TDS <span className="product-link-arrow">→</span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
