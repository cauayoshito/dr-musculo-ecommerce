import { getDemoProductsByCategory } from '@/lib/demo/catalog'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Roupas | Dr. Músculo',
  description: 'Leggings, tops, conjuntos e outras peças fitness.',
}

export default async function RoupasPage() {
  const products = getDemoProductsByCategory('roupas')
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Roupas</h1>
      {/* Filtros (placeholder) */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Filtros em breve…</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            slug={product.slug}
            name={product.name}
            price={product.price}
            image={product.images[0] ?? ''}
          />
        ))}
      </div>
    </div>
  )
}
