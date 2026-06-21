import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
    title: "Page Not Found (404)",
    description:
        "The page you are looking for could not be found. Browse Harmony Additives' specialty chemical additives, industries served, or contact our technical team.",
    robots: { index: false, follow: true },
};

const helpfulLinks = [
    { name: "All Products", href: "/products/", desc: "Browse 173 APEO-free specialty additives across 6 categories." },
    { name: "Industries", href: "/industry/", desc: "Find the right additives for your industry and application." },
    { name: "Defoamers & Antifoams", href: "/products/defoamers/", desc: "Our largest range — 70 foam-control grades." },
    { name: "Ask an Expert", href: "/ask-expert/", desc: "Free technical consultation and product samples." },
    { name: "Technical Blog", href: "/blog/", desc: "Formulation guides and industry insights." },
    { name: "About Us", href: "/about-us/", desc: "30 years of specialty chemistry since 1996." },
];

export default function NotFound() {
    return (
        <InnerLayout
            heroTitle="Page Not Found"
            heroSubtitle="The page you're looking for doesn't exist or may have moved. Here are some helpful places to continue."
            heroEyebrow="Error 404"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "404" },
            ]}
            heroActions={
                <>
                    <Link href="/" className="btn-primary">Back to Homepage</Link>
                    <Link href="/products/" className="btn-secondary">Browse Products</Link>
                </>
            }
        >
            <section className="inner-section">
                <h2 className="inner-section-title">Popular Pages</h2>
                <div className="category-grid">
                    {helpfulLinks.map((link) => (
                        <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                            <GlassCard className="category-card">
                                <h3 className="category-card-title">{link.name}</h3>
                                <p className="category-card-desc">{link.desc}</p>
                                <span className="category-card-link">Visit page →</span>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Can't find what you need?</h2>
                <p className="cta-banner-desc">
                    Our technical team will point you to the right product or page.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <a href="tel:+919820780452" className="btn-secondary">+91 98207 80452</a>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
