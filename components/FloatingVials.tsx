"use client";

import { useEffect, useRef } from "react";
import { getProduct, productImage, splitProductTitle } from "@/lib/catalog";
import { heroVials } from "@/lib/home";
import { LabeledVial } from "./LabeledVial";

export function FloatingVials() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    function update() {
      const y = window.scrollY;
      for (const layer of layers) {
        const speed = Number(layer.dataset.speed ?? 0);
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      }
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square max-w-[520px] lg:max-w-none">
      {heroVials.map((vial) => {
        const product = getProduct(vial.sku);
        if (!product) return null;
        const split = splitProductTitle(product.title);
        return (
          <div
            key={vial.sku}
            data-parallax
            data-speed={vial.speed}
            className={`absolute ${vial.className} will-change-transform`}
          >
            <div
              className="vial-float overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
              style={{
                animationDuration: vial.duration,
                animationDelay: vial.delay,
                ["--vial-travel" as string]: vial.travel,
              }}
            >
              <LabeledVial
                src={productImage(product)}
                alt={`${split.name} ${split.strength} research vial`}
                name={split.name}
                strength={split.strength}
                sku={product.sku}
                sizes="(min-width: 1024px) 28vw, 60vw"
                compact
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
