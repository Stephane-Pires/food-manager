import Head from 'next/head'

import { HStack, VStack } from '@chakra-ui/layout'

import Cart from './cart'
import Navigation from './navigation'

export const SITE_TITLE = 'Food Manager 🍫'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        SITE_TITLE
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={SITE_TITLE} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>
                <HStack justifyContent="space-between" margin="1em">
                    <Navigation />
                    <Cart />
                </HStack>
                <VStack alignItems="stretch" spacing={10}>
                    {children}
                </VStack>
            </main>
        </>
    )
}
