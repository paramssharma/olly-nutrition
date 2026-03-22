const nutrients = [
  { name: 'Vitamin B12',  form: 'Methylcobalamin',        dose: '2.5 mcg',     rda: '114%' },
  { name: 'Folate',       form: '5-MTHF (Quatrefolic\u00AE)', dose: '200 mcg DFE', rda: '118%' },
  { name: 'Vitamin D3',   form: 'Cholecalciferol',        dose: '400 IU',      rda: '100%' },
  { name: 'Vitamin K2',   form: 'MK-7',                   dose: '30 mcg',      rda: 'No RDA set' },
  { name: 'Zinc',         form: 'Zinc Bisglycinate',      dose: '5 mg',        rda: '85%' },
  { name: 'Vitamin C',    form: 'Ascorbic Acid',          dose: '40 mg',       rda: '89%' },
  { name: 'Vitamin B6',   form: 'Pyridoxal-5\u2032-Phosphate', dose: '1 mg',   rda: '83%' },
  { name: 'Biotin',       form: 'D-Biotin',               dose: '15 mcg',      rda: '60%' },
]

export default function Ingredients() {
  return (
    <section className="ingredients" id="ingredients" aria-label="Ingredient breakdown">
      <div className="ingredients-inner">
        <div className="ingredients-header">
          <p className="ingredients-subhead">Full transparency.</p>
          <h2 className="ingredients-headline">Exactly what's inside &mdash; and why.</h2>
          <p className="ingredients-note">Per gummy. % RDA based on ICMR-NIN 2020 recommendations for children aged 7&ndash;9.</p>
        </div>

        <div className="ingredients-table-wrap">
          <table className="ingredients-table" aria-label="Nutrient breakdown per gummy">
            <thead>
              <tr>
                <th scope="col">Nutrient</th>
                <th scope="col">Form Used</th>
                <th scope="col">Per Gummy</th>
                <th scope="col">% RDA</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((n) => (
                <tr key={n.name}>
                  <td className="nutrient-name">{n.name}</td>
                  <td className="nutrient-form">{n.form}</td>
                  <td>{n.dose}</td>
                  <td className={`nutrient-rda${parseInt(n.rda) > 100 ? ' nutrient-rda-high' : ''}`}>{n.rda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="ingredients-footer">
          No sugar &middot; No gelatin &middot; No artificial colors &middot; No artificial flavors &middot; Vegan &middot; Gluten-free
        </p>
      </div>
    </section>
  )
}
