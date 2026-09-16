'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/components/cart-provider'
import { Button } from '@/components/ui/button'
import { products, type Product } from '@/lib/products'

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-sm">
            {product.tag}
          </span>
        )}
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-lg font-bold leading-tight text-foreground text-balance">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="font-display text-xl font-extrabold text-primary">
            ${product.price}
          </span>
          <Button
            size="sm"
            onClick={addItem}
            className="rounded-full font-bold shadow-sm"
          >
            <Plus className="size-4" />
            Agregar
          </Button>
        </div>
      </div>
    </article>
  )
}

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Los más antojados
        </h2>
        <a
          href="#"
          className="shrink-0 text-sm font-bold text-primary hover:underline"
        >
          Ver todos
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
