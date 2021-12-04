// /graphql/types/Link.ts
//  @ts-ignores
import { objectType, extendType } from 'nexus'

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('url')
        t.string('description')
        t.string('imageUrl')
        t.string('category')
    },
})

export const LinksQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('links', {
            type: 'Link',
            // @ts-expect-error  TO DELETE LATER
            resolve(_parent, _args, ctx) {
                return ctx.prisma.link.findMany()
            },
        })
    },
})
