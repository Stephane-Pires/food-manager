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
            }
        }
    `,
    variables: { recipeId: params.id },
})
