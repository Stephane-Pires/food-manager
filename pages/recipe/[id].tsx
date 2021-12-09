import { ApolloQueryResult } from '@apollo/client'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { Recipe } from '@prisma/client'

import { Heading, Text, VStack } from '@chakra-ui/layout'

import Layout from '../../components/layout'
import { RecipeBadge } from '../../components/recipe'
import { AllRecipesId, RecipeById } from '../../graphql/queries/recipe'
import client from '../../lib/apollo-client'

export default function RecipeView({
    recipe: { id, name, description, url, category },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <VStack>
                <Head>
                    <title>{name}</title>
                </Head>
                <Heading size="lg">{name}</Heading>
                <RecipeBadge category={category} />
                <Text>{description}</Text>
                <Text>{url}</Text>
                <div> This is the id inside recipe : id = {id}</div>
            </VStack>
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
