import { getPrisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default async function OrderDetailPage({ params }: Props) {
  const prisma = await getPrisma()
  if (!prisma) {
    return notFound()
  }
  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      items: { include: { product: true, variant: true } },
    },
  })
  if (!order) return notFound()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pedido {order.id.slice(0, 8)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Dados do cliente</h2>
          <p><strong>Nome:</strong> {order.customerName}</p>
          <p><strong>Email:</strong> {order.customerEmail}</p>
          <p><strong>Telefone:</strong> {order.customerPhone}</p>
          <p><strong>Endereço:</strong> {order.shippingAddress}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Itens</h2>
          <ul className="space-y-2">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-1">
                <span>
                  {item.product.name}{' '}
                  {item.variant ? `- ${item.variant.option}` : ''} x{item.quantity}
                </span>
                <span>
                  {(Number(item.price) * item.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold flex justify-between">
            <span>Total:</span>
            <span>
              {Number(order.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
