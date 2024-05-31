import { Elysia } from 'elysia'
import { Mongoose } from './infra/connect.mongo.ts'
import { EchoController } from './echo/echo.controller.ts'
import { html } from '@elysiajs/html'

import 'dotenv'

const APP_PORT = Number(process.env.APP_PORT ?? 3000)

new Elysia()
  .use(html())
  .use(Mongoose(process.env.DB_CONNECTION_STRING as string))
  .use(EchoController({ prefix: '/echo' }))
  .get('/', () => 'Hello Elysia')
  .listen(APP_PORT, () => {
    console.log(`App is running on http://localhost:${APP_PORT}`)
  })
