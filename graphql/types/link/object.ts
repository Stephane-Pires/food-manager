// /graphql/types/Link.ts
import {
    /* queryField */
    objectType,
} from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('url')
        t.string('description')
        t.string('category')
        t.boolean('isItCool')
    },
})
