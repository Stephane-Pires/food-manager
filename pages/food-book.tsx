import { ApolloQueryResult } from '@apollo/client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import {
    Badge,
    Box,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/layout'

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

function RecipeBadge({ category }) {
    const getBadge = () => {
        switch (category) {
            case 'MEAT':
                return <Badge colorScheme="red">Meat</Badge>

            case 'VEGGY':
                return <Badge colorScheme="green">Veggy</Badge>

            case 'FISH':
                return <Badge colorScheme="blue">Fish</Badge>

            case 'DESSERT':
                return <Badge colorScheme="purple">Dessert</Badge>

            default:
                return <Badge colorScheme="black">Recipe</Badge>
        }
    }

    return getBadge()
}

// interface RecipeCardProps {
//     recipe: Recipe
// }
function RecipeCard({
    recipe: { name, category, url, description },
}: {
    recipe: Recipe
}) {
    return (
        <Box bg="tomato" height="200px" width="200px">
            <VStack>
                <Heading size="md">{name}</Heading>

                <Text size="md">{description}</Text>

                <RecipeBadge category={category} />

                <Link href={url} passHref>
                    <Button variant="outline" size="md">
                        Go to Recipe {name}
                    </Button>
                </Link>
            </VStack>
        </Box>
    )
}

function RecipeList({ recipes }: Data) {
    return (
        <SimpleGrid columns={6} spacing={10}>
            {recipes &&
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
        </SimpleGrid>
    )
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
