const clients = [
  'NovaSkin Beauty',
  'Keller Law Group',
  'Summit HVAC Solutions',
  'Meridian Health Clinics',
  'RoofPro USA',
  'BlueRidge Dental',
  'Apex Realty Group',
]

export default function TrustedBy() {
  const doubled = [...clients, ...clients]

  return (
    <section style={{ background: 'var(--bg-root)', padding: '64px 0', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '32px', textAlign: 'center' }}>
        <p className="label">Trusted by</p>
      </div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, var(--bg-root), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, var(--bg-root), transparent)',
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              style={{
                padding: '0 48px',
                whiteSpace: 'nowrap',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-faint)',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '48px',
              }}
            >
              {name}
              <span style={{ color: 'var(--border)', fontSize: '8px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
