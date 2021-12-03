import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Used inside to create the context
function createPrisma() {
    let prisma: PrismaClient
    if (process.env.NODE_ENV === 'production') {
        prisma = new PrismaClient()
    } else {
        if (!global.prisma) {
            global.prisma = new PrismaClient()
        }
        prisma = global.prisma
    }
    return prisma
}

export default createPrisma()
