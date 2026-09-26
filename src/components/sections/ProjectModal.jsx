import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, Quote, X } from 'lucide-react'
import { useFocusTrap, useLockBodyScroll } from '../../hooks/useScroll.js'
import Button from '../common/Button.jsx'
import Counter from '../common/Counter.jsx'
import Badge from '../common/Badge.jsx'
import Monogram from '../common/Monogram.jsx'
import SystemVisual from '../common/SystemVisual.jsx'

function Block({ label, children }) {
  return (
    <div>
      <h4 className="eyebrow">{label}</h4>
      <div className="mt-3">{children}</div>
    </div>
  )
}

/**
 * ProjectModal — accessible, richly detailed case-study dialog (warm theme).
 */
export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  useLockBodyScroll(Boolean(project))
  useFocusTrap(dialogRef, Boolean(project))

  useEffect(() => {
    if (!project) return
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div
          key="project-modal"
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
            className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-card border border-line bg-paper sm:rounded-card"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hero mockup */}
            <div className="relative border-b border-line bg-cream p-5 sm:p-8">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-rust hover:text-rust"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="mx-auto h-[380px] w-full max-w-2xl sm:h-[440px]">
                <SystemVisual variant={project.visual} client={project.name} />
              </div>
            </div>

            <div className="space-y-10 p-6 sm:p-10">
              {/* Title */}
              <header>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="cream">{project.category}</Badge>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {project.location}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-rust" aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {project.timeline}
                  </span>
                </div>
                <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.02em] sm:text-[34px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-[17px] text-muted">{project.tagline}</p>
              </header>

              {/* Results */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
                {project.results.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[30px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[38px]">
                      <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-[12px] leading-snug text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Block label="Overview">
                <p className="text-[15px] leading-[1.75] text-muted">{project.overview}</p>
              </Block>

              <div className="grid gap-8 sm:grid-cols-2">
                <Block label="The challenge">
                  <p className="text-[15px] leading-[1.75] text-muted">{project.challenge}</p>
                </Block>
                <Block label="What I built">
                  <p className="text-[15px] leading-[1.75] text-muted">{project.solution}</p>
                </Block>
              </div>

              <Block label="Our approach">
                <ol className="grid gap-4 sm:grid-cols-3">
                  {project.approach.map((step, i) => (
                    <li key={step} className="border-t-2 border-rust/30 pt-4">
                      <span className="font-mono text-[13px] text-rust">0{i + 1}</span>
                      <p className="mt-2 text-[14px] leading-[1.7] text-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block label="Before & after">
                <div className="overflow-hidden rounded-card border border-line bg-paper">
                  <table className="w-full text-left text-[14px]">
                    <thead className="bg-cream-deep font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                      <tr>
                        <th className="px-4 py-3 font-medium">Metric</th>
                        <th className="px-4 py-3 font-medium">Before</th>
                        <th className="px-4 py-3 font-medium">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.before.map((row) => (
                        <tr key={row.label} className="border-t border-line">
                          <td className="px-4 py-3 text-muted">{row.label}</td>
                          <td className="px-4 py-3 text-muted">{row.before}</td>
                          <td className="px-4 py-3 font-semibold text-ink">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Block>

              <div className="grid gap-8 sm:grid-cols-2">
                <Block label="What I delivered">
                  <ul className="space-y-2">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Tools used">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-pill border border-line bg-paper px-3 py-1.5 text-[12px] text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>

              {/* Testimonial */}
              <figure className="rounded-card bg-cream-deep p-6">
                <Quote className="h-6 w-6 text-rust/40" aria-hidden="true" />
                <blockquote className="mt-3 font-serif text-[21px] italic leading-[1.5] text-ink">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Monogram
                    initials={project.testimonial.initials}
                    name={project.testimonial.name}
                  />
                  <span className="text-[13px]">
                    <span className="block font-semibold text-ink">
                      {project.testimonial.name}
                    </span>
                    <span className="block text-muted">{project.testimonial.title}</span>
                  </span>
                </figcaption>
              </figure>

              {/* CTA */}
              <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[15px] text-muted">
                  Want results like these for your business?
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button as="a" href="#contact" variant="primary" size="md" onClick={onClose}>
                    Book a free AI growth audit
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button type="button" variant="secondary" size="md" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
