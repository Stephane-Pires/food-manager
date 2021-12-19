// /graphql/types/Link.ts
import {
    extendType,
    /* queryField */
} from 'nexus'

// Could also be a queryField
// https://nexusjs.org/docs/api/query-field
// eslint-disable-next-line import/prefer-default-export
export const LinksQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('links', {
            type: 'Link',
            resolve(_, __, ctx) {
                return ctx.prisma.link.findMany()
            },
        })
    },
})
