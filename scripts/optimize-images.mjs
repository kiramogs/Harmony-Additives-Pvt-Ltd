import sharp from "sharp";
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");

function kb(p) {
    return existsSync(p) ? Math.round(statSync(p).size / 1024) : 0;
}

// ── 1. Optimize the oversized logo (1.6 MB PNG) ──
const logo = join(pub, "hlogo.png");
if (existsSync(logo)) {
    const before = kb(logo);
    const buf = await sharp(logo)
        .resize(512, 512, { fit: "inside", withoutEnlargement: true })
        .png({ quality: 90, compressionLevel: 9, palette: true })
        .toBuffer();
    const { writeFileSync } = await import("node:fs");
    writeFileSync(logo, buf);
    // full-size webp (used for OG / large contexts)
    await sharp(logo).resize(512, 512, { fit: "inside", withoutEnlargement: true }).webp({ quality: 88 }).toFile(join(pub, "hlogo.webp"));
    // small webp sized for the 40-48px nav/footer marks (2x retina = ~128px)
    await sharp(logo).resize(128, 128, { fit: "inside", withoutEnlargement: true }).webp({ quality: 90 }).toFile(join(pub, "hlogo-sm.webp"));
    console.log(`hlogo.png: ${before} kB -> ${kb(logo)} kB (+ hlogo.webp ${kb(join(pub, "hlogo.webp"))} kB, hlogo-sm.webp ${kb(join(pub, "hlogo-sm.webp"))} kB)`);
}

// ── 2. Convert the 87 scroll-animation frames to WebP ──
const framesDir = join(pub, "frames");
if (existsSync(framesDir)) {
    const jpgs = readdirSync(framesDir).filter((f) => f.toLowerCase().endsWith(".jpg"));
    let totalJpg = 0, totalWebp = 0;
    for (const f of jpgs) {
        const src = join(framesDir, f);
        const out = join(framesDir, f.replace(/\.jpg$/i, ".webp"));
        totalJpg += statSync(src).size;
        await sharp(src).webp({ quality: 80, effort: 5 }).toFile(out);
        totalWebp += statSync(out).size;
    }
    console.log(`frames: ${jpgs.length} converted — ${Math.round(totalJpg / 1024)} kB JPG -> ${Math.round(totalWebp / 1024)} kB WebP`);
}
