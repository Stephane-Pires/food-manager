import { Center, Text } from '@chakra-ui/layout'
import {
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import Head from 'next/head'
// import Link from 'next/link'
// import { InferGetStaticPropsType } from 'next'
import Layout, { SITE_TITLE } from '../components/layout'

export async function getStaticProps() {
    return {
        props: {},
    }
}

export default function Home() {
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
            <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Center>
                <Button>Add number : + 1</Button>
                <Button>Add number : - 1</Button>
            </Center>
        </Layout>
    )
}
