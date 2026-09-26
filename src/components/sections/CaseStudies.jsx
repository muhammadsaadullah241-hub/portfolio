import { ArrowRight, Check, MapPin, Quote, TrendingUp } from 'lucide-react'
import { caseStudies } from '../../data/siteData.js'
import { siteConfig } from '../../data/siteConfig.js'
import Section from '../common/Section.jsx'
import Reveal from '../common/Reveal.jsx'
import Counter from '../common/Counter.jsx'
import Button from '../common/Button.jsx'
import Badge from '../common/Badge.jsx'
import Monogram from '../common/Monogram.jsx'
import SystemVisual from '../common/SystemVisual.jsx'

function CaseStudyBlock({ study, index }) {
  const reversed = index % 2 === 1

  return (
    <article className="border-t border-line pt-16">
      <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cream">{study.category}</Badge>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {study.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-rust" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {study.timeline}
            </span>
          </div>
          <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.02em] sm:text-[36px]">
            {study.client}
          </h3>
          <p className="mt-2 max-w-2xl text-[17px] leading-snug text-muted">{study.tagline}</p>
        </div>
        <Button as="a" href="#contact" variant="secondary" size="sm" className="shrink-0">
          Get results like this
        </Button>
      </Reveal>

      {/* Real venue photo (representative) */}
      <Reveal className="mt-8">
        <figure className="overflow-hidden rounded-card border border-line">
          <div className="aspect-[16/9] sm:aspect-[16/6]">
            <img
              src={study.photo.src}
              alt={study.photo.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="border-t border-line px-4 py-2 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Representative photo
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reversed ? 'lg:order-2' : ''}>
          <div className="h-[380px]">
            <SystemVisual variant={study.visual} client={study.client} />
          </div>
        </Reveal>

        <div className={reversed ? 'lg:order-1' : ''}>
          <Reveal>
            <h4 className="eyebrow">Overview</h4>
            <p className="mt-3 text-[15px] leading-[1.75] text-muted">{study.overview}</p>
          </Reveal>

          {/* Real US industry benchmark */}
          <Reveal delay={0.03}>
            <div className="mt-8 rounded-card bg-cream-deep p-5">
              <p className="eyebrow">Industry context</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink">{study.industry.stat}</p>
              <p className="mt-2 text-[12px] text-muted">
                Source:{' '}
                {study.industry.url ? (
                  <a
                    href={study.industry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-rust"
                  >
                    {study.industry.source}
                  </a>
                ) : (
                  study.industry.source
                )}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h4 className="eyebrow mt-8">The challenge</h4>
            <div className="mt-3 space-y-4">
              {study.challenge.map((para) => (
                <p key={para} className="text-[15px] leading-[1.75] text-muted">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Approach */}
      <Reveal className="mt-14">
        <h4 className="eyebrow">Our approach</h4>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {study.approach.map((item) => (
            <li key={item.step} className="border-t-2 border-rust/30 pt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[13px] text-rust">{item.step}</span>
                <h5 className="text-[17px] font-semibold text-ink">{item.title}</h5>
              </div>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Solution + results */}
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h4 className="eyebrow">The solution</h4>
          <p className="mt-3 text-[15px] leading-[1.75] text-muted">{study.solution}</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {study.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {study.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-pill border border-line bg-paper px-3 py-1.5 text-[12px] text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <h4 className="eyebrow">The result</h4>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8">
            {study.results.map((stat) => (
              <div key={stat.label}>
                <p className="text-[34px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[42px]">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[13px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Before / after + ROI + testimonial */}
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h4 className="eyebrow">Before &amp; after</h4>
          <div className="mt-4 overflow-hidden rounded-card border border-line bg-paper">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-cream-deep font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Metric</th>
                  <th className="px-4 py-3 font-medium">Before</th>
                  <th className="px-4 py-3 font-medium">After</th>
                </tr>
              </thead>
              <tbody>
                {study.before.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <td className="px-4 py-3 text-muted">{row.label}</td>
                    <td className="px-4 py-3 text-muted">{row.before}</td>
                    <td className="px-4 py-3 font-semibold text-ink">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-card bg-moss-tint p-5">
            <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
            <p className="text-[15px] leading-[1.7] text-ink">{study.roi}</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h4 className="eyebrow">In their words</h4>
          <figure className="mt-4 flex h-[calc(100%-2.25rem)] flex-col rounded-card border border-line bg-paper p-7 shadow-card">
            <Quote className="h-7 w-7 text-rust/40" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 font-serif text-[22px] italic leading-[1.5] text-ink">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <Monogram
                initials={study.testimonial.initials}
                name={study.testimonial.name}
                size="lg"
              />
              <span className="text-[14px]">
                <span className="block font-semibold text-ink">{study.testimonial.name}</span>
                <span className="block text-muted">{study.testimonial.title}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <Section
      id="case-studies"
      number="04"
      eyebrow="Case studies"
      tone="cream"
      align="center"
      title={
        <>
          The challenge, the system, <span className="italic-accent">the payoff.</span>
        </>
      }
      description="In-depth stories showing exactly how a local business problem becomes a measurable result — with the numbers to match."
    >
      <div className="space-y-20">
        {caseStudies.map((study, index) => (
          <CaseStudyBlock key={study.id} study={study} index={index} />
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-16 text-center">
        <p className="max-w-xl text-[17px] text-muted">
          Your business could be the next story on this page.
        </p>
        <Button as="a" href={siteConfig.cta.href} variant="primary" size="lg">
          {siteConfig.cta.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  )
}
