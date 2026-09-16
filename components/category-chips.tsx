'use client'

import { useState } from 'react'
import { categories } from '@/lib/products'
import { cn } from '@/lib/utils'

export function CategoryChips() {
  const [active, setActive] = useState<string>('todos')
  const chips = [{ id: 'todos', label: 'Todos', emoji: '✨' }, ...categories]

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-14">
      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
        Explora por categoría
      </h2>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => setActive(chip.id)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold shadow-sm transition',
              active === chip.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-foreground/80 hover:bg-accent hover:text-accent-foreground',
            )}
          >
            <span aria-hidden="true">{chip.emoji}</span>
            {chip.label}
          </button>
        ))}
      </div>
    </section>
  )
}
