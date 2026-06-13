import { useEffect } from 'react'

const NAV_H = 60

function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
}

function scrollTo(target: number, duration = 900) {
  const start = window.scrollY
  const delta = target - start
  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + delta * easeInOutQuart(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function useSmoothScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      const top = (target as HTMLElement).offsetTop - NAV_H
      scrollTo(Math.max(0, top))

      // Update URL without triggering jump
      history.pushState(null, '', hash)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
