"use client";

import { motion } from "framer-motion";

const RISK_SIGNALS = [
  "Unlimited token approval",
  "Unverified spender contract",
  "Drainer similarity: 94%",
  "Contract age: 2 days old",
];

function TranslationFlow() {
  return (
    <div
      className="mt-5 mb-6 flex items-stretch gap-2 rounded-2xl p-3"
      style={{ background: "rgba(255,255,255,0.50)", border: "1px solid rgba(123,97,255,0.10)" }}
    >
      {/* Raw TX box */}
      <div
        className="flex flex-1 flex-col justify-between rounded-xl p-3"
        style={{ background: "#0B0E15", minHeight: 80 }}
      >
        <p className="text-[8px] font-mono uppercase tracking-[0.08em]" style={{ color: "rgba(169,141,255,0.50)" }}>
          Raw TX
        </p>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 rounded" style={{ width: "82%", background: "rgba(255,255,255,0.10)" }}/>
          <div className="h-1.5 rounded" style={{ width: "62%", background: "rgba(255,255,255,0.07)" }}/>
          <div className="h-1.5 rounded" style={{ width: "74%", background: "rgba(255,255,255,0.08)" }}/>
        </div>
        <p className="mt-2 font-mono text-[7.5px]" style={{ color: "rgba(255,255,255,0.22)" }}>
          0x8F3C...91A2
        </p>
      </div>

      {/* Arrow */}
      <div className="flex shrink-0 flex-col items-center justify-center gap-1">
        <div style={{ width: 18, height: 1, background: "linear-gradient(90deg, rgba(123,97,255,0.35), rgba(169,141,255,0.60))" }}/>
        <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden>
          <path d="M0 3 L6 3 M3 0 L6 3 L3 6" stroke="rgba(169,141,255,0.60)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* AI Orb */}
      <div
        className="flex shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl px-3"
        style={{ background: "rgba(123,97,255,0.06)", border: "1px solid rgba(123,97,255,0.14)" }}
      >
        <div
          className="grid size-10 place-items-center rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(169,141,255,0.55) 0%, rgba(123,97,255,0.30) 60%, transparent 100%)",
            border: "1.5px solid rgba(123,97,255,0.40)",
            boxShadow: "0 0 16px rgba(123,97,255,0.28)",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              background: "linear-gradient(135deg, #A98DFF, #F35BC8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Z
          </span>
        </div>
        <p className="text-[7px] font-medium uppercase tracking-[0.08em]" style={{ color: "#A98DFF" }}>AI</p>
      </div>

      {/* Arrow */}
      <div className="flex shrink-0 flex-col items-center justify-center gap-1">
        <div style={{ width: 18, height: 1, background: "linear-gradient(90deg, rgba(169,141,255,0.60), rgba(243,91,200,0.35))" }}/>
        <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden>
          <path d="M0 3 L6 3 M3 0 L6 3 L3 6" stroke="rgba(243,91,200,0.60)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Risk Report box */}
      <div
        className="flex flex-1 flex-col justify-between rounded-xl p-3"
        style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(123,97,255,0.12)" }}
      >
        <p className="text-[8px] font-medium uppercase tracking-[0.08em]" style={{ color: "#A98DFF" }}>
          Risk Report
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className="rounded-full px-1.5 py-0.5 text-[7px] font-bold uppercase"
            style={{ background: "#F6D6D9", color: "#8B2535" }}
          >
            HIGH
          </span>
          <span className="tabular text-[10px] font-bold" style={{ color: "#8B2535" }}>87</span>
        </div>
        <div className="mt-2 space-y-1">
          {["Drainer pattern", "Unlimited USDC"].map((s) => (
            <div key={s} className="flex items-center gap-1">
              <span className="size-1 shrink-0 rounded-full" style={{ background: "#8B2535" }}/>
              <span className="text-[8px]" style={{ color: "#686176" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskCardMockup() {
  return (
    <div
      className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-white"
      style={{ border: "1.5px solid rgba(123,97,255,0.22)", boxShadow: "0 8px 32px rgba(123,97,255,0.12)" }}
    >
      <div className="px-4 py-3" style={{ background: "#F5F0FF" }}>
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/zelaa-icon.png" alt="" width={20} height={20} className="rounded-[5px]" style={{ width: 20, height: 20 }} />
            <span className="text-xs font-semibold" style={{ color: "#130B2A" }}>Zelaa Risk Check</span>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{ background: "#F6D6D9", color: "#8B2535" }}
          >
            HIGH RISK
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: "rgba(123,97,255,0.12)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FF6B6B, #8B2535)" }}
              initial={{ width: 0 }}
              whileInView={{ width: "87%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          <span className="tabular text-sm font-bold" style={{ color: "#8B2535" }}>87 / 100</span>
        </div>
      </div>
      <div className="px-4 py-3.5">
        <p className="mb-3 text-[10px] uppercase tracking-[0.12em] font-medium" style={{ color: "#9A92AA" }}>
          Detected signals
        </p>
        <div className="mb-4 space-y-2">
          {RISK_SIGNALS.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className="size-1.5 shrink-0 rounded-full" style={{ background: "#8B2535" }}/>
              <span className="text-[12px]" style={{ color: "#686176" }}>{s}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <button className="w-full rounded-xl py-2 text-[12px] font-semibold text-white" style={{ background: "#130B2A" }}>
            Reject transaction
          </button>
          <button className="w-full rounded-xl py-2 text-[12px] font-medium" style={{ background: "#F0ECFA", color: "#686176" }}>
            Limit approval instead
          </button>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Pre-sign warnings",
    body: "Zelaa intercepts every approval and signing request before you confirm — not after the damage is done.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 2 L20 5.5V11C20 16 16 19.5 11 21 6 19.5 2 16 2 11V5.5L11 2Z" fill="rgba(123,97,255,0.18)" stroke="#7B61FF" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M11 7 L11 12 M11 14.5 L11 15" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Approval scanner",
    body: "See every open approval your wallet has given, sorted by risk level. Revoke dangerous ones in one click.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="#7B61FF" strokeWidth="1.3" fill="rgba(123,97,255,0.12)"/>
        <path d="M15.5 15.5 L20 20" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 10 L9.5 12.5 L13.5 8" stroke="#7B61FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Plain-language explainers",
    body: "No hex codes. No jargon. Every transaction gets translated into exactly what it does to your wallet.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="2" y="3" width="18" height="16" rx="4" fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="1.2"/>
        <rect x="5" y="7" width="12" height="1.8" rx="0.9" fill="#7B61FF" opacity="0.7"/>
        <rect x="5" y="11" width="8" height="1.8" rx="0.9" fill="#7B61FF" opacity="0.5"/>
        <rect x="5" y="15" width="10" height="1.8" rx="0.9" fill="#7B61FF" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "Demo mode",
    body: "Try Zelaa against real high-risk transactions before connecting any wallet or installing anything.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="2" y="5" width="18" height="12" rx="3" fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="1.2"/>
        <path d="M9 9 L14 11.5 L9 14 Z" fill="#7B61FF" opacity="0.75"/>
      </svg>
    ),
  },
];

export function BentoSection() {
  return (
    <section id="features" className="px-4 py-24 sm:px-8 sm:py-32" style={{ background: "#F6F2FF" }}>
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>Product</p>
          <h2
            className="mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: "#130B2A",
            }}
          >
            Your transactions,
            <br />
            <em style={{ color: "#7B61FF" }}>finally explained.</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5 lg:grid-rows-2">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col overflow-hidden rounded-3xl lg:col-span-3 lg:row-span-2"
            style={{
              background: "linear-gradient(145deg, #EDE6FF 0%, #F5F0FF 100%)",
              border: "1px solid rgba(123,97,255,0.14)",
              minHeight: 420,
              padding: "36px 32px",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(169,141,255,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translate(30%, -20%)",
              }}
            />
            <div className="relative">
              <span className="eyebrow" style={{ color: "#A98DFF" }}>Real-time analysis</span>
              <h3
                className="mt-3"
                style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", color: "#130B2A", lineHeight: 1.2 }}
              >
                Know your risk score<br />before you confirm.
              </h3>
              <p className="mt-3" style={{ fontSize: 14, lineHeight: 1.6, color: "#686176" }}>
                Zelaa translates raw wallet requests into plain-English risk signals — scored 0–100 in under a second.
              </p>
              <TranslationFlow />
            </div>
            <div className="relative mt-2 flex flex-1 items-end">
              <RiskCardMockup />
            </div>
          </motion.div>

          {/* Small right cards */}
          {FEATURES.slice(0, 2).map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="flex flex-col rounded-3xl p-7 lg:col-span-2"
              style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(123,97,255,0.12)" }}
            >
              <span
                className="grid size-11 place-items-center rounded-2xl"
                style={{ background: "#F0ECFA", border: "1px solid rgba(123,97,255,0.14)" }}
              >
                {feat.icon}
              </span>
              <h3 className="mt-4" style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em", color: "#130B2A", lineHeight: 1.2 }}>
                {feat.title}
              </h3>
              <p className="mt-2" style={{ fontSize: 14, lineHeight: 1.55, color: "#686176" }}>
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(2).map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-start gap-5 rounded-3xl p-7"
              style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(123,97,255,0.12)" }}
            >
              <span
                className="grid shrink-0 place-items-center rounded-2xl"
                style={{ width: 48, height: 48, background: "#F0ECFA", border: "1px solid rgba(123,97,255,0.14)" }}
              >
                {feat.icon}
              </span>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em", color: "#130B2A", lineHeight: 1.2 }}>
                  {feat.title}
                </h3>
                <p className="mt-1.5" style={{ fontSize: 14, lineHeight: 1.55, color: "#686176" }}>
                  {feat.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
