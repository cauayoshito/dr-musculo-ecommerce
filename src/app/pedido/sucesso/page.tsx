\"use client\"

import { useEffect, useState } from 'react'

type DemoOrder = {
  id: string
  name: string
  quantity: number
  price: number
  paymentMethod: string
}

export default function PedidoSucesso() {
  const [order, setOrder] = useState<DemoOrder | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('demo-order')
    if (stored) {
      try {
        setOrder(JSON.parse(stored) as DemoOrder)
      } catch {
        setOrder(null)
      }
    }
  }, [])
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Pedido realizado com sucesso!</h1>
      <p className="mb-6">Obrigado por comprar conosco. Em breve enviaremos a confirmação por e‑mail.</p>
      {order && (
        <div className="bg-white shadow rounded p-4 mb-6 w-full max-w-md text-sm">
          <p className="text-gray-500">Resumo do pedido</p>
          <p className="font-semibold">{order.name}</p>
          <p>Quantidade: {order.quantity}</p>
          <p>
            Total:{' '}
            {order.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          <p className="capitalize">Pagamento: {order.paymentMethod}</p>
        </div>
      )}
      <a href="/" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark">
        Voltar para a loja
      </a>
    </div>
  )
}
