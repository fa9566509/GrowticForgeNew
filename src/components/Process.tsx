const steps = [
  {
    num: '01',
    phase: 'Discovery',
    title: 'Discovery & Audit',
    desc: 'We dig deep into your business, market, competitors, and current digital presence to identify exactly where you stand and where the real opportunities are.',
  },
  {
    num: '02',
    phase: 'Strategy',
    title: 'Strategy Blueprint',
    desc: 'We build a custom 90-day growth plan with clear KPIs, channel selection, content strategy, and budget allocation tailored to your specific goals.',
  },
  {
    num: '03',
    phase: 'Build',
    title: 'Build & Launch',
    desc: 'Our team executes with precision — designing, developing, and deploying your campaigns, assets, and systems on time and on budget.',
  },
  {
    num: '04',
    phase: 'Scale',
    title: 'Optimize & Scale',
    desc: 'We monitor performance daily, iterate on real data, and scale what\'s working — continuously compounding your results month over month.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: 'var(--bg-root)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="label" style={{ marginBottom: '16px' }}>How We Work</p>
          <h2 className="heading-1">
            How we forge
            <br />
            <span style={{ color: 'var(--text-muted)' }}>your growth</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '480px', margin: '20px auto 0' }}>
            A battle-tested four-step methodology that transforms business goals into compounding digital results — with full transparency at every stage.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {steps.map((s, i) => (
            <div key={s.num} className="process-card" style={{ position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '52px', right: '-8px',
                  width: '16px', height: '1px',
                  background: 'var(--border)',
                  zIndex: 1,
                }} />
              )}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--text)', color: '#fff',
                fontSize: '12px', fontWeight: 600,
                marginBottom: '24px',
              }}>
                {s.num}
              </div>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 8px' }}>
                {s.phase}
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', margin: '0 0 12px', lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #process .container > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          #process .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
