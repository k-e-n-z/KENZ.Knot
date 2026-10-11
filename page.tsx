import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Collection } from '@/components/collection'
import { Story } from '@/components/story'
import { Heritage } from '@/components/heritage'
import { CustomOrder } from '@/components/custom-order'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Collection />
        <Story />
        <Heritage />
        <CustomOrder />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
