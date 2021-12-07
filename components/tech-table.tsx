import NextLink from 'next/link'
import Image from 'next/image'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'
import { Link } from '.prisma/client'

interface Props {
    links: Link[]
}

function Colmuns() {
    return (
        <Tr>
            <Th>Name</Th>
            <Th>URL</Th>
            <Th>Description</Th>
            <Th>Image URL</Th>
            <Th>Category</Th>
            <Th>Is it cool ?</Th>
        </Tr>
    )
}

function Rows({ links }: Props) {
    return (
        // React don't know how much row there might be
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {links &&
                links.map(
                    ({
                        id,
                        name,
                        url,
                        description,
                        imageUrl,
                        category,
                        isItCool,
                    }) => (
                        <Tr key={id}>
                            <Td>{name}</Td>
                            <Td>
                                <NextLink href={url}>
                                    <a>{url}</a>
                                </NextLink>
                            </Td>
                            <Td>{description}</Td>
                            <Td>
                                <Image
                                    src={`/../public/images/${imageUrl}.png`}
                                    width="100"
                                    height="100"
                                    alt="tech icône"
                                />
                            </Td>
                            <Td>{category}</Td>
                            <Td>{isItCool ? 'Yeap' : 'Nop'}</Td>
                        </Tr>
                    )
                )}
        </>
    )
}

export default function TechTable({ links }: Props) {
    return (
        <Table variant="simple">
            <TableCaption>Tools used inside this project</TableCaption>
            <Thead>
                <Colmuns />
            </Thead>
            <Tbody>
                <Rows links={links} />
            </Tbody>
            <Tfoot>
                <Colmuns />
            </Tfoot>
        </Table>
    )
}
