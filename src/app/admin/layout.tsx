import { ReactNode } from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions)
  // Se não estiver logado ou não for admin, redireciona para login
  if (!session) {
    redirect('/admin/login')
  }
  return <div className="max-w-7xl mx-auto py-8 px-4">{children}</div>
}