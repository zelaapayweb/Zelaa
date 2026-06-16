"use client";

import { motion } from "framer-motion";

function DAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="1" y="4" width="20" height="14" rx="3.5" fill="rgba(123,97,255,0.18)" stroke="rgba(123,97,255,0.40)" strokeWidth="1.1"/>
      <rect x="4" y="8" width="14" height="2" rx="1" fill="rgba(123,97,255,0.45)"/>
      <rect x="4" y="12" width="8" height="2" rx="1" fill="rgba(123,97,255,0.28)"/>
      <rect x="14" y="12" width="4" height="2" rx="1" fill="rgba(123,97,255,0.20)"/>
    </svg>
  );
}

function ZelaaAnalyzeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="1" y="1" width="20" height="20" rx="5.5" fill="rgba(123,97,255,0.22)" stroke="rgba(123,97,255,0.55)" strokeWidth="1.1"/>
      <text x="11" y="15.5" textAnchor="middle" fill="rgba(123,97,255,0.90)" fontSize="11" fontWeight="800">Z</text>
    </svg>
  );
}

function ClearSignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="10" fill="rgba(169,141,255,0.18)" stroke="rgba(169,141,255,0.52)" strokeWidth="1.1"/>
      <path d="M6.5 11 L9.5 14 L15.5 8" stroke="rgba(169,141,255,0.90)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const TIMELINE = [
  { Icon: DAppIcon, label: "dApp request", active: false },
  { Icon: ZelaaAnalyzeIcon, label: "Zelaa analyzes", active: true },
  { Icon: ClearSignIcon, label: "Sign with clarity", active: false },
];

const STEPS = [
  {
    step: "01",
    title: "You start a transaction",
    body: "You click Confirm or Approve in a dApp. Your wallet popup appears — Zelaa is already watching, silently.",
    accent: "#7B61FF",
  },
  {
    step: "02",
    title: "Zelaa analyzes in real time",
    body: "The extension reads the contract, spender, method, amount, and on-chain context. No funds touched. Analysis in under a second.",
    accent: "#A98DFF",
  },
  {
    step: "03",
    title: "You get a clear risk signal",
    body: "Before you confirm, you see Safe, Review, or High Risk — with a plain-language explanation of exactly what you're signing.",
    accent: "#F35BC8",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32" style={{ background: "#FBFAFF" }}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>How it works</p>
          <h2 className="mt-4 heading-section text-ink">
            Three seconds to a safer signature.
          </h2>
          <p className="mt-5 body-muted text-ink-soft">
            Zelaa runs between your wallet popup and your confirmation —
            not after the damage is done.
          </p>
        </div>

        {/* ── Desktop timeline ── */}
        <div className="relative mt-14 hidden lg:block">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute top-7 left-1/2 -translate-x-1/2"
            style={{
              width: "52%",
              height: 1,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(123,97,255,0.22) 15%, rgba(169,141,255,0.38) 50%, rgba(243,91,200,0.22) 85%, transparent 100%)",
            }}
          />

          <div className="flex items-start justify-center">
            {TIMELINE.map((s, i) => (
              <div key={s.label} className="flex flex-1 flex-col items-center">
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Glow under active node */}
                  {s.active && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute"
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(123,97,255,0.20) 0%, transparent 70%)",
                        filter: "blur(10px)",
                        transform: "translateY(-4px)",
                      }}
                    />
                  )}

                  <div
                    className="relative grid size-14 place-items-center rounded-full"
                    style={{
                      background: s.active ? "rgba(123,97,255,0.10)" : "rgba(123,97,255,0.05)",
                      border: `1px solid ${s.active ? "rgba(123,97,255,0.32)" : "rgba(123,97,255,0.15)"}`,
                      boxShadow: s.active ? "0 0 0 7px rgba(123,97,255,0.05)" : "none",
                    }}
                  >
                    <s.Icon />
                  </div>

                  <p
                    className="mt-3 text-center text-[12px] font-medium"
                    style={{ color: s.active ? "#7B61FF" : "#9A92AA", letterSpacing: "-0.01em" }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile timeline (vertical) ── */}
        <div className="mt-10 flex flex-col items-center lg:hidden">
          {TIMELINE.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center">
              <div
                className="grid size-12 place-items-center rounded-full"
                style={{
                  background: s.active ? "rgba(123,97,255,0.10)" : "rgba(123,97,255,0.05)",
                  border: `1px solid ${s.active ? "rgba(123,97,255,0.30)" : "rgba(123,97,255,0.14)"}`,
                }}
              >
                <s.Icon />
              </div>
              <p className="mt-1.5 text-[12px] font-medium text-center" style={{ color: s.active ? "#7B61FF" : "#9A92AA" }}>
                {s.label}
              </p>
              {i < TIMELINE.length - 1 && (
                <div style={{ width: 1, height: 22, background: "rgba(123,97,255,0.18)", margin: "6px 0" }} />
              )}
            </div>
          ))}
        </div>

        {/* ── Step cards ── */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
              className="relative rounded-3xl p-7"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(123,97,255,0.12)",
                boxShadow: "0 1px 2px rgba(19,11,42,0.04), 0 8px 28px rgba(123,97,255,0.06)",
              }}
            >
              <span className="tabular absolute right-6 top-6 font-mono text-[11px]" style={{ color: "#C4BDD4" }}>
                {step.step}
              </span>
              <div className="mb-6 h-1 w-10 rounded-full" style={{ background: step.accent }} />
              <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.03em", color: "#130B2A", lineHeight: 1.25 }}>
                {step.title}
              </h3>
              <p className="mt-3" style={{ fontSize: 14, lineHeight: 1.6, color: "#686176" }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
