import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import client from '../lib/apollo-client'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    )
}
