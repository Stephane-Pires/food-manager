import { DateTime } from 'luxon'

import Link from 'next/link'

import useEnumInfo from '@utils/hooks'

import {
    Badge,
    Box,
    Heading,
    HStack,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/layout'

import { Recipe } from '.prisma/client'

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

export function RecipeCard({
    recipe: { id, name, service, diets, createdAt },
}: {
    recipe: Recipe
}) {
    const { color } = useEnumInfo(service)
    return (
        <Link href={`/recipe/${id}`} passHref>
            <Box
                height="30vh"
                width="10vw"
                minWidth="270px"
                borderWidth="4px"
                borderRadius="xl"
                cursor="pointer"
                borderColor="transparent"
                bgGradient={`linear(to-b,  ${color} , gray.200)`}
                backgroundClip="border-box"
                borderTopColor={color}
                borderBottomColor="gray.200"
            >
                <VStack
                    height="100%"
                    justifyContent="space-between"
                    backgroundColor="white"
                >
                    <HStack
                        backgroundColor={color}
                        width="100%"
                        justifyContent="center"
                    >
                        <Text textColor="white">Service : </Text>
                        <RecipeServiceBadge service={service} />
                    </HStack>
                    <Heading size="md">{name}</Heading>

                    <VStack>
                        {diets.map((diet) => (
                            <RecipeDietBadge key={diet} diet={diet} />
                        ))}
                    </VStack>

                    <HStack
                        backgroundColor="gray.200"
                        width="100%"
                        justifyContent="center"
                    >
                        <Text size="md">
                            Added the :{' '}
                            {DateTime.fromISO(`${createdAt}`).toLocaleString(
                                DateTime.DATE_MED
                            )}
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Link>
    )
}
export function RecipeList({ recipes }: { recipes: Recipe[] }) {
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
