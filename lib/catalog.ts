export const categories = [
  "All Products",
  "Metabolic Research",
  "Melanocortin Agonists",
  "Tissue Repair Research",
  "Nootropic Peptides",
  "Lab Supplies",
  "Skin & Cellular Research",
  "Mitochondrial Research",
  "Immune Research",
  "Growth Hormone Research",
  "Reproductive Research",
] as const;

export type Category = (typeof categories)[number];
export type Stock = "in-stock" | "out-of-stock" | "pre-order" | "unavailable" | "partner";

export type CatalogProduct = {
  sku: string;
  title: string;
  category: Exclude<Category, "All Products">;
  body: string;
  price: number;
  compareAt?: number;
  stock: Stock;
  isNew?: boolean;
  partner?: string;
};

export function productImage(item: { sku: string; title: string; category: string }) {
  const title = item.title.toLowerCase();
  if (title.includes("syringe")) return "/images/supply-syringes.png";
  if (
    title.includes("bundle") ||
    title.includes("starter kit") ||
    title.includes("kit")
  ) {
    return "/images/vial-kit-blank.png";
  }
  return "/images/vial-navy-blank.png";
}

export const catalog: CatalogProduct[] = [
  { sku: "PEP-007-10MG", title: "Retatrutide (10mg)", category: "Metabolic Research", body: "Tri-agonist research peptide studied for fat metabolism, appetite regulation, and energy expenditure.", price: 105, stock: "in-stock" },
  { sku: "BDL-001-RETA", title: "Retatrutide Starter Kit (Bundle)", category: "Metabolic Research", body: "Complete research kit. Valued at $325.96 AUD, bundled at $289.99.", price: 289.99, stock: "in-stock" },
  { sku: "PEP-011-10MG", title: "BPC-157 (10mg)", category: "Tissue Repair Research", body: "Synthetic pentadecapeptide studied for tissue repair across muscle, tendon, ligament, and gastrointestinal models.", price: 94.99, stock: "in-stock" },
  { sku: "SUP-001-3ML", title: "BAC Water (3mL)", category: "Lab Supplies", body: "Sterile 0.9% benzyl alcohol solution for reconstituting lyophilised peptides.", price: 19.99, stock: "unavailable" },
  { sku: "SUP-003-20PK", title: "Insulin Syringes (20pk)", category: "Lab Supplies", body: "U-100 syringes with 31-gauge 6mm needle and 0.5mL barrel for low-volume peptide handling.", price: 24.99, stock: "in-stock" },
  { sku: "PEP-018-10MG", title: "BPC-157 + TB-500 (10mg)", category: "Tissue Repair Research", body: "Pre-blended vial combining two widely studied tissue-repair peptides.", price: 109.99, stock: "in-stock" },
  { sku: "PEP-010-50MG", title: "GHK-Cu (50mg)", category: "Skin & Cellular Research", body: "Copper tripeptide studied for collagen synthesis, wound healing, and ageing tissue gene expression.", price: 99.99, stock: "in-stock" },
  { sku: "SUP-004-10ML", title: "BAC Water (10mL)", category: "Lab Supplies", body: "10mL bacteriostatic water for reconstituting lyophilised peptides.", price: 10, stock: "in-stock" },
  { sku: "PEP-017-10MG", title: "CJC / Ipamorelin Blend (5mg/5mg)", category: "Growth Hormone Research", body: "Pre-blend of GHRH analog and selective ghrelin agonist for synergistic GH-pulse research.", price: 140, stock: "in-stock" },
  { sku: "PEP-030-10MG", title: "Tesamorelin (10mg)", category: "Growth Hormone Research", body: "Stabilised GHRH analog studied for preferential effects on visceral adipose tissue.", price: 160, stock: "in-stock" },
  { sku: "PEP-024-20MG", title: "Retatrutide (20mg)", category: "Metabolic Research", body: "20mg vial of the same batch-verified Retatrutide used in the 10mg format.", price: 200, stock: "in-stock" },
  { sku: "PEP-008-10MG", title: "NA Semax Amidate (10mg)", category: "Nootropic Peptides", body: "N-acetyl amidated Semax research peptide studied for cognition and recovery models.", price: 80, stock: "in-stock" },
  { sku: "PEP-012-GLOW", title: "GLOW Peptide Blend (50mg)", category: "Tissue Repair Research", body: "Copper-peptide research blend (GHK-Cu / AHK-Cu) in a 50mg vial.", price: 168.99, stock: "out-of-stock" },
  { sku: "PEP-010-100MG", title: "GHK-Cu (100mg)", category: "Skin & Cellular Research", body: "Higher-capacity GHK-Cu vial for extended dermal and cellular research.", price: 110, stock: "in-stock" },
  { sku: "PEP-009-10MG", title: "Melanotan II (10mg)", category: "Melanocortin Agonists", body: "Synthetic α-MSH analogue studied for melanin synthesis and melanocortin receptor activity.", price: 85, stock: "in-stock" },
  { sku: "SUP-002-500MG", title: "NAD+ (500mg)", category: "Mitochondrial Research", body: "Nicotinamide adenine dinucleotide cofactor studied in mitochondrial energy and longevity models.", price: 70, stock: "in-stock" },
  { sku: "PEP-013-10MG", title: "NA Selank Amidate (10mg)", category: "Nootropic Peptides", body: "N-acetyl amidated Selank research peptide studied as a non-sedative anxiolytic analog.", price: 80, stock: "in-stock" },
  { sku: "PEP-019-30MG", title: "Retatrutide (30mg)", category: "Metabolic Research", body: "30mg format for extended Retatrutide research from a single batch-verified vial.", price: 300, stock: "in-stock" },
  { sku: "PEP-014-10MG", title: "MOTS-C (10mg)", category: "Mitochondrial Research", body: "Mitochondrial-derived peptide studied in metabolic and longevity research.", price: 94.99, stock: "in-stock" },
  { sku: "PEP-022-10MG", title: "KPV (10mg)", category: "Tissue Repair Research", body: "Tripeptide from α-MSH studied for mucosal and epidermal anti-inflammatory models.", price: 89.99, stock: "in-stock" },
  { sku: "PEP-031-KLOW", title: "KLOW Peptide Blend (80mg)", category: "Tissue Repair Research", body: "80mg tissue-repair peptide blend for laboratory research.", price: 185, stock: "in-stock" },
  { sku: "PEP-015-10MG", title: "TB-500 (10mg)", category: "Tissue Repair Research", body: "Synthetic fragment of thymosin beta-4 studied in muscle, tendon, and ligament repair models.", price: 129.99, stock: "in-stock" },
  { sku: "PEP-020-10MG", title: "SS-31 (10mg)", category: "Mitochondrial Research", body: "Elamipretide research peptide that localises to the inner mitochondrial membrane.", price: 89.99, compareAt: 119.99, stock: "in-stock" },
  { sku: "PEP-028-20MG", title: "Tesamorelin (20mg)", category: "Metabolic Research", body: "20mg Tesamorelin vial for body-composition and VAT research protocols.", price: 259.99, stock: "in-stock" },
  { sku: "PEP-029-20MG", title: "MOTS-C (20mg)", category: "Mitochondrial Research", body: "20mg MOTS-C format for metabolic and longevity research.", price: 140, stock: "in-stock" },
  { sku: "PEP-023-10MG", title: "Ipamorelin (10mg)", category: "Growth Hormone Research", body: "Selective ghrelin receptor agonist studied for pulsatile GH release.", price: 130, stock: "in-stock" },
  { sku: "PEP-027-10MG", title: "Epitalon (10mg)", category: "Skin & Cellular Research", body: "Tetrapeptide studied for telomerase activation and longevity models.", price: 79.99, stock: "in-stock" },
  { sku: "PEP-021-20MG", title: "Tirzepatide (20mg)", category: "Metabolic Research", body: "Dual GLP-1 / GIP incretin agonist used as a dual-agonist research benchmark.", price: 249.99, stock: "in-stock" },
  { sku: "PEP-016-10MG", title: "CJC-1295 (no DAC) (10mg)", category: "Growth Hormone Research", body: "Short-acting Mod GRF 1-29 analog for pulsatile GH-release research.", price: 104.99, stock: "out-of-stock" },
  { sku: "PEP-032-10MG", title: "DSIP (10mg)", category: "Growth Hormone Research", body: "Delta sleep-inducing peptide studied for sleep architecture and neuroendocrine modulation.", price: 95.99, stock: "in-stock" },
  { sku: "PEP-029-40MG", title: "MOTS-C (40mg)", category: "Mitochondrial Research", body: "40mg MOTS-C vial now in stock.", price: 159.99, stock: "in-stock" },
  { sku: "PEP-025-60MG", title: "Retatrutide (60mg)", category: "Metabolic Research", body: "Largest Retatrutide vial for full-length protocols, same ≥99% purity standard.", price: 585, stock: "in-stock" },
  { sku: "PEP-033-600MG", title: "Glutathione (600mg)", category: "Skin & Cellular Research", body: "Endogenous tripeptide antioxidant studied in ROS, immune, and detoxification models.", price: 79.99, stock: "in-stock" },
  { sku: "PEP-026-10MG", title: "Melanotan I (10mg)", category: "Melanocortin Agonists", body: "Selective MC1R agonist (afamelanotide) studied for melanin synthesis.", price: 79.99, stock: "in-stock" },
  { sku: "BDL-002-RETA", title: "Retatrutide Value Bundle", category: "Metabolic Research", body: "Extended-protocol kit. Valued at $525.92 AUD, bundled at $429.99.", price: 429.99, stock: "in-stock" },
  { sku: "PEP-035-10MG", title: "PT-141 (10mg)", category: "Melanocortin Agonists", body: "Bremelanotide analog studied for CNS melanocortin (MC3/MC4) activity.", price: 100, stock: "in-stock" },
  { sku: "PEP-012-70MG", title: "GLOW Peptide Blend (70mg)", category: "Tissue Repair Research", body: "Higher-capacity GLOW copper-peptide blend, now in stock.", price: 170, stock: "in-stock" },
  { sku: "PEP-021-40MG", title: "Tirzepatide (40mg)", category: "Metabolic Research", body: "40mg Tirzepatide vial for extended dual-agonist protocols.", price: 279.99, compareAt: 429.99, stock: "in-stock" },
  { sku: "PEP-021-60MG", title: "Tirzepatide (60mg)", category: "Metabolic Research", body: "60mg Tirzepatide format with the lowest cost per milligram in this line.", price: 349.99, compareAt: 529.99, stock: "in-stock" },
  { sku: "PEP-039-5MG", title: "Cagrilintide (5mg)", category: "Metabolic Research", body: "Long-acting amylin analog studied for satiety and post-meal glucose control.", price: 129.99, stock: "in-stock" },
  { sku: "PEP-039-10MG", title: "Cagrilintide (10mg)", category: "Metabolic Research", body: "10mg Cagrilintide. New arrival, currently on pre-order.", price: 229.99, stock: "pre-order", isNew: true },
  { sku: "PEP-040-5MG", title: "Thymosin Alpha-1 / TA1", category: "Immune Research", body: "28-amino-acid thymic peptide studied for T-cell and innate immune modulation.", price: 200, stock: "in-stock" },
  { sku: "PEP-041-10MG", title: "Sermorelin Acetate (10mg)", category: "Growth Hormone Research", body: "GHRH 1-29 analog studied for pulsatile endogenous GH release.", price: 239.99, stock: "pre-order", isNew: true },
  { sku: "PEP-042-10MG", title: "Oxytocin (10mg)", category: "Nootropic Peptides", body: "Nine-amino-acid neuropeptide studied in social behaviour and stress-axis research.", price: 131.99, stock: "pre-order", isNew: true },
  { sku: "PEP-043-10MG", title: "Thymalin (10mg)", category: "Immune Research", body: "Thymic peptide preparation studied for T-cell subset balance in ageing models.", price: 119.99, stock: "pre-order", isNew: true },
  { sku: "PEP-044-10MG", title: "Kisspeptin-10 (10mg)", category: "Reproductive Research", body: "KISS1-receptor agonist fragment studied for pulsatile GnRH / LH / FSH release.", price: 114.99, stock: "pre-order", isNew: true },
  { sku: "PEP-003-10MG", title: "CJC-1295 with DAC (10mg)", category: "Growth Hormone Research", body: "Albumin-binding GHRH analog with an extended 6–8 day half-life.", price: 165, stock: "in-stock" },
  { sku: "SUP-008-SYR-20PK", title: "Insulin Syringes (20pk)", category: "Lab Supplies", body: "0.5mL U-100 syringes with 31G × 6mm needle. Supplied via partner.", price: 19.99, compareAt: 24.99, stock: "partner", partner: "Partner" },
  { sku: "SUP-009-ABS-10ML", title: "BAC Water (10mL)", category: "Lab Supplies", body: "Partner-supplied 10mL bacteriostatic water.", price: 10, stock: "partner", partner: "Partner" },
  { sku: "SUP-010-ABS-20ML", title: "BAC Water (20mL)", category: "Lab Supplies", body: "Partner-supplied 20mL bacteriostatic water.", price: 20, stock: "partner", partner: "Partner" },
  { sku: "SUP-005-30ML", title: "Hospira BAC Water (30mL)", category: "Lab Supplies", body: "Hospira/Pfizer bacteriostatic water, 30mL multi-dose vial. Via partner.", price: 38.99, stock: "partner", partner: "Partner" },
  { sku: "SUP-007-NACL-30ML", title: "Hospira BAC Saline (30mL)", category: "Lab Supplies", body: "Hospira bacteriostatic 0.9% sodium chloride, 30mL. Via partner.", price: 39.99, stock: "partner", partner: "Partner" },
  { sku: "SUP-011-KIT-HOSP-SYR", title: "BAC Water + Syringes Bundle", category: "Lab Supplies", body: "2 × 30mL bacteriostatic water plus 20 insulin syringes. Via partner.", price: 82.99, compareAt: 91.98, stock: "partner", partner: "Partner" },
  { sku: "SUP-012-KIT-HOSP-4PC", title: "BAC Water, Syringes, Swabs & Sharps Kit", category: "Lab Supplies", body: "Four-item reconstitution kit. Via partner.", price: 101.99, compareAt: 114.96, stock: "partner", partner: "Partner" },
  { sku: "SUP-013-KIT-ABS-SYR", title: "BAC Water + Syringes Bundle (2 × 30mL)", category: "Lab Supplies", body: "Partner 2 × 30mL BAC water plus 20 syringes.", price: 73.99, compareAt: 82.98, stock: "partner", partner: "Partner" },
  { sku: "SUP-006-VFPRO", title: "VialFlask Pro", category: "Lab Supplies", body: "Actively cooled 0–8°C case for reconstituted peptides. Via partner.", price: 349, stock: "partner", partner: "Partner" },
  { sku: "BDL-003-NOOTROPIC", title: "Nootropic Bundle", category: "Nootropic Peptides", body: "Semax and Selank with reconstitution supplies. Valued at $175.97; bundle $154.99.", price: 154.99, stock: "in-stock" },
  { sku: "PEP-034-5MG", title: "AOD-9604 (5mg)", category: "Metabolic Research", body: "Modified hGH fragment (176–191) studied for fat-metabolism research.", price: 99.99, stock: "in-stock" },
  { sku: "PEP-036-5MG", title: "Tesamorelin (5mg)", category: "Metabolic Research", body: "5mg Tesamorelin vial. Currently out of stock.", price: 89.99, stock: "out-of-stock" },
  { sku: "PEP-037-15MG", title: "Retatrutide (15mg)", category: "Metabolic Research", body: "Mid-size Retatrutide vial between the 10mg and 20mg formats.", price: 179.99, stock: "out-of-stock" },
  { sku: "PEP-038-10MG", title: "ARA-290 (Cibinetide) (10mg)", category: "Tissue Repair Research", body: "EPO helix-B peptide studied for tissue-protective innate repair receptor activity.", price: 89.99, stock: "in-stock" },
  { sku: "SUP-005-50MG", title: "5-Amino-1MQ (50mg)", category: "Mitochondrial Research", body: "NNMT inhibitor studied in adipocyte energy metabolism and NAD+ salvage pathways.", price: 109.99, stock: "in-stock" },
  { sku: "SUP-006-5MG", title: "SLU-PP-332 (5mg)", category: "Growth Hormone Research", body: "Pan-ERR agonist studied for mitochondrial biogenesis and oxidative capacity.", price: 105.99, stock: "out-of-stock" },
  { sku: "PEP-050-322", title: "SLU-PP-322 (5mg)", category: "Mitochondrial Research", body: "ERR-family research ligand listed for oxidative-metabolism and mitochondrial models.", price: 165, stock: "in-stock" },
  { sku: "PEP-051-1MG", title: "IGF-1 (1mg)", category: "Growth Hormone Research", body: "Insulin-like growth factor-1 research peptide for receptor and tissue-growth assays.", price: 165, stock: "in-stock" },
  { sku: "PEP-052-75IU", title: "HMG (75 IU)", category: "Reproductive Research", body: "Human menopausal gonadotropin preparation listed for endocrine research protocols.", price: 110, stock: "in-stock" },
  { sku: "PEP-053-5000IU", title: "HCG (5000 IU)", category: "Reproductive Research", body: "Chorionic gonadotropin research material for LH-receptor and reproductive-axis models.", price: 120, stock: "in-stock" },
  { sku: "PEP-054-TB1", title: "TB-1", category: "Tissue Repair Research", body: "Thymosin-family research peptide studied in immune and tissue-repair models.", price: 165, stock: "in-stock" },
  { sku: "PEP-055-GHK1200", title: "GHK-1200", category: "Skin & Cellular Research", body: "High-capacity GHK copper-peptide format for extended dermal and cellular work.", price: 90, stock: "in-stock" },
  { sku: "PEP-056-TB4", title: "TB4 Full Sequence (10mg)", category: "Tissue Repair Research", body: "Full-sequence thymosin beta-4 research peptide for cytoskeletal and repair-pathway assays.", price: 150, stock: "in-stock" },
  { sku: "PEP-057-13MG", title: "Retatrutide (13mg)", category: "Metabolic Research", body: "13mg Retatrutide vial for metabolic research protocols.", price: 130, stock: "in-stock" },
  { sku: "PEP-058-40MG", title: "Retatrutide (40mg)", category: "Metabolic Research", body: "40mg Retatrutide vial for extended metabolic research protocols.", price: 385, stock: "in-stock" },
  { sku: "PEP-059-50MG", title: "Retatrutide (50mg)", category: "Metabolic Research", body: "50mg Retatrutide vial for extended metabolic research protocols.", price: 485, stock: "in-stock" },
  { sku: "PEP-060-GHRP6", title: "GHRP-6 (10mg)", category: "Growth Hormone Research", body: "Ghrelin-mimetic hexapeptide studied for GH-pulse research.", price: 70, stock: "in-stock" },
  { sku: "PEP-061-IPA5", title: "Ipamorelin (5mg)", category: "Growth Hormone Research", body: "Selective ghrelin receptor agonist studied for pulsatile GH release.", price: 85, stock: "in-stock" },
  { sku: "PEP-062-TESIPA", title: "Tesamorelin / Ipamorelin (10mg/5mg)", category: "Growth Hormone Research", body: "Pre-blend of Tesamorelin and Ipamorelin for combined GHRH / ghrelin-agonist research.", price: 190, stock: "in-stock" },
  { sku: "PEP-063-BPC13", title: "BPC-157 (13mg)", category: "Tissue Repair Research", body: "Synthetic pentadecapeptide studied for tissue-repair models.", price: 140, stock: "in-stock" },
  { sku: "PEP-064-BPC20", title: "BPC-157 (20mg)", category: "Tissue Repair Research", body: "20mg BPC-157 vial for extended tissue-repair research.", price: 185, stock: "in-stock" },
  { sku: "PEP-065-TB12", title: "TB-500 (12mg)", category: "Tissue Repair Research", body: "Synthetic thymosin beta-4 fragment studied in muscle, tendon, and ligament models.", price: 140, stock: "in-stock" },
  { sku: "PEP-066-TB20", title: "TB-500 (20mg)", category: "Tissue Repair Research", body: "20mg TB-500 vial for extended tissue-repair research.", price: 185, stock: "in-stock" },
  { sku: "PEP-067-BLEND55", title: "TB-500 / BPC-157 (5mg/5mg)", category: "Tissue Repair Research", body: "Pre-blended tissue-repair peptides in a 5mg/5mg vial.", price: 135, stock: "in-stock" },
  { sku: "PEP-068-BLEND1010", title: "TB-500 / BPC-157 (10mg/10mg)", category: "Tissue Repair Research", body: "Pre-blended tissue-repair peptides in a 10mg/10mg vial.", price: 175, stock: "in-stock" },
  { sku: "SUP-015-NAD1000", title: "NAD+ (1000mg)", category: "Mitochondrial Research", body: "Higher-capacity NAD+ cofactor for mitochondrial energy research.", price: 120, stock: "in-stock" },
  { sku: "PEP-069-SS3150", title: "SS-31 (50mg)", category: "Mitochondrial Research", body: "Elamipretide research peptide at 50mg for mitochondrial-membrane studies.", price: 160, stock: "in-stock" },
  { sku: "PEP-070-HCG10K", title: "HCG (10000 IU)", category: "Reproductive Research", body: "Chorionic gonadotropin research material for LH-receptor and reproductive-axis models.", price: 160, stock: "in-stock" },
  { sku: "SUP-016-CIALIS", title: "Cialis Capsules (50 × 20mg)", category: "Reproductive Research", body: "Tadalafil 20mg capsules listed for laboratory research only. Not a medicine and not for human use.", price: 100, stock: "in-stock" },
  { sku: "PEP-071-WAK", title: "Waklert 150mg (10 tabs)", category: "Nootropic Peptides", body: "Armodafinil 150mg tablets listed for laboratory research only. Not a medicine and not for human use.", price: 80, stock: "in-stock" },
  { sku: "SUP-017-BAC20", title: "BAC Water (20mL)", category: "Lab Supplies", body: "20mL bacteriostatic water for reconstituting lyophilised peptides.", price: 20, stock: "in-stock" },
];

export function getProduct(sku: string) {
  return catalog.find((item) => item.sku === sku);
}

export function splitProductTitle(title: string) {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (match) return { name: match[1], strength: match[2] };
  return { name: title, strength: "" };
}

export function familyKey(title: string) {
  return title.replace(/\s*\([^)]+\)\s*$/, "").trim().toLowerCase();
}

export function relatedFormats(item: CatalogProduct) {
  const key = familyKey(item.title);
  const matches = catalog.filter((entry) => familyKey(entry.title) === key);
  return matches.length > 1 ? matches : [item];
}

export const featuredSkus = [
  "PEP-010-50MG",
  "PEP-007-10MG",
  "PEP-017-10MG",
  "PEP-030-10MG",
] as const;

export const catalogStats = {
  total: catalog.length,
  available: catalog.filter((p) => p.stock === "in-stock" || p.stock === "pre-order").length,
};
