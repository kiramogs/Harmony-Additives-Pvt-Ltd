import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
    title: "Chemical Additives by Industry",
    description:
        "Find specialty chemical additives for your industry: paint & coating, printing inks, pulp & paper, textile, construction, agro & more. Mumbai manufacturer since 1996.",
    alternates: { canonical: "/industry/" },
    openGraph: {
        title: "Chemical Additives by Industry — Paint, Inks, Paper, Textile & More | Harmony Additives",
        description: "Specialty additives for 10 industries from Mumbai-based Harmony Additives — defoamers, emulsifiers, dispersants & more since 1996.",
        url: "https://harmonyadditive.in/industry/",
    },
};

export default function IndustryPage() {
    return (
        <InnerLayout
            heroTitle="Chemical Additives by Industry"
            heroSubtitle="B2B chemical buyers search by their process challenge, not by chemistry. Find the specialty additives for your industry — and the problems they solve."
            heroEyebrow="10 Industries · 173 Products"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries" },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/" className="btn-secondary">Browse All Products</Link>
                </>
            }
        >
            <section className="inner-section">
                <GlassCard style={{ padding: "2rem 2.5rem", marginBottom: "2rem" }}>
                    <p style={{ fontFamily: "var(--font-body-family)", fontSize: "0.97rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                        Harmony Additives manufactures specialty chemical additives for 10 industrial sectors.
                        Each industry page maps our products to the specific formulation challenges you face — foam, settling,
                        viscosity, wetting, surface defects. Use the industry pages to find the right additive for your process,
                        then request a sample or talk to our chemists for a free technical recommendation.
                    </p>
                </GlassCard>

                <div className="industry-inner-grid">
                    {industries.map((ind) => (
                        <Link key={ind.slug} href={`/industry/${ind.slug}/`} style={{ textDecoration: "none" }}>
                            <GlassCard className="industry-inner-card">
                                <span className="industry-inner-thumb">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`/images/industry/${ind.slug}.webp`} alt={`Chemical additives for ${ind.name}`} width={96} height={96} loading="lazy" decoding="async" />
                                </span>
                                <div className="industry-inner-text">
                                    <p className="industry-inner-count">{ind.count} Products</p>
                                    <h2 className="industry-inner-title">{ind.name}</h2>
                                    <p className="industry-inner-desc">{ind.shortDesc}</p>
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Not sure which industry fits your application?</h2>
                <p className="cta-banner-desc">
                    Describe your process and formulation challenge. Our chemists will identify the right product category and recommend specific grades.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/" className="btn-secondary">Browse All 173 Products</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
