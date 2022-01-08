import { useRecoilValue } from 'recoil'

import pickedRecipesCountState from '@lib/recoil/selectors'

import { AttachmentIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, useDisclosure } from '@chakra-ui/react'

import CartSlider from './cart-slider'

function CartAvatar() {
    const pickedRecipesCount = useRecoilValue(pickedRecipesCountState)

    const { isOpen, onOpen, onClose } = useDisclosure()

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
            <CartSlider isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default CartAvatar
