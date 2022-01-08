import { CloseIcon } from '@chakra-ui/icons'
import { Heading, HStack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'

function CartHeader({ onClose }) {
    return (
        <HStack
            style={{
                top: '0',
            }}
            backgroundColor="white"
            padding={4}
            justifyContent="space-between"
        >
            <Heading size="md">MY CART HEADER</Heading>
            <IconButton
                size="sm"
                variant="outline"
                aria-label="Close cart"
                onClick={onClose}
                icon={<CloseIcon />}
            />
        </HStack>
    )
}

export default CartHeader
