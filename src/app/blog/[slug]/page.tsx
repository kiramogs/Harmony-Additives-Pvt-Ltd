import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";
import GlassCard from "@/components/GlassCard";
import { posts, getPost, authorOf } from "@/data/blog";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}/` },
        openGraph: {
            type: "article",
            title: `${post.title} | Harmony Additives`,
            description: post.excerpt,
            url: `https://harmonyadditive.in/blog/${post.slug}/`,
            publishedTime: post.dateISO,
            authors: [authorOf(post).name],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const author = authorOf(post);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        articleSection: post.category,
        author: { "@type": "Person", name: author.name, jobTitle: author.jobTitle },
        publisher: { "@id": "https://harmonyadditive.in/#organization" },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://harmonyadditive.in/blog/${post.slug}/`,
        },
        image: "https://harmonyadditive.in/hlogo.png",
    };

    // Up to 3 related posts from the same category
    const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

    return (
        <InnerLayout
            heroTitle={post.title}
            heroSubtitle={post.excerpt}
            heroEyebrow={`${post.category} · ${post.date} · ${post.readTime} read`}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.title },
            ]}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Author byline */}
            <div className="article-byline">
                <span className="blog-card-author-avatar">{author.initials}</span>
                <div className="blog-card-author-info">
                    <span className="blog-card-author-name">{author.name}</span>
                    <span className="blog-card-author-role">{author.role} · Published {post.date}</span>
                </div>
            </div>

            {/* Article body */}
            <article className="inner-section">
                <GlassCard style={{ padding: "2.5rem 2.75rem" }}>
                    <div className="inner-section-body article-body">
                        {post.body.map((section, i) => (
                            <section key={i}>
                                {section.heading && <h2 className="article-h2">{section.heading}</h2>}
                                {section.paragraphs.map((para, j) => (
                                    <p key={j}>{para}</p>
                                ))}
                            </section>
                        ))}

                        {/* Inline internal links */}
                        {(post.relatedProductSlug || post.relatedIndustrySlug) && (
                            <p className="article-links">
                                {post.relatedProductSlug && (
                                    <>Explore our <Link href={`/products/${post.relatedProductSlug}/`}>{post.relatedProduct}</Link> range</>
                                )}
                                {post.relatedProductSlug && post.relatedIndustrySlug && " · "}
                                {post.relatedIndustrySlug && (
                                    <>See <Link href={`/industry/${post.relatedIndustrySlug}/`}>additives by industry</Link></>
                                )}
                                .
                            </p>
                        )}
                    </div>
                </GlassCard>
            </article>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="inner-section">
                    <h2 className="inner-section-title">Related Articles</h2>
                    <div className="blog-grid">
                        {related.map((p) => (
                            <Link key={p.slug} href={`/blog/${p.slug}/`} style={{ textDecoration: "none" }}>
                                <GlassCard className="blog-card">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-tag">{p.category}</span>
                                        <span className="blog-card-date">{p.readTime} read</span>
                                    </div>
                                    <h3 className="blog-card-title">{p.title}</h3>
                                    <p className="blog-card-excerpt">{p.excerpt}</p>
                                    <span className="blog-card-readmore">Read more <span aria-hidden="true">→</span></span>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <GlassCard className="cta-banner">
                <h2 className="cta-banner-title">Have a formulation challenge?</h2>
                <p className="cta-banner-desc">
                    Our technical team provides free consultation and dispatches samples within the week.
                </p>
                <div className="cta-banner-actions">
                    <Link href="/ask-expert/" className="btn-primary">Ask Our Chemists</Link>
                    <Link href="/products/" className="btn-secondary">Browse 173 Products</Link>
                </div>
            </GlassCard>
        </InnerLayout>
    );
}
