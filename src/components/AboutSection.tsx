"use client";

import GlassCard from "./GlassCard";

const stats = [
    { value: "1996", label: "Established" },
    { value: "3", label: "Manufacturing Units" },
    { value: "13+", label: "Countries Exported" },
    { value: "10+", label: "Industries Served" },
];

export default function AboutSection() {
    return (
        <section id="about" className="content-section">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">An Eye For Excellence</h2>
                    <p className="section-subtitle">
                        Broaden Quality Scale with Harmony Additives
                    </p>
                </GlassCard>
            </div>

            {/* Stats row */}
            <div className="stats-row">
                {stats.map((stat, i) => (
                    <GlassCard key={stat.label} className="stat-card" delay={i * 0.12}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </GlassCard>
                ))}
            </div>

            {/* About content */}
            <div className="about-grid">
                <GlassCard className="about-main" delay={0.1}>
                    <h3>Company Overview</h3>
                    <p>
                        Incepted in 1996, Harmony Additives Private Limited is a Mumbai-based
                        company involved in manufacturing and exporting Additives &amp;
                        Specialty Chemicals. An ISO 9001 &amp; 14001 Certified company, we
                        cater to industries like Paint &amp; Coatings, Pulp &amp; Paper,
                        Adhesives, Inks, Starch, ETP, Textile, and many more.
                    </p>
                    <p>
                        Apart from supplying all over India, we have a market presence in
                        Ethiopia, Nepal, Bangladesh, Sri Lanka, Myanmar, Vietnam, Egypt,
                        South Africa, Ghana, Nigeria, Saudi Arabia, Mauritius, and Malaysia.
                    </p>
                </GlassCard>

                <div className="about-side">
                    <GlassCard className="about-card" delay={0.2}>
                        <h4>🎯 Our Mission</h4>
                        <p>
                            Meet customer requirements &amp; satisfaction by providing services
                            on time — every time. Manufacture high-quality products meeting
                            international standards with continuous up-gradation.
                        </p>
                    </GlassCard>

                    <GlassCard className="about-card" delay={0.3}>
                        <h4>💎 Our Values</h4>
                        <p>
                            Employees are our priority. We provide a healthy working
                            environment with superior quality raw materials, technical support,
                            management backing, and greater flexibility.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
