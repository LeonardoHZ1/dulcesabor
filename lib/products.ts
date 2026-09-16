export type Category = 'chocolates' | 'gomitas' | 'paletas' | 'tradicionales'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: Category
  tag?: string
}

export const products: Product[] = [
  {
    id: 'trufas-chocolate',
    name: 'Trufas de Chocolate',
    price: 89,
    image: '/products/trufas-chocolate.png',
    category: 'chocolates',
    tag: 'Favorito',
  },
  {
    id: 'gomitas-arcoiris',
    name: 'Gomitas Arcoíris',
    price: 45,
    image: '/products/gomitas-arcoiris.png',
    category: 'gomitas',
  },
  {
    id: 'paletas-corazon',
    name: 'Paletas de Corazón',
    price: 25,
    image: '/products/paletas-corazon.png',
    category: 'paletas',
    tag: 'Nuevo',
  },
  {
    id: 'palanqueta',
    name: 'Palanqueta de Cacahuate',
    price: 38,
    image: '/products/palanqueta.png',
    category: 'tradicionales',
  },
  {
    id: 'barra-chocolate',
    name: 'Barra de Chocolate con Leche',
    price: 55,
    image: '/products/barra-chocolate.png',
    category: 'chocolates',
  },
  {
    id: 'ositos-goma',
    name: 'Ositos de Goma',
    price: 42,
    image: '/products/ositos-goma.png',
    category: 'gomitas',
    tag: 'Favorito',
  },
  {
    id: 'paleta-espiral',
    name: 'Paleta Espiral Gigante',
    price: 30,
    image: '/products/paleta-espiral.png',
    category: 'paletas',
  },
  {
    id: 'mazapan',
    name: 'Mazapán Clásico',
    price: 35,
    image: '/products/mazapan.png',
    category: 'tradicionales',
    tag: 'Nuevo',
  },
]

export const categories: { id: Category; label: string; emoji: string }[] = [
  { id: 'chocolates', label: 'Chocolates', emoji: '🍫' },
  { id: 'gomitas', label: 'Gomitas', emoji: '🐻' },
  { id: 'paletas', label: 'Paletas', emoji: '🍭' },
  { id: 'tradicionales', label: 'Dulces tradicionales', emoji: '🍬' },
]
