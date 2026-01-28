import { NextResponse } from 'next/server'
import { handleMercadoPagoWebhook } from '@/lib/mercadopago'

// Endpoint para receber notificações de webhooks do Mercado Pago
export async function POST(request: Request) {
  try {
    const body = await request.json()
    await handleMercadoPagoWebhook(body)
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Erro no webhook', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}