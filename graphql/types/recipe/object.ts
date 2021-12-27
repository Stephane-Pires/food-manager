import { objectType } from 'nexus'
import { Recipe as nexusPrismaRecipe } from 'nexus-prisma'

// eslint-disable-next-line import/prefer-default-export
export const Recipe = objectType({
    name: nexusPrismaRecipe.$name,
    description: nexusPrismaRecipe.$description,
    definition(t) {
        t.field(nexusPrismaRecipe.id)
        t.field(nexusPrismaRecipe.name)
        t.field(nexusPrismaRecipe.description)
        t.field(nexusPrismaRecipe.url)
        t.field(nexusPrismaRecipe.service)
        t.field(nexusPrismaRecipe.diets)
        t.field(nexusPrismaRecipe.updatedAt)
        t.field(nexusPrismaRecipe.createdAt)
    },
})
