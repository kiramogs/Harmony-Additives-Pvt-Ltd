"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";

const PRODUCT_CATEGORIES = [
    "Defoamers & Antifoams",
    "Wetting & Dispersing Agents",
    "Emulsifiers",
    "Thickeners & Anti-Settling Agents",
    "Surface Property Enhancers",
    "Specialty & Tailor-Made Additives",
    "Not sure — need guidance",
];

// Maps ProductGrid category slugs to the matching select option label
const CATEGORY_SLUG_TO_LABEL: Record<string, string> = {
    defoamers: "Defoamers & Antifoams",
    "wetting-dispersing-agents": "Wetting & Dispersing Agents",
    emulsifiers: "Emulsifiers",
    "thickeners-anti-settling-agents": "Thickeners & Anti-Settling Agents",
    "surface-property-enhancers": "Surface Property Enhancers",
    "specialty-tailor-made": "Specialty & Tailor-Made Additives",
};

const INDUSTRIES = [
    "Paint & Coatings",
    "Printing Inks",
    "Pulp & Paper",
    "Textile",
    "Construction Chemicals",
    "Agrochemicals",
    "Water Treatment / ETP",
    "Household Products",
    "Lubricants & Metalworking",
    "Starch & Adhesives",
    "Other",
];

const contactInfo = [
    { label: "Sales", email: "sales@additive.in", desc: "Product enquiries and quotations" },
    { label: "Export", email: "export@additive.in", desc: "International orders and export documentation" },
    { label: "Marketing", email: "marketing@additive.in", desc: "Partnership and co-marketing enquiries" },
    { label: "General", email: "general@additive.in", desc: "All other queries" },
];

export default function AskExpertClient() {
    const [submitted, setSubmitted] = useState(false);
    const [prefillCategory, setPrefillCategory] = useState("");
    const [prefillMessage, setPrefillMessage] = useState("");
    const [prefillRequestType, setPrefillRequestType] = useState("sample");

    // Read ?product= and ?category= from the URL (set by ProductGrid "Request Sample" links).
    // Using window.location avoids the Suspense boundary that useSearchParams requires for static export.
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const product = params.get("product");
        const category = params.get("category");
        if (category && CATEGORY_SLUG_TO_LABEL[category]) {
            setPrefillCategory(CATEGORY_SLUG_TO_LABEL[category]);
        }
        if (product) {
            setPrefillRequestType("sample");
            setPrefillMessage(
                `I would like to request a sample and technical data sheet for: ${product}.\n\nApplication / system details: `
            );
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const subject = encodeURIComponent(
            `Harmony Additives Expert Enquiry — ${data.get("product_category") ?? "General"}`
        );
        const body = encodeURIComponent(
            `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nIndustry: ${data.get("industry")}\nProduct Category: ${data.get("product_category")}\nRequest Type: ${data.get("request_type")}\n\nMessage:\n${data.get("message")}`
        );
        window.location.href = `mailto:sales@additive.in?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <InnerLayout
            heroTitle="Ask a Chemical Additive Expert"
            heroSubtitle="Free technical consultation from Harmony Additives' formulation specialists. Share your challenge — we will recommend the right additive and dispatch a sample."
            heroEyebrow="Free Consultation · Sample Available · 1-Day Response"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Ask Expert" },
            ]}
        >
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2.5rem", alignItems: "start" }}>
                {/* Form */}
                <section className="inner-section" style={{ marginBottom: 0 }}>
                    <h2 className="inner-section-title">Tell Us About Your Challenge</h2>
                    <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.93rem", color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                        Share your formulation details and we will respond with a specific product recommendation
                        within one business day (Monday–Saturday, 9 AM–6 PM IST).
                    </p>

                    {submitted ? (
                        <GlassCard style={{ padding: "2.5rem", textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>✓</div>
                            <h3 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                                Message sent successfully
                            </h3>
                            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.93rem", marginBottom: "1.5rem" }}>
                                Our technical team will respond within one business day.
                            </p>
                            <Link href="/products/" className="btn-secondary" style={{ display: "inline-block" }}>
                                Browse our products →
                            </Link>
                        </GlassCard>
                    ) : (
                        <GlassCard style={{ padding: "2rem 2.25rem" }}>
                            <form onSubmit={handleSubmit} className="expert-form" style={{ maxWidth: "none" }}>
                                <div className="form-grid">
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="name">Your Name *</label>
                                        <input className="form-input" id="name" name="name" type="text" required placeholder="Full name" />
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="company">Company *</label>
                                        <input className="form-input" id="company" name="company" type="text" required placeholder="Company name" />
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="email">Work Email *</label>
                                        <input className="form-input" id="email" name="email" type="email" required placeholder="your@company.com" />
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                                        <input className="form-input" id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="industry">Your Industry *</label>
                                        <select className="form-select" id="industry" name="industry" required defaultValue="">
                                            <option value="" disabled>Select industry</option>
                                            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="product_category">Product Category</label>
                                        <select
                                            className="form-select"
                                            id="product_category"
                                            name="product_category"
                                            value={prefillCategory}
                                            onChange={(e) => setPrefillCategory(e.target.value)}
                                        >
                                            <option value="">Select category (optional)</option>
                                            {PRODUCT_CATEGORIES.map((p) => <option key={p} value={p}>{p}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label className="form-label" htmlFor="request_type">Request Type</label>
                                        <select
                                            className="form-select"
                                            id="request_type"
                                            name="request_type"
                                            value={prefillRequestType}
                                            onChange={(e) => setPrefillRequestType(e.target.value)}
                                        >
                                            <option value="sample">Product sample</option>
                                            <option value="tds">Technical data sheet</option>
                                            <option value="recommendation">Additive recommendation</option>
                                            <option value="quote">Price quotation</option>
                                            <option value="custom">Custom formulation development</option>
                                            <option value="export">Export / international order</option>
                                        </select>
                                    </div>
                                    <div className="form-field form-field--full">
                                        <label className="form-label" htmlFor="message">Formulation Details / Message *</label>
                                        <textarea
                                            className="form-textarea"
                                            id="message"
                                            name="message"
                                            required
                                            value={prefillMessage}
                                            onChange={(e) => setPrefillMessage(e.target.value)}
                                            placeholder="Describe your formulation, the problem you are trying to solve, and any relevant system details (resin type, pH, process conditions, substrate, etc.)"
                                        />
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer", fontSize: "0.82rem" }}>
                                        Send to Our Team →
                                    </button>
                                </div>
                            </form>
                        </GlassCard>
                    )}
                </section>

                {/* Sidebar */}
                <aside style={{ position: "sticky", top: "6rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <GlassCard style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                                Corporate Office
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                                Gorai-1, Borivali (West)<br />
                                Mumbai 400 092<br />
                                Maharashtra, India
                            </p>
                            <a href="tel:+919820780452" style={{ display: "block", fontWeight: 700, color: "var(--color-accent)", fontSize: "1rem", textDecoration: "none", marginBottom: "0.25rem" }}>
                                +91 98207 80452
                            </a>
                            <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                                Mon–Sat, 9 AM–6 PM IST
                            </p>
                        </GlassCard>

                        <GlassCard style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.85rem" }}>
                                Email by Department
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {contactInfo.map((c) => (
                                    <div key={c.email}>
                                        <a href={`mailto:${c.email}`} style={{ fontWeight: 600, color: "var(--color-accent)", fontSize: "0.85rem", textDecoration: "none" }}>
                                            {c.email}
                                        </a>
                                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.1rem" }}>{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                                What Happens Next
                            </h3>
                            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                                {[
                                    "Our chemist reviews your formulation details",
                                    "We identify the 1–3 most suitable grades",
                                    "You receive a recommendation within 1 business day",
                                    "Samples dispatched in 5–7 days (standard) or 2–4 weeks (custom)",
                                ].map((step, i) => (
                                    <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.83rem", color: "var(--color-text-secondary)", alignItems: "flex-start" }}>
                                        <span style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.72rem", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.05em" }}>
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                            <a
                                href="https://wa.me/919820780452?text=Hello%2C%20I%20would%20like%20a%20technical%20consultation%20about%20Harmony%20Additives%20products."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "inline-block", marginTop: "1.25rem", padding: "0.7rem 1.5rem", background: "#25D366", color: "white", borderRadius: "100px", fontFamily: "var(--font-body-family)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em" }}
                            >
                                Chat on WhatsApp
                            </a>
                        </GlassCard>
                    </div>
                </aside>
            </div>
        </InnerLayout>
    );
}
