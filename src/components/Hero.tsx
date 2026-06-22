import Link from "next/link";

const stats = [
    { value: "1996", label: "Founded" },
    { value: "173", label: "Products" },
    { value: "13+", label: "Export Countries" },
    { value: "500+", label: "Active Accounts" },
];

/**
 * Static, server-rendered homepage hero. Replaces the 87-frame canvas scroll
 * animation — the H1 and copy are in the initial HTML (great for SEO + LCP),
 * with zero hero JavaScript. Fully responsive / mobile-first.
 */
export default function Hero() {
    return (
        <header className="home-hero">
            <div className="home-hero-glow" aria-hidden="true" />
            <div className="home-hero-inner">
                <span className="hero-eyebrow">Est. 1996 · Mumbai, India · ISO 9001 &amp; 14001</span>
                <h1 className="hero-h1">
                    Specialty Chemical Additives<br className="hero-h1-break" />{" "}
                    Manufacturer &amp; Exporter
                </h1>
                <p className="hero-tagline">An Eye For Excellence</p>
                <p className="hero-desc">
                    Defoamers, emulsifiers, wetting &amp; dispersing agents, thickeners, surface
                    enhancers &amp; custom formulations — 173 APEO-free specialty additives across
                    6 categories, serving 10+ industries in India and 13 export countries.
                </p>
                <div className="hero-actions">
                    <Link href="/products/" className="hero-btn hero-btn--primary">
                        Explore 173 Products
                    </Link>
                    <Link href="/ask-expert/" className="hero-btn hero-btn--secondary">
                        Request a Sample
                    </Link>
                </div>
                <ul className="hero-stats">
                    {stats.map((s) => (
                        <li key={s.label} className="hero-stat">
                            <span className="hero-stat-value">{s.value}</span>
                            <span className="hero-stat-label">{s.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
