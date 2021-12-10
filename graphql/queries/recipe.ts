import { gql } from '@apollo/client'

export const AllRecipes = {
    query: gql`
        query {
            recipes {
                id
                name
                description
                url
                category
                createdAt
                updatedAt
            }
        }
    `,
}

export const AllRecipesId = {
    query: gql`
        query {
            recipes {
                id
            }
        }
    `,
}

export const RecipeById = (params) => ({
    query: gql`
        query Query($recipeId: String!) {
            recipe(id: $recipeId) {
                id
                name
                description
                url
                category
                createdAt
                updatedAt
            }
        }
    `,
    variables: { recipeId: params.id },
})
