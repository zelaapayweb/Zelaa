"use client";

import { motion } from "framer-motion";

type RiskLevel = "high" | "medium";

const RISK_STYLES: Record<RiskLevel, { label: string; bg: string; soft: string; text: string }> = {
  high: { label: "High Risk", bg: "#8B2535", soft: "#F6D6D9", text: "#8B2535" },
  medium: { label: "Medium Risk", bg: "#7A5A12", soft: "#F6E7C8", text: "#7A5A12" },
};

const DEMOS = [
  {
    title: "Unlimited USDC approval",
    risk: "high" as RiskLevel,
    score: 91,
    tx: "Approve unlimited USDC",
    signals: ["Unlimited token allowance", "Unverified spender contract"],
    explanation: "This approval would give a third-party contract permanent access to your full USDC balance.",
  },
  {
    title: "Suspicious NFT mint",
    risk: "high" as RiskLevel,
    score: 84,
    tx: "Mint Genesis Pass NFT",
    signals: ["Contract deployed 4 hours ago", "No verified source code"],
    explanation: "Minting from an unverified, freshly deployed contract is a common drainer pattern.",
  },
  {
    title: "Risky bridge route",
    risk: "medium" as RiskLevel,
    score: 68,
    tx: "Bridge 2.5 ETH → Arbitrum",
    signals: ["Unofficial bridge contract", "Route not on approved list"],
    explanation: "This route uses a bridge contract that isn't on Zelaa's verified list — funds could be at risk.",
  },
];

function DemoWarningCard({ demo, index }: { demo: typeof DEMOS[number]; index: number }) {
  const style = RISK_STYLES[demo.risk];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-3xl p-6"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(123,97,255,0.12)",
        boxShadow: "0 1px 2px rgba(19,11,42,0.03), 0 8px 28px rgba(123,97,255,0.06)",
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em", color: "#130B2A", lineHeight: 1.2 }}>
        {demo.title}
      </h3>

      {/* Mock Zelaa warning preview */}
      <div
        className="mt-4 overflow-hidden rounded-2xl"
        style={{ border: "1px solid rgba(123,97,255,0.14)" }}
      >
        <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ background: "#F5F0FF" }}>
          <img src="/zelaa-icon.png" alt="" width={16} height={16} className="shrink-0 rounded-[4px]" style={{ width: 16, height: 16 }} />
          <span className="text-[10.5px] font-semibold" style={{ color: "#130B2A" }}>Zelaa Risk Check</span>
        </div>

        <div className="px-3.5 py-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span
              className="rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white"
              style={{ background: style.bg }}
            >
              {style.label}
            </span>
            <span className="tabular text-[14px] font-bold" style={{ color: style.text }}>
              {demo.score}<span className="text-[9px] font-medium" style={{ color: "#9A92AA" }}>/100</span>
            </span>
          </div>

          <div className="mb-2.5 rounded-lg px-2.5 py-2" style={{ background: "#F6F2FF" }}>
            <p className="text-[8px] uppercase tracking-[0.08em]" style={{ color: "#9A92AA" }}>Transaction</p>
            <p className="text-[10.5px] font-semibold" style={{ color: "#130B2A" }}>{demo.tx}</p>
          </div>

          <div className="space-y-1.5">
            {demo.signals.map((s) => (
              <div key={s} className="flex items-start gap-1.5">
                <span className="mt-[4px] size-1.5 shrink-0 rounded-full" style={{ background: style.bg }} />
                <span className="text-[10px] leading-tight" style={{ color: "#4A4456" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4" style={{ fontSize: 13.5, lineHeight: 1.6, color: "#686176" }}>
        {demo.explanation}
      </p>
    </motion.div>
  );
}

export function DemoWarnings() {
  return (
    <section id="demo-warnings" className="py-24 sm:py-32" style={{ background: "#FBFAFF" }}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>Live preview</p>
          <h2 className="mt-4 heading-section text-ink">Demo warnings Zelaa can catch.</h2>
          <p className="mt-5 body-muted text-ink-soft">
            Zelaa is in private beta — these are sample outputs from the risk engine, not real
            transactions. Here&apos;s what a warning looks like before you ever sign.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <DemoWarningCard key={demo.title} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
