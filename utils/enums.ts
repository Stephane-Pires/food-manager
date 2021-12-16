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
