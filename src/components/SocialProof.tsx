const photos = [
  { src: 'http://localhost:3845/assets/79b4701e7aacd0a231c57953e59ad461565b6c2f.png', alt: 'Photo 1' },
  { src: 'http://localhost:3845/assets/e23e279dd11b34163f10f27216f7eb0b4e87ead2.png', alt: 'Photo 2' },
  { src: 'http://localhost:3845/assets/60fb1860033d78ddb16039b85aa16ebd919b54e2.png', alt: 'Photo 3' },
  { src: 'http://localhost:3845/assets/93c663a567830b2e95984e326bf6c7c246507c3b.png', alt: 'Photo 4' },
]

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Social proof">
      <div className="sp-header">
        <p className="sp-subhead">Feeding well should feel simple.</p>
        <h2 className="sp-headline">
          Formulated with pediatricians.<br />Not endorsed by celebrities.
        </h2>
      </div>

      <div className="sp-photo-strip">
        {photos.map((photo) => (
          <div key={photo.src} className="sp-photo-card">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
