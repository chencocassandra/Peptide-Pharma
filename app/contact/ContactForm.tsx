"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl border border-border bg-muted p-6 text-sm leading-relaxed">
        Thank you. A member of the institute will reply within two business days.
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
          defaultValue="Research collaboration"
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
          rows={5}
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
