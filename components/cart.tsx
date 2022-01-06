import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { useRecoilState, useRecoilValue } from 'recoil'

import ItemTypes from '@lib/react-dnd/types'
import pickedRecipesState from '@lib/recoil/atoms'
import pickedRecipesCountState from '@lib/recoil/selectors'

import { AttachmentIcon } from '@chakra-ui/icons'
import {
    Avatar,
    AvatarBadge,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'

import DropZone from './plannificator/TMP_drop-zone'
import RecipeCartCard from './recipe/recipe-cart-card'

function Cart() {
    const pickedRecipesCount = useRecoilValue(pickedRecipesCountState)
    const [pickedRecipes, setPickedRecipes] = useRecoilState(pickedRecipesState)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleClickReset = () => {
        setPickedRecipes([])
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RECIPE_CART_CARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            <Avatar
                boxSize="3em"
                icon={<AttachmentIcon fontSize="1.5rem" />}
                bg="gray.200"
                onClick={onOpen}
                cursor="pointer"
            >
                <AvatarBadge bg="blue.400" textColor="white" boxSize="2em">
                    {pickedRecipesCount}
                </AvatarBadge>
            </Avatar>

            <Drawer
                trapFocus={false}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Recipes picked</DrawerHeader>

                    <DrawerBody>
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
                        <DropZone />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant="outline"
                            mr={3}
                            onClick={handleClickReset}
                            colorScheme="red"
                        >
                            Reset
                        </Button>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Cart
