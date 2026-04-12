export default function CapsuleCrossSection() {
  return (
    <svg className="capsule-svg" viewBox="0 0 300 500" fill="none" aria-hidden="true">
      {/* Capsule shape (vertical) */}
      <path
        d="M 90 50 Q 90 20 150 20 Q 210 20 210 50 L 210 450 Q 210 480 150 480 Q 90 480 90 450 Z"
        stroke="#131B2E"
        strokeWidth="2"
        fill="rgba(59, 108, 222, 0.08)"
      />
      {/* Split line */}
      <line
        x1="90"
        y1="250"
        x2="210"
        y2="250"
        stroke="#131B2E"
        strokeWidth="1"
        strokeDasharray="2,3"
        opacity="0.4"
      />

      {/* Beadlets inside */}
      <circle cx="130" cy="100" r="6" fill="#3B6CDE" opacity="0.6" />
      <circle cx="170" cy="115" r="5" fill="#5A8DEE" opacity="0.7" />
      <circle cx="145" cy="140" r="7" fill="#3B6CDE" opacity="0.5" />
      <circle cx="180" cy="165" r="4" fill="#E8EFFD" />
      <circle cx="125" cy="180" r="6" fill="#5A8DEE" opacity="0.6" />
      <circle cx="160" cy="205" r="5" fill="#3B6CDE" opacity="0.7" />
      <circle cx="135" cy="225" r="4" fill="#E8EFFD" />
      <circle cx="175" cy="300" r="6" fill="#3B6CDE" opacity="0.6" />
      <circle cx="130" cy="325" r="5" fill="#5A8DEE" opacity="0.7" />
      <circle cx="165" cy="350" r="7" fill="#3B6CDE" opacity="0.5" />
      <circle cx="140" cy="375" r="4" fill="#E8EFFD" />
      <circle cx="175" cy="400" r="6" fill="#5A8DEE" opacity="0.6" />
      <circle cx="130" cy="420" r="5" fill="#3B6CDE" opacity="0.7" />

      {/* Label lines pointing out */}
      <line x1="136" y1="100" x2="270" y2="100" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text x="275" y="103" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.55">
        B12 · METHYL
      </text>
      <line x1="185" y1="165" x2="270" y2="165" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text x="275" y="168" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.55">
        5-MTHF
      </text>
      <line x1="166" y1="205" x2="270" y2="205" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text x="275" y="208" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.55">
        D3 + K2
      </text>
      <line x1="180" y1="300" x2="270" y2="300" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text x="275" y="303" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.55">
        MG GLYCINATE
      </text>
      <line x1="140" y1="375" x2="30" y2="375" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text
        x="28"
        y="378"
        textAnchor="end"
        fontFamily="Inter"
        fontSize="7"
        fill="#131B2E"
        opacity="0.55"
      >
        ZN BISGLYCINATE
      </text>
      <line x1="130" y1="180" x2="30" y2="180" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text
        x="28"
        y="183"
        textAnchor="end"
        fontFamily="Inter"
        fontSize="7"
        fill="#131B2E"
        opacity="0.55"
      >
        FE BISGLYCINATE
      </text>
      <line x1="130" y1="325" x2="30" y2="325" stroke="#131B2E" strokeWidth="0.5" opacity="0.4" />
      <text
        x="28"
        y="328"
        textAnchor="end"
        fontFamily="Inter"
        fontSize="7"
        fill="#131B2E"
        opacity="0.55"
      >
        VIT C + E
      </text>
    </svg>
  )
}
