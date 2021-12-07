import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/layout'

import Layout from '../components/layout'

export default function FoodBook() {
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

            <SimpleGrid columns={6} spacing={10}>
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
                <Box bg="tomato" height="200px" width="200px" />
            </SimpleGrid>

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
