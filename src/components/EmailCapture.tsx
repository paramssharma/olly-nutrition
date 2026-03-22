export default function EmailCapture() {
  return (
    <section className="email-capture" aria-label="Newsletter signup">
      <div className="email-capture-inner">
        <h3 className="email-capture-headline">Not ready yet? Get 10% off your first order.</h3>
        <form
          className="email-capture-form"
          onSubmit={(e) => e.preventDefault()} /* TODO: wire to email service */
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="email-input"
            required
            aria-label="Email address"
          />
          <button type="submit" className="email-submit">Get My 10%</button>
        </form>
        <p className="email-capture-note">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
