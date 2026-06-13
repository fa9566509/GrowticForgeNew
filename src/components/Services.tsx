const services = [
  { num: '01', title: 'Web Design & Development', desc: 'High-converting websites, landing pages, and custom web apps built for performance, accessibility, and search visibility from day one.' },
  { num: '02', title: 'SEO & Paid Advertising', desc: 'Organic rankings and Google / Meta / TikTok ad campaigns engineered to maximize ROAS, dominate your niche, and compound over time.' },
  { num: '03', title: 'Social Media Marketing', desc: 'Strategy, content creation, community management, short-form video editing, and influencer partnerships across all major platforms.' },
  { num: '04', title: 'Email Marketing Campaigns', desc: 'Newsletters, automated drip sequences, abandoned cart flows, and lifecycle campaigns with proven open and conversion rates.' },
  { num: '05', title: 'Brand Identity & Logo Design', desc: 'Logos, brand systems, color palettes, typography, and full guidelines that make your business instantly recognizable.' },
  { num: '06', title: 'Content Writing & Copywriting', desc: 'Website copy, blog content, ad scripts, product descriptions, and sales pages written to convert, not just to fill space.' },
  { num: '07', title: 'Video Editing & Short-Form', desc: 'TikTok, Reels, YouTube Shorts — scroll-stopping video content edited to grow your audience fast across every platform.' },
  { num: '08', title: 'AI Automation & Chatbots', desc: 'WhatsApp bots, Messenger automation, CRM workflows, appointment booking, and AI pipelines that work 24/7.' },
  { num: '09', title: 'E-commerce Store Setup', desc: 'Shopify and WooCommerce stores built for conversions — product setup, apps, payment gateways, and ongoing CRO.' },
  { num: '10', title: 'Sales Funnel Creation', desc: 'End-to-end funnels with lead magnets, landing pages, automated follow-ups, upsell flows, and full CRM integration.' },
  { num: '11', title: 'Reputation Management', desc: 'Monitor, manage, and proactively build your brand\'s online reputation across Google, Yelp, and industry directories.' },
  { num: '12', title: 'Analytics & Strategy', desc: 'GA4 setup, custom dashboards, competitive audits, go-to-market plans, and growth roadmaps for serious operators.' },
  { num: '13', title: 'Lead Generation & CRM', desc: 'Multi-channel lead gen systems, CRM configuration, pipeline automation, and the data infrastructure to scale your sales.' },
  { num: '14', title: 'Graphic Design & Visual', desc: 'Social posts, banners, brochures, flyers, and thumbnails — visual content that captures attention and communicates your brand.' },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-root)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <p className="label" style={{ marginBottom: '16px' }}>What We Do</p>
            <h2 className="heading-1" style={{ margin: 0 }}>
              Our<br />Services
            </h2>
          </div>
          <div style={{ paddingBottom: '4px' }}>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              A complete suite of digital marketing services — each engineered to deliver measurable, compounding growth for your business.
            </p>
          </div>
        </div>

        {/* Services grid — two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px' }}>
          {services.map(s => (
            <a
              key={s.num}
              href="#contact"
              className="service-row"
            >
              <span className="num-index" style={{ width: '32px', flexShrink: 0 }}>{s.num}</span>
              <div style={{ flex: 1, paddingLeft: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                    {s.title}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
              <span style={{ color: 'var(--text-faint)', fontSize: '16px', marginLeft: '16px', flexShrink: 0, transition: 'transform 0.2s', display: 'inline-block' }}>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .container > div:first-child { grid-template-columns: 1fr !important; gap: 24px !important; }
          #services .container > div:last-child { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </section>
  )
}
