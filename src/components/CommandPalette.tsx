import { useState, useEffect, useRef } from 'react'

const items = [
  { label: 'Go to About', href: '#about', icon: '◎', category: 'Navigate' },
  { label: 'Go to Services', href: '#services', icon: '◎', category: 'Navigate' },
  { label: 'Go to Process', href: '#process', icon: '◎', category: 'Navigate' },
  { label: 'Go to Portfolio', href: '#portfolio', icon: '◎', category: 'Navigate' },
  { label: 'Go to Testimonials', href: '#testimonials', icon: '◎', category: 'Navigate' },
  { label: 'Contact Us', href: '#contact', icon: '✉', category: 'Action' },
  { label: 'Get a Free Audit', href: '#contact', icon: '✦', category: 'Action' },
  { label: 'Web Design', href: '#services', icon: '⊞', category: 'Services' },
  { label: 'SEO & Paid Ads', href: '#services', icon: '⊞', category: 'Services' },
  { label: 'AI Automation', href: '#services', icon: '⊞', category: 'Services' },
  { label: 'E-commerce Setup', href: '#services', icon: '⊞', category: 'Services' },
  { label: 'Brand Identity', href: '#services', icon: '⊞', category: 'Services' },
]

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = query
    ? items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()) || i.category.toLowerCase().includes(query.toLowerCase()))
    : items

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(filtered.length - 1, a + 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(0, a - 1)) }
    if (e.key === 'Enter' && filtered[active]) {
      window.location.hash = filtered[active].href
      onClose()
    }
  }

  if (!open) return null

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          maxWidth: '560px',
          margin: '0 20px',
          background: 'rgba(20,20,20,0.94)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Search input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'var(--text-faint)' }}>
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search pages, services, actions..."
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: '16px', color: 'var(--text)', fontFamily: 'inherit',
            }}
          />
          <kbd style={{
            padding: '3px 7px', background: 'var(--bg-surface)', border: '1px solid var(--border)',
            borderRadius: '6px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'inherit',
          }}>
            esc
          </kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '8px' }}>
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '32px', color: 'var(--text-faint)', fontSize: '14px' }}>
              No results for "{query}"
            </p>
          ) : (
            filtered.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={onClose}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none', transition: 'background 0.1s',
                  background: i === active ? 'var(--bg-surface)' : 'transparent',
                }}
                onMouseEnter={() => setActive(i)}
              >
                <span style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>
                  {item.icon}
                </span>
                <span style={{ flex: 1, fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{item.label}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-faint)', fontWeight: 500 }}>{item.category}</span>
              </a>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div style={{ padding: '10px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '16px' }}>
          {[['↑↓', 'Navigate'], ['↵', 'Select'], ['esc', 'Close']].map(([key, hint]) => (
            <div key={hint} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <kbd style={{ padding: '2px 6px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '5px', fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'inherit' }}>
                {key}
              </kbd>
              <span style={{ fontSize: '11px', color: 'var(--text-faint)' }}>{hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
