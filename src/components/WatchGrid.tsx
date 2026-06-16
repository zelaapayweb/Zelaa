"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Risky approvals",
    body: "Unlimited allowances, stale permissions, and unverified spender contracts that could drain your wallet silently.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="2" y="4" width="14" height="17" rx="3" fill="rgba(123,97,255,0.15)" stroke="#7B61FF" strokeWidth="1.2"/>
        <rect x="5" y="8" width="8" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.6"/>
        <rect x="5" y="11" width="6" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.4"/>
        <rect x="5" y="14" width="7" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.3"/>
        <circle cx="17" cy="5" r="4.5" fill="#F6D6D9" stroke="#8B2535" strokeWidth="1"/>
        <text x="17" y="8.5" textAnchor="middle" fill="#8B2535" fontSize="6" fontWeight="800">!</text>
      </svg>
    ),
  },
  {
    title: "Wallet drainer patterns",
    body: "Signature requests and phishing contract structures that match known wallet-draining attacks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M3 8 L10 12 L17 8" stroke="#7B61FF" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
        <path d="M10 12 L10 19" stroke="#7B61FF" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
        <circle cx="3" cy="8" r="2" fill="rgba(123,97,255,0.30)" stroke="#7B61FF" strokeWidth="1"/>
        <circle cx="17" cy="8" r="2" fill="rgba(243,91,200,0.30)" stroke="#F35BC8" strokeWidth="1"/>
        <circle cx="10" cy="19" r="2" fill="rgba(139,37,53,0.20)" stroke="#8B2535" strokeWidth="1" strokeDasharray="1.5 1"/>
        <line x1="12" y1="4" x2="8" y2="4" stroke="#8B2535" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "Fake tokens and mints",
    body: "Token impersonators, zero-value NFT mint traps, and contracts spoofing known project addresses.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="8" cy="11" r="6" fill="rgba(123,97,255,0.15)" stroke="#7B61FF" strokeWidth="1.2"/>
        <text x="8" y="14.5" textAnchor="middle" fill="#7B61FF" fontSize="8" fontWeight="700">$</text>
        <circle cx="15" cy="8" r="5" fill="rgba(243,91,200,0.12)" stroke="#F35BC8" strokeWidth="1.2" strokeDasharray="2 1.5"/>
        <text x="15" y="11" textAnchor="middle" fill="#F35BC8" fontSize="7" fontWeight="700">$</text>
        <line x1="11" y1="6" x2="13" y2="5" stroke="rgba(139,37,53,0.60)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Bridge and route mistakes",
    body: "Wrong destination chain, poor route selection, excessive bridge fees, and cross-chain slippage exposure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="4" cy="11" r="3" fill="rgba(123,97,255,0.18)" stroke="#7B61FF" strokeWidth="1.2"/>
        <circle cx="18" cy="11" r="3" fill="rgba(169,141,255,0.18)" stroke="#A98DFF" strokeWidth="1.2"/>
        <path d="M7 9 Q11 5 15 9" stroke="#7B61FF" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="2 1.5"/>
        <path d="M7 13 Q11 17 15 13" stroke="#8B2535" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="11" cy="17" r="2" fill="#F6D6D9" stroke="#8B2535" strokeWidth="1"/>
        <text x="11" y="20" textAnchor="middle" fill="#8B2535" fontSize="5.5" fontWeight="800">!</text>
      </svg>
    ),
  },
  {
    title: "Gas and fee leakage",
    body: "Gas limit manipulation, recurring fee-heavy patterns, failed transaction waste, and MEV exposure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M10 3 Q8 7 10 10 Q12 13 10 17 Q8 20 10 21" stroke="#7B61FF" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
        <path d="M13 6 Q11 9 13 12 Q15 15 13 18" stroke="rgba(123,97,255,0.45)" strokeWidth="1" strokeLinecap="round" fill="none"/>
        <circle cx="10" cy="21" r="2" fill="rgba(243,91,200,0.35)" stroke="#F35BC8" strokeWidth="1"/>
        <path d="M6 15 Q4 14 5 12" stroke="#8B2535" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.60"/>
        <circle cx="4.5" cy="11" r="1.5" fill="rgba(139,37,53,0.25)" stroke="#8B2535" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    title: "DeFi contract risk",
    body: "Unknown protocol code, unaudited farms, honeypot token structures, and liquidity rug signals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="3" width="12" height="16" rx="3" fill="rgba(123,97,255,0.15)" stroke="#7B61FF" strokeWidth="1.2"/>
        <rect x="6" y="7" width="6" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.6"/>
        <rect x="6" y="10" width="4" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.4"/>
        <rect x="6" y="13" width="5" height="1.5" rx="0.75" fill="#7B61FF" opacity="0.3"/>
        <circle cx="16" cy="15" r="5" fill="rgba(123,97,255,0.10)" stroke="#7B61FF" strokeWidth="1.2"/>
        <path d="M14 15 L15.5 16.5 L18.5 13" stroke="#7B61FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
];

export function WatchGrid() {
  return (
    <section id="detection" className="py-24 sm:py-32" style={{ background: "#F0ECFA" }}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>Detection</p>
          <h2 className="mt-4 heading-section text-ink">Everything Zelaa catches.</h2>
          <p className="mt-5 body-muted text-ink-soft">
            Zelaa checks every dimension of a transaction before you sign —
            not just the contract address.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group rounded-3xl p-6 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.80)",
                border: "1px solid rgba(123,97,255,0.12)",
                boxShadow: "0 1px 2px rgba(19,11,42,0.03)",
              }}
            >
              {/* Icon with glow dot */}
              <div className="relative inline-flex">
                <span
                  className="grid size-11 place-items-center rounded-2xl"
                  style={{
                    background: "#F0ECFA",
                    border: "1px solid rgba(123,97,255,0.14)",
                    color: "#7B61FF",
                    boxShadow: "0 2px 8px rgba(123,97,255,0.08)",
                  }}
                >
                  {item.icon}
                </span>
                {/* Pink glow dot */}
                <span
                  aria-hidden
                  className="absolute -right-1 -top-1 size-2.5 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #F35BC8 30%, rgba(243,91,200,0.40) 100%)",
                    boxShadow: "0 0 6px rgba(243,91,200,0.55)",
                  }}
                />
              </div>

              <h3 className="mt-4" style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.025em", color: "#130B2A", lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p className="mt-2" style={{ fontSize: 14, lineHeight: 1.6, color: "#686176" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
