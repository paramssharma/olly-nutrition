const publications = ['The Economic Times', 'Vogue India', 'BabyChakra', 'ParentCircle', 'Mint']

export default function PressLogos() {
  return (
    <section className="press-strip" aria-label="Featured in">
      <div className="press-strip-inner">
        <p className="press-label">As featured in</p>
        {publications.map((name) => (
          <span key={name} className="press-name">{name}</span>
        ))}
      </div>
    </section>
  )
}
