import { getPrisma } from '@/lib/prisma'
import Link from 'next/link'

export const metadata = {
  title: 'Gerenciar pedidos | Dr. Músculo',
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: { status?: string; storeId?: string; from?: string; to?: string }
}) {
  const prisma = await getPrisma()
  if (!prisma) {
    return <p className="text-gray-600">Pedidos indisponíveis no modo demo.</p>
  }
  const stores = await prisma.store.findMany({ orderBy: { name: 'asc' } })
  const filters: Record<string, any> = {}
  if (searchParams.status) {
    filters.status = searchParams.status
  }
  if (searchParams.storeId) {
    filters.storeId = searchParams.storeId
  }
  if (searchParams.from || searchParams.to) {
    filters.createdAt = {}
    if (searchParams.from) filters.createdAt.gte = new Date(searchParams.from)
    if (searchParams.to) filters.createdAt.lte = new Date(searchParams.to)
  }
  const orders = await prisma.order.findMany({
    where: filters,
    include: { store: true },
    orderBy: { createdAt: 'desc' },
  })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pedidos</h1>
      <form className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6 text-sm">
        <select name="status" defaultValue={searchParams.status ?? ''} className="border rounded px-3 py-2">
          <option value="">Status</option>
          <option value="PENDING">Pendente</option>
          <option value="PAID">Pago</option>
          <option value="FAILED">Falhou</option>
          <option value="CANCELED">Cancelado</option>
        </select>
        <select name="storeId" defaultValue={searchParams.storeId ?? ''} className="border rounded px-3 py-2">
          <option value="">Todas as lojas</option>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="from"
          defaultValue={searchParams.from ?? ''}
          className="border rounded px-3 py-2"
        />
        <input
          type="date"
          name="to"
          defaultValue={searchParams.to ?? ''}
          className="border rounded px-3 py-2"
        />
        <button className="md:col-span-4 bg-primary text-white rounded px-4 py-2">Filtrar</button>
      </form>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Cliente</th>
              <th className="px-4 py-2 text-left">Loja</th>
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
                <td className="px-4 py-2">{order.store?.name ?? 'Online'}</td>
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
