import type { ReactNode } from "react";

const navy = "#165d74";
const teal = "#2f9a86";

export const logoIds = [
  "current",
  "monogram",
  "helix",
  "vial",
  "hex",
] as const;

export type LogoId = (typeof logoIds)[number];

export const logoMeta: Record<LogoId, { name: string; note: string }> = {
  current: { name: "Current", note: "Three-node circle already in the header." },
  monogram: { name: "PP monogram", note: "Shared-spine P marks for Peptide Pharma." },
  helix: { name: "Helix chain", note: "Stacked peptide links in a ring." },
  vial: { name: "Vial seal", note: "Cap ring and inner disc, matching the catalogue vials." },
  hex: { name: "Hex residue", note: "Three-node motif in a hexagon." },
};

function SvgShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {children}
    </svg>
  );
}

export function LogoMark({
  id,
  className = "size-8",
}: {
  id: LogoId;
  className?: string;
}) {
  switch (id) {
    case "monogram":
      return (
        <SvgShell className={className}>
          <rect x="1.2" y="1.2" width="29.6" height="29.6" rx="8" stroke={teal} strokeWidth="1.4" />
          <path
            d="M8.2 25.2V7.4h7.6c3.85 0 6.2 2.2 6.2 5.45 0 3.25-2.35 5.45-6.2 5.45H11.6"
            stroke={navy}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4 25.2V7.4h7.6c3.85 0 6.2 2.2 6.2 5.45 0 3.25-2.35 5.45-6.2 5.45H15.8"
            stroke={teal}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SvgShell>
      );
    case "helix":
      return (
        <SvgShell className={className}>
          <circle cx="16" cy="16" r="14.2" stroke={navy} strokeWidth="1.4" />
          <path
            d="M16 6.8c3.2 1.6 5.2 3.4 5.2 5.4S19.2 15.8 16 17.4 10.8 20.8 10.8 22.8 12.8 26 16 27.6"
            stroke={teal}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M16 6.8c-3.2 1.6-5.2 3.4-5.2 5.4S12.8 15.8 16 17.4s5.2 3.4 5.2 5.4-2 4.6-5.2 6.2"
            stroke={navy}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="16" cy="9.6" r="1.35" fill={navy} />
          <circle cx="16" cy="16" r="1.35" fill={teal} />
          <circle cx="16" cy="22.4" r="1.35" fill={navy} />
        </SvgShell>
      );
    case "vial":
      return (
        <SvgShell className={className}>
          <circle cx="16" cy="16" r="14.2" stroke={navy} strokeWidth="1.5" />
          <circle cx="16" cy="16" r="9.2" stroke={teal} strokeWidth="1.6" />
          <circle cx="16" cy="16" r="4.4" fill={navy} />
          <circle cx="16" cy="16" r="1.5" fill="#f8fbfc" />
        </SvgShell>
      );
    case "hex":
      return (
        <SvgShell className={className}>
          <path
            d="M16 2.6 27.4 9.2v13.6L16 29.4 4.6 22.8V9.2L16 2.6Z"
            stroke={navy}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="10.2" r="1.7" fill={teal} />
          <circle cx="10.8" cy="19.4" r="1.7" fill={navy} />
          <circle cx="21.2" cy="19.4" r="1.7" fill={navy} />
          <path
            d="M16 10.2 10.8 19.4M16 10.2 21.2 19.4M10.8 19.4h10.4"
            stroke={teal}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </SvgShell>
      );
    default:
      return (
        <SvgShell className={className}>
          <circle cx="16" cy="16" r="15" stroke={teal} strokeWidth="1.4" />
          <circle cx="16" cy="16" r="6.2" stroke={navy} strokeWidth="1.4" />
          <circle cx="16" cy="6.5" r="1.6" fill={navy} />
          <circle cx="24.5" cy="20.8" r="1.6" fill={teal} />
          <circle cx="7.5" cy="20.8" r="1.6" fill={navy} />
          <path
            d="M16 7.8v2.6M22.8 20.2l-2.2-1.3M9.2 20.2l2.2-1.3"
            stroke={navy}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </SvgShell>
      );
  }
}
