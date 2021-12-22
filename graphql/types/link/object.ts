import { objectType } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.string('id', { description: 'The id of a link' })
        t.string('name', { description: 'Name of the link' })
        t.string('url', {
            description: 'The main page of the site related to the link',
        })
        t.string('description', { description: 'My opinion about the Techno' })
        t.string('category', { description: 'FULLSTACK, FRONTEND, BACKEND' })
        t.boolean('isItCool', {
            description: 'Do i found the techno cool to use',
        })
    },
})
