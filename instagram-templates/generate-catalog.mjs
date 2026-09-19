import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "lib/catalog.ts"), "utf8");
const block = src.match(/export const catalog: CatalogProduct\[\] = \[([\s\S]*?)\];\n\nexport function getProduct/);
if (!block) throw new Error("Could not parse catalog.ts");

const items = [];
const re =
  /\{\s*sku:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*body:\s*"([^"]+)",\s*price:\s*([0-9.]+)/g;
let match;
while ((match = re.exec(block[1]))) {
  items.push({
    sku: match[1],
    title: match[2],
    category: match[3],
    body: match[4],
    price: Number(match[5]),
  });
}

const pool = [
  "1582719471384-894fbb16e074",
  "1532187863486-abf9dbad1b69",
  "1579154204601-01588f351e67",
  "1576086213369-97a306d36557",
  "1530026405186-ed1f139313f8",
  "1582719478250-c89cae4dc85b",
  "1582719508461-905c673771fd",
  "1559757148-5c350d0d3c56",
  "1567427017947-545c5f8d16ad",
  "1579684453423-f84349ef60b0",
  "1581092160562-40aa08e78837",
  "1581090464777-f3220bbe1b8b",
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`);

const quotes = [
  "Packing was tight and the CoA arrived the same day I asked. Lab-side only — this is not a treatment story.",
  "Dispatch notes were clear. Vial labelling matched the SKU on the invoice.",
  "Asked for batch paperwork; they sent the CoA without a runaround.",
  "Cold pack was still solid on arrival. Documentation was in the box.",
  "Straightforward enquiry-to-dispatch. Nothing in this note is a health claim.",
  "SKU on the vial matched the catalogue listing. That is all I needed for the bench log.",
  "Label print was sharp and the lot number matched the PDF they emailed.",
  "Express satchel landed next-day. No drama on the paperwork.",
  "Re-ordered the same SKU because the CoA format is easy to file.",
  "Box was packed so the vial could not rattle. Invoice matched the cart.",
];

const names = [
  "A. R. · Brisbane",
  "J. M. · Melbourne",
  "S. K. · Sydney",
  "L. P. · Adelaide",
  "C. T. · Perth",
  "N. H. · Canberra",
];

function hash(str) {
  return [...str].reduce((n, ch) => n + ch.charCodeAt(0), 0);
}

const catalog = items.map((item) => {
  const h = hash(item.sku);
  const thumbs = [0, 1, 2, 3].map((n) => pool[(h + n + 1) % pool.length].replace("w=1200", "w=600"));
  return {
    ...item,
    image: pool[h % pool.length],
    thumbs,
    quote: quotes[h % quotes.length],
    attribution: names[h % names.length],
    stars: 5,
  };
});

const out = `/* Generated from lib/catalog.ts — run: node instagram-templates/generate-catalog.mjs */\nwindow.PP_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`;
fs.writeFileSync(path.join(root, "instagram-templates/catalog.js"), out);
console.log(`Wrote ${catalog.length} products to catalog.js`);
