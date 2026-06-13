import { useState } from 'react'

const projects = [
  {
    num: '01',
    client: 'NovaSkin Beauty',
    headline: 'From $18K to $74K/month in four months.',
    desc: 'Full e-commerce growth system — Shopify build, email automation, and paid social. Revenue scaled 4× through strategic funnel optimization and targeted campaigns.',
    tags: ['Shopify', 'Email Automation', 'Meta Ads'],
    image: 'https://picsum.photos/seed/novaskin-beauty/1200/700',
    result: '+311% Revenue',
  },
  {
    num: '02',
    client: 'Keller Law Group',
    headline: 'Page 4 to position 2. Leads up 3×.',
    desc: 'SEO overhaul and Google Ads strategy. Achieved first-page dominance in six months. Inbound leads tripled with a 38% lower cost per acquisition.',
    tags: ['SEO', 'Google Ads', 'CRO'],
    image: 'https://picsum.photos/seed/keller-law/1200/700',
    result: '−38% CPA',
  },
  {
    num: '03',
    client: 'Summit HVAC Solutions',
    headline: '210% more bookings. First quarter.',
    desc: 'Brand identity, website redesign, and AI-powered chatbot intake system. Appointment bookings increased 210% in the first quarter post-launch.',
    tags: ['Brand Identity', 'Web Design', 'AI Chatbot'],
    image: 'https://picsum.photos/seed/summit-hvac/1200/700',
    result: '+210% Bookings',
  },
  {
    num: '04',
    client: 'Meridian Health Clinics',
    headline: '14 reviews to 280 in 8 months.',
    desc: 'Full-funnel marketing — local SEO, reputation management, and automated follow-up sequences transformed their online presence.',
    tags: ['Local SEO', 'Reputation Mgmt', 'Automation'],
    image: 'https://picsum.photos/seed/meridian-health/1200/700',
    result: '20× Reviews',
  },
  {
    num: '05',
    client: 'RoofPro USA',
    headline: 'Qualified leads 3× in under 60 days.',
    desc: 'Lead generation overhaul with Google LSA, paid search, and a full CRM pipeline. 22% lower CPL while tripling qualified lead volume.',
    tags: ['Lead Generation', 'Google Ads', 'CRM Setup'],
    image: 'https://picsum.photos/seed/roofpro-usa/1200/700',
    result: '−22% CPL',
  },
]

export default function Portfolio() {
  const [current, setCurrent] = useState(0)
  const p = projects[current]

  return (
    <section id="portfolio" style={{ background: '#050505', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>Selected Work</p>
            <h2 className="heading-1" style={{ color: '#fff', margin: 0 }}>Our Results</h2>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
                color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', transition: 'all 0.2s',
              }}
            >
              ←
            </button>
            <button
              onClick={() => setCurrent(c => Math.min(projects.length - 1, c + 1))}
              disabled={current === projects.length - 1}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
                color: current === projects.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
                cursor: current === projects.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', transition: 'all 0.2s',
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Project card */}
        <div
          key={p.num}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            background: '#161616',
            minHeight: '520px',
          }}
        >
          {/* Image */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={p.image}
              alt={p.client}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(10,10,10,0.3), transparent)',
            }} />
            {/* Result badge */}
            <div style={{
              position: 'absolute', top: '28px', left: '28px',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '99px', padding: '8px 16px',
              fontSize: '13px', fontWeight: 600, color: '#fff',
              letterSpacing: '-0.01em',
            }}>
              {p.result}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '56px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <span className="num-index" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>{p.num} / 0{projects.length}</span>
              </div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', marginBottom: '12px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {p.client}
              </p>
              <h3 className="heading-2" style={{ color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
                {p.headline}
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 36px' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {p.tags.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '5px 12px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '99px',
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.55)',
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none', transition: 'color 0.2s',
                marginTop: '36px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              Start a Similar Project ↗
            </a>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '36px' }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '99px',
                border: 'none',
                background: i === current ? '#fff' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
