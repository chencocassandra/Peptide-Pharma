import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>Careers</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight">
        Join the institute
      </h1>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        We hire chemists, structural biologists, and translational scientists
        who want to move peptides from sequence to the clinic. There are no open
        listings on this page right now.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
      >
        Send an inquiry
      </Link>
    </section>
  );
}
