// /graphql/types/Link.ts
import { extendType, nonNull, stringArg } from 'nexus'

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
export const RecipeQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('recipe', {
            type: 'Recipe',
            args: { recipeId: nonNull(stringArg()) },
            resolve(_, { recipeId }, ctx) {
                const recipe = ctx.prisma.recipe.findUnique({
                    where: {
                        id: recipeId,
                    },
                })
                return recipe
            },
        })
    },
})
