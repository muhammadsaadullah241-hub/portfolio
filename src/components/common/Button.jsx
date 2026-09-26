import { forwardRef } from 'react'

/**
 * Button — pill buttons per design.md section 8:
 *  - primary   : near-black pill, cream text (optionally with a trailing arrow)
 *  - secondary : cream/white pill with a thin dark border
 *  - link      : rust text link with arrow
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-medium ' +
  'transition-all duration-200 ease-premium focus:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light ' +
  'disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap'

const variants = {
  primary: 'bg-[#161311] text-cream hover:-translate-y-0.5 hover:shadow-card',
  secondary:
    'border border-ink/20 bg-paper text-ink hover:border-ink/45 hover:-translate-y-0.5',
  ghost: 'text-ink hover:text-rust',
  link: 'text-rust hover:gap-3 px-0',
}

const sizes = {
  sm: 'px-4 py-2 text-[14px]',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-3.5 text-[15px]',
}

const Button = forwardRef(function Button(
  { as: Tag = 'button', variant = 'primary', size = 'md', className = '', children, ...props },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
})

export default Button
