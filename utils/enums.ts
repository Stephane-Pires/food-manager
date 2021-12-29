import { Diet, Service, Stack } from '@prisma/client'

export enum EnumKey {
    SERVICE = 'Service',
    DIET = 'Diet',
    STACK = 'Stack',
}

export function getEnumFromEnumKey(enumKey: EnumKey) {
    switch (enumKey) {
        case EnumKey.SERVICE:
            return Service
        case EnumKey.DIET:
            return Diet
        case EnumKey.STACK:
            return Stack
        default:
            return 'Return a proper error :/'
    }
}

// Predicates
export function isService(enumItem: any) {
    return Object.values(Service).includes(enumItem)
}

export function isDiet(enumItem: any) {
    return Object.values(Diet).includes(enumItem)
}

export function isStack(enumItem: any) {
    return Object.values(Stack).includes(enumItem)
}

// Reducer
export function reduceEnumItem(enumItem, ifService, ifDiet, ifStack) {
    if (isService(enumItem)) {
        return ifService(enumItem)
    }
    if (isDiet(enumItem)) {
        return ifDiet(enumItem)
    }
    if (isStack(enumItem)) {
        return ifStack(enumItem)
    }

    return 'Return a proper error :/'
}
