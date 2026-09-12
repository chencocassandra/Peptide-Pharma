"use client";

import { FormEvent, useMemo, useState } from "react";
import { getProduct } from "@/lib/catalog";
import { money } from "@/lib/money";
import { useCart } from "@/components/CartProvider";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { lines } = useCart();

  const cartNote = useMemo(() => {
    if (lines.length === 0) return "";
    const rows = lines
      .map((line) => {
        const product = getProduct(line.sku);
        if (!product) return null;
        return `${product.title} (${product.sku}) × ${line.qty} — ${money(product.price)}`;
      })
      .filter(Boolean)
      .join("\n");
    return `Enquiry cart:\n${rows}`;
  }, [lines]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl border border-border bg-muted p-6 text-sm leading-relaxed">
        Thank you. A member of the team will reply within two business days.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm">
        <span className="font-medium">Full name</span>
        <input
          required
          name="name"
          placeholder="Dr. Jane Doe"
          className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 outline-none ring-ring focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium">Organization</span>
        <input
          name="org"
          placeholder="Institution or company"
          className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 outline-none ring-ring focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium">Email</span>
        <input
          required
          type="email"
          name="email"
          placeholder="you@lab.org"
          className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 outline-none ring-ring focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium">Reason for contact</span>
        <select
          name="reason"
          defaultValue={lines.length ? "Reagent / product quote" : "Research collaboration"}
          className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 outline-none ring-ring focus:ring-2"
        >
          <option>Research collaboration</option>
          <option>Reagent / product quote</option>
          <option>Custom synthesis</option>
          <option>Press or other</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={lines.length ? 8 : 5}
          defaultValue={cartNote}
          key={cartNote || "empty"}
          placeholder="Tell us about your program or inquiry."
          className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 outline-none ring-ring focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}
