import { getProduct, productImage, splitProductTitle } from "@/lib/catalog";
import { heroVials } from "@/lib/home";
import { LabeledVial } from "./LabeledVial";

const fan = [
  {
    width: "hidden w-[18%] sm:block",
    z: "z-10",
    offset: "translate-y-4",
  },
  {
    width: "w-[32%] sm:w-[24%]",
    z: "z-20",
    offset: "translate-y-2",
  },
  {
    width: "w-[40%] sm:w-[32%]",
    z: "z-30",
    offset: "translate-y-0",
  },
  {
    width: "w-[32%] sm:w-[24%]",
    z: "z-20",
    offset: "translate-y-2",
  },
  {
    width: "hidden w-[18%] sm:block",
    z: "z-10",
    offset: "translate-y-4",
  },
] as const;

export function FloatingVials() {
  return (
    <div className="hero-vial-drift mx-auto flex w-full max-w-[36rem] items-end justify-center px-2 lg:max-w-none">
      {heroVials.map((vial, index) => {
        const product = getProduct(vial.sku);
        if (!product) return null;
        const split = splitProductTitle(product.title);
        const slot = fan[index];

        return (
          <div
            key={vial.sku}
            className={`relative -mx-1.5 sm:-mx-3 ${slot.width} ${slot.z}`}
          >
            <div className={slot.offset}>
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
                  sizes="(min-width: 1024px) 14vw, 28vw"
                  compact
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
