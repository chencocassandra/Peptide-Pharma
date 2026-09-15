"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { nav } from "@/lib/data";
import { useCart } from "./CartProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-foreground"
          aria-label="Peptide Pharma home"
        >
          <Logo className="size-8 shrink-0" />
          <span>Peptide Pharma</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted"
          aria-label={`Open cart, ${count} items`}
        >
          Cart
          {count > 0 ? (
            <span className="ml-1.5 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
              {count}
            </span>
          ) : null}
        </button>
      </div>
      <nav
        aria-label="Mobile"
        className="flex gap-4 overflow-x-auto border-t border-border px-6 py-2.5 lg:hidden"
      >
        {nav.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 text-sm ${
                active ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
