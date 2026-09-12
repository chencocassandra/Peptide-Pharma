export const nav = [
  { href: "/", label: "Home" },
  { href: "/science", label: "Science" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const pipelineStages = [
  "Discovery",
  "Preclinical",
  "Phase I",
  "Phase II",
] as const;

export type Stage = (typeof pipelineStages)[number];

export const programs = [
  {
    id: "AXP-114",
    modality: "Dual incretin agonist",
    indication: "Type 2 diabetes & obesity",
    type: "Long-acting peptide",
    stage: "Phase II" as Stage,
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a long-acting metabolic incretin peptide",
  },
  {
    id: "AXP-207",
    modality: "Selective GLP-2 analog",
    indication: "Short bowel syndrome",
    type: "Stabilized peptide",
    stage: "Phase I" as Stage,
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a helical GLP-family peptide analog",
  },
  {
    id: "AXP-330",
    modality: "Host-defense mimetic",
    indication: "Resistant Gram-negative infection",
    type: "Cyclic peptide",
    stage: "Preclinical" as Stage,
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a cyclic host-defense peptide",
  },
  {
    id: "AXP-408",
    modality: "SSTR2 radioligand conjugate",
    indication: "Neuroendocrine tumors",
    type: "Peptide-drug conjugate",
    stage: "Preclinical" as Stage,
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a peptide-drug conjugate",
  },
  {
    id: "AXP-512",
    modality: "Amylin receptor agonist",
    indication: "Metabolic dysfunction",
    type: "Long-acting peptide",
    stage: "Discovery" as Stage,
    image: "/images/vial-navy-blank.png",
    alt: "Research vials of a folded amylin-receptor agonist peptide",
  },
];

export const disciplines = [
  {
    n: "01",
    title: "Metabolic peptides",
    body: "Incretin and glucagon-family agonists engineered for receptor selectivity and extended half-life in metabolic disease.",
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a metabolic incretin peptide",
  },
  {
    n: "02",
    title: "Antimicrobial peptides",
    body: "Host-defense scaffolds optimized for membrane selectivity to address multidrug-resistant pathogens.",
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of antimicrobial peptides",
  },
  {
    n: "03",
    title: "Targeted conjugates",
    body: "Peptide-drug conjugates that deliver cytotoxic and radioligand payloads to receptor-defined tissue.",
    image: "/images/vial-navy-blank.png",
    alt: "Research vial of a targeting peptide conjugate",
  },
  {
    n: "04",
    title: "Structural biology",
    body: "Cryo-EM and NMR characterization of peptide-receptor complexes to guide rational sequence design.",
    image: "/images/vial-navy-blank.png",
    alt: "Research vial used in structural peptide studies",
  },
];

export const platforms = [
  {
    title: "Rational design",
    body: "Structure-guided sequence engineering using cryo-EM, NMR, and molecular dynamics to tune receptor selectivity.",
  },
  {
    title: "Half-life extension",
    body: "Lipidation, cyclization, and backbone modification strategies that extend circulation while preserving potency.",
  },
  {
    title: "Conjugation chemistry",
    body: "Site-specific linkers that pair targeting peptides with cytotoxic, imaging, and radioligand payloads.",
  },
];

export const process = [
  {
    n: "1",
    title: "Design",
    body: "Rational sequence design informed by receptor structure and computational modeling.",
  },
  {
    n: "2",
    title: "Synthesize",
    body: "Solid-phase synthesis and purification with mass-spectrometry verified quality control.",
  },
  {
    n: "3",
    title: "Characterize",
    body: "Binding, stability, and structural studies define each candidate before it advances.",
  },
  {
    n: "4",
    title: "Translate",
    body: "Pharmacokinetic and preclinical models bridge the gap toward the clinic.",
  },
];

export const leaders = [
  {
    initials: "EM",
    name: "Dr. Elena Marchetti",
    role: "Director & Principal Investigator",
    focus: "Peptide chemistry, metabolic disease",
  },
  {
    initials: "RD",
    name: "Dr. Rahul Desai",
    role: "Head of Structural Biology",
    focus: "Cryo-EM, receptor complexes",
  },
  {
    initials: "SN",
    name: "Dr. Sofia Nwosu",
    role: "Head of Translational Science",
    focus: "Pharmacokinetics, preclinical models",
  },
  {
    initials: "AH",
    name: "Dr. Anders Holt",
    role: "Head of Analytical Chemistry",
    focus: "Mass spectrometry, QC methods",
  },
];

export const values = [
  {
    title: "Rigor first",
    body: "Every claim is grounded in reproducible data and transparent methods.",
  },
  {
    title: "Open collaboration",
    body: "We publish, share standards, and partner across institutions and industry.",
  },
  {
    title: "Patient purpose",
    body: "Our science is measured by the unmet needs it can eventually address.",
  },
];
