import { demoCatalog, type DemoProduct } from './catalog.generated'

const products = demoCatalog.products
const productBySlug = new Map(products.map((product) => [product.slug, product]))

export const demoLists = {
  maisVendidos: demoCatalog.maisVendidos,
  novidades: demoCatalog.novidades,
  ofertas: demoCatalog.ofertas,
  colecaoFeminina: demoCatalog.colecaoFeminina,
}

export function getDemoProductsByCategory(categorySlug: DemoProduct['categorySlug']) {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getDemoProductBySlug(slug: string) {
  return productBySlug.get(slug)
}

export function getDemoProductsBySlugs(slugs: string[]) {
  return slugs.map((slug) => productBySlug.get(slug)).filter(Boolean) as DemoProduct[]
}

export function getDemoOffers() {
  return products.filter((product) => typeof product.compareAt === 'number' && product.compareAt > product.price)
}
