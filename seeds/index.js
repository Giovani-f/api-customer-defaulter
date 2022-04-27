import mongoose from 'mongoose'
import { customerSeed } from './customer.js'
import dotenv from 'dotenv'
dotenv.config({
  path: '.env'
})

(async function() {

  const db = await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`, {
    useNewUrlParser: true,
  })

  async function runSeeds() {
    await customerSeed()
  }

  runSeeds()
    .then(() => console.log('Seed concluída com sucesso!'))
    .catch(error => console.log('error', error))
    .finally(() => db.disconnect())
})()