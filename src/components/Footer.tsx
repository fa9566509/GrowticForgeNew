const col1 = [
  { label: 'Web Design', href: '#services' },
  { label: 'SEO & Ads', href: '#services' },
  { label: 'Social Media', href: '#services' },
  { label: 'Email Marketing', href: '#services' },
  { label: 'Brand Identity', href: '#services' },
  { label: 'AI Automation', href: '#services' },
]

const col2 = [
  { label: 'E-commerce', href: '#services' },
  { label: 'Reputation Mgmt', href: '#services' },
  { label: 'Video Editing', href: '#services' },
  { label: 'Graphic Design', href: '#services' },
  { label: 'CRO', href: '#services' },
  { label: 'Lead Generation', href: '#services' },
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Our Process', href: '#process' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Free Audit', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(255,255,255,0.6)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '16px' }}
            >
              Growtic Forge Digital™
            </a>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', margin: '0 0 28px', maxWidth: '260px' }}>
              An independent, full-service digital agency. We forge digital brands that dominate their markets.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'LinkedIn', icon: 'in' },
                { label: 'Instagram', icon: '⊕' },
                { label: 'Facebook', icon: 'f' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>
              Services
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col1.map(l => (
                <a key={l.label} href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services col 2 */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>
              More Services
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col2.map(l => (
                <a key={l.label} href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>
              Company
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {company.map(l => (
                <a key={l.label} href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Growtic Forge Digital. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a key={l} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 580px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
