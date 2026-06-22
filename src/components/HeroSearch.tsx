"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Homepage hero search. Lets a visitor start finding a product immediately:
 * the term is handed to the /products/ finder via sessionStorage (no URL param,
 * so the products page stays canonical and crawl-clean), then we deep-link to
 * the #find-a-product grid which seeds its search from that value.
 */
export default function HeroSearch() {
    const router = useRouter();
    const [value, setValue] = useState("");

    const go = (q: string) => {
        try {
            if (q.trim()) sessionStorage.setItem("ha_psearch", q.trim());
        } catch { /* ignore */ }
        router.push("/products/#find-a-product");
    };

    return (
        <form
            className="hero-search"
            role="search"
            onSubmit={(e) => { e.preventDefault(); go(value); }}
        >
            <svg className="hero-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
                type="search"
                className="hero-search-input"
                placeholder="Search 173 products — e.g. silicone defoamer, DF 5151, emulsifier…"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="Search products"
                enterKeyHint="search"
            />
            <button type="submit" className="hero-search-btn">Find</button>
        </form>
    );
}
