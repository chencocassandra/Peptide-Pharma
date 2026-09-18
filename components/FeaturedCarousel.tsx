"use client";

import Link from "next/link";
import { useRef } from "react";
import { catalog, featuredSkus, productImage, splitProductTitle } from "@/lib/catalog";
import { money } from "@/lib/money";
import { AddToCartButton } from "./AddToCartButton";
import { LabeledVial } from "./LabeledVial";

export function FeaturedCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const items = featuredSkus
    .map((sku) => catalog.find((item) => item.sku === sku))
    .filter((item) => item !== undefined);

  function scrollByDir(dir: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(320, node.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Frequently ordered
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Bench staples from current stock
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Eight lyophilised SKUs labs reorder from Peptide Pharma&apos;s Australian inventory.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:bg-muted"
              aria-label="Previous products"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:bg-muted"
              aria-label="Next products"
            >
              →
            </button>
            <Link href="/products" className="ml-2 text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
        </div>
        <div
          ref={scroller}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {items.map((item) => {
            const split = splitProductTitle(item.title);
            return (
              <article
                key={item.sku}
                className="flex w-[240px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-white sm:w-[260px]"
              >
                <Link href={`/products/${item.sku}`}>
                  <LabeledVial
                    src={productImage(item)}
                    alt={`${item.title} research vial`}
                    name={split.name}
                    strength={split.strength}
                    sku={item.sku}
                    sizes="260px"
                    compact
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold tracking-tight">
                    <Link href={`/products/${item.sku}`}>{item.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm font-semibold">{money(item.price)}</p>
                  <AddToCartButton
                    sku={item.sku}
                    className="mt-3 inline-flex justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
