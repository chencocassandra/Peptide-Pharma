import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peptidepharma.com"),
  title: {
    default: "Peptide Pharma — Advancing Peptide Therapeutics",
    template: "%s | Peptide Pharma",
  },
  description:
    "Peptide Pharma is an independent research organization advancing peptide therapeutics through synthesis, structural biology, and translational science.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://peptidepharma.com",
    siteName: "Peptide Pharma",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8fbfc",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
