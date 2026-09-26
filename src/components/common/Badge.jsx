/**
 * Badge — small pill badge (design.md status/temperature badge).
 * Variants map to the warm palette; `dot` adds the leading status dot.
 */
const variants = {
  hot: 'bg-rust text-white',
  warm: 'bg-[#E0A239] text-[#3a2a08]',
  moss: 'bg-moss text-white',
  outline: 'border border-line bg-paper text-ink',
  cream: 'border border-line bg-cream text-ink',
}

export default function Badge({ variant = 'outline', dot = false, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] ${variants[variant]} ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />}
      {children}
    </span>
  )
}
