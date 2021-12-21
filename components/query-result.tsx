import { ApolloError } from '@apollo/client'

import { Flex, Square } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'

// TODO Find a proper Type for "children"
interface Props {
    loading: boolean
    error: ApolloError
    data: Object
    children: any
}

/**
 * Query Results conditionally renders Apollo query states:
 * loading, error or its children when data is ready
 */
function QueryResult({ loading, error, data, children }: Props) {
    if (error) {
        return <p>ERROR: {error.message}</p>
    }
    if (loading) {
        return (
            <Flex
                color="white"
                align="center"
                justify="center"
                h="100vh"
                w="1OOvw"
            >
                <Square size="150px">
                    <Spinner
                        size="xl"
                        thickness="2px"
                        speed="0.70s"
                        emptyColor="gray.200"
                        color="blue.500"
                    />
                </Square>
            </Flex>
        )
    }
    if (!data) {
        return <p>Nothing to show...</p>
    }
    if (data) {
        return children
    }
}

export default QueryResult
