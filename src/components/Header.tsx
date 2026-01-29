"use client"

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { Menu, ShoppingCart, Search, User } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function Header() {
  const { state } = useCart()
  const cartCount = state.items.reduce((acc, item) => acc + item.quantity, 0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { data: session } = useSession()
  const accountLink = session?.user ? '/conta' : '/login'

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-primary">
              <span className="text-xl">Dr. Músculo</span>
            </Link>
          </div>
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary">Início</Link>
            <Link href="/suplementos" className="hover:text-primary">Suplementos</Link>
            <Link href="/acessorios" className="hover:text-primary">Acessórios</Link>
            <Link href="/roupas" className="hover:text-primary">Roupas</Link>
            <Link href="/ofertas" className="hover:text-primary">Ofertas</Link>
          </nav>
          {/* Ações */}
          <div className="flex items-center space-x-4">
            {/* Busca (placeholder) */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Buscar…"
                className="pl-10 pr-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary w-48"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            {/* Conta */}
            <Link href={accountLink} className="hidden md:block">
              <User className="w-5 h-5" />
            </Link>
            {/* Carrinho */}
            <Link href="/checkout" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-white rounded-full text-xs px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileOpen((s) => !s)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <Link href="/" className="block" onClick={() => setMobileOpen(false)}>Início</Link>
          <Link href="/suplementos" className="block" onClick={() => setMobileOpen(false)}>Suplementos</Link>
          <Link href="/acessorios" className="block" onClick={() => setMobileOpen(false)}>Acessórios</Link>
          <Link href="/roupas" className="block" onClick={() => setMobileOpen(false)}>Roupas</Link>
          <Link href="/ofertas" className="block" onClick={() => setMobileOpen(false)}>Ofertas</Link>
          <Link href={accountLink} className="block" onClick={() => setMobileOpen(false)}>Conta</Link>
        </nav>
      )}
    </header>
  )
}
