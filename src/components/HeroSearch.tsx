"use client";

import { useState, useMemo, useRef, useId } from "react";
import { useRouter } from "next/navigation";
import { products, CATEGORY_META } from "@/data/products";

/**
 * Homepage hero search with live autocomplete.
 *
 * As the visitor types we surface matching product families (categories) and
 * individual products from the 173-SKU catalogue. Selecting a suggestion deep-links
 * straight to that product/category page; submitting free text hands the term to the
 * /products/ finder via sessionStorage (no URL param, so the products page stays
 * canonical and crawl-clean) and jumps to the #find-a-product grid.
 */

const SYSTEM_LABELS: Record<string, string> = {
    aqueous: "Aqueous",
    "non-aqueous": "Non-Aqueous",
    both: "Aqueous & Non-Aqueous",
    powder: "Powder",
};

// Lightweight, lower-cased index built once — keeps per-keystroke filtering cheap.
const INDEX = products.map((p) => ({
    name: p.name,
    slug: p.slug,
    type: p.type,
    category: p.category,
    system: p.system,
    _name: p.name.toLowerCase(),
    _id: p.id.toLowerCase(),
    _type: p.type.toLowerCase(),
    _inds: p.industries.map((i) => i.label.toLowerCase()).join(" "),
}));

const CATEGORIES = Object.values(CATEGORY_META);

type Suggestion =
    | { kind: "category"; label: string; slug: string; count: number }
    | { kind: "product"; name: string; slug: string; type: string; system: string }
    | { kind: "all"; label: string };

const MAX_PRODUCTS = 6;
const MAX_CATEGORIES = 3;

export default function HeroSearch() {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);
    const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const listboxId = useId();

    const suggestions = useMemo<Suggestion[]>(() => {
        const q = value.trim().toLowerCase();
        if (!q) return [];

        const cats: Suggestion[] = CATEGORIES
            .filter((c) => c.label.toLowerCase().includes(q))
            .slice(0, MAX_CATEGORIES)
            .map((c) => ({ kind: "category", label: c.label, slug: c.slug, count: c.count }));

        const prods: Suggestion[] = INDEX
            .map((p) => {
                let score = -1;
                if (p._name.startsWith(q) || p._id.startsWith(q)) score = 0;
                else if (p._name.includes(q) || p._id.includes(q)) score = 1;
                else if (p._type.includes(q)) score = 2;
                else if (p._inds.includes(q)) score = 3;
                return { p, score };
            })
            .filter((x) => x.score >= 0)
            .sort((a, b) => a.score - b.score || a.p._name.localeCompare(b.p._name))
            .slice(0, MAX_PRODUCTS)
            .map((x) => ({ kind: "product", name: x.p.name, slug: x.p.slug, type: x.p.type, system: x.p.system } as Suggestion));

        const list = [...cats, ...prods];
        if (list.length) list.push({ kind: "all", label: value.trim() });
        return list;
    }, [value]);

    const seedFinder = (q: string) => {
        try {
            if (q.trim()) sessionStorage.setItem("ha_psearch", q.trim());
        } catch { /* ignore */ }
        router.push("/products/#find-a-product");
    };

    const choose = (s: Suggestion) => {
        setOpen(false);
        setActive(-1);
        if (s.kind === "product") router.push(`/product/${s.slug}/`);
        else if (s.kind === "category") router.push(`/products/${s.slug}/`);
        else seedFinder(value);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open || suggestions.length === 0) {
            if (e.key === "ArrowDown" && suggestions.length) { setOpen(true); setActive(0); e.preventDefault(); }
            return;
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => (i + 1) % suggestions.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
        } else if (e.key === "Enter") {
            if (active >= 0) { e.preventDefault(); choose(suggestions[active]); }
        } else if (e.key === "Escape") {
            setOpen(false);
            setActive(-1);
        }
    };

    const showList = open && suggestions.length > 0;

    return (
        <div className="hero-search-shell">
            <form
                className="hero-search"
                role="search"
                onSubmit={(e) => { e.preventDefault(); if (active >= 0 && showList) choose(suggestions[active]); else seedFinder(value); }}
            >
                <svg className="hero-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    type="search"
                    className="hero-search-input"
                    placeholder="Search 173 products — e.g. silicone defoamer, DF 5151, emulsifier…"
                    value={value}
                    onChange={(e) => { setValue(e.target.value); setOpen(true); setActive(-1); }}
                    onFocus={() => { if (value.trim()) setOpen(true); }}
                    onBlur={() => { blurTimer.current = setTimeout(() => setOpen(false), 120); }}
                    onKeyDown={onKeyDown}
                    aria-label="Search products"
                    enterKeyHint="search"
                    role="combobox"
                    aria-expanded={showList}
                    aria-controls={listboxId}
                    aria-autocomplete="list"
                    aria-activedescendant={active >= 0 ? `${listboxId}-opt-${active}` : undefined}
                    autoComplete="off"
                />
                <button type="submit" className="hero-search-btn">Find</button>
            </form>

            {showList && (
                <ul
                    className="hero-ac"
                    id={listboxId}
                    role="listbox"
                    aria-label="Product suggestions"
                    onMouseDown={(e) => {
                        // keep input focus so the click registers before blur closes the list
                        e.preventDefault();
                        if (blurTimer.current) clearTimeout(blurTimer.current);
                    }}
                >
                    {suggestions.map((s, i) => {
                        const isActive = i === active;
                        const id = `${listboxId}-opt-${i}`;
                        if (s.kind === "category") {
                            return (
                                <li
                                    key={`c-${s.slug}`}
                                    id={id}
                                    role="option"
                                    aria-selected={isActive}
                                    className={`hero-ac-item hero-ac-item--cat${isActive ? " is-active" : ""}`}
                                    onMouseEnter={() => setActive(i)}
                                    onClick={() => choose(s)}
                                >
                                    <span className="hero-ac-badge" aria-hidden="true">Category</span>
                                    <span className="hero-ac-main">{s.label}</span>
                                    <span className="hero-ac-meta">{s.count} products</span>
                                </li>
                            );
                        }
                        if (s.kind === "product") {
                            return (
                                <li
                                    key={`p-${s.slug}`}
                                    id={id}
                                    role="option"
                                    aria-selected={isActive}
                                    className={`hero-ac-item${isActive ? " is-active" : ""}`}
                                    onMouseEnter={() => setActive(i)}
                                    onClick={() => choose(s)}
                                >
                                    <span className="hero-ac-main">{s.name}</span>
                                    <span className="hero-ac-type">{s.type}</span>
                                    <span className="hero-ac-meta">{SYSTEM_LABELS[s.system] ?? ""}</span>
                                </li>
                            );
                        }
                        return (
                            <li
                                key="all"
                                id={id}
                                role="option"
                                aria-selected={isActive}
                                className={`hero-ac-item hero-ac-item--all${isActive ? " is-active" : ""}`}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => choose(s)}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                                </svg>
                                Search all 173 products for “<strong>{s.label}</strong>”
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
