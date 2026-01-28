"use client"

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

interface Variant {
  id: string
  name: string
  option: string
  price: number
  stock: number
}

interface Props {
  productId: string
  name: string
  description?: string | null
  basePrice: number
  variants: Variant[]
}

export default function ProductDetail({ productId, name, description, basePrice, variants }: Props) {
  // Se houver variantes, seleciona a primeira por padrão
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(variants[0]?.id)
  const selectedVariant = variants.find((v) => v.id === selectedVariantId)
  const price = selectedVariant ? selectedVariant.price : basePrice
  const { dispatch } = useCart()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-primary text-xl font-semibold">
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      {description && <p className="text-gray-700">{description}</p>}
      {variants.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">Selecione uma opção:</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => {
              const isSelected = variant.id === selectedVariantId
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={
                    (isSelected
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-900 border-gray-300') +
                    ' px-3 py-1 border rounded'
                  }
                >
                  {variant.option}
                </button>
              )
            })}
          </div>
        </div>
      )}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => {
            dispatch({
              type: 'ADD_ITEM',
              payload: {
                productId,
                variantId: selectedVariant?.id,
                name: selectedVariant ? `${name} - ${selectedVariant.option}` : name,
                price,
                quantity: 1,
              },
            })
          }}
          className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}