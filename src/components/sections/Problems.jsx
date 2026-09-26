import { Check, X } from 'lucide-react'
import { oldVsNew } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Problems() {
  return (
    <Section
      id="problems"
      number="01"
      eyebrow="The shift"
      tone="light"
      title={
        <>
          Local businesses don&apos;t lose customers to bad service — they lose them to{' '}
          <span className="italic-accent">slow follow-up.</span>
        </>
      }
      description="Every missed call and forgotten enquiry is money walking out the door. AI closes those gaps quietly, in the background, while you focus on the work."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {/* The old way */}
        <Reveal className="rounded-card border border-line bg-cream-deep p-7 sm:p-9">
          <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            {oldVsNew.oldWayTitle}
          </h3>
          <ul className="mt-6 space-y-4">
            {oldVsNew.oldWay.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-muted">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.06] text-ink/40">
                  <X className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* The AI way */}
        <Reveal delay={0.1} className="card p-7 sm:p-9">
          <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-rust">
            {oldVsNew.newWayTitle}
          </h3>
          <ul className="mt-6 space-y-4">
            {oldVsNew.newWay.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-tint text-moss">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
