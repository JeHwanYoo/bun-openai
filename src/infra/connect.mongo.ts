import * as mongoose from 'mongoose'
import { Elysia } from 'elysia'

export const Mongoose = async (connectString: string) =>
  new Elysia().onBeforeHandle(async () => {
    await mongoose.connect(connectString)
  })
