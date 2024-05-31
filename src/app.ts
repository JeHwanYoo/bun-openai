import { Elysia } from 'elysia'

const APP_PORT = Number(process.env.APP_PORT)

new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(APP_PORT, () => {
    console.log(`App is running on http://localhost:${APP_PORT}`)
  })
