import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
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
  const orders = await prisma.order.findMany({
    where: { storeId },
    orderBy: { createdAt: 'desc' },
  })
  return jsonOk({ orders })
}
