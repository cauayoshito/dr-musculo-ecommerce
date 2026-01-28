import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const metadata = {
  title: 'Minha conta | Dr. Músculo',
}

export default async function AccountHomePage() {
  const session = await getServerSession(authOptions)
  const userId = (session?.user as { id?: string } | undefined)?.id
  const orders = await prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Minha conta</h1>
      <div className="bg-white shadow rounded p-4 mb-6">
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold">{session?.user?.email}</p>
        <p className="text-sm text-gray-500 mt-3">Nome</p>
        <p className="font-semibold">{session?.user?.name ?? 'Cliente'}</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Meus pedidos</h2>
          <Link href="/conta/pedidos" className="text-primary underline text-sm">
            Ver todos
          </Link>
        </div>
        <ul className="space-y-2 text-sm">
          {orders.length === 0 ? (
            <li className="text-gray-500">Você ainda não possui pedidos.</li>
          ) : (
            orders.map((order) => (
              <li key={order.id} className="flex justify-between">
                <span>Pedido {order.id.slice(0, 8)}</span>
                <span>{Number(order.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
