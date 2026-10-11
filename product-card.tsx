import Image from 'next/image'
import { Rosette } from '@/components/ornament'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow duration-300 hover:shadow-[0_18px_40px_-28px_rgba(61,58,53,0.55)]">
      <div className="relative aspect-square overflow-hidden bg-sand">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-light tracking-[0.16em] text-muted-foreground uppercase backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl leading-tight text-foreground">
            {product.name}
          </h3>
          <span className="font-serif text-base text-clay" lang="ko">
            {product.hangul}
          </span>
        </div>

        <p className="mt-2 text-sm font-light tracking-[0.12em] text-muted-foreground">
          EGP {product.price}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Rosette className="size-3.5 shrink-0" />
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <p className="mt-3 text-[0.8125rem] leading-relaxed font-light text-muted-foreground">
          {product.note}
        </p>
      </div>
    </article>
  )
}
