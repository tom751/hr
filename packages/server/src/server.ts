import { createServer } from '@graphql-yoga/node'
import schema from '@/schema'
import express from 'express'

const server = createServer({
  schema,
})

const app = express()
app.use('/graphql', server)

const port = 4000
app.listen(port, () => console.log(`Running on port http://localhost:${port}/graphql`))
