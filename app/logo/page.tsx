import type { Metadata } from "next";
import { LogoOptions } from "@/components/LogoOptions";

export const metadata: Metadata = {
  title: "Logo options",
};

export default function LogoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Brand
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Logo options
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Five SVG marks at header size, large size, and on the navy bar. Preview
        in header applies it on this device only until you pick a permanent one.
      </p>
      <div className="mt-10">
        <LogoOptions />
      </div>
    </section>
  );
}
