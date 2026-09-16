'use client'

import { Candy, Search, ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

const links = ['Inicio', 'Catálogo', 'Ofertas', 'Nosotros']

export function Navbar() {
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 md:gap-6 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Candy className="size-6" />
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
            DulceSabor
          </span>
        </a>

        <div className="order-3 w-full md:order-2 md:w-auto md:flex-1">
          <label className="relative block max-w-md md:mx-auto">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <span className="sr-only">Buscar dulces</span>
            <input
              type="search"
              placeholder="Busca tus dulces favoritos..."
              className="w-full rounded-full border border-input bg-card py-2.5 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
        </div>

        <div className="order-2 ml-auto flex items-center gap-1 md:order-3 md:ml-0">
          <ul className="mr-2 hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-accent hover:text-accent-foreground"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-sm transition hover:brightness-95"
            aria-label={`Carrito, ${count} artículos`}
          >
            <ShoppingCart className="size-5" />
            <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
              {count}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
