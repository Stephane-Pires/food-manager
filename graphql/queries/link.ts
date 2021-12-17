import { gql } from '@apollo/client'

const ALL_LINKS = {
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

export default ALL_LINKS
