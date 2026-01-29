import { demoCatalog, type DemoProduct } from './catalog.generated'

type SeededRandom = () => number

const hashSeed = (value: string) =>
  Array.from(value).reduce((acc, char) => acc + char.charCodeAt(0), 0)

const mulberry32 = (seed: number): SeededRandom => {
  let t = seed + 0x6d2b79f5
  return () => {
    t |= 0
    t = (t + 0x6d2b79f5) | 0
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

const pickMany = <T,>(list: ReadonlyArray<T>, count: number, rng: SeededRandom) => {
  const pool = [...list]
  const result: T[] = []
  while (pool.length > 0 && result.length < count) {
    const index = Math.floor(rng() * pool.length)
    result.push(pool.splice(index, 1)[0])
  }
  return result
}

const keyMixKeywords = [
  'creatina',
  'whey',
  'colágeno',
  'hydrolite',
  'cafeína',
  'barra',
  'coqueteleira',
  'boné',
  'cropped',
  'corta-vento',
  'shorts',
]

const keyMixProducts = demoCatalog.products.filter((product) =>
  keyMixKeywords.some((keyword) => product.slug.includes(keyword) || product.name.toLowerCase().includes(keyword)),
)

export type DemoMetric = {
  label: string
  value: string
}

export type DemoTopItem = {
  name: string
  quantity: number
  revenue: number
}

export type DemoStockItem = {
  name: string
  stock: number
}

export type DemoDashboard = {
  metrics: DemoMetric[]
  dailySales: { day: string; value: number }[]
  topSellers: DemoTopItem[]
  lowStock: DemoStockItem[]
  movements: string[]
}

export function getStoreAnalytics(storeSlug: string): DemoDashboard {
  const rng = mulberry32(hashSeed(storeSlug))
  const baseSales = 72000 + Math.floor(rng() * 60000)
  const orders = 680 + Math.floor(rng() * 380)
  const ticket = baseSales / Math.max(1, orders)
  const stockTotal = 3200 + Math.floor(rng() * 1200)

  const dailySales = Array.from({ length: 30 }).map((_, index) => ({
    day: `${index + 1}`.padStart(2, '0'),
    value: Math.round(baseSales / 30 + (rng() - 0.4) * 2500),
  }))

  const topBase = keyMixProducts.length > 0 ? keyMixProducts : demoCatalog.products
  const topProducts = pickMany(topBase, 10, rng)
  const topSellers = topProducts.map((product) => ({
    name: product.name,
    quantity: 60 + Math.floor(rng() * 140),
    revenue: Math.round(product.price * (50 + Math.floor(rng() * 160))),
  }))

  const lowStockProducts = pickMany(demoCatalog.products, 10, rng)
  const lowStock = lowStockProducts.map((product) => ({
    name: product.name,
    stock: 2 + Math.floor(rng() * 8),
  }))

  const movements = [
    'Entrada de estoque: Creatina Monohidratada 300g',
    'Venda registrada: Whey Protein Isolado 900g',
    'Ajuste manual: Cropped Fitness Power',
    'Transferência entre lojas: Coqueteleira 700ml',
    'Reposição: Hydrolite Isotônico 500ml',
    'Venda registrada: Legging Power Atlhetica',
  ]

  return {
    metrics: [
      { label: 'Vendas do mês', value: baseSales.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
      { label: 'Pedidos', value: orders.toString() },
      { label: 'Ticket médio', value: ticket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
      { label: 'Itens em estoque', value: stockTotal.toString() },
    ],
    dailySales,
    topSellers,
    lowStock,
    movements,
  }
}
