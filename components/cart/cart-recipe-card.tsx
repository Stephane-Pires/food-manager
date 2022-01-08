import { useDrag } from 'react-dnd'
import { useRecoilState } from 'recoil'

import useEnumInfo from '@utils/hooks'

import ItemTypes from '@lib/react-dnd/types'
import pickedRecipesState from '@lib/recoil/atoms'

import { IconButton } from '@chakra-ui/button'
import { AttachmentIcon, DeleteIcon } from '@chakra-ui/icons'
import { HStack, Text } from '@chakra-ui/layout'
import { Avatar, AvatarBadge } from '@chakra-ui/react'

function CartRecipeCard({ name, service, count }) {
    const { colorLight } = useEnumInfo(service)

    const [pickedRecipes, setPickedRecipes] = useRecoilState(pickedRecipesState)

    // ugly code to change
    const handleDeleteClick = () => {
        if (count === 1) {
            setPickedRecipes(
                pickedRecipes.filter(
                    (pickedRecipe) => pickedRecipe.name !== name
                )
            )
        } else {
            setPickedRecipes(
                pickedRecipes.map((pickedRecipe) => {
                    if (pickedRecipe.name === name) {
                        return {
                            ...pickedRecipe,
                            count: pickedRecipe.count - 1,
                        }
                    }
                    return pickedRecipe
                })
            )
        }
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RECIPE_CART_CARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <HStack
            justifyContent="space-between"
            borderWidth="2px"
            borderRadius="md"
            padding={4}
            backgroundColor={colorLight}
            width="100%"
            borderColor="gray.800"
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
            ref={drag}
            cursor="move"
        >
            <Avatar
                boxSize="2em"
                icon={<AttachmentIcon fontSize="1.5rem" />}
                bg="gray.200"
            >
                <AvatarBadge bg="blue.400" textColor="white" boxSize="1.25em">
                    {count}
                </AvatarBadge>
            </Avatar>
            <Text
                size="md"
                textOverflow="ellipsis"
                width="10rem"
                whiteSpace="nowrap"
                overflow="hidden"
            >
                {name}
            </Text>
            <IconButton
                size="sm"
                aria-label="Delete picked recipe"
                icon={<DeleteIcon color="red.500" />}
                variant="solid"
                onClick={handleDeleteClick}
            />
        </HStack>
    )
}

export default CartRecipeCard
