import { Elysia } from 'elysia'
import { EchoService } from './echo.service.ts'

export const echoController = <Route extends string>(config: {
  prefix: Route
}) =>
  new Elysia({
    name: 'echoController',
    seed: config,
  })
    .decorate('Service', new EchoService())
    .get('/echo/:message', ({ params: { message }, Service }) =>
      Service.echo(message),
    )
