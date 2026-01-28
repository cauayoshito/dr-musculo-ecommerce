import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Músculo – Loja de suplementos e fitness',
  description: 'E‑commerce de suplementos, acessórios e roupas fitness com checkout rápido e seguro.',
  openGraph: {
    title: 'Dr. Músculo',
    description: 'Loja de suplementos, acessórios e roupas fitness. Compre com praticidade e segurança.',
    url: 'https://drmusculo.com',
    siteName: 'Dr. Músculo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0641?auto=format&fit=crop&w=1200&q=60',
        width: 1200,
        height: 630,
        alt: 'Dr. Músculo Loja',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}