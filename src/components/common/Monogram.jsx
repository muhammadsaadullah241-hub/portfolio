/**
 * Monogram — warm circular initials avatar for client testimonials.
 * Replace with a real photo <img> when you have one.
 */
export default function Monogram({ initials, name = '', size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-9 w-9 text-[11px]',
    md: 'h-11 w-11 text-[13px]',
    lg: 'h-14 w-14 text-base',
  }

  return (
    <span
      role="img"
      aria-label={name ? `${name} monogram` : 'Client monogram'}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-rust-tint font-semibold tracking-wide text-rust ${sizes[size]} ${className}`}
    >
      {initials}
    </span>
  )
}
