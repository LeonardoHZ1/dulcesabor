import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-accent via-secondary to-primary/30 px-6 py-12 shadow-sm md:px-14 md:py-20">
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
            <Sparkles className="size-4" />
            Nuevos sabores cada semana
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            Endulza tu día con un mundo de sabores
          </h1>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            Chocolates artesanales, gomitas jugosas, paletas coloridas y los
            dulces tradicionales de siempre. Todo hecho para sacarte una sonrisa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full px-7 text-base font-bold shadow-md"
            >
              Comprar ahora
              <ArrowRight className="size-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full bg-card px-7 text-base font-bold text-foreground shadow-sm hover:bg-card/80"
            >
              Ver catálogo
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-primary/20 blur-2xl md:size-72"
        />
      </div>
    </section>
  )
}
