export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src="/zelaa-icon.png" alt="" width={32} height={32} className="size-8 rounded-[8px]" />
      <span className="text-lg font-semibold tracking-tight text-ink">Zelaa</span>
    </span>
  );
}
