import './db/db.js'
import express from 'express'
import { routes } from './routes.js'

export const app = express()

app.use(express.json())
app.use(routes)

//catch all
app.use((err, req, res, next) => {
  res.status(err.send || 500)
  res.json({ error: err.message })
})