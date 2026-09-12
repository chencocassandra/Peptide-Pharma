"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="font-display text-lg font-semibold tracking-tight">
                {item.q}
              </span>
              <span className="text-muted-foreground">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? (
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
