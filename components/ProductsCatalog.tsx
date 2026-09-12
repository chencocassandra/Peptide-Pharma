"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LabeledVial, splitProductTitle } from "@/components/LabeledVial";
import {
  catalog,
  catalogStats,
  categories,
  productImage,
  type CatalogProduct,
  type Stock,
} from "@/lib/catalog";

const stockLabel: Record<Stock, string> = {
  "in-stock": "In Stock",
  "out-of-stock": "Out of Stock",
  "pre-order": "Pre-Order",
  unavailable: "Unavailable",
  partner: "Via Partner",
};

function money(n: number) {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}

function cta(product: CatalogProduct) {
  if (product.stock === "unavailable" || product.stock === "out-of-stock") {
    return { href: "/contact", label: "Notify me" };
  }
  if (product.stock === "pre-order") {
    return { href: "/contact", label: "Pre-Order Now" };
  }
  return { href: "/contact", label: "Add to enquiry" };
}

export function ProductsCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All Products");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog.filter((item) => {
      if (category !== "All Products" && item.category !== category) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {catalogStats.total} products — {catalogStats.available} available to
            order. HPLC-verified batches before dispatch.
          </p>
        </div>
        <label className="block w-full sm:max-w-xs">
          <span className="sr-only">Find a product</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a product"
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
          />
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto py-6">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium ${
              category === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mb-6 text-sm text-muted-foreground">{items.length} products</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const action = cta(item);
          return (
            <article
              key={item.sku}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-white"
            >
              <div className="relative">
                <LabeledVial
                  src={productImage(item)}
                  alt={`${item.title} research vial`}
                  name={splitProductTitle(item.title).name}
                  strength={splitProductTitle(item.title).strength}
                  sku={item.sku}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
                  {item.isNew ? (
                    <span className="rounded-full bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                      New Arrival
                    </span>
                  ) : null}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      item.stock === "in-stock"
                        ? "bg-primary text-primary-foreground"
                        : item.stock === "pre-order"
                          ? "bg-accent text-white"
                          : "bg-card text-muted-foreground"
                    }`}
                  >
                    {stockLabel[item.stock]}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {item.category}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">SKU: {item.sku}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="text-lg font-semibold">{money(item.price)}</p>
                  {item.compareAt ? (
                    <p className="text-sm text-muted-foreground line-through">
                      {money(item.compareAt)}
                    </p>
                  ) : null}
                </div>
                <Link
                  href={action.href}
                  className={`mt-4 inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium ${
                    item.stock === "out-of-stock" || item.stock === "unavailable"
                      ? "border border-border"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {action.label}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
