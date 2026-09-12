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
            Research chemicals
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Laboratory research chemicals with Australian-held stock. Confirm
            identity against vial labels and any batch documentation you hold.
            Certificates of Analysis are available on request.
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
