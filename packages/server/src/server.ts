import { Context } from '@/builder'
import schema, { schemaAsString } from '@/schema'
import { createServer } from '@graphql-yoga/node'
import { initContextCache } from '@pothos/core'
import connectRedis from 'connect-redis'
import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import { writeFileSync } from 'fs'
import Redis from 'ioredis'

const server = createServer<Context>({
  schema,
  context: ({ req }) => ({
    ...initContextCache(),
    session: req.session,
  }),
})

const app = express()
const RedisStore = connectRedis(session)
const redisClient = new Redis()
export const sessionCookieName = 'sid'

app.use(
  session({
    store: new RedisStore({ client: redisClient as any }),
    name: sessionCookieName,
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

if (process.env.NODE_ENV === 'development') {
  writeFileSync('./schema.graphql', schemaAsString)
}
