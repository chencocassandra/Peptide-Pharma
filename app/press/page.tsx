import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>Press</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight">
        Media inquiries
      </h1>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        For interviews, background on our pipeline, or image requests, email{" "}
        <a className="text-primary hover:underline" href="mailto:research@peptidepharma.org">
          research@peptidepharma.org
        </a>
        .
      </p>
    </section>
  );
}
