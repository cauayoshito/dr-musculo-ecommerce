import Link from 'next/link'
import { demoStores } from '@/lib/demo/stores'

export const metadata = {
  title: 'Dashboard | Dr. Músculo',
}

export default function DashboardLandingPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard (Demo)</h1>
      <p className="text-gray-600 mb-8">Selecione uma unidade para visualizar o painel.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoStores.map((store) => (
          <Link
            key={store.slug}
            href={`/dashboard/${store.slug}`}
            className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition-shadow"
          >
            <p className="text-xs uppercase text-gray-500 mb-2">{store.label}</p>
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-500 mt-2">{store.city}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
