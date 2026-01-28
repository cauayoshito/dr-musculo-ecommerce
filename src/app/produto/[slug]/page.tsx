import { getPrisma } from '@/lib/prisma'
import ProductGallery from '@/components/ProductGallery'
import ProductDetail from '@/components/ProductDetail'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export default async function ProductPage({ params }: Props) {
  const prisma = await getPrisma()
  if (!prisma) {
    return notFound()
  }
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: {
      images: true,
      variants: true,
    },
  })
  if (!product) {
    return notFound()
  }
  const images = product.images.map((img) => img.url)
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductGallery images={images} />
      <ProductDetail
        productId={product.id}
        name={product.name}
        description={product.description}
        basePrice={Number(product.price)}
        variants={product.variants.map((v) => ({
          id: v.id,
          name: v.name,
          option: v.option,
          price: Number(v.price),
          stock: v.stock,
        }))}
      />
    </div>
  )
}
