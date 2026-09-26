import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Stagger from '../common/Stagger.jsx'
import { staggerItem } from '../../lib/motion.js'
import Monogram from '../common/Monogram.jsx'

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-rust text-rust' : 'text-ink/15'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      number="07"
      eyebrow="What owners say"
      tone="light"
      align="center"
      title={
        <>
          Results people are <span className="italic-accent">happy to talk about.</span>
        </>
      }
      description="The best proof isn't a feature list — it's what happens to real businesses after the systems go live."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.12}>
        {testimonials.map((t) => (
          <motion.figure
            key={t.name + t.title}
            variants={staggerItem}
            className="card card-hover flex h-full flex-col p-7"
          >
            <Stars rating={t.rating} />
            <blockquote className="mt-5 flex-1 font-serif text-[19px] italic leading-[1.5] text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <Monogram initials={t.initials} name={t.name} />
              <span className="text-[13px]">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-muted">{t.title}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </Stagger>
    </Section>
  )
}
