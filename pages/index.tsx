import { ApolloQueryResult } from '@apollo/client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import Layout, { SITE_TITLE } from '../components/layout'
import TechTable from '../components/tech-table'
import AllLinks from '../graphql/queries/link'
import client from '../lib/apollo-client'
import { Link } from '.prisma/client'

interface Data {
    links: Link[]
}

export async function getStaticProps() {
    const { data }: ApolloQueryResult<Data> = await client.query(AllLinks)

    return {
        props: {
            links: data.links,
        },
    }
}

export default function Home({
    links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">Food Manager</Text>
                    <Text fontSize="xl">Tech stack of the Food Manager</Text>
                </Flex>
            </Center>

            <TechTable links={links} />

            <Center>
                <NextLink href="/food-book" passHref>
                    <Button variant="outline" size="lg">
                        Food Book
                    </Button>
                </NextLink>
            </Center>
        </Layout>
    )
}
