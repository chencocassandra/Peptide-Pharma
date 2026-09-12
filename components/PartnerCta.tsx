import Link from "next/link";

export function PartnerCta() {
  return (
    <section className="border-t border-border bg-muted/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Advance a peptide program with us
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We partner with academic groups, foundations, and industry teams from
            target identification through preclinical translation. Tell us what
            you are working on.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start a collaboration
          </Link>
          <Link
            href="/science"
            className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Explore the science
          </Link>
        </div>
      </div>
    </section>
  );
}
