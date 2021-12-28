import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Recipe } from '@prisma/client'

import { ApolloQueryResult } from '@apollo/client'

import { RECIPES } from '@graphql/client-queries/recipe'

import client from '@lib/apollo-client'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import Layout from '@components/layout'
import QueryResult from '@components/query-result'
import { RecipeList } from '@components/recipe'

export const getServerSideProps = async () => {
    const recipesResult: ApolloQueryResult<{ recipes: Recipe[] }> =
        await client.query(RECIPES)

    return {
        props: {
            recipesResult,
        },
    }
}

export default function CookBook({
    recipesResult: {
        loading,
        error,
        data: { recipes },
    },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={recipes}>
                <Head>
                    <title>Cook Book</title>
                </Head>
                <Center>
                    <Flex direction="column">
                        <Text fontSize="6xl">Cook Book</Text>
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
