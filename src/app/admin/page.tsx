import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Painel Admin | Dr. Músculo',
}

export default async function AdminDashboard() {
  const [productCount, orderCount] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
  ])
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
          <p className="text-sm text-gray-500">Relatório de vendas</p>
          <p className="text-3xl font-bold">—</p>
        </div>
      </div>
      <div className="mt-8 space-x-4">
        <a href="/admin/products" className="text-primary underline">Gerenciar produtos</a>
        <a href="/admin/orders" className="text-primary underline">Gerenciar pedidos</a>
      </div>
    </div>
  )
}