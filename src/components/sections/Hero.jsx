import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import { ticker } from '../../data/siteData.js'
import Button from '../common/Button.jsx'
import Badge from '../common/Badge.jsx'
import Reveal from '../common/Reveal.jsx'
import Ticker from '../common/Ticker.jsx'
import SmartImage from '../common/SmartImage.jsx'
import SystemVisual from '../common/SystemVisual.jsx'

/** Soft warm particle/blob backdrop (design.md hero texture). */
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-dots opacity-[0.5]" />
      <div
        className="absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-[90px] animate-blob-drift"
        style={{ background: 'radial-gradient(circle, rgba(193,80,46,0.30), transparent 65%)' }}
      />
      <div
        className="absolute -left-24 top-1/3 h-[380px] w-[380px] rounded-full opacity-50 blur-[90px] animate-blob-drift"
        style={{
          background: 'radial-gradient(circle, rgba(224,162,57,0.35), transparent 65%)',
          animationDelay: '-7s',
        }}
      />
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.35]" fill="none">
        <g stroke="#C1502E" strokeWidth="1">
          <path d="M380 60 L520 150 L470 260" />
          <path d="M520 150 L660 90" />
          <path d="M470 260 L600 320" />
        </g>
        <g fill="#C1502E">
          {[[380, 60], [520, 150], [660, 90], [470, 260], [600, 320]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
        </g>
      </svg>
    </div>
  )
}

/** Secondary overlapping "new lead" card (design.md floating card pattern). */
function LeadCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -bottom-10 -left-6 hidden w-[270px] rounded-card border border-line bg-paper p-4 shadow-float lg:block"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
          New warm lead
        </span>
        <Badge variant="hot">Hot · 4d</Badge>
      </div>
      <p className="mt-2.5 text-[15px] font-bold text-ink">Bella&apos;s Bakery</p>
      <p className="text-[11px] text-muted">Bakery · Portland, OR</p>
      <div className="mt-3 rounded-xl bg-cream-deep p-2.5">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-rust">
          Why this lead, why now
        </p>
        <p className="mt-1 text-[10px] leading-snug text-ink">
          Asked about catering for 40 people — ready to order this week.
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="truncate text-[9px] text-muted underline">instagram.com/bellas</span>
        <span className="inline-flex items-center gap-1 rounded-pill bg-moss px-2.5 py-1 text-[9px] font-medium text-white">
          <MessageCircle className="h-3 w-3" aria-hidden="true" /> Message
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const { founder } = siteConfig

  return (
    <>
      <section
        id="home"
        className="relative isolate overflow-hidden bg-cream-light pt-28 pb-20 lg:pt-36 lg:pb-28"
      >
        <HeroBackdrop />

        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* Copy */}
            <div>
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-paper px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden="true" />
                  Freelance AI growth · New York
                </span>
              </Reveal>

              <h1 className="mt-6 text-[40px] leading-[1.04] tracking-[-0.03em] sm:text-[54px] lg:text-[64px]">
                We help local businesses
                <br />
                <span className="italic-accent">grow with AI.</span>
              </h1>

              <p className="mt-6 max-w-xl text-body text-muted">
                From smart chatbots to automated marketing, I integrate AI tools that{' '}
                <strong className="font-semibold text-ink">save you hours</strong> and{' '}
                <strong className="font-semibold text-ink">bring in more customers</strong> —
                without the tech headache.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button as="a" href={siteConfig.cta.href} variant="primary" size="lg">
                  {siteConfig.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button as="a" href="#work" variant="secondary" size="lg">
                  See my work
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Free 20-min audit · No obligation · Replies in 1 business day
              </p>

              <div className="mt-8 flex items-center gap-3">
                <SmartImage
                  src={founder.image}
                  alt={founder.imageAlt}
                  rounded
                  className="h-11 w-11 border border-line"
                />
                <p className="text-[13px] text-muted">
                  <span className="font-semibold text-ink">{founder.name}</span> · {founder.title}
                </p>
              </div>
            </div>

            {/* Floating product cards */}
            <div className="relative">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:pb-16"
              >
                <div className="h-[380px]">
                  <SystemVisual variant="chatbot" client="Bella's Bakery" />
                </div>
              </motion.div>
              <LeadCard />
            </div>
          </div>
        </div>
      </section>

      <Ticker items={ticker} />
    </>
  )
}
