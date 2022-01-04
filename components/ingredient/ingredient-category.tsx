import { Box, Center, Heading } from '@chakra-ui/layout'

import IngredientList from './ingredient-list'

function IngredientCategory() {
    return (
        <Box>
            <Center>
                <Heading>Super U</Heading>
            </Center>
            <IngredientList />
            <Center>
                <Heading>Boucher</Heading>
            </Center>
            <IngredientList />
            <Center>
                <Heading>Grand Frais</Heading>
            </Center>
            <IngredientList />
        </Box>
    )
}

export default IngredientCategory
