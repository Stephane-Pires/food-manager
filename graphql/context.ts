// /graphql/context.ts
import { PrismaClient } from '@prisma/client'

import prisma from '@lib/prisma'

export type Context = {
    prisma: PrismaClient
}

// Create the context used inside Apollo Server
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext({ req, res }): Promise<Context> {
    return {
        prisma,
    }
}
