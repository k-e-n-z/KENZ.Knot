import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Rosette, SectionMark } from '@/components/ornament'

export function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-20 border-y border-border bg-vanilla"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="relative flex items-end justify-center gap-4 sm:gap-6">
          <div className="relative h-[19rem] w-[46%] max-w-[16rem] overflow-hidden rounded-t-full sm:h-[24rem]">
            <Image
              src="/knot-maehwa-bracelet.jpg"
              alt="Terracotta maedeup knot bracelet resting on soft linen"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-2 pb-10">
            <span aria-hidden="true" className="h-10 w-px bg-clay/30" />
            <Rosette className="size-4" />
            <span aria-hidden="true" className="h-10 w-px bg-clay/30" />
          </div>

          <div className="relative h-[15rem] w-[40%] max-w-[14rem] overflow-hidden rounded-t-full sm:h-[19rem]">
            <Image
              src="/egyptian-ornament-tile.png"
              alt="Egyptian-inspired geometric and floral tile ornament in terracotta and olive"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionMark label="The Story" />

          <h2 className="mt-6 font-serif text-[2.75rem] leading-[1.02] text-foreground sm:text-6xl">
            Two traditions,
            <br />
            one thread.
          </h2>

          <p className="mt-7 max-w-lg font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
            KENZ brings together the delicate artistry of Korean Maedeup and the
            timeless beauty of Egyptian heritage-inspired details. A meeting of
            cultures, woven into pieces that carry meaning, history and a touch
            of you.
          </p>

          <a
            href="#heritage"
            className="group mt-8 inline-flex items-center gap-2.5 font-serif text-lg text-foreground"
          >
            <span className="border-b border-terracotta/60 pb-1">
              Discover the Heritage
            </span>
            <ArrowRight className="size-4 text-terracotta transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
