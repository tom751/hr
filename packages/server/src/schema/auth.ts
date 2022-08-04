import builder from '@/builder'
import db from '@/db'
import { comparePassword } from '@/utils/auth'

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
    resolve: async (_, __, { input }) => {
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

      return user
    },
  })
})
