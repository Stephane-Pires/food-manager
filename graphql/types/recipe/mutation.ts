import { list, mutationField, nonNull, stringArg } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const createRecipe = mutationField('createRecipe', {
    type: nonNull('CreateRecipeResponse'),
    description: 'Add a "Recipe" to the application',
    args: {
        recipeId: nonNull(stringArg()),
        name: nonNull(stringArg()),
        description: stringArg(),
        service: nonNull('Service'),
        diets: list('Diet'),
    },
    async resolve(_, { recipeId, diets, service, name, description }, context) {
        const newRecipe = {
            id: recipeId,
            url: 'http://somerandomurl',
            diets,
            service,
            name,
            description,
        }

        try {
            await context.prisma.recipe.create({
                data: newRecipe,
            })
            return {
                success: true,
                code: 200,
                message: 'Recipe added succesfully',
                recipe: newRecipe,
            }
        } catch (error) {
            const errorResponse = {
                success: false,
                code: 500,
                recipe: null,
                message: 'Unknown error',
            }

            if (error.code === 'P2002') {
                errorResponse.message = 'The recipe already exist'
            }

            return errorResponse
        }
    },
})
