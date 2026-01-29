import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

export async function GET() {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  const storeId = (session?.user as { storeId?: string | null } | undefined)?.storeId ?? null
  if (!session || role !== 'STORE_OWNER') {
    return jsonError('Não autorizado', 401)
  }
  if (!storeId) {
    return jsonError('Loja não vinculada', 400)
  }
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonOk({ totalSales: 0, totalOrders: 0, ticketAverage: 0 })
  }
  const [paidSales, allSales] = await Promise.all([
    prisma.order.aggregate({ where: { storeId, status: 'PAID' }, _sum: { total: true }, _count: { id: true } }),
    prisma.order.aggregate({ where: { storeId }, _sum: { total: true }, _count: { id: true } }),
  ])
  const totalSales = Number(paidSales._sum.total ?? 0) || Number(allSales._sum.total ?? 0)
  const totalOrders = Number(paidSales._count.id ?? 0) || Number(allSales._count.id ?? 0)
  const ticketAverage = totalOrders ? totalSales / totalOrders : 0
  return jsonOk({ totalSales, totalOrders, ticketAverage })
}
