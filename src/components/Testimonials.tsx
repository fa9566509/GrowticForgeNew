const testimonials = [
  {
    quote: "Growtic Forge completely transformed our online presence. Within 90 days our leads tripled and our website finally converts. These guys actually deliver on their promises — rare in this industry.",
    name: 'Marcus R.',
    role: 'CEO',
    company: 'Summit HVAC Solutions',
    location: 'Denver, CO',
    avatar: 'https://picsum.photos/seed/marcus-r/120/120',
  },
  {
    quote: "Our Shopify store went from $18K to $74K a month in four months. The email automation and ad strategy they built is still running on autopilot. Best investment we've made in the business.",
    name: 'Jamie L.',
    role: 'Founder',
    company: 'NovaSkin Beauty',
    location: '',
    avatar: 'https://picsum.photos/seed/jamie-l/120/120',
  },
  {
    quote: "Their SEO team took us from page 4 to position 2 on Google for our main keyword in under six months. Weekly reports, open communication, zero fluff. We don't chase them — they come to us.",
    name: 'David K.',
    role: 'Managing Partner',
    company: 'Keller Law Group',
    location: 'Chicago, IL',
    avatar: 'https://picsum.photos/seed/david-k/120/120',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="label" style={{ marginBottom: '16px' }}>Client Stories</p>
          <h2 className="heading-1">What they say</h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}
            >
              {/* Quote mark */}
              <div>
                <div style={{ fontSize: '40px', color: 'var(--border)', lineHeight: 1, marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
                  "
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em' }}>{t.name}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                    {t.role} — {t.company}{t.location ? `, ${t.location}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
