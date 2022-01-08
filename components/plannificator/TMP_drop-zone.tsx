import { useDrop } from 'react-dnd'

import ItemTypes from '@lib/react-dnd/types'

import { Box } from '@chakra-ui/react'

function DropZone() {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.RECIPE_CART_CARD,
            drop: () => {},
            canDrop: () => true,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        []
    )

    return (
        <Box
            padding={10}
            width="100%"
            heigth="100%"
            backgroundColor={canDrop ? 'gray.100' : 'gray.300'}
            ref={drop}
        >
            {isOver ? 'RELEASE THE DEMON' : 'Drag it here '}
        </Box>
    )
}

export default DropZone
