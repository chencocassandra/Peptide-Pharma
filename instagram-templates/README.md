# Peptide Pharma Instagram templates

1080×1350 (4:5). Open `index.html` in a browser, pick a SKU, screenshot **only** the 1080×1350 canvas.

Every catalogue SKU (70) has:

1. Product spotlight (`01-product-spotlight.html?sku=…`)
2. Price / promo (`02-price-promo.html?sku=…`)
3. Education / fact card (`03-educational.html?sku=…`)
4. Fictional sample quote (`04-quote-testimonial.html?sku=…`) — packing/CoA copy only, on-canvas warning
5. Protocol carousel of 4 slides (`05-protocol-01` … `04?sku=…`)

Photos come from Unsplash laboratory stills (no people). Refresh data with `node instagram-templates/generate-catalog.mjs`.

Shop listings are **research use only**. Templates use that mark, not a TGA-approved badge.

## Quote cards

Copy is invented for layout. Do not post it as a genuine customer review. It does not describe treatment outcomes.

## Protocol slides

Same four steps for every SKU, with that product in the header:

1. Design — sequence design from receptor structure
2. Synthesize — solid-phase synthesis and MS QC
3. Characterize — binding, stability, structure
4. Translate — PK and preclinical models
