import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import AddRecipeForm from '@components/add-recipe-form'
import Layout from '@components/layout'

export default function AddRecipe() {
    return (
        <Layout>
            <Head>
                <title>Food Book</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">Add Recipe</Text>
                </Flex>
            </Center>
            <Center>
                <AddRecipeForm />
            </Center>
            <Center>
                <Flex direction="column">
                    <Link href="/food-book" passHref>
                        <Button variant="outline" size="lg">
                            Food Book
                        </Button>
                    </Link>
                </Flex>
            </Center>
        </Layout>
    )
}
