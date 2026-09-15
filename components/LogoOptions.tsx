"use client";

import { LogoMark, logoIds, logoMeta, type LogoId } from "@/components/LogoMarks";
import { writeLogoId } from "@/components/Logo";

export function LogoOptions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {logoIds.map((id: LogoId) => {
        const meta = logoMeta[id];
        return (
          <article
            key={id}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center justify-center gap-10 bg-background px-6 py-10">
              <LogoMark id={id} className="size-10" />
              <LogoMark id={id} className="size-16" />
              <LogoMark id={id} className="size-24" />
            </div>
            <div className="flex items-center gap-3 border-t border-border bg-primary px-6 py-4 text-primary-foreground">
              <LogoMark id={id} className="size-8 shrink-0" />
              <span className="text-sm font-medium">Peptide Pharma</span>
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {meta.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {meta.note}
              </p>
              <button
                type="button"
                onClick={() => writeLogoId(id)}
                className="mt-4 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Preview in header
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
