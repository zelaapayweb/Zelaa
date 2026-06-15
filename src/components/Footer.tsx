import { Logo } from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Risk Engine", href: "#risk-engine" },
  { label: "Wallet Scan", href: "#wallet-scan" },
  { label: "Security", href: "#security" },
  { label: "Docs", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Contact", href: "mailto:hello@zefi.xyz" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-canvas-soft/60">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <Logo />
            <p className="mt-2 text-[15px] text-ink-soft">
              AI wallet sentinel for crypto flow intelligence.
            </p>
          </div>
          <nav className="flex max-w-md flex-wrap justify-center gap-x-6 gap-y-2.5 sm:justify-end">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-center text-sm text-ink-faint sm:text-left">
          © 2026 ZeFi. ZeFi provides risk intelligence, not financial advice.
          Users remain responsible for every transaction they sign.
        </p>
      </div>
    </footer>
  );
}
