"use client";

import { motion } from "framer-motion";
import { SectionHeading, Reveal } from "./Reveal";

function TxField({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid #F1EBEB" }}>
      <span className="text-[11px] text-ink-faint">{label}</span>
      <span className={`text-[11px] font-medium ${highlight ? "font-semibold" : "text-ink"}`} style={highlight ? { color: "#8B2535" } : {}}>
        {value}
      </span>
    </div>
  );
}

function SignalDot({ color }: { color: string }) {
  return <span className="mt-[3px] size-1.5 shrink-0 rounded-full" style={{ background: color }} />;
}

export function ProductDemo() {
  return (
    <section id="demo" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Product"
          title="The AI layer between you and bad transactions."
          subtitle="Zelaa reads the exact data your wallet is asking you to sign and tells you what it means before you click confirm."
        />

        <Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1fr]">
            {/* Left: Transaction details */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <span
                  className="size-5 shrink-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #E2761B 0%, #cd6116 100%)" }}
                />
                <span className="text-[12px] font-semibold text-ink">MetaMask — Pending signature</span>
              </div>

              <div className="mb-5 rounded-xl bg-canvas-soft p-4">
                <p className="text-[10px] uppercase tracking-[0.1em] text-ink-faint mb-1">Action</p>
                <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">Approve token spending</p>
              </div>

              <TxField label="Contract" value="0x8F3C4d2E...91A2" />
              <TxField label="Function" value="approve(address,uint256)" />
              <TxField label="Spender" value="0xDe4d...a91B (unverified)" />
              <TxField label="Network" value="Ethereum Mainnet" />
              <TxField label="Token" value="USDC" />
              <TxField label="Amount" value="Unlimited (2^256 − 1)" highlight />
              <TxField label="Estimated gas" value="~$4.20" />

              <div className="mt-5 rounded-xl border border-border bg-canvas-cream p-3.5">
                <p className="text-[10px] text-ink-faint">
                  <span className="font-medium text-ink">What you&apos;re agreeing to:</span>{" "}
                  This contract will be able to move any amount of USDC from your wallet at any time, without further approval.
                </p>
              </div>
            </div>

            {/* Right: Zelaa analysis */}
            <div className="overflow-hidden rounded-2xl border bg-white shadow-card" style={{ borderColor: "#F6D6D9" }}>
              {/* Header */}
              <div className="px-6 py-5 sm:px-8" style={{ background: "#FEF1F2" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid size-6 place-items-center rounded-[6px] bg-ink">
                      <span className="text-[10px] font-bold leading-none text-white">Z</span>
                    </div>
                    <span className="text-[13px] font-semibold text-ink">Zelaa Risk Analysis</span>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{ background: "#F6D6D9", color: "#8B2535" }}
                  >
                    High Risk
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: "#EDE7E7" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "#8B2535" }}
                    />
                  </div>
                  <span className="tabular text-[13px] font-bold" style={{ color: "#8B2535" }}>87 / 100</span>
                </div>

                <p className="mt-3 text-[11px] leading-relaxed" style={{ color: "rgba(139,37,53,0.7)" }}>
                  This approval grants unlimited USDC access to an unverified contract with high drainer similarity. Do not confirm.
                </p>
              </div>

              {/* Signals */}
              <div className="px-6 py-5 sm:px-8">
                <p className="mb-3 text-[10px] uppercase tracking-[0.1em] text-ink-faint">Detected signals</p>
                <div className="space-y-3">
                  {[
                    { text: "Unlimited token approval — no spending cap set", color: "#8B2535" },
                    { text: "Spender contract not verified on Etherscan", color: "#8B2535" },
                    { text: "Drainer pattern similarity: 94% match to known drainers", color: "#8B2535" },
                    { text: "Contract deployed 2 days ago — no usage history", color: "#7A5A12" },
                    { text: "No prior approvals to this address from similar wallets", color: "#7A5A12" },
                  ].map(({ text, color }) => (
                    <div key={text} className="flex items-start gap-2.5">
                      <SignalDot color={color} />
                      <span className="text-[11px] leading-snug text-ink-soft">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <button className="rounded-xl bg-ink py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#1a1a1a]">
                    Reject transaction
                  </button>
                  <button className="rounded-xl bg-canvas-soft py-2.5 text-[11px] font-medium text-ink-soft transition-colors hover:bg-canvas-muted">
                    Limit approval instead
                  </button>
                </div>

                <p className="mt-3.5 text-center text-[10px] tracking-[-0.01em] text-ink-ghost">
                  Zelaa never moves funds. You make the final call.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
