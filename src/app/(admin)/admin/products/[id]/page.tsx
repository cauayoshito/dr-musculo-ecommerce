import { prisma } from '@/lib/prisma'
import InventoryEditor from '@/components/InventoryEditor'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Editar produto | Dr. Músculo',
}

export default async function AdminProductDetailPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { variants: true },
  })
  if (!product) {
    notFound()
  }
  const stores = await prisma.store.findMany({ orderBy: { name: 'asc' } })
  const inventories = await prisma.storeInventory.findMany({
    where: { variantId: { in: product.variants.map((variant) => variant.id) } },
    select: { storeId: true, variantId: true, stock: true },
  })
  const variants = product.variants.map((variant) => ({
    id: variant.id,
    name: variant.name,
    option: variant.option,
    product: { name: product.name },
  }))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Editar produto</h1>
      <div className="bg-white shadow rounded p-4 mb-6">
        <p className="text-sm text-gray-500">Produto</p>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500 mt-2">Preço base</p>
        <p className="font-semibold">
          {Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
      <h2 className="text-lg font-semibold mb-3">Estoque por loja</h2>
      <InventoryEditor stores={stores} variants={variants} inventories={inventories} />
    </div>
  )
}
