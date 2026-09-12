import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { LabeledVial, splitProductTitle } from "@/components/LabeledVial";
import { catalog, featuredSkus, productImage } from "@/lib/catalog";
import { money } from "@/lib/money";

export function FeaturedProducts() {
  const items = featuredSkus
    .map((sku) => catalog.find((item) => item.sku === sku))
    .filter((item) => item !== undefined);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Catalogue
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Selected products
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A short list from current Australian-held research stock.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const split = splitProductTitle(item.title);
            return (
              <article
                key={item.sku}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-white"
              >
                <Link href={`/products/${item.sku}`}>
                  <LabeledVial
                    src={productImage(item)}
                    alt={`${item.title} research vial`}
                    name={split.name}
                    strength={split.strength}
                    sku={item.sku}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                    <Link href={`/products/${item.sku}`}>{item.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm font-semibold">{money(item.price)}</p>
                  <AddToCartButton sku={item.sku} className="mt-4 inline-flex justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
