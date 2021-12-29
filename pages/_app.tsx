import { RecoilRoot } from 'recoil'

import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'

import client from '@lib/apollo-client'

import { ChakraProvider } from '@chakra-ui/react'

import '@styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <ChakraProvider>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </ChakraProvider>
            </RecoilRoot>
        </ApolloProvider>
    )
}
