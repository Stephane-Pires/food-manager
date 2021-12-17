import { gql } from '@apollo/client'

export const ALL_RECIPES = {
    query: gql`
        query {
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

export const ALL_RECIPES_ID = {
    query: gql`
        query {
            recipes {
                id
            }
        }
    `,
}

export const RECIPE_BY_ID = (params) => ({
    query: gql`
        query Query($recipeId: String!) {
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
    variables: { recipeId: params.id },
})
