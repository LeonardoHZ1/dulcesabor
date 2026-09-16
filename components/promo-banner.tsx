import { Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
      <div className="flex flex-col items-center gap-6 overflow-hidden rounded-4xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-sm md:flex-row md:justify-between md:px-14 md:py-12 md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <span className="flex size-16 items-center justify-center rounded-3xl bg-primary-foreground/15">
            <Gift className="size-8" />
          </span>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-primary-foreground/80">
              Promo dulce
            </p>
            <h2 className="mt-1 text-balance font-display text-2xl font-extrabold md:text-3xl">
              25% de descuento en tu primera compra
            </h2>
            <p className="mt-1 text-sm text-primary-foreground/90">
              Usa el código <span className="font-bold">DULCE25</span> al pagar.
            </p>
          </div>
        </div>
        <Button
          size="lg"
          className="rounded-full bg-card px-8 text-base font-bold text-foreground shadow-md hover:bg-card/90"
        >
          Aprovechar oferta
        </Button>
      </div>
    </section>
  )
}
