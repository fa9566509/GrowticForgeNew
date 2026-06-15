import { useState, useEffect, useMemo, useCallback } from 'react'

interface Project {
  num: string
  client: string
  headline: string
  desc: string
  tags: string[]
  image: string
  result: string
}

const projects: Project[] = [
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

// Extract unique tags sorted alphabetically
const allTags = [...new Set(projects.flatMap(p => p.tags))].sort()

const accentColors = ['#2997ff', '#4ade80', '#a855f7', '#f59e0b', '#ef4444']

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [current, setCurrent] = useState(0)
  const [animateDir, setAnimateDir] = useState<'left' | 'right' | null>(null)

  const filtered = useMemo(
    () => activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects,
    [activeTag],
  )

  // Reset current when filter changes
  useEffect(() => { setCurrent(0); setAnimateDir(null) }, [activeTag])

  const goTo = useCallback((idx: number) => {
    if (idx === current || filtered.length === 0) return
    setAnimateDir(idx > current ? 'right' : 'left')
    setCurrent(idx)
  }, [current, filtered.length])

  const prev = useCallback(() => {
    if (filtered.length === 0) return
    setAnimateDir('left')
    setCurrent(c => (c === 0 ? filtered.length - 1 : c - 1))
  }, [filtered.length])

  const next = useCallback(() => {
    if (filtered.length === 0) return
    setAnimateDir('right')
    setCurrent(c => (c === filtered.length - 1 ? 0 : c + 1))
  }, [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
      if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  const p = filtered[current]
  const accent = accentColors[current % accentColors.length]

  return (
    <section id="portfolio" style={{ background: '#050505', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>Selected Work</p>
            <h2 className="heading-1" style={{ color: '#fff', margin: 0 }}>Our Results</h2>
          </div>
          {/* Progress indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.02em',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {String(current + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
            </span>
            {/* Progress bar */}
            <div style={{
              width: '64px',
              height: '2px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '99px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                background: '#fff',
                borderRadius: '99px',
                transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                width: `${((current + 1) / filtered.length) * 100}%`,
              }} />
            </div>
          </div>
        </div>

        {/* Tag filters */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={() => setActiveTag(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '7px 16px',
              background: activeTag === null ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: `1px solid ${activeTag === null ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '99px',
              fontSize: '13px',
              fontWeight: activeTag === null ? 600 : 400,
              color: activeTag === null ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              letterSpacing: '-0.01em',
              outline: 'none',
            }}
          >
            All Work
          </button>
          {allTags.map(tag => {
            const isActive = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(isActive ? null : tag)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '7px 16px',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '99px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  letterSpacing: '-0.01em',
                  outline: 'none',
                }}
              >
                {tag}
              </button>
            )
          })}
        </div>

        {/* Project card */}
        {p && (
          <div style={{ position: 'relative' }}>
            <div
              key={`${p.num}-${animateDir}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: '#161616',
                minHeight: '520px',
                animation: `portfolioSlide${animateDir === 'right' ? 'Right' : 'Left'} 0.5s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.client}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, rgba(10,10,10,0.3), transparent)',
                }} />
                {/* Result badge */}
                <div style={{
                  position: 'absolute',
                  top: '28px',
                  left: '28px',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: `1px solid ${accent}44`,
                  borderRadius: '99px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: accent,
                    flexShrink: 0,
                  }} />
                  {p.result}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '56px 52px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '28px',
                  }}>
                    <span style={{
                      fontSize: '24px',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: accent,
                      lineHeight: 1,
                    }}>
                      {p.num}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '12px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {p.client}
                  </p>
                  <h3 className="heading-2" style={{ color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
                    {p.headline}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.65,
                    margin: '0 0 36px',
                  }}>
                    {p.desc}
                  </p>
                  {/* Tags — clickable */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tags.map(t => (
                      <button
                        key={t}
                        onClick={() => setActiveTag(t === activeTag ? null : t)}
                        style={{
                          padding: '5px 12px',
                          background: t === activeTag ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)',
                          border: `1px solid ${t === activeTag ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)'}`,
                          borderRadius: '99px',
                          fontSize: '12px',
                          color: t === activeTag ? '#fff' : 'rgba(255,255,255,0.55)',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          outline: 'none',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    marginTop: '36px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.gap = '12px'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.gap = '8px'
                  }}
                >
                  Start a Similar Project
                  <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                </a>
              </div>
            </div>

            {/* Nav arrows — positioned outside card */}
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '32px',
              alignItems: 'center',
            }}>
              <button
                onClick={prev}
                disabled={filtered.length <= 1}
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
                  color: filtered.length <= 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.7)',
                  cursor: filtered.length <= 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (filtered.length <= 1) return
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                ←
              </button>

              {/* Dot indicators — show up to 7, then compress */}
              {filtered.length <= 7 ? (
                filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
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
                ))
              ) : (
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
                  {current + 1} of {filtered.length}
                </span>
              )}

              <button
                onClick={next}
                disabled={filtered.length <= 1}
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
                  color: filtered.length <= 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.7)',
                  cursor: filtered.length <= 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (filtered.length <= 1) return
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                →
              </button>
            </div>

            {/* Keyboard hint — subtle, fades after first interaction */}
            <p style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.02em',
            }}>
              Use ← → arrow keys to browse
            </p>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 0',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '15px',
          }}>
            No projects match this filter.
          </div>
        )}
      </div>

      <style>{`
        @keyframes portfolioSlideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes portfolioSlideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          #portfolio .container > div:nth-child(3) > div:first-child {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
