import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'
import { z } from 'zod'

const inventorySchema = z.object({
  items: z.array(
    z.object({
      storeId: z.string().min(1),
      variantId: z.string().min(1),
      stock: z.number().int().min(0),
    }),
  ),
})

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const body = await request.json()
  const parsed = inventorySchema.safeParse(body)
  if (!parsed.success) {
    return jsonError('Dados inválidos', 400)
  }
  const operations = parsed.data.items.map((item) =>
    prisma.storeInventory.upsert({
      where: { storeId_variantId: { storeId: item.storeId, variantId: item.variantId } },
      update: { stock: item.stock },
      create: { storeId: item.storeId, variantId: item.variantId, stock: item.stock },
    }),
  )
  await prisma.$transaction(operations)
  return jsonOk({ ok: true })
}
