import { FigureAbsorption, FigureDNA, FigureSynergy } from './illustrations/journal-figures'

export default function JournalSection() {
  return (
    <section className="journal" id="journal">
      <div className="container">
        <div className="section-eyebrow">The Journal</div>
        <h2 className="section-h2">
          Stories from scientists, clinicians, and founding members.
        </h2>
        <p className="section-lead">
          We write long-form about the science that shapes our formulations. No lifestyle content. No wellness
          platitudes. Just the arguments behind every decision.
        </p>

        <div className="journal-grid">
          <article className="article">
            <div className="article-image">
              <span className="article-image-label">FIG. A / DNA</span>
              <FigureDNA />
            </div>
            <div className="article-tag">Research · 8 min</div>
            <h3>The MTHFR Gene Variant: Why Folic Acid Fails Half of Indians</h3>
            <p>
              A 2019 multi-centre study found the MTHFR C677T variant in 47% of Indian adults. For these
              individuals, the folic acid in their multivitamin is not just unused — it may be harmful...
            </p>
            <div className="article-meta">Dr. Priya Sharma · Jan 2026</div>
          </article>

          <article className="article">
            <div className="article-image">
              <span className="article-image-label">FIG. B / SYNERGY</span>
              <FigureSynergy />
            </div>
            <div className="article-tag">Formulation · 6 min</div>
            <h3>Why We Paired D3 With K2-MK7 (And Why No One Else Does)</h3>
            <p>
              Vitamin D3 pulls calcium into the bloodstream. Without K2-MK7, that calcium can deposit in arteries
              instead of bones. The synergy is not optional. It is the mechanism...
            </p>
            <div className="article-meta">Dr. Arjun Iyer · Dec 2025</div>
          </article>

          <article className="article">
            <div className="article-image">
              <span className="article-image-label">FIG. C / ABSORPTION</span>
              <FigureAbsorption />
            </div>
            <div className="article-tag">Science · 5 min</div>
            <h3>Magnesium Oxide vs Bisglycinate: An 11× Absorption Gap</h3>
            <p>
              Every Indian multivitamin we tested uses magnesium oxide, a form absorbed at ~4%. Bisglycinate, the
              form we use, absorbs at ~44%. That is not a nuance. It is a category error...
            </p>
            <div className="article-meta">Olly Research · Nov 2025</div>
          </article>
        </div>
      </div>
    </section>
  )
}
