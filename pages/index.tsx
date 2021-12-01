import { Text } from '@chakra-ui/layout'
import { useRecoilState } from 'recoil'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
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
// import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import { ApolloQueryResult, gql } from '@apollo/client'
import Layout, { SITE_TITLE } from '../components/layout'
import userAge from '../lib/user-data'
import client from '../apollo-client'

interface Countries {
    code: string
    name: string
    emoji: string
}

interface Data {
    countries: Countries[]
}

export async function getStaticProps() {
    const { data }: ApolloQueryResult<Data> = await client.query({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `,
    })

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    }
}

export default function Home({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [age, setAge] = useRecoilState(userAge)

    const parse = (val: string): number => Number(val)

    const onChange = (inputAge: string) => {
        setAge(parse(inputAge))
    }

    return (
        <Layout>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <Text fontSize="6xl">Food Manager</Text>
            <Text fontSize="xl">
                This tool is about automating the management of food, frige,
                recipe, scheduling of meal, etc..
            </Text>
            <NumberInput onChange={onChange} value={age}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <Table variant="simple">
                <TableCaption>Countries</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Code</Th>
                        <Th>Name</Th>
                        <Th>Emoji by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {countries &&
                        countries.map(({ code, name, emoji }) => (
                            <Tr key={code}>
                                <Td>{code}</Td>
                                <Td>{name}</Td>
                                <Td>{emoji}</Td>
                            </Tr>
                        ))}
                    )
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Code</Th>
                        <Th>Name</Th>
                        <Th>Emoji by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Layout>
    )
}
