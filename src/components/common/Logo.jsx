import { siteConfig } from '../../data/siteConfig.js'

/**
 * Logo — your round profile photo as the mark + your name as the wordmark
 * + a tracked-out product tag.
 */
export default function Logo({ className = '', markOnly = false }) {
  const { name, productTag } = siteConfig.brand
  const { image } = siteConfig.founder

  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${name} — home`}
    >
      <img
        src={image}
        alt=""
        className="h-9 w-9 shrink-0 rounded-full border border-line object-cover"
      />
      {!markOnly && (
        <span className="flex items-baseline gap-2">
          <span className="text-[15px] font-bold leading-tight tracking-[-0.01em] text-ink sm:text-[16px]">
            {name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted lg:inline">
            {productTag}
          </span>
        </span>
      )}
    </a>
  )
}
