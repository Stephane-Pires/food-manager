import { AttachmentIcon } from '@chakra-ui/icons'
import { HStack, Text } from '@chakra-ui/layout'
import { Avatar, AvatarBadge, Checkbox } from '@chakra-ui/react'

function IngredientCard() {
    return (
        <HStack
            height="10vh"
            width="30vw"
            backgroundColor="gray.100"
            borderRadius="xl"
            padding={4}
            justifyContent="space-around"
        >
            <Avatar
                boxSize="2em"
                icon={<AttachmentIcon fontSize="1.5rem" />}
                bg="gray.200"
            >
                <AvatarBadge
                    bg="blue.400"
                    textColor="white"
                    boxSize="1.25em"
                    borderWidth="0.1em"
                >
                    0
                </AvatarBadge>
            </Avatar>

            <Text> An ingredient </Text>
            <Text> Quantity </Text>
            <Text> Unit </Text>
            <Checkbox borderColor="gray.400" />
        </HStack>
    )
}

export default IngredientCard
