"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";

const SYSTEM_LABELS: Record<string, string> = {
    aqueous: "Aqueous",
    "non-aqueous": "Non-Aqueous",
    both: "Aqueous & Non-Aqueous",
    powder: "Powder",
};

const SYSTEM_COLORS: Record<string, string> = {
    aqueous: "#0369A1",
    "non-aqueous": "#EA580C",
    both: "#7C3AED",
    powder: "#16A34A",
};

interface ProductGridProps {
    products: Product[];
    accentColor?: string;
    showSearch?: boolean;
    showIndustryFilter?: boolean;
}

export default function ProductGrid({
    products,
    accentColor = "#0369A1",
    showSearch = true,
    showIndustryFilter = true,
}: ProductGridProps) {
    const [query, setQuery] = useState("");
    const [industryFilter, setIndustryFilter] = useState<string>("all");

    // Unique industries across these products, with counts, sorted by frequency
    const industries = useMemo(() => {
        const map = new Map<string, { label: string; slug: string; count: number }>();
        for (const p of products) {
            for (const ind of p.industries) {
                const existing = map.get(ind.slug);
                if (existing) existing.count++;
                else map.set(ind.slug, { label: ind.label, slug: ind.slug, count: 1 });
            }
        }
        return Array.from(map.values()).sort((a, b) => b.count - a.count);
    }, [products]);

    const filtered = useMemo(() => {
        let list = products;
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.type.toLowerCase().includes(q) ||
                    p.id.toLowerCase().includes(q) ||
                    p.industries.some((i) => i.label.toLowerCase().includes(q))
            );
        }
        if (industryFilter !== "all") {
            list = list.filter((p) => p.industries.some((i) => i.slug === industryFilter));
        }
        return list;
    }, [products, query, industryFilter]);

    return (
        <div className="product-grid-wrapper">
            {/* Search + Filter controls */}
            {(showSearch || showIndustryFilter) && (
                <div className="pg-controls">
                    {showSearch && (
                        <div className="pg-search-wrap">
                            <svg className="pg-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="search"
                                className="pg-search"
                                placeholder="Search by product code, type, or industry…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-label="Search products"
                            />
                            {query && (
                                <button className="pg-search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                                    ×
                                </button>
                            )}
                        </div>
                    )}

                    <p className="pg-count" aria-live="polite">
                        {filtered.length === products.length
                            ? `${products.length} products`
                            : `${filtered.length} of ${products.length}`}
                    </p>
                </div>
            )}

            {/* Industry filter chips */}
            {showIndustryFilter && industries.length > 1 && (
                <div className="pg-filters" role="group" aria-label="Filter by industry">
                    <button
                        className={`pg-chip ${industryFilter === "all" ? "pg-chip--active" : ""}`}
                        onClick={() => setIndustryFilter("all")}
                        style={industryFilter === "all" ? ({ "--chip-accent": accentColor } as React.CSSProperties) : {}}
                    >
                        All Industries
                    </button>
                    {industries.map((ind) => (
                        <button
                            key={ind.slug}
                            className={`pg-chip ${industryFilter === ind.slug ? "pg-chip--active" : ""}`}
                            onClick={() => setIndustryFilter(ind.slug)}
                            style={industryFilter === ind.slug ? ({ "--chip-accent": accentColor } as React.CSSProperties) : {}}
                        >
                            {ind.label} <span className="pg-chip-count">{ind.count}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="pg-empty">
                    <div className="pg-empty-icon" aria-hidden="true">🔍</div>
                    <p className="pg-empty-title">No products match your search</p>
                    <p className="pg-empty-desc">
                        Try a different code or industry, or{" "}
                        <Link href="/ask-expert/" className="pg-empty-link">ask our chemists</Link>
                        {" "}for a recommendation.
                    </p>
                    <button className="pg-empty-reset" onClick={() => { setQuery(""); setIndustryFilter("all"); }}>
                        Clear filters
                    </button>
                </div>
            ) : (
                <div className="pg-grid">
                    {filtered.map((product) => (
                        <article key={product.id + product.name} className="pg-card">
                            <div className="pg-card-header">
                                <span
                                    className="pg-system-badge"
                                    style={{ "--badge-color": SYSTEM_COLORS[product.system] ?? "#64748B" } as React.CSSProperties}
                                >
                                    {SYSTEM_LABELS[product.system]}
                                </span>
                            </div>

                            <h3 className="pg-card-name">{product.name}</h3>
                            <p className="pg-card-type">{product.type}</p>

                            <div className="pg-card-uses">
                                {product.industries.slice(0, 4).map((ind) => (
                                    <Link
                                        key={ind.slug}
                                        href={`/industry/${ind.slug}/`}
                                        className="pg-use-tag"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {ind.label}
                                    </Link>
                                ))}
                                {product.industries.length > 4 && (
                                    <span className="pg-use-tag pg-use-tag--more">+{product.industries.length - 4}</span>
                                )}
                            </div>

                            <div className="pg-card-actions">
                                <Link
                                    href="/ask-expert/"
                                    className="pg-btn pg-btn--primary"
                                    style={{ "--btn-accent": accentColor } as React.CSSProperties}
                                    onClick={() => {
                                        // Pass product context via sessionStorage instead of query params,
                                        // so we don't create 173 crawlable parameterised URLs (SEO).
                                        try {
                                            sessionStorage.setItem(
                                                "ha_prefill",
                                                JSON.stringify({ product: product.name, category: product.categorySlug })
                                            );
                                        } catch { /* sessionStorage unavailable — prefill simply skipped */ }
                                    }}
                                >
                                    Request Sample
                                </Link>
                                <a
                                    href={`mailto:sales@additive.in?subject=${encodeURIComponent(`TDS Request — ${product.name}`)}&body=${encodeURIComponent(`Dear Harmony Additives team,\n\nPlease send me the Technical Data Sheet for:\nProduct: ${product.name}\nType: ${product.type}\n\nThank you.`)}`}
                                    className="pg-btn pg-btn--secondary"
                                >
                                    Get TDS
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            {/* APEO-free note */}
            <div className="pg-apeo-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Every Harmony Additives product is <strong>APEO-free</strong> — manufactured without alkylphenol ethoxylates.
            </div>
        </div>
    );
}
