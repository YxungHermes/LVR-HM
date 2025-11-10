export default function MinimalRoseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Single-line designer rose illustration */}
      {/* Center bloom */}
      <circle cx="12" cy="12" r="3" />

      {/* Outer petals - elegant curves */}
      <path d="M12 9 C14 8, 16 9, 16 11 C16 13, 14 14, 12 14" />
      <path d="M12 9 C10 8, 8 9, 8 11 C8 13, 10 14, 12 14" />
      <path d="M15 12 C16 10, 17 11, 17 13 C17 15, 15 15, 13 14" />
      <path d="M9 12 C8 10, 7 11, 7 13 C7 15, 9 15, 11 14" />

      {/* Stem */}
      <path d="M12 15 L12 21" />

      {/* Small leaf */}
      <path d="M12 18 C13 17.5, 14 18, 14 19" />
    </svg>
  );
}
