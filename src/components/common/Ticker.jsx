/**
 * Ticker — auto-scrolling marquee strip (design.md hero ticker).
 * The list is rendered twice so the loop is seamless.
 */
export default function Ticker({ items = [], className = '' }) {
  const row = [...items, ...items]

  return (
    <div
      className={`group relative flex overflow-hidden border-y border-line bg-cream-light py-5 ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-rust/50" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-light to-transparent" />
    </div>
  )
}
