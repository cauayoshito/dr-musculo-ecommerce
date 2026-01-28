import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'
import { z } from 'zod'

const storeSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  isOnline: z.boolean().optional().default(false),
})

export async function GET() {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const stores = await prisma.store.findMany({ orderBy: { name: 'asc' } })
  return jsonOk({ stores })
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const body = await request.json()
  const parsed = storeSchema.safeParse(body)
  if (!parsed.success) {
    return jsonError('Dados inválidos', 400)
  }
  const store = await prisma.store.create({ data: parsed.data })
  return jsonOk({ store }, 201)
}
