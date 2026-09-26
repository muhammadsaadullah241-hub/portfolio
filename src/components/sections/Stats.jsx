import { motion } from 'framer-motion'
import { siteConfig } from '../../data/siteConfig.js'
import Counter from '../common/Counter.jsx'
import Stagger from '../common/Stagger.jsx'
import { staggerItem } from '../../lib/motion.js'

/**
 * Stats — a borderless "stat strip" (design.md component #4):
 * large numbers with small captions underneath, separated by whitespace.
 */
export default function Stats() {
  return (
    <section className="border-y border-line bg-cream-deep">
      <div className="container py-14 md:py-16">
        <Stagger
          as="dl"
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
          amount={0.3}
        >
          {siteConfig.stats.items.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="px-2 text-center">
              <dd className="text-[44px] font-bold leading-none tracking-[-0.03em] text-ink md:text-[56px]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-[13px] text-muted">{stat.label}</dt>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
