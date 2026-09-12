import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PartnerCta } from "@/components/PartnerCta";
import { leaders, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>About the institute</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            An independent home for peptide science
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Founded to bridge academic discovery and translational medicine,
            Peptide Pharma brings chemists, structural biologists, and pharmacologists
            under one roof.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Making the peptide space druggable
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Peptides occupy a unique therapeutic middle ground — specific enough
            to rival biologics, small enough to synthesize and modify with
            precision. Yet stability, delivery, and selectivity have long limited
            their potential.
          </p>
          <p>
            Peptide Pharma was founded to close that gap. We operate as
            an independent research organization, combining discovery chemistry
            with structural biology and translational pharmacology to move
            candidates from concept toward the clinic.
          </p>
          <p>
            We work with academic groups, foundations, and industry partners who
            share a commitment to rigorous, reproducible science.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>What guides us</Eyebrow>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            The scientists behind the work
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((person) => (
              <article
                key={person.name}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                  {person.initials}
                </div>
                <h3 className="mt-4 font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-accent">{person.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnerCta />
    </>
  );
}
