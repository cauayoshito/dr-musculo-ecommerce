import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') ?? undefined
  const storeId = searchParams.get('storeId') ?? undefined
  const from = searchParams.get('from') ?? undefined
  const to = searchParams.get('to') ?? undefined
  const filters: Record<string, any> = {}
  if (status) filters.status = status
  if (storeId) filters.storeId = storeId
  if (from || to) {
    filters.createdAt = {}
    if (from) filters.createdAt.gte = new Date(from)
    if (to) filters.createdAt.lte = new Date(to)
  }
  const orders = await prisma.order.findMany({
    where: filters,
    include: { store: true },
    orderBy: { createdAt: 'desc' },
  })
  return jsonOk({ orders })
}
