import { objectType } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const Recipe = objectType({
    name: 'Recipe',
    definition(t) {
        t.string('id', { description: 'Id of a recipe' })
        t.string('name', { description: 'Name of the recipe' })
        t.string('description', {
            description:
                'Description of the recipe, how to do it, is it good, tips & tricks, etc..',
        })
        t.string('url', { description: 'An URL heading to the recipe source' })
        t.string('service', {
            description: 'Represent the service at which the recipe is served',
        })
        t.list.string('diets', {
            description:
                'Represents the diets for which the recipe is compatible',
        })
        t.dateTime('createdAt', {
            description:
                'The date at which the recipe was created inside the database',
        })
        t.dateTime('updatedAt', {
            description: 'The date at which the recipe was last updated',
        })
    },
})
