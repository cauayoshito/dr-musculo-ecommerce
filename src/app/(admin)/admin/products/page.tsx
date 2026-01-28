import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const metadata = {
  title: 'Gerenciar produtos | Dr. Músculo',
}

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({ include: { category: true } })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>
      <Link
        href="/admin/products/new"
        className="inline-block mb-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        Novo Produto
      </Link>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Categoria</th>
              <th className="px-4 py-2 text-left">Preço</th>
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category.name}</td>
                <td className="px-4 py-2">
                  {Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="px-4 py-2">
                  <Link href={`/admin/products/${product.id}`} className="text-primary underline mr-2">
                    Editar
                  </Link>
                  <button className="text-red-600 underline">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}