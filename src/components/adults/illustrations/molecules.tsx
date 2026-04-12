export function MoleculeB12Cyano() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Corrin ring (simplified hexagon) */}
      <polygon
        points="50,20 75,32 80,58 62,78 38,78 20,58 25,32"
        stroke="#131B2E"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      {/* Central Co atom */}
      <circle cx="50" cy="52" r="6" fill="#131B2E" opacity="0.5" />
      <text x="50" y="55" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#FFFFFF" fontWeight="600">
        Co
      </text>
      {/* Top ligand: CN */}
      <line x1="50" y1="46" x2="50" y2="30" stroke="#131B2E" strokeWidth="1.2" opacity="0.5" />
      <circle cx="50" cy="25" r="5" stroke="#131B2E" strokeWidth="1" fill="#F5F7FA" opacity="0.8" />
      <text x="50" y="27" textAnchor="middle" fontFamily="Inter" fontSize="5" fill="#131B2E" opacity="0.7">
        CN
      </text>
    </svg>
  )
}

export function MoleculeB12Methyl() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon
        points="50,20 75,32 80,58 62,78 38,78 20,58 25,32"
        stroke="#3B6CDE"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="50" cy="52" r="6" fill="#3B6CDE" />
      <text x="50" y="55" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#FFFFFF" fontWeight="600">
        Co
      </text>
      <line x1="50" y1="46" x2="50" y2="30" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="50" cy="25" r="5" stroke="#3B6CDE" strokeWidth="1.2" fill="#E8EFFD" />
      <text x="50" y="27" textAnchor="middle" fontFamily="Inter" fontSize="5" fill="#131B2E">
        CH₃
      </text>
    </svg>
  )
}

export function MoleculeFolateFolic() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Pteridine ring system (two connected hexagons) */}
      <polygon
        points="25,40 35,28 48,32 50,48 38,55 25,52"
        stroke="#131B2E"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <polygon
        points="50,48 62,40 75,45 78,58 65,65 50,62"
        stroke="#131B2E"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="30" cy="35" r="2" fill="#131B2E" opacity="0.5" />
      <circle cx="45" cy="30" r="2" fill="#131B2E" opacity="0.5" />
      <circle cx="68" cy="42" r="2" fill="#131B2E" opacity="0.5" />
      <line x1="78" y1="58" x2="88" y2="70" stroke="#131B2E" strokeWidth="1.2" opacity="0.5" />
      <circle cx="88" cy="70" r="3" stroke="#131B2E" strokeWidth="1" fill="#F5F7FA" opacity="0.8" />
    </svg>
  )
}

export function MoleculeFolate5MTHF() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon
        points="25,40 35,28 48,32 50,48 38,55 25,52"
        stroke="#3B6CDE"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="50,48 62,40 75,45 78,58 65,65 50,62"
        stroke="#3B6CDE"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="30" cy="35" r="2" fill="#3B6CDE" />
      <circle cx="45" cy="30" r="2" fill="#3B6CDE" />
      <circle cx="68" cy="42" r="2" fill="#3B6CDE" />
      {/* Methylated position */}
      <line x1="32" y1="40" x2="18" y2="34" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="16" cy="33" r="4" stroke="#3B6CDE" strokeWidth="1.2" fill="#E8EFFD" />
      <text x="16" y="35" textAnchor="middle" fontFamily="Inter" fontSize="4" fill="#131B2E">
        CH₃
      </text>
      <line x1="78" y1="58" x2="88" y2="70" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="88" cy="70" r="3" stroke="#3B6CDE" strokeWidth="1.2" fill="#E8EFFD" />
    </svg>
  )
}

export function MoleculeMgOxide() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Simple Mg-O */}
      <circle cx="35" cy="50" r="12" stroke="#131B2E" strokeWidth="1.2" fill="#F5F7FA" opacity="0.6" />
      <text
        x="35"
        y="54"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="10"
        fill="#131B2E"
        opacity="0.7"
        fontWeight="600"
      >
        Mg
      </text>
      <line x1="47" y1="50" x2="58" y2="50" stroke="#131B2E" strokeWidth="1.2" opacity="0.5" />
      <line x1="47" y1="48" x2="58" y2="48" stroke="#131B2E" strokeWidth="1.2" opacity="0.5" />
      <circle cx="70" cy="50" r="9" stroke="#131B2E" strokeWidth="1.2" fill="#F5F7FA" opacity="0.6" />
      <text
        x="70"
        y="53"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="8"
        fill="#131B2E"
        opacity="0.7"
        fontWeight="600"
      >
        O
      </text>
    </svg>
  )
}

export function MoleculeMgBisglycinate() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Mg with two glycine chains */}
      <circle cx="50" cy="50" r="10" stroke="#3B6CDE" strokeWidth="1.5" fill="#E8EFFD" />
      <text x="50" y="53" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="#131B2E" fontWeight="600">
        Mg
      </text>
      {/* Left glycine chain */}
      <line x1="40" y1="50" x2="28" y2="42" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="26" cy="40" r="3" fill="#3B6CDE" />
      <line x1="26" y1="40" x2="14" y2="32" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="12" cy="30" r="3" fill="#3B6CDE" />
      <line x1="12" y1="30" x2="6" y2="20" stroke="#3B6CDE" strokeWidth="1.5" />
      {/* Right glycine chain */}
      <line x1="60" y1="50" x2="72" y2="58" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="74" cy="60" r="3" fill="#3B6CDE" />
      <line x1="74" y1="60" x2="86" y2="68" stroke="#3B6CDE" strokeWidth="1.5" />
      <circle cx="88" cy="70" r="3" fill="#3B6CDE" />
      <line x1="88" y1="70" x2="94" y2="80" stroke="#3B6CDE" strokeWidth="1.5" />
    </svg>
  )
}
