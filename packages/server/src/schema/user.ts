import builder from '@/builder'
import db from '@/db'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    fullName: t.string({
      resolve: (user) => `${user.firstName} ${user.lastName}`,
    }),
    authenticatorEnabled: t.boolean({
      resolve: (user) => Boolean(user.authenticator),
    }),
  }),
})

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    skipTypeScopes: true,
    resolve: () => {
      return db.user.findMany()
    },
  })
)
