"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/lib/catalog";

const STORAGE_KEY = "peptide-pharma-cart";

export type CartLine = { sku: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (sku: string, qty?: number) => boolean;
  setQty: (sku: string, qty: number) => void;
  remove: (sku: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    return parsed.filter((line) => line.sku && line.qty > 0 && getProduct(line.sku));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((sku: string, qty = 1) => {
    const product = getProduct(sku);
    if (
      !product ||
      product.stock === "out-of-stock" ||
      product.stock === "unavailable"
    ) {
      return false;
    }
    setLines((current) => {
      const existing = current.find((line) => line.sku === sku);
      if (existing) {
        return current.map((line) =>
          line.sku === sku ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [...current, { sku, qty }];
    });
    setOpen(true);
    return true;
  }, []);

  const setQty = useCallback((sku: string, qty: number) => {
    setLines((current) => {
      if (qty <= 0) return current.filter((line) => line.sku !== sku);
      return current.map((line) => (line.sku === sku ? { ...line, qty } : line));
    });
  }, []);

  const remove = useCallback((sku: string) => {
    setLines((current) => current.filter((line) => line.sku !== sku));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, count, open, setOpen, add, setQty, remove, clear }),
    [lines, count, open, add, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
