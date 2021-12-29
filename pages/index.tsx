import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { ApolloQueryResult } from '@apollo/client'

import LINKS from '@graphql/client-queries/link'

import client from '@lib/apollo-client'

import { Center, Divider, Flex, Text } from '@chakra-ui/layout'

import Layout from '@components/layout'
import { TITLE } from '@components/navigation'
import QueryResult from '@components/query-result'
import TechTable from '@components/tech-table'

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
                    <title>{TITLE.HOME}</title>
                </Head>
                <Center>
                    <Flex direction="column">
                        <Text fontSize="6xl">{TITLE.HOME}</Text>
                        <Divider />
                    </Flex>
                </Center>

                <TechTable links={links} />
            </QueryResult>
        </Layout>
    )
}
