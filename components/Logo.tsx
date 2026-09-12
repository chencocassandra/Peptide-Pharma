export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="16" cy="16" r="15" stroke="#2f9a86" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="6.2" stroke="#165d74" strokeWidth="1.4" />
      <circle cx="16" cy="6.5" r="1.6" fill="#165d74" />
      <circle cx="24.5" cy="20.8" r="1.6" fill="#2f9a86" />
      <circle cx="7.5" cy="20.8" r="1.6" fill="#165d74" />
      <path
        d="M16 7.8v2.6M22.8 20.2l-2.2-1.3M9.2 20.2l2.2-1.3"
        stroke="#165d74"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
