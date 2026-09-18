import { categoryHref, type ShopCategory } from "@/lib/catalog";

export const announcementLines = [
  "Free Express Shipping Australia-Wide — No Minimum Spend.",
  "Australian-held research vials. Batch CoA available on request.",
] as const;

export const heroVials = [
  {
    sku: "PEP-007-10MG",
    name: "Retatrutide",
    strength: "10mg",
    className: "left-[18%] top-[8%] w-[58%] sm:w-[52%]",
    speed: 0.05,
    duration: "5.4s",
    delay: "0s",
    travel: "-11px",
  },
  {
    sku: "PEP-010-50MG",
    name: "GHK-Cu",
    strength: "50mg",
    className: "-left-2 bottom-[4%] w-[42%] sm:w-[38%]",
    speed: -0.035,
    duration: "4.6s",
    delay: "0.6s",
    travel: "-8px",
  },
  {
    sku: "PEP-011-10MG",
    name: "BPC-157",
    strength: "10mg",
    className: "right-[-4%] top-[18%] w-[40%] sm:w-[36%]",
    speed: 0.08,
    duration: "6s",
    delay: "1.1s",
    travel: "-12px",
  },
  {
    sku: "PEP-030-10MG",
    name: "Tesamorelin",
    strength: "10mg",
    className: "right-[8%] bottom-[-2%] w-[34%] sm:w-[30%]",
    speed: 0.025,
    duration: "5s",
    delay: "1.8s",
    travel: "-9px",
  },
] as const;

export const trustPoints = [
  {
    title: "Free express within Australia",
    body: "Research orders currently ship express Australia-wide with no spend minimum.",
    icon: "truck" as const,
  },
  {
    title: "HPLC before dispatch",
    body: "Batches are checked before they leave, and Certificates of Analysis are issued on request.",
    icon: "flask" as const,
  },
  {
    title: "Australian-held stock",
    body: "Vials are packed from inventory we hold in Australia, not drop-shipped from overseas depots.",
    icon: "pin" as const,
  },
  {
    title: "Research-use listings only",
    body: "Every SKU is a laboratory research chemical. Nothing here is sold as a medicine or supplement.",
    icon: "shield" as const,
  },
] as const;

export const categoryCards: {
  category: ShopCategory;
  name: string;
  blurb: string;
  sku: string;
  href: string;
}[] = [
  {
    category: "Metabolic Research",
    name: "Metabolic Research",
    blurb: "Incretin and adipose-axis peptides held as lyophilised research vials.",
    sku: "PEP-007-10MG",
    href: categoryHref("Metabolic Research"),
  },
  {
    category: "Tissue Repair Research",
    name: "Tissue Repair",
    blurb: "Pentadecapeptide and thymosin-family SKUs used in repair-pathway assays.",
    sku: "PEP-011-10MG",
    href: categoryHref("Tissue Repair Research"),
  },
  {
    category: "Growth Hormone Research",
    name: "Growth Hormone Axis",
    blurb: "GHRH analogs and ghrelin agonists for pulsatile-release models.",
    sku: "PEP-017-10MG",
    href: categoryHref("Growth Hormone Research"),
  },
  {
    category: "Lab Supplies",
    name: "Lab Supplies",
    blurb: "Bacteriostatic water, syringes, and reconstitution kits for the bench.",
    sku: "SUP-003-20PK",
    href: categoryHref("Lab Supplies"),
  },
];
