import { Diet, Service } from '@prisma/client'

import { reduceEnumItem } from './enums'

function getDietInfo(diet: Diet) {
    const info = {
        color: null,
        label: null,
    }

    switch (diet) {
        case Diet.CARNIVORE:
            info.color = 'red.500'
            info.label = 'Carnivore'
            break
        case Diet.PESCETARIAN:
            info.color = 'blue.500'
            info.label = 'Pescetarian'
            break
        case Diet.VEGAN:
            info.color = 'green.500'
            info.label = 'Vegan'
            break
        case Diet.VEGETARIAN:
            info.color = 'green.800'
            info.label = 'Vegetarian'
            break
        default:
            info.color = 'black'
            info.label = 'No Diet badge available'
    }

    return info
}

function getServiceInfo(service: Service) {
    const info = {
        color: null,
        label: null,
    }

    switch (service) {
        case Service.COCKTAIL:
            info.color = 'red.400'
            info.label = 'Cocktail'
            break
        case Service.STARTER:
            info.color = 'green.400'
            info.label = 'Starter'
            break
        case Service.MAIN:
            info.color = 'blue.400'
            info.label = 'Main'
            break
        case Service.DESSERT:
            info.color = 'purple.400'
            info.label = 'Dessert'
            break
        case Service.APERITIF:
            info.color = 'pink.400'
            info.label = 'Aperitif'
            break
        default:
            info.color = 'black'
            info.label = 'No Service badge available'
    }

    return info
}

function useEnumInfo(enumItem) {
    let info: { color: string; label: string } = {
        color: null,
        label: null,
    }

    info = reduceEnumItem(enumItem, getServiceInfo, getDietInfo, () => ({
        color: 'gray',
        label: 'not managed',
    }))

    return info
}

export default useEnumInfo
