const stats = [
  { num: '120+', label: 'Clients Served' },
  { num: '97%', label: 'Client Retention' },
  { num: '8+', label: 'Years Excellence' },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left — image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/5' }}>
              <img
                src="https://picsum.photos/seed/growtic-office/800/1000"
                alt="Growtic Forge office"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: '-24px', right: '-24px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
              minWidth: '200px',
            }}>
              <p style={{ margin: '0 0 4px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>Average ROAS</p>
              <p style={{ margin: 0, fontSize: '36px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text)' }}>4.8×</p>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-faint)' }}>Across all ad campaigns</p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="label" style={{ marginBottom: '16px' }}>About</p>
            <h2 className="heading-1" style={{ marginBottom: '28px' }}>
              The Growth Engine
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                We are an independent, full-service digital agency. At Growtic Forge Digital, we believe your digital presence is more than a website or an ad campaign — it's the sum total of every interaction your audience has with your brand online.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                We partner with founders, operators, and marketing teams across the United States to design, build, and continuously scale their digital ecosystems. Our approach is collaborative, transparent, and relentlessly data-driven.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                We don't sell deliverables — we sell outcomes. Every engagement is structured around the metrics that actually move your business forward.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '40px' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div className="stat-number">{s.num}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '6px 0 0', lineHeight: 1.4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Let's talk →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .container > div > div:first-child { order: 2; }
          #about .container > div > div:last-child { order: 1; }
        }
      `}</style>
    </section>
  )
}
