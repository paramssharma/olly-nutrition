import {
  MoleculeB12Cyano,
  MoleculeB12Methyl,
  MoleculeFolate5MTHF,
  MoleculeFolateFolic,
  MoleculeMgBisglycinate,
  MoleculeMgOxide,
} from './illustrations/molecules'

export default function FormsSection() {
  return (
    <section className="forms" id="science">
      <div className="container">
        <div className="section-eyebrow">The Science of Forms</div>
        <h2 className="section-h2">
          A vitamin name is not a vitamin. The form is the vitamin.
        </h2>
        <p className="section-lead">
          Every ingredient exists in multiple chemical forms. Most Indian supplement brands use the cheapest. We use
          the one your body actually absorbs. Here is the difference — nutrient by nutrient, molecule by molecule.
        </p>

        <div className="forms-grid">
          {/* B12 Card */}
          <div className="form-card">
            <div className="form-code">VITAMIN B12</div>
            <div className="form-nutrient">Cobalamin</div>

            <div className="molecule-viz">
              <div className="mol-column">
                <MoleculeB12Cyano />
                <div className="molecule-label">Cyano</div>
              </div>
              <div className="mol-column">
                <MoleculeB12Methyl />
                <div className="molecule-label active">Methyl</div>
              </div>
            </div>

            <div className="form-compare">
              <div className="form-row">
                <span className="form-name">Them · Cyanocobalamin</span>
                <span className="form-percent">~50%</span>
              </div>
              <div className="form-row">
                <span className="form-name active">Us · Methylcobalamin</span>
                <span className="form-percent active">~95%</span>
              </div>
            </div>
            <p className="form-note">
              Cyanocobalamin is a synthetic form bound to a cyanide molecule. Your liver must convert it. 40–60% of
              Indians carry a gene variant (MTHFR) that impairs this conversion.
            </p>
          </div>

          {/* Folate Card */}
          <div className="form-card">
            <div className="form-code">FOLATE</div>
            <div className="form-nutrient">Vitamin B9</div>

            <div className="molecule-viz">
              <div className="mol-column">
                <MoleculeFolateFolic />
                <div className="molecule-label">Folic Acid</div>
              </div>
              <div className="mol-column">
                <MoleculeFolate5MTHF />
                <div className="molecule-label active">5-MTHF</div>
              </div>
            </div>

            <div className="form-compare">
              <div className="form-row">
                <span className="form-name">Them · Folic Acid</span>
                <span className="form-percent">~60%</span>
              </div>
              <div className="form-row">
                <span className="form-name active">Us · 5-MTHF</span>
                <span className="form-percent active">~100%</span>
              </div>
            </div>
            <p className="form-note">
              Folic acid must be converted to 5-MTHF, the form your cells actually use. Those with MTHFR variants
              convert it poorly — and unconverted folic acid accumulates in the bloodstream.
            </p>
          </div>

          {/* Magnesium Card */}
          <div className="form-card">
            <div className="form-code">MAGNESIUM</div>
            <div className="form-nutrient">Mg²⁺</div>

            <div className="molecule-viz">
              <div className="mol-column">
                <MoleculeMgOxide />
                <div className="molecule-label">Oxide</div>
              </div>
              <div className="mol-column">
                <MoleculeMgBisglycinate />
                <div className="molecule-label active">Bisglycinate</div>
              </div>
            </div>

            <div className="form-compare">
              <div className="form-row">
                <span className="form-name">Them · Mg Oxide</span>
                <span className="form-percent">~4%</span>
              </div>
              <div className="form-row">
                <span className="form-name active">Us · Mg Bisglycinate</span>
                <span className="form-percent active">~44%</span>
              </div>
            </div>
            <p className="form-note">
              Magnesium oxide is the cheapest form on the market and also the least absorbed. The "Mg" claim on a
              label means nothing without the form. Glycinate costs 8× more and absorbs 11× better.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
