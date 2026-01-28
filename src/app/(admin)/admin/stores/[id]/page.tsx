import { prisma } from '@/lib/prisma'
import StoreForm from '@/components/StoreForm'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Editar loja | Dr. Músculo',
}

export default async function EditStorePage({ params }: { params: { id: string } }) {
  const store = await prisma.store.findUnique({ where: { id: params.id } })
  if (!store) {
    notFound()
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Editar loja</h1>
      <StoreForm
        initial={{
          name: store.name,
          slug: store.slug,
          city: store.city,
          state: store.state,
          isOnline: store.isOnline,
        }}
        submitUrl={`/api/admin/stores/${store.id}`}
        method="PATCH"
      />
    </div>
  )
}
