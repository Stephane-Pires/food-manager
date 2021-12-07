import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
