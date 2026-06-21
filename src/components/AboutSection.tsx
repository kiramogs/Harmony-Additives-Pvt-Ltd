"use client";

import GlassCard from "./GlassCard";
import CountUp from "./CountUp";

const stats = [
    { value: "1996", label: "Founded" },
    { value: "173", label: "Products" },
    { value: "13+", label: "Export Countries" },
    { value: "500+", label: "Active Accounts" },
];

export default function AboutSection() {
    return (
        <section id="about" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">Built on 30 Years of Chemistry</h2>
                    <p className="section-subtitle">
                        From a single lab in Mumbai to 173 products and 13 countries.
                    </p>
                </GlassCard>
            </div>

            {/* Stats row */}
            <div className="stats-row">
                {stats.map((stat, i) => (
                    <GlassCard key={stat.label} className="stat-card" delay={i * 0.1}>
                        <CountUp target={stat.value} className="stat-value" />
                        <span className="stat-label">{stat.label}</span>
                    </GlassCard>
                ))}
            </div>

            {/* About content */}
            <div className="about-grid">
                <GlassCard className="about-main" delay={0.1}>
                    <h3>Who We Are</h3>
                    <p className="about-intro-para">
                        <strong>Harmony Additives Private Limited</strong> has been manufacturing
                        specialty chemicals and industrial additives since 1996. We are
                        ISO 9001 and ISO 14001 certified, operating three production facilities —
                        two in Tarapur, Maharashtra and one in Umbergaon, Gujarat — that supply
                        <strong> 173 products</strong> across six categories: defoamers, emulsifiers,
                        wetting &amp; dispersing agents, thickeners, surface property enhancers,
                        and tailor-made formulations.
                    </p>
                    <p className="about-intro-para">
                        We serve paints &amp; coatings, printing inks, pulp &amp; paper, textiles,
                        construction, agrochemicals, and effluent treatment across India, and export
                        to 13 countries including Ethiopia, Nepal, Bangladesh, Vietnam, Egypt,
                        South Africa, Nigeria, Saudi Arabia, and Malaysia.
                    </p>
                    <div className="cert-row">
                        <span className="apeo-badge">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            APEO-Free Products
                        </span>
                        <span className="cert-badge">ISO 9001</span>
                        <span className="cert-badge">ISO 14001</span>
                    </div>
                </GlassCard>

                <div className="about-side">
                    <GlassCard className="about-card" delay={0.2}>
                        <div className="about-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h4>Reliability</h4>
                        <p>
                            We ship on schedule. Our repeat-order rate across 500+ active
                            accounts sits above 90%, which we attribute to consistent batch
                            quality and honest lead times.
                        </p>
                    </GlassCard>

                    <GlassCard className="about-card" delay={0.3}>
                        <div className="about-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h4>Our Team</h4>
                        <p>
                            Our formulators have an average tenure of 11 years. We invest in
                            their lab equipment, safety standards, and technical training
                            because experienced chemists make better additives.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
