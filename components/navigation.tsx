import Link from 'next/link'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export const TITLE = {
    HOME: 'Stack 🚀',
    COOK_BOOK: 'Cook Book 📙',
    ADD_RECIPE: 'Add recipe ➕',
}

function Navigation() {
    return (
        <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
        >
            <BreadcrumbItem>
                <Link href="/" passHref>
                    <BreadcrumbLink>{TITLE.HOME}</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Link href="/cook-book" passHref>
                    <BreadcrumbLink>{TITLE.COOK_BOOK}</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Link href="/add-recipe" passHref>
                    <BreadcrumbLink>{TITLE.ADD_RECIPE}</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Navigation
