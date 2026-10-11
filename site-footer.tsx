import Image from 'next/image'
import { Rosette } from '@/components/ornament'
import { CONTACT } from '@/lib/contact'

const columns = [
  {
    title: 'Explore',
    links: [
      { href: '#collection', label: 'Collection' },
      { href: '#story', label: 'The Story' },
      { href: '#heritage', label: 'Heritage' },
      { href: '#contact', label: 'Request an Order' },
    ],
  },
  {
    title: 'Pieces',
    links: [
      { href: '#collection', label: 'Bracelets' },
      { href: '#collection', label: 'Bag & phone charms' },
      { href: '#collection', label: 'Pendants & norigae' },
      { href: '#collection', label: 'Ornaments' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <span className="relative block h-24 w-44 overflow-hidden">
              <Image
                src="/kenz-logo.png"
                alt="KENZ Knot"
                fill
                sizes="176px"
                className="object-cover object-[50%_40%]"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed font-light text-muted-foreground">
              Handmade Korean Maedeup with Egyptian heritage-inspired details.
              Knotted to order in Egypt, EGP 150–450.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-light tracking-[0.24em] text-clay uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-serif text-[1.0625rem] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-light tracking-[0.24em] text-clay uppercase">
              Reach us
            </h2>
            <ul className="mt-4 space-y-2.5 font-serif text-[1.0625rem] text-muted-foreground">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${CONTACT.instagram}`}
                  className="transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-7 sm:flex-row sm:justify-between">
          <p className="text-xs font-light tracking-[0.14em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} KENZ Knot · Cairo, Egypt
          </p>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-terracotta/40" />
            <Rosette className="size-4" />
            <span aria-hidden="true" className="h-px w-10 bg-terracotta/40" />
          </div>
        </div>
      </div>
    </footer>
  )
}
