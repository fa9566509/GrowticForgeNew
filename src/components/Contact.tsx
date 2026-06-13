import { useState } from 'react'

const services = [
  'Web Design & Development',
  'SEO & Paid Advertising',
  'Social Media Marketing',
  'Email Marketing',
  'Brand Identity',
  'AI Automation',
  'E-commerce Setup',
  'Reputation Management',
  'Other / Multiple',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-root)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <p className="label" style={{ marginBottom: '16px' }}>Ready to forge your growth?</p>
            <h2 className="heading-1" style={{ marginBottom: '24px' }}>Let's Talk</h2>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '48px' }}>
              Tell us about your business and goals. Our strategy team responds within 24 hours with a tailored plan and a no-obligation audit of your current digital presence.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              {[
                { label: 'Email', value: 'hello@growticforge.com', icon: '✉' },
                { label: 'Phone', value: '+1 (512) 944-7780', icon: '✆' },
                { label: 'Hours', value: 'Mon – Fri, 9AM – 6PM', icon: '◑' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', flexShrink: 0, color: 'var(--text-muted)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 500, color: 'var(--text-faint)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {item.label}
                    </p>
                    <p style={{ margin: 0, fontSize: '15px', color: 'var(--text)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '200px' }}>
              <img
                src="https://picsum.photos/seed/map-austin/600/200"
                alt="Location"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(30%)' }}
              />
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 44px',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>Message sent.</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6 }}>
                  We'll respond within 24 hours with a tailored plan and free audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Full Name
                    </label>
                    <input className="input" placeholder="John Smith" required />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Email
                    </label>
                    <input className="input" type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Phone
                  </label>
                  <input className="input" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Service Needed
                  </label>
                  <select className="select" defaultValue="">
                    <option value="" disabled>Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Tell Us About Your Business
                  </label>
                  <textarea className="textarea" placeholder="Describe your goals and current challenges..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                  Send Message
                </button>
                <p style={{ fontSize: '12px', color: 'var(--text-faint)', textAlign: 'center', margin: 0 }}>
                  We respond within 24 hrs
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
