import { getPrisma } from '@/lib/prisma'

type Store = {
  id: string
  name: string
  slug: string
}

type LowStockItem = {
  id: string
  stock: number
  store: { name: string }
  variant: {
    name: string
    option: string
    product: { name: string }
  }
}

export const metadata = {
  title: 'Painel Admin | Dr. Músculo',
}

export default async function AdminDashboard() {
  const prisma = await getPrisma()
  if (!prisma) {
    return <p className="text-gray-600">Dados indisponíveis no modo demo.</p>
  }
  const storesPromise = (prisma as any).store.findMany({ orderBy: { name: 'asc' } }) as Promise<Store[]>
  const lowStockPromise = (prisma as any).storeInventory.findMany({
    where: { stock: { lte: 5 } },
    include: { store: true, variant: { include: { product: true } } },
    take: 8,
  }) as Promise<LowStockItem[]>
  const [productCount, orderCount, paidSales, allSales, stores, lowStock] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.order.aggregate({
      where: { status: 'PAID' },
      _sum: { total: true },
      _count: { id: true },
    }),
    prisma.order.aggregate({
      _sum: { total: true },
      _count: { id: true },
    }),
    storesPromise,
    lowStockPromise,
  ])
  const totalSalesValue = Number(paidSales._sum.total ?? 0) || Number(allSales._sum.total ?? 0)
  const totalSalesOrders = Number(paidSales._count.id ?? 0) || Number(allSales._count.id ?? 0)
  const ticketAverage = totalSalesOrders > 0 ? totalSalesValue / totalSalesOrders : 0
  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 6)
  const recentOrders = await prisma.order.findMany({
    where: { createdAt: { gte: new Date(lastWeek.toDateString()) } },
    orderBy: { createdAt: 'asc' },
    select: { createdAt: true, total: true },
  })
  const ordersByDay = recentOrders.reduce<Record<string, { count: number; total: number }>>((acc, order) => {
    const key = order.createdAt.toISOString().slice(0, 10)
    if (!acc[key]) acc[key] = { count: 0, total: 0 }
    acc[key].count += 1
    acc[key].total += Number(order.total)
    return acc
  }, {})
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Painel do Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Produtos cadastrados</p>
          <p className="text-3xl font-bold">{productCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Pedidos</p>
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
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Pedidos últimos 7 dias</p>
          <p className="text-3xl font-bold">{recentOrders.length}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-sm text-gray-500">Lojas ativas</p>
          <p className="text-3xl font-bold">{stores.length}</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-3">Pedidos por dia (últimos 7 dias)</h2>
          <ul className="space-y-2 text-sm">
            {Object.entries(ordersByDay).length === 0 ? (
              <li className="text-gray-500">Sem pedidos recentes.</li>
            ) : (
              Object.entries(ordersByDay).map(([day, info]) => (
                <li key={day} className="flex justify-between">
                  <span>{new Date(day).toLocaleDateString('pt-BR')}</span>
                  <span>{info.count} pedidos</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-3">Estoque baixo por loja</h2>
          <ul className="space-y-2 text-sm">
            {lowStock.length === 0 ? (
              <li className="text-gray-500">Nenhum item crítico.</li>
            ) : (
              lowStock.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.variant.product.name} ({item.variant.name}: {item.variant.option}) — {item.store.name}
                  </span>
                  <span className="font-semibold">{item.stock}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="mt-8 space-x-4">
        <a href="/admin/products" className="text-primary underline">Gerenciar produtos</a>
        <a href="/admin/orders" className="text-primary underline">Gerenciar pedidos</a>
        <a href="/admin/stores" className="text-primary underline">Gerenciar lojas</a>
      </div>
    </div>
  )
}
