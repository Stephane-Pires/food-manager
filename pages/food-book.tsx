import { ApolloQueryResult } from '@apollo/client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import Layout from '../components/layout'
import { RecipeList } from '../components/recipe'
import { AllRecipes } from '../graphql/queries/recipe'
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
            <RecipeList recipes={recipes} />
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
