import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import {Button} from "./components/Button"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/button', (c) => {
  return c.html(<Button></Button>)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
