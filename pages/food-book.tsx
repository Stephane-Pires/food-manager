import { ApolloQueryResult } from '@apollo/client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/layout'

import Layout from '../components/layout'
import AllRecipes from '../graphql/queries/recipe'
import client from '../lib/apollo-client'
import { Recipe } from '.prisma/client'

interface Data {
    recipes: Recipe[]
}

export async function getStaticProps() {
    const { data }: ApolloQueryResult<Data> = await client.query(AllRecipes)

    return {
        props: {
            recipes: data.recipes,
        },
    }
}

export default function FoodBook({
    recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Head>
                <title>Food Book</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">Food Book</Text>
                    <Text fontSize="xl">Index of recipes</Text>
                </Flex>
            </Center>

            <SimpleGrid columns={6} spacing={10}>
                <Box bg="tomato" height="200px" width="200px">
                    {recipes[0].name}
                    {recipes[0].category}
                    {recipes[0].url}
                    {recipes[0].description}
                    {recipes[0].createdAt}
                </Box>
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
            </SimpleGrid>

            <Center>
                <Flex direction="column">
                    <Link href="/" passHref>
                        <Button variant="outline" size="lg">
                            Tech Stack
                        </Button>
                    </Link>
                </Flex>
            </Center>
        </Layout>
    )
}
