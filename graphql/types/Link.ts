// /graphql/types/Link.ts
import {
    extendType,
    /* queryField */
    objectType,
} from 'nexus'

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

// Could also be a queryField
// https://nexusjs.org/docs/api/query-field
export const LinksQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('links', {
            type: 'Link',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.link.findMany()
            },
        })
    },
})
