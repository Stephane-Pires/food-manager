/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // SEEDS FOR THE LINK

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

    const postgre = await prisma.link.upsert({
        where: { id: 'postgre' },
        update: {},
        create: {
            id: 'postgre',
            name: 'PostgreSQL',
            url: 'https://www.postgresql.org',
            description:
                'An unavoidable relational database, with everything you need',
            category: 'BACKEND',
            isItCool: true,
        },
    })

    const formik = await prisma.link.upsert({
        where: { id: 'formik' },
        update: {},
        create: {
            id: 'formik',
            name: 'Formik',
            url: 'https://formik.org',
            description: 'A really nice abstraction for React form',
            category: 'FRONTEND',
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
        postgre,
        formik,
    })

    // SEEDS FOR THE RECIPE

    const tacos = await prisma.recipe.upsert({
        where: { id: 'tacos' },
        update: {},
        create: {
            id: 'tacos',
            name: 'Tacos',
            url: 'https://www.marmiton.org/recettes/recette_tacos-mexicains_34389.aspx',
            description: 'A nice tacos recipe',
            service: 'MAIN',
            diets: ['CARNIVORE', 'VEGETARIAN', 'PESCETARIAN'],
        },
    })

    const chocolateCake = await prisma.recipe.upsert({
        where: { id: 'chocolate_cake' },
        update: {},
        create: {
            id: 'chocolate_cake',
            name: 'Chocolate cakes',
            url: 'https://www.marmiton.org/recettes/recette_tacos-mexicains_34389.aspx',
            description:
                'A really nice and gucci chocolate cake. Delicious with a vanilla ice cream',
            service: 'DESSERT',
            diets: [],
        },
    })

    console.log({
        tacos,
        chocolateCake,
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
