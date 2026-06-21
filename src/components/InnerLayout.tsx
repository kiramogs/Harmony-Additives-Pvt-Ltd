import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleField from "./ParticleField";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface InnerLayoutProps {
    children: React.ReactNode;
    heroTitle: string;
    heroSubtitle?: string;
    heroEyebrow?: string;
    breadcrumbs: BreadcrumbItem[];
    heroActions?: React.ReactNode;
}

const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: `https://harmonyadditive.in${item.href}` } : {}),
    })),
});

export default function InnerLayout({
    children,
    heroTitle,
    heroSubtitle,
    heroEyebrow,
    breadcrumbs,
    heroActions,
}: InnerLayoutProps) {
    return (
        <div className="inner-page">
            {/* JSON-LD Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
            />

            {/* Ambient background */}
            <div className="ambient-bg" aria-hidden="true">
                <div className="ambient-blob blob-1" />
                <div className="ambient-blob blob-2" />
                <div className="ambient-blob blob-3" />
                <div className="ambient-blob blob-4" />
            </div>

            <ParticleField />

            {/* Navbar */}
            <Navbar />

            {/* Hero banner */}
            <header className="inner-hero">
                <div className="inner-hero-inner">
                    {/* Breadcrumb nav */}
                    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
                        <ol className="breadcrumb-list">
                            {breadcrumbs.map((item, i) => (
                                <li key={i} className="breadcrumb-item">
                                    {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
                                    {item.href ? (
                                        <Link href={item.href} className="breadcrumb-link">
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="breadcrumb-current" aria-current="page">
                                            {item.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {heroEyebrow && (
                        <span className="inner-hero-eyebrow">{heroEyebrow}</span>
                    )}

                    <h1 className="inner-hero-title">{heroTitle}</h1>

                    {heroSubtitle && (
                        <p className="inner-hero-subtitle">{heroSubtitle}</p>
                    )}

                    {heroActions && (
                        <div className="inner-hero-actions">{heroActions}</div>
                    )}
                </div>
            </header>

            {/* Page content */}
            <main className="inner-main">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
