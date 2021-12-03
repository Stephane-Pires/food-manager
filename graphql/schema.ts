// graphql/schema.ts
import { gql } from 'apollo-server-micro'

// The graphQL schema passed to Apollo Server to define the types
const typeDefs = gql`
    type Link {
        id: Int
        name: String
        description: String
        url: String
        category: String
        imageUrl: String
    }

    type Query {
        links: [Link]!
    }
`

export default typeDefs
