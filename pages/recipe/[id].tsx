import { ApolloQueryResult } from '@apollo/client'
import { DateTime } from 'Luxon'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Recipe } from '@prisma/client'

import { Button } from '@chakra-ui/button'
import {
    Center,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/layout'

import Layout from '../../components/layout'
import { RecipeBadge } from '../../components/recipe'
import { AllRecipesId, RecipeById } from '../../graphql/queries/recipe'
import client from '../../lib/apollo-client'

export default function RecipeView({
    recipe: { id, name, description, url, category, createdAt, updatedAt },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
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
                        src={`/../public/images/recipe/${id}.jpg`}
                        alt="recipe"
                        layout="fill"
                    />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <VStack>
                        <Heading size="lg">{name}</Heading>
                        <RecipeBadge category={category} />
                    </VStack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <VStack margin="1vw">
                        <Text>{description}</Text>
                        <Text>
                            Created at :{' '}
                            {DateTime.fromJSDate(
                                new Date(createdAt)
                            ).toLocaleString(DateTime.DATE_MED)}
                        </Text>
                        <Text>
                            Last updated at :{' '}
                            {DateTime.fromJSDate(
                                new Date(updatedAt)
                            ).toLocaleString(DateTime.DATE_MED)}
                        </Text>
                        <Link href={url} passHref>
                            <Button variant="outline" size="lg">
                                Go to source recipe
                            </Button>
                        </Link>
                    </VStack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>
                        <Link href="/food-book" passHref>
                            <Button variant="outline" size="lg">
                                Food Book
                            </Button>
                        </Link>
                    </Center>
                </GridItem>
            </Grid>
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
