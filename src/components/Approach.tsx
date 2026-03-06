interface CardData {
  label: string
  stat: string
  desc: string
  filled: number
}

const cards: CardData[] = [
  {
    label: 'Vitamin D',
    stat: '39.7%',
    desc: '~4 in 10 urban school children are deficient — in one of the sunniest countries on earth.',
    filled: 5,
  },
  {
    label: 'Iron',
    stat: '54%',
    desc: 'More than half of Indian children under 5 are iron deficient, directly impairing learning and attention.',
    filled: 6,
  },
  {
    label: 'Vitamin B12',
    stat: '68%',
    desc: 'Up to 68% of Indian children are B12 deficient, yet most supplements use the synthetic cyanocobalamin form.',
    filled: 8,
  },
  {
    label: 'Zinc',
    stat: '33%',
    desc: 'One in three Indian children is zinc deficient — a mineral critical for immunity and growth.',
    filled: 4,
  },
]

const TOTAL_DOTS = 12

export default function Approach() {
  return (
    <section className="problem">
      {/* Desktop botanical overlay */}
      <div className="problem-botanical problem-botanical-desktop" aria-hidden="true">
        <div className="problem-botanical-inner">
          <img src="/botanical-img-desktop.svg" alt="" />
        </div>
      </div>

      {/* Mobile botanical overlay — different SVG, different dimensions */}
      <div className="problem-botanical problem-botanical-mobile" aria-hidden="true">
        <div className="problem-botanical-inner-mobile">
          <img src="/botanical-img-mobile.svg" alt="" />
        </div>
      </div>

      {/* Header */}
      <div className="problem-header">
        <p className="problem-subhead">Feeding well should feel simple.</p>
        <h2 className="problem-headline">The Problem with Kids' Nutrition in India</h2>
      </div>

      {/* Scrolling cards strip */}
      <div className="problem-cards-strip">
        {cards.map((card) => (
          <div key={card.label} className="problem-card">
            <div className="card-top">
              <div className="card-stat-wrap">
                <p className="card-label">{card.label}</p>
                <p className="card-stat">{card.stat}</p>
              </div>
              <p className="card-desc">{card.desc}</p>
            </div>
            <div className="card-dots">
              {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                <div
                  key={i}
                  className={`card-dot ${i < card.filled ? 'card-dot-filled' : 'card-dot-empty'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison wrapper */}
      <div className="problem-comparison-wrap">
        <p className="problem-separator-text">
          So you bought a children's supplement. That should solve it, right?
        </p>

        <div className="problem-comparison-content">
          <div className="comparison-left">
            <h2>The ingredient report card no brand wants you to see.</h2>
            <p>Every major kids' supplement in India uses forms of B12 and folate that up to 60% of Indian children can't properly absorb.</p>
            <p>40–60% of Indians carry an MTHFR gene variant that makes converting these synthetic forms difficult or impossible. Your child's vitamin may contain the right nutrients — in forms their body can't use.</p>
          </div>

          <div className="problem-comparison-img-wrap">
            <img
              src="/comparison-table.png"
              alt="Ingredient comparison table"
              className="problem-comparison-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
