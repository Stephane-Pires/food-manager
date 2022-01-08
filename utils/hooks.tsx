import { Diet, Service } from '@prisma/client'

import { reduceEnumItem } from './enums'
import unreachable from './error-management'

function getDietInfo(diet: Diet) {
    switch (diet) {
        case Diet.CARNIVORE:
            return {
                color: 'red.500',
                colorLight: 'red.100',
                label: 'Carnivore',
            }
        case Diet.PESCETARIAN:
            return {
                color: 'blue.500',
                colorLight: 'blue.100',
                label: 'Pescetarian',
            }
        case Diet.VEGAN:
            return {
                color: 'green.500',
                colorLight: 'green.100',
                label: 'Vegan',
            }
        case Diet.VEGETARIAN:
            return {
                color: 'green.500',
                colorLight: 'green.100',
                label: 'Vegetarian',
            }
        default:
            return unreachable(diet)
    }
}

function getServiceInfo(service: Service) {
    switch (service) {
        case Service.COCKTAIL:
            return {
                color: 'red.400',
                colorLight: 'red.100',
                label: 'Cocktails',
            }
        case Service.STARTER:
            return {
                color: 'green.400',
                colorLight: 'green.100',
                label: 'Starter',
            }
        case Service.MAIN:
            return {
                color: 'blue.400',
                colorLight: 'blue.100',
                label: 'Main',
            }
        case Service.DESSERT:
            return {
                color: 'purple.400',
                colorLight: 'purple.100',
                label: 'Dessert',
            }
        case Service.APERITIF:
            return {
                color: 'pink.400',
                colorLight: 'pink.100',
                label: 'Aperitif',
            }
        default:
            return unreachable(service)
    }
}

function useEnumInfo(enumItem) {
    let info: { color: string; label: string; colorLight: string } = {
        color: null,
        colorLight: null,
        label: null,
    }

    info = reduceEnumItem(enumItem, getServiceInfo, getDietInfo, () => ({
        color: 'gray',
        label: 'not managed',
        colorLight: 'gray.100',
    }))

    return info
}

export default useEnumInfo
