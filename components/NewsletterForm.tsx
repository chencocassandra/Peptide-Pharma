"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-sm text-muted-foreground">
        Thanks. We will only send catalogue and availability notices.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-md gap-2">
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        required
        type="email"
        name="email"
        placeholder="you@example.com"
        className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
