import { atom } from 'recoil'

const pickedRecipesState = atom({
    key: 'pickedRecipesState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
})

export default pickedRecipesState
