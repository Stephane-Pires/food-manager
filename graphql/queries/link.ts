import { gql } from '@apollo/client'

const AllLinks = {
    query: gql`
        query {
            links {
                id
                name
                url
                description
                category
                isItCool
            }
        }
    `,
}

export default AllLinks
