import { list, nonNull, queryField, stringArg } from 'nexus'

export const getRecipes = queryField('recipes', {
    type: nonNull(list('Recipe')),
    description: 'Query all items "Recipe"',
    resolve(_, __, context) {
        return context.prisma.recipe.findMany()
    },
})

export const getRecipe = queryField('recipe', {
    type: nonNull('Recipe'),
    description:
        'Query an item "Recipe" with the help of recipeId has argument',
    args: {
        recipeId: nonNull(stringArg()),
    },
    resolve(_, { recipeId }, context) {
        const recipe = context.prisma.recipe.findUnique({
            where: {
                id: recipeId,
            },
        })
        return recipe
    },
})
