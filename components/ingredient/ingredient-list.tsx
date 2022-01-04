import { Divider, VStack } from '@chakra-ui/layout'

import IngredientCard from './ingredient-card'

function IngredientList() {
    return (
        <VStack padding={4} spacing={10}>
            <IngredientCard />
            <Divider />
        </VStack>
    )
}

export default IngredientList
