import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const metadata = {
  title: 'Gerenciar pedidos | Dr. Músculo',
}

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pedidos</h1>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Cliente</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Criado em</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2"><Link href={`/admin/orders/${order.id}`} className="text-primary underline">{order.id.slice(0, 8)}</Link></td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">
                  {Number(order.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="px-4 py-2 capitalize">{order.status.toLowerCase()}</td>
                <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString('pt-BR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}