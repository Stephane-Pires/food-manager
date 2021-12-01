import { Text } from '@chakra-ui/layout'
import { useRecoilState } from 'recoil'
import {
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
import userAge from '../lib/user-data'

export async function getStaticProps() {
    return {
        props: {},
    }
}

export default function Home() {
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
        </Layout>
    )
}
