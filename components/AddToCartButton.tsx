"use client";

import { getProduct } from "@/lib/catalog";
import { useCart } from "./CartProvider";

export function AddToCartButton({
  sku,
  qty = 1,
  className,
}: {
  sku: string;
  qty?: number;
  className?: string;
}) {
  const { add } = useCart();
  const product = getProduct(sku);
  const blocked =
    !product ||
    product.stock === "out-of-stock" ||
    product.stock === "unavailable";

  if (blocked) {
    return (
      <span
        className={
          className ??
          "inline-flex justify-center rounded-md border border-border px-3 py-2 text-sm font-medium"
        }
      >
        {product?.stock === "out-of-stock" ? "Out of stock" : "Unavailable"}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => add(sku, qty)}
      className={
        className ??
        "inline-flex justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      }
    >
      {product.stock === "pre-order" ? "Pre-order" : "Add to cart"}
    </button>
  );
}
