import { PrismaClient } from '@prisma/client'

type PrismaGlobal = { prisma?: PrismaClient }
const globalForPrisma = globalThis as PrismaGlobal

function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
  }
  return new PrismaClient()
}

function getPrismaClient() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  const client = createPrismaClient()
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }
  return client
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient()
    return client[prop as keyof PrismaClient]
  },
})
