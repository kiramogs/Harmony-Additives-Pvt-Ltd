"use client";

import GlassCard from "./GlassCard";

const industries = [
    {
        name: "Paint & Coatings",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                <path d="M12 11v6" />
                <path d="M8 21h8" />
                <path d="M12 17h.01" />
            </svg>
        ),
        desc: "Defoamers, dispersants, and rheology modifiers for both water-based and solvent-based paint systems.",
    },
    {
        name: "Pulp & Paper",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        desc: "Process defoamers and retention aids that reduce downtime and improve sheet formation quality.",
    },
    {
        name: "Textiles",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        desc: "Softeners, wetting agents, and finishing chemicals for dyeing and fabric treatment.",
    },
    {
        name: "Construction",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="16" rx="2" />
                <path d="M12 2v4" />
                <path d="M2 10h20" />
                <path d="M7 14h.01" />
                <path d="M12 14h.01" />
                <path d="M17 14h.01" />
                <path d="M7 18h.01" />
                <path d="M12 18h.01" />
                <path d="M17 18h.01" />
            </svg>
        ),
        desc: "Concrete admixtures, waterproofing additives, and foam-control agents for ready-mix and precast.",
    },
    {
        name: "Printing Inks",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
            </svg>
        ),
        desc: "Dispersing agents and flow modifiers for offset, flexographic, and gravure ink formulations.",
    },
    {
        name: "Water Treatment",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
        desc: "Antifoams and flocculants for effluent treatment plants and industrial wastewater systems.",
    },
    {
        name: "Agrochemicals",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20h10" />
                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
            </svg>
        ),
        desc: "Emulsifiers and adjuvants for crop-protection concentrate and ready-to-use formulations.",
    },
    {
        name: "Household & Personal Care",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        desc: "Surfactants and foam-control additives for liquid detergents, cleaners, and personal-care products.",
    },
    {
        name: "Lubricants & Oils",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        desc: "Emulsifiers and corrosion inhibitors for metalworking fluids and industrial oil emulsions.",
    },
    {
        name: "Starch & Adhesives",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
        desc: "Processing aids and biocides for starch-based adhesives and corrugated board manufacturing.",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Industries</span>
                    <h2 className="section-title">Where Our Products Go</h2>
                    <p className="section-subtitle">
                        We supply additives to over 10 sectors, each with its own
                        formulation requirements. Here is where our chemicals end up.
                    </p>
                </GlassCard>
            </div>

            <div className="industries-grid">
                {industries.map((ind, i) => (
                    <GlassCard key={ind.name} className="industry-card" delay={i * 0.06}>
                        <span className="industry-icon">{ind.icon}</span>
                        <h3 className="industry-name">{ind.name}</h3>
                        <p className="industry-desc">{ind.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
