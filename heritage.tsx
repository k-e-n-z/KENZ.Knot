import Image from 'next/image'
import { SectionMark } from '@/components/ornament'

const pillars = [
  {
    index: '01',
    origin: 'Korea',
    title: 'Korean Maedeup',
    body: 'Traditional Korean knotting, expressed through intricate looping, symmetry and careful handwork. Every knot is tied from a single continuous cord, identical on both faces, with nothing glued and nothing cut.',
    image: '/knot-cream-gukhwa.jpg',
    alt: 'Detailed cream chrysanthemum maedeup knot showing symmetrical looping',
  },
  {
    index: '02',
    origin: 'Egypt / Arab-inspired',
    title: 'Heritage Details',
    body: 'Geometric and floral ornament, warm earthy colours and decorative craft references interpreted in a modern way. Terracotta, olive and vanilla stand in for sunbaked clay, palm and limestone.',
    image: '/egyptian-ornament-tile.png',
    alt: 'Egyptian-inspired eight-point star and floral tile pattern in warm earth tones',
  },
]

export function Heritage() {
  return (
    <section id="heritage" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <SectionMark label="Heritage" />
          <h2 className="mt-6 font-serif text-[2.75rem] leading-[1.02] text-foreground sm:text-6xl">
            Made from inspiration.
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The visual language of KENZ brings together two craft inspirations
            through knot structure, ornament, colour and composition.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {pillars.map((pillar) => (
            <article
              key={pillar.index}
              className="overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={pillar.image || '/placeholder.svg'}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 lg:p-9">
                <p className="text-xs font-light tracking-[0.24em] text-clay uppercase">
                  {pillar.index} · {pillar.origin}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed font-light text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
