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
