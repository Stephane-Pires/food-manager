import { GraphQLScalarType } from 'graphql'
import { DateTimeResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

// eslint-disable-next-line import/prefer-default-export
export const DateTime = asNexusMethod(
    new GraphQLScalarType(DateTimeResolver),
    'dateTime'
)
