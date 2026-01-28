import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Pedidos da Loja | Dr. Músculo',
}

export default async function StoreOrdersPage() {
  const session = await getServerSession(authOptions)
  const storeId = (session?.user as { storeId?: string | null } | undefined)?.storeId ?? null
  if (!storeId) {
    return <p className="text-gray-600">Sem loja vinculada.</p>
  }
  const orders = await prisma.order.findMany({
    where: { storeId },
    orderBy: { createdAt: 'desc' },
  })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pedidos da Loja</h1>
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
                <td className="px-4 py-2">{order.id.slice(0, 8)}</td>
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
