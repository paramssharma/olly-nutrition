const CheckIcon = () => (
  <span className="check">
    <svg width="23" height="21" viewBox="0 0 23 21" fill="none">
      <path d="M2 11L9 18L21 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

const XMark = () => <span className="x-mark">✕</span>

type Cell = { check?: boolean; val?: string }

const rows: { label: string; olly: Cell; b: Cell; c: Cell; d: Cell; e: Cell }[] = [
  { label: 'Grams of Sugar',    olly: { val: '0g' }, b: { val: '5g' }, c: { val: '3g' }, d: { val: '2g' }, e: { val: '2g' } },
  { label: 'Vitamins per Day',  olly: { val: '1' },  b: { val: '4' }, c: { val: '2' }, d: { val: '2' }, e: { val: '2' } },
  { label: 'Sugar-Free Formula', olly: { check: true }, b: {}, c: {}, d: {}, e: {} },
  { label: 'Reusable Bottle',   olly: { check: true }, b: {}, c: {}, d: {}, e: {} },
  { label: 'Kids Only',         olly: { check: true }, b: {}, c: {}, d: {}, e: {} },
]

function renderCell(cell: Cell) {
  if (cell.check) return <CheckIcon />
  if (cell.val)   return <span className="val">{cell.val}</span>
  return <XMark />
}

export default function Transparency() {
  return (
    <section className="comparison" aria-label="Ingredient comparison">
      <div className="comparison-content">
        <div className="comparison-left">
          <h2>The ingredient report card no brand wants you to see.</h2>
          <p>Every major kids' supplement in India uses forms of B12 and folate that up to 60% of Indian children can't properly absorb.</p>
          <p>40–60% of Indians carry an MTHFR gene variant that makes converting these synthetic forms difficult or impossible. Your child's vitamin may contain the right nutrients — in forms their body can't use.</p>
        </div>

        <div className="comparison-table-wrap">
          <table className="comparison-table" aria-label="Product comparison">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="hl">
                  <img
                    src="http://localhost:3845/assets/a922d2eb3178d8a0af5f6fe1b1e64d4b46fcf4c5.svg"
                    alt="olly"
                    style={{ height: '24px', width: 'auto', margin: '0 auto' }}
                  />
                </th>
                <th scope="col">
                  <img
                    src="http://localhost:3845/assets/aef0fe649763cbe7a5df18baca470510e54feb24.png"
                    alt="Brand B"
                    style={{ height: '24px', width: 'auto', margin: '0 auto' }}
                  />
                </th>
                <th scope="col">
                  <img
                    src="http://localhost:3845/assets/960887edec201014a423d6b0d70def9345d82449.svg"
                    alt="Brand C"
                    style={{ height: '24px', width: 'auto', margin: '0 auto' }}
                  />
                </th>
                <th scope="col">
                  <img
                    src="http://localhost:3845/assets/dadd921654d7563935b92194c10252031aace369.png"
                    alt="Brand D"
                    style={{ height: '24px', width: 'auto', margin: '0 auto' }}
                  />
                </th>
                <th scope="col">
                  <img
                    src="http://localhost:3845/assets/5b06ff6089f29b7f5564b2e98b00f78c36d102c2.svg"
                    alt="Brand E"
                    style={{ height: '24px', width: 'auto', margin: '0 auto' }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td className="hl">{renderCell(row.olly)}</td>
                  <td>{renderCell(row.b)}</td>
                  <td>{renderCell(row.c)}</td>
                  <td>{renderCell(row.d)}</td>
                  <td>{renderCell(row.e)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
