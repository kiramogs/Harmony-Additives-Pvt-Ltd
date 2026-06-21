import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const csv = readFileSync(join(__dirname, "product-info.csv"), "utf8");

// ── Minimal CSV parser (handles quoted fields) ──
function parseCSV(text) {
    const rows = [];
    let row = [], field = "", inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inQuotes) {
            if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
            else if (c === '"') inQuotes = false;
            else field += c;
        } else {
            if (c === '"') inQuotes = true;
            else if (c === ",") { row.push(field); field = ""; }
            else if (c === "\r") { /* skip */ }
            else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
            else field += c;
        }
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows;
}

const rows = parseCSV(csv).filter((r) => r.length >= 5 && r[0] !== "Index");

// ── Category mapping ──
const CATEGORY_SLUG = {
    "Defoamers": "defoamers",
    "Wetting & Dispersing Agent": "wetting-dispersing-agents",
    "Emulsifiers": "emulsifiers",
    "Thickener & Anti-Settling Agents": "thickeners-anti-settling-agents",
    "Surface Property Enhancer": "surface-property-enhancers",
    "Specialty & Tailor Made Additives": "specialty-tailor-made",
};
const CATEGORY_LABEL = {
    "defoamers": "Defoamers & Antifoams",
    "wetting-dispersing-agents": "Wetting & Dispersing Agents",
    "emulsifiers": "Emulsifiers",
    "thickeners-anti-settling-agents": "Thickeners & Anti-Settling Agents",
    "surface-property-enhancers": "Surface Property Enhancers",
    "specialty-tailor-made": "Specialty & Tailor-Made Additives",
};

// ── Industry mapping (raw label → {label, slug}) ──
const INDUSTRY_MAP = {
    "Paint & Coating": { label: "Paint & Coatings", slug: "paint-coatings" },
    "Printing Inks": { label: "Printing Inks", slug: "printing-inks" },
    "Pulp & Paper": { label: "Pulp & Paper", slug: "pulp-paper" },
    "Textile": { label: "Textile", slug: "textile" },
    "Construction Chemicals": { label: "Construction", slug: "construction" },
    "AGRO": { label: "Agrochemicals", slug: "agrochemicals" },
    "ETP Additives": { label: "Water Treatment", slug: "water-treatment" },
    "Household Products": { label: "Household Products", slug: "household-products" },
    "Lubricating Oil / Oil Emulsions": { label: "Lubricants & Oils", slug: "lubricants-oils" },
    "Starch / Adhesive / Corrugation": { label: "Starch & Adhesives", slug: "starch-adhesives" },
};

// ── Title-case helper for ALL CAPS sub-categories ──
function cleanType(s) {
    let t = s.trim().replace(/\s+/g, " ");
    // Fix common spacing issues
    t = t.replace(/\s*-\s*/g, "-").replace(/\(\s*/g, "(").replace(/\s*\)/g, ")");
    t = t.replace(/-/g, " - ").replace(/\s+/g, " "); // normalize dashes with spacing
    // Title-case if it is mostly uppercase
    const letters = t.replace(/[^A-Za-z]/g, "");
    const upper = t.replace(/[^A-Z]/g, "").length;
    if (letters.length && upper / letters.length > 0.6) {
        t = t.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
    }
    return t.trim();
}

// ── Derive "system" from the functional type ──
function deriveSystem(typeRaw) {
    const t = typeRaw.toLowerCase();
    if (t.includes("powder")) return "powder";
    if (t.includes("non aqueous") || t.includes("non-aqueous") || t.includes("solvent based") || t.includes("alkyd")) return "non-aqueous";
    if (t.includes("aqueous") || t.includes("water") || t.includes("emulsion")) return "aqueous";
    if (t.includes("mineral oil")) return "non-aqueous";
    if (t.includes("silicone") || t.includes("dispersing") || t.includes("emulsifier")) return "both";
    return "both";
}

// ── Build product list ──
const seen = new Set();
const products = [];
for (const r of rows) {
    const [, productRaw, categoryRaw, subRaw, industryRaw] = r;
    const name = productRaw.trim().replace(/\s+/g, " ");
    const categorySlug = CATEGORY_SLUG[categoryRaw.trim()];
    if (!categorySlug) { console.warn("Unknown category:", categoryRaw, "for", name); continue; }
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);

    // Derive id from product code (strip the "Additive"/"Add-Eco"/"Add Eco" prefix)
    let id = name.replace(/^Add[-\s]?Eco\s+/i, "").replace(/^Additive\s+/i, "").trim();

    const type = cleanType(subRaw);
    const industries = industryRaw.split(",").map((s) => s.trim()).filter(Boolean)
        .map((raw) => INDUSTRY_MAP[raw])
        .filter(Boolean);
    // dedupe industries
    const seenInd = new Set();
    const industryList = [];
    for (const ind of industries) {
        if (!seenInd.has(ind.slug)) { seenInd.add(ind.slug); industryList.push(ind); }
    }

    products.push({
        id,
        name,
        type,
        categorySlug,
        category: CATEGORY_LABEL[categorySlug],
        system: deriveSystem(subRaw),
        industries: industryList,
    });
}

// ── Sort by category then by id ──
const catOrder = Object.keys(CATEGORY_LABEL);
products.sort((a, b) => {
    const c = catOrder.indexOf(a.categorySlug) - catOrder.indexOf(b.categorySlug);
    if (c !== 0) return c;
    return a.name.localeCompare(b.name);
});

// ── Counts ──
const counts = {};
for (const p of products) counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1;
console.log("Total products:", products.length);
console.log("Counts:", counts);

// ── Emit TypeScript ──
const lines = [];
lines.push(`// AUTO-GENERATED from scripts/product-info.csv by scripts/gen-products.mjs`);
lines.push(`// Do not edit by hand — re-run \`node scripts/gen-products.mjs\` to regenerate.`);
lines.push(``);
lines.push(`export interface ProductIndustry {`);
lines.push(`    label: string;`);
lines.push(`    slug: string;`);
lines.push(`}`);
lines.push(``);
lines.push(`export interface Product {`);
lines.push(`    id: string;`);
lines.push(`    name: string;`);
lines.push(`    type: string;`);
lines.push(`    category: string;`);
lines.push(`    categorySlug: string;`);
lines.push(`    system: "aqueous" | "non-aqueous" | "both" | "powder";`);
lines.push(`    industries: ProductIndustry[];`);
lines.push(`}`);
lines.push(``);

// Category meta with REAL counts
lines.push(`export const CATEGORY_META: Record<string, { label: string; slug: string; accent: string; count: number; blurb: string }> = {`);
const ACCENTS = {
    defoamers: "#0369A1",
    "wetting-dispersing-agents": "#7C3AED",
    emulsifiers: "#DB2777",
    "thickeners-anti-settling-agents": "#16A34A",
    "surface-property-enhancers": "#EA580C",
    "specialty-tailor-made": "#0D9488",
};
const BLURBS = {
    defoamers: "Silicone, mineral-oil & polyether foam-control agents for aqueous and non-aqueous systems.",
    "wetting-dispersing-agents": "Dispersants and wetting agents for organic & inorganic pigment systems.",
    emulsifiers: "Anionic, non-ionic & cationic emulsifiers for stable O/W and W/O formulations.",
    "thickeners-anti-settling-agents": "Rheology modifiers and anti-settling agents for coatings, inks & detergents.",
    "surface-property-enhancers": "Leveling agents, wax dispersions & slip additives for premium surface finish.",
    "specialty-tailor-made": "Water repellents, brighteners, flocculants & custom tailor-made formulations.",
};
for (const slug of catOrder) {
    lines.push(`    "${slug}": { label: ${JSON.stringify(CATEGORY_LABEL[slug])}, slug: "${slug}", accent: "${ACCENTS[slug]}", count: ${counts[slug] || 0}, blurb: ${JSON.stringify(BLURBS[slug])} },`);
}
lines.push(`};`);
lines.push(``);

lines.push(`export const products: Product[] = [`);
for (const p of products) {
    const inds = p.industries.map((i) => `{ label: ${JSON.stringify(i.label)}, slug: "${i.slug}" }`).join(", ");
    lines.push(`    { id: ${JSON.stringify(p.id)}, name: ${JSON.stringify(p.name)}, type: ${JSON.stringify(p.type)}, category: ${JSON.stringify(p.category)}, categorySlug: "${p.categorySlug}", system: "${p.system}", industries: [${inds}] },`);
}
lines.push(`];`);
lines.push(``);
lines.push(`export function getProductsByCategory(slug: string): Product[] {`);
lines.push(`    return products.filter((p) => p.categorySlug === slug);`);
lines.push(`}`);
lines.push(``);
lines.push(`export function getProductsByIndustry(slug: string): Product[] {`);
lines.push(`    return products.filter((p) => p.industries.some((i) => i.slug === slug));`);
lines.push(`}`);
lines.push(``);
lines.push(`export const TOTAL_PRODUCTS = ${products.length};`);
lines.push(``);

writeFileSync(join(__dirname, "..", "src", "data", "products.ts"), lines.join("\n"), "utf8");
console.log("Wrote src/data/products.ts");
