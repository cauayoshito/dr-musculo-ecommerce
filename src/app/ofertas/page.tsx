import { getDemoOffers } from '@/lib/demo/catalog'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Ofertas | Dr. Músculo',
}

export default function OfertasPage() {
  const products = getDemoOffers()
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Ofertas</h1>
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
