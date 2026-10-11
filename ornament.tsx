import { cn } from '@/lib/utils'

/** Small quatrefoil rosette echoing the mark above the KENZ wordmark. */
export function Rosette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('size-4 text-terracotta', className)}
    >
      <g stroke="currentColor" strokeWidth="1.1">
        <ellipse cx="16" cy="16" rx="4.2" ry="11" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" />
        <ellipse
          cx="16"
          cy="16"
          rx="4.2"
          ry="11"
          transform="rotate(45 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="11"
          ry="4.2"
          transform="rotate(45 16 16)"
        />
        <circle cx="16" cy="16" r="2.6" />
      </g>
    </svg>
  )
}

/** Rosette followed by a fading rule — the section eyebrow used throughout. */
export function SectionMark({
  label,
  className,
  tone = 'dark',
}: {
  label?: string
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Rosette />
      {label ? (
        <span
          className={cn(
            'text-[0.7rem] font-light tracking-[0.3em] uppercase',
            tone === 'dark' ? 'text-muted-foreground' : 'text-vanilla/70',
          )}
        >
          {label}
        </span>
      ) : null}
      <span aria-hidden="true" className="h-px w-16 bg-terracotta/45" />
    </div>
  )
}

/** Tiled eight-point star field used as a faint backdrop in corners. */
export function StarField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn('text-terracotta', className)}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="kenz-stars"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <g
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
            transform="translate(28 28)"
          >
            <rect x="-9" y="-9" width="18" height="18" />
            <rect
              x="-9"
              y="-9"
              width="18"
              height="18"
              transform="rotate(45)"
            />
            <circle r="3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kenz-stars)" />
    </svg>
  )
}
