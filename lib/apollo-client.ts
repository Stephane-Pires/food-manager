import { ApolloClient, InMemoryCache } from '@apollo/client'

// Instance of Apollo client, connected to my apollo server
const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
})

export default client
