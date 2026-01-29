"use client"

import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function CheckoutPage() {
  const { state, total, dispatch } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const handlePay = async () => {
    if (!name || !email || !phone || !address) {
      setError('Por favor, preencha todos os dados.')
      return
    }
    setError('')
    setNotice('')
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: state.items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          customer: { name, email, phone, address },
        }),
      })
      if (!response.ok) throw new Error('Erro ao iniciar pagamento')
      const data = await response.json()
      if (data.init_point) {
        // Redireciona para o checkout do Mercado Pago
        window.location.href = data.init_point
      } else if (data.message) {
        setNotice(data.message)
      } else {
        setNotice('Pagamento em breve. Pedido registrado com sucesso.')
      }
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {state.items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resumo do pedido */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resumo do pedido</h2>
            <ul className="space-y-4">
              {state.items.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b pb-2">
                  <span>{item.name} x{item.quantity}</span>
                  <span>
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 font-bold">
              <span>Total</span>
              <span>
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
          </div>
          {/* Formulário de dados */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Dados do comprador</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
              />
              <textarea
                placeholder="Endereço para entrega"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
                rows={3}
              />
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
            {notice && <p className="text-green-600 mt-2">{notice}</p>}
            <button
              onClick={handlePay}
              disabled={loading}
              className="mt-6 w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark disabled:opacity-50"
            >
              {loading ? 'Processando…' : 'Pagar com Mercado Pago'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
