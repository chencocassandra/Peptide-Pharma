import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Research",
    links: [
      { href: "/science", label: "Science" },
      { href: "/science#pipeline", label: "Pipeline" },
      { href: "/products", label: "Reagents" },
    ],
  },
  {
    title: "Institute",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#leadership", label: "Team" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/collaborations", label: "Collaborations" },
      { href: "/press", label: "Press" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium">
            <Logo className="size-7" />
            Peptide Pharma
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            An independent research organization advancing the science of peptide
            therapeutics from sequence to translation.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© 2026 Peptide Pharma. For research use only.</p>
        <p>This site is for informational purposes and is not medical advice.</p>
      </div>
    </footer>
  );
}
