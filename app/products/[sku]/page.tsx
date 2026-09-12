import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { catalog, getProduct } from "@/lib/catalog";

type Props = { params: Promise<{ sku: string }> };

export async function generateStaticParams() {
  return catalog.map((item) => ({ sku: item.sku }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) return { title: "Product" };
  return { title: product.title };
}

export default async function ProductPage({ params }: Props) {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
