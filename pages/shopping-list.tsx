import Head from 'next/head'

import { Center, Divider, Flex, Text, VStack } from '@chakra-ui/layout'

import IngredientCategory from '@components/ingredient/ingredient-category'
import Layout from '@components/layout'
import { TITLE } from '@components/navigation'

export default function ShoppingList() {
    return (
        <Layout>
            <Head>
                <title>{TITLE.SHOPPING_LIST}</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">{TITLE.SHOPPING_LIST}</Text>
                    <Divider />
                </Flex>
            </Center>
            <Center>
                <VStack>
                    <IngredientCategory />
                </VStack>
            </Center>
        </Layout>
    )
}
