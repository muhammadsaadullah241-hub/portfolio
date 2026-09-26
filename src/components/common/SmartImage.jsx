import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * SmartImage — lazy-loaded image with a light skeleton state and a graceful
 * fallback when a file is missing. Drop real images over the paths in
 * siteConfig to replace them.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  rounded = false,
  eager = false,
  ...props
}) {
  const [status, setStatus] = useState('loading')

  return (
    <div
      className={`relative overflow-hidden bg-cream-deep ${
        rounded ? 'rounded-full' : ''
      } ${className}`}
    >
      {status !== 'loaded' && (
        <div
          className={`skeleton absolute inset-0 ${rounded ? 'rounded-full' : ''}`}
          aria-hidden="true"
        />
      )}

      {status === 'error' ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted"
          role="img"
          aria-label={alt}
        >
          <ImageOff className="h-6 w-6" aria-hidden="true" />
          <span className="px-4 text-center text-[11px] uppercase tracking-[0.18em]">
            Image placeholder
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          {...props}
        />
      )}
    </div>
  )
}
