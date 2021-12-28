import Head from 'next/head'

import { Center, Flex, Text } from '@chakra-ui/layout'

import AddRecipeForm from '@components/form/add-recipe-form'
import Layout from '@components/layout'

export default function AddRecipe() {
    return (
        <Layout>
            <Head>
                <title>Cook Book</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">Add Recipe</Text>
                </Flex>
            </Center>
            <Center>
                <AddRecipeForm />
            </Center>
        </Layout>
    )
}
