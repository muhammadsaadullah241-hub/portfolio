import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Reveal from '../common/Reveal.jsx'

function FaqItem({ faq, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-center justify-between gap-6 p-6 text-left"
        >
          <span
            className={`text-[17px] font-medium transition-colors sm:text-[18px] ${
              isOpen ? 'text-rust' : 'text-ink group-hover:text-rust'
            }`}
          >
            {faq.question}
          </span>
          <span
            className={`chip h-9 w-9 transition-colors ${
              isOpen ? 'bg-rust text-white' : 'bg-cream-deep text-ink group-hover:bg-rust-tint group-hover:text-rust'
            }`}
          >
            {isOpen ? (
              <Minus className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4" aria-hidden="true" />
            )}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl px-6 pb-7 pr-16 text-[15px] leading-[1.75] text-muted">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section
      id="faq"
      number="08"
      eyebrow="FAQ"
      tone="cream"
      align="center"
      title={
        <>
          Everything you were <span className="italic-accent">about to ask.</span>
        </>
      }
      description="Still unsure? The free audit call is the fastest way to get straight answers for your business."
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="card divide-y divide-line overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
