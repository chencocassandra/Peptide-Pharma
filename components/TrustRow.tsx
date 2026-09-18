import { trustPoints } from "@/lib/home";

function Icon({ name }: { name: (typeof trustPoints)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "size-5 stroke-accent",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  if (name === "truck") {
    return (
      <svg {...common}>
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="18" cy="18" r="1.6" />
      </svg>
    );
  }
  if (name === "flask") {
    return (
      <svg {...common}>
        <path d="M9 3h6M10 3v6L6.5 18a3 3 0 0 0 2.7 4h5.6a3 3 0 0 0 2.7-4L14 9V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1.7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-3z" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustRow() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((item) => (
          <article key={item.title} className="flex gap-3 bg-card px-5 py-4 sm:px-6 sm:py-5">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
              <Icon name={item.icon} />
            </span>
            <div>
              <h2 className="text-sm font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
