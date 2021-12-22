import { list, nonNull, queryField } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const getLinks = queryField('links', {
    type: nonNull(list('Link')),
    description: 'Query all items "Link"',
    resolve(_, __, context) {
        return context.prisma.link.findMany()
    },
})
