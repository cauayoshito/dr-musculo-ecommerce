export type DemoStore = {
  slug: 'online' | 'jorge-amado' | 'saj-1' | 'saj-2'
  name: string
  city: string
  label: string
}

export const demoStores: DemoStore[] = [
  { slug: 'online', name: 'Dr. Músculo Online', city: 'Brasil', label: 'ON-LINE' },
  { slug: 'jorge-amado', name: 'Dr. Músculo Jorge Amado', city: 'Salvador', label: 'JORGE AMADO (Salvador)' },
  { slug: 'saj-1', name: 'Dr. Músculo SAJ 1', city: 'Santo Antônio de Jesus', label: 'SAJ 1' },
  { slug: 'saj-2', name: 'Dr. Músculo SAJ 2', city: 'Santo Antônio de Jesus', label: 'SAJ 2' },
]

export const demoStoreBySlug = Object.fromEntries(demoStores.map((store) => [store.slug, store]))
