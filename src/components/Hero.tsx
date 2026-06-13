const NAV_H = 60 // must match Navbar height in px

export default function Hero() {
  return (
    <section
      style={{
        // --hero-h is the single source of truth for all sizing inside this section
        ['--hero-h' as string]: `calc(100dvh - ${NAV_H}px)`,
        height: '100dvh',
        paddingTop: `${NAV_H}px`,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Ambient gradient blobs — sizes derived from --hero-h */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          width: 'clamp(400px, calc(var(--hero-h) * 1.1), 1000px)',
          height: 'clamp(300px, calc(var(--hero-h) * 0.85), 750px)',
          top: 'calc(var(--hero-h) * -0.28)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)',
          animation: 'blobPulse 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: 'clamp(280px, calc(var(--hero-h) * 0.72), 640px)',
          height: 'clamp(200px, calc(var(--hero-h) * 0.58), 520px)',
          bottom: 0,
          left: 'calc(var(--hero-h) * -0.15)',
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 65%)',
          animation: 'blobPulse 10s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute',
          width: 'clamp(240px, calc(var(--hero-h) * 0.6), 560px)',
          height: 'clamp(180px, calc(var(--hero-h) * 0.48), 440px)',
          bottom: 'calc(var(--hero-h) * 0.1)',
          right: 'calc(var(--hero-h) * -0.1)',
          background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.09) 0%, transparent 65%)',
          animation: 'blobPulse 12s ease-in-out infinite 2s',
        }} />
      </div>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: 'clamp(28px, calc(var(--hero-h) * 0.044), 44px) clamp(28px, calc(var(--hero-h) * 0.044), 44px)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 'clamp(80px, calc(var(--hero-h) * 0.2), 200px)',
        background: 'linear-gradient(to top, #000 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content column */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, maxWidth: '860px', width: '100%' }}
      >

        {/* Badge */}
        <div
          className="fade-in-up fade-in-up-1"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(16px, calc(var(--hero-h) * 0.04), 36px)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            gap: 'clamp(5px, calc(var(--hero-h) * 0.009), 9px)',
            padding: 'clamp(5px, calc(var(--hero-h) * 0.008), 8px) clamp(10px, calc(var(--hero-h) * 0.017), 16px)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '99px',
            fontSize: 'clamp(10px, calc(var(--hero-h) * 0.014), 13px)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(8px)',
            letterSpacing: '0.01em',
          }}>
            <span style={{
              display: 'inline-block',
              width: 'clamp(5px, calc(var(--hero-h) * 0.009), 8px)',
              height: 'clamp(5px, calc(var(--hero-h) * 0.009), 8px)',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px rgba(74,222,128,0.8)',
              animation: 'dotPulse 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            Now accepting growth partners
          </div>
        </div>

        {/* Headline */}
        <h1
          className="fade-in-up fade-in-up-2"
          style={{
            fontSize: 'clamp(38px, calc(var(--hero-h) * 0.094), 108px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            margin: `0 0 clamp(14px, calc(var(--hero-h) * 0.03), 30px)`,
          }}
        >
          <span style={{ color: '#f5f5f7' }}>Digital Execution</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Is the Brand.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="fade-in-up fade-in-up-3"
          style={{
            fontSize: 'clamp(14px, calc(var(--hero-h) * 0.022), 20px)',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.7,
            maxWidth: 'clamp(280px, calc(var(--hero-h) * 0.65), 540px)',
            margin: `0 auto clamp(28px, calc(var(--hero-h) * 0.054), 54px)`,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          We partner with businesses to design, build, and scale their digital presence — from web and SEO to automation, ads, and AI-powered growth systems.
        </p>

        {/* CTAs */}
        <div
          className="fade-in-up fade-in-up-4"
          style={{
            display: 'flex',
            gap: 'clamp(8px, calc(var(--hero-h) * 0.014), 14px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'clamp(24px, calc(var(--hero-h) * 0.054), 54px)',
          }}
        >
          {/* Ghost CTA */}
          <a
            href="#portfolio"
            style={{
              display: 'inline-flex', alignItems: 'center',
              gap: 'clamp(5px, calc(var(--hero-h) * 0.008), 8px)',
              padding: `clamp(10px, calc(var(--hero-h) * 0.016), 16px) clamp(18px, calc(var(--hero-h) * 0.03), 30px)`,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '99px',
              fontSize: 'clamp(12px, calc(var(--hero-h) * 0.017), 16px)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.25s ease',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.1)'
              el.style.borderColor = 'rgba(255,255,255,0.24)'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.06)'
              el.style.borderColor = 'rgba(255,255,255,0.12)'
              el.style.color = 'rgba(255,255,255,0.75)'
            }}
          >
            View Our Work
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center',
              gap: 'clamp(5px, calc(var(--hero-h) * 0.008), 8px)',
              padding: `clamp(10px, calc(var(--hero-h) * 0.016), 16px) clamp(18px, calc(var(--hero-h) * 0.03), 30px)`,
              background: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '99px',
              fontSize: 'clamp(12px, calc(var(--hero-h) * 0.017), 16px)',
              fontWeight: 600,
              color: '#000',
              textDecoration: 'none',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(255,255,255,0.12)',
              transition: 'all 0.25s ease',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#ebebeb'
              el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(255,255,255,0.2)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#fff'
              el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(255,255,255,0.12)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Let's Talk
            <svg
              width='clamp(10px, calc(var(--hero-h) * 0.015), 14px)'
              height='clamp(10px, calc(var(--hero-h) * 0.015), 14px)'
              viewBox="0 0 14 14"
              fill="none"
              style={{ width: 'clamp(10px, calc(var(--hero-h) * 0.015), 14px)', height: 'clamp(10px, calc(var(--hero-h) * 0.015), 14px)' }}
            >
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="fade-in-up"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(14px, calc(var(--hero-h) * 0.028), 28px)',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.65s both',
          }}
        >
          {[
            { val: '120+', label: 'Clients' },
            { val: '97%', label: 'Retention' },
            { val: '4.8×', label: 'Avg. ROAS' },
            { val: '$10M+', label: 'Revenue Generated' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, calc(var(--hero-h) * 0.028), 28px)' }}>
              {i > 0 && (
                <span style={{
                  width: 'clamp(3px, calc(var(--hero-h) * 0.004), 4px)',
                  height: 'clamp(3px, calc(var(--hero-h) * 0.004), 4px)',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.14)',
                  flexShrink: 0,
                }} />
              )}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(3px, calc(var(--hero-h) * 0.006), 6px)' }}>
                <span style={{
                  fontSize: 'clamp(12px, calc(var(--hero-h) * 0.018), 16px)',
                  fontWeight: 700, color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '-0.02em',
                }}>
                  {s.val}
                </span>
                <span style={{
                  fontSize: 'clamp(10px, calc(var(--hero-h) * 0.014), 12px)',
                  color: 'rgba(255,255,255,0.28)',
                  fontWeight: 400,
                }}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(20px, calc(var(--hero-h) * 0.038), 40px)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 'clamp(4px, calc(var(--hero-h) * 0.008), 8px)',
          animation: 'fadeInUp 1s ease 1.2s both',
        }}
      >
        <div style={{
          width: 'clamp(14px, calc(var(--hero-h) * 0.024), 22px)',
          height: 'clamp(22px, calc(var(--hero-h) * 0.038), 36px)',
          borderRadius: '99px',
          border: '1.5px solid rgba(255,255,255,0.14)',
          display: 'flex', justifyContent: 'center',
          paddingTop: 'clamp(4px, calc(var(--hero-h) * 0.007), 7px)',
        }}>
          <div style={{
            width: 'clamp(2px, calc(var(--hero-h) * 0.004), 3px)',
            height: 'clamp(4px, calc(var(--hero-h) * 0.007), 7px)',
            borderRadius: '99px',
            background: 'rgba(255,255,255,0.35)',
            animation: 'scrollDot 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blobPulse {
          0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.65; transform: translateX(-50%) scale(1.07); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(74,222,128,0.8); }
          50% { opacity: 0.55; box-shadow: 0 0 16px rgba(74,222,128,0.35); }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0);   opacity: 1; }
          75%  { transform: translateY(clamp(6px, calc(var(--hero-h) * 0.012), 12px)); opacity: 0; }
          100% { transform: translateY(0);   opacity: 0; }
        }
      `}</style>
    </section>
  )
}
