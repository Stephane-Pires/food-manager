import { Box, VStack } from '@chakra-ui/react'

import RecipeCartCard from '@components/cart/cart-recipe-card'

function CartBody({ pickedRecipes }) {
    return (
        <Box padding={4} backgroundColor="white" overflow="auto" height="100%">
            <VStack spacing={10}>
                {pickedRecipes.map(({ name, service, count }) => (
                    <RecipeCartCard
                        name={name}
                        key={name}
                        count={count}
                        service={service}
                    />
                ))}
            </VStack>
        </Box>
    )
}

export default CartBody
