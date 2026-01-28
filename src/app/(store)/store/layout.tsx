import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function StoreLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions)
  const role = (session?.user as { role?: string } | undefined)?.role
  if (!session) {
    redirect('/store/login')
  }
  if (role !== 'STORE_OWNER') {
    redirect('/login')
  }
  return <div className="max-w-7xl mx-auto py-8 px-4">{children}</div>
}
