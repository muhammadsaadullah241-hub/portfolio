import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer } from '../../lib/motion.js'

/**
 * Stagger — animated grid/row container for lists of cards.
 *
 * Important: when the user prefers reduced motion, we skip the hidden
 * initial state entirely so the content is visible immediately instead of
 * being stuck at opacity:0 (a common accessibility trap with whileInView).
 */
export default function Stagger({
  as = 'div',
  className = '',
  children,
  amount = 0.2,
  once = true,
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  return (
    <Tag
      className={className}
      variants={staggerContainer}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Tag>
  )
}
