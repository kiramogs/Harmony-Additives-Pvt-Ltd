"use client";

import GlassCard from "./GlassCard";

export default function ContactSection() {
    return (
        <section id="contact" className="content-section content-section--last">
            <div className="section-header">
                <GlassCard className="section-title-card">
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Whether you need a quote, a technical data sheet, or help with
                        a formulation problem, we are here.
                    </p>
                </GlassCard>
            </div>

            <div className="contact-grid">
                <GlassCard className="contact-card" delay={0}>
                    <div className="contact-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </div>
                    <h3>Phone</h3>
                    <a href="tel:+919820780452" className="contact-link">
                        +91 98207 80452
                    </a>
                    <a
                        href="https://wa.me/919820780452?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20specialty%20chemical%20additives."
                        className="contact-link contact-link--whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chat on WhatsApp
                    </a>
                    <p className="contact-meta">Monday to Saturday, 9 AM to 6 PM IST</p>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.1}>
                    <div className="contact-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <h3>Email</h3>
                    <a href="mailto:sales@additive.in" className="contact-link">
                        sales@additive.in
                    </a>
                    <a href="mailto:export@additive.in" className="contact-link">
                        export@additive.in
                    </a>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.2}>
                    <div className="contact-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <h3>Office</h3>
                    <p className="contact-address">
                        Gorai-1, Borivali (West),<br />
                        Mumbai 400 092,<br />
                        Maharashtra, India
                    </p>
                </GlassCard>

                <GlassCard className="contact-card" delay={0.3}>
                    <div className="contact-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <h3>Exports</h3>
                    <p className="contact-address">
                        We currently export to Ethiopia, Nepal, Bangladesh, Sri Lanka,
                        Myanmar, Vietnam, Egypt, South Africa, Ghana, Nigeria,
                        Saudi Arabia, Mauritius, and Malaysia.
                    </p>
                </GlassCard>
            </div>

            {/* Footer */}
            <footer className="site-footer">
                <GlassCard className="footer-card">
                    <div className="footer-inner">
                        <div className="footer-top">
                            <p className="footer-brand">
                                Harmony Additives Private Limited
                            </p>
                            <div className="footer-badges">
                                <span className="footer-badge">ISO 9001</span>
                                <span className="footer-badge">ISO 14001</span>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p className="footer-copyright">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>
                            <p className="footer-location">Mumbai, India</p>
                        </div>
                    </div>
                </GlassCard>
            </footer>
        </section>
    );
}
