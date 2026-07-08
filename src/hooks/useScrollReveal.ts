import { useEffect } from 'react'

/**
 * Global scroll-reveal: watches all `.reveal`, `.reveal-left`, `.reveal-right`
 * elements and adds `.visible` when they enter the viewport.
 * Call this once in the Hero (first section that renders) so the hero's
 * own elements also get observed.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => observer.observe(el))
    }

    // Initial pass
    observe()

    // Re-observe on route changes (future-proofing)
    const mutationObserver = new MutationObserver(observe)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
