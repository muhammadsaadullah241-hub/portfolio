import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import { contactChallenges } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Reveal from '../common/Reveal.jsx'
import Button from '../common/Button.jsx'

const EMPTY = { name: '', business: '', email: '', phone: '', challenge: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.business.trim()) errors.business = 'Please enter your business name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  if (!values.challenge) errors.challenge = 'Please pick your biggest challenge.'
  return errors
}

function Field({ label, name, error, children, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13px] font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-rust">*</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-[12px] text-rust"
        >
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  'w-full rounded-xl border bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 ' +
  'transition-colors duration-200 focus:border-rust focus:outline-none focus:ring-2 focus:ring-rust/25 '

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4 border-b border-line pb-5">
      <span className="chip border border-line bg-paper text-rust">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { contact } = siteConfig
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('submitting')
    // TODO: wire this up to your real endpoint (Formspree, API route, CRM, etc.)
    setTimeout(() => setStatus('success'), 900)
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
  }

  return (
    <Section
      id="contact"
      number="09"
      eyebrow="Get started"
      tone="light"
      align="center"
      title={
        <>
          Book your free <span className="italic-accent">AI growth audit.</span>
        </>
      }
      description="Tell me a little about your business and I'll come back with a clear, no-pressure plan. Free 20-minute call, no obligation."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Details */}
        <Reveal className="space-y-5">
          <ContactRow icon={Mail} label="Email">
            <a
              href={`mailto:${contact.email}`}
              className="break-all text-[15px] text-ink transition-colors hover:text-rust"
            >
              {contact.email}
            </a>
          </ContactRow>

          {/* LinkedIn sits directly below the email */}
          <ContactRow icon={Linkedin} label="LinkedIn">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-[15px] text-ink transition-colors hover:text-rust"
            >
              {contact.linkedinLabel}
            </a>
          </ContactRow>

          <ContactRow icon={MapPin} label="Based in">
            <p className="text-[15px] text-ink">{contact.location}</p>
          </ContactRow>

          <ContactRow icon={Phone} label="Phone">
            <a
              href={`tel:${contact.phoneHref}`}
              className="text-[15px] text-ink transition-colors hover:text-rust"
            >
              {contact.phone}
            </a>
          </ContactRow>

          <p className="text-[13px] text-muted">{contact.responseNote}</p>
        </Reveal>

        {/* Form / success */}
        <Reveal delay={0.1}>
          <div className="card p-6 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                <span className="chip h-16 w-16 bg-moss-tint text-moss">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[24px] font-semibold text-ink">
                  Thanks — you&apos;re all set.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-[1.75] text-muted">
                  I&apos;ve received your details and will reach out within one business day to book
                  your free audit.
                </p>
                <Button type="button" variant="secondary" size="md" onClick={reset} className="mt-8">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={update('name')}
                      placeholder="Jane Doe"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`${inputBase} ${errors.name ? 'border-rust' : 'border-line'}`}
                    />
                  </Field>

                  <Field label="Business name" name="business" required error={errors.business}>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      value={values.business}
                      onChange={update('business')}
                      placeholder="Bella's Bakery"
                      aria-invalid={Boolean(errors.business)}
                      aria-describedby={errors.business ? 'business-error' : undefined}
                      className={`${inputBase} ${errors.business ? 'border-rust' : 'border-line'}`}
                    />
                  </Field>

                  <Field label="Email" name="email" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={update('email')}
                      placeholder="jane@business.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`${inputBase} ${errors.email ? 'border-rust' : 'border-line'}`}
                    />
                  </Field>

                  <Field label="Phone" name="phone" required error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={update('phone')}
                      placeholder="+1 555 012 3456"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`${inputBase} ${errors.phone ? 'border-rust' : 'border-line'}`}
                    />
                  </Field>
                </div>

                <Field
                  label="What's your biggest challenge?"
                  name="challenge"
                  required
                  error={errors.challenge}
                >
                  <select
                    id="challenge"
                    name="challenge"
                    value={values.challenge}
                    onChange={update('challenge')}
                    aria-invalid={Boolean(errors.challenge)}
                    aria-describedby={errors.challenge ? 'challenge-error' : undefined}
                    className={`${inputBase} appearance-none ${
                      errors.challenge ? 'border-rust' : 'border-line'
                    } ${values.challenge ? 'text-ink' : 'text-muted/60'}`}
                  >
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {contactChallenges.map((option) => (
                      <option key={option} value={option} className="bg-paper text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything else? (optional)" name="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={update('message')}
                    placeholder="Tell me a little more about your business…"
                    className={`${inputBase} resize-none border-line`}
                  />
                </Field>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full"
                >
                  {status === 'submitting' ? 'Sending…' : siteConfig.cta.label}
                </Button>

                <p className="text-center text-[12px] text-muted">
                  I&apos;ll only use your details to get in touch. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
