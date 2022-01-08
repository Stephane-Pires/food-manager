import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import pickedRecipesState from '@lib/recoil/atoms'

import { Flex } from '@chakra-ui/layout'
import { Slide } from '@chakra-ui/react'

import CartBody from './cart-body'
import CartFooter from './cart-footer'
import CartHeader from './cart-header'

function CartSlider({ isOpen, onClose }) {
    const [pickedRecipes, setPickedRecipes] = useRecoilState(pickedRecipesState)

    const handleClickReset = useCallback(() => {
        setPickedRecipes([])
    }, [setPickedRecipes])

    return (
        <Slide
            in={isOpen}
            style={{
                width: '20%',
                minWidth: '20rem',
                zIndex: 10,
                boxShadow: 'var(--chakra-shadows-lg)',
            }}
        >
            <Flex height="100%" direction="column">
                <CartHeader onClose={onClose} />
                <CartBody pickedRecipes={pickedRecipes} />
                <CartFooter onClose={onClose} onReset={handleClickReset} />
            </Flex>
        </Slide>
    )
}

export default CartSlider
