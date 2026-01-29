import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

type InventoryPayload = {
  items: Array<{ storeId: string; variantId: string; stock: number }>
}

const isNonEmptyString = (value: unknown) => typeof value === 'string' && value.trim().length > 0
const isNonNegativeInt = (value: unknown) => typeof value === 'number' && Number.isInteger(value) && value >= 0

const parseInventoryPayload = (body: unknown): InventoryPayload | null => {
  if (!body || typeof body !== 'object') return null
  const payload = body as InventoryPayload
  if (!Array.isArray(payload.items)) return null
  for (const item of payload.items) {
    if (!isNonEmptyString(item.storeId) || !isNonEmptyString(item.variantId) || !isNonNegativeInt(item.stock)) {
      return null
    }
  }
  return payload
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonError('Banco indisponível no modo demo', 503)
  }
  const body = await request.json()
  const parsed = parseInventoryPayload(body)
  if (!parsed) {
    return jsonError('Dados inválidos', 400)
  }
  const operations = parsed.items.map((item) =>
    prisma.storeInventory.upsert({
      where: { storeId_variantId: { storeId: item.storeId, variantId: item.variantId } },
      update: { stock: item.stock },
      create: { storeId: item.storeId, variantId: item.variantId, stock: item.stock },
    }),
  )
  await prisma.$transaction(operations)
  return jsonOk({ ok: true })
}
