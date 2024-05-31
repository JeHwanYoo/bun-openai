import { Elysia } from 'elysia'

export const echoController = <Route extends string>(config: {
  prefix: Route
}) =>
  new Elysia({
    name: 'echoController',
    seed: config,
  }).get('/echo/:message', ({ params: { message } }) => message)
