import builder from '@/builder'
import '@/schema/auth'
import '@/schema/user'
import '@/schema/errors'

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

export default builder.toSchema({})
