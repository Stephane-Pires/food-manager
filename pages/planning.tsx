import Head from 'next/head'

import { Center, Divider, Flex, Text } from '@chakra-ui/layout'

import Layout from '@components/layout'
import { TITLE } from '@components/navigation'
import DropZone from '@components/plannificator/TMP_drop-zone'

export default function Planning() {
    return (
        <Layout>
            <Head>
                <title>{TITLE.PLANNING}</title>
            </Head>
            <Center>
                <Flex direction="column">
                    <Text fontSize="6xl">{TITLE.PLANNING}</Text>
                    <Divider />
                </Flex>
            </Center>
            <Center>
                <DropZone />
            </Center>
        </Layout>
    )
}
