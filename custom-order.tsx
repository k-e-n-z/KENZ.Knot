import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionMark } from '@/components/ornament'

export function CustomOrder() {
  return (
    <section className="bg-background pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-sm bg-olive-deep">
          <Image
            src="/custom-order-banner.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-left"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-olive-deep/85 via-olive-deep/75 to-olive-deep/95 md:from-olive-deep/35 md:via-olive-deep/70"
          />

          <div className="relative grid gap-6 p-8 sm:p-12 md:grid-cols-2 md:p-14 lg:p-16">
            <div className="hidden md:block" />
            <div>
              <SectionMark label="Made to order" tone="light" />
              <h2 className="mt-5 font-serif text-4xl leading-tight text-vanilla sm:text-5xl">
                Request a custom piece
              </h2>
              <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed font-light text-vanilla/75">
                Have a specific idea or colour in mind? Let&apos;s create
                something unique together — any piece in the collection can be
                retied in the colour and length you need.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-vanilla px-7 py-3.5 font-serif text-lg text-olive-deep transition-colors hover:bg-white"
              >
                Request &amp; Contact
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
