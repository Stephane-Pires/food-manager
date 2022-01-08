import { HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

function CartFooter({ onClose, onReset }) {
    return (
        <HStack
            style={{
                bottom: '0',
            }}
            width="100%"
            padding={4}
            backgroundColor="white"
            justifyContent="flex-end"
        >
            <Button
                variant="outline"
                mr={3}
                onClick={onReset}
                colorScheme="red"
            >
                Reset
            </Button>
            <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
            </Button>
        </HStack>
    )
}

export default CartFooter
