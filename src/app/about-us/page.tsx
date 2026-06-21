import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
    title: "About Us — Specialty Chemicals Since 1996",
    description:
        "Mumbai-based manufacturer & exporter of specialty chemicals. 30 years serving paint, ink, paper, textile & construction industries globally. ISO 9001 & 14001 certified.",
    alternates: { canonical: "/about-us/" },
    openGraph: {
        title: "About Harmony Additives — Specialty Chemical Manufacturer Since 1996",
        description: "30 years manufacturing specialty chemical additives in Mumbai. ISO 9001 & 14001 certified. Exporting to 13 countries.",
        url: "https://harmonyadditive.in/about-us/",
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
        "@id": "https://harmonyadditive.in/#organization",
    },
};

const stats = [
    { value: "1996", label: "Founded" },
    { value: "28+", label: "Years in Specialty Chemicals" },
    { value: "173", label: "Products in Catalogue" },
    { value: "3", label: "Manufacturing Units" },
    { value: "500+", label: "Active Accounts" },
    { value: "13", label: "Export Countries" },
    { value: "90%+", label: "Repeat Order Rate" },
    { value: "10+", label: "Industries Served" },
];

const exportCountries = [
    "Ethiopia", "Nepal", "Bangladesh", "Sri Lanka", "Myanmar",
    "Vietnam", "Egypt", "South Africa", "Ghana", "Nigeria",
    "Saudi Arabia", "Mauritius", "Malaysia",
];

const certifications = [
    { name: "ISO 9001", desc: "Quality Management System — consistently meeting customer and regulatory requirements" },
    { name: "ISO 14001", desc: "Environmental Management System — minimizing our environmental impact across all three production facilities" },
];

export default function AboutPage() {
    return (
        <InnerLayout
            heroTitle="About Harmony Additives"
            heroSubtitle="From a single lab in Mumbai in 1996 to three production facilities, 500+ active accounts, and 13 export countries. Built on chemistry and consistency."
            heroEyebrow="Est. 1996 · ISO 9001 & 14001 · Mumbai, India"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "About Us" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Request a Sample</Link>
                    <Link href="/products/" className="btn-secondary">Our Products</Link>
                </>
            }
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* Company story */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Our Story</h2>
                        <p>
                            Harmony Additives Private Limited was established in 1996 in Mumbai, Maharashtra with a
                            singular focus: manufacturing specialty chemical additives that solve real formulation problems
                            for industrial manufacturers. From the beginning, we built the company on technical depth rather
                            than catalogue breadth — starting with defoamers and dispersants for the paint industry and
                            expanding methodically into adjacent industries and chemistries as our customers' needs evolved.
                        </p>
                        <p>
                            Three decades later, Harmony Additives operates three production facilities — two in
                            Tarapur MIDC, Maharashtra and one in Umbergaon, Gujarat — with a total product catalogue of
                            173 specialty additives across six functional categories. We are ISO 9001 and ISO 14001
                            certified, serve 500+ active accounts across India, and export to 13 countries in South Asia,
                            Southeast Asia, the Middle East, and Africa.
                        </p>
                        <p>
                            Our head office and corporate registration is at Gorai-1, Borivali (West), Mumbai 400 092.
                            The company is recognized as a <strong>specialty chemical additive manufacturer and exporter</strong>
                            by our customers in paint &amp; coatings, printing inks, pulp &amp; paper, textile,
                            construction chemicals, agrochemicals, and water treatment.
                        </p>

                        <h3>What Sets Us Apart</h3>
                        <p>
                            Our repeat-order rate sits above 90% across 500+ accounts. We attribute this to three things:
                            consistent batch quality (our QC lab tests every production batch against specification before
                            release), honest lead times (we do not promise what we cannot deliver), and technical support
                            (our formulators have an average tenure of 11 years and provide application guidance, not just
                            product sales).
                        </p>
                        <p>
                            When a customer has a formulation problem that our standard catalogue cannot solve, we develop
                            a custom blend. Our in-house R&amp;D team has delivered tailor-made additive solutions for
                            clients across India and internationally, typically within 2–4 weeks from brief to sample.
                        </p>
                    </div>
                </GlassCard>
            </section>

            {/* Stats */}
            <section className="inner-section">
                <h2 className="inner-section-title">By the Numbers</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
                    {stats.map((s) => (
                        <GlassCard key={s.label} className="inner-stat-card">
                            <span className="inner-stat-value">{s.value}</span>
                            <span className="inner-stat-label">{s.label}</span>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Manufacturing */}
            <section className="inner-section">
                <h2 className="inner-section-title">Manufacturing Facilities</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
                    {[
                        {
                            name: "Tarapur Unit I",
                            loc: "Tarapur MIDC, Boisar, Maharashtra",
                            note: "Primary defoamer and dispersant production",
                        },
                        {
                            name: "Tarapur Unit II",
                            loc: "Tarapur MIDC, Boisar, Maharashtra",
                            note: "Emulsifier and specialty additive production",
                        },
                        {
                            name: "Umbergaon Unit",
                            loc: "Umbergaon, Valsad, Gujarat",
                            note: "Thickener and surface property enhancer production",
                        },
                    ].map((unit) => (
                        <GlassCard key={unit.name} style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display-family)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                                {unit.name}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
                                {unit.loc}
                            </p>
                            <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}>{unit.note}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="inner-section">
                <h2 className="inner-section-title">Certifications</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
                    {certifications.map((cert) => (
                        <GlassCard key={cert.name} style={{ padding: "2rem" }}>
                            <span style={{
                                display: "inline-block",
                                fontFamily: "var(--font-body-family)",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                color: "var(--color-accent)",
                                background: "var(--color-accent-soft)",
                                padding: "0.3rem 0.75rem",
                                borderRadius: "6px",
                                marginBottom: "0.75rem",
                            }}>
                                {cert.name}
                            </span>
                            <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                                {cert.desc}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Export markets */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <h2 className="inner-section-title">Export Markets</h2>
                    <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.97rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                        We export specialty chemical additives to 13 countries across South Asia, Southeast Asia,
                        the Middle East, and Africa. Export enquiries are handled by our dedicated export team:
                        {" "}<a href="mailto:export@additive.in" style={{ color: "var(--color-accent)" }}>export@additive.in</a>
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        {exportCountries.map((country) => (
                            <span key={country} style={{
                                fontFamily: "var(--font-body-family)",
                                fontSize: "0.82rem",
                                fontWeight: 500,
                                color: "var(--color-text-secondary)",
                                background: "rgba(3,105,161,0.06)",
                                border: "1px solid rgba(3,105,161,0.12)",
                                padding: "0.3rem 0.9rem",
                                borderRadius: "100px",
                            }}>
                                {country}
                            </span>
                        ))}
                    </div>
                </GlassCard>
            </section>

            {/* Industry participation */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Industry Participation</h2>
                        <p>
                            Harmony Additives is an active participant in the Indian specialty chemical industry.
                            We exhibited at <strong>Paint India 2024</strong> and <strong>AIPIMA 2024</strong>,
                            and will be exhibiting at <strong>Paint India 2026</strong>. We maintain relationships
                            with industry associations including the Indian Paint Manufacturers Association (IPMA)
                            and the Indian Chemical Council (ICC).
                        </p>
                        <p>
                            Our technical team contributes articles and presentations to industry journals and conferences,
                            covering topics in defoamer selection, dispersant chemistry, and specialty additive formulation.
                        </p>
                    </div>
                </GlassCard>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Work with us</h2>
                <p className="cta-banner-desc">
                    Whether you need a standard additive or a custom formulation, our team is ready to help.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <a href="tel:+919820780452" className="btn-secondary">+91 98207 80452</a>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
