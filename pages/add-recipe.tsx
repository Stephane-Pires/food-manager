import Head from 'next/head'

import { Center, Divider, Flex, Text } from '@chakra-ui/layout'

import AddRecipeForm from '@components/form/add-recipe-form'
import Layout from '@components/layout'
import { TITLE } from '@components/navigation'

export default function AddRecipe() {
    return (
        <Layout>
            <Head>
                <title>{TITLE.ADD_RECIPE}</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">{TITLE.ADD_RECIPE}</Text>
                    <Divider />
                </Flex>
            </Center>
            <Center>
                <AddRecipeForm />
            </Center>
        </Layout>
    )
}
