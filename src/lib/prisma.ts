import type { PrismaClient } from '@prisma/client'

type PrismaGlobal = { prisma?: PrismaClient | null }
const globalForPrisma = globalThis as PrismaGlobal

export async function getPrisma(): Promise<PrismaClient | null> {
  if (!process.env.DATABASE_URL) {
    return null
  }
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  const { PrismaClient: PrismaClientRuntime } = await import('@prisma/client')
  const client = new PrismaClientRuntime()
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }
  return client
}
