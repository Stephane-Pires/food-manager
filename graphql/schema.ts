// import { GraphQLSchema } from 'graphql'
import { makeSchema } from 'nexus'
import { join } from 'path'

import * as types from './types'

const schema = makeSchema({
    // types of my schema
    types,
    // output the types in this path
    outputs: {
        typegen: join(
            process.cwd(),
            'node_modules',
            '@types',
            'nexus-typegen',
            'index.d.ts'
        ),
        // output the schema for GraphQL in this path
        schema: join(process.cwd(), 'graphql', 'schema.graphql'),
    },
    // output the context for GraphQL in this path
    contextType: {
        export: 'Context',
        module: join(process.cwd(), 'graphql', 'context.ts'),
    },
})
//  as unknown as GraphQLSchema
// FAT WORKAROUND TO DELETE AS SOON AS POSSIBLE
// https://github.com/graphql-nexus/nexus/issues/1019

export default schema
