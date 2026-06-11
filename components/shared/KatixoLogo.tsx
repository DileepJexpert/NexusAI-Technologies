// Static version of the animated KatixoLoadingLogo mark — same geometry and
// colors. Theme-aware by default; pass white for permanently dark surfaces.
export function KatixoLogo({
  className,
  white = false,
}: {
  className?: string;
  white?: boolean;
}) {
  const inkClass = white
    ? "stroke-white"
    : "stroke-[#142D25] dark:stroke-white";
  const textClass = white
    ? "fill-white font-sans"
    : "fill-[#142D25] font-sans dark:fill-white";
  const gradientId = white ? "katixoLogoGradW" : "katixoLogoGrad";
  const ledgerId = white ? "katixoLogoLedgerW" : "katixoLogoLedger";

  return (
    <svg
      viewBox="0 0 600 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Katixo logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="48" y1="20" x2="170" y2="148" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="0.48" stopColor="#1FD6A5" />
          <stop offset="1" stopColor="#2F7DF6" />
        </linearGradient>
        <linearGradient id={ledgerId} x1="88" y1="61" x2="150" y2="107" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#1FD6A5" />
        </linearGradient>
      </defs>

      <g transform="translate(4 4)">
        {/* Gradient ring */}
        <path
          d="M84 8C126 8 160 42 160 84C160 126 126 160 84 160C42 160 8 126 8 84C8 42 42 8 84 8Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* K mark */}
        <path
          d="M58 42V126M116 42L67 84L119 126"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={inkClass}
        />
        {/* Ledger lines */}
        <path d="M88 61H132" stroke={`url(#${ledgerId})`} strokeWidth="8" strokeLinecap="round" />
        <path d="M94 84H139" stroke={`url(#${ledgerId})`} strokeWidth="8" strokeLinecap="round" />
        <path d="M88 107H132" stroke={`url(#${ledgerId})`} strokeWidth="8" strokeLinecap="round" />
        {/* Nodes */}
        <circle cx="134" cy="39" r="7" fill="#FF8A3D" />
        <circle cx="150" cy="84" r="7" fill="#1FD6A5" />
        <circle cx="133" cy="130" r="7" fill="#2F7DF6" />
      </g>

      {/* Wordmark */}
      <text
        x="200"
        y="111"
        fontSize="76"
        fontWeight="760"
        letterSpacing="-2"
        className={textClass}
      >
        Katixo
      </text>
    </svg>
  );
}
