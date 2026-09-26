import { Linkedin, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import { trustPoints } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Reveal from '../common/Reveal.jsx'
import SmartImage from '../common/SmartImage.jsx'
import Button from '../common/Button.jsx'

export default function About() {
  const { founder, contact } = siteConfig

  return (
    <Section
      id="about"
      number="05"
      eyebrow="About"
      tone="light"
      title={
        <>
          Hi, I&apos;m Saad — your <span className="italic-accent">AI growth partner.</span>
        </>
      }
      description={founder.bio}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Photo */}
        <Reveal>
          <div className="relative mx-auto w-[86%] max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-full border border-line shadow-card">
              <div className="aspect-square">
                <SmartImage
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-pill border border-line bg-paper px-4 py-2 shadow-card">
              <MapPin className="h-4 w-4 text-rust" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
                {contact.location}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal delay={0.05}>
            <p className="text-body text-muted">
              I&apos;m a freelance AI growth consultant based in New York, working with local
              businesses everywhere. I&apos;ve seen too many owners sold complicated software they
              never use — so my promise is simple: practical AI that pays for itself, explained in
              plain English.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {trustPoints.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="chip bg-rust-tint text-rust">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                      {description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href={contact.linkedin} target="_blank" rel="noopener noreferrer" variant="primary" size="md">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Connect on LinkedIn
              </Button>
              <Button as="a" href={siteConfig.cta.href} variant="secondary" size="md">
                {siteConfig.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
