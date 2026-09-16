import { CartProvider } from '@/components/cart-provider'
import { CategoryChips } from '@/components/category-chips'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { ProductGrid } from '@/components/product-grid'
import { PromoBanner } from '@/components/promo-banner'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <CategoryChips />
          <ProductGrid />
          <PromoBanner />
        </main>
        <SiteFooter />
      </div>
    </CartProvider>
  )
}
