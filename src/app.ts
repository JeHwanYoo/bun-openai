import { Elysia } from 'elysia'
import { echoController } from './controllers/echo.controller.ts'

const APP_PORT = Number(process.env.APP_PORT ?? 3000)

new Elysia()
  .use(echoController({ prefix: '/echo' }))
  .get('/', () => 'Hello Elysia')
  .listen(APP_PORT, () => {
    console.log(`App is running on http://localhost:${APP_PORT}`)
  })
