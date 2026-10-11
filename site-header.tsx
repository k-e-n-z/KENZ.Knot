'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'The Story' },
  { href: '#collection', label: 'Collection' },
  { href: '#heritage', label: 'Heritage' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-[4.5rem] lg:px-10">
        <a href="#home" className="flex items-center" aria-label="KENZ Knot, home">
          <span className="relative block h-9 w-[7.25rem] overflow-hidden">
            <Image
              src="/kenz-logo.png"
              alt="KENZ"
              fill
              priority
              sizes="120px"
              className="object-cover object-[50%_46%]"
            />
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? 'page' : undefined}
              className={cn(
                'relative py-1 font-serif text-[1.0625rem] transition-colors',
                active === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-terracotta transition-transform duration-300',
                  active === link.href ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-olive px-5 py-2.5 font-serif text-[1.0625rem] text-primary-foreground transition-colors hover:bg-olive-deep sm:inline-flex"
          >
            Request an Order
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">
              {open ? 'Close menu' : 'Open menu'}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border/60 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-serif text-xl text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive px-5 py-3 font-serif text-lg text-primary-foreground sm:hidden"
          >
            Request an Order
            <ArrowRight className="size-4" />
          </a>
        </nav>
      ) : null}
    </header>
  )
}
