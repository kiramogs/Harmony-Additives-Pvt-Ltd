import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import {
    products,
    getProductBySlug,
    getRelatedProducts,
    CATEGORY_META,
} from "@/data/products";

interface Props {
    params: Promise<{ slug: string }>;
}

const SYSTEM_LABEL: Record<string, string> = {
    aqueous: "Aqueous (water-based) systems",
    "non-aqueous": "Non-aqueous (solvent-based) systems",
    both: "Aqueous & non-aqueous systems",
    powder: "Powder / dry-blend systems",
};

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

function industryList(p: ReturnType<typeof getProductBySlug>) {
    return p!.industries.map((i) => i.label).join(", ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const p = getProductBySlug(slug);
    if (!p) return {};
    const inds = industryList(p);
    const img = `https://harmonyadditive.in/images/category/${p.categorySlug}.webp`;
    const description =
        `${p.id} (${p.name}) — ${p.type.toLowerCase()} for ${inds || "industrial formulations"}. ` +
        `APEO-free specialty additive from Harmony Additives, Mumbai. Request a sample or technical data sheet.`;
    return {
        title: `${p.type} — ${p.id}`,
        description: description.slice(0, 158),
        alternates: { canonical: `/product/${p.slug}/` },
        openGraph: {
            title: `${p.name} — ${p.type} | Harmony Additives`,
            description: description.slice(0, 200),
            url: `https://harmonyadditive.in/product/${p.slug}/`,
            images: [{ url: img, alt: `${p.type} by Harmony Additives` }],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const p = getProductBySlug(slug);
    if (!p) notFound();

    const meta = CATEGORY_META[p.categorySlug];
    const inds = industryList(p);
    const systemLabel = SYSTEM_LABEL[p.system];
    const related = getRelatedProducts(p, 6);
    const imgPath = `/images/category/${p.categorySlug}.webp`;

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: p.name,
        sku: p.id,
        mpn: p.id,
        category: p.category,
        description: `${p.type} for ${inds}. APEO-free specialty chemical additive manufactured in India by Harmony Additives.`,
        brand: { "@type": "Brand", name: "Harmony Additives" },
        manufacturer: { "@id": "https://harmonyadditive.in/#organization" },
        image: `https://harmonyadditive.in${imgPath}`,
        url: `https://harmonyadditive.in/product/${p.slug}/`,
        additionalProperty: [
            { "@type": "PropertyValue", name: "Chemistry / Type", value: p.type },
            { "@type": "PropertyValue", name: "System suitability", value: systemLabel },
            { "@type": "PropertyValue", name: "APEO-free", value: "Yes" },
            { "@type": "PropertyValue", name: "Country of origin", value: "India" },
        ],
    };

    const faqs = [
        {
            q: `Is ${p.id} APEO-free?`,
            a: `Yes. ${p.id} (${p.name}) is APEO-free — manufactured without alkylphenol ethoxylates, in line with EU REACH and global environmental standards. Every Harmony Additives product is APEO-free.`,
        },
        {
            q: `Which systems and industries is ${p.id} suitable for?`,
            a: `${p.id} is a ${p.type.toLowerCase()} suitable for ${systemLabel.toLowerCase()}. It is used in: ${inds || "a range of industrial formulations"}. Our technical team can confirm suitability for your specific formulation.`,
        },
        {
            q: `How do I get a sample or technical data sheet (TDS) for ${p.id}?`,
            a: `Request a free sample or the TDS via our Ask an Expert form, or email sales@additive.in quoting product code ${p.id}. Standard-grade samples typically ship within 5–7 working days.`,
        },
    ];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <InnerLayout
            heroTitle={`${p.id} — ${p.type}`}
            heroSubtitle={`${p.type} for ${systemLabel.toLowerCase()}. ${inds ? `Used across ${inds}. ` : ""}APEO-free, manufactured in India by Harmony Additives.`}
            heroEyebrow={`${p.category} · ${SYSTEM_LABEL[p.system].replace(/ \(.*\)/, "").replace(/ systems?$/, "")} · APEO-Free`}
            heroImage={{ src: imgPath, alt: `${p.type} — ${p.name} by Harmony Additives` }}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/" },
                { label: meta?.label ?? p.category, href: `/products/${p.categorySlug}/` },
                { label: p.id },
            ]}
            heroActions={
                <>
                    <Link
                        href="/ask-expert/"
                        className="btn-primary"
                        // Prefill handled by Ask Expert via sessionStorage on click is not available in a server component;
                        // the form also accepts the product name typed in. Link carries intent.
                    >
                        Request Sample
                    </Link>
                    <a
                        href={`mailto:sales@additive.in?subject=${encodeURIComponent(`TDS Request — ${p.name}`)}&body=${encodeURIComponent(`Please send the Technical Data Sheet for:\nProduct: ${p.name}\nCode: ${p.id}\nType: ${p.type}\n\nThank you.`)}`}
                        className="btn-secondary"
                    >
                        Download TDS
                    </a>
                </>
            }
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Overview */}
            <section className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body">
                        <h2 className="inner-section-title">Product Overview</h2>
                        <p>
                            <strong>{p.name}</strong> (product code <strong>{p.id}</strong>) is a{" "}
                            <strong>{p.type.toLowerCase()}</strong> from Harmony Additives&apos;{" "}
                            <Link href={`/products/${p.categorySlug}/`}>{p.category.toLowerCase()}</Link> range.
                            It is formulated for {systemLabel.toLowerCase()} and is supplied to manufacturers
                            {inds ? ` working in ${inds}` : " across multiple industries"}.
                        </p>
                        <p>
                            Like every product in our catalogue, {p.id} is <strong>APEO-free</strong> — manufactured
                            without alkylphenol ethoxylates — and produced under our ISO 9001 and ISO 14001 certified
                            quality and environmental systems in India. Samples and a technical data sheet (TDS) are
                            available on request.
                        </p>
                    </div>
                </GlassCard>
            </section>

            {/* Technical snapshot */}
            <section className="inner-section">
                <h2 className="inner-section-title">Technical Snapshot</h2>
                <GlassCard style={{ padding: "1.5rem 2rem" }}>
                    <table className="spec-table">
                        <tbody>
                            <tr><th scope="row">Product code</th><td>{p.id}</td></tr>
                            <tr><th scope="row">Full name</th><td>{p.name}</td></tr>
                            <tr><th scope="row">Category</th><td><Link href={`/products/${p.categorySlug}/`}>{p.category}</Link></td></tr>
                            <tr><th scope="row">Chemistry / type</th><td>{p.type}</td></tr>
                            <tr><th scope="row">System suitability</th><td>{systemLabel}</td></tr>
                            <tr><th scope="row">APEO-free</th><td>Yes</td></tr>
                            <tr><th scope="row">Country of origin</th><td>India (Mumbai · Tarapur · Umbergaon)</td></tr>
                            <tr><th scope="row">Availability</th><td>In production · sample &amp; bulk quantities on request</td></tr>
                        </tbody>
                    </table>
                </GlassCard>
            </section>

            {/* Applications / industries */}
            {p.industries.length > 0 && (
                <section className="inner-section">
                    <h2 className="inner-section-title">Industries &amp; Applications</h2>
                    <GlassCard style={{ padding: "2rem 2.5rem" }}>
                        <div className="inner-section-body">
                            <p>{p.id} is used by formulators in the following industries:</p>
                            <ul>
                                {p.industries.map((ind) => (
                                    <li key={ind.slug}>
                                        <Link href={`/industry/${ind.slug}/`}>{ind.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </GlassCard>
                </section>
            )}

            {/* FAQ */}
            <section className="inner-section">
                <h2 className="inner-section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((f) => (
                        <GlassCard key={f.q} className="faq-item">
                            <h3 className="faq-question">{f.q}</h3>
                            <p className="faq-answer">{f.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Related products */}
            {related.length > 0 && (
                <section className="inner-section">
                    <h2 className="inner-section-title">Related {meta?.label ?? "Products"}</h2>
                    <div className="category-grid">
                        {related.map((r) => (
                            <Link key={r.slug} href={`/product/${r.slug}/`} style={{ textDecoration: "none" }}>
                                <GlassCard className="category-card">
                                    <span className="category-card-count">{r.id}</span>
                                    <h3 className="category-card-title" style={{ fontSize: "1.05rem" }}>{r.type}</h3>
                                    <p className="category-card-desc">{r.name}</p>
                                    <span className="category-card-link">View product →</span>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Request {p.id}</h2>
                <p className="cta-banner-desc">
                    Get a free sample, the technical data sheet, or a formulation recommendation from our chemists.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Request Sample / TDS</Link>
                    <Link href={`/products/${p.categorySlug}/`} className="btn-secondary">Browse all {meta?.label ?? "products"}</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
