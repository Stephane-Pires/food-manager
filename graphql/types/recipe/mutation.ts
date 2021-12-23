import { enumType, list, mutationField, nonNull, stringArg } from 'nexus'

const Service = enumType({
    name: 'Service',
    members: ['APERITIF', 'STARTER', 'MAIN', 'DESSERT', 'COCKTAIL'],
    description: 'Represent the service available in  the application',
})

const Diet = enumType({
    name: 'Diet',
    members: ['VEGAN', 'VEGETARIAN', 'CARNIVORE', 'PESCETARIAN'],
    description: 'Represent the diet available in  the application',
})

// eslint-disable-next-line import/prefer-default-export
export const createRecipe = mutationField('createRecipe', {
    type: nonNull('CreateRecipeResponse'),
    description: 'Add a "Recipe" to the application',
    args: {
        recipeId: nonNull(stringArg()),
        name: nonNull(stringArg()),
        description: stringArg(),
        service: nonNull(Service),
        diets: list(Diet),
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
            console.log('error', error)
            return {
                success: false,
                code: 404,
                message: 'Unable to add recipe',
                recipe: null,
            }
        }
    },
})
