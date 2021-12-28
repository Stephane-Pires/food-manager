import Link from 'next/link'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

function Navigation() {
    return (
        <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
        >
            <BreadcrumbItem>
                <Link href="/" passHref>
                    <BreadcrumbLink>Stack 🚀</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Link href="/cook-book" passHref>
                    <BreadcrumbLink>Cook Book 📙</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Link href="/add-recipe" passHref>
                    <BreadcrumbLink>Add recipe ➕</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Navigation
