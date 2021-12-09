import Link from 'next/link'

import { Button } from '@chakra-ui/button'
import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/layout'

import { Recipe } from '.prisma/client'

export function RecipeBadge({ category }) {
    const getBadge = () => {
        switch (category) {
            case 'MEAT':
                return <Badge colorScheme="red">Meat</Badge>

            case 'VEGGY':
                return <Badge colorScheme="green">Veggy</Badge>

            case 'FISH':
                return <Badge colorScheme="blue">Fish</Badge>

            case 'DESSERT':
                return <Badge colorScheme="purple">Dessert</Badge>

            default:
                return <Badge colorScheme="black">Recipe</Badge>
        }
    }

    return getBadge()
}

export function RecipeCard({
    recipe: { name, category, url, description },
}: {
    recipe: Recipe
}) {
    return (
        <Box bg="tomato" height="200px" width="200px">
            <VStack>
                <Heading size="md">{name}</Heading>

                <Text size="md">{description}</Text>

                <RecipeBadge category={category} />

                <Link href={url} passHref>
                    <Button variant="outline" size="md">
                        Go to Recipe {name}
                    </Button>
                </Link>
            </VStack>
        </Box>
    )
}
export function RecipeList({ recipes }: { recipes: Recipe[] }) {
    return (
        <SimpleGrid columns={6} spacing={10}>
            {recipes &&
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
        </SimpleGrid>
    )
}
