import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { LabeledVial } from "@/components/LabeledVial";
import { PipelineTable } from "@/components/PipelineTable";
import { disciplines, platforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Science & Pipeline",
};

export default function SciencePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>Science & pipeline</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering peptides into precise therapeutics
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Peptides combine the specificity of biologics with the tractability of
            synthetic chemistry. Our platforms turn that potential into
            candidates ready for translation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-muted">
          <LabeledVial
            src="/images/vial-navy-blank.png"
            alt="BPC-157 10mg research vial"
            name="BPC-157"
            strength="10mg"
            sku="PEP-011-10MG"
          />
        </div>
        <div>
          <Eyebrow>Platforms</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Three technologies underpin every program
          </h2>
          <ul className="mt-8 space-y-6">
            {platforms.map((item) => (
              <li key={item.title} className="border-l-2 border-primary pl-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Therapeutic focus</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Where our peptides make a difference
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {disciplines.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <LabeledVial
                  src={item.image}
                  alt={item.alt}
                  name={item.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
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

      <section id="pipeline" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Development pipeline</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            From discovery to clinical translation
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Our portfolio spans metabolic disease, infection, and oncology. Each
            program advances only when structural and pharmacological evidence
            supports it.
          </p>
          <div className="mt-10">
            <PipelineTable />
          </div>
        </div>
      </section>
    </>
  );
}
