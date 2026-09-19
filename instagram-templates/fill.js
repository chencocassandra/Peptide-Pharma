(function () {
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
      quote: product.quote,
      attribution: product.attribution,
      stars: "★".repeat(product.stars || 5),
    };
    if (key in map) el.textContent = map[key];
  });

  document.querySelectorAll("[data-src]").forEach((el) => {
    if (el.hasAttribute("data-lock")) return;
    const key = el.getAttribute("data-src");
    if (key === "image") el.src = product.image;
  });

  document.querySelectorAll("[data-thumbs]").forEach((el) => {
    el.innerHTML = "";
    (product.thumbs || []).slice(0, 4).forEach((url) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
    img.src = url;
    img.alt = "";
    img.referrerPolicy = "no-referrer";
      fig.appendChild(img);
      el.appendChild(fig);
    });
  });

  const hint = document.querySelector("[data-sku-hint]");
  if (hint) hint.textContent = `${product.sku} · ${product.title}`;

  document.title = `${document.title.split("·")[0].trim()} · ${product.title}`;
})();
