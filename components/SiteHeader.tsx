"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { categoryHref, shopCategories } from "@/lib/catalog";
import { nav } from "@/lib/data";
import { Logo } from "./Logo";
import { useCart } from "./CartProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen && !shopOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setShopOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, shopOpen]);

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
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            if ("mega" in item && item.mega) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setShopOpen(false);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      active
                        ? "text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-expanded={shopOpen}
                    aria-haspopup="true"
                    onFocus={() => setShopOpen(true)}
                  >
                    {item.label}
                  </Link>
                  {shopOpen ? (
                    <div className="absolute left-0 top-full z-50 mt-1 w-[min(36rem,calc(100vw-3rem))] overflow-visible rounded-xl border border-border bg-card p-5 pt-4 shadow-lg">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        Research categories
                      </p>
                      <ul className="mt-3 grid grid-cols-2 gap-1">
                        {shopCategories.map((category) => (
                          <li key={category}>
                            <Link
                              href={categoryHref(category)}
                              className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/products"
                        className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                      >
                        All research listings
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            Menu
          </button>
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
      </div>
      {mobileOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 py-4 lg:hidden"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Shop
            </p>
            <Link
              href="/products"
              className="block rounded-md py-2 text-sm font-medium"
            >
              All listings
            </Link>
            {shopCategories.map((category) => (
              <Link
                key={category}
                href={categoryHref(category)}
                className="block rounded-md py-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="mt-4 space-y-1 border-t border-border pt-3">
            {nav
              .filter((item) => !("mega" in item && item.mega))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
