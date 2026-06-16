"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/AuthContext";

export default function LoginPage() {
  const { signIn, user, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/dashboard");
  }, [user, loading, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitting(true);
    setError(null);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error);
      setSubmitting(false);
    } else {
      router.replace("/dashboard");
    }
  }

  if (loading) return null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--color-canvas)" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0"
        style={{
          height: 480,
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(169,141,255,0.22) 0%, rgba(255,139,216,0.12) 50%, transparent 72%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px]"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <img
            src="/zelaa-icon.png"
            alt="Zelaa"
            width={36}
            height={36}
            className="rounded-[10px]"
            style={{ width: 36, height: 36 }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 650,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1,
            }}
          >
            Zelaa
          </span>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl px-8 py-9"
          style={{
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(123,97,255,0.14)",
            boxShadow:
              "0 2px 4px rgba(19,11,42,0.04), 0 24px 64px -16px rgba(123,97,255,0.14)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h1
            className="mb-1.5"
            style={{
              fontSize: 22,
              fontWeight: 650,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
            }}
          >
            Sign in to your account
          </h1>
          <p className="mb-7 text-[14px]" style={{ color: "var(--color-ink-soft)" }}>
            Access your Zelaa beta dashboard.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[12px] font-medium"
                style={{ color: "var(--color-ink-soft)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all"
                style={{
                  border: "1px solid rgba(123,97,255,0.20)",
                  background: "rgba(251,250,255,0.9)",
                  color: "var(--color-ink)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.55)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.20)")
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[12px] font-medium"
                style={{ color: "var(--color-ink-soft)" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all"
                style={{
                  border: "1px solid rgba(123,97,255,0.20)",
                  background: "rgba(251,250,255,0.9)",
                  color: "var(--color-ink)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.55)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.20)")
                }
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl px-4 py-2.5 text-[13px]"
                style={{
                  background: "var(--color-signal-red-soft)",
                  color: "var(--color-signal-red)",
                  border: "1px solid rgba(139,37,53,0.12)",
                }}
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-gradient mt-1 w-full rounded-xl py-3 text-[14px] font-medium text-white transition-all disabled:opacity-60"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-[13px]" style={{ color: "var(--color-ink-faint)" }}>
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium transition-colors"
            style={{ color: "var(--color-violet)" }}
          >
            Create one
          </Link>
        </p>

        <p
          className="mt-4 text-center text-[11px] leading-relaxed"
          style={{ color: "var(--color-ink-ghost)" }}
        >
          Zelaa will never ask for your seed phrase or private keys.
        </p>
      </motion.div>
    </div>
  );
}
