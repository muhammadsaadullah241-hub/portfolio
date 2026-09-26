import { motion } from 'framer-motion'
import { processSteps } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Stagger from '../common/Stagger.jsx'
import { staggerItem } from '../../lib/motion.js'

export default function Process() {
  return (
    <Section
      id="process"
      number="06"
      eyebrow="How it works"
      tone="cream"
      align="center"
      title={
        <>
          From first call to live results <span className="italic-accent">in weeks.</span>
        </>
      }
      description="A simple, transparent process designed to keep you in control and out of the weeds."
    >
      <Stagger as="ol" className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {processSteps.map(({ step, icon: Icon, title, description }) => (
          <motion.li key={step} variants={staggerItem} className="border-t-2 border-line pt-6">
            <div className="flex items-center gap-3">
              <span className="chip border border-line bg-paper text-rust">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-[13px] tracking-[0.14em] text-rust">{step}</span>
            </div>
            <h3 className="mt-5 text-[19px] font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-muted">{description}</p>
          </motion.li>
        ))}
      </Stagger>
    </Section>
  )
}
