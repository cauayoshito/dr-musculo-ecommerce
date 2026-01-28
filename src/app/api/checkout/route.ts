import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createPreference } from '@/lib/mercadopago'
import { hash } from 'bcryptjs'
import { z } from 'zod'
import crypto from 'crypto'

const checkoutSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string().min(1),
      variantId: z.string().optional(),
      name: z.string().min(1),
      price: z.number().nonnegative(),
      quantity: z.number().int().positive(),
    }),
  ),
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6),
    address: z.string().min(4),
  }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = checkoutSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const { items, customer } = parsed.data
    // Calcula total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
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
