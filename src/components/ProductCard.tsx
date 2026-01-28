"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  id: string
  slug: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, slug, name, price, image }: ProductCardProps) {
  const { dispatch } = useCart()
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
      <Link href={`/produto/${slug}`} className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/produto/${slug}`}
          className="font-semibold text-gray-900 hover:text-primary flex-1">
          {name}
        </Link>
        <p className="mt-2 font-bold text-primary">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <button
          onClick={() =>
            dispatch({ type: 'ADD_ITEM', payload: { productId: id, name, price, quantity: 1 } })
          }
          className="mt-2 bg-primary text-white text-sm font-medium py-2 rounded hover:bg-primary-dark transition-colors"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}