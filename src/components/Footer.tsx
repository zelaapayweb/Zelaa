"use client";

import { useState } from "react";

const PRODUCT_LINKS = [
  { label: "Chrome Extension", href: "#product" },
  { label: "Risk Engine", href: "#detection" },
  { label: "Approval Scanner", href: "#features" },
  { label: "Demo Mode", href: "#" },
  { label: "Changelog", href: "#" },
];

const SUPPORT_LINKS = [
  { label: "Docs", href: "#" },
  { label: "Security", href: "#security" },
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "mailto:hello@zelaa.xyz" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Risk Disclaimer", href: "#" },
];

function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.852L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const SOCIAL = [
  { Icon: IconX, label: "X / Twitter", href: "#" },
  { Icon: IconGithub, label: "GitHub", href: "#" },
  { Icon: IconDiscord, label: "Discord", href: "#" },
  { Icon: IconTelegram, label: "Telegram", href: "#" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "#130B2A",
        }}
      >
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontSize: 13,
                letterSpacing: "-0.01em",
                color: "#9A92AA",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#130B2A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#9A92AA")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer style={{ background: "#F0ECFA", borderTop: "1px solid rgba(123,97,255,0.10)" }}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        {/* Main grid */}
        <div className="grid gap-10 py-14 sm:py-[72px] sm:grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            {/* Logo */}
            <a
              href="#"
              aria-label="Zelaa home"
              className="inline-flex items-center gap-2.5"
            >
              <img
                src="/zelaa-icon.png"
                alt=""
                width={32}
                height={32}
                className="shrink-0 rounded-[8px]"
                style={{ width: 32, height: 32 }}
              />
              <span
                style={{
                  fontSize: 19,
                  fontWeight: 650,
                  letterSpacing: "-0.03em",
                  color: "#130B2A",
                  lineHeight: 1,
                }}
              >
                Zelaa
              </span>
            </a>

            <p
              className="mt-4"
              style={{ fontSize: 14, lineHeight: 1.6, color: "#686176" }}
            >
              The AI risk layer for crypto signers. Know what you&apos;re signing before
              it&apos;s too late.
            </p>

            {/* Waitlist email capture */}
            <div className="mt-6">
              <p
                className="mb-2.5"
                style={{ fontSize: 11, color: "#9A92AA", letterSpacing: "0.01em" }}
              >
                Join the waitlist for early Chrome extension access.
              </p>
              {joined ? (
                <p
                  style={{ fontSize: 12, color: "#2D6B4A", fontWeight: 500 }}
                >
                  You&apos;re on the list — we&apos;ll be in touch.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setJoined(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="min-w-0 flex-1 rounded-full px-4 py-2 text-[12px] text-ink outline-none transition-colors placeholder:text-ink-ghost"
                    style={{
                      border: "1px solid rgba(123,97,255,0.20)",
                      background: "rgba(255,255,255,0.80)",
                      color: "#130B2A",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.40)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.20)")
                    }
                  />
                  <button
                    type="submit"
                    className="btn-gradient rounded-full px-4 py-2 text-[12px] font-medium"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          <FooterCol title="Product" links={PRODUCT_LINKS} />
          <FooterCol title="Support" links={SUPPORT_LINKS} />
          <FooterCol title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between"
          style={{ borderTop: "1px solid rgba(123,97,255,0.10)" }}
        >
          <p style={{ fontSize: 11, color: "#C4BDD4", letterSpacing: "0.01em" }}>
            © 2026 Zelaa. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{ color: "#C4BDD4", transition: "color 0.15s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#7B61FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#C4BDD4")
                }
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
