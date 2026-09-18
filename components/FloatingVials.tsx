"use client";

import { useEffect, useRef } from "react";
import { getProduct, productImage, splitProductTitle } from "@/lib/catalog";
import { heroVials } from "@/lib/home";
import { LabeledVial } from "./LabeledVial";

const vialLayout = [
  "left-[12%] top-[4%] z-20 w-[62%] sm:w-[56%]",
  "-left-1 bottom-[2%] z-30 w-[44%] sm:w-[40%]",
  "right-[-2%] top-[14%] z-10 w-[42%] sm:w-[38%]",
  "right-[6%] bottom-[-4%] z-20 w-[36%] sm:w-[32%]",
] as const;

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
    <div
      ref={rootRef}
      className="relative mx-auto min-h-[22rem] w-full max-w-[520px] aspect-square lg:max-w-none"
    >
      {heroVials.map((vial, index) => {
        const product = getProduct(vial.sku);
        if (!product) return null;
        const split = splitProductTitle(product.title);
        return (
          <div
            key={vial.sku}
            data-parallax
            data-speed={vial.speed}
            className={`absolute ${vialLayout[index]} will-change-transform`}
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
