import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

export async function GET() {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonOk({ totalSales: 0, totalOrders: 0, ticketAverage: 0, ordersLast7: 0 })
  }
  const [paidSales, allSales, ordersLast7] = await Promise.all([
    prisma.order.aggregate({ where: { paymentStatus: 'PAID' }, _sum: { total: true }, _count: { id: true } }),
    prisma.order.aggregate({ _sum: { total: true }, _count: { id: true } }),
    prisma.order.findMany({
      where: { createdAt: { gte: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) } },
      select: { createdAt: true },
    }),
  ])
  const totalSales = Number(paidSales._sum.total ?? 0) || Number(allSales._sum.total ?? 0)
  const totalOrders = Number(paidSales._count.id ?? 0) || Number(allSales._count.id ?? 0)
  const ticketAverage = totalOrders ? totalSales / totalOrders : 0
  return jsonOk({ totalSales, totalOrders, ticketAverage, ordersLast7: ordersLast7.length })
}
