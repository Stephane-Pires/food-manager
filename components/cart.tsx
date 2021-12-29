import { AttachmentIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge } from '@chakra-ui/react'

function Cart() {
    return (
        <Avatar
            boxSize="3em"
            icon={<AttachmentIcon fontSize="1.5rem" />}
            bg="gray.200"
        >
            <AvatarBadge bg="blue.400" textColor="white" boxSize="2em">
                0
            </AvatarBadge>
        </Avatar>
    )
}

export default Cart
