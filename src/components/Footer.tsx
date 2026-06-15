import { Logo } from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Risk Engine", href: "#risk-engine" },
  { label: "Wallet Scan", href: "#wallet-scan" },
  { label: "Security", href: "#security" },
  { label: "Docs", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Contact", href: "mailto:hello@zelaa.xyz" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <Logo />
            <p className="body-muted mt-1.5 text-ink-soft">
              AI wallet sentinel for crypto flow intelligence.
            </p>
          </div>
          <nav className="flex max-w-md flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium tracking-[-0.01em] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="ui-label mt-8 text-center text-ink-faint sm:text-left">
          © 2026 Zelaa. Zelaa provides risk intelligence, not financial advice.
          Users remain responsible for every transaction they sign.
        </p>
      </div>
    </footer>
  );
}
