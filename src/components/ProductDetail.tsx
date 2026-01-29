"use client"

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  const [showPayment, setShowPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credito' | 'debito' | null>(null)
  const [processing, setProcessing] = useState(false)

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
        <button
          onClick={() => setShowPayment((prev) => !prev)}
          className="border border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-primary/10"
        >
          Comprar
        </button>
      </div>

      {showPayment && (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Pagamento (DEMO)</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setPaymentMethod('pix')}
              className={`px-3 py-2 rounded border ${
                paymentMethod === 'pix' ? 'border-primary bg-primary text-white' : 'border-gray-300'
              }`}
            >
              PIX
            </button>
            <button
              onClick={() => setPaymentMethod('credito')}
              className={`px-3 py-2 rounded border ${
                paymentMethod === 'credito' ? 'border-primary bg-primary text-white' : 'border-gray-300'
              }`}
            >
              Crédito
            </button>
            <button
              onClick={() => setPaymentMethod('debito')}
              className={`px-3 py-2 rounded border ${
                paymentMethod === 'debito' ? 'border-primary bg-primary text-white' : 'border-gray-300'
              }`}
            >
              Débito
            </button>
          </div>

          {paymentMethod === 'pix' && (
            <div className="space-y-3">
              <div className="bg-gray-100 rounded p-4 text-center text-sm">
                QR CODE DEMO
                <div className="mt-2 text-xs text-gray-500">Use o app do banco para escanear.</div>
              </div>
              <div className="text-sm">
                <p className="font-medium">PIX Copia e Cola</p>
                <p className="bg-gray-100 rounded p-2 text-xs break-all">
                  00020101021226850014br.gov.bcb.pix2563pix-demo-dr-musculo-1234567895204000053039865405159.905802BR5925DR MUSCULO DEMO6008SALVADOR62070503***6304ABCD
                </p>
              </div>
            </div>
          )}

          {paymentMethod === 'credito' && (
            <div className="grid grid-cols-1 gap-3 text-sm">
              <input className="border rounded px-3 py-2" placeholder="Nome no cartão" />
              <input className="border rounded px-3 py-2" placeholder="Número do cartão" />
              <div className="grid grid-cols-2 gap-3">
                <input className="border rounded px-3 py-2" placeholder="Validade" />
                <input className="border rounded px-3 py-2" placeholder="CVV" />
              </div>
            </div>
          )}

          {paymentMethod === 'debito' && (
            <div className="grid grid-cols-1 gap-3 text-sm">
              <input className="border rounded px-3 py-2" placeholder="Nome no cartão" />
              <input className="border rounded px-3 py-2" placeholder="Número do cartão" />
              <div className="grid grid-cols-2 gap-3">
                <input className="border rounded px-3 py-2" placeholder="Validade" />
                <input className="border rounded px-3 py-2" placeholder="CVV" />
              </div>
            </div>
          )}

          <button
            disabled={!paymentMethod || processing}
            onClick={() => {
              if (!paymentMethod) return
              setProcessing(true)
              const order = {
                id: `demo-${Date.now()}`,
                productId,
                name: selectedVariant ? `${name} - ${selectedVariant.option}` : name,
                quantity: 1,
                price,
                paymentMethod,
              }
              localStorage.setItem('demo-order', JSON.stringify(order))
              router.push('/pedido/sucesso')
            }}
            className="mt-4 bg-primary text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
          >
            Finalizar pedido
          </button>
        </div>
      )}
    </div>
  )
}
