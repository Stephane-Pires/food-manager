import { Center, Flex, Text } from '@chakra-ui/layout'
import NextLink from 'next/link'
import Image from 'next/image'

// import { useRecoilState } from 'recoil'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { ApolloQueryResult, gql } from '@apollo/client'
import { Link } from '.prisma/client'
import Layout, { SITE_TITLE } from '../components/layout'
// import userAge from '../lib/user-data'
import client from '../lib/apollo-client'

interface Data {
    links: Link[]
}

const AllLinksQuery = {
    query: gql`
        query {
            links {
                id
                name
                url
                description
                imageUrl
                category
            }
        }
    `,
}

export async function getStaticProps() {
    const { data }: ApolloQueryResult<Data> = await client.query(AllLinksQuery)

    return {
        props: {
            links: data.links,
        },
    }
}

export default function Home({
    links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    // const [age, setAge] = useRecoilState(userAge)

    // const parse = (val: string): number => Number(val)

    // const onChange = (inputAge: string) => {
    //     setAge(parse(inputAge))
    // }

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

            <Table variant="simple">
                <TableCaption>Tools used inside this project</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>URL</Th>
                        <Th>Description</Th>
                        <Th>Image URL</Th>
                        <Th>Category</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {links &&
                        links.map(
                            ({
                                id,
                                name,
                                url,
                                description,
                                imageUrl,
                                category,
                            }) => (
                                <Tr key={id}>
                                    <Td>{name}</Td>
                                    <Td>
                                        <NextLink href={url}>
                                            <a>{url}</a>
                                        </NextLink>
                                    </Td>
                                    <Td>{description}</Td>
                                    <Td>
                                        <Image
                                            src={`/../public/images/${imageUrl}.png`}
                                            width="100"
                                            height="100"
                                            alt="tech icône"
                                        />
                                    </Td>
                                    <Td>{category}</Td>
                                </Tr>
                            )
                        )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Name</Th>
                        <Th>URL</Th>
                        <Th>Description</Th>
                        <Th>Image URL</Th>
                        <Th>Category</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Layout>
    )
}
