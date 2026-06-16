"use client";

import { motion } from "framer-motion";

function ApprovalStackIllustration() {
  return (
    <svg width="112" height="78" viewBox="0 0 112 78" fill="none" aria-hidden>
      {/* Back card */}
      <rect x="24" y="18" width="72" height="46" rx="7" fill="rgba(169,141,255,0.07)" stroke="rgba(123,97,255,0.16)" strokeWidth="1"/>
      {/* Mid card */}
      <rect x="14" y="11" width="72" height="46" rx="7" fill="rgba(169,141,255,0.11)" stroke="rgba(123,97,255,0.22)" strokeWidth="1"/>
      {/* Front card */}
      <rect x="4" y="4" width="72" height="46" rx="7" fill="white" stroke="rgba(123,97,255,0.28)" strokeWidth="1.2"/>
      {/* Front card header line */}
      <rect x="12" y="13" width="34" height="3" rx="1.5" fill="rgba(123,97,255,0.18)"/>
      {/* Body lines */}
      <rect x="12" y="21" width="50" height="2.5" rx="1.25" fill="rgba(123,97,255,0.10)"/>
      <rect x="12" y="27" width="36" height="2.5" rx="1.25" fill="rgba(123,97,255,0.07)"/>
      {/* UNLIMITED badge */}
      <rect x="12" y="35" width="56" height="12" rx="4" fill="#F6D6D9"/>
      <text x="40" y="45" textAnchor="middle" fill="#8B2535" fontSize="6.5" fontWeight="700" letterSpacing="0.07em">UNLIMITED</text>
      {/* Warning badge top-right */}
      <circle cx="103" cy="9" r="8" fill="#8B2535"/>
      <text x="103" y="13.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="800">!</text>
    </svg>
  );
}

function PhishingPopupIllustration() {
  return (
    <svg width="112" height="78" viewBox="0 0 112 78" fill="none" aria-hidden>
      {/* Modal frame */}
      <rect x="6" y="4" width="86" height="64" rx="9" fill="white" stroke="rgba(123,97,255,0.20)" strokeWidth="1.2"/>
      {/* Title bar */}
      <rect x="6" y="4" width="86" height="17" rx="9" fill="rgba(123,97,255,0.07)"/>
      <rect x="6" y="13" width="86" height="8" fill="rgba(123,97,255,0.07)"/>
      {/* Scrambled hex lines */}
      <rect x="18" y="28" width="46" height="3.5" rx="1.75" fill="rgba(123,97,255,0.13)"/>
      <rect x="18" y="36" width="32" height="3.5" rx="1.75" fill="rgba(123,97,255,0.09)"/>
      <rect x="18" y="44" width="40" height="3.5" rx="1.75" fill="rgba(123,97,255,0.11)"/>
      <rect x="18" y="52" width="24" height="3.5" rx="1.75" fill="rgba(123,97,255,0.07)"/>
      {/* Frosted blur overlay */}
      <rect x="6" y="24" width="86" height="42" rx="4" fill="rgba(255,255,255,0.72)"/>
      {/* Question mark circle */}
      <circle cx="49" cy="47" r="15" fill="rgba(169,141,255,0.13)" stroke="rgba(123,97,255,0.22)" strokeWidth="1.2"/>
      <text x="49" y="52" textAnchor="middle" fill="#7B61FF" fontSize="16" fontWeight="600">?</text>
    </svg>
  );
}

function HoneypotIllustration() {
  return (
    <svg width="112" height="78" viewBox="0 0 112 78" fill="none" aria-hidden>
      {/* Token coin */}
      <circle cx="27" cy="39" r="19" fill="rgba(123,97,255,0.08)" stroke="rgba(123,97,255,0.22)" strokeWidth="1.2"/>
      <circle cx="27" cy="39" r="12" fill="rgba(123,97,255,0.14)" stroke="rgba(123,97,255,0.28)" strokeWidth="1"/>
      <text x="27" y="43" textAnchor="middle" fill="#7B61FF" fontSize="12" fontWeight="700">$</text>
      {/* Dashed thread to trap */}
      <path d="M46 39 Q60 32 74 26" stroke="rgba(139,37,53,0.38)" strokeWidth="1.3" strokeDasharray="3 2.5" fill="none"/>
      {/* Fake MINT button */}
      <rect x="72" y="14" width="36" height="20" rx="6" fill="rgba(123,97,255,0.12)" stroke="rgba(123,97,255,0.30)" strokeWidth="1.2"/>
      <text x="90" y="28" textAnchor="middle" fill="#7B61FF" fontSize="8.5" fontWeight="700">MINT</text>
      {/* Connector down to trap */}
      <line x1="90" y1="34" x2="90" y2="46" stroke="rgba(139,37,53,0.28)" strokeWidth="1" strokeDasharray="2 2"/>
      {/* Danger node */}
      <circle cx="90" cy="58" r="12" fill="rgba(139,37,53,0.09)" stroke="rgba(139,37,53,0.36)" strokeWidth="1.2" strokeDasharray="3 2"/>
      <text x="90" y="62.5" textAnchor="middle" fill="#8B2535" fontSize="11" fontWeight="700">!</text>
    </svg>
  );
}

const PAINS = [
  {
    Illustration: ApprovalStackIllustration,
    title: "Wallet drainer approved",
    body: "One unlimited approval to the wrong contract and your entire balance can be silently drained — in seconds.",
    stat: "$3.8B lost to drainers in 2024",
    statColor: "#8B2535",
  },
  {
    Illustration: PhishingPopupIllustration,
    title: "Signed a phishing contract",
    body: "Fake DeFi UIs with convincing domains trick users into signing malicious approvals every single day.",
    stat: "1 in 3 phishing attempts succeed",
    statColor: "#7A5A12",
  },
  {
    Illustration: HoneypotIllustration,
    title: "Honeypot token trap",
    body: "Tokens you can buy but can never sell. By the time you realize, the exit liquidity is long gone.",
    stat: "Avg loss per victim: $12,400",
    statColor: "#8B2535",
  },
];

export function PainSection() {
  return (
    <section className="px-4 py-24 sm:px-8 sm:py-32" style={{ background: "#FBFAFF" }}>
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>The problem</p>
          <h2
            className="mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.01,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: "#130B2A",
            }}
          >
            You move fast in crypto.
            <br />
            One bad signature can cost everything.
          </h2>
          <p className="mx-auto mt-5 max-w-md" style={{ fontSize: 15, lineHeight: 1.6, color: "#686176" }}>
            Wallets show you what you&apos;re signing. Nothing tells you whether you should.
            Until now.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              style={{
                background: "#F0ECFA",
                borderRadius: 24,
                padding: "28px 28px 24px",
                border: "1px solid rgba(123,97,255,0.10)",
              }}
            >
              <pain.Illustration />
              <h3
                className="mt-4"
                style={{ fontSize: 16, fontWeight: 600, color: "#130B2A", letterSpacing: "-0.025em", lineHeight: 1.2 }}
              >
                {pain.title}
              </h3>
              <p className="mt-2.5" style={{ fontSize: 14, lineHeight: 1.6, color: "#686176" }}>
                {pain.body}
              </p>
              <div className="mt-5 border-t pt-4" style={{ borderColor: "rgba(123,97,255,0.12)" }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: pain.statColor,
                    textTransform: "uppercase",
                  }}
                >
                  {pain.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
