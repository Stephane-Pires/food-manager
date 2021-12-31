import { useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

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
    DrawerOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react'

function Cart() {
    const pickedRecipesCount = useRecoilValue(pickedRecipesCountState)
    const [pickedRecipes, setPickedRecipes] = useRecoilState(pickedRecipesState)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleClickReset = () => {
        setPickedRecipes([])
    }

    return (
        <>
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
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Recipes picked</DrawerHeader>

                    <DrawerBody>
                        {pickedRecipes.map((pickedRecipe) => (
                            <Text key={pickedRecipe}>{pickedRecipe}</Text>
                        ))}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant="outline"
                            mr={3}
                            onClick={handleClickReset}
                        >
                            Reset
                        </Button>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
