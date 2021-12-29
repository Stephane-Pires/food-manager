import { useRecoilState } from 'recoil'

import plannedRecipesCountState from '@lib/recoil/atoms'

import { AttachmentIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge } from '@chakra-ui/react'

function Cart() {
    const [plannedRecipesCount] = useRecoilState(plannedRecipesCountState)

    return (
        <Avatar
            boxSize="3em"
            icon={<AttachmentIcon fontSize="1.5rem" />}
            bg="gray.200"
        >
            <AvatarBadge bg="blue.400" textColor="white" boxSize="2em">
                {plannedRecipesCount}
            </AvatarBadge>
        </Avatar>
    )
}

export default Cart
