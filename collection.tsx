'use client'

import { useMemo, useState } from 'react'
import { LayoutGrid } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { Rosette } from '@/components/ornament'
import { cn } from '@/lib/utils'
import {
  colorOptions,
  priceCeiling,
  priceFloor,
  products,
  type ColorId,
} from '@/lib/products'

export function Collection() {
  const [selected, setSelected] = useState<ColorId | 'all'>('all')

  const visible = useMemo(
    () =>
      selected === 'all'
        ? products
        : products.filter((p) => p.color === selected),
    [selected],
  )

  return (
    <section id="collection" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 border-b border-border pb-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Rosette className="size-5" />
            <h2 className="font-serif text-4xl leading-none text-foreground sm:text-[2.75rem]">
              Shop by Colour
            </h2>
            <span
              aria-hidden="true"
              className="hidden h-px w-14 bg-terracotta/45 sm:block"
            />
          </div>

          <div
            role="group"
            aria-label="Filter pieces by colour"
            className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
          >
            {colorOptions.map((color) => {
              const isOn = selected === color.id
              return (
                <button
                  key={color.id}
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => setSelected(isOn ? 'all' : color.id)}
                  className={cn(
                    'inline-flex shrink-0 items-center gap-2.5 rounded-full border py-2 pl-2 pr-4 text-sm font-light transition-colors',
                    isOn
                      ? 'border-olive bg-olive text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-clay/50',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="size-5 rounded-full ring-1 ring-black/10"
                    style={{ background: color.swatch }}
                  />
                  {color.label}
                </button>
              )
            })}

            <button
              type="button"
              aria-pressed={selected === 'all'}
              onClick={() => setSelected('all')}
              className={cn(
                'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-light transition-colors',
                selected === 'all'
                  ? 'border-olive bg-olive text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:border-clay/50',
              )}
            >
              <LayoutGrid className="size-4" />
              All
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-2xl font-serif text-lg text-muted-foreground">
          Ten pieces, each knotted to order. Prices run from EGP {priceFloor} to
          EGP {priceCeiling} depending on the handwork, cord and beads.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p aria-live="polite" className="sr-only">
          {visible.length} pieces shown
        </p>
      </div>
    </section>
  )
}
