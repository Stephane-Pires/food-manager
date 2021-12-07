import { Center, Flex, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { ApolloQueryResult } from '@apollo/client'
import { Button } from '@chakra-ui/button'
import NextLink from 'next/link'
import { Link } from '.prisma/client'
import Layout, { SITE_TITLE } from '../components/layout'
import client from '../lib/apollo-client'
import AllLinks from '../graphql/queries/link'
import TechTable from '../components/tech-table'

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
                <NextLink href="/food-book">
                    <Button variant="outline" size="lg">
                        Food Book
                    </Button>
                </NextLink>
            </Center>
        </Layout>
    )
}
