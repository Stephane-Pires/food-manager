// /graphql/types/Link.ts
import { extendType, objectType } from 'nexus'

export const Recipe = objectType({
    name: 'Recipe',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('description')
        t.string('url')
        t.string('category')
        t.string('createdAt')
        t.string('updatedAt')
    },
})

// Could also be a queryField
// https://nexusjs.org/docs/api/query-field
export const RecipesQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('recipes', {
            type: 'Recipe',
            // @ts-expect-error  TO DELETE LATER
            resolve(_parent, _args, ctx) {
                return ctx.prisma.recipe.findMany()
            },
        })
    },
})
