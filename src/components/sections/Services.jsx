import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/siteData.js'
import { siteConfig } from '../../data/siteConfig.js'
import Section from '../common/Section.jsx'
import Stagger from '../common/Stagger.jsx'
import { staggerItem } from '../../lib/motion.js'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'

export default function Services() {
  return (
    <Section
      id="services"
      number="02"
      eyebrow="What I do"
      tone="cream"
      align="center"
      title={
        <>
          Practical AI, built around <span className="italic-accent">your business.</span>
        </>
      }
      description="No bloated software or dashboards you'll never open. Just the tools that reliably save you time and win you more customers."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.12}>
        {services.map(({ icon: Icon, title, description, image }) => (
          <motion.article
            key={title}
            variants={staggerItem}
            className="card card-hover group flex h-full flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-cream-deep">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="chip bg-rust-tint text-rust">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/20 transition-all duration-300 group-hover:text-rust"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-[19px] font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted">{description}</p>
            </div>
          </motion.article>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Button as="a" href={siteConfig.cta.href} variant="primary" size="lg">
          {siteConfig.cta.label}
        </Button>
      </Reveal>
    </Section>
  )
}
