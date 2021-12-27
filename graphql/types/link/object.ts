import { objectType } from 'nexus'
import { Link as nexusPrismaLink } from 'nexus-prisma'

// eslint-disable-next-line import/prefer-default-export
export const Link = objectType({
    name: nexusPrismaLink.$name,
    description: nexusPrismaLink.$description,
    definition(t) {
        t.field(nexusPrismaLink.id)
        t.field(nexusPrismaLink.name)
        t.field(nexusPrismaLink.url)
        t.field(nexusPrismaLink.description)
        t.field(nexusPrismaLink.category)
        t.field(nexusPrismaLink.isItCool)
    },
})
