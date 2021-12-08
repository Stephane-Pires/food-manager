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
    },
})

// Could also be a queryField
// https://nexusjs.org/docs/api/query-field
export const RecipesQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('recipes', {
            type: 'Recipe',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.recipe.findMany()
            },
        })
    },
})
