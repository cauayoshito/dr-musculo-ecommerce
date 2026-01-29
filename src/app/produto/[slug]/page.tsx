import { getDemoProductBySlug } from '@/lib/demo/catalog'
import ProductGallery from '@/components/ProductGallery'
import ProductDetail from '@/components/ProductDetail'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export default async function ProductPage({ params }: Props) {
  const product = getDemoProductBySlug(params.slug)
  if (!product) {
    return notFound()
  }
  const images = product.images
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductGallery images={images} />
      <ProductDetail
        productId={product.id}
        name={product.name}
        description={product.description}
        basePrice={product.price}
        variants={product.variants.map((variant) => ({
          id: variant.id,
          name: variant.name,
          option: variant.option,
          price: variant.price,
          stock: variant.stock,
        }))}
      />
    </div>
  )
}
