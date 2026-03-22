interface CardData {
  label: string
  stat: string
  desc: string
  filled: number
  color: string
  border: string
}

const TOTAL_BLOCKS = 10

const cards: CardData[] = [
  {
    label: 'Vitamin D',
    stat: '63%',
    desc: 'Nearly 2 in 3 Indian children are vitamin D deficient — in one of the sunniest countries on earth.',
    filled: 6,
    color: '#9de3f3',
    border: '#6cd6ed',
  },
  {
    label: 'Anaemia',
    stat: '67%',
    desc: 'Two-thirds of Indian children under 5 are anaemic, directly impairing growth, learning, and attention.',
    filled: 7,
    color: '#fbd570',
    border: '#f0c23e',
  },
  {
    label: 'Vitamin B12',
    stat: '31%',
    desc: 'Nearly 1 in 3 Indian adolescents are B12 deficient, yet most supplements use the synthetic cyanocobalamin form.',
    filled: 3,
    color: '#f4a77e',
    border: '#ed7954',
  },
  {
    label: 'Zinc',
    stat: '16%',
    desc: '1 in 6 Indian school-age children is zinc deficient — a mineral critical for immunity and growth.',
    filled: 2,
    color: '#b8d8ba',
    border: '#7fb882',
  },
]

type Cell = { check?: boolean; val?: string }

const comparisonRows: { label: string; olly: Cell; others: Cell }[] = [
  { label: 'B12 Form',             olly: { val: 'Methylcobalamin' }, others: { val: 'Cyanocobalamin' } },
  { label: 'Folate Form',          olly: { val: '5-MTHF' },         others: { val: 'Folic Acid' } },
  { label: 'Sugar per Gummy',      olly: { val: '0 g' },            others: { val: '2–5 g' } },
  { label: 'Gummies / Day',        olly: { val: '1' },              others: { val: '2–4' } },
  { label: 'Vegan',                olly: { check: true },           others: {} },
  { label: 'No Artificial Colors',  olly: { check: true },          others: {} },
]

function renderCell(cell: Cell) {
  if (cell.check) return <span className="cell-check" aria-label="Yes">&#10003;</span>
  if (cell.val)   return <span className="cell-val">{cell.val}</span>
  return <span className="cell-x" aria-label="No">&#10005;</span>
}

export default function Problem() {
  return (
    <section className="problem" id="science">
      {/* Desktop botanical overlay */}
      <div className="problem-botanical problem-botanical-desktop" aria-hidden="true">
        <div className="problem-botanical-inner">
          <img src="/botanical-img-desktop.svg" alt="" loading="lazy" />
        </div>
      </div>

      {/* Mobile botanical overlay */}
      <div className="problem-botanical problem-botanical-mobile" aria-hidden="true">
        <div className="problem-botanical-inner-mobile">
          <img src="/botanical-img-mobile.svg" alt="" loading="lazy" />
        </div>
      </div>

      {/* Header */}
      <div className="problem-header">
        <p className="problem-subhead">The data is clear.</p>
        <h2 className="problem-headline">The Problem with Kids' Nutrition in India</h2>
      </div>

      {/* Cards */}
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
            <div className="card-blocks">
              {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                <div
                  key={i}
                  className={`card-block${i < card.filled ? ' card-block-filled' : ''}`}
                  style={
                    i < card.filled
                      ? { background: card.color, borderColor: card.border }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Source citations */}
      <p className="problem-sources">
        Sources: NFHS-5 (2019-21) &middot; CNNS (2016-18) &middot; <em>Nature</em> Scientific Reports (2022)
      </p>

      {/* Comparison */}
      <div className="problem-comparison-wrap">
        <p className="problem-separator-text">
          So you bought a children's supplement. That should solve it, right?
        </p>

        <div className="problem-comparison-content">
          <div className="comparison-left">
            <h2>The ingredient report card no brand wants you to see.</h2>
            <p>Most children's supplements in India use cyanocobalamin (synthetic B12) and folic acid (synthetic folate) — inactive forms that require conversion in the body before they can be used.</p>
            <p>We use methylcobalamin and 5-MTHF methylfolate — the bioactive forms your child's body can absorb directly. No conversion step. No absorption left to chance.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table" aria-label="Product comparison">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="ct-hl">olly</th>
                  <th scope="col">Most brands</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="ct-hl">{renderCell(row.olly)}</td>
                    <td>{renderCell(row.others)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
