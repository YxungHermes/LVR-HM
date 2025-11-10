export default function LvrWaxSeal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        {/* Deep red wax gradient */}
        <radialGradient id="waxGrad" cx="45%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#B0102A" />
          <stop offset="45%" stopColor="#9A0D24" />
          <stop offset="100%" stopColor="#6F0A18" />
        </radialGradient>

        {/* Inner highlight glow */}
        <radialGradient id="innerGlow" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Wax texture ripple effect */}
        <filter id="waxRipple" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>

        {/* Beveled ring highlight */}
        <linearGradient id="bevelRing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="50%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.20)" />
        </linearGradient>
      </defs>

      {/* Wax seal base with texture */}
      <g filter="url(#waxRipple)">
        <circle cx="100" cy="100" r="78" fill="url(#waxGrad)" />
        <ellipse cx="82" cy="78" rx="34" ry="24" fill="url(#innerGlow)" />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="url(#bevelRing)"
          strokeWidth="4"
          opacity="0.6"
        />
      </g>

      {/* Rose emblem */}
      <g transform="translate(100,100)">
        {/* Outer rose petals */}
        <path
          d="M0,-28 C14,-28 26,-16 26,0 C26,16 14,28 0,28 C-14,28 -26,16 -26,0 C-26,-16 -14,-28 0,-28Z"
          fill="none"
          stroke="#3A000A"
          strokeWidth="3"
          opacity="0.55"
        />
        {/* Rose spiral center */}
        <path
          d="M0,0 c12,-6 10,-18 -2,-20 c-10,-2 -18,8 -14,16 c5,10 22,10 28,0"
          fill="none"
          stroke="#3A000A"
          strokeWidth="3"
          opacity="0.6"
        />
        {/* Rose detail lines */}
        <path
          d="M-16,-6 c8,-8 18,-8 24,0"
          fill="none"
          stroke="#3A000A"
          strokeWidth="3"
          opacity="0.55"
        />
        <path
          d="M-14,8 c10,-6 18,-6 22,2"
          fill="none"
          stroke="#3A000A"
          strokeWidth="3"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
