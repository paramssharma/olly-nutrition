export function FigureDNA() {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true">
      {/* DNA double helix */}
      <path d="M 30 20 Q 80 50 30 80 Q 80 110 30 140" stroke="#131B2E" strokeWidth="1.8" fill="none" />
      <path d="M 170 20 Q 120 50 170 80 Q 120 110 170 140" stroke="#131B2E" strokeWidth="1.8" fill="none" />
      <line x1="40" y1="30" x2="160" y2="30" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="40" x2="135" y2="40" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="80" y1="50" x2="120" y2="50" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="60" x2="135" y2="60" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="70" x2="160" y2="70" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="80" x2="135" y2="80" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="80" y1="90" x2="120" y2="90" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="100" x2="135" y2="100" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="110" x2="160" y2="110" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="120" x2="135" y2="120" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
      <line x1="80" y1="130" x2="120" y2="130" stroke="#131B2E" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function FigureSynergy() {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true">
      {/* Two interlocking circles */}
      <circle cx="80" cy="75" r="42" stroke="#131B2E" strokeWidth="1.8" fill="none" />
      <circle cx="120" cy="75" r="42" stroke="#131B2E" strokeWidth="1.8" fill="none" />
      <text x="60" y="79" textAnchor="middle" fontFamily="Inter" fontSize="22" fill="#131B2E">
        D₃
      </text>
      <text x="140" y="79" textAnchor="middle" fontFamily="Inter" fontSize="22" fill="#131B2E">
        K₂
      </text>
      <text
        x="100"
        y="79"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="16"
        fill="#3B6CDE"
        fontStyle="italic"
      >
        ∩
      </text>
      <line x1="30" y1="135" x2="170" y2="135" stroke="#131B2E" strokeWidth="0.8" opacity="0.3" />
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="7"
        fill="#131B2E"
        opacity="0.5"
        letterSpacing="1"
      >
        SYNERGISTIC PAIR
      </text>
    </svg>
  )
}

export function FigureAbsorption() {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true">
      {/* Bar chart comparison */}
      <line x1="30" y1="130" x2="170" y2="130" stroke="#131B2E" strokeWidth="1" />
      <line x1="30" y1="130" x2="30" y2="20" stroke="#131B2E" strokeWidth="1" />
      <rect x="50" y="120" width="24" height="10" fill="#131B2E" opacity="0.35" />
      <rect x="100" y="40" width="24" height="90" fill="#3B6CDE" />
      <text x="62" y="145" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.6">
        OXIDE
      </text>
      <text
        x="62"
        y="115"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="#131B2E"
        opacity="0.6"
      >
        4%
      </text>
      <text x="112" y="145" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#3B6CDE">
        GLYCINATE
      </text>
      <text x="112" y="34" textAnchor="middle" fontFamily="Inter" fontSize="13" fill="#3B6CDE">
        44%
      </text>
      <text x="175" y="130" fontFamily="Inter" fontSize="6" fill="#131B2E" opacity="0.4">
        0%
      </text>
      <text x="175" y="25" fontFamily="Inter" fontSize="6" fill="#131B2E" opacity="0.4">
        50%
      </text>
    </svg>
  )
}
