'use client'

import { Candy, Heart, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const columns = [
  { title: 'Tienda', items: ['Chocolates', 'Gomitas', 'Paletas', 'Tradicionales'] },
  { title: 'Ayuda', items: ['Envíos', 'Devoluciones', 'Preguntas frecuentes', 'Contacto'] },
]

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="mt-16 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-4xl bg-card p-6 shadow-sm md:p-10">
          <div className="grid gap-4 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl text-balance">
                Únete al club dulce
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                Recibe ofertas exclusivas, novedades y un cupón de bienvenida
                directo en tu correo.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Correo electrónico</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <Button type="submit" size="lg" className="rounded-full font-bold shadow-sm">
                {sent ? '¡Suscrito! 🎉' : 'Suscribirme'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Candy className="size-5" />
              </span>
              <span className="font-display text-xl font-extrabold text-primary">
                DulceSabor
              </span>
            </a>
            <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Dulces artesanales hechos con cariño para endulzar cada momento.
            </p>
            <div className="mt-4 flex gap-2">
              {[Heart, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition hover:brightness-95"
                  aria-label="Red social"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-base font-bold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-base font-bold text-foreground">
              Contacto
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>hola@dulcesabor.mx</li>
              <li>+52 55 1234 5678</li>
              <li>Ciudad de México</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DulceSabor. Hecho con dulzura.
        </div>
      </div>
    </footer>
  )
}
