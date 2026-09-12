import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PartnerCta } from "@/components/PartnerCta";
import { ProductsCatalog } from "@/components/ProductsCatalog";

export const metadata: Metadata = {
  title: "Products & Reagents",
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>Shop</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Research Peptides
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            High-purity research compounds with Australian-held stock. All
            materials are for in-vitro laboratory research only.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <ProductsCatalog />
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Research use only. Not for human or veterinary consumption, diagnostic,
          or therapeutic use. You must be a qualified researcher aged 18+ to
          enquire.
        </p>
      </section>

      <PartnerCta />
    </>
  );
}
