"use client";

import Link from "next/link";
import { getProduct, productImage } from "@/lib/catalog";
import { money } from "@/lib/money";
import { useCart } from "./CartProvider";
import { LabeledVial, splitProductTitle } from "./LabeledVial";

export function CartDrawer() {
  const { lines, open, setOpen, setQty, remove } = useCart();

  const items = lines
    .map((line) => {
      const product = getProduct(line.sku);
      return product ? { ...line, product } : null;
    })
    .filter((row) => row !== null);

  const total = items.reduce((sum, row) => sum + row.product.price * row.qty, 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-foreground/40"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-lg font-semibold">Enquiry cart</h2>
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No items yet. Add research SKUs from the catalogue.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((row) => {
                const split = splitProductTitle(row.product.title);
                return (
                  <li key={row.sku} className="flex gap-3">
                    <div className="w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <LabeledVial
                        src={productImage(row.product)}
                        alt=""
                        name={split.name}
                        strength={split.strength}
                        sku={row.product.sku}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{row.product.title}</p>
                      <p className="text-xs text-muted-foreground">{money(row.product.price)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <label className="sr-only" htmlFor={`qty-${row.sku}`}>
                          Quantity
                        </label>
                        <input
                          id={`qty-${row.sku}`}
                          type="number"
                          min={1}
                          value={row.qty}
                          onChange={(event) =>
                            setQty(row.sku, Number(event.target.value) || 1)
                          }
                          className="w-16 rounded-md border border-border bg-card px-2 py-1 text-sm"
                        />
                        <button
                          type="button"
                          className="text-xs text-muted-foreground hover:text-foreground"
                          onClick={() => remove(row.sku)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="border-t border-border px-5 py-4">
          <p className="flex justify-between text-sm">
            <span>Estimated total</span>
            <span className="font-semibold">{money(total)}</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Research use only. Checkout submits an enquiry — payment is confirmed
            by the lab team.
          </p>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Request quote
          </Link>
        </div>
      </aside>
    </div>
  );
}
