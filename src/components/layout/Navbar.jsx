import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import {
  useActiveSection,
  useFocusTrap,
  useLockBodyScroll,
  useScrolled,
} from '../../hooks/useScroll.js'
import Button from '../common/Button.jsx'
import Logo from '../common/Logo.jsx'

const SECTION_IDS = siteConfig.navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  const active = useActiveSection(SECTION_IDS)
  const menuRef = useRef(null)

  useLockBodyScroll(open)
  useFocusTrap(menuRef, open)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
          scrolled
            ? 'border-b border-line bg-cream-light/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container flex h-20 items-center justify-between" aria-label="Primary">
          <Logo />

          <ul className="hidden items-center gap-7 lg:flex">
            {siteConfig.navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-[14px] transition-colors duration-200 ${
                      isActive ? 'text-rust' : 'text-ink/70 hover:text-ink'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-rust transition-all duration-300 ease-premium ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={siteConfig.cta.href}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {siteConfig.cta.label}
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper/60 text-ink transition-colors hover:border-ink/40 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              ref={menuRef}
              id="mobile-menu"
              className="fixed inset-y-0 right-0 z-[70] flex w-[84%] max-w-sm flex-col border-l border-line bg-cream-light px-7 py-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-10 flex flex-col">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-4 text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors hover:text-rust"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  as="a"
                  href={siteConfig.cta.href}
                  onClick={() => setOpen(false)}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  {siteConfig.cta.label}
                </Button>
                <p className="mt-4 text-center text-[13px] text-muted">
                  {siteConfig.contact.responseNote}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
