import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = { title: "Collaborations" };

export default function CollaborationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>Collaborations</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight">
        Partner from target to translation
      </h1>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        Peptide Pharma works with academic groups, foundations, and industry teams on
        discovery chemistry, structural characterization, and preclinical
        models. Tell us about the program you want to advance.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
      >
        Contact
      </Link>
    </section>
  );
}
