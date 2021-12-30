import useEnumInfo from '@utils/hooks'

import { Badge } from '@chakra-ui/layout'

export function RecipeServiceBadge({ service }) {
    const { color, label } = useEnumInfo(service)

    return (
        <Badge textColor="white" backgroundColor={color}>
            {label}
        </Badge>
    )
}

export function RecipeDietBadge({ diet }) {
    const { color, label } = useEnumInfo(diet)

    return (
        <Badge textColor="white" backgroundColor={color}>
            {label}
        </Badge>
    )
}
