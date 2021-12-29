import { atom } from 'recoil'

const plannedRecipesCountState = atom({
    key: 'plannedRecipesCountState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
})

export default plannedRecipesCountState
