import { SimpleGrid } from '@chakra-ui/layout'

import RecipeCard from './recipe-card'
import { Recipe } from '.prisma/client'

function RecipeList({ recipes }: { recipes: Recipe[] }) {
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, xl: 4 }}
            spacing={10}
            marginX="5vw"
            justifyItems="center"
        >
            {recipes &&
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
        </SimpleGrid>
    )
}

export default RecipeList
