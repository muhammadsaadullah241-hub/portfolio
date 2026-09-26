import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'

/**
 * FinalCTA — styled to match the other sections: light background, a white
 * card, ink headline with the rust serif-italic accent (no separate dark block).
 */
export default function FinalCTA() {
  return (
    <section className="bg-cream-light py-20 md:py-24">
      <div className="container">
        <Reveal className="card px-7 py-14 text-center sm:px-14 sm:py-16">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-1 w-1 rounded-full bg-rust" aria-hidden="true" />
            Let&apos;s grow
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-[32px] leading-[1.12] tracking-[-0.02em] sm:text-[42px] lg:text-[50px]">
            Ready to bring more customers in <span className="italic-accent">with AI?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body text-muted">
            Tell me where you&apos;re losing time and customers. I&apos;ll show you exactly how AI
            fixes it — in plain English.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href={siteConfig.cta.href} variant="primary" size="lg">
              {siteConfig.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              as="a"
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Free 20-minute audit · No obligation
          </p>
        </Reveal>
      </div>
    </section>
  )
}
