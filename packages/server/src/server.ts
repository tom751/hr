import schema from '@/schema'
import { createServer } from '@graphql-yoga/node'
import { initContextCache } from '@pothos/core'
import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import { Context } from './builder'

const server = createServer<Context>({
  schema,
  context: ({ req }) => ({
    ...initContextCache(),
    session: req.session,
  }),
})

const app = express()
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: 'lax',
    },
  })
)
app.use('/graphql', server)

const port = 4000
app.listen(port, () => console.log(`Running on port http://localhost:${port}/graphql`))
