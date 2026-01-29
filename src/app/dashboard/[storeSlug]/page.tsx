import { demoStoreBySlug } from '@/lib/demo/stores'
import { getStoreAnalytics } from '@/lib/demo/analytics'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Dashboard | Dr. Músculo',
}

export default function StoreDashboardPage({ params }: { params: { storeSlug: string } }) {
  const store = demoStoreBySlug[params.storeSlug as keyof typeof demoStoreBySlug]
  if (!store) {
    notFound()
  }
  const analytics = getStoreAnalytics(store.slug)
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      <div>
        <p className="text-xs uppercase text-gray-500">{store.label}</p>
        <h1 className="text-3xl font-bold">{store.name}</h1>
        <p className="text-gray-500">{store.city}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {analytics.metrics.map((metric) => (
          <div key={metric.label} className="bg-white shadow rounded p-4">
            <p className="text-xs text-gray-500">{metric.label}</p>
            <p className="text-xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Vendas por dia (mês atual)</h2>
        <div className="grid grid-cols-10 gap-2">
          {analytics.dailySales.map((day) => (
            <div key={day.day} className="text-center text-xs">
              <div
                className="bg-primary/70 rounded-sm mx-auto"
                style={{ height: `${Math.max(12, day.value / 1500)}px` }}
              />
              <span className="text-gray-500">{day.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Produtos mais vendidos</h2>
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="py-2">Produto</th>
                <th className="py-2">Qtd</th>
                <th className="py-2">Receita</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topSellers.map((item) => (
                <tr key={item.name} className="border-t">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">
                    {item.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Estoque baixo</h2>
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="py-2">Produto</th>
                <th className="py-2">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {analytics.lowStock.map((item) => (
                <tr key={item.name} className="border-t">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Movimentações</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          {analytics.movements.map((movement, index) => (
            <li key={`${movement}-${index}`} className="border-b pb-2">
              {movement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
