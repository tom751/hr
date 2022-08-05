import builder from '@/builder'
import db from '@/db'
import { sessionCookieName } from '@/server'
import { comparePassword } from '@/utils/auth'

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    nullable: true,
    resolve(_, __, ___, { session }) {
      if (!session.userId) {
        return null
      }

      return db.user.findFirstOrThrow({
        where: {
          id: session.userId,
        },
      })
    },
  })
)

const loginInput = builder.inputType('LoginInput', {
  fields: (t) => ({
    email: t.string({
      required: true,
      validate: {
        email: [true, { message: 'Invalid email' }],
      },
    }),
    password: t.string({ required: true }),
  }),
})

builder.mutationField('login', (t) => {
  return t.prismaField({
    type: 'User',
    args: {
      input: t.arg({ type: loginInput }),
    },
    errors: {
      types: [Error],
    },
    skipTypeScopes: true,
    resolve: async (_, __, { input }, { session }) => {
      const user = await db.user.findFirstOrThrow({
        where: {
          email: {
            equals: input.email,
          },
        },
      })

      const pwCheck = await comparePassword(user.password, input.password)
      if (!pwCheck) {
        throw new Error('Invalid email or password')
      }

      session.userId = user.id

      return user
    },
  })
})

builder.mutationField('logout', (t) => {
  return t.boolean({
    resolve: (_, __, { session, res }) => {
      session.destroy(() => {})
      res.clearCookie(sessionCookieName)
      return true
    },
  })
})
