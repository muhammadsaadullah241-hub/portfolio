import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import Logo from '../common/Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  const { contact, navLinks, brand } = siteConfig

  return (
    <footer className="border-t border-line bg-cream-deep">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-[1.75] text-muted">
              {brand.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-ink/75 transition-colors hover:text-rust"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get started */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Get started
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={siteConfig.cta.href} className="text-[15px] text-ink/75 transition-colors hover:text-rust">
                  Book a free audit
                </a>
              </li>
              <li>
                <a href="#work" className="text-[15px] text-ink/75 transition-colors hover:text-rust">
                  See our work
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[15px] text-ink/75 transition-colors hover:text-rust">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-ink/75 transition-colors hover:text-rust"
                >
                  <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                  <span>{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink/75 transition-colors hover:text-rust"
                >
                  <span className="mt-0.5 h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                  <span>{contact.linkedinLabel}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink/75">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[13px] text-muted sm:flex-row">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.16em]">
            {brand.name} · {brand.productTag} · {contact.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
