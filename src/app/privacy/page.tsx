export const metadata = {
  title: "Privacy Policy — Zelaa",
  description: "Privacy policy for the Zelaa Chrome extension.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#130B2A", lineHeight: 1.7 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#7B61FF,#F35BC8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em" }}>Zelaa</span>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", margin: "16px 0 8px" }}>Privacy Policy</h1>
        <p style={{ color: "#686176", fontSize: 14 }}>Last updated: June 18, 2026</p>
      </div>

      <Section title="Overview">
        Zelaa is a Chrome extension that intercepts Web3 wallet signing requests — transactions, token approvals, and typed signatures — before they are confirmed in your wallet, and displays a plain-English risk assessment. Zelaa operates entirely locally and does not collect, store, or transmit any personal information.
      </Section>

      <Section title="What data Zelaa accesses">
        <p>Zelaa reads the following data <strong>locally, in your browser only</strong>:</p>
        <ul>
          <li><strong>Transaction parameters</strong> — the method name, destination address, and encoded data of a signing request, as provided by the dApp to your wallet.</li>
          <li><strong>Website origin</strong> — the domain of the dApp that triggered the signing request (e.g. app.uniswap.org).</li>
          <li><strong>Chain ID</strong> — the EVM network identifier reported by your wallet provider.</li>
        </ul>
        <p>This data is used only to generate a risk assessment displayed to you. It is never stored beyond the lifetime of the request and never sent to Zelaa's servers (Zelaa has no servers).</p>
      </Section>

      <Section title="Third-party API: GoPlus Security">
        <p>To enrich risk assessments, Zelaa makes read-only requests to the <strong>GoPlus Security API</strong> (<code>api.gopluslabs.io</code>), a public, free security intelligence service. The following are sent to GoPlus:</p>
        <ul>
          <li>The destination contract address of the transaction</li>
          <li>The origin URL of the dApp</li>
          <li>The EVM chain ID</li>
        </ul>
        <p>No wallet address, private key, seed phrase, or personal information is ever sent. GoPlus's own privacy policy governs how they handle API requests.</p>
      </Section>

      <Section title="Local storage">
        <p>Zelaa uses <code>chrome.storage.local</code> to store three settings on your device only:</p>
        <ul>
          <li>Whether protection is <strong>active or paused</strong> (set by you in the popup)</li>
          <li>A list of <strong>trusted site origins</strong> you have explicitly approved for auto-pass</li>
          <li>A <strong>transaction scan count</strong> shown in the popup</li>
        </ul>
        <p>This data never leaves your device and is not accessible to Zelaa or any third party.</p>
      </Section>

      <Section title="What Zelaa does NOT do">
        <ul>
          <li>Does not collect names, email addresses, or any personally identifiable information</li>
          <li>Does not store or log transaction content, wallet addresses, or signing history</li>
          <li>Does not have any backend servers or databases</li>
          <li>Does not use analytics, tracking pixels, or advertising SDKs</li>
          <li>Does not execute any remotely hosted code</li>
          <li>Will never ask for your seed phrase or private keys</li>
          <li>Does not access funds or submit transactions on your behalf</li>
        </ul>
      </Section>

      <Section title="Permissions used">
        <ul>
          <li><strong>storage</strong> — to save your protection status and trusted sites list locally</li>
          <li><strong>host_permissions (&lt;all_urls&gt;)</strong> — required to run content scripts on any dApp domain to intercept signing requests, since Web3 applications exist at any URL</li>
        </ul>
      </Section>

      <Section title="Changes to this policy">
        If this policy changes materially, the updated version will be posted at this URL with a revised date. Continued use of the extension after changes constitutes acceptance.
      </Section>

      <Section title="Contact">
        Questions about this privacy policy? Email us at{" "}
        <a href="mailto:zelaapay@gmail.com" style={{ color: "#7B61FF" }}>zelaapay@gmail.com</a>.
      </Section>

      <p style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #EDE9F8", fontSize: 13, color: "#9A92AA" }}>
        © 2026 Zelaa. All rights reserved.
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 12, color: "#130B2A" }}>{title}</h2>
      <div style={{ fontSize: 15, color: "#3D3550" }}>{children}</div>
    </section>
  );
}
