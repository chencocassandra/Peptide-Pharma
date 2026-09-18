import Link from "next/link";
import { CategoryCards } from "@/components/CategoryCards";
import { Eyebrow } from "@/components/Eyebrow";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { FloatingVials } from "@/components/FloatingVials";
import { NewsletterForm } from "@/components/NewsletterForm";
import { TrustRow } from "@/components/TrustRow";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 sm:py-10 lg:grid-cols-2 lg:gap-8 lg:py-12">
          <div>
            <Eyebrow>Independent peptide research</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.05]">
              Research-Grade
              <br />
              Peptides &amp; Compounds
            </h1>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              Independent, research-first platform delivering documented,
              batch-level analytical results for scientific use.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Shop Now
              </Link>
              <Link
                href="/science"
                className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                Learn More
              </Link>
            </div>
          </div>
          <FloatingVials />
        </div>
      </section>

      <TrustRow />
      <CategoryCards />
      <FeaturedCarousel />

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Catalogue updates
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Availability notices for research-use listings only.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
