// /graphql/types/Link.ts
import { objectType } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const Recipe = objectType({
    name: 'Recipe',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('description')
        t.string('url')
        t.string('service')
        t.list.string('diets')
        t.nonNull.dateTime('createdAt')
        t.nonNull.dateTime('updatedAt')
    },
})
