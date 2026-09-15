import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Policy
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p]:mt-3 [&_ul]:mt-3 [&_li]:mt-2 [&_li]:ml-5 [&_li]:list-disc">
        {children}
      </div>
    </article>
  );
}
