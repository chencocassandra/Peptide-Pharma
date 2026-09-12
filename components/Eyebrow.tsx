export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
      <span className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}
