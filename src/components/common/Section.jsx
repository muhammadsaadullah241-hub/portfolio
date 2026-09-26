import Reveal from './Reveal.jsx'

/**
 * Section — section shell with a numbered mono eyebrow (design.md's
 * "01 The shift" signature). Sections are separated by generous whitespace
 * rather than hard divider lines.
 */
const tones = {
  light: 'bg-cream-light',
  cream: 'bg-cream',
  deep: 'bg-cream-deep',
}

export default function Section({
  id,
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
  containerClassName = '',
  children,
}) {
  const centered = align === 'center'

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 md:py-28 lg:py-36 ${tones[tone] ?? ''} ${className}`}
    >
      <div className={`container ${containerClassName}`}>
        {(eyebrow || title || description) && (
          <Reveal
            className={`flex flex-col ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} mb-12 md:mb-16`}
          >
            {eyebrow && (
              <p
                className={`eyebrow flex items-center gap-3 ${
                  centered ? 'justify-center' : ''
                }`}
              >
                {number && <span className="text-ink/35">{number}</span>}
                <span className="h-1 w-1 rounded-full bg-rust" aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-5 text-[32px] leading-[1.12] tracking-[-0.02em] sm:text-[42px] lg:text-[50px]">
                {title}
              </h2>
            )}
            {description && (
              <p className={`mt-5 text-body text-muted text-pretty ${centered ? 'mx-auto max-w-xl' : 'max-w-xl'}`}>
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
