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

export const GET_RECIPE = (id: String) => ({
    query: gql`
        query getRecipe($recipeId: String!) {
            recipe(id: $recipeId) {
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
    variables: { recipeId: id },
})
