import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPrisma } from '@/lib/prisma'
import { jsonError, jsonOk } from '@/lib/api'

type StorePayload = {
  name: string
  slug: string
  city: string
  state: string
  isOnline?: boolean
}

const isNonEmptyString = (value: unknown) => typeof value === 'string' && value.trim().length >= 2
const parseStorePayload = (body: unknown): StorePayload | null => {
  if (!body || typeof body !== 'object') return null
  const payload = body as StorePayload
  if (!isNonEmptyString(payload.name) || !isNonEmptyString(payload.slug)) return null
  if (!isNonEmptyString(payload.city) || !isNonEmptyString(payload.state)) return null
  return {
    name: payload.name.trim(),
    slug: payload.slug.trim(),
    city: payload.city.trim(),
    state: payload.state.trim(),
    isOnline: Boolean(payload.isOnline),
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session || role !== 'ADMIN') {
    return jsonError('Não autorizado', 401)
  }
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonOk({ stores: [] })
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
  const prisma = await getPrisma()
  if (!prisma) {
    return jsonError('Banco indisponível no modo demo', 503)
  }
  const body = await request.json()
  const parsed = parseStorePayload(body)
  if (!parsed) {
    return jsonError('Dados inválidos', 400)
  }
  const store = await prisma.store.create({ data: parsed })
  return jsonOk({ store }, 201)
}
