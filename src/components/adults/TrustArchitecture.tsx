import {
  IconClinicalAdvisory,
  IconNamedForms,
  IconPublishedRationale,
  IconQrCode,
} from './illustrations/trust-icons'

export default function TrustArchitecture() {
  return (
    <section className="trust">
      <div className="container">
        <div className="section-eyebrow">Trust Architecture</div>
        <h2 className="section-h2">
          We publish everything. Because we can.
        </h2>

        <div className="trust-grid">
          <div className="trust-item">
            <IconQrCode />
            <div className="trust-num">01</div>
            <div className="trust-h">Batch-level COA</div>
            <p className="trust-body">
              Every jar carries a QR code on the cap. It links to the specific batch's independent lab report —
              potency, heavy metals, microbial. NABL-accredited.
            </p>
          </div>

          <div className="trust-item">
            <IconNamedForms />
            <div className="trust-num">02</div>
            <div className="trust-h">Named Forms</div>
            <p className="trust-body">
              "Methylcobalamin" not "Vitamin B12." Every active form is printed on the front label in full chemical
              name. No "proprietary blends." No hiding.
            </p>
          </div>

          <div className="trust-item">
            <IconPublishedRationale />
            <div className="trust-num">03</div>
            <div className="trust-h">Published Rationale</div>
            <p className="trust-body">
              Every formulation decision is documented with citations. Why this form. Why this dose. Why this
              combination. Read the reasoning, not the marketing.
            </p>
          </div>

          <div className="trust-item">
            <IconClinicalAdvisory />
            <div className="trust-num">04</div>
            <div className="trust-h">Clinical Advisory</div>
            <p className="trust-body">
              IAP-registered physicians and nutrition scientists on equity-aligned advisory. Names published.
              Credentials verifiable. No paid endorsements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
