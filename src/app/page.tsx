import { getPrisma } from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'

export default async function HomePage() {
  const prisma = await getPrisma()
  // Busca produtos destacados
  const [bestSellers, newArrivals] = prisma
    ? await Promise.all([
        prisma.product.findMany({
          where: { bestSeller: true },
          include: { images: true },
          take: 4,
        }),
        prisma.product.findMany({
          where: { newArrival: true },
          include: { images: true },
          take: 4,
        }),
      ])
    : [[], []]
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Dê um passo além nos seus treinos
        </h1>
        <p className="mb-6 max-w-xl mx-auto">
          Encontre suplementos, acessórios e roupas fitness de alta qualidade para impulsionar sua
          performance. Produtos selecionados para você conquistar seus objetivos.
        </p>
        <Link
          href="/suplementos"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
        >
          Ver ofertas
        </Link>
      </section>
      {/* Destaques por categoria */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Categorias em destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Suplementos */}
          <Link href="/suplementos" className="relative group block rounded overflow-hidden">
            <div className="relative h-40">
              <Image
                src="https://images.unsplash.com/photo-1553440569-bcc63803bbef?auto=format&fit=crop&w=600&q=60"
                alt="Suplementos"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Suplementos</span>
            </div>
          </Link>
          {/* Acessórios */}
          <Link href="/acessorios" className="relative group block rounded overflow-hidden">
            <div className="relative h-40">
              <Image
                src="https://images.unsplash.com/photo-1605296867424-35b037312a43?auto=format&fit=crop&w=600&q=60"
                alt="Acessórios"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Acessórios</span>
            </div>
          </Link>
          {/* Roupas */}
          <Link href="/roupas" className="relative group block rounded overflow-hidden">
            <div className="relative h-40">
              <Image
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e33b?auto=format&fit=crop&w=600&q=60"
                alt="Roupas"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Roupas</span>
            </div>
          </Link>
        </div>
      </section>
      {/* Mais vendidos */}
      <section className="bg-gray-100 py-12 px-4" id="mais-vendidos">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Mais vendidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={Number(product.price)}
                image={product.images[0]?.url ?? ''}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Novidades */}
      <section className="py-12 px-4" id="novidades">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Novidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={Number(product.price)}
                image={product.images[0]?.url ?? ''}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Banner Roupas Fitness Feminina */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coleção Fitness Feminina</h2>
            <p className="mb-6">
              Descubra leggings, tops e conjuntos que combinam conforto e estilo. Pensados para
              acompanhar cada movimento seu.
            </p>
            <Link
              href="/roupas"
              className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              Ver coleção
            </Link>
          </div>
          <div className="flex-1 relative h-60 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0641?auto=format&fit=crop&w=800&q=60"
              alt="Coleção Feminina"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
