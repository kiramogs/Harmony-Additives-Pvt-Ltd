import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "scripts", "img-src");
const outRoot = join(root, "public", "images");

// prefix -> { dir, maxW, quality }
const RULES = [
    { pfx: "cat-", dir: "category", maxW: 1100, q: 78 },
    { pfx: "ind-", dir: "industry", maxW: 1100, q: 78 },
    { pfx: "blog-", dir: "blog", maxW: 1200, q: 78 },
    { pfx: "company-", dir: "company", maxW: 1200, q: 80 },
    { pfx: "event-", dir: "events", maxW: 1000, q: 78 },
    { pfx: "banner-", dir: "brand", maxW: 1600, q: 72 },
    { pfx: "logo-", dir: "brand", maxW: 600, q: 90 },
];

for (const r of RULES) mkdirSync(join(outRoot, r.dir), { recursive: true });

const files = readdirSync(src).filter((f) => /\.(jpe?g|png)$/i.test(f));
let totalIn = 0, totalOut = 0, n = 0;

for (const f of files) {
    const rule = RULES.find((r) => f.startsWith(r.pfx));
    if (!rule) { console.warn("no rule for", f); continue; }
    const base = f.slice(rule.pfx.length).replace(/\.(jpe?g|png)$/i, "");
    const inPath = join(src, f);
    const outPath = join(outRoot, rule.dir, `${base}.webp`);
    const inKb = statSync(inPath).size / 1024;
    totalIn += inKb;
    await sharp(inPath)
        .resize(rule.maxW, null, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: rule.q, effort: 5 })
        .toFile(outPath);
    const outKb = statSync(outPath).size / 1024;
    totalOut += outKb;
    n++;
    console.log(`${rule.dir}/${base}.webp  ${Math.round(inKb)}kB -> ${Math.round(outKb)}kB`);
}

console.log(`\n${n} images: ${Math.round(totalIn / 1024)}MB -> ${Math.round(totalOut / 1024 * 10) / 10}MB`);
