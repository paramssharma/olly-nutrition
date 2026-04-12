export function VizMthfrBar() {
  return (
    <svg className="data-viz" viewBox="0 0 200 40" fill="none" aria-hidden="true">
      <rect x="0" y="14" width="200" height="12" stroke="#131B2E" strokeWidth="1" opacity="0.2" />
      <rect x="0" y="14" width="94" height="12" fill="#3B6CDE" />
      <text x="98" y="8" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.5">
        47%
      </text>
    </svg>
  )
}

export function VizBrandsXGrid() {
  const xs = [0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198]
  return (
    <svg className="data-viz" viewBox="0 0 200 40" fill="none" aria-hidden="true">
      <g fontFamily="Inter" fontSize="14" fill="#131B2E" opacity="0.4">
        {xs.map((x) => (
          <text key={x} x={x} y="26">
            ✕
          </text>
        ))}
      </g>
    </svg>
  )
}

export function VizAbsorptionDonut() {
  return (
    <svg className="data-viz" viewBox="0 0 200 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="#131B2E" strokeWidth="1" opacity="0.25" fill="none" />
      <path d="M 20 4 A 16 16 0 0 1 21 36" stroke="#3B6CDE" strokeWidth="2" fill="none" />
      <text x="48" y="17" fontFamily="Inter" fontSize="8" fill="#131B2E" opacity="0.5">
        OXIDE · 4%
      </text>
      <text x="48" y="30" fontFamily="Inter" fontSize="8" fill="#3B6CDE">
        GLYCINATE · 44%
      </text>
    </svg>
  )
}

export function VizCostBars() {
  return (
    <svg className="data-viz" viewBox="0 0 200 40" fill="none" aria-hidden="true">
      <rect x="0" y="24" width="20" height="10" fill="#131B2E" opacity="0.3" />
      <rect x="28" y="14" width="20" height="20" fill="#131B2E" opacity="0.3" />
      <rect x="56" y="4" width="20" height="30" fill="#131B2E" opacity="0.3" />
      <rect x="84" y="0" width="20" height="34" fill="#3B6CDE" />
      <text x="112" y="22" fontFamily="Inter" fontSize="7" fill="#131B2E" opacity="0.5">
        ACTIVE FORM
      </text>
    </svg>
  )
}
