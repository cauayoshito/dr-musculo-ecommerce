import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

export async function GET() {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  const userId = (session?.user as { id?: string } | undefined)?.id
  if (!session || role !== 'CUSTOMER') {
    return jsonError('Não autorizado', 401)
  }
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonOk({ orders: [] })
  }
  const orders = await prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
  return jsonOk({ orders })
}
