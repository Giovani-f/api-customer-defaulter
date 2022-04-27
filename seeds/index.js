import mongoose from 'mongoose'
import { customerSeed } from './customer.js'

(async function () {
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`, {
    useNewUrlParser: true,
  }).then(async () => {
    await customerSeed()
      .then(() => console.log('Seed concluída com sucesso!'))
  }).then(() => {
    mongoose.disconnect()
  })
})()