import Link from "next/link";

const PRODUCT_LINKS = [
    { label: "Defoamers & Antifoams", href: "/products/defoamers/" },
    { label: "Emulsifiers", href: "/products/emulsifiers/" },
    { label: "Wetting & Dispersing Agents", href: "/products/wetting-dispersing-agents/" },
    { label: "Thickeners & Anti-Settling", href: "/products/thickeners-anti-settling-agents/" },
    { label: "Surface Property Enhancers", href: "/products/surface-property-enhancers/" },
    { label: "Specialty & Tailor-Made", href: "/products/specialty-tailor-made/" },
];

const INDUSTRY_LINKS = [
    { label: "Paint & Coatings", href: "/industry/paint-coatings/" },
    { label: "Printing Inks", href: "/industry/printing-inks/" },
    { label: "Pulp & Paper", href: "/industry/pulp-paper/" },
    { label: "Textile", href: "/industry/textile/" },
    { label: "Construction Chemicals", href: "/industry/construction/" },
    { label: "Agrochemicals", href: "/industry/agrochemicals/" },
    { label: "Water Treatment", href: "/industry/water-treatment/" },
    { label: "Household Products", href: "/industry/household-products/" },
];

export default function Footer() {
    return (
        <footer className="site-footer-inner" aria-label="Site footer">
            <div className="footer-inner-grid">
                {/* Brand column */}
                <div className="footer-brand-col">
                    <Link href="/" className="footer-logo-link" aria-label="Harmony Additives — Home">
                        <img src="/hlogo-sm.webp" alt="Harmony Additives" width="48" height="48" style={{ objectFit: "contain" }} />
                        <span className="footer-brand-name">Harmony Additives</span>
                    </Link>
                    <p className="footer-tagline">An Eye For Excellence</p>
                    <p className="footer-about">
                        Mumbai-based manufacturer &amp; exporter of specialty chemical
                        additives since 1996. ISO 9001 &amp; ISO 14001 certified.
                    </p>
                    <div className="footer-badges-row">
                        <span className="footer-badge">ISO 9001</span>
                        <span className="footer-badge">ISO 14001</span>
                        <span className="footer-badge">Since 1996</span>
                    </div>
                    <div className="footer-contact-block">
                        <a href="tel:+919820780452" className="footer-contact-item">+91 98207 80452</a>
                        <a href="mailto:sales@additive.in" className="footer-contact-item">sales@additive.in</a>
                        <a href="mailto:export@additive.in" className="footer-contact-item">export@additive.in</a>
                        <p className="footer-address-line">Gorai-1, Borivali (West), Mumbai 400 092</p>
                    </div>
                </div>

                {/* Products column */}
                <div className="footer-links-col">
                    <h3 className="footer-col-heading">Products</h3>
                    <ul className="footer-link-list">
                        {PRODUCT_LINKS.map((l) => (
                            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Industries column */}
                <div className="footer-links-col">
                    <h3 className="footer-col-heading">Industries</h3>
                    <ul className="footer-link-list">
                        {INDUSTRY_LINKS.map((l) => (
                            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Company column */}
                <div className="footer-links-col">
                    <h3 className="footer-col-heading">Company</h3>
                    <ul className="footer-link-list">
                        <li><Link href="/about-us/">About Us</Link></li>
                        <li><Link href="/blog/">Blog &amp; Insights</Link></li>
                        <li><Link href="/ask-expert/">Ask an Expert</Link></li>
                        <li><Link href="/products/">All Products</Link></li>
                        <li><Link href="/industry/">Industries Served</Link></li>
                        <li>
                            <a
                                href="https://wa.me/919820780452?text=Hello%2C%20I%20would%20like%20to%20request%20a%20product%20sample."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request a Sample
                            </a>
                        </li>
                    </ul>
                    <div className="footer-export-note">
                        <h4 className="footer-col-subheading">Export Markets</h4>
                        <p>Ethiopia · Nepal · Bangladesh · Sri Lanka · Myanmar · Vietnam · Egypt · South Africa · Ghana · Nigeria · Saudi Arabia · Mauritius · Malaysia</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Harmony Additives Private Limited. All rights reserved.
                </p>
                <p className="footer-legal">
                    Gorai-1, Borivali (West), Mumbai 400 092, Maharashtra, India
                </p>
            </div>
        </footer>
    );
}
