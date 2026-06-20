"use client";

import GlassCard from "./GlassCard";
import CountUp from "./CountUp";

const stats = [
    { value: "1996", label: "Founded" },
    { value: "3", label: "Manufacturing Units" },
    { value: "13+", label: "Export Countries" },
    { value: "500+", label: "Active Accounts" },
];

export default function AboutSection() {
    return (
        <section id="about" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">Built on 28 Years of Chemistry</h2>
                    <p className="section-subtitle">
                        From a single lab in Mumbai to 13 countries and counting.
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
                    <p>
                        Harmony Additives Private Limited has been manufacturing specialty
                        chemicals and industrial additives since 1996. We are ISO 9001 and
                        ISO 14001 certified, operating three production facilities in the
                        Mumbai region that supply defoamers, emulsifiers, dispersing agents,
                        and related formulations to industries including paints, paper,
                        textiles, construction, and water treatment.
                    </p>
                    <p>
                        Domestically we supply across India. Internationally, we export to
                        Ethiopia, Nepal, Bangladesh, Sri Lanka, Myanmar, Vietnam, Egypt,
                        South Africa, Ghana, Nigeria, Saudi Arabia, Mauritius, and Malaysia.
                    </p>
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
