"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/AuthContext";
import type { RewardStatus } from "@/lib/auth";

// ── Telegram link ─────────────────────────────────────────────────────────────
const TELEGRAM_LINK =
  process.env.NEXT_PUBLIC_TELEGRAM_REWARD_LINK ?? "https://t.me/zelaapayweb";

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ── Status config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  RewardStatus,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  not_started: {
    label: "Not started",
    color: "#686176",
    bg: "#F8F7FC",
    border: "rgba(123,97,255,0.10)",
    dot: "#C4BDD4",
  },
  pending_verification: {
    label: "Pending verification",
    color: "#7A5A12",
    bg: "#F6E7C8",
    border: "rgba(122,90,18,0.18)",
    dot: "#FEBC2E",
  },
  approved: {
    label: "Approved",
    color: "#2D6B4A",
    bg: "#DDEEE3",
    border: "rgba(45,107,74,0.18)",
    dot: "#34A853",
  },
  rejected: {
    label: "Not approved",
    color: "#8B2535",
    bg: "#F6D6D9",
    border: "rgba(139,37,53,0.18)",
    dot: "#FF5F57",
  },
  paid: {
    label: "Reward completed",
    color: "#7B61FF",
    bg: "rgba(123,97,255,0.10)",
    border: "rgba(123,97,255,0.22)",
    dot: "#7B61FF",
  },
};

function StatusPill({ status }: { status: RewardStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-medium"
      style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
    >
      <span className="size-1.5 rounded-full" style={{ background: cfg.dot }} />
      {cfg.label}
    </span>
  );
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 rounded-2xl px-5 py-3 text-[13.5px] font-medium shadow-xl"
      style={{
        background: "rgba(19,11,42,0.92)",
        color: "#fff",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        minWidth: 260,
        maxWidth: 420,
      }}
    >
      <span
        className="size-2 shrink-0 rounded-full"
        style={{ background: "#34A853" }}
      />
      {message}
    </motion.div>
  );
}

// ── Claim modal ───────────────────────────────────────────────────────────────

function ClaimModal({
  onClose,
  onConfirm,
  submitting,
}: {
  onClose: () => void;
  onConfirm: () => void;
  submitting: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
        style={{ background: "rgba(19,11,42,0.45)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[480px] rounded-3xl p-8"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(123,97,255,0.14)",
            boxShadow: "0 4px 8px rgba(19,11,42,0.06), 0 32px 80px rgba(123,97,255,0.18)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="mb-5">
            <div
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
              style={{ background: "#F6E7C8", color: "#7A5A12", border: "1px solid rgba(122,90,18,0.18)" }}
            >
              <span className="size-1.5 rounded-full" style={{ background: "#FEBC2E" }} />
              Manual verification required
            </div>
            <h2
              className="text-[20px] font-semibold leading-tight"
              style={{ letterSpacing: "-0.03em", color: "var(--color-ink)" }}
            >
              Apply for $200 Beta Reward
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              To proceed with your reward eligibility claim, you need to speak
              with the Zelaa team on Telegram. We will review your account
              manually and confirm whether you qualify.
            </p>
          </div>

          {/* Bullets */}
          <ul className="mb-6 flex flex-col gap-2.5">
            {[
              "This reward is not automatic — manual review is required",
              "No seed phrase or private key will ever be requested",
              "Do not send funds to anyone claiming to be Zelaa",
              "Eligibility is reviewed manually by the Zelaa team",
              "Final approval is at Zelaa's discretion",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-[5px] size-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--color-violet)" }}
                />
                <span className="text-[13px] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Warning */}
          <div
            className="mb-6 rounded-xl px-4 py-3 text-[12px] leading-relaxed"
            style={{
              background: "var(--color-signal-amber-soft)",
              color: "var(--color-signal-amber)",
              border: "1px solid rgba(122,90,18,0.14)",
            }}
          >
            Rewards are not guaranteed. Eligibility is reviewed manually by the Zelaa team.
            Zelaa reserves the right to reject suspicious, duplicate, or ineligible claims.
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl py-3 text-[14px] font-medium transition-colors"
              style={{
                background: "var(--color-canvas-soft)",
                color: "var(--color-ink-soft)",
                border: "1px solid var(--color-border)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={submitting}
              className="btn-gradient flex-1 rounded-xl py-3 text-[14px] font-medium text-white disabled:opacity-60"
            >
              {submitting ? "Opening Telegram…" : "Continue to Telegram →"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Timeline ──────────────────────────────────────────────────────────────────

type TimelineStep = {
  label: string;
  sublabel?: string;
  done: boolean;
  active?: boolean;
};

function RewardTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          {/* Track */}
          <div className="flex flex-col items-center">
            <div
              className="size-[22px] shrink-0 rounded-full flex items-center justify-center"
              style={{
                background: step.done
                  ? "var(--color-violet)"
                  : step.active
                  ? "rgba(123,97,255,0.18)"
                  : "var(--color-canvas-soft)",
                border: step.active
                  ? "1.5px solid var(--color-violet)"
                  : "1.5px solid var(--color-border)",
              }}
            >
              {step.done ? (
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5L4.5 8L9 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <div
                  className="size-2 rounded-full"
                  style={{ background: step.active ? "var(--color-violet)" : "var(--color-border)" }}
                />
              )}
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-px flex-1 mt-1 mb-1"
                style={{
                  background: step.done
                    ? "var(--color-violet)"
                    : "var(--color-border)",
                  minHeight: 24,
                  opacity: step.done ? 0.4 : 0.6,
                }}
              />
            )}
          </div>
          {/* Content */}
          <div className="pb-5">
            <p
              className="text-[13.5px] font-medium"
              style={{ color: step.done || step.active ? "var(--color-ink)" : "var(--color-ink-ghost)" }}
            >
              {step.label}
            </p>
            {step.sublabel && (
              <p className="mt-0.5 text-[12px]" style={{ color: "var(--color-ink-faint)" }}>
                {step.sublabel}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Dashboard nav ─────────────────────────────────────────────────────────────

function DashboardNav({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  return (
    <nav
      className="sticky top-0 z-30 flex items-center justify-between gap-4 px-5 sm:px-8 py-3.5"
      style={{
        background: "rgba(251,250,255,0.90)",
        borderBottom: "1px solid var(--color-border-soft)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/zelaa-icon.png" alt="Zelaa" width={28} height={28} className="rounded-[8px]" style={{ width: 28, height: 28 }} />
          <span style={{ fontSize: 17, fontWeight: 650, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
            Zelaa
          </span>
        </Link>
        <span
          className="hidden sm:inline-block text-[12px] font-medium rounded-full px-3 py-1"
          style={{ background: "rgba(123,97,255,0.08)", color: "var(--color-violet)", border: "1px solid rgba(123,97,255,0.16)" }}
        >
          Beta Dashboard
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div
          className="hidden sm:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px]"
          style={{ background: "var(--color-canvas-soft)", border: "1px solid var(--color-border)", color: "var(--color-ink-soft)" }}
        >
          <span className="size-1.5 rounded-full" style={{ background: "var(--color-signal-green)" }} />
          {email}
        </div>
        <button
          onClick={onSignOut}
          className="text-[13px] font-medium rounded-xl px-4 py-2 transition-colors"
          style={{ color: "var(--color-ink-soft)", background: "var(--color-canvas-soft)", border: "1px solid var(--color-border)" }}
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, loading, claim, signOut, updateRewardStatus, refreshClaim } = useAuth();
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [user, loading, router]);

  // Refresh claim on mount
  useEffect(() => {
    if (user) refreshClaim();
  }, [user, refreshClaim]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.replace("/login");
  }, [signOut, router]);

  const handleContinueToTelegram = useCallback(async () => {
    setSubmitting(true);
    await updateRewardStatus("pending_verification");
    window.open(TELEGRAM_LINK, "_blank", "noopener,noreferrer");
    setModalOpen(false);
    setSubmitting(false);
    setToast("Reward status updated to pending verification.");
  }, [updateRewardStatus]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-canvas)" }}>
        <div className="size-6 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" style={{ borderColor: "var(--color-violet)", borderTopColor: "transparent" }} />
      </div>
    );
  }

  const status: RewardStatus = claim?.status ?? "not_started";
  const statusCfg = STATUS_CONFIG[status];

  const canClaim = status === "not_started";

  // Timeline steps
  const timelineSteps: TimelineStep[] = [
    {
      label: "Account created",
      sublabel: fmt(user.created_at),
      done: true,
    },
    {
      label: "Reward claim started",
      sublabel: claim?.claimed_at ? fmt(claim.claimed_at) : undefined,
      done: ["pending_verification", "approved", "rejected", "paid"].includes(status),
      active: status === "not_started" ? false : undefined,
    },
    {
      label: "Telegram verification pending",
      sublabel: claim?.telegram_opened_at ? fmt(claim.telegram_opened_at) : undefined,
      done: ["approved", "rejected", "paid"].includes(status),
      active: status === "pending_verification",
    },
    {
      label: "Team review",
      sublabel: claim?.reviewed_at ? fmt(claim.reviewed_at) : undefined,
      done: ["approved", "rejected", "paid"].includes(status),
      active: false,
    },
    {
      label:
        status === "rejected"
          ? "Claim not approved"
          : status === "approved" || status === "paid"
          ? "Claim approved"
          : "Outcome",
      done: ["approved", "rejected", "paid"].includes(status),
      active: false,
    },
  ];

  // Status empty-state copy
  const rewardStatusCopy: Record<RewardStatus, string> = {
    not_started: "You have not started your reward verification yet.",
    pending_verification: "Your reward claim is pending Telegram verification with the Zelaa team.",
    approved: "Your reward claim has been approved. The team will contact you with next steps.",
    rejected: "Your reward claim was not approved after review.",
    paid: "Reward completed.",
  };

  return (
    <>
      <div className="min-h-screen" style={{ background: "var(--color-canvas)" }}>
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0"
          style={{
            height: 360,
            background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(169,141,255,0.16) 0%, rgba(255,139,216,0.08) 50%, transparent 72%)",
          }}
        />

        <DashboardNav email={user.email} onSignOut={handleSignOut} />

        <main className="relative mx-auto max-w-5xl px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-6">

          {/* ── Welcome card ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl px-6 sm:px-8 py-7"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(246,242,255,0.90) 100%)",
              border: "1px solid rgba(123,97,255,0.14)",
              boxShadow: "0 2px 4px rgba(19,11,42,0.04), 0 16px 48px rgba(123,97,255,0.08)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--color-violet)" }}>
                  Beta Access
                </p>
                <h1
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--color-ink)",
                    lineHeight: 1.15,
                  }}
                >
                  Welcome to Zelaa Beta
                </h1>
                <p className="max-w-[520px] text-[14px] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  Your browser-based crypto transaction safety layer is being prepared.
                  Join the beta, track your status, and apply for early rewards.
                </p>
              </div>
              {/* Status pills */}
              <div className="flex flex-row sm:flex-col gap-2 flex-wrap shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-medium whitespace-nowrap" style={{ background: "#F8F7FC", color: "var(--color-ink-faint)", border: "1px solid var(--color-border)" }}>
                  <span className="size-1.5 rounded-full" style={{ background: "var(--color-ink-ghost)" }} />
                  Extension: Coming soon
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-medium whitespace-nowrap" style={{ background: "var(--color-signal-green-soft)", color: "var(--color-signal-green)", border: "1px solid rgba(45,107,74,0.16)" }}>
                  <span className="size-1.5 rounded-full" style={{ background: "var(--color-signal-green)" }} />
                  Account: Active
                </span>
                <StatusPill status={status} />
              </div>
            </div>
          </motion.div>

          {/* ── Card grid ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Beta access card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl px-6 py-6 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(123,97,255,0.12)",
                boxShadow: "0 2px 4px rgba(19,11,42,0.03), 0 12px 32px rgba(123,97,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="size-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(123,97,255,0.10)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="#7B61FF" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M2 17l10 5 10-5" stroke="#7B61FF" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M2 12l10 5 10-5" stroke="#7B61FF" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-medium" style={{ color: "var(--color-ink-faint)" }}>Product</p>
                  <h2 className="text-[16px] font-semibold" style={{ letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                    Chrome Extension Beta
                  </h2>
                </div>
              </div>

              <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: "var(--color-ink-soft)" }}>
                Zelaa is building pre-sign warnings for risky approvals, swaps, bridges, mints,
                and smart contract interactions. Get notified when your beta slot opens.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#waitlist"
                  className="btn-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-medium text-white"
                >
                  Join extension waitlist
                </a>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-medium"
                  style={{ background: "#F8F7FC", color: "var(--color-ink-faint)", border: "1px solid var(--color-border)" }}
                >
                  <motion.span
                    className="size-1.5 rounded-full"
                    style={{ background: "#9A92AA" }}
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Private beta opening soon
                </span>
              </div>
            </motion.div>

            {/* Reward card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl px-6 py-6 flex flex-col relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(123,97,255,0.15)",
                boxShadow: "0 2px 4px rgba(19,11,42,0.04), 0 16px 48px rgba(123,97,255,0.12)",
              }}
            >
              {/* Accent gradient stripe */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #7B61FF, #FF8BD8)" }}
              />

              {/* Ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(169,141,255,0.12) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[12px] font-medium mb-0.5" style={{ color: "var(--color-ink-faint)" }}>Reward Program</p>
                    <h2 className="text-[16px] font-semibold" style={{ letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                      $200 Beta Reward
                    </h2>
                  </div>
                  <StatusPill status={status} />
                </div>

                {/* Big amount */}
                <div className="my-5 flex items-end gap-2">
                  <span
                    className="tabular"
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "clamp(2.8rem, 6vw, 3.6rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.04em",
                      color: "var(--color-ink)",
                      lineHeight: 1,
                    }}
                  >
                    $200
                  </span>
                  <span className="mb-1 text-[13px]" style={{ color: "var(--color-ink-faint)" }}>
                    subject to eligibility
                  </span>
                </div>

                {/* Status message */}
                <p className="mb-5 text-[13px] leading-relaxed" style={{ color: statusCfg.color, background: statusCfg.bg, border: `1px solid ${statusCfg.border}`, borderRadius: 12, padding: "10px 14px" }}>
                  {rewardStatusCopy[status]}
                </p>

                {/* CTA */}
                {canClaim ? (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-gradient w-full rounded-xl py-3 text-[14px] font-medium text-white"
                  >
                    Claim reward eligibility →
                  </button>
                ) : (
                  <div
                    className="w-full rounded-xl py-3 text-center text-[13.5px] font-medium"
                    style={{ background: statusCfg.bg, color: statusCfg.color, border: `1px solid ${statusCfg.border}` }}
                  >
                    {status === "pending_verification" && "Awaiting Telegram verification"}
                    {status === "approved" && "Claim approved — team will contact you"}
                    {status === "rejected" && "Claim not approved"}
                    {status === "paid" && "Reward completed"}
                  </div>
                )}

                <p className="mt-3 text-center text-[11.5px] leading-relaxed" style={{ color: "var(--color-ink-ghost)" }}>
                  Manual verification required. Rewards are subject to approval and eligibility.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Reward verification timeline ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl px-6 sm:px-8 py-7"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(123,97,255,0.10)",
              boxShadow: "0 2px 4px rgba(19,11,42,0.03), 0 10px 28px rgba(123,97,255,0.06)",
            }}
          >
            <h3 className="mb-6 text-[15px] font-semibold" style={{ letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
              Reward Verification Timeline
            </h3>
            <RewardTimeline steps={timelineSteps} />
          </motion.div>

          {/* ── Disclaimer ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl px-6 py-4 text-[12px] leading-relaxed"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid var(--color-border-soft)",
              color: "var(--color-ink-ghost)",
            }}
          >
            <span className="font-medium" style={{ color: "var(--color-ink-faint)" }}>Security reminder: </span>
            Zelaa will never ask for your seed phrase, private keys, or funds. Rewards are not guaranteed.
            Eligibility is reviewed manually by the Zelaa team.
            <br />
            <span className="mt-1 block">
              Zelaa provides transaction risk intelligence, not financial advice. Users remain responsible
              for every transaction they sign.
            </span>
          </motion.div>
        </main>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ClaimModal
          onClose={() => setModalOpen(false)}
          onConfirm={handleContinueToTelegram}
          submitting={submitting}
        />
      )}

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast key="toast" message={toast} onDone={() => setToast(null)} />}
      </AnimatePresence>
    </>
  );
}
