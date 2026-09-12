import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        FAQ
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Research-use listings, documentation, and Australia-wide dispatch.
      </p>
      <div className="mt-10">
        <FaqList />
      </div>
    </section>
  );
}
