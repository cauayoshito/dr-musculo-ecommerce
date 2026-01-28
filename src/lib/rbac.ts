import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export type SessionUser = {
  id?: string
  role?: string
  storeId?: string | null
}

export async function getServerAuthSession() {
  return getServerSession(authOptions)
}

export function getSessionUser(session: Awaited<ReturnType<typeof getServerAuthSession>>) {
  return session?.user as SessionUser | undefined
}

export function isRoleAllowed(user: SessionUser | undefined, roles: string[]) {
  return !!user?.role && roles.includes(user.role)
}
