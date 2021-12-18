// /graphql/types/Link.ts
import { extendType, nonNull, objectType, stringArg } from 'nexus'

export const Recipe = objectType({
    name: 'Recipe',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('description')
        t.string('url')
        t.string('service')
        t.list.string('diets')
        t.nonNull.dateTime('createdAt')
        t.nonNull.dateTime('updatedAt')
    },
})

// Could also be a queryField
// https://nexusjs.org/docs/api/query-field
export const RecipesQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('recipes', {
            type: 'Recipe',
            resolve(_, __, ctx) {
                return ctx.prisma.recipe.findMany()
            },
        })
    },
})

// get Unique Recipe
export const RecipeByIDQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('recipe', {
            type: 'Recipe',
            args: { id: nonNull(stringArg()) },
            resolve(_, args, ctx) {
                const recipe = ctx.prisma.recipe.findUnique({
                    where: {
                        id: args.id,
                    },
                })
                return recipe
            },
        })
    },
})
