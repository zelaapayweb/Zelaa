/** Small crypto-native primitives shared across sections. */

export function WalletPill({ address }: { address: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs text-ink-soft">
      <span className="size-1.5 rounded-full bg-signal-green" />
      {address}
    </span>
  );
}

const CHAIN_DOTS: Record<string, string> = {
  Ethereum: "#627eea",
  Base:     "#0052ff",
  Solana:   "#9945ff",
  "BNB Chain": "#f0b90b",
};

export function ChainBadge({ chain }: { chain: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas-muted px-2.5 py-0.5 text-xs font-medium text-ink-soft">
      <span
        className="size-1.5 rounded-full"
        style={{ background: CHAIN_DOTS[chain] ?? "#83819A" }}
      />
      {chain}
    </span>
  );
}

export function RiskBadge({
  level,
}: {
  level: "low" | "medium" | "high";
}) {
  const styles = {
    low:    "bg-signal-green-soft text-signal-green",
    medium: "bg-signal-amber-soft text-signal-amber",
    high:   "bg-signal-red-soft text-signal-red",
  }[level];
  const label = { low: "Low risk", medium: "Review", high: "High risk" }[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
