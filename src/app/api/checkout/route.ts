import { NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'
import { createPreference } from '@/lib/mercadopago'
import { hash } from 'bcryptjs'
import crypto from 'crypto'

type CheckoutPayload = {
  items: Array<{
    productId: string
    variantId?: string
    name: string
    price: number
    quantity: number
  }>
  customer: {
    name: string
    email: string
    phone: string
    address: string
  }
}

const isNonEmptyString = (value: unknown) => typeof value === 'string' && value.trim().length > 0
const isPositiveInt = (value: unknown) => typeof value === 'number' && Number.isInteger(value) && value > 0
const isNonNegative = (value: unknown) => typeof value === 'number' && value >= 0

function parseCheckoutPayload(body: unknown): CheckoutPayload | null {
  if (!body || typeof body !== 'object') return null
  const payload = body as CheckoutPayload
  if (!Array.isArray(payload.items) || payload.items.length === 0) return null
  if (!payload.customer) return null
  const customer = payload.customer
  if (
    !isNonEmptyString(customer.name) ||
    !isNonEmptyString(customer.email) ||
    !isNonEmptyString(customer.phone) ||
    !isNonEmptyString(customer.address)
  ) {
    return null
  }
  for (const item of payload.items) {
    if (
      !isNonEmptyString(item.productId) ||
      !isNonEmptyString(item.name) ||
      (item.variantId && !isNonEmptyString(item.variantId)) ||
      !isNonNegative(item.price) ||
      !isPositiveInt(item.quantity)
    ) {
      return null
    }
  }
  return payload
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = parseCheckoutPayload(body)
    if (!parsed) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const { items, customer } = parsed
    const prisma = await getPrisma()
    // Calcula total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    if (!prisma) {
      return NextResponse.json({
        init_point: null,
        message: 'Pedido registrado no modo demo. Pagamento em breve.',
      })
    }
    const [onlineStore, existingUser] = await Promise.all([
      prisma.store.findFirst({ where: { isOnline: true } }),
      prisma.user.findUnique({ where: { email: customer.email } }),
    ])
    const user =
      existingUser ??
      (await prisma.user.create({
        data: {
          email: customer.email,
          name: customer.name,
          hashedPassword: await hash(crypto.randomUUID(), 10),
          role: 'CUSTOMER',
        },
      }))
    // Cria pedido no banco com status PENDING
    const order = await prisma.order.create({
      data: {
        customerName: customer.name,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        shippingAddress: customer.address,
        status: 'PENDING',
        userId: user.id,
        storeId: onlineStore?.id,
        total,
        items: {
          create: items.map((item) => ({
            product: { connect: { id: item.productId } },
            variant: item.variantId ? { connect: { id: item.variantId } } : undefined,
            quantity: item.quantity,
            price: item.price,
            priceAtPurchase: item.price,
            productNameSnapshot: item.name,
            variantSnapshot: item.variantId ?? null,
          })),
        },
      },
    })
    if (!process.env.MP_ACCESS_TOKEN) {
      return NextResponse.json({
        init_point: null,
        message: 'Pagamento em breve. Pedido registrado com sucesso.',
      })
    }
    // Cria preferência no Mercado Pago
    const pref = await createPreference({
      orderId: order.id,
      items: items.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
      })),
      payer: { name: customer.name, email: customer.email },
      redirectUrls: {
        success: `${process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL}/pedido/sucesso`,
        failure: `${process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL}/pedido/erro`,
        pending: `${process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL}/pedido/pending`,
      },
    })
    if (!pref) throw new Error('Não foi possível criar a preferência')
    const prefData = pref as {
      body?: { init_point?: string | null; sandbox_init_point?: string | null }
      init_point?: string | null
      sandbox_init_point?: string | null
    }
    const initPoint =
      prefData.body?.init_point ??
      prefData.body?.sandbox_init_point ??
      prefData.init_point ??
      prefData.sandbox_init_point
    return NextResponse.json({ init_point: initPoint })
  } catch (error: any) {
    console.error('Erro no checkout', error)
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 })
  }
}
