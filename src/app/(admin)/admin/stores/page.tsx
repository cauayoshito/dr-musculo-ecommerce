import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Lojas | Dr. Músculo',
}

export default async function AdminStoresPage() {
  const stores = await prisma.store.findMany({ orderBy: { name: 'asc' } })
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Lojas</h1>
        <Link href="/admin/stores/new" className="bg-primary text-white px-4 py-2 rounded">
          Nova loja
        </Link>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Cidade</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Online</th>
              <th className="px-4 py-2 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.id} className="border-b">
                <td className="px-4 py-2">{store.name}</td>
                <td className="px-4 py-2">{store.city}</td>
                <td className="px-4 py-2">{store.state}</td>
                <td className="px-4 py-2">{store.isOnline ? 'Sim' : 'Não'}</td>
                <td className="px-4 py-2">
                  <Link href={`/admin/stores/${store.id}`} className="text-primary underline">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
