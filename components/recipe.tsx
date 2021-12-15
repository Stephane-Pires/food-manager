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

import { Diet, Recipe, Service } from '.prisma/client'

export function RecipeServiceBadge({ service }) {
    const getBadge = () => {
        switch (service) {
            case Service.COCKTAIL:
                return <Badge colorScheme="red">Cocktail</Badge>

            case Service.STARTER:
                return <Badge colorScheme="green">Starter</Badge>

            case Service.MAIN:
                return <Badge colorScheme="blue">Main</Badge>

            case Service.DESSERT:
                return <Badge colorScheme="purple">Dessert</Badge>

            case Service.APERITIF:
                return <Badge colorScheme="purple">Aperitif</Badge>

            default:
                return (
                    <Badge colorScheme="black">
                        No Service badge available
                    </Badge>
                )
        }
    }

    return getBadge()
}

export function RecipeDietBadge({ diet }) {
    const getBadge = () => {
        switch (diet) {
            case Diet.CARNIVORE:
                return <Badge colorScheme="red">Carnivore</Badge>

            case Diet.PESCETARIAN:
                return <Badge colorScheme="blue">Pescetarian</Badge>

            case Diet.VEGAN:
                return <Badge colorScheme="green">Vegan</Badge>

            case Diet.VEGETARIAN:
                return <Badge colorScheme="dark green">Vegetarian</Badge>

            default:
                return (
                    <Badge colorScheme="black">No Diet badge available</Badge>
                )
        }
    }

    return getBadge()
}

export function RecipeCard({
    recipe: { id, name, service, diets, description },
}: {
    recipe: Recipe
}) {
    return (
        <Box bg="tomato" height="200px" width="200px">
            <VStack>
                <Heading size="md">{name}</Heading>

                <Text size="md">{description}</Text>

                <RecipeServiceBadge service={service} />

                {diets.map((diet) => (
                    <RecipeDietBadge key={diet} diet={diet} />
                ))}

                <Link href={`/recipe/${id}`} passHref>
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
