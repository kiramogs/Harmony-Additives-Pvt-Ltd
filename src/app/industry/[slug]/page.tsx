import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import ProductGrid from "@/components/ProductGrid";
import { industries, getIndustry } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";

const INDUSTRY_ACCENT: Record<string, string> = {
    "paint-coatings": "#0369A1",
    "printing-inks": "#7C3AED",
    "pulp-paper": "#0D9488",
    textile: "#DB2777",
    construction: "#EA580C",
    agrochemicals: "#16A34A",
    "water-treatment": "#0EA5E9",
    "household-products": "#7C3AED",
    "lubricants-oils": "#EA580C",
    "starch-adhesives": "#16A34A",
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) return {};
    return {
        title: industry.metaTitle,
        description: industry.metaDesc,
        alternates: { canonical: `/industry/${industry.slug}/` },
        openGraph: {
            title: `${industry.metaTitle} | Harmony Additives`,
            description: industry.metaDesc,
            url: `https://harmonyadditive.in/industry/${industry.slug}/`,
            images: [{ url: `https://harmonyadditive.in/images/industry/${industry.slug}.webp`, alt: `Chemical additives for ${industry.name}` }],
        },
    };
}

export default async function IndustrySubPage({ params }: Props) {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) notFound();

    const industryProducts = getProductsByIndustry(slug);
    const accent = INDUSTRY_ACCENT[slug] ?? "#0369A1";

    const faqSchema = industry.faq.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        }
        : null;

    return (
        <InnerLayout
            heroTitle={`Chemical Additives for ${industry.name}`}
            heroSubtitle={industry.heroSubtitle}
            heroEyebrow={industry.eyebrow}
            heroImage={{ src: `/images/industry/${slug}.webp`, alt: `Specialty chemical additives for the ${industry.name.toLowerCase()} industry` }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industry/" },
                { label: industry.name },
            ]}
            heroActions={
                <>
                    <Link href="/ask-expert/" className="btn-primary">Get Expert Advice</Link>
                    <Link href="/products/" className="btn-secondary">Browse All Products</Link>
                </>
            }
        >
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Full description */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">
                            Specialty Additives for {industry.name}
                        </h2>
                        {industry.fullDesc.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </GlassCard>
            </section>

            {/* Formulation challenges */}
            <section className="inner-section">
                <h2 className="inner-section-title">Common Formulation Challenges</h2>
                <GlassCard style={{ padding: "2rem 2.5rem" }}>
                    <div className="inner-section-body">
                        <ul>
                            {industry.challenges.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                </GlassCard>
            </section>

            {/* Relevant products */}
            <section className="inner-section">
                <h2 className="inner-section-title">Relevant Product Categories</h2>
                <div className="category-grid">
                    {industry.products.map((prod) => (
                        <Link key={prod.slug} href={`/products/${prod.slug}/`} style={{ textDecoration: "none" }}>
                            <GlassCard className="category-card">
                                <h3 className="category-card-title">{prod.name}</h3>
                                <span className="category-card-link">
                                    View products <span aria-hidden="true">→</span>
                                </span>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Products serving this industry — real data cross-link */}
            {industryProducts.length > 0 && (
                <section className="inner-section">
                    <h2 className="inner-section-title">
                        {industryProducts.length} Additives for {industry.name}
                    </h2>
                    <p className="pg-section-note">
                        These Harmony Additives grades are formulated for or regularly used in {industry.name.toLowerCase()}
                        {" "}applications. Search by product code, or request a sample or technical data sheet for any grade.
                    </p>
                    <ProductGrid
                        products={industryProducts}
                        accentColor={accent}
                        showSearch
                        showIndustryFilter={false}
                    />
                </section>
            )}

            {/* FAQ */}
            {industry.faq.length > 0 && (
                <section className="inner-section">
                    <h2 className="inner-section-title">
                        Frequently Asked Questions — {industry.name} Additives
                    </h2>
                    <div className="faq-list">
                        {industry.faq.map((faq) => (
                            <GlassCard key={faq.q} className="faq-item">
                                <h3 className="faq-question">{faq.q}</h3>
                                <p className="faq-answer">{faq.a}</p>
                            </GlassCard>
                        ))}
                    </div>
                </section>
            )}

            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">
                    Find the right additive for your {industry.name.toLowerCase()} formulation
                </h2>
                <p className="cta-banner-desc">
                    Share your process details and our chemists will recommend the specific grades that solve your challenge.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Request Free Sample</Link>
                    <a href="mailto:sales@additive.in" className="btn-secondary">Email Sales Team</a>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
