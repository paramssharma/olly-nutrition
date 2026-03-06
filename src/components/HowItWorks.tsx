interface HiwCard {
  title: string
  body: string
}

const cards: HiwCard[] = [
  {
    title: 'Subscribe',
    body: '₹799/month delivered. Cancel anytime. No quiz. No personalization friction. No 10-minute funnel. Just the vitamins Indian kids need.',
  },
  {
    title: 'One Gummy With Breakfast',
    body: "Kids love the taste (80%+ acceptance). Part of the morning routine. Natural strawberry, orange, or mixed berry. They'll ask for it.",
  },
  {
    title: '6 Deficiencies. Covered.',
    body: '₹799/month delivered. Cancel anytime. No quiz. No personalization friction. No 10-minute funnel. Just the vitamins Indian kids need.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" aria-label="How it works">
      <div className="hiw-inner">
        <div className="hiw-header">
          <p className="hiw-subhead">Feeding well should feel simple.</p>
          <h2 className="hiw-headline">
            The simplest health habit you'll build for your child this year.
          </h2>
        </div>

        <div className="hiw-cards">
          {cards.map((card) => (
            <div key={card.title} className="hiw-card">
              <img src="/hiw-icon.svg" className="hiw-icon" alt="" aria-hidden="true" />
              <h3 className="hiw-card-title">{card.title}</h3>
              <p className="hiw-card-body">{card.body}</p>
              <div className="hiw-card-link-wrap">
                <div className="hiw-card-link-inner">
                  <span className="hiw-card-link-text">Subscribe</span>
                  <div className="hiw-link-line-container" aria-hidden="true">
                    <img src="/hiw-link-line.svg" className="hiw-link-line" alt="" />
                  </div>
                </div>
                <img src="/hiw-arrow-blue.svg" className="hiw-card-arrow" alt="" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
