import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Recipe } from '@prisma/client'

import { Button } from '@chakra-ui/button'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/layout'

import Layout from '../../components/layout'
import { RecipeBadge } from '../../components/recipe'
import { AllRecipesId, RecipeById } from '../../graphql/queries/recipe'
import client from '../../lib/apollo-client'

export default function RecipeView({
    recipe: { id, name, description, url, category },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            {/* <VStack> */}
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
                <GridItem rowSpan={3} colSpan={2} bg="blue">
                    <Heading size="lg">{name}</Heading>

                    <RecipeBadge category={category} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="black">
                    <Text>{description}</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="green">
                    <Text>{url}</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="red">
                    <Link href="/food-book" passHref>
                        <Button variant="outline" size="lg">
                            Food Book
                        </Button>
                    </Link>

                    <div> This is the id inside recipe : id = {id}</div>
                </GridItem>
            </Grid>
            {/* </VStack> */}
        </Layout>
    )
}

interface AllRecipesIdQuery {
    recipes: {
        id: string
    }[]
}
export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: ApolloQueryResult<AllRecipesIdQuery> = await client.query(
        AllRecipesId
    )

    const paths = data.recipes.map((recipe) => ({
        params: {
            id: recipe.id,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const {
        data: { recipe },
    }: ApolloQueryResult<{
        recipe: Recipe
    }> = await client.query(RecipeById(params))

    return {
        props: {
            recipe,
        },
    }
}
