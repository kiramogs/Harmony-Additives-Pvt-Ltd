export interface Industry {
    slug: string;
    name: string;
    count: number;
    shortDesc: string;
    challenges: string[];
    products: { name: string; slug: string }[];
    faq: { q: string; a: string }[];
    metaTitle: string;
    metaDesc: string;
    heroSubtitle: string;
    eyebrow: string;
    fullDesc: string[];
}

export const industries: Industry[] = [
    {
        slug: "paint-coatings",
        name: "Paint & Coatings",
        count: 119,
        shortDesc: "Defoamers, dispersants, and rheology modifiers for water-based and solvent-based paint systems.",
        metaTitle: "Chemical Additives for Paint & Coatings",
        metaDesc: "Specialty chemical additives for paint & coatings: defoamers, wetting agents, thickeners & surface enhancers for water-based and solvent-based systems. Mumbai manufacturer since 1996.",
        heroSubtitle: "119 additives for water-based and solvent-based paint systems — defoamers, wetting & dispersing agents, thickeners, and surface property enhancers.",
        eyebrow: "119 Products · Water-Based · Solvent-Based",
        challenges: [
            "Foam during high-speed dispersion and application by brush, roller, or spray",
            "Poor pigment wetting leading to colour development failures and flooding/floating",
            "Pigment settling during storage causing hard cake",
            "Sagging on vertical surfaces during and after application",
            "Leveling defects including brush marks and orange peel in high-gloss coatings",
            "Scratch and scuff marks on the dried film surface",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Thickeners & Anti-Settling Agents", slug: "thickeners-anti-settling-agents" },
            { name: "Surface Property Enhancers", slug: "surface-property-enhancers" },
        ],
        faq: [
            {
                q: "Which defoamer is best for water-based architectural paints?",
                a: "Polyether and silicone emulsion defoamers are most effective in aqueous architectural paints. The right choice depends on your resin type (acrylic, vinyl acetate, alkyd emulsion) and application method. Harmony Additives offers free technical guidance to help you select the correct grade.",
            },
            {
                q: "How do I prevent pigment settling in my paint formulation?",
                a: "Anti-settling agents create a weak gel structure at rest that suspends pigments without affecting flow during application. Used alongside the right dispersant, they prevent hard cake formation during storage while maintaining good in-can appearance.",
            },
            {
                q: "Can your additives help me achieve a high-gloss paint finish?",
                a: "Yes. A combination of polymeric dispersant (for pigment fineness), a silicone leveling agent (for surface flow), and a well-matched defoamer (to prevent pinholes and craters) is the standard approach to high-gloss paint formulation. Our chemists can recommend a compatible additive package.",
            },
            {
                q: "Do you supply additives for exterior weatherproof coatings?",
                a: "Yes. Our defoamers and dispersants are used in exterior emulsion paints across India and in our export markets. We can recommend grades with proven outdoor durability.",
            },
        ],
        fullDesc: [
            "The paint and coatings industry is Harmony Additives' core market — 119 of our 173 products are formulated or regularly used in paint applications. We supply to manufacturers of architectural emulsion paints, industrial protective coatings, wood lacquers, automotive refinish paints, and specialty coatings including road marking and anti-corrosion systems.",
            "Paint formulation is a multi-component balancing act. Adding a defoamer to suppress mixing-induced foam must not cause cratering in the dried film. The dispersant that enables a fine pigment grind must be compatible with the thickener that controls sagging. Our chemists understand these interdependencies and often recommend an integrated additive package rather than individual products.",
            "We supply to both water-based and solvent-based paint manufacturers. Our defoamers span silicone, mineral-oil, and polyether types. Our dispersants cover anionic and polymeric options for inorganic and organic pigment systems. Our thickeners include HEC, HASE, and HEUR associative types for different viscosity profiles. And our surface property enhancers — leveling agents, wax dispersions, and slip additives — complete the formulator's toolkit.",
        ],
    },
    {
        slug: "printing-inks",
        name: "Printing Inks",
        count: 96,
        shortDesc: "Dispersing agents and flow modifiers for offset, flexographic, and gravure ink formulations.",
        metaTitle: "Chemical Additives for Printing Inks",
        metaDesc: "Specialty additives for printing inks: dispersing agents, defoamers & surface modifiers for offset, flexographic & gravure inks. Mumbai manufacturer since 1996.",
        heroSubtitle: "96 additives for offset, flexographic, gravure, and digital ink systems — dispersants, defoamers, flow agents, and surface modifiers.",
        eyebrow: "96 Products · Offset · Flexo · Gravure",
        challenges: [
            "Foam during high-speed ink manufacturing and printing",
            "Poor pigment dispersion leading to weak colour strength and haze",
            "Ink misting and spray at high press speeds",
            "Slow ink drying on non-absorbent substrates",
            "Surface defects including pinholes, craters, and fish-eyes",
            "Rub resistance and scuff marks on printed film",
        ],
        products: [
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Surface Property Enhancers", slug: "surface-property-enhancers" },
            { name: "Thickeners & Anti-Settling Agents", slug: "thickeners-anti-settling-agents" },
        ],
        faq: [
            {
                q: "Which dispersing agents work best for carbon black in flexographic inks?",
                a: "Polymeric dispersants with anchoring groups that bond to carbon black surface are most effective. They reduce grinding time significantly and prevent flocculation. The right grade depends on your binder system (water-based or solvent-based) and carbon black grade.",
            },
            {
                q: "Do you supply defoamers for high-speed flexographic printing?",
                a: "Yes. We supply silicone and polyether defoamers for aqueous flexographic inks that are compatible with high-speed anilox roll printing without causing adhesion failures between printed layers.",
            },
            {
                q: "How can I improve rub resistance in my printed ink film?",
                a: "Wax additives — particularly polyethylene and PTFE wax dispersions from our Surface Property Enhancers range — are the standard solution for rub and scuff resistance in printing inks.",
            },
        ],
        fullDesc: [
            "Printing inks present formulation challenges distinct from paints — higher pigment concentrations, low viscosity aqueous or solvent systems, extreme shear rates at press, and demanding substrate wetting requirements. Our 96-product range for printing inks covers the specific additive needs of flexographic, gravure, offset, and screen printing applications.",
            "For aqueous flexographic inks, our wetting and dispersing agents reduce pigment grinding time and improve colour strength. Our defoamers handle the foam generated during high-speed mixing and application without causing print defects. Our surface property enhancers improve rub resistance and surface gloss in the final printed film.",
            "For gravure and offset inks, we supply solvent-compatible dispersants and flow additives that maintain ink stability at the high pigment loadings typical of these print processes. Our specialty additives range also includes products developed for niche applications including UV-curable and EB-curable ink systems.",
        ],
    },
    {
        slug: "pulp-paper",
        name: "Pulp & Paper",
        count: 48,
        shortDesc: "Process defoamers and retention aids that reduce downtime and improve sheet formation quality.",
        metaTitle: "Chemical Additives for Pulp & Paper",
        metaDesc: "Specialty additives for pulp & paper mills: process defoamers for wet-end, size press & coating colour. Mumbai manufacturer since 1996. ISO certified.",
        heroSubtitle: "48 additives for pulp mills, paper machines, size press, and coating colour operations — process defoamers, retention aids, and coating additives.",
        eyebrow: "48 Products · Wet-End · Size Press · Coating",
        challenges: [
            "Foam in the wet-end causing sheet breaks and quality defects",
            "Foam in the coating colour reducing blade coater efficiency",
            "Poor retention of fines and fillers increasing effluent load",
            "Defoamer contamination causing coating mottle and gloss problems",
            "Silicone-induced repellency issues in subsequent converting operations",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "What causes foam problems in paper mill wet-end systems?",
                a: "Foam in the wet-end is caused by surface-active contaminants from wood pulp (pitch, fatty acids, resins) and from process chemicals including sizing agents, biocides, and drainage aids. High-shear mixing and turbulence at the headbox entrain air that, without defoamers, forms stable foam causing wire holes and sheet defects.",
            },
            {
                q: "Can your defoamers be used in coating colour?",
                a: "Yes. We supply defoamers specifically formulated for coating colour applications — these are compatible with kaolin clay, calcium carbonate, and latex binder systems and do not cause coating mottle or gloss reduction at recommended dosage.",
            },
            {
                q: "Do you offer silicone-free defoamers for paper applications?",
                a: "Yes. For applications where silicone contamination is a concern (such as paper used in food contact packaging or in printing), we supply silicone-free polyether and mineral-oil-based defoamers.",
            },
        ],
        fullDesc: [
            "The pulp and paper industry operates some of the most foam-intensive processes in chemical manufacturing. Paper machines generate foam at multiple points — the pulp chest, screens, cleaners, the headbox, and the forming section — and foam control is critical to machine runnability and sheet quality.",
            "Harmony Additives supplies 48 products to the pulp and paper sector, primarily process defoamers for wet-end and coating colour applications. Our paper-grade defoamers are available in silicone and silicone-free versions to suit different paper grades and converting requirements.",
            "Our wetting agents for size press applications improve surface sizing solution penetration into the paper sheet, enabling more efficient starch application and better surface strength development. For coating operations, our dispersants help maintain stable coating colour with consistent viscosity and particle size distribution.",
        ],
    },
    {
        slug: "textile",
        name: "Textile",
        count: 47,
        shortDesc: "Wetting agents, softeners, and finishing chemicals for dyeing and fabric treatment.",
        metaTitle: "Chemical Additives for Textile Processing",
        metaDesc: "Specialty additives for textile processing: wetting agents, defoamers & softeners for dyeing, scouring & finishing. Mumbai manufacturer since 1996. ISO certified.",
        heroSubtitle: "47 additives for textile dyeing, scouring, printing, and finishing — wetting agents, defoamers, and process chemicals for fabric treatment.",
        eyebrow: "47 Products · Dyeing · Scouring · Finishing",
        challenges: [
            "Foam during high-temperature jet dyeing causing uneven liquor circulation",
            "Poor wetting of hydrophobic synthetic fabrics in scouring baths",
            "Foam in printing paste transfer lines and printing tables",
            "Fading and uneven shade in dyeing from inadequate leveling",
            "High chemical oxygen demand (COD) in effluent from conventional surfactants",
        ],
        products: [
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Emulsifiers", slug: "emulsifiers" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "Which wetting agent is suitable for jet dyeing of polyester?",
                a: "Low-foaming non-ionic wetting agents are preferred for jet dyeing applications where high-speed liquor circulation would cause uncontrollable foam with conventional surfactants. We supply specific low-foam grades designed for high-temperature jet dyeing machines.",
            },
            {
                q: "Do your defoamers work in high-temperature dyeing baths above 130°C?",
                a: "Yes. We supply high-temperature stable defoamers for pressurised jet dyeing baths operating at 120–135°C. These are specifically formulated to remain effective under the high shear and temperature conditions of modern dyeing equipment.",
            },
        ],
        fullDesc: [
            "Textile processing — from fibre preparation through dyeing, printing, and finishing — involves complex aqueous chemistry where additives play a critical role in process efficiency, product quality, and environmental compliance. Harmony Additives supplies 47 products to the textile sector.",
            "Our wetting agents for textile scouring accelerate bath penetration into dense fabric constructions, reducing scouring time and temperature. In dyeing baths, our low-foam surfactants enable efficient liquor circulation without the foam problems that cause uneven shade. In textile printing, our defoamers control foam in transfer lines and on printing tables.",
            "For effluent treatment, our ETP additives help textile mills meet discharge standards before wastewater leaves the plant. This is increasingly important as environmental regulations tighten for Indian textile manufacturers.",
        ],
    },
    {
        slug: "construction",
        name: "Construction Chemicals",
        count: 37,
        shortDesc: "Concrete admixtures, waterproofing additives, and foam-control agents for ready-mix and precast.",
        metaTitle: "Chemical Additives for Construction",
        metaDesc: "Specialty additives for construction chemicals: defoamers, admixtures & processing aids for concrete, waterproofing, grouts & tile adhesives. Mumbai manufacturer since 1996.",
        heroSubtitle: "37 additives for ready-mix concrete, precast, waterproofing membranes, tile adhesives, and construction chemical systems.",
        eyebrow: "37 Products · Concrete · Waterproofing · Tile Adhesives",
        challenges: [
            "Air entrainment in admixtures causing strength reduction in concrete",
            "Foam during mixing of waterproofing compound slurries",
            "Poor wetting of cement particles leading to incomplete hydration",
            "Viscosity control in self-leveling screeds and grouts",
            "Shelf-life instability in water-borne construction chemical products",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Thickeners & Anti-Settling Agents", slug: "thickeners-anti-settling-agents" },
            { name: "Emulsifiers", slug: "emulsifiers" },
        ],
        faq: [
            {
                q: "Which defoamer is suitable for superplasticizer admixture manufacturing?",
                a: "Polyether and silicone-free defoamers are typically preferred in admixture manufacturing to avoid silicone contamination that could affect concrete surface appearance. The right grade depends on your superplasticizer chemistry (polycarboxylate, naphthalene sulphonate, or melamine sulphonate).",
            },
            {
                q: "Do you supply additives for waterproofing membranes?",
                a: "Yes. We supply defoamers and wetting agents for bitumen emulsion and polymer-modified waterproofing systems. These help control foam during manufacturing and improve the application properties of the final product.",
            },
        ],
        fullDesc: [
            "Construction chemicals — including concrete admixtures, waterproofing compounds, tile adhesives, grouts, and repair mortars — are a growing application area for specialty chemical additives as Indian construction activity expands. Harmony Additives supplies 37 products to construction chemical manufacturers.",
            "Foam is the most common problem in construction chemical manufacturing. Air entrained during high-speed mixing of admixtures, waterproofing slurries, and grouts reduces product quality and creates problems during application. Our defoamers for construction applications are formulated to work in cement-based and polymer systems without affecting setting time or adhesion.",
            "Our dispersants help in grinding of mineral fillers and pigments used in construction chemical formulations. Our thickeners contribute to sag resistance and workability of tile adhesives, putties, and finishing compounds.",
        ],
    },
    {
        slug: "agrochemicals",
        name: "Agrochemicals",
        count: 52,
        shortDesc: "Emulsifiers and adjuvants for crop-protection concentrate and ready-to-use formulations.",
        metaTitle: "Chemical Additives for Agrochemicals",
        metaDesc: "Specialty additives for agrochemical formulations: emulsifiers, wetting agents & dispersants for ECs, SCs & WPs. Mumbai manufacturer since 1996. ISO certified.",
        heroSubtitle: "52 additives for crop-protection formulations — emulsifiers, wetting agents, and dispersants for emulsifiable concentrates, suspension concentrates, and wettable powders.",
        eyebrow: "52 Products · EC · SC · WP Formulations",
        challenges: [
            "Emulsion stability under dilution and storage for emulsifiable concentrates",
            "Poor suspension stability and particle size growth in suspension concentrates",
            "Inadequate spreading and sticking of crop-protection products on waxy leaf surfaces",
            "Phase separation in liquid formulations during temperature cycling",
            "Foam during spray tank preparation limiting application efficiency",
        ],
        products: [
            { name: "Emulsifiers", slug: "emulsifiers" },
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "How do I choose the right emulsifier for an emulsifiable concentrate (EC)?",
                a: "The right emulsifier system for an EC depends on the active ingredient's polarity, the solvent system, and the required dilution ratio. We use HLB theory and compatibility testing to identify the optimal single emulsifier or emulsifier blend for your specific formulation.",
            },
            {
                q: "What wetting agents are suitable for wettable powder (WP) formulations?",
                a: "Anionic wetting agents (sodium lignosulphonate, sodium alkyl naphthalene sulphonate) and non-ionic alkoxylates are most commonly used in wettable powder formulations to ensure rapid and complete wetting when added to the spray tank.",
            },
            {
                q: "Can you supply low-foam wetting agents for spray tank preparation?",
                a: "Yes. We supply low-foam and defoaming wetting agents designed specifically for spray applications where excessive foam would interfere with filling and accurate metering of the spray tank.",
            },
        ],
        fullDesc: [
            "Agrochemical formulation is a complex specialty where the choice of excipient — including emulsifiers, dispersants, wetting agents, and antifoams — directly determines the efficacy, stability, and safety of the final crop-protection product. Harmony Additives supplies 52 products to the Indian agrochemical industry.",
            "Our emulsifier range covers the full HLB spectrum required for emulsifiable concentrates (ECs) in both pyrethroid, organophosphate, and new-generation active ingredient systems. Our dispersants for suspension concentrates (SCs) provide steric stabilization that maintains particle size over the required 2-year shelf life.",
            "For wettable powders (WPs) and water-dispersible granules (WDGs), our anionic and non-ionic wetting agents ensure rapid reconstitution when added to the spray tank. We also supply adjuvant components for tank-mix adjuvant systems that improve coverage and uptake on difficult waxy surfaces.",
        ],
    },
    {
        slug: "water-treatment",
        name: "Water Treatment",
        count: 30,
        shortDesc: "Antifoams and flocculants for effluent treatment plants and industrial wastewater systems.",
        metaTitle: "Chemical Additives for Water Treatment & ETP",
        metaDesc: "Specialty additives for effluent treatment plants (ETP) and industrial wastewater: defoamers, antifoams & process aids. Mumbai manufacturer since 1996.",
        heroSubtitle: "30 additives for effluent treatment plants, cooling water systems, and industrial wastewater — defoamers, antifoams, and process chemicals.",
        eyebrow: "30 Products · ETP · Cooling Water · Industrial WWT",
        challenges: [
            "Uncontrollable foam in aeration basins preventing efficient oxygen transfer",
            "Foam carryover from ETP tanks into discharge channels",
            "Foam in cooling water towers reducing heat transfer efficiency",
            "High COD contributions from conventional antifoam surfactants",
            "Compatibility issues between antifoams and coagulants/flocculants",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "Which defoamer is best for effluent treatment plant (ETP) aeration basins?",
                a: "Silicone-free polyether and mineral-oil defoamers are preferred in biological ETP systems to avoid silicone toxicity to microorganisms. The defoamer must be biodegradable and compatible with the wastewater chemistry. We supply ETP-specific defoamers that meet these requirements.",
            },
            {
                q: "Can your defoamers handle high-pH industrial wastewater?",
                a: "Yes. We supply alkali-stable defoamers for high-pH wastewater systems common in textile, paper, and chemical industry ETPs. The correct grade depends on pH range and temperature of the wastewater.",
            },
        ],
        fullDesc: [
            "Industrial wastewater treatment is a growing application for defoamers and specialty process chemicals as regulatory standards for effluent discharge tighten across India. Foam is a serious operational problem in ETPs — it inhibits oxygen transfer in aeration basins, creates spillage risks, and is visible evidence of treatment failures.",
            "Harmony Additives supplies 30 products to the water treatment sector, primarily foam-control agents for ETP and cooling water applications. Our ETP defoamers are formulated to be effective at low dosage, compatible with biological treatment processes, and biodegradable to minimize contribution to final COD.",
            "We supply to ETP installations across multiple industries including textile, pharmaceutical, paper, and chemical manufacturing. Our specialty additives team can develop custom formulations for challenging wastewater chemistries.",
        ],
    },
    {
        slug: "household-products",
        name: "Household Products",
        count: 16,
        shortDesc: "Surfactants and foam-control additives for liquid detergents, cleaners, and personal-care products.",
        metaTitle: "Chemical Additives for Household Products",
        metaDesc: "Specialty additives for household cleaners & detergents: surfactants, defoamers & emulsifiers for stable, efficient household formulations. Mumbai manufacturer since 1996.",
        heroSubtitle: "16 additives for liquid detergents, surface cleaners, dishwash products, and household personal care formulations.",
        eyebrow: "16 Products · Detergents · Cleaners · Personal Care",
        challenges: [
            "Excess foam in dishwashers and automatic washing machines",
            "Stability of fragrance and dye in liquid formulations",
            "Compatibility between anionic surfactants and other formulation components",
            "Regulatory compliance for cleaning product ingredients",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Emulsifiers", slug: "emulsifiers" },
            { name: "Wetting & Dispersing Agents", slug: "wetting-dispersing-agents" },
        ],
        faq: [
            {
                q: "Do you supply low-foam surfactants for automatic dishwashers?",
                a: "Yes. We supply low-foam and foam-suppressing additives for automatic dishwasher and industrial ware-washing formulations where foam can impair cleaning action and overflow the machine.",
            },
        ],
        fullDesc: [
            "Household product formulation requires careful selection of surfactants, defoamers, and emulsifiers that deliver cleaning performance while meeting safety, environmental, and regulatory requirements. Harmony Additives supplies 16 products to household product manufacturers.",
            "Our surfactant-based products for household applications include wetting agents for hard-surface cleaners, emulsifiers for fragrance incorporation, and defoamers for machine-wash formulations. We supply to manufacturers of liquid detergents, floor cleaners, toilet bowl cleaners, and dishwash products.",
        ],
    },
    {
        slug: "lubricants-oils",
        name: "Lubricants & Oils",
        count: 14,
        shortDesc: "Emulsifiers and corrosion inhibitors for metalworking fluids and industrial oil emulsions.",
        metaTitle: "Additives for Lubricants & Metalworking",
        metaDesc: "Specialty additives for metalworking fluids & lubricants: emulsifiers & process chemicals for stable oil-in-water cutting fluids. Mumbai manufacturer since 1996.",
        heroSubtitle: "14 additives for metalworking fluids, industrial lubricants, and oil emulsions — emulsifiers and process chemicals for stable, effective formulations.",
        eyebrow: "14 Products · Metalworking · Cutting Fluids · Lubricants",
        challenges: [
            "Emulsion stability over time and under hard water conditions",
            "Biological degradation and microbial growth in water-miscible cutting fluids",
            "Foam during high-pressure coolant delivery",
            "Corrosion protection of ferrous metals in contact with the fluid",
        ],
        products: [
            { name: "Emulsifiers", slug: "emulsifiers" },
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "Which emulsifier is suitable for soluble cutting oil (SCO) formulations?",
                a: "For soluble cutting oils, a blend of anionic (such as sodium petroleum sulphonate) and non-ionic emulsifiers is typically used to achieve hard-water stability while maintaining acceptable emulsion particle size. The exact blend depends on the base oil and desired dilution ratio.",
            },
        ],
        fullDesc: [
            "Metalworking fluids — cutting oils, grinding fluids, and forming lubricants — rely on emulsifiers to maintain stable oil-in-water or water-in-oil emulsions under the mechanical and thermal stress of metal cutting operations. Harmony Additives supplies 14 products to the lubricants and metalworking fluids sector.",
            "Our emulsifier range includes products for neat cutting oil emulsification, used by machining shops and fluid manufacturers who produce soluble cutting oils (SCO) for CNC machining centres, grinding machines, and transfer lines.",
        ],
    },
    {
        slug: "starch-adhesives",
        name: "Starch & Adhesives",
        count: 41,
        shortDesc: "Processing aids and biocides for starch-based adhesives and corrugated board manufacturing.",
        metaTitle: "Chemical Additives for Starch & Adhesives",
        metaDesc: "Specialty additives for starch adhesives & corrugated board: defoamers, processing aids & biocides. Mumbai manufacturer since 1996. ISO certified.",
        heroSubtitle: "41 additives for starch-based adhesive systems, corrugating board manufacturing, and paper packaging converting operations.",
        eyebrow: "41 Products · Starch Adhesives · Corrugating · Paper Converting",
        challenges: [
            "Foam in starch cooking kettles and adhesive mixing tanks",
            "Microbial degradation of starch adhesive during storage",
            "Viscosity instability in starch paste during corrugating operations",
            "Adhesive failure at high machine speeds in corrugator",
            "Poor bonding on recycled fibre liners with high wax content",
        ],
        products: [
            { name: "Defoamers & Antifoams", slug: "defoamers" },
            { name: "Thickeners & Anti-Settling Agents", slug: "thickeners-anti-settling-agents" },
            { name: "Specialty & Tailor-Made Additives", slug: "specialty-tailor-made" },
        ],
        faq: [
            {
                q: "Which defoamer is best for starch adhesive used in corrugating?",
                a: "Mineral-oil and silicone emulsion defoamers are most effective in starch adhesive systems. The defoamer must be compatible with the starch paste chemistry and should not cause adhesive surface defects. We supply specific grades tested for corrugating starch applications.",
            },
            {
                q: "Do you supply biocides or preservatives for starch adhesive?",
                a: "We supply specialty additives for starch adhesive preservation as part of our Specialty & Tailor-Made range. These help extend the pot life of starch paste in storage tanks, reducing microbial spoilage.",
            },
        ],
        fullDesc: [
            "Starch-based adhesives are a major application in corrugated board manufacturing — India's packaging industry consumes millions of tonnes of corrugated board annually. The starch adhesive must have precise viscosity, good bond strength at high machine speeds, and adequate pot life in the adhesive kitchen.",
            "Harmony Additives supplies 41 products to starch adhesive and corrugating board manufacturers, primarily defoamers for starch cooking and adhesive mixing operations, and specialty additives for adhesive performance improvement.",
            "Foam is the most common problem in starch adhesive manufacturing — it forms during cooking and can cause adhesive starvation on the corrugating medium if not controlled. Our defoamers for starch systems are effective at low dosage and do not interfere with adhesive bond strength.",
        ],
    },
];

export function getIndustry(slug: string): Industry | undefined {
    return industries.find((i) => i.slug === slug);
}
