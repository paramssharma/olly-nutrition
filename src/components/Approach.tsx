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

const BOTANICAL_MASK = 'http://localhost:3845/assets/4534a2ea65f827a84b97ca4f44ae77687186dbff.svg'
const BOTANICAL_IMG  = 'http://localhost:3845/assets/5ed51cc70e9637df65b9fed5b29384f5ce19c0ef.svg'

export default function Approach() {
  return (
    <section className="problem">
      {/* Botanical background overlay — matches Figma h=490px absolutely-positioned element */}
      <div className="problem-botanical" aria-hidden="true">
        <div
          className="problem-botanical-inner"
          style={{ maskImage: `url('${BOTANICAL_MASK}')`, WebkitMaskImage: `url('${BOTANICAL_MASK}')` }}
        >
          <img src={BOTANICAL_IMG} alt="" />
        </div>
      </div>

      <div className="problem-header">
        <p className="problem-subhead">Feeding well should feel simple.</p>
        <h2 className="problem-headline">The Problem with Kids' Nutrition in India</h2>
      </div>

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

      <div className="problem-separator">
        <p className="problem-separator-text">
          So you bought a children's supplement. That should solve it, right?
        </p>
      </div>
    </section>
  )
}
