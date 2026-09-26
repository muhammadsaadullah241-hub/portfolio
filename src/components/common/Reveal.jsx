import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveal — subtle fade-up on scroll (design.md section 14).
 * Distance 40px, duration 0.8s, fires once when the element enters view.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.8,
  className = '',
  as = 'div',
  once = true,
  amount = 0.2,
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
