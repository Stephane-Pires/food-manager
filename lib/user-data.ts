import { atom } from 'recoil'

const userAge = atom({
    key: 'user_age', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
})

export default userAge
