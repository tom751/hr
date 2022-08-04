import builder from '@/builder'
import '@/schema/auth'
import '@/schema/user'
import '@/schema/errors'

builder.queryType({})
builder.mutationType({})

export default builder.toSchema({})
