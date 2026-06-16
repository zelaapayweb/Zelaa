export function ChromeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      {/* Red segment — top to bottom-right */}
      <path d="M12 12 L12 2 A10 10 0 0 1 20.66 17 Z" fill="#EA4335" />
      {/* Green segment — bottom-right to bottom-left */}
      <path d="M12 12 L20.66 17 A10 10 0 0 1 3.34 17 Z" fill="#34A853" />
      {/* Yellow segment — bottom-left to top */}
      <path d="M12 12 L3.34 17 A10 10 0 0 1 12 2 Z" fill="#FBBC05" />
      {/* White separator ring */}
      <circle cx="12" cy="12" r="6.5" fill="white" />
      {/* Blue center */}
      <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
    </svg>
  );
}
