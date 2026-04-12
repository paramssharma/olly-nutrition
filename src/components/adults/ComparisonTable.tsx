export default function ComparisonTable() {
  return (
    <section className="comparison" id="comparison">
      <div className="container">
        <div className="section-eyebrow">The Comparison</div>
        <h2 className="section-h2">
          Graded against every major Indian multivitamin. Form by form.
        </h2>
        <p className="section-lead">
          We do not claim to be better. We show you the label. Every grade below is verifiable against publicly
          available product information.
        </p>

        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th scope="col">Nutrient</th>
                <th scope="col">Centrum</th>
                <th scope="col">Carbamide Forte</th>
                <th scope="col">HK Vitals</th>
                <th scope="col" className="us">
                  Olly DV-01
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="nutrient">B12</td>
                <td className="other">Cyanocobalamin</td>
                <td className="other">Cyanocobalamin</td>
                <td className="other">Cyanocobalamin</td>
                <td className="us">Methylcobalamin</td>
              </tr>
              <tr>
                <td className="nutrient">Folate</td>
                <td className="other">Folic Acid</td>
                <td className="other">Folic Acid</td>
                <td className="other">Folic Acid</td>
                <td className="us">5-MTHF</td>
              </tr>
              <tr>
                <td className="nutrient">Vitamin D</td>
                <td className="other">D3 only</td>
                <td className="other">D3 only</td>
                <td className="other">D3 only</td>
                <td className="us">D3 + K2-MK7</td>
              </tr>
              <tr>
                <td className="nutrient">Magnesium</td>
                <td className="other">Oxide</td>
                <td className="other">Oxide</td>
                <td className="other">Oxide</td>
                <td className="us">Bisglycinate</td>
              </tr>
              <tr>
                <td className="nutrient">Zinc</td>
                <td className="other">Oxide</td>
                <td className="other">Sulfate</td>
                <td className="other">Sulfate</td>
                <td className="us">Bisglycinate</td>
              </tr>
              <tr className="grade">
                <td className="nutrient">Grade</td>
                <td className="other">C</td>
                <td className="other">C−</td>
                <td className="other">C</td>
                <td className="us">A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
