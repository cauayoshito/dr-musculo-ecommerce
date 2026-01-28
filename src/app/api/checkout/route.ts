import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createPreference } from '@/lib/mercadopago'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, customer } = body as {
      items: Array<{ productId: string; variantId?: string; name: string; price: number; quantity: number }>
      customer: { name: string; email: string; phone: string; address: string }
    }
    if (!items || !customer) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    // Calcula total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    // Cria pedido no banco com status PENDING
    const order = await prisma.order.create({
      data: {
        customerName: customer.name,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        shippingAddress: customer.address,
        status: 'PENDING',
        total,
        items: {
          create: items.map((item) => ({
            product: { connect: { id: item.productId } },
            variant: item.variantId ? { connect: { id: item.variantId } } : undefined,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    })
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
    return NextResponse.json({ init_point: pref.body.init_point ?? pref.body.sandbox_init_point })
  } catch (error: any) {
    console.error('Erro no checkout', error)
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 })
  }
}