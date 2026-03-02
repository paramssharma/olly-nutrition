const faqs = [
  {
    q: 'My child is 3. Can they take this?',
    a: 'Olly is formulated for children aged 3 and above. The gummy size and dosage are appropriate for young children. Always consult your pediatrician if you have specific health concerns.',
  },
  {
    q: 'What\'s the difference between methylcobalamin and cyanocobalamin?',
    a: 'Methylcobalamin is the active, bioavailable form of B12 that the body can use directly. Cyanocobalamin is a synthetic precursor that must be converted — a step that up to 60% of Indians with the MTHFR gene variant cannot do efficiently.',
  },
  {
    q: 'My child is a very picky eater. Will they actually take this?',
    a: '80%+ of children in our taste trials accepted the gummy without hesitation. Available in strawberry, orange, and mixed berry — all naturally sweetened with fruit juice and zero artificial flavors.',
  },
]

export default function CtaBanner() {
  return (
    <section className="faq" aria-label="Frequently asked questions">
      <div className="faq-inner">
        <div className="faq-header">
          <h2 className="faq-headline">Have any questions?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-question">{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
