import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const react = await prisma.link.upsert({
        where: { id: 'react' },
        update: {},
        create: {
            id: 'react',
            name: 'React',
            url: 'https://reactjs.org',
            description: 'A frontend framework that helps me build interfaces',
            category: 'FRONTEND',
            isItCool: true,
        },
    })

    const karma = await prisma.link.upsert({
        where: { id: 'chakra' },
        update: {},
        create: {
            id: 'chakra',
            name: 'Chakra UI',
            url: 'https://chakra-ui.com',
            description: 'A library that helps me build React components',
            category: 'FRONTEND',
            isItCool: true,
        },
    })

    const recoil = await prisma.link.upsert({
        where: { id: 'recoil' },
        update: {},
        create: {
            id: 'recoil',
            name: 'Recoil',
            url: 'https://recoiljs.org',
            description: 'A state management for React',
            category: 'FRONTEND',
            isItCool: true,
        },
    })

    const next = await prisma.link.upsert({
        where: { id: 'next' },
        update: {},
        create: {
            id: 'next',
            name: 'NextJS',
            url: 'https://nextjs.org',
            description:
                'A framework for creating and serving React application',
            category: 'FULLSTACK',
            isItCool: true,
        },
    })

    const prismaSeed = await prisma.link.upsert({
        where: { id: 'prisma' },
        update: {},
        create: {
            id: 'prisma',
            name: 'Prisma',
            url: 'https://www.prisma.io',
            description: 'An ORM for connecting and managing Databases',
            category: 'BACKEND',
            isItCool: true,
        },
    })

    const apollo = await prisma.link.upsert({
        where: { id: 'apollo' },
        update: {},
        create: {
            id: 'apollo',
            name: 'Apollo',
            url: 'https://www.apollographql.com',
            description:
                'A GraphQL implementation, it manage query on frontend and backend',
            category: 'FULLSTACK',
            isItCool: true,
        },
    })

    const graphql = await prisma.link.upsert({
        where: { id: 'graphql' },
        update: {},
        create: {
            id: 'graphql',
            name: 'GraphQL',
            url: 'https://graphql.org',
            description:
                'A GraphQL implementation, it manage data with a graph',
            category: 'BACKEND',
            isItCool: true,
        },
    })

    const sqlite = await prisma.link.upsert({
        where: { id: 'sqlite' },
        update: {},
        create: {
            id: 'sqlite',
            name: 'Sqlite',
            url: 'https://www.sqlite.org/index.html',
            description: 'A Lightweight database',
            category: 'BACKEND',
            isItCool: true,
        },
    })
    console.log({
        react,
        karma,
        recoil,
        next,
        prismaSeed,
        apollo,
        graphql,
        sqlite,
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
