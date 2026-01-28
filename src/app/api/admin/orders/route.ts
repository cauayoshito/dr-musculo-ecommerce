import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'
import { z } from 'zod'

const querySchema = z.object({
  status: z.string().optional(),
  storeId: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
})

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const { searchParams } = new URL(request.url)
  const parsed = querySchema.safeParse(Object.fromEntries(searchParams))
  if (!parsed.success) {
    return jsonError('Parâmetros inválidos', 400)
  }
  const filters: Record<string, any> = {}
  if (parsed.data.status) filters.status = parsed.data.status
  if (parsed.data.storeId) filters.storeId = parsed.data.storeId
  if (parsed.data.from || parsed.data.to) {
    filters.createdAt = {}
    if (parsed.data.from) filters.createdAt.gte = new Date(parsed.data.from)
    if (parsed.data.to) filters.createdAt.lte = new Date(parsed.data.to)
  }
  const orders = await prisma.order.findMany({
    where: filters,
    include: { store: true },
    orderBy: { createdAt: 'desc' },
  })
  return jsonOk({ orders })
}
