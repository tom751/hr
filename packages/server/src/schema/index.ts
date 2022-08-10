import builder from '@/builder'
import '@/schema/auth'
import '@/schema/user'
import '@/schema/errors'
import { lexicographicSortSchema, printSchema } from 'graphql'

builder.queryType({
  authScopes: {
    authenticated: true,
  },
})
builder.mutationType({
  authScopes: {
    authenticated: true,
  },
})

const schema = builder.toSchema({})

export const schemaAsString = printSchema(lexicographicSortSchema(schema))

export default schema
