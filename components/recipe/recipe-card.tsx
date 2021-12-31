import { DateTime } from 'luxon'
import { useRecoilState } from 'recoil'

import Link from 'next/link'

import useEnumInfo from '@utils/hooks'

import pickedRecipesState from '@lib/recoil/atoms'

import { Button } from '@chakra-ui/button'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout'

import { RecipeDietBadge, RecipeServiceBadge } from './recipe-badge'
import { Recipe } from '.prisma/client'

function RecipeCard({
    recipe: { id, name, service, diets, createdAt },
}: {
    recipe: Recipe
}) {
    const { color } = useEnumInfo(service)
    const [pickedRecipes, setPickedRecipes] = useRecoilState(pickedRecipesState)

    const handleClick = () => {
        setPickedRecipes(pickedRecipes.concat([name]))
    }

    return (
        <Box
            height="30vh"
            width="10vw"
            minWidth="270px"
            borderWidth="4px"
            borderRadius="xl"
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
                <Link href={`/recipe/${id}`} passHref>
                    <HStack
                        backgroundColor={color}
                        width="100%"
                        justifyContent="center"
                        cursor="pointer"
                    >
                        <Text textColor="white">Service : </Text>
                        <RecipeServiceBadge service={service} />
                    </HStack>
                </Link>
                <Heading size="md">{name}</Heading>

                <VStack>
                    {diets.map((diet) => (
                        <RecipeDietBadge key={diet} diet={diet} />
                    ))}
                </VStack>
                <Button onClick={handleClick}>➕</Button>

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
    )
}

export default RecipeCard
