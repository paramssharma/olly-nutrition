const photos = [
  { src: '/sp-photo-1.png', alt: 'Photo 1' },
  { src: '/sp-photo-2.png', alt: 'Photo 2' },
  { src: '/sp-photo-3.png', alt: 'Photo 3' },
  { src: '/sp-photo-4.png', alt: 'Photo 4' },
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
