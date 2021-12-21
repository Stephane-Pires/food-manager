import { ApolloQueryResult } from '@apollo/client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'

import { Button } from '@chakra-ui/button'
import { Center, Flex, Text } from '@chakra-ui/layout'

import Layout, { SITE_TITLE } from '../components/layout'
import QueryResult from '../components/query-result'
import TechTable from '../components/tech-table'
import LINKS from '../graphql/client-queries/link'
import client from '../lib/apollo-client'
import { Link } from '.prisma/client'

interface Data {
    links: Link[]
}

export async function getStaticProps() {
    const linksReponse: ApolloQueryResult<Data> = await client.query(LINKS)

    return {
        props: {
            linksReponse,
        },
    }
}

export default function Home({
    linksReponse: {
        data: { links },
        loading,
        error,
    },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={links}>
                <Head>
                    <title>{SITE_TITLE}</title>
                </Head>
                <Center>
                    <Flex direction="column">
                        <Text fontSize="6xl">Food Manager</Text>
                        <Text fontSize="xl">
                            Tech stack of the Food Manager
                        </Text>
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
            </QueryResult>
        </Layout>
    )
}
