import db from '@/db'
import SchemaBuilder from '@pothos/core'
import ErrorsPlugin from '@pothos/plugin-errors'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import ValidationPlugin from '@pothos/plugin-validation'
import { Request, Response } from 'express'
import { Session } from 'express-session'

interface HrSession extends Session {
  userId: string
}

export interface Context {
  req: Request
  res: Response
  session: HrSession
}

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  DefaultInputFieldRequiredness: true
  Context: Context
  AuthScopes: {
    authenticated: boolean
  }
}>({
  plugins: [ScopeAuthPlugin, ErrorsPlugin, PrismaPlugin, ValidationPlugin],
  prisma: {
    client: db,
  },
  defaultInputFieldRequiredness: true,
  errorOptions: {
    defaultTypes: [Error],
  },
  authScopes: (context) => ({
    authenticated: Boolean(context.session.userId),
  }),
})

export default builder
