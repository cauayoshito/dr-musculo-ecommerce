import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Estoque da Loja | Dr. Músculo',
}

export default async function StoreInventoryPage() {
  const session = await getServerSession(authOptions)
  const storeId = (session?.user as { storeId?: string | null } | undefined)?.storeId ?? null
  if (!storeId) {
    return <p className="text-gray-600">Sem loja vinculada.</p>
  }
  const inventory = await prisma.storeInventory.findMany({
    where: { storeId },
    include: { variant: { include: { product: true } } },
    orderBy: { updatedAt: 'desc' },
  })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Estoque da Loja</h1>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Produto</th>
              <th className="px-4 py-2 text-left">Variação</th>
              <th className="px-4 py-2 text-left">Estoque</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.variant.product.name}</td>
                <td className="px-4 py-2">
                  {item.variant.name}: {item.variant.option}
                </td>
                <td className="px-4 py-2 font-semibold">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
