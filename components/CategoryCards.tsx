import Link from "next/link";
import { catalog, productImage, splitProductTitle } from "@/lib/catalog";
import { categoryCards } from "@/lib/home";
import { LabeledVial } from "./LabeledVial";

export function CategoryCards() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Shop by research area
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Open a bench category
            </h2>
          </div>
          <Link href="/products" className="text-sm font-medium text-primary hover:underline">
            All listings
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card) => {
            const product = catalog.find((item) => item.sku === card.sku);
            const split = splitProductTitle(product?.title ?? card.name);
            return (
              <Link
                key={card.category}
                href={card.href}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent"
              >
                <LabeledVial
                  src={product ? productImage(product) : "/images/vial-navy-blank.png"}
                  alt={`${card.name} research listing`}
                  name={split.name}
                  strength={split.strength}
                  sku={product?.sku}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  compact
                />
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {card.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {card.blurb}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">
                    Shop
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
