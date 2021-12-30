import { DateTime } from 'luxon'

import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Recipe } from '@prisma/client'

import { ApolloQueryResult } from '@apollo/client'

import { RECIPE, RECIPES_ID } from '@graphql/client-queries/recipe'

import client from '@lib/apollo-client'

import { Button } from '@chakra-ui/button'
import { Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/layout'

import Layout from '@components/layout'
import QueryResult from '@components/query-result'
import { RecipeServiceBadge } from '@components/recipe/recipe-badge'

export default function RecipeView({
    getRecipeResult: {
        data: { recipe },
        loading,
        error,
    },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { id, name, description, url, service, createdAt, updatedAt } = recipe

    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={recipe}>
                <Head>
                    <title>{name}</title>
                </Head>

                <Grid
                    h="100vh"
                    w="1OOvw"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    columnGap={0}
                    rowGap={0}
                >
                    <GridItem rowSpan={3} colSpan={2} position="relative">
                        <Image
                            src={`/images/recipe/${id}.jpg`}
                            alt="recipe"
                            layout="fill"
                        />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <VStack>
                            <Heading size="lg">{name}</Heading>
                            <RecipeServiceBadge service={service} />
                        </VStack>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <VStack margin="1vw">
                            <Text>{description}</Text>
                            <Text>
                                Created at :
                                {DateTime.fromISO(
                                    `${createdAt}`
                                ).toLocaleString(DateTime.DATE_MED)}
                            </Text>
                            <Text>
                                Last updated at :
                                {DateTime.fromISO(
                                    `${updatedAt}`
                                ).toLocaleString(DateTime.DATE_MED)}
                            </Text>
                            <Link href={url} passHref>
                                <Button variant="outline" size="lg">
                                    Go to source recipe
                                </Button>
                            </Link>
                        </VStack>
                    </GridItem>
                </Grid>
            </QueryResult>
        </Layout>
    )
}

interface RecipesIdQuery {
    recipes: {
        id: string
    }[]
}
export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: ApolloQueryResult<RecipesIdQuery> = await client.query(
        RECIPES_ID
    )

    const paths = data.recipes.map(({ id }) => ({
        params: {
            id,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { id: recipeId } }) => {
    const getRecipeResult: ApolloQueryResult<{
        recipe: Recipe
    }> = await client.query(RECIPE(recipeId))

    return {
        props: {
            getRecipeResult,
        },
    }
}
