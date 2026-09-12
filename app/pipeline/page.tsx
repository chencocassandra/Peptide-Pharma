import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PartnerCta } from "@/components/PartnerCta";
import { PipelineTable } from "@/components/PipelineTable";

export const metadata: Metadata = { title: "Pipeline" };

export default function PipelinePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Development pipeline</Eyebrow>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight">
          From discovery to clinical translation
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Our portfolio spans metabolic disease, infection, and oncology. Each
          program advances only when structural and pharmacological evidence
          supports it.
        </p>
        <div className="mt-10">
          <PipelineTable />
        </div>
      </section>
      <PartnerCta />
    </>
  );
}
