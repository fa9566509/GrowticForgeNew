import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '24px' }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Growtic Forge Digital™
        </a>

        {/* Nav links — desktop */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flex: 1,
            justifyContent: 'center',
          }}
          className="hidden-mobile"
        >
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}
          className="hidden-mobile"
        >
          <button
            onClick={onOpenPalette}
            title="Command palette (⌘K)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            <span>⌘</span>
            <span>K</span>
          </button>
          <a href="#contact" className="btn-primary" style={{ padding: '9px 20px', fontSize: '14px' }}>
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--text)',
            display: 'none',
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(10,10,10,0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '20px',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ padding: '12px 0', fontSize: '16px', color: 'var(--text)', borderBottom: '1px solid var(--border-subtle)' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }}>
              Let's Talk
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
