import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Rosette, StarField } from '@/components/ornament'
import { priceCeiling, priceFloor } from '@/lib/products'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-vanilla"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-0 h-64 w-72 opacity-[0.18]"
      >
        <StarField className="size-full" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-56 w-72 opacity-[0.18]"
      >
        <StarField className="size-full" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-10 lg:py-24">
        <div className="max-w-xl">
          <div className="mb-7 flex items-center gap-3">
            <Rosette className="size-5" />
            <span aria-hidden="true" className="h-px w-20 bg-terracotta/50" />
          </div>

          <h1 className="font-serif text-[3.25rem] leading-[0.95] tracking-[-0.01em] text-foreground sm:text-7xl lg:text-[5.25rem]">
            Heritage,
            <br />
            tied by hand.
          </h1>

          <p className="mt-7 max-w-md font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Where Korean Maedeup meets Egyptian heritage-inspired details, each
            piece is a quiet blend of two cultures, woven with care and
            tradition.
          </p>

          <p className="mt-5 text-sm font-light tracking-[0.18em] text-clay uppercase">
            Every piece EGP {priceFloor}–{priceCeiling}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2.5 rounded-full bg-olive px-7 py-3.5 font-serif text-lg text-primary-foreground transition-colors hover:bg-olive-deep"
            >
              Explore Collection
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center rounded-full border border-olive/35 px-7 py-3.5 font-serif text-lg text-foreground transition-colors hover:bg-sand"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-[5/4]">
            <Image
              src="/knot-burgundy-ivory.jpg"
              alt="Burgundy and ivory Korean maedeup ornament resting on pale silk"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-1 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
          >
            <span className="h-10 w-px bg-clay/40" />
            <span
              className="font-serif text-lg text-clay"
              style={{ writingMode: 'vertical-rl' }}
            >
              매화매듭
            </span>
            <Rosette className="size-3.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
