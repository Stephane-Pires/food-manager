import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
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
                <DndProvider backend={HTML5Backend}>
                    <ChakraProvider>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <Component {...pageProps} />
                    </ChakraProvider>
                </DndProvider>
            </RecoilRoot>
        </ApolloProvider>
    )
}
