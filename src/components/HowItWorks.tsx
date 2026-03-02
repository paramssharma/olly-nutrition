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
              <div className="hiw-icon" aria-hidden="true" />
              <h3 className="hiw-card-title">{card.title}</h3>
              <p className="hiw-card-body">{card.body}</p>
              <a href="#" className="hiw-card-link">Subscribe →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
