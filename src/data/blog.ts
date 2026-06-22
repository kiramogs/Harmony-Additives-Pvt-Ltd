export interface BlogTable {
    caption?: string;
    headers: string[];
    rows: string[][];
}

export interface BlogSection {
    heading?: string;
    paragraphs: string[];
    table?: BlogTable;
}

export interface BlogInternalLink {
    label: string;
    href: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;        // display
    dateISO: string;     // for schema (YYYY-MM-DD)
    category: string;
    readTime: string;
    author: "technical" | "team";
    image?: string;      // override for /images/blog/<slug>.webp
    relatedProduct?: string;
    relatedProductSlug?: string;
    relatedIndustrySlug?: string;
    internalLinks?: BlogInternalLink[];
    body: BlogSection[];
}

export interface Author {
    name: string;
    role: string;
    initials: string;
    jobTitle: string;
}

export const AUTHORS: Record<string, Author> = {
    technical: {
        name: "Bharat Thakkar",
        role: "Technical Director",
        initials: "BT",
        jobTitle: "Technical Director, Harmony Additives",
    },
    team: {
        name: "Harmony Additives Team",
        role: "Editorial Team",
        initials: "HA",
        jobTitle: "Harmony Additives Private Limited",
    },
};

export function authorOf(post: BlogPost): Author {
    return AUTHORS[post.author];
}

const SAMPLE_CTA =
    "Harmony Additives manufactures 173 APEO-free specialty additives and offers free technical consultation. Share your formulation and our chemists will recommend the right grade and dispatch a sample within the week.";

export const posts: BlogPost[] = [
    {
        slug: "how-to-choose-a-defoamer",
        title: "How to Choose a Defoamer: Silicone vs Mineral Oil vs Polymer",
        excerpt: "Silicone, mineral-oil or polymer defoamer? A formulator's guide to choosing the right antifoam by system, pH, film quality and cost — with a side-by-side comparison table.",
        date: "22 June 2026",
        dateISO: "2026-06-22",
        category: "Defoamers",
        readTime: "9 min",
        author: "technical",
        image: "/images/category/defoamers.webp",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "paint-coatings",
        internalLinks: [
            { label: "Browse our 70 defoamer & antifoam grades", href: "/products/defoamers/" },
            { label: "Wetting & dispersing agents", href: "/products/wetting-dispersing-agents/" },
            { label: "Thickeners & anti-settling agents", href: "/products/thickeners-anti-settling-agents/" },
            { label: "Defoamers for paint & coatings", href: "/industry/paint-coatings/" },
            { label: "Defoamers for pulp & paper", href: "/industry/pulp-paper/" },
            { label: "Guide: defoamers for water-based paints", href: "/blog/defoamers-aqueous-paints/" },
            { label: "Guide: defoamers for solvent-based paints", href: "/blog/defoamers-non-aqueous-paints/" },
        ],
        body: [
            { paragraphs: [
                "Foam is one of the most common and costly problems in liquid formulation. Air entrained during high-speed mixing, pumping, filling, or application becomes trapped as foam — causing surface defects, pinholes, inaccurate dosing, slower production, and overflowing tanks. The right defoamer eliminates that foam at a dosage typically below 0.5% by weight, without harming gloss, adhesion, or recoatability. Choosing the wrong one, however, can introduce craters and fish-eyes that are worse than the foam itself.",
                "This guide explains the three main defoamer chemistries — silicone, mineral oil, and polymer (polyether) — how they differ, and a simple framework for choosing the right one for your system.",
            ]},
            { heading: "What a defoamer actually does", paragraphs: [
                "A defoamer works at the air–liquid interface. To collapse foam, it must be slightly incompatible with the medium so it can enter the bubble wall, then spread rapidly and rupture it. Most modern defoamers also carry hydrophobic particles (such as treated silica) that puncture the lamella like microscopic needles, accelerating bubble collapse.",
                "That required incompatibility is also the central tension in defoamer selection: too compatible and it does nothing; too incompatible and it causes surface defects. The art is matching the degree of incompatibility — and the chemistry — to your specific system.",
            ]},
            { heading: "Silicone defoamers", paragraphs: [
                "Silicone (polydimethylsiloxane) defoamers have the lowest surface tension of the three families, which makes them the most efficient — they often work at roughly one-tenth the dose of a mineral-oil grade and remain effective across a wide temperature range and pH 5–9. They suit water-based paints, textiles, effluent treatment, and many high-foam aqueous processes.",
                "Their efficiency is also their risk: overdosed or poorly matched silicone can cause cratering, cavitation, and recoatability problems in some coatings. For water-based systems, emulsion-type and polyether-modified silicone grades (with an HLB around 1.5–3) give the best balance of compatibility and performance.",
            ]},
            { heading: "Mineral-oil defoamers", paragraphs: [
                "Mineral-oil defoamers are typically 85–95% carrier oil combined with 1–3% hydrophobic particles and emulsifiers. They are cost-effective, gentle, and excellent at releasing fine entrained air from the bulk, which makes them a workhorse for flat and matt architectural paints, printing inks, and adhesives.",
                "They are less efficient than silicone (higher dose required) and are primarily suited to non-aqueous and lower-sheen aqueous systems, but their low defect risk makes them a safe default where gloss is not critical.",
            ]},
            { heading: "Polymer & polyether defoamers", paragraphs: [
                "Polymer defoamers — polyether and polyacrylate types — are silicone-free and offer the broadest compatibility, working across pH 3–12. They have good water solubility and biodegradability, strong chemical and temperature stability, and a low tendency to cause film defects, which makes them the preferred choice for premium water-based coatings and applications with strict environmental requirements.",
                "They typically sit between mineral oil and silicone on both cost and efficiency — a balanced option when you need reliable foam control without the cratering risk of silicone or the higher dosing of mineral oil.",
            ]},
            {
                heading: "Silicone vs mineral oil vs polymer — at a glance",
                paragraphs: [
                    "The table below summarises how the three families compare on the factors that drive selection.",
                ],
                table: {
                    caption: "Defoamer chemistry comparison",
                    headers: ["Chemistry", "Efficiency", "pH range", "Typical dosage", "Film-defect risk", "Relative cost", "Best for"],
                    rows: [
                        ["Silicone", "Highest", "5–9", "0.05–0.3%", "Medium–High (cratering if overdosed)", "Higher", "Water-based paints, textile, ETP, high-foam aqueous"],
                        ["Mineral oil", "Moderate", "Broad", "0.2–0.5%", "Low", "Low", "Flat/matt paints, inks, adhesives, non-aqueous"],
                        ["Polymer / polyether", "Moderate–High", "3–12", "0.1–0.4%", "Low", "Medium", "Premium water-based coatings, low-VOC / eco-sensitive systems"],
                    ],
                },
            },
            { heading: "How to choose: a 5-question framework", paragraphs: [
                "1. What is the system — aqueous or solvent-based? Water-based systems favour silicone emulsion or polyether grades; solvent-based systems favour mineral-oil and polymer defoamers.",
                "2. What is the pH? If your formulation runs strongly acidic or alkaline (outside pH 5–9), a polymer/polyether grade with its broad pH tolerance is the safer choice over standard silicone.",
                "3. How critical is film quality? For high-gloss or clear coatings where cratering is unacceptable, choose a well-matched polyether or a fine emulsion silicone and trial at low dosage; for flat paints, mineral oil is forgiving.",
                "4. What are the process conditions? High temperature and high shear (jet dyeing, paper machines) favour silicone or organophosphate antifoams engineered for those conditions.",
                "5. Cost vs performance? Mineral oil is cheapest per kilo but needs more; silicone costs more per kilo but works at a fraction of the dose. Compare cost-in-use, not just unit price.",
                "When two chemistries look viable, trial both on your actual system and evaluate the cured film — not just the wet product — before deciding.",
            ]},
            { heading: "Common selection mistakes", paragraphs: [
                "The most frequent error is over-dosing a silicone defoamer, which trades foam for craters and adhesion loss. Others include choosing a defoamer that is incompatible with the binder, ignoring the application method (spray vs brush vs coater generate different foam), and adding all the defoamer at one stage instead of splitting it between the grind and the let-down. Address the mechanical source of air entrainment too — a cavitating pump can defeat any defoamer.",
            ]},
            { heading: "Why APEO-free matters", paragraphs: [
                "Many legacy defoamers relied on alkylphenol ethoxylate (APEO) surfactants, which are now restricted under EU REACH and increasingly scrutinised worldwide for aquatic toxicity. Specifying an APEO-free defoamer protects your product against regulatory and export risk. Every defoamer in the Harmony Additives range is APEO-free as a company-wide standard.",
                "Still unsure which grade fits your formulation? Our technical team will recommend the right defoamer from our 70-product range and dispatch a sample — share your system details and we will respond within one business day.",
            ]},
        ],
    },
    {
        slug: "defoamers-antifoams-adhesive-industry",
        title: "Defoamers in Adhesive Manufacturing: Selection Guide & Best Practices",
        excerpt: "Foam in adhesive systems — PVA, acrylic, and polyurethane — causes application defects and storage instability. This guide covers defoamer selection for the most common adhesive chemistries.",
        date: "6 May 2026",
        dateISO: "2026-05-06",
        category: "Defoamers",
        readTime: "8 min",
        author: "technical",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "starch-adhesives",
        body: [
            { paragraphs: [
                "Adhesives are among the most foam-prone formulations in industrial manufacturing. High-speed mixing of water-based polymer dispersions entrains large volumes of air, and surfactants present in the emulsion stabilise that air into persistent foam. Left uncontrolled, this foam causes pinholes in the adhesive film, weak bond lines, inaccurate metering, and reduced output as tanks overflow.",
                "Selecting the right defoamer for an adhesive system depends primarily on the polymer chemistry and whether the system is aqueous or solvent-based.",
            ]},
            { heading: "Matching defoamer chemistry to adhesive type", paragraphs: [
                "For polyvinyl acetate (PVA) and acrylic emulsion adhesives, silicone emulsion defoamers and mineral-oil defoamers both perform well. Silicone grades give the fastest knock-down of surface foam; mineral-oil grades excel at releasing entrained micro-foam from the bulk. Many formulators use a combination.",
                "For starch-based adhesives used in corrugated board, mineral-oil and silicone-wax blends are preferred because they survive the high-temperature cooking step without losing activity. For solvent-based and polyurethane adhesives, non-silicone polymeric defoamers avoid the cratering risk that silicone can introduce.",
            ]},
            { heading: "Dosage and incorporation", paragraphs: [
                "Defoamer dosage in adhesives typically ranges from 0.1% to 0.5% by weight. Add a portion during the grind or let-down stage to control process foam, and reserve a small post-add to handle foam generated during filling. Over-dosing silicone defoamers can cause surface defects and adhesion loss, so always trial at the lowest effective level.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "paint-india-2026",
        title: "Harmony Additives at Paint India 2026 — What to Expect",
        excerpt: "We are exhibiting at Paint India 2026 in Mumbai. Visit our booth to see live defoamer and dispersant demonstrations, meet our technical team, and request samples of our latest grades.",
        date: "7 January 2026",
        dateISO: "2026-01-07",
        category: "Company News",
        readTime: "3 min",
        author: "team",
        body: [
            { paragraphs: [
                "Harmony Additives will be exhibiting at Paint India 2026, the region's largest gathering of paint, coatings, and printing-ink manufacturers. After a strong showing at Paint India 2024 and AIPIMA 2024, we are returning with an expanded technical line-up.",
            ]},
            { heading: "What you'll see at our booth", paragraphs: [
                "Our chemists will run live demonstrations of foam knock-down across silicone, mineral-oil, and polyether defoamer chemistries, and show side-by-side grind comparisons using our wetting and dispersing agents. We will also be sampling our newest APEO-free grades for water-based architectural paints.",
                "Bring your formulation challenges — our technical team will be available throughout the show for one-to-one consultations on defoamer selection, pigment dispersion, rheology control, and surface defects.",
            ]},
            { paragraphs: [
                "To book a slot with our technical team in advance, contact us before the show and we will reserve time at the booth.",
            ]},
        ],
    },
    {
        slug: "defoamers-non-aqueous-inks",
        title: "Defoamers for Solvent-Based Printing Inks: A Practical Guide",
        excerpt: "Foam in gravure and offset inks causes print voids, colour density variations, and press downtime. This guide covers defoamer selection for non-aqueous ink systems by print process and substrate.",
        date: "16 Oct 2025",
        dateISO: "2025-10-16",
        category: "Defoamers",
        readTime: "9 min",
        author: "technical",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "printing-inks",
        body: [
            { paragraphs: [
                "Solvent-based printing inks present a different defoaming challenge to their water-based counterparts. The low surface tension of organic solvents means conventional silicone defoamers can be too aggressive, causing surface defects and intercoat adhesion problems on multi-colour jobs.",
            ]},
            { heading: "Selection by print process", paragraphs: [
                "For gravure inks, mineral-oil and polymeric defoamers provide controlled foam release without affecting the ink's transfer from the engraved cylinder. For offset inks — which are high-viscosity paste systems — dedicated paste-ink defoamers are incorporated during the milling stage.",
                "Substrate matters too. Inks printed on non-absorbent films (BOPP, PET) hold foam longer than those on absorbent paper, so films generally need a more efficient defoamer or a slightly higher dose.",
            ]},
            { heading: "Avoiding surface defects", paragraphs: [
                "The most common mistake is over-dosing a silicone defoamer, which leads to fish-eyes and poor lamination bond. Start at 0.1%, evaluate on a press trial, and increase only if foam persists. Where silicone sensitivity is high, a non-silicone polymeric grade is the safer choice.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "defoamers-aqueous-inks",
        title: "Defoamers for Water-Based Flexographic Inks: Selection & Troubleshooting",
        excerpt: "Water-based flexo inks are prone to foam at high press speeds and during anilox roll inking. This guide covers compatible defoamer chemistries and common troubleshooting scenarios.",
        date: "9 Oct 2025",
        dateISO: "2025-10-09",
        category: "Defoamers",
        readTime: "8 min",
        author: "technical",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "printing-inks",
        body: [
            { paragraphs: [
                "Water-based flexographic inks generate foam at multiple points: during manufacture, in the ink sump, and especially at the anilox roll where high shear and air contact combine. Foam in the ink train causes skips, mottle, and inconsistent colour density across the web.",
            ]},
            { heading: "Compatible chemistries", paragraphs: [
                "Silicone emulsion defoamers and polyether-based defoamers are both effective in aqueous flexo inks. Polyether grades are preferred where the printed film will be over-laminated, because they carry a lower risk of adhesion failure than silicone.",
            ]},
            { heading: "Troubleshooting checklist", paragraphs: [
                "If foam persists after adding defoamer, check: is the defoamer being added at the right point (a portion at manufacture, a portion press-side)? Is it well dispersed, or floating on the surface? Has the ink been over-thinned, raising surfactant concentration? Is the pump cavitating and drawing air? Addressing the mechanical source of air is often as important as the defoamer itself.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "defoamers-non-aqueous-paints",
        title: "Defoamers for Solvent-Based Paints: Selection Guide & Best Practices",
        excerpt: "Solvent-based paint systems present different defoaming challenges than water-based ones. This guide covers mineral-oil and polymer defoamer selection for alkyd, epoxy, and polyurethane solvent coatings.",
        date: "29 Sep 2025",
        dateISO: "2025-09-29",
        category: "Defoamers",
        readTime: "9 min",
        author: "technical",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "paint-coatings",
        body: [
            { paragraphs: [
                "Solvent-based paints — alkyds, epoxies, polyurethanes — foam less violently than aqueous systems, but the air they entrain is harder to release because of higher viscosity. The result is micro-foam and pinholes that surface during film formation rather than obvious froth in the can.",
            ]},
            { heading: "Air release vs. surface defoaming", paragraphs: [
                "In high-build and solvent-free systems such as epoxy floor coatings, the priority is air release — letting entrained bubbles rise and burst before the film cures. Dedicated air-release agents are designed for exactly this. In conventional alkyd and PU paints, a mineral-oil or polymer defoamer handles both surface foam and bulk air.",
            ]},
            { heading: "Best practice", paragraphs: [
                "Match the defoamer's incompatibility carefully: it must be just incompatible enough to be active at the air interface, but not so incompatible that it causes craters. Trial 2-3 grades on your actual resin system and evaluate the cured film, not just the wet paint.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "defoamers-aqueous-paints",
        title: "Defoamers for Water-Based Paints: What Every Formulator Should Know",
        excerpt: "Choosing the wrong defoamer in an aqueous paint system causes cratering, fish-eyes, or persistent foam. This practical guide covers defoamer types, selection criteria, and dosage optimization.",
        date: "16 Sep 2025",
        dateISO: "2025-09-16",
        category: "Defoamers",
        readTime: "10 min",
        author: "technical",
        relatedProduct: "Defoamers & Antifoams",
        relatedProductSlug: "defoamers",
        relatedIndustrySlug: "paint-coatings",
        body: [
            { paragraphs: [
                "Water-based architectural paints are the single largest application for defoamers. The combination of emulsion binders, dispersants, wetting agents, and thickeners makes these systems highly foam-stabilising — and the defoamer has to work without harming gloss, opacity, or scrub resistance.",
            ]},
            { heading: "The three defoamer families", paragraphs: [
                "Mineral-oil defoamers are cost-effective and gentle, ideal for flat and matt interior paints. Silicone emulsion defoamers are more efficient and suit semi-gloss and gloss paints where persistent foam is a problem. Polyether (silicone-free) grades sit between the two and are chosen where silicone-related defects must be avoided.",
            ]},
            { heading: "Dosage optimisation", paragraphs: [
                "Add defoamer in two stages: most during the pigment grind (where shear is highest), and a smaller amount at let-down. Typical total dosage is 0.1-0.4%. The classic over-dosing symptoms — craters, fish-eyes, loss of gloss — appear when a too-incompatible grade is used at too high a level. Always evaluate on a drawn-down and cured film.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "harmony-additives-trusted-partner",
        title: "Why 500+ Formulators Trust Harmony Additives: Quality, Service & Reach",
        excerpt: "Behind a 90%+ repeat-order rate lies consistent batch quality, honest lead times, and a technical team with an average 11-year tenure. Here is how we deliver on these promises.",
        date: "20 Aug 2025",
        dateISO: "2025-08-20",
        category: "Company",
        readTime: "5 min",
        author: "team",
        body: [
            { paragraphs: [
                "Harmony Additives has served over 500 active accounts since 1996, with a repeat-order rate above 90%. In a commoditised industry, that loyalty comes down to three things we treat as non-negotiable.",
            ]},
            { heading: "Consistent batch quality", paragraphs: [
                "Every production batch is tested against specification in our QC lab before release. Formulators depend on the additive behaving identically batch after batch — a single off-spec lot can shut down a customer's line, so we don't ship until it matches.",
            ]},
            { heading: "Honest lead times and technical depth", paragraphs: [
                "We quote lead times we can actually meet, and our formulators — who average 11 years of tenure — provide application support rather than just taking orders. Whether you need a defoamer recommendation or a custom blend, you reach a chemist, not a call centre.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "green-chemistry-specialty-additives",
        title: "Green Chemistry in Specialty Additives: How Harmony Additives Is Adapting",
        excerpt: "Regulatory and customer pressure for lower-VOC, biodegradable, and REACH-compliant additives is reshaping the specialty chemical industry. Here is our approach to sustainable formulation.",
        date: "30 Jul 2025",
        dateISO: "2025-07-30",
        category: "Industry Trends",
        readTime: "7 min",
        author: "team",
        body: [
            { paragraphs: [
                "Sustainability is no longer a niche requirement in specialty chemicals — it is a baseline expectation from customers and regulators alike. At Harmony Additives, green chemistry shapes how we formulate.",
            ]},
            { heading: "APEO-free across the entire range", paragraphs: [
                "Every one of our 173 products is APEO-free — manufactured without alkylphenol ethoxylates, which are restricted under EU REACH and increasingly scrutinised worldwide for their aquatic toxicity. This is a company-wide standard, not a premium sub-range.",
            ]},
            { heading: "Biodegradable and low-VOC options", paragraphs: [
                "We supply biodegradable emulsifiers and eco-friendly flocculants for effluent treatment, and continue to develop lower-VOC additive systems for water-based coatings. Our ISO 14001 environmental management certification governs how we minimise impact across all three production facilities.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "indian-manufacturing-global-chemical-market",
        title: "Why Indian Manufacturing Is a Competitive Advantage for Global Chemical Buyers",
        excerpt: "India's specialty chemical industry has moved from commodity supplier to formulation partner. We explain why overseas buyers are increasingly sourcing specialty additives from Indian manufacturers.",
        date: "23 Jul 2025",
        dateISO: "2025-07-23",
        category: "Export",
        readTime: "6 min",
        author: "team",
        body: [
            { paragraphs: [
                "Over the past decade, India's specialty chemical sector has shifted from being a low-cost commodity source to a genuine formulation partner for global brands. Harmony Additives exports to 13 countries, and our export clients consistently cite the same advantages.",
            ]},
            { heading: "Cost, quality, and agility", paragraphs: [
                "Indian manufacturers combine competitive cost structures with ISO-grade quality systems and the flexibility to produce tailored grades at moderate volumes — something larger multinationals are often slow to do. For a buyer who needs a specific defoamer or dispersant adapted to a local raw-material base, that agility is decisive.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "export-clients-chemistry-culture",
        title: "What Our Export Clients Teach Us About Chemistry and Culture",
        excerpt: "Formulation requirements vary significantly between markets. Supplying to 13 countries has taught us lessons about technical adaptation, communication, and building long-term export partnerships.",
        date: "15 Jul 2025",
        dateISO: "2025-07-15",
        category: "Export",
        readTime: "6 min",
        author: "team",
        body: [
            { paragraphs: [
                "Exporting specialty additives to 13 countries across South Asia, Southeast Asia, the Middle East, and Africa has taught us that chemistry is local. The same paint additive must perform against different raw materials, climates, and application practices in each market.",
            ]},
            { heading: "Adapting to local conditions", paragraphs: [
                "A defoamer optimised for a temperate climate may behave differently in high-humidity tropical conditions; a dispersant tuned for one supplier's titanium dioxide may need adjustment for another. We treat each export relationship as a technical collaboration, adapting grades to the client's actual inputs rather than shipping a one-size-fits-all product.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "customization-specialty-chemicals",
        title: "The Power of Custom Additive Formulation: When Standard Grades Fall Short",
        excerpt: "Off-the-shelf additives solve most problems. But unusual resins, extreme process conditions, or proprietary specifications sometimes require a custom blend. Here is how our development process works.",
        date: "8 Jul 2025",
        dateISO: "2025-07-08",
        category: "Custom Formulation",
        readTime: "7 min",
        author: "technical",
        relatedProduct: "Specialty & Tailor-Made",
        relatedProductSlug: "specialty-tailor-made",
        body: [
            { paragraphs: [
                "Most formulation problems are solved by a standard grade. But every so often a customer arrives with a challenge that no catalogue product addresses — an unusual resin, an extreme pH or temperature, or a specification handed down by their own customer.",
            ]},
            { heading: "How custom development works", paragraphs: [
                "It starts with a technical brief: the system, the problem, and the performance target. Our chemists assess feasibility within three business days and propose an approach. We then formulate and test candidates in our Tarapur lab, dispatching first samples within two to four weeks. We iterate on your application feedback until the product meets specification, then scale to production with full QC documentation.",
                "Proprietary projects run under NDA — we never share formulation details between clients.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "how-to-calculate-paint-coverage",
        title: "How to Calculate Paint Coverage Capacity (With Formula & Examples)",
        excerpt: "Paint coverage calculation determines how much area a given volume of paint will cover at a specific film thickness. This practical guide includes the formula, worked examples, and factors that affect real-world coverage.",
        date: "28 Sep 2021",
        dateISO: "2021-09-28",
        category: "Technical Guide",
        readTime: "5 min",
        author: "technical",
        relatedIndustrySlug: "paint-coatings",
        body: [
            { paragraphs: [
                "Coverage (or spreading rate) tells you how much area a litre of paint will cover at a target dry film thickness. It is essential for quoting jobs and estimating material costs accurately.",
            ]},
            { heading: "The formula", paragraphs: [
                "Theoretical coverage (m²/litre) = (Volume solids % × 10) ÷ Dry film thickness in microns. For example, a paint with 40% volume solids applied at 40 microns dry covers (40 × 10) ÷ 40 = 10 m² per litre.",
            ]},
            { heading: "Why real-world coverage is lower", paragraphs: [
                "Practical coverage is always below theoretical because of application losses — overspray, substrate porosity, surface roughness, and transfer efficiency. A practical factor of 0.6-0.8 applied to the theoretical figure gives a realistic estimate. Additives that improve flow, wetting, and rheology help the applied film stay closer to the theoretical figure.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "extenders-waterborne-coatings",
        title: "Selecting Extenders for Water-Borne Coatings: A Formulator's Guide",
        excerpt: "Extender pigments — calcium carbonate, talc, barytes, kaolin — affect opacity, sheen level, scrub resistance, and cost. This guide covers selection criteria and their interaction with dispersants.",
        date: "17 Mar 2021",
        dateISO: "2021-03-17",
        category: "Technical Guide",
        readTime: "8 min",
        author: "technical",
        relatedProduct: "Wetting & Dispersing Agents",
        relatedProductSlug: "wetting-dispersing-agents",
        relatedIndustrySlug: "paint-coatings",
        body: [
            { paragraphs: [
                "Extender pigments do far more than reduce cost. The choice between calcium carbonate, talc, barytes, kaolin, and others shapes a coating's opacity, sheen, scrub resistance, and rheology.",
            ]},
            { heading: "Matching extender to property", paragraphs: [
                "Calcium carbonate is the workhorse for cost-effective opacity and sheen control. Talc improves sag resistance and intercoat adhesion. Barytes (barium sulphate) adds density and chemical resistance for primers. Kaolin contributes opacity and improves the efficiency of titanium dioxide, letting you reduce TiO₂ loading.",
            ]},
            { heading: "The dispersant connection", paragraphs: [
                "Extenders must be properly wetted and dispersed to deliver their benefits — poorly dispersed extender flocculates, raises viscosity, and reduces scrub resistance. The right wetting and dispersing agent is as important for extenders as it is for prime pigments.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "covid-19-specialty-additive-industry",
        title: "The Impact of COVID-19 on the Specialty Additive Industry — What Changed",
        excerpt: "The pandemic disrupted supply chains, changed demand patterns, and accelerated certain industry trends. This analysis looks at lasting changes to the Indian specialty chemical market.",
        date: "24 Feb 2021",
        dateISO: "2021-02-24",
        category: "Industry Trends",
        readTime: "6 min",
        author: "team",
        body: [
            { paragraphs: [
                "The COVID-19 pandemic reshaped the specialty chemical supply chain in ways that have proven lasting. For the Indian additives industry, several shifts stand out.",
            ]},
            { heading: "Supply-chain localisation", paragraphs: [
                "Disruption to imported raw materials pushed manufacturers to qualify local alternatives and hold more strategic stock. Buyers, in turn, placed a new premium on suppliers who could guarantee continuity — accelerating a shift toward reliable domestic partners.",
            ]},
            { heading: "Demand pattern changes", paragraphs: [
                "Demand for hygiene, cleaning, and packaging-related chemistries surged, while some industrial segments paused. Manufacturers with a broad, multi-industry product range — rather than dependence on a single sector — proved most resilient.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
    {
        slug: "nanotechnology-coatings",
        title: "Nanotechnology in Coatings: Self-Cleaning, Anti-Microbial & Anti-Corrosion Applications",
        excerpt: "Nano-scale additives are enabling a new generation of functional coatings. This overview covers the most commercially relevant nanotechnology applications in the coatings industry.",
        date: "7 Nov 2020",
        dateISO: "2020-11-07",
        category: "Innovation",
        readTime: "7 min",
        author: "technical",
        relatedIndustrySlug: "paint-coatings",
        body: [
            { paragraphs: [
                "A nanometre is one-billionth of a metre — roughly the width of ten hydrogen atoms in a line, against a human hair's 50,000 nm. At that scale, materials behave differently, and coatings formulators are putting those differences to work.",
            ]},
            { heading: "Functional applications", paragraphs: [
                "Nano-titanium dioxide and nano-silica enable photocatalytic, pollution-controlling paints that break down NOx gases under UV light. UV-curable nano-coatings cure in seconds with up to 75% less energy and no VOC emissions. Nano-crystalline metallic coatings deliver markedly higher hardness and abrasion resistance than conventional finishes.",
            ]},
            { heading: "Where it's heading", paragraphs: [
                "Self-cleaning, anti-microbial, and anti-corrosion functionalities are moving from laboratory curiosities to commercial reality. As dispersant technology improves — keeping nanoparticles deagglomerated and stable in the wet paint — these functional coatings will become increasingly mainstream.",
            ]},
            { paragraphs: [SAMPLE_CTA] },
        ],
    },
];

export function getPost(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}
