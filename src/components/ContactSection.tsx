"use client";

import GlassCard from "./GlassCard";

export default function ContactSection() {
    return (
        <section id="contact" className="content-section content-section--last">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Reach out for product inquiries, technical support, or custom
                        formulation requests.
                    </p>
                </GlassCard>
            </div>

            <div className="contact-grid">
                <GlassCard className="contact-card" delay={0}>
                    <div className="contact-icon">📞</div>
                    <h3>Phone</h3>
                    <a href="tel:+919820780452" className="contact-link">
                        +91 98207 80452
                    </a>
                    <p className="contact-meta">Monday – Saturday</p>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.1}>
                    <div className="contact-icon">✉️</div>
                    <h3>Email</h3>
                    <a href="mailto:sales@additive.in" className="contact-link">
                        sales@additive.in
                    </a>
                    <a href="mailto:export@additive.in" className="contact-link">
                        export@additive.in
                    </a>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.2}>
                    <div className="contact-icon">📍</div>
                    <h3>Location</h3>
                    <p className="contact-address">
                        Gorai-1, Borivali (West),<br />
                        Mumbai — 400 092,<br />
                        Maharashtra, India
                    </p>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.3}>
                    <div className="contact-icon">🌍</div>
                    <h3>Global Presence</h3>
                    <p className="contact-address">
                        Exporting to 13+ countries including Ethiopia, Nepal, Bangladesh,
                        Sri Lanka, Vietnam, Egypt &amp; more.
                    </p>
                </GlassCard>
            </div>

            {/* Footer */}
            <footer className="site-footer">
                <GlassCard className="footer-card">
                    <div className="footer-inner">
                        <p className="footer-brand">
                            © {new Date().getFullYear()} Harmony Additives Private Limited
                        </p>
                        <p className="footer-tagline">
                            ISO 9001 &amp; 14001 Certified •
                            Mumbai, India
                        </p>
                    </div>
                </GlassCard>
            </footer>
        </section>
    );
}
