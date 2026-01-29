import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Detalhe do pedido | Dr. Músculo',
}

export default async function AccountOrderDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  const userId = (session?.user as { id?: string } | undefined)?.id
  const prisma = await getPrisma()
  if (!prisma) {
    notFound()
  }
  const order = await prisma.order.findFirst({
    where: { id: params.id, userId },
    include: { items: { include: { product: true, variant: true } } },
  })
  if (!order) {
    notFound()
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Pedido {order.id.slice(0, 8)}</h1>
      <div className="bg-white shadow rounded p-4 mb-6">
        <p className="text-sm text-gray-500">Status</p>
        <p className="font-semibold capitalize">{order.status.toLowerCase()}</p>
        <p className="text-sm text-gray-500 mt-3">Total</p>
        <p className="font-semibold">
          {Number(order.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-3">Itens</h2>
        <ul className="space-y-2 text-sm">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.product.name}
                {item.variant ? ` (${item.variant.name}: ${item.variant.option})` : ''}
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
      </div>
    </div>
  )
}
