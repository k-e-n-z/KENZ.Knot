'use client'

import { useState } from 'react'
import { AtSign, Mail, MessageCircle } from 'lucide-react'
import { SectionMark } from '@/components/ornament'
import { CONTACT } from '@/lib/contact'
import { colorOptions, products } from '@/lib/products'

const fieldClass =
  'w-full rounded-sm border border-border bg-card px-4 py-3 text-[0.9375rem] font-light text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-terracotta focus:outline-none'

export function Contact() {
  const [name, setName] = useState('')
  const [piece, setPiece] = useState(products[0].name)
  const [colour, setColour] = useState(colorOptions[0].label)
  const [notes, setNotes] = useState('')

  const message = [
    `Hello KENZ, I'd like to request a piece.`,
    ``,
    `Name: ${name || '—'}`,
    `Piece: ${piece}`,
    `Colour: ${colour}`,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `KENZ order request — ${piece}`,
  )}&body=${encodeURIComponent(message)}`

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-vanilla"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:px-10 lg:py-24">
        <div>
          <SectionMark label="Contact" />
          <h2 className="mt-6 font-serif text-[2.75rem] leading-[1.02] text-foreground sm:text-5xl">
            Order a piece
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-muted-foreground">
            Every KENZ piece is knotted by hand after you order, so tell us what
            you have in mind. We reply on WhatsApp within a day and ship across
            Egypt.
          </p>

          <dl className="mt-9 space-y-5 text-[0.9375rem] font-light">
            <div className="flex items-center gap-3.5">
              <dt className="sr-only">WhatsApp</dt>
              <MessageCircle className="size-4 shrink-0 text-terracotta" />
              <dd>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="border-b border-transparent transition-colors hover:border-terracotta"
                >
                  {CONTACT.whatsappLabel}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3.5">
              <dt className="sr-only">Email</dt>
              <Mail className="size-4 shrink-0 text-terracotta" />
              <dd>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="border-b border-transparent transition-colors hover:border-terracotta"
                >
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3.5">
              <dt className="sr-only">Instagram</dt>
              <AtSign className="size-4 shrink-0 text-terracotta" />
              <dd>
                <a
                  href={`https://instagram.com/${CONTACT.instagram}`}
                  className="border-b border-transparent transition-colors hover:border-terracotta"
                >
                  @{CONTACT.instagram}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-sm border border-border bg-background p-6 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-light tracking-[0.2em] text-muted-foreground uppercase"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nour Hassan"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="piece"
                className="mb-2 block text-xs font-light tracking-[0.2em] text-muted-foreground uppercase"
              >
                Piece
              </label>
              <select
                id="piece"
                name="piece"
                value={piece}
                onChange={(e) => setPiece(e.target.value)}
                className={fieldClass}
              >
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name} — EGP {product.price}
                  </option>
                ))}
                <option value="Something custom">Something custom</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="colour"
                className="mb-2 block text-xs font-light tracking-[0.2em] text-muted-foreground uppercase"
              >
                Colour
              </label>
              <select
                id="colour"
                name="colour"
                value={colour}
                onChange={(e) => setColour(e.target.value)}
                className={fieldClass}
              >
                {colorOptions.map((color) => (
                  <option key={color.id} value={color.label}>
                    {color.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="notes"
                className="mb-2 block text-xs font-light tracking-[0.2em] text-muted-foreground uppercase"
              >
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Wrist size, beads, gift wrapping, delivery city…"
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-olive px-6 py-3.5 font-serif text-lg text-primary-foreground transition-colors hover:bg-olive-deep"
            >
              <MessageCircle className="size-4" />
              Send on WhatsApp
            </a>
            <a
              href={mailHref}
              className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-olive/35 px-6 py-3.5 font-serif text-lg text-foreground transition-colors hover:bg-sand"
            >
              <Mail className="size-4" />
              Send by email
            </a>
          </div>

          <p className="mt-4 text-center text-xs font-light text-muted-foreground">
            Your request opens in WhatsApp or your mail app, already written out.
          </p>
        </form>
      </div>
    </section>
  )
}
