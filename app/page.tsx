import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { LabeledVial } from "@/components/LabeledVial";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PartnerCta } from "@/components/PartnerCta";
import { PipelineTable } from "@/components/PipelineTable";
import { disciplines, process } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>Independent peptide research</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.05]">
              The science of peptides, from sequence to therapy
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Peptide Pharma designs next-generation peptide therapeutics and
              supplies laboratory research compounds from Australian-held stock.
              Certificates of Analysis are available on request. Nothing in this
              catalogue is offered for human or veterinary use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/science"
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View our science →
              </Link>
              <Link
                href="/products"
                className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                View catalogue
              </Link>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["5", "Active programs"],
                ["40+", "Peer-reviewed papers"],
                ["12", "Research partners"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-semibold tracking-tight">
                    {stat}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <LabeledVial
                src="/images/vial-navy-blank.png"
                alt="Retatrutide 10mg research vial"
                name="Retatrutide"
                strength="10mg"
                sku="PEP-007-10MG"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[220px] rounded-xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
                AXP-114
              </p>
              <p className="mt-1 text-sm font-medium">Dual incretin agonist</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Phase II · metabolic disease
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
          {[
            [
              "01",
              "Research supply only",
              "Every listing is a laboratory research chemical, not a medicine or supplement.",
            ],
            [
              "02",
              "Free express, Australia-wide",
              "Every order includes free express shipping, with no minimum spend. Same- or next-day courier is available in Melbourne for $20 within 40km of the CBD.",
            ],
            [
              "03",
              "Support by email",
              "Questions about SKUs, orders, or documentation: research@peptidepharma.com",
            ],
          ].map(([n, title, body]) => (
            <article key={n} className="bg-background px-6 py-10">
              <p className="text-xs tracking-[0.16em] text-accent">{n}</p>
              <h2 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedProducts />

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Research focus</Eyebrow>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Four disciplines, one molecular class
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Peptides sit between small molecules and biologics. Our programs
              combine chemistry and structural insight to make that space
              druggable.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {disciplines.map((item) => (
              <article
                key={item.n}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <LabeledVial
                  src={item.image}
                  alt={item.alt}
                  name={item.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="p-6">
                  <p className="text-xs tracking-[0.16em] text-accent">{item.n}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <LabeledVial
              src="/images/vial-navy-blank.png"
              alt="Tesamorelin 10mg research vial"
              name="Tesamorelin"
              strength="10mg"
              sku="PEP-030-10MG"
            />
          </div>
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              A disciplined path from molecule to model
            </h2>
            <ol className="mt-8 space-y-6">
              {process.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-primary">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Pipeline</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Programs in development
              </h2>
            </div>
            <Link
              href="/science#pipeline"
              className="text-sm font-medium text-primary hover:underline"
            >
              Full pipeline
            </Link>
          </div>
          <div className="mt-10">
            <PipelineTable />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Catalogue updates
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Availability notices for research-use listings only.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <PartnerCta />
    </>
  );
}
