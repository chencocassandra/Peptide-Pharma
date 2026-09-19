# Peptide Pharma Instagram templates

1080×1350 (4:5). Open `index.html` in a browser, pick a SKU, screenshot **only** the 1080×1350 canvas (`?export=1` hides the hint).

Safe zone: 60px left/right and 50px top/bottom for logo, type, chips, and the compliance bar. Backgrounds and product stills may bleed to the edge.

Every catalogue SKU (70) has this carousel:

1. Product spotlight (`01-product-spotlight.html?sku=…`)
2. Price / promo (`02-price-promo.html?sku=…`)
3. Education / fact card (`03-educational.html?sku=…`)
4. Protocol · Prepare (`05-protocol-01-prepare.html?sku=…`)
5. Protocol · Synthesize (`05-protocol-02-synthesize.html?sku=…`)
6. Protocol · Characterize (`05-protocol-03-characterize.html?sku=…`)
7. Protocol · Translate (`05-protocol-04-translate.html?sku=…`)

Optional photo drop frame: `06-photo-frame.html` (not in the SKU carousel). Quote cards (`04-quote-testimonial.html`) are retired.

Stills come from shop assets in `public/images/` (vials, kit, syringes). Shop listings are **research use only**. Templates use that mark, not a TGA-approved badge.

Compliance line on every slide:

`FOR RESEARCH USE ONLY · NOT FOR HUMAN OR VETERINARY CONSUMPTION`

## Protocol slides

Same four steps for every SKU:

1. Prepare — bench, vial identity, gloves, prep pads
2. Synthesize — solid-phase synthesis and MS QC
3. Characterize — binding, stability, structure
4. Translate — PK and in-vitro models (research setting only)
