import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { ResearchBanner } from "@/components/ResearchBanner";
import { ShippingBanner } from "@/components/ShippingBanner";
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
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
          >
            Skip to content
          </a>
          <ShippingBanner />
          <ResearchBanner />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
