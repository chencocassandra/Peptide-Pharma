"use client";

import Image from "next/image";

export function splitProductTitle(title: string) {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (match) return { name: match[1], strength: match[2] };
  return { name: title, strength: "" };
}

type LabeledVialProps = {
  src: string;
  alt: string;
  name: string;
  strength?: string;
  sku?: string;
  sizes?: string;
  className?: string;
  compact?: boolean;
};

export function LabeledVial({
  src,
  alt,
  name,
  strength,
  sku,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
  compact = false,
}: LabeledVialProps) {
  const isNavyVial = src.includes("vial-navy");
  const displayName = name.length > 24 ? `${name.slice(0, 22)}…` : name;

  return (
    <div className={`relative aspect-square overflow-hidden bg-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-contain"
        sizes={sizes}
      />
      {isNavyVial ? (
        <div
          className={`pointer-events-none absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center text-white ${
            compact
              ? "top-[46%] w-[38%]"
              : "top-[44%] w-[28%] min-w-[6.5rem] max-w-[8.75rem]"
          }`}
          aria-hidden
        >
          <p
            className={`font-semibold tracking-[0.18em] uppercase opacity-90 ${
              compact ? "text-[5px]" : "text-[8px]"
            }`}
          >
            Peptide Pharma
          </p>
          <p
            className={`mt-1 font-semibold leading-[1.05] drop-shadow-sm ${
              compact
                ? "text-[8px]"
                : displayName.length > 14
                  ? "text-[13px] sm:text-[15px]"
                  : "text-[16px] sm:text-[18px]"
            }`}
          >
            {displayName}
          </p>
          {strength ? (
            <span
              className={`mt-2 flex items-center justify-center rounded-full border border-white/80 font-medium ${
                compact ? "h-5 w-5 text-[6px]" : "h-8 w-8 text-[9px]"
              }`}
            >
              {strength.replace(/[()]/g, "")}
            </span>
          ) : null}
          {!compact ? (
            <>
              <p className="mt-2 text-[7px] font-medium tracking-[0.14em] uppercase opacity-80">
                Lyophilised powder
              </p>
              <p className="mt-0.5 text-[6px] tracking-wide opacity-70">
                For Research Use Only
              </p>
              {sku ? (
                <p className="mt-0.5 text-[6px] opacity-50">{sku}</p>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
