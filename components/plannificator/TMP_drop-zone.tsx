import { useDrag, useDrop } from 'react-dnd'

import ItemTypes from '@lib/react-dnd/types'

import { Box, VStack } from '@chakra-ui/react'

function DropZone() {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.RECIPE_CART_CARD,
            drop: () => {
                console.log('drop is working bitchies')
            },
            canDrop: () => true,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        []
    )

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RECIPE_CART_CARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    console.log('isOver', isOver)

    return (
        <VStack>
            <Box
                padding={10}
                width="100%"
                heigth="100%"
                backgroundColor={canDrop ? 'gray.100' : 'gray.300'}
            >
                <div ref={drop}>
                    {isOver ? 'RELEASE THE DEMON' : 'Drag it here '}
                </div>
            </Box>
            <Box
                ref={drag}
                padding={10}
                width="30%"
                style={{
                    opacity: isDragging ? 0.5 : 1,
                }}
            >
                A DEMON
            </Box>
        </VStack>
    )
}

export default DropZone
