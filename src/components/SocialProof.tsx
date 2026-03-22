const photos = [
  { src: '/sp-photo-1.png', alt: 'Mother and daughter smiling with olly gummies', name: 'Priya M.', city: 'Mumbai', quote: '"She asks for it every morning now."' },
  { src: '/sp-photo-2.png', alt: 'Child happily taking a gummy vitamin at breakfast', name: 'Ananya R.', city: 'Bengaluru', quote: '"Finally a supplement he doesn\'t spit out."' },
  { src: '/sp-photo-3.png', alt: 'Family breakfast routine with olly bottle on table', name: 'Deepa S.', city: 'Delhi', quote: '"Zero sugar was non-negotiable for us."' },
  { src: '/sp-photo-4.png', alt: 'Toddler reaching for an olly gummy bottle', name: 'Kavitha P.', city: 'Chennai', quote: '"Our pediatrician actually recommended this."' },
]

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Social proof">
      <div className="sp-header">
        <p className="sp-subhead">Trusted by families across India.</p>
        <h2 className="sp-headline">
          Formulated with pediatricians.<br />Not endorsed by celebrities.
        </h2>
      </div>

      <div className="sp-photo-strip">
        {photos.map((photo) => (
          <div key={photo.src} className="sp-photo-card">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="sp-card-overlay">
              <p className="sp-card-quote">{photo.quote}</p>
              <p className="sp-card-attr"><strong>{photo.name}</strong> &middot; {photo.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
