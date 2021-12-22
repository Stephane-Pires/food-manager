import { gql } from '@apollo/client'

export const RECIPES = {
    query: gql`
        query getRecipes {
            recipes {
                id
                name
                description
                url
                service
                diets
                createdAt
                updatedAt
            }
        }
    `,
}

export const RECIPES_ID = {
    query: gql`
        query getRecipesId {
            recipes {
                id
            }
        }
    `,
}

export const RECIPE = (recipeId: String) => ({
    query: gql`
        query getRecipe($recipeId: String!) {
            recipe(recipeId: $recipeId) {
                id
                name
                description
                url
                diets
                service
                createdAt
                updatedAt
            }
        }
    `,
    variables: { recipeId },
})
