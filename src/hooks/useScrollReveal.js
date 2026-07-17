import { useEffect, useRef } from 'react'

/**
 * Adds the `visible` class to an element when it scrolls into view.
 * Pair with a base class (`reveal`, `reveal-left`, `reveal-right`, `reveal-scale`).
 *
 * @param {object} options
 * @param {boolean} options.once  - reveal only once (default true)
 * @param {number}  options.threshold
 */
export function useScrollReveal({ once = true, threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || !('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) io.unobserve(el)
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once, threshold])

  return ref
}
