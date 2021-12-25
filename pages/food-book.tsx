import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { ApolloQueryResult } from '@apollo/client'

import { RECIPES } from '@graphql/client-queries/recipe'

import client from '@lib/apollo-client'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import Layout from '@components/layout'
import QueryResult from '@components/query-result'
import { RecipeList } from '@components/recipe'

import { Recipe } from '.prisma/client'

interface Data {
    recipes: Recipe[]
}

export async function getStaticProps() {
    const recipesResult: ApolloQueryResult<Data> = await client.query(RECIPES)

    return {
        props: {
            recipesResult,
        },
    }
}

export default function FoodBook({
    recipesResult: {
        loading,
        error,
        data: { recipes },
    },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={recipes}>
                <Head>
                    <title>Food Book</title>
                </Head>
                <Center>
                    <Flex direction="column">
                        <Text fontSize="6xl">Food Book</Text>
                        <Text fontSize="xl">Index of recipes</Text>
                    </Flex>
                </Center>
                <RecipeList recipes={recipes} />
                <Center>
                    <Flex direction="column">
                        <Center>
                            <Link href="/" passHref>
                                <Button variant="outline" size="lg">
                                    Tech Stack
                                </Button>
                            </Link>
                            <Link href="/add-recipe" passHref>
                                <Button variant="outline" size="lg">
                                    Add Recipe
                                </Button>
                            </Link>
                        </Center>
                    </Flex>
                </Center>
            </QueryResult>
        </Layout>
    )
}
