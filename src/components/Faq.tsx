const faqs = [
  {
    q: 'What age is olly suitable for?',
    a: 'olly is formulated for children aged 3–12. The gummy size and nutrient dosage are calibrated for this age range. For children under 3, please consult your pediatrician.',
  },
  {
    q: 'What makes methylcobalamin different from cyanocobalamin?',
    a: 'Methylcobalamin is the active, bioavailable form of B12 that the body can use directly. Cyanocobalamin is a synthetic form that must be converted before the body can use it — an extra step that varies in efficiency from person to person. We skip the conversion entirely by using the form your child\'s body actually needs.',
  },
  {
    q: 'My child is a very picky eater. Will they actually take this?',
    a: '80%+ of children in our taste trials accepted the gummy without hesitation. Available in natural strawberry, orange, and mixed berry — sweetened with fruit juice, zero sugar, and no artificial flavors.',
  },
  {
    q: 'How is this sugar-free if it tastes good?',
    a: 'We use natural fruit juice concentrate for sweetness and real fruit extracts for flavor. No sugar, no sugar alcohols, no artificial sweeteners. Just the natural sweetness kids love.',
  },
  {
    q: 'Is it safe to take alongside other supplements or medication?',
    a: 'olly uses standard pediatric nutrient doses that are safe alongside a normal diet. If your child takes prescription medication, we recommend checking with their pediatrician before starting any supplement.',
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'Cancel your subscription anytime — no lock-in, no questions. If your child doesn\'t like the taste within the first 30 days, we\'ll refund your order in full. No returns needed.',
  },
  {
    q: 'Do you ship across India? How long does delivery take?',
    a: 'We deliver to all major pin codes across India. Orders typically arrive within 3–5 business days. Subscription orders ship automatically each month with free delivery.',
  },
  {
    q: 'What certifications does olly have?',
    a: 'olly is manufactured in a FSSAI-licensed, GMP-certified facility. Every batch is verified by an independent third-party lab for potency, purity, and heavy metal testing. Certificates of analysis are available on request.',
  },
]

export default function Faq() {
  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <div className="faq-inner">
        <div className="faq-header">
          <p className="faq-subhead">Parents ask.</p>
          <h2 className="faq-headline">Have any questions?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
