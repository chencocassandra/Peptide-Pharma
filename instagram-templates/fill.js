(function () {
  if (new URLSearchParams(location.search).has("export")) {
    document.body.classList.add("export");
  }

  const params = new URLSearchParams(location.search);
  const list = window.PP_CATALOG || [];
  const sku = params.get("sku") || (list[0] && list[0].sku);
  const product = list.find((item) => item.sku === sku) || list[0];
  if (!product) return;

  const money = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(product.price);

  const family = product.title.replace(/\s*\([^)]+\)\s*$/, "");
  document.querySelectorAll("[data-fill]").forEach((el) => {
    const key = el.getAttribute("data-fill");
    const map = {
      sku: product.sku,
      title: product.title,
      family,
      category: product.category,
      body: product.body,
      price: money,
    };
    if (key in map) el.textContent = map[key];
  });

  const stills = {
    image: "../public/images/vial-navy-blank.png",
    kit: "../public/images/vial-kit-blank.png",
    syringes: "../public/images/supply-syringes.png",
    structure: "../public/images/peptide-structure.png",
  };

  document.querySelectorAll("[data-src]").forEach((el) => {
    if (el.hasAttribute("data-lock")) return;
    const key = el.getAttribute("data-src");
    el.src = stills[key] || stills.image;
  });

  const hint = document.querySelector("[data-sku-hint]");
  if (hint) hint.textContent = `${product.sku} · ${product.title}`;

  document.title = `${document.title.split("·")[0].trim()} · ${product.title}`;
})();
