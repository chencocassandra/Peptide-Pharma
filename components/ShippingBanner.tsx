"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { shippingCutoffPlaceholder, shippingSummary } from "@/lib/shipping";

export function ShippingBanner() {
  const tooltipId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative border-b border-primary-foreground/20 bg-primary px-4 py-2 text-primary-foreground">
      <p className="text-center text-[11px] font-medium leading-relaxed tracking-[0.06em] sm:text-xs">
        FREE EXPRESS SHIPPING ON ALL ORDERS · SAME/NEXT DAY COURIER AVAILABLE IN
        MELBOURNE
        <span className="relative inline-block">
          <Link
            href="/shipping"
            className="ml-0.5 underline decoration-primary-foreground/70 underline-offset-2 hover:decoration-primary-foreground"
            aria-describedby={open ? tooltipId : undefined}
            aria-label="Melbourne courier conditions, full shipping details"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          >
            *
          </Link>
          {open ? (
            <span
              id={tooltipId}
              role="tooltip"
              className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-md border border-border bg-card p-3 text-left text-xs font-normal normal-case tracking-normal text-foreground shadow-sm sm:w-80"
            >
              {shippingSummary} Cutoff {shippingCutoffPlaceholder}.{" "}
              <Link href="/shipping" className="font-medium text-primary underline">
                Full details
              </Link>
            </span>
          ) : null}
        </span>
      </p>
    </div>
  );
}
