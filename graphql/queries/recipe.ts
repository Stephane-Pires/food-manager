import { gql } from '@apollo/client'

const AllRecipes = {
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

export default AllRecipes
