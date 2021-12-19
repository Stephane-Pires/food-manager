import { gql } from '@apollo/client'

const LINKS = {
    query: gql`
        query getLinks {
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

export default LINKS
