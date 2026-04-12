export default function HeroJar() {
  return (
    <svg
      className="jar-svg"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cap */}
      <rect x="85" y="30" width="130" height="48" rx="6" stroke="#1F2E27" strokeWidth="1.5" fill="#F5F0E6" />
      <line x1="85" y1="52" x2="215" y2="52" stroke="#1F2E27" strokeWidth="0.8" opacity="0.35" />

      {/* QR code on cap */}
      <rect x="135" y="38" width="30" height="30" stroke="#1F2E27" strokeWidth="0.8" fill="none" />
      <rect x="139" y="42" width="6" height="6" fill="#1F2E27" />
      <rect x="155" y="42" width="6" height="6" fill="#1F2E27" />
      <rect x="139" y="58" width="6" height="6" fill="#1F2E27" />
      <rect x="147" y="50" width="4" height="4" fill="#1F2E27" />
      <rect x="155" y="58" width="3" height="3" fill="#1F2E27" />
      <rect x="161" y="50" width="3" height="3" fill="#1F2E27" />

      {/* Neck */}
      <rect x="95" y="78" width="110" height="12" stroke="#1F2E27" strokeWidth="1.5" fill="#F5F0E6" />

      {/* Jar body */}
      <path
        d="M 80 90 L 220 90 L 224 100 L 224 360 Q 224 376 208 376 L 92 376 Q 76 376 76 360 L 76 100 Z"
        stroke="#1F2E27"
        strokeWidth="1.8"
        fill="rgba(126, 168, 140, 0.12)"
      />

      {/* Label area */}
      <rect x="92" y="140" width="116" height="190" stroke="#1F2E27" strokeWidth="0.8" fill="#FBF8F0" opacity="0.95" />

      {/* Label content */}
      <text
        x="150"
        y="168"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1"
        fill="#1F2E27"
        opacity="0.6"
      >
        HEALTH SUPPLEMENT
      </text>
      <line x1="108" y1="178" x2="192" y2="178" stroke="#1F2E27" strokeWidth="0.5" opacity="0.3" />
      <text
        x="150"
        y="228"
        textAnchor="middle"
        fontFamily="Source Serif 4, serif"
        fontSize="42"
        fill="#1F2E27"
        letterSpacing="-1"
      >
        Olly
      </text>
      <text
        x="150"
        y="246"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        letterSpacing="1.2"
        fill="#1F2E27"
        opacity="0.5"
      >
        DV · 01
      </text>
      <line x1="120" y1="260" x2="180" y2="260" stroke="#4A6B55" strokeWidth="0.5" />
      <text
        x="150"
        y="278"
        textAnchor="middle"
        fontFamily="Source Serif 4, serif"
        fontSize="11"
        fontStyle="italic"
        fill="#1F2E27"
        opacity="0.75"
      >
        Complete Multivitamin
      </text>
      <text
        x="150"
        y="298"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="5"
        fill="#1F2E27"
        opacity="0.5"
      >
        METHYLCOBALAMIN · 5-MTHF · D3+K2
      </text>
      <text
        x="150"
        y="306"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="5"
        fill="#1F2E27"
        opacity="0.5"
      >
        MG GLYCINATE · ZN BISGLYCINATE
      </text>
      <line x1="120" y1="316" x2="180" y2="316" stroke="#1F2E27" strokeWidth="0.5" opacity="0.3" />
      <text
        x="150"
        y="326"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5"
        letterSpacing="0.8"
        fill="#1F2E27"
        opacity="0.55"
      >
        60 CAPSULES · 30 DAY
      </text>

      {/* Subtle capsules inside (top area above label) */}
      <ellipse cx="120" cy="115" rx="8" ry="4" fill="#4A6B55" opacity="0.3" />
      <ellipse cx="150" cy="118" rx="8" ry="4" fill="#4A6B55" opacity="0.3" />
      <ellipse cx="180" cy="114" rx="8" ry="4" fill="#4A6B55" opacity="0.3" />
    </svg>
  )
}
