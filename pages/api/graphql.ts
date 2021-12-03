import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import typeDefs from '../../graphql/schema'
import resolvers from '../../graphql/resolvers'
import { createContext } from '../../graphql/context'

const cors = Cors()

// Apollo server setup
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
})

const startServer = apolloServer.start()

// Cors, to permit redirection to apollo web client
export default cors(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)

    // A retirer
    return res
})

export const config = {
    api: {
        bodyParser: false,
    },
}
