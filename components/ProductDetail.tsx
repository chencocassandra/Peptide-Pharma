"use client";

import Link from "next/link";
import { useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { LabeledVial, splitProductTitle } from "@/components/LabeledVial";
import {
  productImage,
  relatedFormats,
  type CatalogProduct,
} from "@/lib/catalog";
import { money } from "@/lib/money";

export function ProductDetail({ product }: { product: CatalogProduct }) {
  const formats = relatedFormats(product);
  const split = splitProductTitle(product.title);
  const [qty, setQty] = useState(1);

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl bg-muted">
        <LabeledVial
          src={productImage(product)}
          alt={`${product.title} research vial`}
          name={split.name}
          strength={split.strength}
          sku={product.sku}
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {product.category}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
          {product.title}
        </h1>
        <p className="mt-4 text-2xl font-semibold">{money(product.price)}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {product.body}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">SKU: {product.sku}</p>
        <p className="mt-4 rounded-md border border-border bg-muted/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          Laboratory research only. Certificates of Analysis available on
          request. Not for human or veterinary use.
        </p>
        {formats.length > 1 ? (
          <div className="mt-6">
            <p className="text-sm font-medium">Format</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {formats.map((option) => (
                <Link
                  key={option.sku}
                  href={`/products/${option.sku}`}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                    option.sku === product.sku
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {splitProductTitle(option.title).strength || option.title} ·{" "}
                  {money(option.price)}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <label className="text-sm">
            Qty
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(event) => setQty(Math.max(1, Number(event.target.value) || 1))}
              className="ml-2 w-20 rounded-md border border-border bg-card px-2 py-2 text-sm"
            />
          </label>
          <AddToCartButton sku={product.sku} qty={qty} />
        </div>
      </div>
    </div>
  );
}
