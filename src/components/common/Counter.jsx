import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Counter — animated stat counter that runs once when scrolled into view.
 * Supports prefix/suffix (e.g. "$", "%", "+", " hrs") and thousands separators.
 */
export default function Counter({
  value = 0,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  // Reduced-motion users skip the animation entirely and always see the
  // final value — independent of the IntersectionObserver firing.
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduce])

  const formatted = Math.round(display).toLocaleString('en-US')
  const srValue = `${prefix}${value.toLocaleString('en-US')}${suffix}`

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="sr-only">{srValue}</span>
    </span>
  )
}
