import { selector } from 'recoil'

import pickedRecipesState from './atoms'

const pickedRecipesCountState = selector({
    key: 'pickedRecipesCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const pickedRecipes = get(pickedRecipesState)

        return pickedRecipes.length
    },
})

export default pickedRecipesCountState
