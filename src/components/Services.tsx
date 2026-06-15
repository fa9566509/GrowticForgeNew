import { useState, useMemo } from 'react'

type Category = 'all' | 'build' | 'grow' | 'scale'

interface ServiceItem {
  num: string
  category: Exclude<Category, 'all'>
  title: string
  desc: string
}

const services: ServiceItem[] = [
  { num: '01', category: 'build', title: 'Web Design & Development', desc: 'High-converting websites, landing pages, and custom web apps built for performance, accessibility, and search visibility from day one.' },
  { num: '02', category: 'grow', title: 'SEO & Paid Advertising', desc: 'Organic rankings and Google / Meta / TikTok ad campaigns engineered to maximize ROAS, dominate your niche, and compound over time.' },
  { num: '03', category: 'grow', title: 'Social Media Marketing', desc: 'Strategy, content creation, community management, short-form video editing, and influencer partnerships across all major platforms.' },
  { num: '04', category: 'grow', title: 'Email Marketing Campaigns', desc: 'Newsletters, automated drip sequences, abandoned cart flows, and lifecycle campaigns with proven open and conversion rates.' },
  { num: '05', category: 'build', title: 'Brand Identity & Logo Design', desc: 'Logos, brand systems, color palettes, typography, and full guidelines that make your business instantly recognizable.' },
  { num: '06', category: 'grow', title: 'Content Writing & Copywriting', desc: 'Website copy, blog content, ad scripts, product descriptions, and sales pages written to convert, not just to fill space.' },
  { num: '07', category: 'grow', title: 'Video Editing & Short-Form', desc: 'TikTok, Reels, YouTube Shorts — scroll-stopping video content edited to grow your audience fast across every platform.' },
  { num: '08', category: 'scale', title: 'AI Automation & Chatbots', desc: 'WhatsApp bots, Messenger automation, CRM workflows, appointment booking, and AI pipelines that work 24/7.' },
  { num: '09', category: 'build', title: 'E-commerce Store Setup', desc: 'Shopify and WooCommerce stores built for conversions — product setup, apps, payment gateways, and ongoing CRO.' },
  { num: '10', category: 'scale', title: 'Sales Funnel Creation', desc: 'End-to-end funnels with lead magnets, landing pages, automated follow-ups, upsell flows, and full CRM integration.' },
  { num: '11', category: 'scale', title: 'Reputation Management', desc: 'Monitor, manage, and proactively build your brand\'s online reputation across Google, Yelp, and industry directories.' },
  { num: '12', category: 'scale', title: 'Analytics & Strategy', desc: 'GA4 setup, custom dashboards, competitive audits, go-to-market plans, and growth roadmaps for serious operators.' },
  { num: '13', category: 'scale', title: 'Lead Generation & CRM', desc: 'Multi-channel lead gen systems, CRM configuration, pipeline automation, and the data infrastructure to scale your sales.' },
  { num: '14', category: 'build', title: 'Graphic Design & Visual', desc: 'Social posts, banners, brochures, flyers, and thumbnails — visual content that captures attention and communicates your brand.' },
]

const categories: { key: Category; label: string; desc: string }[] = [
  { key: 'all', label: 'All Services', desc: 'Everything we offer to build, grow, and scale your digital presence.' },
  { key: 'build', label: 'Build', desc: 'Websites, brands, stores, and visual assets that establish your foundation.' },
  { key: 'grow', label: 'Grow', desc: 'SEO, ads, social, email, and content that drive traffic and convert audiences.' },
  { key: 'scale', label: 'Scale', desc: 'AI, automation, funnels, and analytics that multiply your revenue engine.' },
]

const accentMap: Record<Exclude<Category, 'all'>, string> = {
  build: '#2997ff',
  grow: '#4ade80',
  scale: '#a855f7',
}

export default function Services() {
  const [active, setActive] = useState<Category>('all')
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const filtered = useMemo(
    () => active === 'all' ? services : services.filter(s => s.category === active),
    [active],
  )

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-root)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          marginBottom: '48px',
          alignItems: 'end',
        }}>
          <div>
            <p className="label" style={{ marginBottom: '16px' }}>What We Do</p>
            <h2 className="heading-1" style={{ margin: 0 }}>
              Our<br />Services
            </h2>
          </div>
          <div style={{ paddingBottom: '4px' }}>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              {categories.find(c => c.key === active)!.desc}
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '56px',
          flexWrap: 'wrap',
        }}>
          {categories.map(c => {
            const isActive = active === c.key
            const accent = c.key !== 'all' ? accentMap[c.key] : undefined
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 20px',
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: `1px solid ${isActive && accent ? accent : 'var(--border)'}`,
                  borderRadius: '99px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (isActive) return
                  e.currentTarget.style.borderColor = 'var(--text-faint)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  if (isActive) return
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                {isActive && accent && (
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: accent,
                    boxShadow: `0 0 6px ${accent}`,
                    flexShrink: 0,
                  }} />
                )}
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Services grid — two columns, cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          {filtered.map((s, i) => {
            const accent = accentMap[s.category]
            const isHovered = hoveredIdx === i
            return (
              <a
                key={s.num}
                href="#contact"
                className={`service-card service-card-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '28px 28px 28px 24px',
                  background: isHovered ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                  border: `1px solid ${isHovered ? accent : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  animation: `serviceFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s forwards`,
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : 'none',
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Left accent line — visible on hover */}
                <div style={{
                  position: 'absolute',
                  left: 0, top: '16px', bottom: '16px',
                  width: '3px',
                  borderRadius: '0 4px 4px 0',
                  background: accent,
                  transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                  transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  transformOrigin: 'center',
                }} />

                {/* Number */}
                <span style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: isHovered ? accent : 'var(--text-faint)',
                  lineHeight: 1,
                  flexShrink: 0,
                  transition: 'color 0.3s ease',
                  width: '40px',
                }}>
                  {s.num}
                </span>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px',
                  }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: isHovered ? 'var(--text)' : 'var(--text)',
                      transition: 'color 0.3s ease',
                    }}>
                      {s.title}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                    transition: 'color 0.3s ease',
                  }}>
                    {s.desc}
                  </p>
                </div>

                {/* Arrow */}
                <span style={{
                  color: isHovered ? accent : 'var(--text-faint)',
                  fontSize: '18px',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  display: 'inline-block',
                  marginTop: '2px',
                }}>
                  →
                </span>
              </a>
            )
          })}
        </div>

        {/* Empty state — shouldn't happen but defensive */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            No services in this category.
          </div>
        )}
      </div>

      <style>{`
        @keyframes serviceFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          #services .container > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 768px) {
          #services .container > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
