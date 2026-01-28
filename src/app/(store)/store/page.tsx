import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'

export const metadata = {
  title: 'Painel da Loja | Dr. Músculo',
}

export default async function StoreDashboard() {
  const session = await getServerSession(authOptions)
  const storeId = (session?.user as { storeId?: string | null } | undefined)?.storeId ?? null
  const prisma = await getPrisma()
  if (!prisma) {
    return <p className="text-gray-600">Dados indisponíveis no modo demo.</p>
  }
  if (!storeId) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Loja não vinculada</h1>
        <p className="text-gray-600 mt-2">Solicite ao administrador para associar sua conta a uma loja.</p>
      </div>
    )
  }
  const [store, orderCount, paidSales, allSales, lowStock] = await Promise.all([
    prisma.store.findUnique({ where: { id: storeId } }),
    prisma.order.count({ where: { storeId } }),
    prisma.order.aggregate({
      where: { storeId, paymentStatus: 'PAID' },
      _sum: { total: true },
      _count: { id: true },
    }),
    prisma.order.aggregate({
      where: { storeId },
      _sum: { total: true },
      _count: { id: true },
    }),
    prisma.storeInventory.findMany({
      where: { storeId, stock: { lte: 5 } },
      include: { variant: { include: { product: true } } },
      take: 10,
    }),
  ])
  const totalSalesValue = Number(paidSales._sum.total ?? 0) || Number(allSales._sum.total ?? 0)
  const totalSalesOrders = Number(paidSales._count.id ?? 0) || Number(allSales._count.id ?? 0)
  const ticketAverage = totalSalesOrders > 0 ? totalSalesValue / totalSalesOrders : 0

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Painel da Loja</h1>
      <p className="text-gray-600 mb-6">{store?.name ?? 'Loja'}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Pedidos da loja</p>
          <p className="text-3xl font-bold">{orderCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Total em vendas</p>
          <p className="text-3xl font-bold">
            {totalSalesValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Ticket médio</p>
          <p className="text-3xl font-bold">
            {ticketAverage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      <div className="mt-8 bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-3">Estoque baixo</h2>
        <ul className="space-y-2 text-sm">
          {lowStock.length === 0 ? (
            <li className="text-gray-500">Nenhum item crítico.</li>
          ) : (
            lowStock.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.variant.product.name} ({item.variant.name}: {item.variant.option})
                </span>
                <span className="font-semibold">{item.stock}</span>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="mt-6 space-x-4">
        <a href="/store/orders" className="text-primary underline">Ver pedidos</a>
        <a href="/store/inventory" className="text-primary underline">Ver estoque</a>
      </div>
    </div>
  )
}
