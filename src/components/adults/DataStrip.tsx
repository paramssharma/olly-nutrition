import {
  VizAbsorptionDonut,
  VizBrandsXGrid,
  VizCostBars,
  VizMthfrBar,
} from './illustrations/data-viz'

export default function DataStrip() {
  return (
    <section className="data-strip">
      <div className="container">
        <div className="data-item">
          <div className="label">MTHFR Prevalence</div>
          <div className="value">
            47<span className="unit">%</span>
          </div>
          <VizMthfrBar />
          <p className="desc">of Indians carry a gene variant that impairs folic acid conversion</p>
        </div>

        <div className="data-item">
          <div className="label">Market Analysis</div>
          <div className="value">
            0<span className="unit">/12</span>
          </div>
          <VizBrandsXGrid />
          <p className="desc">Indian multivitamin brands currently use 5-MTHF methylfolate</p>
        </div>

        <div className="data-item">
          <div className="label">Absorption Gap</div>
          <div className="value">
            4<span className="unit">%</span>
          </div>
          <VizAbsorptionDonut />
          <p className="desc">
            magnesium oxide absorption vs 44% for bisglycinate — same dose, different mineral
          </p>
        </div>

        <div className="data-item">
          <div className="label">Cost Differential</div>
          <div className="value">
            3–5<span className="unit">×</span>
          </div>
          <VizCostBars />
          <p className="desc">price premium for active vitamin forms. We absorb it. Your body does too.</p>
        </div>
      </div>
    </section>
  )
}
