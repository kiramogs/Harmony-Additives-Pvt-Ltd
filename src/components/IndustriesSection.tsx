"use client";

import GlassCard from "./GlassCard";

const industries = [
    { name: "Paint & Coating", icon: "🎨", desc: "High-performance additives for water & solvent-based paints, coatings, and varnishes." },
    { name: "Pulp & Paper", icon: "📄", desc: "Defoamers and process aids that enhance paper quality and production efficiency." },
    { name: "Textile", icon: "🧵", desc: "Specialty chemicals for dyeing, finishing, and fabric treatment processes." },
    { name: "Construction Chemicals", icon: "🏗️", desc: "Admixtures, waterproofing agents, and additives for modern construction needs." },
    { name: "Printing Inks", icon: "🖨️", desc: "Dispersing agents and rheology modifiers for offset, flexo and gravure inks." },
    { name: "ETP Additives", icon: "♻️", desc: "Waste water treatment chemicals for effluent treatment plants." },
    { name: "Agro", icon: "🌱", desc: "Emulsifiers and adjuvants for agrochemical formulations." },
    { name: "Household Products", icon: "🏠", desc: "Surfactants and additives for cleaning, personal care, and home products." },
    { name: "Lubricating Oil", icon: "⚙️", desc: "Emulsifiers and specialty additives for oil emulsions and lubricant formulations." },
    { name: "Starch & Adhesive", icon: "🔗", desc: "Processing aids for starch-based adhesives and corrugation industries." },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Industries We Serve</span>
                    <h2 className="section-title">Diverse Industry Expertise</h2>
                    <p className="section-subtitle">
                        Three decades of delivering tailor-made additive solutions across
                        10+ industrial sectors worldwide.
                    </p>
                </GlassCard>
            </div>

            <div className="industries-grid">
                {industries.map((ind, i) => (
                    <GlassCard key={ind.name} className="industry-card" delay={i * 0.08}>
                        <span className="industry-icon">{ind.icon}</span>
                        <h3 className="industry-name">{ind.name}</h3>
                        <p className="industry-desc">{ind.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
