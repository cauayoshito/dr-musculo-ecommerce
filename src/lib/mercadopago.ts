import { MercadoPagoConfig, Preference } from 'mercadopago'
import { prisma } from './prisma'

// Configuração do cliente Mercado Pago
const mpClient = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! })

// Cria uma preferência de pagamento a partir do resumo do carrinho
export async function createPreference({
  orderId,
  items,
  payer,
  redirectUrls,
}: {
  orderId: string
  items: Array<{ title: string; quantity: number; unit_price: number }>
  payer: { name: string; email: string }
  redirectUrls: { success: string; failure: string; pending: string }
}) {
  const preference = new Preference(mpClient)
  const response = await preference.create({
    body: {
      items: items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
        currency_id: 'BRL',
      })),
      payer: {
        name: payer.name,
        email: payer.email,
      },
      external_reference: orderId,
      back_urls: {
        success: redirectUrls.success,
        failure: redirectUrls.failure,
        pending: redirectUrls.pending,
      },
      auto_return: 'approved',
    },
  })
  return response.id ? response : null
}

// Processa a notificação de Webhook do Mercado Pago e atualiza o pedido
export async function handleMercadoPagoWebhook(data: any) {
  // Este é um esboço. Na prática, verifique a assinatura e o tipo de notificação.
  const topic = data.type || data.topic
  const id = data.id || data['data.id']
  if (!topic || !id) return
  // Se for uma notificação de pagamento, busque os detalhes do pagamento e atualize o pedido
  // TODO: implementar chamada à API de pagamentos do Mercado Pago para verificar status.
  console.log('Webhook recebido', topic, id)
}