interface HiwCard {
  step: string
  title: string
  body: string
  icon: React.ReactNode
  ctaText: string
  ctaHref: string
}

const BoxIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="14" width="36" height="28" rx="3" stroke="#0e1e32" strokeWidth="3"/>
    <path d="M6 22h36M24 14v28M16 6h16l6 8H10l6-8z" stroke="#0e1e32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GummyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="#0e1e32" strokeWidth="3"/>
    <path d="M17 22c0-1 1.5-3 3.5-3s3 1.5 3 2.5M24.5 22c0-1 1.5-3 3.5-3s3 1.5 3 2.5" stroke="#0e1e32" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 28c0 0 3 5 8 5s8-5 8-5" stroke="#0e1e32" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L8 12v12c0 10 6.5 16.5 16 20 9.5-3.5 16-10 16-20V12L24 4z" stroke="#0e1e32" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M17 24l5 5 9-10" stroke="#0e1e32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const cards: HiwCard[] = [
  {
    step: '01',
    title: 'Subscribe',
    body: '₹799/month delivered. Cancel anytime. No quiz. No friction. Just the vitamins Indian kids need.',
    icon: <BoxIcon />,
    ctaText: 'Subscribe',
    ctaHref: '#subscribe',
  },
  {
    step: '02',
    title: 'One Gummy a Day',
    body: "Kids love the taste (80%+ acceptance). Part of the morning routine. They'll ask for it.",
    icon: <GummyIcon />,
    ctaText: 'See Flavors',
    ctaHref: '#products',
  },
  {
    step: '03',
    title: 'Key Gaps. Covered.',
    body: 'B12, Folate, D3+K2, Zinc, and Vitamin C — the gaps Indian diets miss most, in bioavailable forms.',
    icon: <ShieldIcon />,
    ctaText: 'View Ingredients',
    ctaHref: '#ingredients',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-label="How it works">
      <div className="hiw-inner">
        <div className="hiw-header">
          <p className="hiw-subhead">Simple by design.</p>
          <h2 className="hiw-headline">
            The simplest health habit you'll build for your child this year.
          </h2>
        </div>

        <div className="hiw-cards">
          {cards.map((card) => (
            <div key={card.step} className="hiw-card">
              <span className="hiw-step">{card.step}</span>
              <div className="hiw-icon-wrap">
                {card.icon}
              </div>
              <h3 className="hiw-card-title">{card.title}</h3>
              <p className="hiw-card-body">{card.body}</p>
              <a href={card.ctaHref} className="hiw-card-cta">
                {card.ctaText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
