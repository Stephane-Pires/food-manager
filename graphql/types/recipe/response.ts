import { objectType } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const CreateRecipeResponse = objectType({
    name: 'CreateRecipeResponse',
    definition(t) {
        t.nonNull.int('code', { description: 'HTTP response code' })
        t.nonNull.boolean('success', {
            description: 'Indicates whether the mutation was successful',
        })
        t.nonNull.string('message', {
            description: 'Human-readable message for the UI',
        })
        t.field('recipe', { type: 'Recipe', description: 'The recipe added' })
    },
})
