import { enumType } from 'nexus'
import {
    Diet as nexusPrismaDiet,
    Service as nexusPrismaService,
    Stack as nexusPrismaStack,
} from 'nexus-prisma'

export const Service = enumType(nexusPrismaService)
export const Diet = enumType(nexusPrismaDiet)
export const Stack = enumType(nexusPrismaStack)
