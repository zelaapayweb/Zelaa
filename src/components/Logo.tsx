export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid size-8 place-items-center rounded-full bg-ink">
        <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
          <path
            d="M8 1.5 13.5 3.6v4.2c0 3.3-2.3 5.7-5.5 6.7-3.2-1-5.5-3.4-5.5-6.7V3.6L8 1.5Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M8.6 4.8 6.2 8.3h1.7l-.5 2.9 2.4-3.6H8.1l.5-2.8Z" fill="#ffffff" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink">Zelaa</span>
    </span>
  );
}
